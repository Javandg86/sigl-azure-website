import { TableClient, AzureNamedKeyCredential } from "@azure/data-tables"

function parseConnectionString(conn) {
  const parts = Object.fromEntries(conn.split(";").filter(Boolean).map((part) => {
    const index = part.indexOf("=")
    return [part.slice(0, index), part.slice(index + 1)]
  }))
  return { accountName: parts.AccountName, accountKey: parts.AccountKey, tableEndpoint: parts.TableEndpoint }
}

function mondayOfWeek(offset = 0) {
  const now = new Date()
  const day = now.getUTCDay()
  const diff = day === 0 ? -6 : 1 - day
  const monday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + diff + offset * 7, 0, 0, 0))
  return monday
}

function label(date) {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric", timeZone: "UTC" })
}

function isoDay(date) {
  return date.toISOString().slice(0, 10)
}

async function getBookedSet(table) {
  const booked = new Set()
  for await (const entity of table.listEntities({ queryOptions: { filter: "PartitionKey eq 'Booking'" } })) {
    if (entity.slotId) booked.add(entity.slotId)
  }
  return booked
}

export default async function contextHandler(context, req) {
  try {
    const conn = process.env.PULSE_STORAGE_CONNECTION_STRING
    const { accountName, accountKey, tableEndpoint } = parseConnectionString(conn)
    const credential = new AzureNamedKeyCredential(accountName, accountKey)
    const table = new TableClient(tableEndpoint, "PulseLeads", credential)

    const weekOffset = Math.max(0, Math.min(Number(req.query.weekOffset || 0), 8))
    const monday = mondayOfWeek(weekOffset)
    const booked = await getBookedSet(table)

    const timeSlots = []
    for (let h = 9; h <= 16; h++) {
      timeSlots.push(`${String(h).padStart(2, "0")}:00`)
      timeSlots.push(`${String(h).padStart(2, "0")}:30`)
    }

    const days = []
    for (let i = 0; i < 5; i++) {
      const date = new Date(monday)
      date.setUTCDate(monday.getUTCDate() + i)
      const dateId = isoDay(date)
      const dayName = date.toLocaleDateString("en-US", { weekday: "long", timeZone: "UTC" })
      days.push({
        date: dateId,
        label: `${dayName}, ${label(date)}`,
        slots: timeSlots.map((time) => {
          const id = `${dateId}T${time}:00-05:00`
          const hour = Number(time.slice(0, 2))
          const minute = time.slice(3, 5)
          const suffix = hour >= 12 ? "PM" : "AM"
          const displayHour = hour > 12 ? hour - 12 : hour
          return {
            id,
            timeLabel: `${displayHour}:${minute} ${suffix}`,
            available: !booked.has(id)
          }
        })
      })
    }

    const friday = new Date(monday)
    friday.setUTCDate(monday.getUTCDate() + 4)

    context.res = {
      status: 200,
      headers: { "Content-Type": "application/json" },
      body: {
        ok: true,
        weekStartLabel: label(monday),
        weekEndLabel: label(friday),
        days
      }
    }
  } catch (error) {
    context.log.error(error)
    context.res = { status: 500, body: { ok: false, message: "Could not load slots" } }
  }
}
