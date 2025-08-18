"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  connections: number[]
}

export function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const codeFragmentsRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<Particle[]>([]) // Use ref instead of state to avoid re-render loops
  const { scrollY } = useScroll()

  // Parallax transforms for different layers
  const gridTransform = useTransform(scrollY, [0, 1000], [0, -100])
  const particleTransform = useTransform(scrollY, [0, 1000], [0, -50])

  // Code fragments that loop across the screen
  const codeFragments = [
    "function hackathon() {",
    "  return innovation;",
    "}",
    "const future = await code();",
    "if (passion === true) {",
    "  build.something.amazing();",
    "}",
    "// Code211 2025",
    "npm run build-future",
    "git commit -m 'changing the world'",
    "console.log('Hello, hackers!');",
    "const dreams = new Reality();",
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Initialize particles for connected network
    const initParticles = () => {
      const newParticles: Particle[] = []
      const particleCount = 30

      for (let i = 0; i < particleCount; i++) {
        newParticles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          connections: [],
        })
      }
      particlesRef.current = newParticles // Update ref instead of state
    }

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Binary rain effect
    const binary = "01"
    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops: number[] = []

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const draw = () => {
      // Clear canvas with slight trail effect
      ctx.fillStyle = "rgba(13, 17, 23, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Binary rain
      ctx.fillStyle = "rgba(31, 111, 235, 0.4)"
      ctx.font = `${fontSize}px JetBrains Mono`

      for (let i = 0; i < drops.length; i++) {
        const text = binary[Math.floor(Math.random() * binary.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      const particles = particlesRef.current
      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x))
        particle.y = Math.max(0, Math.min(canvas.height, particle.y))

        // Draw particle
        ctx.fillStyle = "rgba(31, 111, 235, 0.8)"
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw connections to nearby particles
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const distance = Math.sqrt(
              Math.pow(particle.x - otherParticle.x, 2) + Math.pow(particle.y - otherParticle.y, 2),
            )

            if (distance < 150) {
              const opacity = ((150 - distance) / 150) * 0.3
              ctx.strokeStyle = `rgba(31, 111, 235, ${opacity})`
              ctx.lineWidth = 1
              ctx.beginPath()
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        })
      })
    }

    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, []) // Empty dependency array to prevent infinite loops

  return (
    <>
      {/* Canvas for binary rain and connected particles */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full opacity-30 pointer-events-none z-0" />

      {/* Floating code fragments */}
      <div ref={codeFragmentsRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {codeFragments.map((fragment, i) => (
          <motion.div
            key={i}
            className="absolute text-[#1f6feb] text-sm font-mono opacity-20 whitespace-nowrap"
            initial={{
              x: -200,
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              x: (typeof window !== "undefined" ? window.innerWidth : 1200) + 200,
              y: Math.random() * (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 15 + 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: Math.random() * 10,
            }}
            style={{
              y: particleTransform,
            }}
          >
            {fragment}
          </motion.div>
        ))}
      </div>

      {/* Ambient glow effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#1f6feb] opacity-5 blur-3xl"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scanline effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background: `
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(31, 111, 235, 0.03) 2px,
              rgba(31, 111, 235, 0.03) 4px
            )
          `,
        }}
        animate={{
          y: [0, 4],
        }}
        transition={{
          duration: 0.1,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
    </>
  )
}
