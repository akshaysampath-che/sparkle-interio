import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const pageContentVariants = cva("container-base w-full flex-1", {
  variants: {
    spacing: {
      none: "",
      sm: "section-y-sm",
      md: "section-y-md",
      lg: "section-y-lg",
    },
  },
  defaultVariants: {
    spacing: "md",
  },
})

type PageContentProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof pageContentVariants>

export function PageContent({ className, spacing, ...props }: PageContentProps) {
  return <div className={cn(pageContentVariants({ spacing }), className)} {...props} />
}

export { pageContentVariants }
