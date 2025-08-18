"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface LoadingScreenProps {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [isGlitching, setIsGlitching] = useState(false)
  const [progress, setProgress] = useState(0)

  const steps = [
    "Initializing Code211 Hackathon...",
    "Loading resources...",
    "Establishing secure connection...",
    "Calibrating neural networks...",
    "Synchronizing with mainframe...",
    "Ready.",
  ]

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1
        } else {
          clearInterval(stepInterval)
          setTimeout(onComplete, 1000)
          return prev
        }
      })
    }, 800)

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 2
        }
        return prev
      })
    }, 100)

    // Glitch effect
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 150)
    }, 2000)

    return () => {
      clearInterval(stepInterval)
      clearInterval(progressInterval)
      clearInterval(glitchInterval)
    }
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-[#0d1117] z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Scanning lines */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1f6feb] to-transparent opacity-20"
          animate={{ y: ["-100%", "100%"] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ height: "2px" }}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(31, 111, 235, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31, 111, 235, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        {/* Terminal window */}
        <motion.div
          className="bg-[#161b22] border border-[#1f6feb] rounded-lg p-8 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            boxShadow: "0 0 50px rgba(31, 111, 235, 0.3)",
          }}
        >
          {/* Terminal header */}
          <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#1f6feb]/30">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-[#8b949e] text-sm font-mono ml-4">Code211_Terminal_v2.1.0</div>
          </div>

          {/* Terminal output */}
          <div className="text-left space-y-3 mb-8 min-h-[200px]">
            <AnimatePresence>
              {steps.slice(0, currentStep + 1).map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`font-mono text-sm ${
                    isGlitching && index === currentStep
                      ? "text-red-500 animate-pulse"
                      : index === steps.length - 1 && index === currentStep
                        ? "text-green-400"
                        : "text-[#e6edf3]"
                  }`}
                  style={{
                    textShadow: isGlitching && index === currentStep ? "1px 0 #ff0000, -1px 0 #00ffff" : "none",
                  }}
                >
                  <span className="text-[#1f6feb]">$</span> {step}
                  {index === currentStep && index < steps.length - 1 && (
                    <motion.span
                      className="inline-block w-2 h-4 bg-[#1f6feb] ml-1"
                      animate={{ opacity: [1, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                    />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="space-y-4">
            <div className="flex justify-between text-xs text-[#8b949e] font-mono">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-[#0d1117] rounded-full h-2 border border-[#1f6feb]/30">
              <motion.div
                className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] h-full rounded-full relative overflow-hidden"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              >
                {/* Scanning effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            {/* Blinking dots */}
            <div className="flex justify-center gap-1">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-[#1f6feb] rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Glitch overlay */}
        <AnimatePresence>
          {isGlitching && (
            <motion.div
              className="absolute inset-0 bg-red-500 mix-blend-multiply opacity-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
            />
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
