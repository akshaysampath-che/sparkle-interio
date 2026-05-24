"use client"

import * as React from "react"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"

import { Container } from "@/components/layout"
import { mainNavItems, transparentNavRoutes } from "@/lib/config/navigation"
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll"
import { useScrolled } from "@/hooks/use-scrolled"
import { cn } from "@/lib/utils"

import { MobileMenu } from "./mobile-menu"
import { NavLink } from "./nav-link"
import { NavLogo } from "./nav-logo"

const MENU_ID = "mobile-main-nav"

export function Navbar() {
  const pathname = usePathname()
  const scrolled = useScrolled(32)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const transparentRoute = (transparentNavRoutes as readonly string[]).includes(
    pathname
  )
  const isSolid = scrolled || !transparentRoute

  useLockBodyScroll(menuOpen)

  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,border-color,height] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
          isSolid
            ? "h-[var(--nav-height-scrolled)] border-b border-border/60 bg-background/90 shadow-[0_1px_0_0_color-mix(in_oklch,var(--foreground)_4%,transparent)] backdrop-blur-md"
            : "h-[var(--nav-height)] border-b border-transparent bg-transparent"
        )}
      >
        <Container className="flex h-full items-center justify-between gap-6">
          <NavLogo />

          <nav
            className="hidden items-center gap-x-6 lg:flex xl:gap-x-8"
            aria-label="Primary"
          >
            <ul className="flex flex-wrap items-center justify-end gap-x-5 xl:gap-x-6">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <NavLink item={item} variant="desktop" />
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-md text-foreground outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:bg-muted/60 focus-visible:ring-2 focus-visible:ring-ring lg:hidden",
              isSolid ? "hover:bg-muted" : "hover:bg-background/20"
            )}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            aria-haspopup="dialog"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <Menu className="size-5" strokeWidth={1.5} aria-hidden />
          </button>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        menuId={MENU_ID}
      />
    </>
  )
}
