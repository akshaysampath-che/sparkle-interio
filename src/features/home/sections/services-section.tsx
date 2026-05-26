"use client"

import { ArrowRight } from "lucide-react"

import { Container, Section } from "@/components/layout"
import { servicesContent } from "@/lib/config/home"

import { DraftingCard } from "../components/drafting-card"
import { Reveal } from "../components/reveal"
import { SectionHeader } from "../components/section-header"

export function ServicesSection() {
  return (
    <Section
      spacing="lg"
      gap="lg"
      className="border-t border-border/50 bg-hero-paper/40"
    >
      <Container>
        <Reveal>
          <SectionHeader
            overline={servicesContent.overline}
            heading={servicesContent.heading}
            description={servicesContent.description}
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {servicesContent.items.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.045}>
              <li className="h-full">
                <DraftingCard
                  accent
                  className="relative h-full min-h-[13.5rem] overflow-hidden"
                >
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100"
                    aria-hidden
                  >
                    <svg className="h-full w-full" preserveAspectRatio="none">
                      <defs>
                        <pattern
                          id={`service-grid-${index}`}
                          width="32"
                          height="32"
                          patternUnits="userSpaceOnUse"
                        >
                          <path
                            d="M32 0 L0 0 0 32"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="0.35"
                          />
                        </pattern>
                      </defs>
                      <rect
                        width="100%"
                        height="100%"
                        fill={`url(#service-grid-${index})`}
                        className="text-hero-line"
                        opacity="0.16"
                      />
                    </svg>
                  </div>

                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between gap-5">
                      <h3 className="type-h4 font-sans font-medium tracking-[0.02em] text-foreground transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-burgundy">
                        {service.title}
                      </h3>

                      <span
                        className="mt-1 inline-flex size-7 shrink-0 items-center justify-center border border-border/70 text-burgundy opacity-0 transition-[opacity,transform,border-color] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:border-burgundy/35"
                        aria-hidden
                      >
                        <ArrowRight className="size-3.5" strokeWidth={1.35} />
                      </span>
                    </div>

                    <p className="type-body mt-3 text-muted-foreground">
                      {service.description}
                    </p>

                    <div
                      className="mt-auto pt-6 opacity-0 transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:opacity-100"
                      aria-hidden
                    >
                      <span className="block h-px w-16 bg-burgundy/35" />
                    </div>
                  </div>
                </DraftingCard>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}