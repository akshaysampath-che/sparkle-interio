import { siteConfig } from "./site"

export const heroContent = {
  brandName: siteConfig.name,
  taglinePrimary: "Geometry meets Intuition, Spaces tailored to emotion.",
  taglineSecondary: "Elevation Quest",
  supporting:
    "We shape interiors where measured geometry and intuitive craft converge, calm enduring environments that balance artistic vision, emotional resonance, and thoughtful practicality.",
  primaryCta: {
    label: "Book Consultation",
    href: "/#contact",
  },
  secondaryCta: {
    label: "Explore Projects",
    href: "/#projects",
  },
  heroImage: {
    /** Put your preferred homepage image at: public/images/hero-interior.jpg */
    src: "/images/hero-interior.jpg",
    alt: "Sparkle Interio interior design reference image",
  },
} as const