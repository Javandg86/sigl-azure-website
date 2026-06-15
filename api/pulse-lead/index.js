import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"

function parseConnectionString(conn) {
  const parts = Object.fromEntries(
    conn.split(";").filter(Boolean).map((part) => {
      const index = part.indexOf("=")
      return [part.slice(0, index), part.slice(index + 1)]
    })
  )

  return {
    accountName: parts.AccountName,
    accountKey: parts.AccountKey,
    tableEndpoint: parts.TableEndpoint
  }
}

function safe(value) {
  return String(value || "").slice(0, 1000)
}

export default async function contextHandler(context, req) {
  try {
    const body = req.body || {}
    const conn = process.env.PULSE_STORAGE_CONNECTION_STRING

    if (!conn) {
      throw new Error("Missing PULSE_STORAGE_CONNECTION_STRING")
    }

    const { accountName, accountKey, tableEndpoint } = parseConnectionString(conn)
    const credential = new AzureNamedKeyCredential(accountName, accountKey)
    const table = new TableClient(tableEndpoint, "PulseLeads", credential)

    const now = new Date()
    const lead = {
      partitionKey: "PulseLead",
      rowKey: `${now.getTime()}-${Math.random().toString(36).slice(2)}`,
      receivedAt: now.toISOString(),
      name: safe(body.name),
      company: safe(body.company),
      email: safe(body.email),
      timeframe: safe(body.timeframe),
      score: Number(body.score || 0),
      industry: safe(body.industry),
      companySize: safe(body.companySize),
      role: safe(body.role),
      selectedSignals: JSON.stringify(body.selectedSignals || [])
    }

    await table.createEntity(lead)

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: true,
        message: "Pulse lead stored",
        leadId: lead.rowKey
      }
    }
  } catch (error) {
    context.log.error(error)

    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: false,
        message: "Pulse lead could not be stored"
      }
    }
  }
}
