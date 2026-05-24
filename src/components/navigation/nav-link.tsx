"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { NavItem } from "@/lib/config/navigation"
import { cn } from "@/lib/utils"

type NavLinkProps = {
  item: NavItem
  onNavigate?: () => void
  className?: string
  variant?: "desktop" | "mobile"
}

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function NavLink({
  item,
  onNavigate,
  className,
  variant = "desktop",
}: NavLinkProps) {
  const pathname = usePathname()
  const active = isActivePath(pathname, item.href)

  return (
    <Link
      href={item.href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "relative outline-none transition-colors duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        variant === "desktop" &&
          "type-label px-1 py-2 text-muted-foreground hover:text-foreground",
        variant === "mobile" &&
          "type-h4 block py-3 font-heading tracking-[var(--tracking-heading)] text-foreground/90 hover:text-foreground",
        active && variant === "desktop" && "text-foreground",
        active && variant === "mobile" && "text-foreground",
        className
      )}
    >
      {item.label}
      {active ? (
        <span
          className={cn(
            "absolute bg-brand transition-all duration-[var(--duration-normal)] ease-[var(--ease-emphasis)]",
            variant === "desktop" &&
              "bottom-0 left-0 h-px w-full origin-left",
            variant === "mobile" &&
              "top-1/2 -left-3 h-6 w-px -translate-y-1/2"
          )}
          aria-hidden
        />
      ) : null}
    </Link>
  )
}
