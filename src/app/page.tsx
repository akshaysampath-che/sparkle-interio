import Link from "next/link"

import { Container, SiteFooter } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import {
  ConsultationCtaSection,
  HeroSection,
  PhilosophySection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
} from "@/features/home"
import { cn } from "@/lib/utils"

const projectTypes = [
  "Residential Interiors",
  "Modular Kitchens",
  "Ceiling Works",
  "Commercial Spaces",
  "Furniture & Styling",
  "Elevation Concepts",
]

function ProjectArchiveSection() {
  return (
    <section className="w-full section-y-lg border-t border-border/50 bg-background">
      <Container size="default">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-burgundy">
              Projects
            </p>

            <h2 className="mt-6 font-heading text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[1] tracking-[-0.045em] text-charcoal">
              Spaces drafted with calm precision.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-14">
            <p className="max-w-2xl font-sans text-lg leading-8 text-earth">
              A dedicated project archive is being prepared. Soon, this space
              will showcase completed homes, modular kitchens, commercial
              interiors, ceiling details, furniture systems, and elevation-led
              spatial concepts.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {projectTypes.map((item) => (
                <div
                  key={item}
                  className="border border-border/70 bg-hero-paper/45 px-5 py-4 font-sans text-sm font-medium uppercase tracking-[0.12em] text-charcoal"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-9">
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "rounded-none border-burgundy bg-burgundy px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-hero-paper hover:border-charcoal hover:bg-charcoal hover:text-hero-paper"
                )}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function BlogPreviewSection() {
  return (
    <section className="w-full section-y-lg border-t border-border/50 bg-hero-paper/45">
      <Container size="default">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-burgundy">
              Blog
            </p>

            <h2 className="mt-6 font-heading text-[clamp(2.6rem,6vw,4.75rem)] font-medium leading-[1] tracking-[-0.045em] text-charcoal">
              Interior notes are being drafted.
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-14">
            <p className="max-w-2xl font-sans text-lg leading-8 text-earth">
              The Sparkle Interio journal will soon share design notes,
              material guides, spatial planning ideas, and project stories.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {["Design Notes", "Material Guides", "Project Stories"].map(
                (item) => (
                  <div
                    key={item}
                    className="border border-border/70 bg-background/55 px-5 py-5 font-sans text-sm font-medium uppercase tracking-[0.12em] text-charcoal"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <PhilosophySection />
      </div>

      <div id="portfolio">
        <ProjectsSection />
      </div>

      <div id="projects">
        <ProjectArchiveSection />
      </div>

      <div id="services">
        <ServicesSection />
      </div>

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="contact">
        <ConsultationCtaSection />
      </div>

      <div id="blog">
        <BlogPreviewSection />
      </div>

      <SiteFooter />
    </>
  )
}