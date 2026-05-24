/**
 * Sparkle Interio — typography metadata
 */

export const typeScale = {
  display: "var(--text-display)",
  h1: "var(--text-5xl)",
  h2: "var(--text-4xl)",
  h3: "var(--text-3xl)",
  h4: "var(--text-2xl)",
  bodyLg: "var(--text-lg)",
  body: "var(--text-base)",
  bodySm: "var(--text-sm)",
  caption: "var(--text-xs)",
} as const

export const typeUtilities = {
  display: "type-display",
  h1: "type-h1",
  h2: "type-h2",
  h3: "type-h3",
  h4: "type-h4",
  bodyLg: "type-body-lg",
  body: "type-body",
  bodySm: "type-body-sm",
  caption: "type-caption",
  overline: "type-overline",
  label: "type-label",
} as const

export type TypeUtilityKey = keyof typeof typeUtilities
