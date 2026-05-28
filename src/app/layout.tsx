import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"

import { AppShellWrapper } from "@/components/layout"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { siteConfig } from "@/lib/config/site"

import "./globals.css"

const fontHeading = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Architectural Luxury Interior Design`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Interior Design",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Architectural Luxury Interior Design`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} brand preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Architectural Luxury Interior Design`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/images/sparkle-icon-lockup.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/images/sparkle-icon-lockup.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontHeading.variable} ${fontSans.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppShellWrapper>{children}</AppShellWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}