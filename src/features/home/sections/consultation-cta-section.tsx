import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container, Section } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { contactConfig } from "@/lib/config/contact"
import { consultationContent } from "@/lib/config/home"
import { cn } from "@/lib/utils"

import { Reveal } from "../components/reveal"

export function ConsultationCtaSection() {
  const whatsappHref =
    consultationContent.secondaryCta.href === "whatsapp"
      ? contactConfig.whatsapp
      : consultationContent.secondaryCta.href

  return (
    <Section spacing="lg" className="border-t border-border/50 bg-hero-paper/50">
      <Container>
        <Reveal>
          <div
            className={cn(
              "group/cta relative overflow-hidden border border-border/80 bg-background px-6 py-10 sm:px-10 sm:py-14 lg:px-14",
              "transition-[border-color,background-color,transform,box-shadow] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
              "hover:border-burgundy/30 hover:bg-hero-paper/70 hover:shadow-[0_28px_90px_color-mix(in_oklch,var(--palette-charcoal)_6%,transparent)]"
            )}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.07]"
              aria-hidden
            >
              <svg className="h-full w-full" preserveAspectRatio="none">
                <defs>
                  <pattern
                    id="cta-grid"
                    width="36"
                    height="36"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M36 0 L0 0 0 36"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.45"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <span
              className="absolute left-0 top-0 h-8 w-px bg-burgundy/50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:h-14"
              aria-hidden
            />
            <span
              className="absolute left-0 top-0 h-px w-8 bg-burgundy/50 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:w-14"
              aria-hidden
            />
            <span
              className="absolute bottom-0 right-0 h-8 w-px bg-border transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:h-14 group-hover/cta:bg-burgundy/25"
              aria-hidden
            />
            <span
              className="absolute bottom-0 right-0 h-px w-8 bg-border transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/cta:w-14 group-hover/cta:bg-burgundy/25"
              aria-hidden
            />

            <div className="relative z-10">
              <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-burgundy-muted">
                {consultationContent.overline}
              </p>

              <h2 className="type-h2 mt-4 max-w-xl text-balance text-foreground">
                {consultationContent.heading}
              </h2>

              <p className="type-body-lg mt-4 max-w-lg text-muted-foreground">
                {consultationContent.description}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                <Link
                  href={consultationContent.primaryCta.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "group/button h-11 rounded-none border-burgundy bg-burgundy px-6 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-hero-paper",
                    "transition-[background-color,border-color,color,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                    "hover:-translate-y-0.5 hover:border-charcoal hover:bg-charcoal hover:text-hero-paper"
                  )}
                >
                  {consultationContent.primaryCta.label}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/button:translate-x-1"
                    strokeWidth={1.4}
                    aria-hidden
                  />
                </Link>

                <Link
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "lg" }),
                    "h-11 rounded-none px-4 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-earth",
                    "transition-[color,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                    "hover:-translate-y-0.5 hover:bg-transparent hover:text-burgundy"
                  )}
                >
                  {contactConfig.whatsappLabel}
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}