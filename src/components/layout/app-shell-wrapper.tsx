"use client"

import { usePathname } from "next/navigation"

import { transparentNavRoutes } from "@/lib/config/navigation"

import { AppShell } from "./app-shell"

type AppShellWrapperProps = {
  children: React.ReactNode
}

export function AppShellWrapper({ children }: AppShellWrapperProps) {
  const pathname = usePathname()
  const heroOverlap = (transparentNavRoutes as readonly string[]).includes(pathname)

  return <AppShell heroOverlap={heroOverlap}>{children}</AppShell>
}
