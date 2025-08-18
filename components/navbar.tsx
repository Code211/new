"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, Code, Calendar, HelpCircle, Award, Users, Mail, Home } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 64 // Height of fixed navbar
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsOpen(false) // Close mobile menu
  }

  const navItems =
    pathname === "/workshops"
      ? [
          { name: "Home", href: "/", icon: Home, isExternal: false },
          { name: "About", href: "/#hero", icon: Code, isExternal: false },
          { name: "Schedule", href: "/#schedule", icon: Calendar, isExternal: false },
          { name: "Contact", href: "/#contact", icon: Mail, isExternal: false },
        ]
      : [
          { name: "About", href: "#hero", icon: Code, isExternal: false },
          { name: "Schedule", href: "#schedule", icon: Calendar, isExternal: false },
          { name: "Workshops", href: "/workshops", icon: Users, isExternal: false },
          { name: "Sponsors", href: "#sponsors", icon: Award, isExternal: false },
          { name: "FAQ", href: "#faq", icon: HelpCircle, isExternal: false },
          { name: "Contact", href: "#contact", icon: Mail, isExternal: false },
        ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#1f6feb]/30" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <motion.div
                  className="w-10 h-10 bg-gradient-to-br from-[#1f6feb] to-[#58a6ff] rounded-lg flex items-center justify-center"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{
                    boxShadow: "0 0 20px rgba(31, 111, 235, 0.6)",
                  }}
                >
                  <Code className="w-6 h-6 text-white" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#1f6feb] to-[#58a6ff] rounded-lg opacity-30"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div className="text-[#e6edf3] font-bold text-xl font-mono">
                Code<span className="text-[#1f6feb]">211</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {item.href.startsWith("/") && !item.href.includes("#") ? (
                  <Link
                    href={item.href}
                    className="text-[#8b949e] hover:text-[#1f6feb] transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <item.icon className="w-4 h-4 group-hover:text-[#58a6ff] transition-colors" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.href.replace("#", ""))}
                    className="text-[#8b949e] hover:text-[#1f6feb] transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <item.icon className="w-4 h-4 group-hover:text-[#58a6ff] transition-colors" />
                    <span className="font-medium">{item.name}</span>
                  </button>
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Button
                className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#1f6feb] text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105"
                style={{
                  boxShadow: "0 0 20px rgba(31, 111, 235, 0.4)",
                }}
              >
                Register
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#8b949e] hover:text-[#1f6feb] transition-colors p-2"
              whileTap={{ scale: 0.95 }}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#0d1117]/98 backdrop-blur-xl border-t border-[#1f6feb]/30"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {item.href.startsWith("/") && !item.href.includes("#") ? (
                    <Link
                      href={item.href}
                      className="flex items-center space-x-3 text-[#8b949e] hover:text-[#1f6feb] transition-colors py-2"
                      onClick={() => setIsOpen(false)}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => scrollToSection(item.href.replace("#", ""))}
                      className="flex items-center space-x-3 text-[#8b949e] hover:text-[#1f6feb] transition-colors py-2 w-full text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  )}
                </motion.div>
              ))}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#1f6feb] text-white py-3 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Register Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
