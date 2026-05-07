import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ArrowCursor } from "@/components/arrow-cursor"
import "./globals.css"

// Configure fonts with proper options
const geist = Geist({
  subsets: ["latin"],
  variable: '--font-geist',
  display: 'swap',
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
  display: 'swap',
})
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://shashinthaka.dev'),
  title: {
    default: "Shashinthaka Munasinghe — Full Stack Developer Portfolio",
    template: "%s | Shashinthaka",
  },
  description:
    "Full Stack Developer & ICT Undergraduate skilled in React, Next.js, Spring Boot, and cloud technologies. Building responsive, secure, and scalable web systems.",
  keywords: ["Full Stack Developer", "Web Development", "Next.js", "React", "Spring Boot", "Java", "TypeScript", "Firebase", "Docker", "Azure"],
  authors: [{ name: "Shashinthaka Munasinghe", url: "https://github.com/shashinthakamunasinghe" }],
  creator: "Shashinthaka Munasinghe",
  publisher: "Shashinthaka Munasinghe",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Shashinthaka Munasinghe — Full Stack Developer Portfolio",
    description: "Full Stack Developer & ICT Undergraduate skilled in React, Next.js, Spring Boot, and cloud technologies.",
    siteName: "Shashinthaka Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shashinthaka Munasinghe — Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashinthaka Munasinghe — Full Stack Developer Portfolio",
    description: "Full Stack Developer & ICT Undergraduate building responsive, secure, and scalable web systems.",
    creator: "@shashinthaka",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geist.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="theme-mode">
          <ArrowCursor />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
