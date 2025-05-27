import type React from "react"
import type { Metadata } from "next/font/google"
import { Orbitron } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sudoz Evolution Lab",
  description:
    "Evolve your Sudoz NFTs in our experimental sci-fi lab. Level up, enhance, and unlock the true potential of your digital artifacts.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
