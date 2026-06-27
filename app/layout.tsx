import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Drishti AI — Visual accountability, every day.",
  description:
    "Time-block scheduling where you prove each block with a photo check-in. AI scores your productivity after every session.",
  openGraph: {
    title: "Drishti AI — Visual accountability, every day.",
    description:
      "Prove you did the work. AI scores your productivity after every session.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
