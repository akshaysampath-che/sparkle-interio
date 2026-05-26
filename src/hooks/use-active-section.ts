"use client"

import * as React from "react"

import { homeSectionIds } from "@/lib/config/navigation"

type HomeSectionId = (typeof homeSectionIds)[number]
type SectionNavigationEvent = CustomEvent<{ sectionId: HomeSectionId }>

const NAVIGATION_EVENT = "sparkle:navigate-section"

function isHomeSectionId(value: string): value is HomeSectionId {
  return homeSectionIds.includes(value as HomeSectionId)
}

export function announceSectionNavigation(sectionId: string) {
  if (!isHomeSectionId(sectionId)) return

  window.dispatchEvent(
    new CustomEvent(NAVIGATION_EVENT, {
      detail: { sectionId },
    })
  )
}

export function useActiveSection() {
  const [activeSection, setActiveSection] = React.useState<HomeSectionId>("home")
  const lockUntilRef = React.useRef(0)
  const frameRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const getNavHeight = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--nav-height")
        .trim()

      return Number.parseFloat(raw) || 80
    }

    const updateFromScroll = (force = false) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }

      frameRef.current = requestAnimationFrame(() => {
        const now = performance.now()

        if (!force && now < lockUntilRef.current) return

        const checkpoint = getNavHeight() + window.innerHeight * 0.34
        let current: HomeSectionId = "home"

        for (const id of homeSectionIds) {
          const section = document.getElementById(id)
          if (!section) continue

          const rect = section.getBoundingClientRect()

          if (rect.top <= checkpoint && rect.bottom > getNavHeight()) {
            current = id
          }
        }

        setActiveSection(current)
      })
    }

    const handleScroll = () => updateFromScroll(false)
    const handleResize = () => updateFromScroll(true)

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")

      if (hash && isHomeSectionId(hash)) {
        lockUntilRef.current = performance.now() + 700
        setActiveSection(hash)
        return
      }

      updateFromScroll(true)
    }

    const handleProgrammaticNavigation = (event: Event) => {
      const sectionId = (event as SectionNavigationEvent).detail?.sectionId
      if (!sectionId) return

      lockUntilRef.current = performance.now() + 900
      setActiveSection(sectionId)
    }

    handleHashChange()
    updateFromScroll(true)

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleResize)
    window.addEventListener("hashchange", handleHashChange)
    window.addEventListener(NAVIGATION_EVENT, handleProgrammaticNavigation)

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current)
      }

      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("hashchange", handleHashChange)
      window.removeEventListener(NAVIGATION_EVENT, handleProgrammaticNavigation)
    }
  }, [])

  return activeSection
}