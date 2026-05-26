"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { announceSectionNavigation } from "@/hooks/use-active-section"
import type { NavItem } from "@/lib/config/navigation"
import { cn } from "@/lib/utils"

type NavLinkProps = {
  item: NavItem
  activeSection?: string
  onNavigate?: () => void
  className?: string
  variant?: "desktop" | "mobile"
}

function isActiveRoute(pathname: string, href: string) {
  if (href === "/" || href === "/#home") return pathname === "/"
  if (href.startsWith("/#")) return false

  return pathname === href || pathname.startsWith(`${href}/`)
}

function scrollToSection(sectionId: string) {
  const target = document.getElementById(sectionId)
  if (!target) return

  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-height")
    .trim()

  const navHeight = Number.parseFloat(raw) || 80
  const top =
    target.getBoundingClientRect().top + window.scrollY - navHeight - 18

  announceSectionNavigation(sectionId)

  window.history.replaceState(
    null,
    "",
    sectionId === "home" ? "/" : `/#${sectionId}`
  )

  window.scrollTo({
    top,
    behavior: "smooth",
  })
}

export function NavLink({
  item,
  activeSection,
  onNavigate,
  className,
  variant = "desktop",
}: NavLinkProps) {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  const active = item.sectionId
    ? isHomePage && activeSection === item.sectionId
    : isActiveRoute(pathname, item.href)

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    if (!item.sectionId) {
      onNavigate?.()
      return
    }

    if (!isHomePage) {
      onNavigate?.()
      return
    }

    event.preventDefault()
    scrollToSection(item.sectionId)
    onNavigate?.()
  }

  return (
    <Link
      href={item.href}
      onClick={handleClick}
      aria-current={active ? "page" : undefined}
      className={cn(
        "group/nav relative outline-none",
        "transition-[color,transform,opacity] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",

        variant === "desktop" &&
          "block origin-center px-0 py-2 font-sans text-[0.98rem] font-medium leading-none tracking-[0.01em] text-charcoal/70 will-change-transform hover:-translate-y-0.5 hover:scale-[1.025] hover:text-burgundy active:scale-[0.99]",

        variant === "mobile" &&
          "type-h4 block origin-left py-3 font-heading tracking-[var(--tracking-heading)] text-foreground/90 will-change-transform hover:translate-x-1 hover:scale-[1.018] hover:text-burgundy active:translate-x-1 active:scale-[1.012] active:text-burgundy",

        active && "text-burgundy",
        className
      )}
    >
      <span className="relative z-10">{item.label}</span>

      <span
        className={cn(
          "pointer-events-none absolute bg-burgundy",
          "transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",

          variant === "desktop" &&
            "-bottom-3 left-0 h-[2px] w-full origin-center",

          variant === "mobile" &&
            "top-1/2 -left-3 h-6 w-px -translate-y-1/2 origin-center",

          active
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100"
        )}
        aria-hidden="true"
      />
    </Link>
  )
}