import * as React from "react"

import { cn } from "@/lib/utils"

type DraftingCardProps = React.ComponentPropsWithoutRef<"article"> & {
  accent?: boolean
}

export function DraftingCard({
  className,
  accent = false,
  children,
  ...props
}: DraftingCardProps) {
  return (
    <article
      className={cn(
        "group relative border border-border/80 bg-[color-mix(in_oklch,var(--hero-paper)_88%,var(--background))] p-6 sm:p-7",
        "transition-[border-color,background-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
        "hover:-translate-y-1 hover:border-burgundy/35 hover:bg-hero-paper hover:shadow-sm",
        className
      )}
      {...props}
    >
      {accent ? (
        <span
          className="absolute top-0 left-0 h-px w-10 bg-burgundy/50 transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-16"
          aria-hidden
        />
      ) : null}

      {children}
    </article>
  )
}