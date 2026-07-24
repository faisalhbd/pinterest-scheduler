import Footer from "../components/Footer"

export const metadata = {
  title: "Terms of Service — Pin Scheduler by Freekit",
}

export default function Terms() {
  return (
    <>
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Terms of Service — Pin Scheduler (Freekit)</h1>
      <p>Last updated: July 2026</p>
      <p>
        Pin Scheduler is a free tool by Freekit (freekit.online) that lets you connect your
        own Pinterest business account and create or schedule pins to your own boards using
        the official Pinterest API v5. Pin Scheduler is an independent, third-party tool and
        is not affiliated with, endorsed by, or sponsored by Pinterest, Inc.
      </p>

      <h2>Use of the service</h2>
      <ul>
        <li>You must connect your own Pinterest account through the official Pinterest OAuth flow.</li>
        <li>Every pin is created or scheduled only when you personally submit the form — this tool does not take bulk or automatic actions on your account.</li>
        <li>You are responsible for the content (images, titles, descriptions, links) you publish through this tool.</li>
        <li>You must comply with Pinterest's own Terms of Service, Community Guidelines, and Developer Guidelines when publishing pins.</li>
        <li>This tool must not be used to publish spam, misleading, or policy-violating content, or to circumvent any Pinterest restriction.</li>
        <li>You must be at least 13 years old, and meet Pinterest's own minimum age requirement, to use this tool.</li>
      </ul>

      <h2>No warranty</h2>
      <p>
        Pin Scheduler is provided "as is" without warranty of any kind. We are not responsible
        for any pin, board, or account action taken through the Pinterest API on your behalf,
        or for any interruption, delay, or change in the Pinterest API.
      </p>

      <h2>Access &amp; termination</h2>
      <p>
        You can disconnect your Pinterest account at any time from within the app or from your
        Pinterest account settings. We reserve the right to suspend or discontinue access to
        this tool at any time, including if it is used in violation of these terms or
        Pinterest's own policies.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        If these terms change, the updated version will be posted on this page with a new
        "Last updated" date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href="mailto:info@freekit.online">info@freekit.online</a>.
      </p>
      <p style={{ marginTop: 30 }}>
        <a href="/">← Back to Pin Scheduler</a>
      </p>
    </main>
    <Footer />
    </>
  )
}
