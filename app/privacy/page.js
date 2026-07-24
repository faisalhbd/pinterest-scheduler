export default function Privacy() {
  return (
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>Privacy Policy</h1>
      <p>Last updated: July 2026</p>
      <p>
        Pin Scheduler connects to your Pinterest account using Pinterest's official
        OAuth 2.0 flow. We never ask for or store your Pinterest password.
      </p>
      <h2>Data we access</h2>
      <ul>
        <li>Your Pinterest boards (read/write) to let you choose where pins are posted.</li>
        <li>Pin creation permissions to publish or schedule pins on your behalf.</li>
      </ul>
      <h2>Data we store</h2>
      <p>
        Your Pinterest access token is stored only in a secure, httpOnly browser cookie
        on your own device. We do not store your data on any server or share it with third parties.
      </p>
      <h2>Data deletion</h2>
      <p>
        Click "Disconnect" in the app to remove your token, or revoke access anytime
        from your Pinterest account settings.
      </p>
      <h2>Contact</h2>
      <p>For questions about this policy, contact the app owner via the GitHub repository.</p>
    </main>
  )
}
