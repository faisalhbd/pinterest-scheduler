import Footer from "../components/Footer"

export const metadata = {
  title: "Privacy Policy — Pin Scheduler by Freekit",
}

export default function Privacy() {
  return (
    <>
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Privacy Policy — Pin Scheduler (Freekit)</h1>
      <p>Last updated: July 2026</p>
      <p>
        Pin Scheduler, a free tool by Freekit (freekit.online), connects to your Pinterest
        account using Pinterest's official OAuth 2.0 authorization flow. We never ask for,
        see, or store your Pinterest password.
      </p>

      <h2>Data we access</h2>
      <p>We request the following Pinterest API scopes, and only to power the features you use:</p>
      <ul>
        <li>Your Pinterest boards (read/write), so you can choose or create where a pin is posted.</li>
        <li>Pin creation permissions, so we can publish or schedule a pin that you have specifically submitted.</li>
      </ul>
      <p>
        Every pin submitted through this tool is an action you took yourself by filling out
        the form and clicking "Create Pin" or "Schedule Pin." We do not take any automatic
        or bulk action on your Pinterest account without your direct, individual submission.
      </p>

      <h2>Data we store</h2>
      <p>
        Your Pinterest access token is stored only in a secure, httpOnly browser cookie on
        your own device. In line with Pinterest's Developer Guidelines, we do not retain
        copies of your boards, pins, or account information on any server, and we do not
        share your data with any third party.
      </p>

      <h2>Data deletion</h2>
      <p>
        Click "Disconnect" inside the app at any time to remove your locally stored token,
        or revoke Pin Scheduler's access directly from your Pinterest account settings.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the updated version will be posted on this page with a new
        "Last updated" date.
      </p>

      <h2>Contact</h2>
      <p>
        For questions about this policy, contact the Freekit team at{" "}
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
