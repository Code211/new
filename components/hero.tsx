"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export function Hero() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [isGlitching, setIsGlitching] = useState(false)
  const { scrollY } = useScroll()

  // Enhanced parallax effects
  const titleY = useTransform(scrollY, [0, 500], [0, -150])
  const descriptionY = useTransform(scrollY, [0, 500], [0, -75])
  const countdownY = useTransform(scrollY, [0, 500], [0, -50])

  // Set hackathon date (example: March 15, 2025)
  const hackathonDate = new Date("2026-04-11T09:00:00").getTime()

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = hackathonDate - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [hackathonDate])

  // Enhanced glitch effect
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }, 6000)

    return () => clearInterval(glitchInterval)
  }, [])

  const titleText = "Code211 Hackathon 2025"
  const description = "48 hours. One mission. Code the future."

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[#0d1117]/60 z-5" />

      {/* Enhanced background effects */}
      <div className="absolute inset-0 z-0">
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-[#1f6feb]/15 via-transparent to-transparent" />

        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-[#1f6feb]/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-[#58a6ff]/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />

        <div className="absolute inset-0 overflow-hidden opacity-8">
          {["function()", "const data =", "=> {", "return", "async", "await"].map((code, i) => (
            <motion.div
              key={i}
              className="absolute text-[#1f6feb] font-mono text-xs"
              style={{
                left: `${5 + i * 10}%`,
                top: `${5 + i * 8}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.5,
              }}
            >
              {code}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20">
        <motion.div style={{ y: titleY }} className="mb-6">
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {titleText.split(" ").map((word, wordIndex) => (
              <div key={wordIndex} className="inline-block mr-2 md:mr-4">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={`${wordIndex}-${charIndex}`}
                    className={`inline-block ${
                      isGlitching && Math.random() > 0.8
                        ? "text-red-500 transform skew-x-12 scale-110"
                        : "text-[#e6edf3]"
                    }`}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: (wordIndex * word.length + charIndex) * 0.05,
                      ease: "easeOut",
                    }}
                    style={{
                      textShadow: isGlitching
                        ? "3px 0 #ff0000, -3px 0 #00ffff, 0 0 30px rgba(31, 111, 235, 0.8)"
                        : "0 0 30px rgba(31, 111, 235, 0.6), 0 0 60px rgba(31, 111, 235, 0.3)",
                      transformOrigin: "center bottom",
                    }}
                    whileHover={{
                      scale: 1.1,
                      textShadow: "0 0 40px rgba(31, 111, 235, 1)",
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.h1>
        </motion.div>

        <motion.div
          style={{ y: descriptionY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-[#8b949e] font-light tracking-wide leading-relaxed"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {description.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.1,
                    delay: 3 + index * 0.02,
                  }}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 10px rgba(139, 148, 158, 0.5)",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.p>

            {/* Underline effect */}
            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-transparent via-[#1f6feb] to-transparent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 4 }}
            />
          </div>
        </motion.div>

        <motion.div
          style={{ y: countdownY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="mb-8"
        >
          <div className="flex justify-center items-center gap-3 md:gap-6 mb-3">
            {Object.entries(timeLeft).map(([unit, value], index) => (
              <motion.div
                key={unit}
                className="text-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 4.5 + index * 0.1 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-[#161b22] to-[#0d1117] border-2 border-[#1f6feb] rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] relative overflow-hidden"
                  whileHover={{
                    scale: 1.1,
                    borderColor: "#58a6ff",
                    boxShadow: "0 0 40px rgba(31, 111, 235, 0.6)",
                  }}
                  style={{
                    boxShadow: "0 0 30px rgba(31, 111, 235, 0.4), inset 0 0 20px rgba(31, 111, 235, 0.1)",
                  }}
                >
                  {/* Background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1f6feb]/10 to-transparent" />

                  <motion.div
                    key={value}
                    className="text-xl md:text-3xl lg:text-4xl font-bold text-[#e6edf3] font-mono relative z-10"
                    initial={{ y: -30, opacity: 0, scale: 0.5 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      textShadow: "0 0 20px rgba(230, 237, 243, 0.8)",
                    }}
                  >
                    {value.toString().padStart(2, "0")}
                  </motion.div>

                  {/* Scanning line */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#58a6ff] to-transparent opacity-30"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "linear",
                      delay: index * 0.5,
                    }}
                    style={{ height: "2px", top: "50%" }}
                  />
                </motion.div>
                <motion.div
                  className="text-xs md:text-sm text-[#8b949e] mt-2 uppercase tracking-widest font-semibold"
                  whileHover={{ color: "#1f6feb" }}
                >
                  {unit}
                </motion.div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="text-[#8b949e] text-sm md:text-base font-light"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Until the future begins
          </motion.div>
        </motion.div>

        {/* Enhanced register button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 5 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#1f6feb] text-white px-10 py-4 text-lg md:text-xl font-bold rounded-xl transition-all duration-500 transform hover:scale-110 relative overflow-hidden group border-2 border-[#1f6feb]/50"
            style={{
              boxShadow: "0 0 40px rgba(31, 111, 235, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3)",
            }}
          >
            <span className="relative z-10 tracking-wide">REGISTER NOW</span>

            {/* Enhanced glow effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30"
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />

            {/* Pulse rings */}
            <motion.div
              className="absolute inset-0 border-2 border-[#58a6ff] rounded-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.8, 0, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Inner glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f6feb]/20 to-[#58a6ff]/20 rounded-xl" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5.5 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="text-[#8b949e] text-sm flex flex-col items-center gap-3 cursor-pointer group"
            whileHover={{ scale: 1.1 }}
          >
            {/*<span className="tracking-wider group-hover:text-[#1f6feb] transition-colors">Scroll to explore</span>*/}
            <div className="w-6 h-10 border-2 border-[#1f6feb] rounded-full flex justify-center relative overflow-hidden group-hover:border-[#58a6ff] transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="w-1.5 h-3 bg-gradient-to-b from-[#1f6feb] to-[#58a6ff] rounded-full mt-1.5"
                style={{
                  boxShadow: "0 0 10px rgba(31, 111, 235, 0.8)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
