"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

interface SplashScreenProps {
  onEnter: () => void
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onEnter }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: "blur(4px)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex h-full w-full select-none flex-col items-center justify-center bg-[#F2F0EB] px-6"
    >
      {/* Structural Blueprint Grids to maintain visual continuity */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1c1b1a01_1px,transparent_1px),linear-gradient(to_bottom,#1c1b1a01_1px,transparent_1px)] bg-[size:45px_45px]" />
      <div className="pointer-events-none absolute inset-6 border border-[#1C1B1A]/5 md:inset-10" />

      {/* Brand Identity Gate */}
      <div className="relative z-10 flex max-w-2xl items-center space-x-6 md:space-x-8">
        <Image
          src="/images/sparkle-logo.png"
          alt="Sparkle Interio Logo"
          width={80}
          height={80}
          priority
          className="h-16 w-16 object-contain md:h-20 md:w-20"
        />

        <div className="h-14 w-px bg-[#1C1B1A]/20" />

        <div className="flex flex-col items-start text-left">
          <h2 className="flex items-center font-sans text-2xl font-light uppercase leading-none tracking-[0.18em] text-[#1C1B1A] md:text-3xl">
            SP
            <span className="inline-block scale-x-95 select-none font-mono">
              Λ
            </span>
            RKLE INT
            <span className="font-mono tracking-[0.1em]">-</span>
            ERIO
          </h2>

          <div className="my-2 h-px w-full bg-[#8C2D38]/40" />

          <span className="block pl-0.5 font-mono text-[10px] uppercase tracking-[0.35em] text-[#8C2D38] md:text-xs">
            ELEVATION QUEST
          </span>
        </div>
      </div>

      {/* Action Trigger */}
      <div className="relative z-10 pt-16">
        <motion.button
          type="button"
          onClick={onEnter}
          whileHover={{
            backgroundColor: "#1C1B1A",
            color: "#F2F0EB",
            scale: 1.02,
          }}
          whileTap={{ scale: 0.98 }}
          className="cursor-pointer border border-[#1C1B1A]/40 bg-transparent px-12 py-4 font-mono text-xs uppercase tracking-[0.2em] text-[#1C1B1A] transition-colors duration-300"
        >
          Enter Site
        </motion.button>
      </div>
    </motion.div>
  )
}