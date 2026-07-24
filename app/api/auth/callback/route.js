import { NextResponse } from "next/server"

const API_BASE = process.env.PINTEREST_API_BASE || "https://api-sandbox.pinterest.com/v5"

// Exchanges the authorization code for an access token.
// Token is stored in an httpOnly cookie — never exposed to the browser JS,
// which satisfies Pinterest's "not storing sensitive information" check.
export async function GET(request) {
  const url = new URL(request.url)
  const code = url.searchParams.get("code")
  if (!code) return NextResponse.redirect(new URL("/?error=missing_code", request.url))

  const basic = Buffer.from(
    `${process.env.PINTEREST_APP_ID}:${process.env.PINTEREST_APP_SECRET}`
  ).toString("base64")

  const res = await fetch(`${API_BASE}/oauth/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: process.env.PINTEREST_REDIRECT_URI,
    }),
  })

  const data = await res.json()
  if (!data.access_token) {
    return NextResponse.redirect(new URL("/?error=token_exchange_failed", request.url))
  }

  const response = NextResponse.redirect(new URL("/?connected=1", request.url))
  response.cookies.set("pin_token", data.access_token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  })
  return response
}
