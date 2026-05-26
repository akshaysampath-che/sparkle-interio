export type NavItem = {
  label: string
  href: "/" | `/#${string}` | `/${string}`
  sectionId?: string
}

export const mainNavItems = [
  { label: "Home", href: "/#home", sectionId: "home" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Portfolio", href: "/#portfolio", sectionId: "portfolio" },
  { label: "Projects", href: "/#projects", sectionId: "projects" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Testimonials", href: "/#testimonials", sectionId: "testimonials" },
  { label: "Contact", href: "/#contact", sectionId: "contact" },
  { label: "Blog", href: "/#blog", sectionId: "blog" },
] as const satisfies readonly NavItem[]

export const homeSectionIds = [
  "home",
  "about",
  "portfolio",
  "projects",
  "services",
  "testimonials",
  "contact",
  "blog",
] as const

export const transparentNavRoutes = ["/"] as const