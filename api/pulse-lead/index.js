import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"
import { EmailClient } from "@azure/communication-email"
import { BlobServiceClient } from "@azure/storage-blob"
import PDFDocument from "pdfkit"

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

function slotRowKey(slotId) {
  return Buffer.from(String(slotId || "")).toString("base64url")
}

async function emailAlreadyBooked(table, email) {
  if (!email) return false

  const cleanEmail = String(email).replace(/'/g, "''")
  const filter = `PartitionKey eq 'Booking' and email eq '${cleanEmail}'`

  for await (const _ of table.listEntities({ queryOptions: { filter } })) {
    return true
  }

  return false
}

function riskLabel(score) {
  if (score >= 75) return "High Risk"
  if (score >= 50) return "Elevated Risk"
  if (score >= 30) return "Moderate Risk"
  return "Lower Risk"
}


function generatePdfReport(lead) {
  return new Promise((resolve, reject) => {
    const chunks = []
    const doc = new PDFDocument({ size: "LETTER", margin: 48 })

    doc.on("data", (chunk) => chunks.push(chunk))
    doc.on("end", () => resolve(Buffer.concat(chunks)))
    doc.on("error", reject)

    const signals = JSON.parse(lead.selectedSignals || "[]")
    const label = riskLabel(lead.score)

    doc.fontSize(22).text("SIGL AI Risk Pulse Report", { align: "center" })
    doc.moveDown()
    doc.fontSize(13).fillColor("#0f172a").text("Executive Summary")
    doc.moveDown(.4)
    doc.fontSize(10).fillColor("#111").text(
      `This report summarizes the AI Risk Pulse Check submitted by ${lead.company || lead.name || "the organization"}. ` +
      `The score is based on AI usage, data exposure, governance, documentation, testing, oversight, and vendor exposure signals.`
    )

    doc.moveDown()
    doc.fontSize(18).fillColor("#0f172a").text(`Risk Score: ${lead.score}/100 — ${label}`)
    doc.moveDown(.5)

    doc.fontSize(11).fillColor("#111")
    doc.text(`Company: ${lead.company || "Not provided"}`)
    doc.text(`Industry: ${lead.industry || "Not provided"}`)
    doc.text(`Company Size: ${lead.companySize || "Not provided"}`)
    doc.text(`Role: ${lead.role || "Not provided"}`)
    doc.text(`Preferred Follow-Up: ${lead.timeframe || "Not provided"}`)

    doc.moveDown()
    doc.fontSize(13).fillColor("#0f172a").text("Top Risk Signals")
    doc.moveDown(.4)
    if (signals.length) {
      signals.slice(0, 18).forEach((signal) => doc.fontSize(10).fillColor("#111").text(`• ${signal}`))
    } else {
      doc.fontSize(10).fillColor("#111").text("• No detailed signals captured.")
    }

    doc.moveDown()
    doc.fontSize(13).fillColor("#0f172a").text("Recommended Service Path")
    doc.moveDown(.4)
    doc.fontSize(10).fillColor("#111").text(
      "SIGL recommends an AI Risk & Audit Readiness Review to validate governance, documentation, testing, oversight, vendor exposure, and evidence readiness."
    )

    doc.moveDown()
    doc.fontSize(13).fillColor("#0f172a").text("Suggested Next Actions")
    doc.moveDown(.4)
    ;[
      "Confirm AI system inventory and business owners.",
      "Review AI data exposure and third-party vendor dependencies.",
      "Validate prompt injection, output manipulation, privacy, and agent/tool abuse risks.",
      "Document controls, approvals, testing evidence, and remediation decisions.",
      "Schedule a SIGL AI compliance consultation."
    ].forEach((item) => doc.fontSize(10).fillColor("#111").text(`• ${item}`))

    doc.moveDown(2)
    doc.fontSize(9).fillColor("#475569").text(
      "This Pulse Check is an initial screening and does not replace a full security assessment, compliance review, or legal opinion."
    )
    doc.text("SIGL AI Compliance | info@siglaicompliance.com")

    doc.end()
  })
}

async function uploadPdfReport(storageConn, lead, pdfBuffer) {
  const blobService = BlobServiceClient.fromConnectionString(storageConn)
  const container = blobService.getContainerClient("pulse-reports")
  await container.createIfNotExists()

  const blobName = `${lead.rowKey}.pdf`
  const blockBlob = container.getBlockBlobClient(blobName)

  await blockBlob.uploadData(pdfBuffer, {
    blobHTTPHeaders: {
      blobContentType: "application/pdf"
    }
  })

  return blobName
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

async function sendEmail(client, sender, to, subject, html, attachment) {
  if (!to) return

  const message = {
    senderAddress: sender,
    content: {
      subject,
      html,
      plainText: html.replace(/<[^>]+>/g, " ")
    },
    recipients: {
      to: [{ address: to }]
    }
  }

  if (attachment) {
    message.attachments = [attachment]
  }

  const poller = await client.beginSend(message)
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
      if (await emailAlreadyBooked(table, lead.email)) {
        context.res = {
          status: 409,
          headers: { "Content-Type": "application/json" },
          body: {
            ok: false,
            message: "This email address already has a consultation slot booked."
          }
        }
        return
      }

      try {
        await table.createEntity({
          partitionKey: "Booking",
          rowKey: slotRowKey(body.selectedSlot),
          slotId: safe(body.selectedSlot),
          leadId: lead.rowKey,
          name: lead.name,
          company: lead.company,
          email: lead.email,
          bookedAt: now.toISOString()
        })
      } catch (bookingError) {
        context.res = {
          status: 409,
          headers: { "Content-Type": "application/json" },
          body: {
            ok: false,
            message: "That consultation slot has already been booked. Please choose another time."
          }
        }
        return
      }
    }

    const pdfBuffer = await generatePdfReport(lead)
    const pdfBlobName = await uploadPdfReport(storageConn, lead, pdfBuffer)
    const pdfAttachment = {
      name: `SIGL-AI-Risk-Pulse-Report-${lead.rowKey}.pdf`,
      contentType: "application/pdf",
      contentInBase64: pdfBuffer.toString("base64")
    }

    await table.updateEntity({
      partitionKey: lead.partitionKey,
      rowKey: lead.rowKey,
      reportBlob: pdfBlobName
    }, "Merge")

    const emailClient = new EmailClient(emailConn)

    const emailResults = await Promise.allSettled([
      sendEmail(
        emailClient,
        sender,
        lead.email,
        `Your SIGL AI Risk Pulse Check Results: ${lead.score}/100`,
        makeVisitorHtml(lead),
        pdfAttachment
      ),
      sendEmail(
        emailClient,
        sender,
        siglLeadEmail,
        `New SIGL Pulse Checker Lead: ${lead.company || lead.email}`,
        makeSiglHtml(lead),
        pdfAttachment
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
