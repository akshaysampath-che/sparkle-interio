"use client"

import { Container, Section } from "@/components/layout"
import { processContent } from "@/lib/config/home"
import { cn } from "@/lib/utils"

import { Reveal } from "../components/reveal"
import { SectionHeader } from "../components/section-header"

export function ProcessSection() {
  return (
    <Section spacing="lg" gap="lg" className="border-t border-border/50 bg-hero-paper/40">
      <Container>
        <Reveal>
          <SectionHeader
            overline={processContent.overline}
            heading={processContent.heading}
            description={processContent.description}
          />
        </Reveal>

        <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-6">
          {processContent.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.04} className="relative lg:col-span-1">
              <li className="relative flex gap-4 lg:flex-col lg:gap-0">
                {index < processContent.steps.length - 1 ? (
                  <span
                    className="absolute top-8 left-[0.55rem] hidden h-px w-[calc(100%+1.5rem)] bg-border lg:top-[1.35rem] lg:left-[2.25rem] lg:block lg:h-px lg:w-[calc(100%-1rem)]"
                    aria-hidden
                  />
                ) : null}

                <span
                  className={cn(
                    "relative z-10 flex size-9 shrink-0 items-center justify-center border border-border bg-background font-sans text-[0.7rem] font-medium text-burgundy",
                    "lg:mb-5"
                  )}
                  aria-hidden
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="border-l border-border/60 pl-5 lg:border-0 lg:pl-0">
                  <h3 className="type-label text-foreground">{step.title}</h3>
                  <p className="type-body-sm mt-2 text-muted-foreground">{step.description}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
