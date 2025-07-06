import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import FloatingNavbar from "@/components/FloatingNavbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Aroma Coffee - Pengalaman Kopi Premium",
  description: "Nikmati kopi terbaik dalam suasana modern yang nyaman. Biji premium, dibuat oleh pengrajin ahli.",
  icons: {
    icon: "/favicon.svg",
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-stone-50 text-stone-900`}>
        <FloatingNavbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
