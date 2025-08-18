"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Star } from "lucide-react"

interface Sponsor {
  id: number
  name: string
  tier: "platinum" | "gold" | "silver" | "bronze"
  logo: string
  website: string
}

const sponsorData: Sponsor[] = [
  // Platinum Sponsors
  {
    id: 1,
    name: "TechCorp",
    tier: "platinum",
    logo: "/techcorp-logo-modern-blue.png",
    website: "https://techcorp.com",
  },
  {
    id: 2,
    name: "InnovateLabs",
    tier: "platinum",
    logo: "/placeholder-v8dzp.png",
    website: "https://innovatelabs.com",
  },

  // Gold Sponsors
  {
    id: 3,
    name: "CloudFlow",
    tier: "gold",
    logo: "/placeholder-alfdw.png",
    website: "https://cloudflow.com",
  },
  {
    id: 4,
    name: "DataStream",
    tier: "gold",
    logo: "/placeholder-iavdt.png",
    website: "https://datastream.com",
  },
  {
    id: 5,
    name: "AI Dynamics",
    tier: "gold",
    logo: "/ai-dynamics-logo.png",
    website: "https://aidynamics.com",
  },

  // Silver Sponsors
  {
    id: 6,
    name: "DevTools Pro",
    tier: "silver",
    logo: "/devtools-pro-logo.png",
    website: "https://devtools.com",
  },
  {
    id: 7,
    name: "StartupHub",
    tier: "silver",
    logo: "/startup-hub-logo.png",
    website: "https://startuphub.com",
  },
  {
    id: 8,
    name: "CodeAcademy",
    tier: "silver",
    logo: "/codeacademy-logo-education-coding.png",
    website: "https://codeacademy.com",
  },
  {
    id: 9,
    name: "WebForge",
    tier: "silver",
    logo: "/placeholder-kgrww.png",
    website: "https://webforge.com",
  },

  // Bronze Sponsors
  {
    id: 10,
    name: "PixelCraft",
    tier: "bronze",
    logo: "/pixelcraft-logo.png",
    website: "https://pixelcraft.com",
  },
  {
    id: 11,
    name: "ByteSize",
    tier: "bronze",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://bytesize.com",
  },
  {
    id: 12,
    name: "TechFlow",
    tier: "bronze",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://techflow.com",
  },
  {
    id: 13,
    name: "CodeCraft",
    tier: "bronze",
    logo: "/placeholder.svg?height=60&width=120",
    website: "https://codecraft.com",
  },
]

const tierConfig = {
  platinum: {
    title: "Platinum Sponsors",
    gridCols: "grid-cols-1 md:grid-cols-2",
    cardSize: "h-32",
    glow: "shadow-2xl shadow-[#58a6ff]/30",
  },
  gold: {
    title: "Gold Sponsors",
    gridCols: "grid-cols-2 md:grid-cols-3",
    cardSize: "h-24",
    glow: "shadow-xl shadow-[#ffd700]/20",
  },
  silver: {
    title: "Silver Sponsors",
    gridCols: "grid-cols-2 md:grid-cols-4",
    cardSize: "h-20",
    glow: "shadow-lg shadow-[#c0c0c0]/20",
  },
  bronze: {
    title: "Bronze Sponsors",
    gridCols: "grid-cols-2 md:grid-cols-4",
    cardSize: "h-16",
    glow: "shadow-md shadow-[#cd7f32]/20",
  },
}

function SponsorCard({ sponsor, index }: { sponsor: Sponsor; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group cursor-pointer"
    >
      <div
        className={`
          bg-[#161b22] border border-[#1f6feb]/30 rounded-lg p-6 
          ${tierConfig[sponsor.tier].cardSize}
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          hover:border-[#1f6feb] hover:bg-[#1f6feb]/5
          group-hover:${tierConfig[sponsor.tier].glow}
        `}
      >
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          {/* Logo */}
          <img
            src={sponsor.logo || "/placeholder.svg"}
            alt={`${sponsor.name} logo`}
            className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
          />

          {/* Hover overlay effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#1f6feb]/10 to-transparent opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: "100%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[#1f6feb]/5 via-transparent to-[#58a6ff]/5" />
        </div>
      </div>

      {/* Sponsor name tooltip */}
      <motion.div
        className="text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        <span className="text-sm text-[#8b949e] font-mono">{sponsor.name}</span>
      </motion.div>
    </motion.div>
  )
}

function SponsorTier({ tier, sponsors }: { tier: keyof typeof tierConfig; sponsors: Sponsor[] }) {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  if (sponsors.length === 0) return null

  return (
    <div className="mb-16">
      <motion.h3
        ref={titleRef}
        className="text-2xl md:text-3xl font-bold text-[#e6edf3] text-center mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        {tierConfig[tier].title}
      </motion.h3>

      <div className={`grid ${tierConfig[tier].gridCols} gap-6`}>
        {sponsors.map((sponsor, index) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} index={index} />
        ))}
      </div>
    </div>
  )
}

export function Sponsors() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  // Group sponsors by tier
  const sponsorsByTier = sponsorData.reduce(
    (acc, sponsor) => {
      acc[sponsor.tier].push(sponsor)
      return acc
    },
    {
      platinum: [] as Sponsor[],
      gold: [] as Sponsor[],
      silver: [] as Sponsor[],
      bronze: [] as Sponsor[],
    },
  )

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-8 h-8 text-[#1f6feb]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3]">Sponsors</h2>
          </div>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            Powered by amazing companies who believe in the future of innovation
          </p>
        </motion.div>

        {/* Sponsor Tiers */}
        <SponsorTier tier="platinum" sponsors={sponsorsByTier.platinum} />
        <SponsorTier tier="gold" sponsors={sponsorsByTier.gold} />
        <SponsorTier tier="silver" sponsors={sponsorsByTier.silver} />
        <SponsorTier tier="bronze" sponsors={sponsorsByTier.bronze} />

        {/* Become a Sponsor CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#161b22] border border-[#1f6feb] rounded-lg p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-[#1f6feb]" />
              <h3 className="text-2xl font-bold text-[#e6edf3]">Become a Sponsor</h3>
            </div>
            <p className="text-[#8b949e] mb-6">
              Join our mission to empower the next generation of innovators. Partner with Code211 and connect with
              brilliant minds shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-[#1f6feb] hover:bg-[#58a6ff] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  boxShadow: "0 0 20px rgba(31, 111, 235, 0.3)",
                }}
              >
                Sponsorship Package
              </motion.button>
              <motion.button
                className="border border-[#1f6feb] text-[#1f6feb] hover:bg-[#1f6feb] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 border border-[#1f6feb] rounded-full opacity-5 animate-spin-slow" />
      <div
        className="absolute bottom-1/4 right-0 w-48 h-48 border border-[#1f6feb] rounded-full opacity-5 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />

      {/* Floating sponsor badges */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 border border-[#1f6feb] rounded-full opacity-10"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  )
}
