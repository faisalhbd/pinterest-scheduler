"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [boards, setBoards] = useState([])
  const [connected, setConnected] = useState(false)
  const [form, setForm] = useState({
    board_id: "",
    title: "",
    description: "",
    link: "",
    image_url: "",
    publish_at: "",
  })
  const [result, setResult] = useState(null)
  const [busy, setBusy] = useState(false)

  async function loadBoards() {
    const res = await fetch("/api/boards")
    if (res.status === 401) return setConnected(false)
    const data = await res.json()
    setConnected(true)
    setBoards(data.items || [])
  }

  useEffect(() => {
    loadBoards()
  }, [])

  async function createBoard() {
    const name = prompt("Board name:", "My Scheduler Board")
    if (!name) return
    setBusy(true)
    await fetch("/api/boards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
    await loadBoards()
    setBusy(false)
  }

  async function submitPin(e) {
    e.preventDefault()
    setBusy(true)
    setResult(null)
    const res = await fetch("/api/pins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    setResult(await res.json())
    setBusy(false)
  }

  const input = { width: "100%", padding: 10, margin: "6px 0 14px", borderRadius: 8, border: "1px solid #ddd", fontSize: 14 }
  const label = { fontWeight: 600, fontSize: 13 }

  return (
    <main style={{ maxWidth: 560, margin: "40px auto", fontFamily: "system-ui, sans-serif", padding: "0 16px" }}>
      <h1 style={{ color: "#e60023" }}>📌 Pin Scheduler</h1>
      <p style={{ color: "#555" }}>
        Connect your own Pinterest business account to create and schedule pins to your
        boards using the official Pinterest API v5.
      </p>
      <p style={{ color: "#999", fontSize: 13, marginTop: -6 }}>
        A free tool by{" "}
        <a href="https://freekit.online" style={{ color: "#999" }}>
          freekit.online
        </a>
      </p>

      {!connected ? (
        <a href="/api/auth/login" style={{ display: "inline-block", background: "#e60023", color: "#fff", padding: "12px 24px", borderRadius: 24, textDecoration: "none", fontWeight: 700 }}>
          Connect Pinterest
        </a>
      ) : (
        <>
          <p>
            ✅ Connected to Pinterest &nbsp;
            <a href="/api/auth/logout" style={{ fontSize: 13 }}>Disconnect</a>
          </p>

          <form onSubmit={submitPin}>
            <div style={label}>Board</div>
            <div style={{ display: "flex", gap: 8 }}>
              <select style={{ ...input, flex: 1 }} required value={form.board_id}
                onChange={(e) => setForm({ ...form, board_id: e.target.value })}>
                <option value="">Select a board…</option>
                {boards.map((b) => (
                  <option key={b.id} value={b.id}>{b.name}</option>
                ))}
              </select>
              <button type="button" onClick={createBoard} disabled={busy}
                style={{ height: 40, marginTop: 6, padding: "0 14px", borderRadius: 8, border: "1px solid #ddd", background: "#fff", cursor: "pointer" }}>
                + New board
              </button>
            </div>

            <div style={label}>Title</div>
            <input style={input} required maxLength={100} value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })} />

            <div style={label}>Description</div>
            <textarea style={{ ...input, minHeight: 70 }} value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })} />

            <div style={label}>Destination link (optional)</div>
            <input style={input} type="url" value={form.link}
              onChange={(e) => setForm({ ...form, link: e.target.value })} />

            <div style={label}>Image URL</div>
            <input style={input} type="url" required placeholder="https://example.com/image.jpg" value={form.image_url}
              onChange={(e) => setForm({ ...form, image_url: e.target.value })} />

            <div style={label}>Schedule time (optional — leave empty to publish now)</div>
            <input style={input} type="datetime-local" value={form.publish_at}
              onChange={(e) => setForm({ ...form, publish_at: e.target.value })} />

            <button type="submit" disabled={busy}
              style={{ background: "#e60023", color: "#fff", padding: "12px 24px", borderRadius: 24, border: "none", fontWeight: 700, cursor: "pointer" }}>
              {busy ? "Working…" : form.publish_at ? "Schedule Pin" : "Create Pin"}
            </button>
          </form>

          {result && (
            <pre style={{ background: "#f6f6f6", padding: 14, borderRadius: 8, fontSize: 12, overflowX: "auto" }}>
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </>
      )}

      <p style={{ marginTop: 40, fontSize: 12, color: "#888" }}>
        <a href="/freekit-pin-scheduler-privacy-policy">Privacy Policy</a>
        {" · "}
        <a href="/freekit-pin-scheduler-terms">Terms of Service</a>
        {" · "}
        <a href="mailto:ifaisal.eth@gmail.com">Contact</a>
      </p>
    </main>
  )
}
