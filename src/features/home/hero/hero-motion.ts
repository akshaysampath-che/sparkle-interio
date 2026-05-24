import type { Variants } from "framer-motion"

import { motion as motionTokens } from "@/lib/design-system"

const ease = motionTokens.ease.emphasis

export const heroStaggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.14,
    },
  },
}

export const heroStaggerItem: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTokens.duration.emphasis,
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
