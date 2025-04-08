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
    "Most Affordable and Reliable Car Repair and Maintenance Services in Hyderabad and Secunderabad for all makes and models.",
  keywords: [
    "Car Repair",
    "Car Maintenance",
    "Car Service",
    "Car Workshop",
    "Car Garage",
    "premium car service",
    "Hyderabad",
    "Car Repair in Hyderabad",
    "Car Service in Hyderabad",
    "Car Repair in Secunderabad",
    "Car Repair And Maintenance",
  ],
  authors: [{ name: "TechMocha", url: "https://techmocha.in" }],
  creator: "TechMocha",
  publisher: "ÜTAC Automotive",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL("https://www.utac.co.in"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "hi-IN": "/hi-IN",
    },
  },


  openGraph: {
    title: "ÜTAC - Übersteigen Technik Automotive Consultancy",
    description:
      "Most Affordable and Reliable Car Repair and Maintenance Services in Hyderabad and Secunderabad for all makes and models.",
    url: "https://www.utac.co.in",
    siteName: "ÜTAC - Übersteigen Technik Automotive Consultancy",
    images: [
      {
        url: "https://www.utac.co.in/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ÜTAC - Übersteigen Technik Automotive Consultancy",
      },
    ],
    locale: "en-IN",
    type: "website",
  },
  generator:"TechMocha",

  twitter: {
    card: "summary_large_image",
    title: "ÜTAC - Premium Automotive Services",
    description: "German engineering excellence for your vehicle in Hyderabad",
    images: ["/images/twitter-image.jpg"],
    creator: "@utac_hyderabad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon.png" }],
    shortcut: ["/shortcut-icon.png"],

}
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