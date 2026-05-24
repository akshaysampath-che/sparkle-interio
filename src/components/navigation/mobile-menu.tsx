"use client"

import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { mainNavItems } from "@/lib/config/navigation"
import { motion as motionTokens } from "@/lib/design-system"
import { cn } from "@/lib/utils"

import { NavLink } from "./nav-link"
import { NavLogo } from "./nav-logo"

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  menuId: string
}

export function MobileMenu({ open, onClose, menuId }: MobileMenuProps) {
  const closeRef = React.useRef<HTMLButtonElement>(null)
  const panelRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!open) return

    closeRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
        return
      }

      if (event.key !== "Tab" || !panelRef.current) return

      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )
      const elements = Array.from(focusable)
      if (elements.length === 0) return

      const first = elements[0]
      const last = elements[elements.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open ? (
        <>
          <motion.button
            type="button"
            aria-label="Close navigation menu"
            className="fixed inset-0 z-50 bg-charcoal/20 backdrop-blur-[2px] dark:bg-charcoal-deep/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: motionTokens.duration.fast,
              ease: motionTokens.ease.standard,
            }}
            onClick={onClose}
          />

          <motion.div
            ref={panelRef}
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Main navigation"
            className={cn(
              "fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col",
              "border-l border-border bg-background/98 shadow-xl backdrop-blur-md"
            )}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: motionTokens.duration.normal,
              ease: motionTokens.ease.emphasis,
            }}
          >
            <div className="flex h-[var(--nav-height)] shrink-0 items-center justify-between border-b border-border px-[var(--shell-gutter)]">
              <NavLogo showTagline={false} onNavigate={onClose} />
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-md text-foreground outline-none transition-colors duration-[var(--duration-fast)] hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close menu"
              >
                <X className="size-5" strokeWidth={1.5} aria-hidden />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col overflow-y-auto px-[var(--shell-gutter)] py-6"
              aria-label="Mobile"
            >
              <ul className="flex flex-col gap-1">
                {mainNavItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.04,
                      duration: motionTokens.duration.normal,
                      ease: motionTokens.ease.reveal,
                    }}
                  >
                    <NavLink item={item} variant="mobile" onNavigate={onClose} />
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  )
}
