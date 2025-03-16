import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { AuthModals } from "@/components/auth/auth-modals"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thrift Store - Second-Hand Marketplace",
  description: "Buy and sell second-hand items",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <AuthModals />
      </body>
    </html>
  )
}



import './globals.css'