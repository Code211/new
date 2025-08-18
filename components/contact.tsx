"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, MessageSquare, Users, Calendar } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch with our team",
      contact: "hello@code211.dev",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with organizers",
      contact: "+1 (555) CODE-211",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Tech Innovation Center",
      contact: "123 Developer Ave, Code City",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const quickActions = [
    { icon: MessageSquare, title: "Join Discord", description: "Connect with participants" },
    { icon: Users, title: "Find Team", description: "Looking for teammates?" },
    { icon: Calendar, title: "Schedule Meeting", description: "Book a consultation" },
  ]

  return (
    <section id="contact" className="relative pt-20 pb-0 overflow-hidden bg-[#0d1117]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#0d1117]/90 to-[#161b22]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#1f6feb] rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#58a6ff] rounded-full animate-ping" />
      <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-[#1f6feb] rounded-full animate-pulse delay-1000" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In <span className="text-[#1f6feb]">Touch</span>
          </motion.h2>
          <motion.p
            className="text-xl text-[#8b949e] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Have questions about Code211? Need help with registration? Our team is here to help you succeed.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#e6edf3] mb-6">Contact Methods</h3>
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.div
                    key={method.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="group p-6 rounded-xl border border-[#30363d] bg-[#161b22]/50 backdrop-blur-sm hover:border-[#1f6feb]/50 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-[#e6edf3] mb-1">{method.title}</h4>
                        <p className="text-[#8b949e] mb-2">{method.description}</p>
                        <p className="text-[#1f6feb] font-mono">{method.contact}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h3 className="text-2xl font-bold text-[#e6edf3] mb-6">Quick Actions</h3>
              <div className="grid gap-4">
                {quickActions.map((action, index) => (
                  <motion.button
                    key={action.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 p-4 rounded-lg border border-[#30363d] bg-[#161b22]/30 hover:border-[#1f6feb]/50 hover:bg-[#161b22]/60 transition-all duration-300 text-left"
                  >
                    <action.icon className="w-5 h-5 text-[#1f6feb]" />
                    <div>
                      <div className="text-[#e6edf3] font-medium">{action.title}</div>
                      <div className="text-[#8b949e] text-sm">{action.description}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="p-8 rounded-2xl border border-[#30363d] bg-[#161b22]/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-[#e6edf3] mb-6">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#e6edf3] text-sm font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#0d1117] border-[#30363d] text-[#e6edf3] placeholder-[#8b949e] focus:border-[#1f6feb] focus:ring-[#1f6feb]/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[#e6edf3] text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-[#0d1117] border-[#30363d] text-[#e6edf3] placeholder-[#8b949e] focus:border-[#1f6feb] focus:ring-[#1f6feb]/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#e6edf3] text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className="bg-[#0d1117] border-[#30363d] text-[#e6edf3] placeholder-[#8b949e] focus:border-[#1f6feb] focus:ring-[#1f6feb]/20"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#e6edf3] text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more..."
                    rows={5}
                    className="bg-[#0d1117] border-[#30363d] text-[#e6edf3] placeholder-[#8b949e] focus:border-[#1f6feb] focus:ring-[#1f6feb]/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#1f6feb] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1f6feb]/25"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-[#1f6feb] rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-[#58a6ff] rounded-full opacity-30 animate-ping" />
          </motion.div>
        </div>

        <div className="h-20" />
      </div>
    </section>
  )
}
