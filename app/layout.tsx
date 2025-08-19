import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Professional Portfolio",
  description: "A professional portfolio website built with Next.js",
    generator: 'v0.app'
}

// Replace the viewport export with this simpler version
export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background">
            <Navbar />
            <div className="flex-1">{children}</div>
            <Footer />
            <ChatWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

