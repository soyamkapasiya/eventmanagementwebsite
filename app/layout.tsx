import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PJ Entertainment | Your Ultimate Entertainment Partner",
  description:
    "Creating Moments. Inspiring Movements. PJ Entertainment offers choreography, dancers, cinematography, artist management, and full event production services in Indore.",
  keywords: [
    "entertainment",
    "event management",
    "choreography",
    "dancers",
    "cinematography",
    "Indore",
    "PJ Entertainment",
    "Pratham Purohit",
  ],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
