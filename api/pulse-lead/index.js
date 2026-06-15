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


function buildRecommendations(lead) {
  const signals = JSON.parse(lead.selectedSignals || "[]").map((x) => String(x).toLowerCase())
  const industry = String(lead.industry || "").toLowerCase()
  const score = Number(lead.score || 0)

  const findings = new Set()
  const services = new Set()
  const actions = new Set()

  if (score >= 75) {
    findings.add("High AI risk posture requiring near-term executive review.")
    services.add("AI Risk & Audit Readiness Review")
    actions.add("Schedule a SIGL review within 30 days.")
  } else if (score >= 50) {
    findings.add("Elevated AI risk signals across governance, testing, documentation, or oversight.")
    services.add("AI Risk & Audit Readiness Review")
    actions.add("Prioritize governance, testing, and evidence gaps.")
  } else {
    findings.add("Lower initial risk posture, but AI controls should still be documented and reviewed.")
    services.add("AI Governance Baseline Review")
    actions.add("Create a lightweight AI governance and evidence baseline.")
  }

  if (signals.some(s => s.includes("prompt") || s.includes("testing") || s.includes("not yet") || s.includes("sometimes"))) {
    findings.add("AI testing coverage appears incomplete or inconsistent.")
    services.add("AI Red Team Assessment")
    actions.add("Validate prompt injection, unsafe output, evasion, and misuse scenarios.")
  }

  if (signals.some(s => s.includes("vendor") || s.includes("third-party"))) {
    findings.add("Third-party AI vendor reliance may create external exposure.")
    services.add("Vendor AI Risk Review")
    actions.add("Review vendor data handling, model usage, contracts, retention, and oversight.")
  }

  if (signals.some(s => s.includes("partial") || s.includes("not in place") || s.includes("documentation"))) {
    findings.add("AI governance documentation and audit evidence may be incomplete.")
    services.add("Audit Evidence Support")
    services.add("AI Governance Program Setup")
    actions.add("Document AI policies, owners, approvals, inventories, and evidence trails.")
  }

  if (signals.some(s => s.includes("privacy") || s.includes("sensitive") || s.includes("data"))) {
    findings.add("Sensitive data or privacy exposure may require deeper review.")
    services.add("AI Privacy & Data Exposure Review")
    actions.add("Map sensitive data flows through AI tools, prompts, logs, and vendors.")
  }

  if (industry.includes("health")) {
    services.add("Healthcare AI Compliance Review")
    actions.add("Review PHI exposure, HIPAA-aligned controls, AI vendor use, and audit evidence.")
  }

  if (industry.includes("financial") || industry.includes("bank")) {
    services.add("Financial Services AI Governance Review")
    actions.add("Review model risk, third-party risk, governance evidence, and customer-impacting AI use.")
  }

  if (industry.includes("law")) {
    services.add("Legal AI Data Protection Review")
    actions.add("Review client confidentiality, privileged data exposure, AI tool usage, and evidence controls.")
  }

  if (industry.includes("startup")) {
    services.add("Startup AI Governance Foundation")
    actions.add("Establish a practical AI policy, tool inventory, testing baseline, and customer-ready evidence package.")
  }

  const priority = score >= 80 ? "Critical — follow up within 24 hours"
    : score >= 65 ? "High — follow up within 2 business days"
    : score >= 40 ? "Medium — follow up within 1 week"
    : "Low — nurture and monitor"

  return {
    priority,
    findings: [...findings].slice(0, 8),
    services: [...services].slice(0, 8),
    actions: [...actions].slice(0, 8)
  }
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
    doc.fontSize(13).fillColor("#0f172a").text("AI-Powered Recommendations")
    doc.moveDown(.4)
    JSON.parse(lead.recommendedServices || "[]").slice(0, 8).forEach((service) => doc.fontSize(10).fillColor("#111").text(`• ${service}`))

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
      <p><strong>${JSON.parse(lead.recommendedServices || "[]")[0] || "AI Risk & Audit Readiness Review"}</strong></p>
      <p>SIGL can help review your AI governance, documentation, testing controls, vendor exposure, and evidence readiness.</p>
      <h3>Recommended actions</h3>
      <ul>
        ${JSON.parse(lead.recommendedActions || "[]").slice(0, 6).map(x => `<li>${safe(x)}</li>`).join("")}
      </ul>
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
      <p><strong>Priority:</strong> ${lead.priority || "Not calculated"}</p>
      <h3>Recommended Services</h3>
      <ul>${JSON.parse(lead.recommendedServices || "[]").map(x => `<li>${safe(x)}</li>`).join("")}</ul>
      <h3>Top Findings</h3>
      <ul>${JSON.parse(lead.findings || "[]").map(x => `<li>${safe(x)}</li>`).join("")}</ul>
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

    const recommendations = buildRecommendations(lead)
    lead.priority = recommendations.priority
    lead.findings = JSON.stringify(recommendations.findings)
    lead.recommendedServices = JSON.stringify(recommendations.services)
    lead.recommendedActions = JSON.stringify(recommendations.actions)

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
