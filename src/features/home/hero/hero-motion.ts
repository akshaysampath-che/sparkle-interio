import type { Variants } from "framer-motion"

import { motion as motionTokens } from "@/lib/design-system"

const ease = motionTokens.ease.standard

/** Ultra-subtle reveals — drafting studio calm, not cinematic */
export const heroStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.06,
    },
  },
}

export const heroStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.slow,
      ease,
    },
  },
}

export const heroReducedMotionContainer: Variants = {
  hidden: {},
  visible: {},
}

export const heroReducedMotionItem: Variants = {
  hidden: { opacity: 1, y: 0 },
  visible: { opacity: 1, y: 0 },
}
