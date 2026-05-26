import type { Variants } from "framer-motion"

const premiumEase: [number, number, number, number] = [0.19, 1, 0.22, 1]

export const sectionReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(8px)",
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.82,
      ease: premiumEase,
      delay,
    },
  }),
}

export const sectionRevealReduced: Variants = {
  hidden: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  },
}