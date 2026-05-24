"use client"

import * as React from "react"

export function useLockBodyScroll(locked: boolean) {
  React.useEffect(() => {
    if (!locked) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [locked])
}
