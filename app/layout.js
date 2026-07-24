export const metadata = {
  title: "Pinterest Scheduler",
  description: "Schedule and manage your Pinterest pins",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
