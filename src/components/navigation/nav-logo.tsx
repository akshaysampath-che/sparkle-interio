import Link from "next/link"

import { siteConfig } from "@/lib/config/site"
import { cn } from "@/lib/utils"

type NavLogoProps = {
  className?: string
  showTagline?: boolean
  onNavigate?: () => void
}

export function NavLogo({ className, showTagline = true, onNavigate }: NavLogoProps) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={cn(
        "group inline-flex flex-col gap-0.5 outline-none transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:opacity-85 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className
      )}
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="font-heading text-lg leading-none tracking-tight text-foreground sm:text-xl">
        {siteConfig.name}
      </span>
      {showTagline ? (
        <span className="type-overline hidden text-[0.65rem] text-muted-foreground transition-colors duration-[var(--duration-fast)] group-hover:text-foreground/80 sm:block">
          {siteConfig.tagline}
        </span>
      ) : null}
    </Link>
  )
}
