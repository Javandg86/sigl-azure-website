import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"
import { EmailClient } from "@azure/communication-email"

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

function riskLabel(score) {
  if (score >= 75) return "High Risk"
  if (score >= 50) return "Elevated Risk"
  if (score >= 30) return "Moderate Risk"
  return "Lower Risk"
}

function makeVisitorHtml(lead) {
  const label = riskLabel(lead.score)
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <h1>Your SIGL AI Risk Pulse Check Results</h1>
      <p>Thank you for completing the AI Risk Pulse Check.</p>
      <h2>Score: ${lead.score}/100 — ${label}</h2>
      <p>This score is based on your answers across AI usage, data exposure, governance, documentation, testing, oversight, and vendor reliance.</p>
      <h3>Recommended next step</h3>
      <p><strong>AI Risk & Audit Readiness Review</strong></p>
      <p>SIGL can help review your AI governance, documentation, testing controls, vendor exposure, and evidence readiness.</p>
      <h3>Signals captured</h3>
      <ul>
        ${JSON.parse(lead.selectedSignals || "[]").slice(0, 20).map(x => `<li>${safe(x)}</li>`).join("")}
      </ul>
      <p>To discuss your results, reply to this email or contact <strong>info@siglaicompliance.com</strong>.</p>
      <p>— SIGL AI Compliance</p>
    </div>
  `
}

function makeSiglHtml(lead) {
  const signals = JSON.parse(lead.selectedSignals || "[]")
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
      <h1>New SIGL Pulse Checker Lead</h1>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Company:</strong> ${lead.company}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Industry:</strong> ${lead.industry}</p>
      <p><strong>Company Size:</strong> ${lead.companySize}</p>
      <p><strong>Role:</strong> ${lead.role}</p>
      <p><strong>Timeframe:</strong> ${lead.timeframe}</p>
      <p><strong>Score:</strong> ${lead.score}/100 — ${riskLabel(lead.score)}</p>
      <h3>Selected Signals</h3>
      <ul>${signals.slice(0, 60).map(x => `<li>${safe(x)}</li>`).join("")}</ul>
      <p><strong>Received:</strong> ${lead.receivedAt}</p>
      <p><strong>Lead ID:</strong> ${lead.rowKey}</p>
    </div>
  `
}

async function sendEmail(client, sender, to, subject, html) {
  if (!to) return

  const poller = await client.beginSend({
    senderAddress: sender,
    content: {
      subject,
      html,
      plainText: html.replace(/<[^>]+>/g, " ")
    },
    recipients: {
      to: [{ address: to }]
    }
  })

  return await poller.pollUntilDone()
}

export default async function contextHandler(context, req) {
  try {
    const body = req.body || {}

    const storageConn = process.env.PULSE_STORAGE_CONNECTION_STRING
    const emailConn = process.env.ACS_EMAIL_CONNECTION_STRING
    const sender = process.env.ACS_EMAIL_SENDER
    const siglLeadEmail = process.env.SIGL_LEAD_EMAIL || "info@siglaicompliance.com"

    if (!storageConn) throw new Error("Missing PULSE_STORAGE_CONNECTION_STRING")
    if (!emailConn) throw new Error("Missing ACS_EMAIL_CONNECTION_STRING")
    if (!sender) throw new Error("Missing ACS_EMAIL_SENDER")

    const { accountName, accountKey, tableEndpoint } = parseConnectionString(storageConn)
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

    if (body.selectedSlot) {
      await table.createEntity({
        partitionKey: "Booking",
        rowKey: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        slotId: safe(body.selectedSlot),
        leadId: lead.rowKey,
        name: lead.name,
        company: lead.company,
        email: lead.email,
        bookedAt: now.toISOString()
      })
    }

    const emailClient = new EmailClient(emailConn)

    const emailResults = await Promise.allSettled([
      sendEmail(
        emailClient,
        sender,
        lead.email,
        `Your SIGL AI Risk Pulse Check Results: ${lead.score}/100`,
        makeVisitorHtml(lead)
      ),
      sendEmail(
        emailClient,
        sender,
        siglLeadEmail,
        `New SIGL Pulse Checker Lead: ${lead.company || lead.email}`,
        makeSiglHtml(lead)
      )
    ])

    context.log("SIGL Email Results:", JSON.stringify(emailResults))

    const failedEmails = emailResults
      .filter((result) => result.status === "rejected")
      .map((result) => result.reason?.message || String(result.reason))

    if (failedEmails.length) {
      context.res = {
        status: 207,
        headers: { "Content-Type": "application/json" },
        body: {
          ok: true,
          message: "Pulse lead stored, but one or more emails failed",
          leadId: lead.rowKey,
          emailErrors: failedEmails
        }
      }
      return
    }

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: true,
        message: "Pulse lead stored and emails sent",
        leadId: lead.rowKey,
        emailResults: emailResults.map((result) => result.status)
      }
    }
  } catch (error) {
    context.log.error(error)

    context.res = {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: false,
        message: "Pulse lead could not be processed"
      }
    }
  }
}
