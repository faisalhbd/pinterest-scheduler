import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const API_BASE = process.env.PINTEREST_API_BASE || "https://api-sandbox.pinterest.com/v5"

function getToken() {
  return cookies().get("pin_token")?.value
}

// List the user's boards
export async function GET() {
  const token = getToken()
  if (!token) return NextResponse.json({ error: "Not connected" }, { status: 401 })

  const res = await fetch(`${API_BASE}/boards?page_size=25`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  })
  return NextResponse.json(await res.json(), { status: res.status })
}

// Create a board (sandbox account starts empty, so you need this for the demo)
export async function POST(request) {
  const token = getToken()
  if (!token) return NextResponse.json({ error: "Not connected" }, { status: 401 })

  const { name } = await request.json()
  const res = await fetch(`${API_BASE}/boards`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name || "My Scheduler Board" }),
  })
  return NextResponse.json(await res.json(), { status: res.status })
}
