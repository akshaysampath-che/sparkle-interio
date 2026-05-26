"use client"

import * as React from "react"
import { Menu } from "lucide-react"

import { Container } from "@/components/layout"
import { useActiveSection } from "@/hooks/use-active-section"
import { useLockBodyScroll } from "@/hooks/use-lock-body-scroll"
import { mainNavItems } from "@/lib/config/navigation"
import { cn } from "@/lib/utils"

import { MobileMenu } from "./mobile-menu"
import { NavLink } from "./nav-link"
import { NavLogo } from "./nav-logo"

const MENU_ID = "mobile-main-nav"

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const activeSection = useActiveSection()

  useLockBodyScroll(menuOpen)

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 h-[var(--nav-height)]",
          "border-b border-border/55 bg-hero-paper/96 text-charcoal",
          "shadow-[0_1px_0_0_color-mix(in_oklch,var(--palette-charcoal)_4%,transparent)] backdrop-blur-md",
          "before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-charcoal"
        )}
      >
        <Container
          size="wide"
          className="flex h-full min-w-0 items-center justify-between gap-4 pt-1 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]"
        >
          <div className="flex min-w-0 items-center justify-start xl:col-start-1 xl:hidden">
            <NavLogo showTagline={false} />
          </div>

          <nav
            className="hidden min-w-0 items-center justify-center xl:col-start-2 xl:flex"
            aria-label="Primary"
          >
            <ul className="flex min-w-0 flex-nowrap items-center justify-center gap-x-8 whitespace-nowrap 2xl:gap-x-10">
              {mainNavItems.map((item) => (
                <li key={item.href} className="shrink-0">
                  <NavLink
                    item={item}
                    variant="desktop"
                    activeSection={activeSection}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex min-w-0 items-center justify-end xl:col-start-3">
            <button
              type="button"
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-sm text-charcoal outline-none transition-colors duration-300 ease-[cubic-bezier(0.19,1,0.22,1)] hover:bg-charcoal/5 focus-visible:ring-2 focus-visible:ring-ring xl:hidden"
              aria-expanded={menuOpen}
              aria-controls={MENU_ID}
              aria-haspopup="dialog"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>
              <Menu className="size-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        menuId={MENU_ID}
        activeSection={activeSection}
      />
    </>
  )
}