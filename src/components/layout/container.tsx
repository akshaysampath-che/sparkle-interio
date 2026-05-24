import * as React from "react"

import { cn } from "@/lib/utils"

type ContainerProps = React.ComponentPropsWithoutRef<"div">

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)]", className)}
      {...props}
    />
  )
}

