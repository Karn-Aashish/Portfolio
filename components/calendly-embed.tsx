"use client"

import { useEffect } from "react"

export default function CalendlyEmbed() {
  useEffect(() => {
    // Create a simple placeholder instead of loading Calendly
    const container = document.getElementById("calendly-container")
    if (container) {
      container.innerHTML = `
        <div style="border: 1px solid rgba(176, 0, 255, 0.3); border-radius: 0.5rem; padding: 2rem; text-align: center; height: 100%; background-color: rgba(176, 0, 255, 0.05);">
          <h3 style="margin-bottom: 1rem; font-weight: 600; background: linear-gradient(to right, #b000ff, #00e5ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Schedule a Meeting</h3>
          <p style="margin-bottom: 2rem; color: rgba(255, 255, 255, 0.7);">Book a consultation to discuss your web development project.</p>
          <a 
            href="https://calendly.com" 
            target="_blank" 
            rel="noopener noreferrer"
            style="display: inline-block; background-color: #b000ff; color: white; padding: 0.5rem 1rem; border-radius: 0.25rem; text-decoration: none; box-shadow: 0 0 10px rgba(176, 0, 255, 0.5);"
          >
            Open Calendly
          </a>
        </div>
      `
    }

    return () => {
      // Clean up
      if (container) {
        container.innerHTML = ""
      }
    }
  }, [])

  return <div id="calendly-container" style={{ minWidth: "320px", height: "400px" }}></div>
}

