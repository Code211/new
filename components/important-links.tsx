"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github, MessageCircle, BookOpen, FileText, Trophy, Users, Code } from "lucide-react"

interface ImportantLink {
  id: number
  title: string
  description: string
  url: string
  icon: React.ReactNode
  color: string
  category: "community" | "resources" | "rules" | "tools"
}

const importantLinksData: ImportantLink[] = [
  {
    id: 1,
    title: "Discord Community",
    description:
      "Join our Discord server for real-time updates, team formation, and 24/7 support during the hackathon.",
    url: "https://discord.gg/code211",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "#5865F2",
    category: "community",
  },
  {
    id: 2,
    title: "GitHub Repository",
    description: "Access starter templates, example projects, and submit your final hackathon project here.",
    url: "https://github.com/code211/hackathon-2025",
    icon: <Github className="w-8 h-8" />,
    color: "#24292e",
    category: "tools",
  },
  {
    id: 3,
    title: "Hackathon Rules",
    description: "Complete guidelines, judging criteria, and code of conduct. Read this before you start coding!",
    url: "/rules",
    icon: <FileText className="w-8 h-8" />,
    color: "#f39c12",
    category: "rules",
  },
  {
    id: 4,
    title: "Resource Library",
    description: "Curated collection of APIs, datasets, design assets, and development tools for your project.",
    url: "/resources",
    icon: <BookOpen className="w-8 h-8" />,
    color: "#27ae60",
    category: "resources",
  },
  {
    id: 5,
    title: "Mentor Network",
    description: "Connect with industry experts and experienced developers who can guide your project to success.",
    url: "/mentors",
    icon: <Users className="w-8 h-8" />,
    color: "#9b59b6",
    category: "community",
  },
  {
    id: 6,
    title: "Past Winners",
    description: "Get inspired by previous hackathon winners and learn from their innovative solutions.",
    url: "/winners",
    icon: <Trophy className="w-8 h-8" />,
    color: "#e74c3c",
    category: "resources",
  },
  {
    id: 7,
    title: "Code Playground",
    description: "Online IDE with pre-configured environments for rapid prototyping and collaboration.",
    url: "https://playground.code211.dev",
    icon: <Code className="w-8 h-8" />,
    color: "#3498db",
    category: "tools",
  },
  {
    id: 8,
    title: "Live Support",
    description: "Get immediate help from our technical support team during the hackathon weekend.",
    url: "/support",
    icon: <MessageCircle className="w-8 h-8" />,
    color: "#1abc9c",
    category: "community",
  },
]

function ImportantLinkCard({ link, index }: { link: ImportantLink; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        scale: 1.05,
        rotateX: 5,
        rotateY: 5,
        z: 50,
      }}
      className="group cursor-pointer perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="
          bg-[#161b22] border border-[#1f6feb]/30 rounded-lg p-6 h-full
          transition-all duration-300 ease-out
          hover:border-[#1f6feb] hover:bg-[#1f6feb]/5
          group-hover:shadow-2xl
          relative overflow-hidden
        "
        style={{
          boxShadow: `0 0 0 rgba(${Number.parseInt(link.color.slice(1, 3), 16)}, ${Number.parseInt(link.color.slice(3, 5), 16)}, ${Number.parseInt(link.color.slice(5, 7), 16)}, 0)`,
          transition: "all 0.3s ease-out, box-shadow 0.3s ease-out",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = `0 20px 40px rgba(${Number.parseInt(link.color.slice(1, 3), 16)}, ${Number.parseInt(link.color.slice(3, 5), 16)}, ${Number.parseInt(link.color.slice(5, 7), 16)}, 0.3)`
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = `0 0 0 rgba(${Number.parseInt(link.color.slice(1, 3), 16)}, ${Number.parseInt(link.color.slice(3, 5), 16)}, ${Number.parseInt(link.color.slice(5, 7), 16)}, 0)`
        }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${link.color}10, transparent, ${link.color}05)`,
          }}
        />

        {/* Glow border animation */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100"
          style={{
            background: `linear-gradient(90deg, transparent, ${link.color}40, transparent)`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        <div className="relative z-10">
          {/* Icon */}
          <motion.div
            className="mb-4"
            style={{ color: link.color }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {link.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-xl font-bold text-[#e6edf3] mb-3 group-hover:text-[#58a6ff] transition-colors duration-300">
            {link.title}
          </h3>

          {/* Description */}
          <p className="text-[#8b949e] leading-relaxed mb-4 group-hover:text-[#c9d1d9] transition-colors duration-300">
            {link.description}
          </p>

          {/* External link indicator */}
          <div className="flex items-center justify-between">
            <span
              className="text-sm font-mono px-2 py-1 rounded"
              style={{
                backgroundColor: `${link.color}20`,
                color: link.color,
              }}
            >
              {link.category}
            </span>
            <motion.div
              className="text-[#1f6feb] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ x: 5 }}
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </div>
        </div>

        {/* 3D depth effect */}
        <div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${link.color}20, transparent)`,
            transform: "translateZ(-10px)",
          }}
        />
      </div>
    </motion.div>
  )
}

export function ImportantLinks() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Section background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#161b22] via-[#0d1117] to-[#161b22] opacity-50" />

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
            <ExternalLink className="w-8 h-8 text-[#1f6feb]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3]">Important Links</h2>
          </div>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            Everything you need to succeed at Code211. Bookmark these essential resources.
          </p>
        </motion.div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {importantLinksData.map((link, index) => (
            <ImportantLinkCard key={link.id} link={link} index={index} />
          ))}
        </div>

        {/* Quick Access Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#161b22] border border-[#1f6feb] rounded-lg p-6 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-[#e6edf3] mb-4">Quick Access</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Discord", "GitHub", "Rules", "Resources"].map((item, index) => (
                <motion.button
                  key={item}
                  className="px-4 py-2 bg-[#1f6feb]/20 border border-[#1f6feb] text-[#1f6feb] rounded-lg hover:bg-[#1f6feb] hover:text-white transition-all duration-300 font-mono text-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 right-0 w-40 h-40 border border-[#1f6feb] rounded-full opacity-5 animate-spin-slow" />
      <div
        className="absolute bottom-1/3 left-0 w-24 h-24 border border-[#1f6feb] rounded-full opacity-5 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />

      {/* Floating link icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#1f6feb] opacity-5"
            style={{
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          >
            <ExternalLink className="w-6 h-6" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
