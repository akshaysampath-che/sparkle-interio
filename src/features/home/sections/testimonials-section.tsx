"use client"

import { Container, Section } from "@/components/layout"
import { testimonialsContent } from "@/lib/config/home"

import { DraftingDivider } from "../components/drafting-divider"
import { Reveal } from "../components/reveal"
import { SectionHeader } from "../components/section-header"

export function TestimonialsSection() {
  return (
    <Section spacing="lg" gap="lg" className="border-t border-border/50 bg-background">
      <Container>
        <Reveal>
          <SectionHeader
            overline={testimonialsContent.overline}
            heading={testimonialsContent.heading}
            align="center"
            className="mx-auto"
          />
        </Reveal>

        <ul className="grid gap-8 md:grid-cols-3 md:gap-6">
          {testimonialsContent.items.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.06}>
              <li
                className="group relative flex h-full flex-col overflow-hidden border-t border-border/80 bg-background/40 pt-6 transition-[border-color,background-color,transform] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1 hover:border-burgundy/35 hover:bg-hero-paper/35 md:px-5 md:pb-5"
              >
                <span
                  className="absolute left-0 top-0 h-px w-10 bg-burgundy/45 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:w-20"
                  aria-hidden
                />

                <span
                  className="pointer-events-none absolute right-4 top-4 font-heading text-7xl leading-none text-burgundy/[0.055] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-1 group-hover:text-burgundy/[0.09]"
                  aria-hidden
                >
                  ”
                </span>

                <blockquote className="relative z-10">
                  <p className="font-heading text-lg leading-relaxed text-foreground/90 transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>

                <DraftingDivider className="my-5 max-w-[4rem] transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:max-w-[5.5rem]" />

                <footer className="relative z-10 mt-auto">
                  <cite className="not-italic">
                    <span className="type-label block text-foreground transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:text-burgundy">
                      {item.name}
                    </span>
                    <span className="type-caption mt-1 block">{item.detail}</span>
                  </cite>
                </footer>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}