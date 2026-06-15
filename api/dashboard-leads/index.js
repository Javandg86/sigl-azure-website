import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"

function parseConnectionString(conn) {
  const parts = Object.fromEntries(conn.split(";").filter(Boolean).map((part) => {
    const index = part.indexOf("=")
    return [part.slice(0, index), part.slice(index + 1)]
  }))
  return { accountName: parts.AccountName, accountKey: parts.AccountKey, tableEndpoint: parts.TableEndpoint }
}

export default async function contextHandler(context, req) {
  try {
    const conn = process.env.PULSE_STORAGE_CONNECTION_STRING
    const { accountName, accountKey, tableEndpoint } = parseConnectionString(conn)
    const credential = new AzureNamedKeyCredential(accountName, accountKey)
    const table = new TableClient(tableEndpoint, "PulseLeads", credential)

    const leads = []
    const bookings = []

    for await (const entity of table.listEntities()) {
      if (entity.partitionKey === "PulseLead") leads.push(entity)
      if (entity.partitionKey === "Booking") bookings.push(entity)
    }

    leads.sort((a, b) => String(b.receivedAt || "").localeCompare(String(a.receivedAt || "")))

    const scored = leads.filter((lead) => Number(lead.score || 0) > 0)
    const averageScore = scored.length
      ? Math.round(scored.reduce((sum, lead) => sum + Number(lead.score || 0), 0) / scored.length)
      : 0

    const industryBreakdown = leads.reduce((acc, lead) => {
      const key = lead.industry || "Unknown"
      acc[key] = (acc[key] || 0) + 1
      return acc
    }, {})

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: true,
        stats: {
          totalLeads: leads.length,
          bookedConsultations: bookings.length,
          averageScore,
          highRiskLeads: leads.filter((lead) => Number(lead.score || 0) >= 75).length,
          industryBreakdown
        },
        leads: leads.slice(0, 50).map((lead) => ({
          receivedAt: lead.receivedAt,
          name: lead.name,
          company: lead.company,
          email: lead.email,
          industry: lead.industry,
          role: lead.role,
          score: lead.score,
          timeframe: lead.timeframe,
          reportBlob: lead.reportBlob,
          selectedSignals: lead.selectedSignals
        }))
      }
    }
  } catch (error) {
    context.log.error(error)
    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: { ok: false, message: "Dashboard data could not be loaded" }
    }
  }
}
