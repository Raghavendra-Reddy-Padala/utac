import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "ÜTAC - Übersteigen Technik Automotive Consultancy",
  description:
    "Engineering Excellence, Automotive Perfection - Premium automotive maintenance and repair services in Hyderabad.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-black text-white`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
            <WhatsAppButton />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}