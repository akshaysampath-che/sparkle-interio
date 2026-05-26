
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Container, Section } from "@/components/layout"
import { projectsContent } from "@/lib/config/home"
import { cn } from "@/lib/utils"

import { Reveal } from "../components/reveal"
import { SectionHeader } from "../components/section-header"

const spanClasses = {
  large: "md:col-span-7 md:row-span-2",
  medium: "md:col-span-5",
  small: "md:col-span-5",
} as const

function ProjectPlaceholder({ id }: { id: string }) {
  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden border border-border/70 bg-[color-mix(in_oklch,var(--hero-paper)_90%,var(--muted))] md:aspect-auto md:h-full md:min-h-[220px]"
      aria-hidden
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.16] text-hero-line transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:opacity-[0.26]"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={`proj-grid-${id}`}
            width="24"
            height="24"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M24 0 L0 0 0 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.4"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#proj-grid-${id})`} />
      </svg>

      <div className="absolute inset-0 bg-linear-to-t from-charcoal/10 via-transparent to-transparent" />

      <div className="absolute inset-x-6 top-6 h-px origin-left scale-x-0 bg-burgundy/45 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:scale-x-100" />
      <div className="absolute bottom-6 right-6 h-10 w-px origin-bottom scale-y-0 bg-charcoal/18 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:scale-y-100" />
      <div className="absolute bottom-6 right-6 h-px w-10 origin-right scale-x-0 bg-charcoal/18 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:scale-x-100" />

      <div className="absolute -left-1/3 top-0 h-full w-1/3 skew-x-[-18deg] bg-white/20 opacity-0 blur-sm transition-all duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:left-[120%] group-hover/card:opacity-100" />
    </div>
  )
}

export function ProjectsSection() {
  return (
    <Section spacing="lg" gap="lg" className="border-t border-border/50 bg-background">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <SectionHeader
              overline={projectsContent.overline}
              heading={projectsContent.heading}
              description={projectsContent.description}
            />
          </Reveal>

          <Reveal delay={0.05}>
            <Link
              href="/#projects"
              className="group inline-flex shrink-0 items-center gap-2 font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-burgundy transition-[color,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-0.5 hover:text-charcoal"
            >
              View full portfolio
              <ArrowRight
                className="size-3.5 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1"
                strokeWidth={1.4}
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>

        <ul className="grid gap-5 md:grid-cols-12 md:gap-6">
          {projectsContent.items.map((project, index) => (
            <Reveal
              key={project.name}
              delay={index * 0.05}
              className={cn("md:col-span-6", spanClasses[project.span])}
            >
              <li>
                <article
                  className={cn(
                    "group/card flex h-full flex-col overflow-hidden border border-border/80 bg-background",
                    "transition-[border-color,background-color,transform,box-shadow] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)]",
                    "hover:-translate-y-1 hover:border-burgundy/35 hover:bg-hero-paper/40 hover:shadow-[0_24px_70px_color-mix(in_oklch,var(--palette-charcoal)_7%,transparent)]"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="transition-transform duration-1000 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:scale-[1.018]">
                      <ProjectPlaceholder id={`p-${index}`} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-2 border-t border-border/60 p-5 transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/card:border-burgundy/18 sm:p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="type-h4 font-heading text-foreground transition-colors duration-500 group-hover/card:text-burgundy">
                        {project.name}
                      </h3>

                      <span className="font-sans text-[0.65rem] uppercase tracking-[0.12em] text-muted-foreground">
                        {project.location}
                      </span>
                    </div>

                    <p className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.1em] text-burgundy-muted">
                      {project.category}
                    </p>

                    <p className="type-body-sm mt-1 text-muted-foreground">
                      {project.description}
                    </p>
                  </div>
                </article>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </Section>
  )
}