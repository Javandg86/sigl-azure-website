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
    const { rowKey, status, notes, estimatedValue } = req.body || {}
    if (!rowKey) throw new Error("Missing rowKey")

    const allowed = ["New Lead", "Qualified", "Consultation Scheduled", "Proposal Sent", "Negotiation", "Won", "Lost"]
    if (!allowed.includes(status)) throw new Error("Invalid status")

    const conn = process.env.PULSE_STORAGE_CONNECTION_STRING
    const { accountName, accountKey, tableEndpoint } = parseConnectionString(conn)
    const credential = new AzureNamedKeyCredential(accountName, accountKey)
    const table = new TableClient(tableEndpoint, "PulseLeads", credential)

    await table.updateEntity({
      partitionKey: "PulseLead",
      rowKey,
      status,
      notes: String(notes || "").slice(0, 2000),
      estimatedValue: Number(estimatedValue || 0),
      updatedAt: new Date().toISOString()
    }, "Merge")

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: { ok: true, message: "Lead updated" }
    }
  } catch (error) {
    context.log.error(error)
    context.res = {
      status: 400,
      headers: { "Content-Type": "application/json" },
      body: { ok: false, message: "Lead could not be updated" }
    }
  }
}
