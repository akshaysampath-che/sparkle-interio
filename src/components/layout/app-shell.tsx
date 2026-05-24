import { Navbar } from "@/components/navigation"
import { cn } from "@/lib/utils"

type AppShellProps = {
  children: React.ReactNode
  /** When true, main content can extend under the transparent nav (hero routes). */
  heroOverlap?: boolean
  className?: string
}

export function AppShell({ children, heroOverlap = false, className }: AppShellProps) {
  return (
    <div className="flex min-h-dvh flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-foreground focus:shadow-md focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>

      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className={cn(
          "flex flex-1 flex-col outline-none",
          heroOverlap ? "pt-0" : "pt-[var(--nav-height)]",
          className
        )}
      >
        {children}
      </main>
    </div>
  )
}
