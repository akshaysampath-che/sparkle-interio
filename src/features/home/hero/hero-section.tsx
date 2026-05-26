"use client"

import Image from "next/image"
import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { heroContent } from "@/lib/config/hero"
import { cn } from "@/lib/utils"

import {
  heroReducedMotionContainer,
  heroReducedMotionItem,
  heroStaggerContainer,
  heroStaggerItem,
} from "./hero-motion"
import { HeroWordmark } from "./hero-wordmark"

function HeroImageBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-hero-paper">
      <Image
        src={heroContent.heroImage.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className={cn(
          "object-cover",
          "object-[64%_center]",
          "sm:object-[62%_center]",
          "lg:object-center"
        )}
      />

      {/* Mobile/tablet readability veil */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(90deg,var(--hero-paper)_0%,color-mix(in_oklch,var(--hero-paper)_96%,transparent)_42%,color-mix(in_oklch,var(--hero-paper)_76%,transparent)_68%,color-mix(in_oklch,var(--hero-paper)_42%,transparent)_100%)]",
          "sm:bg-[linear-gradient(90deg,var(--hero-paper)_0%,color-mix(in_oklch,var(--hero-paper)_94%,transparent)_36%,color-mix(in_oklch,var(--hero-paper)_60%,transparent)_62%,color-mix(in_oklch,var(--hero-paper)_20%,transparent)_100%)]",
          "lg:bg-[linear-gradient(90deg,var(--hero-paper)_0%,color-mix(in_oklch,var(--hero-paper)_92%,transparent)_21%,color-mix(in_oklch,var(--hero-paper)_68%,transparent)_34%,color-mix(in_oklch,var(--hero-paper)_22%,transparent)_50%,transparent_68%)]"
        )}
      />

      {/* Top/bottom paper control */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[linear-gradient(180deg,var(--hero-paper)_0%,color-mix(in_oklch,var(--hero-paper)_58%,transparent)_14%,transparent_34%,transparent_72%,color-mix(in_oklch,var(--hero-paper)_76%,transparent)_100%)]",
          "lg:bg-[linear-gradient(180deg,var(--hero-paper)_0%,color-mix(in_oklch,var(--hero-paper)_48%,transparent)_10%,transparent_24%,transparent_78%,color-mix(in_oklch,var(--hero-paper)_62%,transparent)_100%)]"
        )}
      />

      {/* Subtle drafting grid continuity */}
      <div className="absolute inset-0 opacity-[0.07] sm:opacity-[0.08]">
        <svg className="h-full w-full" preserveAspectRatio="none">
          <defs>
            <pattern
              id="hero-page-grid"
              width="42"
              height="42"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M42 0 L0 0 0 42"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.35"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-page-grid)" />
        </svg>
      </div>

      {/* Quiet architectural boundary marks */}
      <div className="absolute inset-x-4 bottom-5 top-[calc(var(--nav-height)+1rem)] border border-charcoal/[0.035] sm:inset-x-[2.4vw] sm:bottom-10" />
      <div className="absolute left-6 top-[calc(var(--nav-height)+2.3rem)] h-8 w-px bg-charcoal/[0.09] sm:left-[3.4vw]" />
      <div className="absolute left-6 top-[calc(var(--nav-height)+2.3rem)] h-px w-8 bg-charcoal/[0.09] sm:left-[3.4vw]" />
    </div>
  )
}

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const container = reduceMotion ? heroReducedMotionContainer : heroStaggerContainer
  const item = reduceMotion ? heroReducedMotionItem : heroStaggerItem

  return (
    <section
      aria-labelledby="hero-heading"
      className={cn(
        "relative isolate min-h-[100svh] overflow-hidden bg-hero-paper text-charcoal",
        "dark:bg-hero-paper dark:text-charcoal"
      )}
    >
      <HeroImageBackground />

      <Container
        size="wide"
        className={cn(
          "relative z-10 grid min-h-[100svh] w-full min-w-0 grid-cols-1",
          "items-center pb-10 pt-[calc(var(--nav-height)+2.25rem)]",
          "sm:pb-12 sm:pt-[calc(var(--nav-height)+2.6rem)]",
          "lg:pb-12 lg:pt-[calc(var(--nav-height)+2rem)]"
        )}
      >
        <motion.div
          className={cn(
            "flex min-w-0 max-w-[36rem] flex-col gap-5 sm:gap-6",
            "lg:max-w-[37rem] xl:max-w-[38rem]"
          )}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <h1 id="hero-heading" className="sr-only">
            {heroContent.brandName}
          </h1>

          <motion.div variants={item} className="max-w-full overflow-visible">
            <HeroWordmark />
          </motion.div>

          <motion.p
            variants={item}
            className={cn(
              "max-w-[34rem] text-balance font-sans font-medium text-charcoal",
              "text-[clamp(1.8rem,9vw,2.55rem)] leading-[1.05] tracking-[-0.055em]",
              "sm:text-[clamp(2rem,5.4vw,2.75rem)]",
              "lg:text-[clamp(1.62rem,3.15vw,2.38rem)] lg:leading-[1.08]"
            )}
          >
            Geometry meets Intuition,
            <br className="hidden sm:block" />
            <span className="sm:ml-0"> Spaces tailored to emotion.</span>
          </motion.p>

          <motion.p
            variants={item}
            className={cn(
              "max-w-[34rem] font-sans leading-[1.76] text-earth",
              "text-[0.98rem] sm:text-[1.04rem]"
            )}
          >
            {heroContent.supporting}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5"
          >
            <Link
              href={heroContent.primaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 min-w-[14rem] rounded-none border-burgundy bg-burgundy px-7 text-[0.72rem] font-semibold uppercase tracking-[0.2em]",
                "text-hero-paper shadow-none transition-[background-color,border-color,color,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                "hover:-translate-y-0.5 hover:border-charcoal hover:bg-charcoal hover:text-hero-paper"
              )}
            >
              {heroContent.primaryCta.label}
            </Link>

            <Link
              href={heroContent.secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "group/button h-12 min-w-[12rem] rounded-none px-1 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-charcoal",
                "transition-[color,transform] duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
                "hover:-translate-y-0.5 hover:bg-transparent hover:text-burgundy"
              )}
            >
              {heroContent.secondaryCta.label}
              <ArrowRight
                className="size-3.5 opacity-70 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover/button:translate-x-1"
                strokeWidth={1.25}
                aria-hidden
              />
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}