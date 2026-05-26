import Link from "next/link"

import { mainNavItems } from "@/lib/config/navigation"
import { contactConfig } from "@/lib/config/contact"
import { siteConfig } from "@/lib/config/site"

import { Container } from "./container"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border/60 bg-hero-paper/60">
      <Container className="section-y-md">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex flex-col gap-2">
              <span className="font-sans text-sm font-medium uppercase tracking-[0.14em] text-foreground">
                Sparkle <span className="text-burgundy">I</span>nterio
              </span>
              <span className="max-w-xs font-sans text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.12em] text-muted-foreground">
                {siteConfig.tagline}
              </span>
            </Link>
          </div>

          <nav className="lg:col-span-4" aria-label="Footer">
            <p className="type-overline text-muted-foreground">Navigate</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-3 lg:grid-cols-2">
              {mainNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="type-body-sm text-muted-foreground transition-colors duration-[var(--duration-fast)] hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="type-overline text-muted-foreground">Contact</p>
            <ul className="mt-4 space-y-2 type-body-sm text-muted-foreground">
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="transition-colors duration-[var(--duration-fast)] hover:text-foreground"
                >
                  {contactConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-[var(--duration-fast)] hover:text-foreground"
                >
                  {contactConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={contactConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-[var(--duration-fast)] hover:text-foreground"
                >
                  {contactConfig.instagram}
                </a>
              </li>
              <li>{contactConfig.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="type-caption">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="type-caption">Drafted with spatial intention.</p>
        </div>
      </Container>
    </footer>
  )
}
