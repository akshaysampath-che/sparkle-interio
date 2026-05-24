"use client"

import Link from "next/link"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Container } from "@/components/layout"
import { buttonVariants } from "@/components/ui/button"
import { heroContent } from "@/lib/config/hero"
import { cn } from "@/lib/utils"

import { HeroBackground } from "./hero-background"
import {
  heroReducedMotionContainer,
  heroReducedMotionItem,
  heroStaggerContainer,
  heroStaggerItem,
} from "./hero-motion"

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const container = reduceMotion ? heroReducedMotionContainer : heroStaggerContainer
  const item = reduceMotion ? heroReducedMotionItem : heroStaggerItem

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative flex min-h-dvh flex-col justify-end overflow-hidden lg:justify-center"
    >
      <HeroBackground />

      <Container
        size="wide"
        className={cn(
          "relative z-10 grid w-full flex-1 items-end gap-10 pb-12 pt-[calc(var(--nav-height)+2rem)]",
          "sm:pb-16 sm:pt-[calc(var(--nav-height)+2.5rem)]",
          "lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-20 lg:pt-[calc(var(--nav-height)+3rem)]",
          "xl:gap-16"
        )}
      >
        <motion.div
          className="flex max-w-2xl flex-col gap-6 sm:gap-8 lg:col-span-6 lg:col-start-1 xl:col-span-5 xl:max-w-xl"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={item} className="type-overline text-muted-foreground">
            Interior architecture studio
          </motion.p>

          <motion.div variants={item} className="space-y-3 sm:space-y-4">
            <h1
              id="hero-heading"
              className="type-display text-balance text-foreground"
            >
              {heroContent.brandName}
            </h1>
            <p className="font-heading text-xl leading-snug tracking-[var(--tracking-heading)] text-foreground/90 sm:text-2xl">
              {heroContent.tagline}
            </p>
          </motion.div>

          <motion.p
            variants={item}
            className="type-body-lg max-w-prose text-pretty text-muted-foreground"
          >
            {heroContent.supporting}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Link
              href={heroContent.primaryCta.href}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 min-w-[11rem] rounded-md px-6 text-[0.9375rem] tracking-wide",
                "bg-primary text-primary-foreground shadow-sm",
                "transition-[background-color,box-shadow] duration-[var(--duration-fast)]",
                "hover:bg-primary/90 hover:shadow-md"
              )}
            >
              {heroContent.primaryCta.label}
            </Link>
            <Link
              href={heroContent.secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "group/button h-11 min-w-[11rem] rounded-md border-border/80 bg-background/40 px-6 text-[0.9375rem] tracking-wide backdrop-blur-sm",
                "transition-[background-color,border-color] duration-[var(--duration-fast)]",
                "hover:border-brand/40 hover:bg-background/70"
              )}
            >
              {heroContent.secondaryCta.label}
              <ArrowRight
                className="size-4 opacity-70 transition-transform duration-[var(--duration-fast)] group-hover/button:translate-x-0.5"
                strokeWidth={1.5}
                aria-hidden
              />
            </Link>
          </motion.div>
        </motion.div>

        {/* Asymmetric balance — desktop spatial rhythm */}
        <motion.div
          className="hidden lg:col-span-5 lg:col-start-8 lg:block xl:col-span-6 xl:col-start-7"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: reduceMotion ? 0 : 0.8,
            delay: reduceMotion ? 0 : 0.45,
            ease: [0.16, 1, 0.3, 1],
          }}
          aria-hidden
        >
          <div className="relative ml-auto aspect-[4/5] max-h-[min(58vh,560px)] w-full max-w-md">
            <div className="absolute inset-0 border border-border/50 bg-[color-mix(in_oklch,var(--palette-beige)_25%,transparent)]" />
            <div className="absolute top-8 left-8 right-16 bottom-16 border border-dashed border-border/60" />
            <div
              className="absolute -top-px left-12 h-px w-24 bg-brand/60"
              aria-hidden
            />
            <div
              className="absolute right-8 bottom-12 h-24 w-px bg-border"
              aria-hidden
            />
            <p className="absolute bottom-6 left-8 max-w-[12rem] type-caption leading-relaxed">
              Spatial calm through proportion, light, and material honesty.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
