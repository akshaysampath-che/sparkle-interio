export type NavItem = {
  label: string
  href: `/${string}` | "/"
}

export const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
] as const satisfies readonly NavItem[]

/** Routes where the navbar starts transparent (hero overlap). */
export const transparentNavRoutes = ["/"] as const
