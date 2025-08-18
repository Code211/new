"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { BackgroundAnimation } from "@/components/background-animation"
import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Schedule } from "@/components/schedule"
import { FAQ } from "@/components/faq"
import { Sponsors } from "@/components/sponsors"
import { ImportantLinks } from "@/components/important-links"
import { Footer } from "@/components/footer"
import { Contact } from "@/components/contact"

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== "undefined") {
      const hasVisited = sessionStorage.getItem("hasVisitedCode211")
      const isNavigation =
        window.performance.navigation?.type === 1 ||
        (window.performance.getEntriesByType("navigation")[0] as any)?.type === "navigate"

      // Only show loading on first visit or manual reload
      return !hasVisited || !isNavigation
    }
    return true
  })

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisitedCode211")

    if (hasVisited) {
      // Skip loading screen if user has already visited
      setIsLoading(false)
    } else {
      // Mark as visited for future navigation
      sessionStorage.setItem("hasVisitedCode211", "true")
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" onComplete={handleLoadingComplete} />
        ) : (
          <>
            <BackgroundAnimation />
            <Navbar />
            <main className="relative z-10">
              <div id="hero">
                <Hero />
              </div>
              <div id="schedule">
                <Schedule />
              </div>
              <div id="faq">
                <FAQ />
              </div>
              <div id="sponsors">
                <Sponsors />
              </div>
              <div>
                <ImportantLinks />
              </div>
              <div id="contact">
                <Contact />
              </div>
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
