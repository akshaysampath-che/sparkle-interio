import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const containerVariants = cva("mx-auto w-full px-[var(--container-padding)]", {
  variants: {
    size: {
      default: "max-w-[var(--container-max)]",
      wide: "max-w-[var(--container-max-wide)]",
      narrow: "max-w-[var(--container-max-narrow)]",
      full: "max-w-none",
    },
  },
  defaultVariants: {
    size: "default",
  },
})

type ContainerProps = React.ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof containerVariants>

export function Container({ className, size, ...props }: ContainerProps) {
  return <div className={cn(containerVariants({ size }), className)} {...props} />
}

export { containerVariants }
