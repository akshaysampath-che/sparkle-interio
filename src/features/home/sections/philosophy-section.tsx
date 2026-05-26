import { Container, Section } from "@/components/layout"
import { philosophyContent } from "@/lib/config/home"
import { cn } from "@/lib/utils"

import { DraftingDivider } from "../components/drafting-divider"
import { Reveal } from "../components/reveal"
import { SectionHeader } from "../components/section-header"

const philosophyAnchors = [
  {
    label: "Emotion",
    target: "philosophy-emotion",
  },
  {
    label: "Geometry",
    target: "philosophy-geometry",
  },
  {
    label: "Craft",
    target: "philosophy-craft",
  },
  {
    label: "Function",
    target: "philosophy-function",
  },
] as const

const valueIds = [
  "philosophy-emotion",
  "philosophy-geometry",
  "philosophy-craft",
  "philosophy-function",
] as const

function PhilosophyBoard() {
  return (
    <div
      className="group/board relative mt-10 hidden aspect-[5/3] max-w-md overflow-hidden border border-border/70 bg-hero-paper transition-[border-color,background-color,transform,box-shadow] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-1 hover:border-burgundy/30 hover:bg-hero-paper/90 hover:shadow-[0_24px_70px_color-mix(in_oklch,var(--palette-charcoal)_6%,transparent)] lg:block"
      aria-hidden
    >
      <div className="absolute inset-0 opacity-[0.12]">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="philosophy-board-grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M24 0 L0 0 0 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.35"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#philosophy-board-grid)" />
        </svg>
      </div>

      <svg
        className="absolute inset-0 h-full w-full p-6 text-hero-line transition-opacity duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/board:opacity-90"
        viewBox="0 0 200 120"
        fill="none"
      >
        <rect
          x="10"
          y="10"
          width="180"
          height="100"
          stroke="currentColor"
          strokeWidth="0.6"
          opacity="0.72"
        />
        <line
          x1="10"
          y1="70"
          x2="190"
          y2="70"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.65"
        />
        <rect
          x="120"
          y="28"
          width="50"
          height="34"
          stroke="currentColor"
          strokeWidth="0.5"
          opacity="0.72"
        />
        <line
          x1="10"
          y1="10"
          x2="60"
          y2="110"
          stroke="currentColor"
          strokeWidth="0.35"
          opacity="0.5"
        />
        <path
          d="M38 88 Q56 70 78 78 T118 72"
          stroke="currentColor"
          strokeWidth="0.45"
          opacity="0.56"
        />
        <circle
          cx="146"
          cy="45"
          r="9"
          stroke="currentColor"
          strokeWidth="0.4"
          opacity="0.58"
        />
      </svg>

      <span className="absolute left-0 top-0 h-10 w-px bg-burgundy/40 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/board:h-16" />
      <span className="absolute left-0 top-0 h-px w-10 bg-burgundy/40 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/board:w-16" />
      <span className="absolute bottom-0 right-0 h-10 w-px bg-charcoal/12 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/board:h-16 group-hover/board:bg-burgundy/25" />
      <span className="absolute bottom-0 right-0 h-px w-10 bg-charcoal/12 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/board:w-16 group-hover/board:bg-burgundy/25" />
    </div>
  )
}

export function PhilosophySection() {
  return (
    <Section spacing="lg" className="border-t border-border/50 bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <SectionHeader
              overline={philosophyContent.overline}
              heading={philosophyContent.heading}
            />
          </Reveal>

          <Reveal className="lg:col-span-7 lg:pt-14" delay={0.06}>
            <div className="max-w-prose">
              <p className="type-body-lg text-pretty text-muted-foreground">
                {philosophyContent.body}
              </p>

              <nav
                className="mt-8 flex flex-wrap gap-3"
                aria-label="Studio philosophy values"
              >
                {philosophyAnchors.map((item) => (
                  <a
                    key={item.target}
                    href={`#${item.target}`}
                    className="group/value-link border border-border/70 bg-hero-paper/45 px-3 py-2 font-sans text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-earth transition-[border-color,color,background-color,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] hover:-translate-y-0.5 hover:border-burgundy/35 hover:bg-hero-paper hover:text-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <PhilosophyBoard />
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <DraftingDivider className="my-12 lg:my-16" />

          <ul className="grid gap-6 sm:grid-cols-2 lg:gap-x-8 lg:gap-y-8">
            {philosophyContent.values.map((value, index) => (
              <li
                id={valueIds[index]}
                key={value.title}
                className={cn(
                  "group/value relative scroll-mt-[calc(var(--nav-height)+2.5rem)] overflow-hidden border-t border-border/70 bg-background/40 px-0 pt-6 transition-[border-color,background-color,transform] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] target:border-burgundy/50 target:bg-hero-paper/50 hover:-translate-y-1 hover:border-burgundy/35 hover:bg-hero-paper/35 sm:px-5 sm:pb-5",
                  index % 2 === 1 && "lg:mt-8"
                )}
              >
                <span
                  className="absolute left-0 top-0 h-px w-10 bg-burgundy/45 transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/value:w-20"
                  aria-hidden
                />

                <div className="flex items-start gap-5">
                  <span
                    className="mt-1 hidden shrink-0 font-sans text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-burgundy/60 sm:block"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="type-h4 font-heading text-foreground transition-colors duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/value:text-burgundy">
                      {value.title}
                    </h3>

                    <p className="type-body mt-3 max-w-md text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </Section>
  )
}