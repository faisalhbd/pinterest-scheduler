import { NextResponse } from "next/server"

const PINTEREST_OAUTH_URL = "https" + "://www.pinterest.com/oauth/"

// Redirects the user to Pinterest's OAuth consent screen.
// This is the flow Pinterest reviewers want to see in your demo video.
export function GET() {
  const params = new URLSearchParams({
    client_id: process.env.PINTEREST_APP_ID,
    redirect_uri: process.env.PINTEREST_REDIRECT_URI,
    response_type: "code",
    scope: "user_accounts:read,boards:read,boards:write,pins:read,pins:write",
  })
  return NextResponse.redirect(PINTEREST_OAUTH_URL + "?" + params.toString())
}
