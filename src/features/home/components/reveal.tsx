"use client"

import * as React from "react"
import { motion, useReducedMotion } from "framer-motion"

import { sectionReveal, sectionRevealReduced } from "@/features/home/motion"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  once?: boolean
  amount?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  once = true,
  amount = 0.22,
}: RevealProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={cn(className)}
      variants={reduceMotion ? sectionRevealReduced : sectionReveal}
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once,
        amount,
        margin: "0px 0px -12% 0px",
      }}
    >
      {children}
    </motion.div>
  )
}