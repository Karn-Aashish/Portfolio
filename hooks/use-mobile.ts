"use client"

import { useState, useEffect } from "react"

export const useMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Adjust breakpoint as needed (md:768px in tailwind.config.ts)
    }

    // Set initial value
    handleResize()

    // Listen for window resize events
    window.addEventListener("resize", handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return isMobile
}

