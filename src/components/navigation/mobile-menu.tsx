"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

import { mainNavItems } from "@/lib/config/navigation"

import { NavLink } from "./nav-link"

type MobileMenuProps = {
  open: boolean
  onClose: () => void
  menuId: string
  activeSection?: string
}

export function MobileMenu({
  open,
  onClose,
  menuId,
  activeSection,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Main navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.19, 1, 0.22, 1] }}
          className="fixed inset-0 z-50 bg-hero-paper/96 text-charcoal backdrop-blur-xl xl:hidden"
        >
          <div className="flex h-[var(--nav-height)] items-center justify-end px-[var(--container-padding)] pt-1">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex size-10 items-center justify-center rounded-sm text-charcoal outline-none transition-colors duration-300 hover:bg-charcoal/5 focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="sr-only">Close menu</span>
              <X className="size-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <motion.nav
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.045,
                  delayChildren: 0.08,
                },
              },
            }}
            className="px-[var(--container-padding)] pt-10"
            aria-label="Mobile primary"
          >
            <ul className="space-y-1">
              {mainNavItems.map((item) => (
                <motion.li
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
                    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
                  }}
                  transition={{
                    duration: 0.48,
                    ease: [0.19, 1, 0.22, 1],
                  }}
                >
                  <NavLink
                    item={item}
                    variant="mobile"
                    onNavigate={onClose}
                    activeSection={activeSection}
                  />
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}