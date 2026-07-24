export default function Footer() {
  const year = new Date().getFullYear()

  const linkStyle = { color: "#666", textDecoration: "none" }
  const wrap = {
    maxWidth: 560,
    margin: "48px auto 0",
    padding: "24px 16px 32px",
    borderTop: "1px solid #eee",
    fontFamily: "system-ui, sans-serif",
    fontSize: 13,
    color: "#888",
  }

  return (
    <footer style={wrap}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", marginBottom: 12 }}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/freekit-pin-scheduler-privacy-policy" style={linkStyle}>Privacy Policy</a>
        <a href="/freekit-pin-scheduler-terms" style={linkStyle}>Terms of Service</a>
        <a href="/#faq" style={linkStyle}>FAQ</a>
        <a href="mailto:info@freekit.online" style={linkStyle}>Contact</a>
      </div>
      <p style={{ margin: 0 }}>
        © {year} Freekit (freekit.online). Pin Scheduler is an independent tool and is not
        endorsed by or affiliated with Pinterest, Inc. Pinterest is a trademark of Pinterest, Inc.
      </p>
    </footer>
  )
}
