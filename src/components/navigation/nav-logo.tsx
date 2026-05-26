import Link from "next/link"

import { siteConfig } from "@/lib/config/site"
import { cn } from "@/lib/utils"

type NavLogoProps = {
  className?: string
  showTagline?: boolean
  onNavigate?: () => void
}

/**
 * Compact architectural brand mark for the app chrome.
 * Keep this deliberately narrow: the full brand statement belongs in the hero,
 * not inside the navigation bar where it competes with nine route links.
 */
export function NavLogo({
  className,
  showTagline = false,
  onNavigate,
}: NavLogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn(
        "group inline-flex min-w-0 shrink-0 items-center gap-2.5 outline-none transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span
        className="grid size-8 shrink-0 place-items-center border border-charcoal/45 bg-hero-paper text-charcoal sm:size-9"
        aria-hidden
      >
        <svg viewBox="0 0 36 36" className="size-6 sm:size-7" fill="none">
          <path
            d="M8 27 L18 7 L28 27"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="square"
            strokeLinejoin="miter"
          />
          <path
            d="M11 27 H25"
            stroke="currentColor"
            strokeWidth="1.1"
            strokeLinecap="square"
            strokeOpacity="0.55"
          />
          <path
            d="M30 8 V28"
            stroke="var(--palette-burgundy)"
            strokeWidth="1.45"
            strokeLinecap="square"
          />
        </svg>
      </span>

      <span className="flex min-w-0 flex-col gap-1 leading-none">
        <span className="whitespace-nowrap font-sans text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-foreground sm:text-[0.86rem]">
          Sparkle <span className="text-burgundy">I</span>nterio
        </span>
        {showTagline ? (
          <span className="hidden max-w-[13rem] truncate whitespace-nowrap font-sans text-[0.58rem] font-medium uppercase tracking-[0.16em] text-muted-foreground sm:block">
            Interior Architecture
          </span>
        ) : null}
      </span>
    </Link>
  )
}
