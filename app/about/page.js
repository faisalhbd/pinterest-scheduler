import Footer from "../components/Footer"

export const metadata = {
  title: "About Us — Pin Scheduler by Freekit",
}

export default function About() {
  return (
    <>
    <main style={{ maxWidth: 640, margin: "40px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px", lineHeight: 1.6 }}>
      <h1>About Us</h1>
      <p>
        Pin Scheduler is built and maintained by Freekit (freekit.online), an independent
        maker of small, free web tools.
      </p>
      <p>
        Our goal with Pin Scheduler is simple: give Pinterest business account owners a
        clean, no-cost way to create and schedule pins to their own boards using Pinterest's
        official API v5 — without handing over their Pinterest password or account access to
        anyone.
      </p>
      <p>
        Pin Scheduler is an independent, third-party tool. It is not affiliated with,
        endorsed by, or sponsored by Pinterest, Inc. "Pinterest" is a trademark of
        Pinterest, Inc.
      </p>
      <h2>What we believe in</h2>
      <ul>
        <li>You should always be in control of what gets posted to your own account.</li>
        <li>A tool shouldn't need your password to be useful — official OAuth login only.</li>
        <li>Simple, free tools can still be built responsibly and transparently.</li>
      </ul>
      <h2>Get in touch</h2>
      <p>
        Questions, feedback, or issues? Email us at{" "}
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
