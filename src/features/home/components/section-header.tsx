import { cn } from "@/lib/utils"

import { DraftingDivider } from "./drafting-divider"

type SectionHeaderProps = {
  overline: string
  heading: string
  description?: string
  className?: string
  align?: "left" | "center"
}

export function SectionHeader({
  overline,
  heading,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-burgundy-muted">
        {overline}
      </p>
      <DraftingDivider className="mt-4 max-w-[8rem]" />
      <h2 className="type-h2 mt-6 text-balance text-foreground">{heading}</h2>
      {description ? (
        <p className="type-body-lg mt-4 max-w-xl text-pretty text-muted-foreground">
          {description}
        </p>
      ) : null}
    </header>
  )
}
