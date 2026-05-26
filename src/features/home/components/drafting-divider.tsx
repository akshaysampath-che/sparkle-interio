import { cn } from "@/lib/utils"

type DraftingDividerProps = {
  className?: string
}

export function DraftingDivider({ className }: DraftingDividerProps) {
  return (
    <div className={cn("flex items-center gap-2", className)} aria-hidden>
      <span className="h-px flex-1 bg-border" />
      <span className="size-1 rotate-45 border border-border bg-background" />
    </div>
  )
}
