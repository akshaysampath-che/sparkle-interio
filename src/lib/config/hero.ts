import { siteConfig } from "./site"

export const heroContent = {
  brandName: siteConfig.name,
  tagline: siteConfig.tagline,
  supporting:
    "We shape interiors where measured geometry and intuitive craft converge — calm, enduring environments that balance artistic vision, emotional resonance, and thoughtful practicality.",
  primaryCta: {
    label: "Book Consultation",
    href: "/contact",
  },
  secondaryCta: {
    label: "Explore Projects",
    href: "/projects",
  },
} as const
