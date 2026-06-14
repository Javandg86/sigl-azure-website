export default async function contextHandler(context, req) {
  const body = req.body || {}

  const lead = {
    receivedAt: new Date().toISOString(),
    name: body.name || "",
    company: body.company || "",
    email: body.email || "",
    score: body.score || null,
    industry: body.industry || "",
    role: body.role || "",
    selectedSignals: body.selectedSignals || []
  }

  context.log("SIGL Pulse Lead Received:", JSON.stringify(lead))

  context.res = {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: {
      ok: true,
      message: "Pulse lead received",
      lead
    }
  }
}
