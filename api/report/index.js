import { BlobServiceClient } from "@azure/storage-blob"

export default async function contextHandler(context, req) {
  try {
    const blob = String(req.query.blob || "")

    if (!blob || !blob.endsWith(".pdf") || blob.includes("/") || blob.includes("\\")) {
      context.res = { status: 400, body: "Invalid report name" }
      return
    }

    const conn = process.env.PULSE_STORAGE_CONNECTION_STRING
    const blobService = BlobServiceClient.fromConnectionString(conn)
    const container = blobService.getContainerClient("pulse-reports")
    const blockBlob = container.getBlockBlobClient(blob)

    const exists = await blockBlob.exists()
    if (!exists) {
      context.res = { status: 404, body: "Report not found" }
      return
    }

    const download = await blockBlob.download()
    const chunks = []

    for await (const chunk of download.readableStreamBody) {
      chunks.push(chunk)
    }

    const pdf = Buffer.concat(chunks)

    context.res = {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${blob}"`
      },
      body: pdf
    }
  } catch (error) {
    context.log.error(error)
    context.res = { status: 500, body: "Report could not be loaded" }
  }
}
