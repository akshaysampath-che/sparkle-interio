/**
 * Sparkle Interio — programmatic design tokens
 * Mirrors CSS variables for use in JS (Framer Motion, etc.)
 */

export const palette = {
  ivory: "var(--palette-ivory)",
  beige: "var(--palette-beige)",
  earth: "var(--palette-earth)",
  charcoal: "var(--palette-charcoal)",
  gold: "var(--palette-gold)",
} as const

export const spacing = {
  0: "var(--space-0)",
  1: "var(--space-1)",
  2: "var(--space-2)",
  3: "var(--space-3)",
  4: "var(--space-4)",
  5: "var(--space-5)",
  6: "var(--space-6)",
  8: "var(--space-8)",
  10: "var(--space-10)",
  12: "var(--space-12)",
  16: "var(--space-16)",
  20: "var(--space-20)",
  24: "var(--space-24)",
  32: "var(--space-32)",
} as const

export const sectionSpacing = {
  xs: "var(--section-y-xs)",
  sm: "var(--section-y-sm)",
  md: "var(--section-y-md)",
  lg: "var(--section-y-lg)",
  xl: "var(--section-y-xl)",
} as const

export const containerWidth = {
  default: "var(--container-max)",
  wide: "var(--container-max-wide)",
  narrow: "var(--container-max-narrow)",
} as const

/** Durations in seconds for Framer Motion */
export const motion = {
  duration: {
    instant: 0.1,
    fast: 0.15,
    normal: 0.28,
    slow: 0.42,
    emphasis: 0.64,
  },
  ease: {
    standard: [0.4, 0, 0.2, 1] as const,
    emphasis: [0.22, 1, 0.36, 1] as const,
    reveal: [0.16, 1, 0.3, 1] as const,
    exit: [0.4, 0, 1, 1] as const,
  },
} as const

export type SectionSpacingKey = keyof typeof sectionSpacing
export type ContainerWidthKey = keyof typeof containerWidth
