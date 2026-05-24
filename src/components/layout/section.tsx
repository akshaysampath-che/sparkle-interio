import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const sectionVariants = cva("w-full", {
  variants: {
    spacing: {
      none: "",
      xs: "section-y-xs",
      sm: "section-y-sm",
      md: "section-y-md",
      lg: "section-y-lg",
      xl: "section-y-xl",
    },
    gap: {
      none: "",
      xs: "flex flex-col section-gap-xs",
      sm: "flex flex-col section-gap-sm",
      md: "flex flex-col section-gap-md",
      lg: "flex flex-col section-gap-lg",
      xl: "flex flex-col section-gap-xl",
    },
  },
  defaultVariants: {
    spacing: "md",
    gap: "none",
  },
})

type SectionProps = React.ComponentPropsWithoutRef<"section"> &
  VariantProps<typeof sectionVariants>

export function Section({
  className,
  spacing,
  gap,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionVariants({ spacing, gap }), className)} {...props} />
  )
}

export { sectionVariants }
