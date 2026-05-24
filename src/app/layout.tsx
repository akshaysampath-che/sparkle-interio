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
  title: {
    default: siteConfig.name,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
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
