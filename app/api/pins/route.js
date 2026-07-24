import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const API_BASE = process.env.PINTEREST_API_BASE || "https://api-sandbox.pinterest.com/v5"

// Create a Pin — immediately, or scheduled with publish_at.
// Pinterest rule: publish_at must be >= 10 minutes and <= 30 days in the future.
export async function POST(request) {
  const token = cookies().get("pin_token")?.value
  if (!token) return NextResponse.json({ error: "Not connected" }, { status: 401 })

  const body = await request.json()
  const payload = {
    board_id: body.board_id,
    title: body.title,
    description: body.description || "",
    media_source: {
      source_type: "image_url",
      url: body.image_url,
    },
  }
  if (body.link) payload.link = body.link

  if (body.publish_at) {
    const when = new Date(body.publish_at)
    const minTime = Date.now() + 10 * 60 * 1000
    const maxTime = Date.now() + 30 * 24 * 60 * 60 * 1000
    if (when.getTime() < minTime || when.getTime() > maxTime) {
      return NextResponse.json(
        { error: "publish_at must be between 10 minutes and 30 days from now" },
        { status: 400 }
      )
    }
    payload.publish_at = when.toISOString()
  }

  const res = await fetch(`${API_BASE}/pins`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
  return NextResponse.json(await res.json(), { status: res.status })
}
