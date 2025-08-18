"use client"

import { motion } from "framer-motion"
import { BackgroundAnimation } from "@/components/background-animation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Brain,
  Shield,
  Palette,
  Clock,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
  Star,
  Award,
  Zap,
} from "lucide-react"

export default function WorkshopsPage() {
  const workshops = [
    {
      id: 1,
      title: "Full-Stack Web Development Bootcamp",
      instructor: "Sarah Chen",
      instructorTitle: "Senior Engineer @ Meta",
      duration: "3 hours",
      capacity: "30 participants",
      difficulty: "Beginner",
      time: "Day 1, 10:00 AM - 1:00 PM",
      location: "Main Hall A",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      description:
        "Learn to build modern web applications from scratch using React, Node.js, and MongoDB. Perfect for beginners looking to get started with full-stack development.",
      topics: [
        "React Fundamentals",
        "Node.js & Express",
        "MongoDB Integration",
        "API Development",
        "Deployment Strategies",
      ],
      prerequisites: "Basic HTML/CSS knowledge",
      featured: true,
    },
    {
      id: 2,
      title: "AI & Machine Learning Workshop",
      instructor: "Dr. Marcus Rodriguez",
      instructorTitle: "AI Research Lead @ OpenAI",
      duration: "4 hours",
      capacity: "25 participants",
      difficulty: "Intermediate",
      time: "Day 1, 2:00 PM - 6:00 PM",
      location: "Tech Lab B",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      description:
        "Dive into the world of AI and machine learning. Build your first neural network and understand the fundamentals of modern AI systems.",
      topics: [
        "Neural Networks",
        "TensorFlow Basics",
        "Computer Vision",
        "Natural Language Processing",
        "Ethics in AI",
      ],
      prerequisites: "Python programming experience",
      featured: true,
    },
    {
      id: 3,
      title: "Mobile App Development with React Native",
      instructor: "Alex Kim",
      instructorTitle: "Mobile Lead @ Spotify",
      duration: "3.5 hours",
      capacity: "20 participants",
      difficulty: "Intermediate",
      time: "Day 2, 9:00 AM - 12:30 PM",
      location: "Innovation Lab",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      description:
        "Create cross-platform mobile applications using React Native. Learn to build, test, and deploy apps for both iOS and Android.",
      topics: ["React Native Setup", "Navigation", "State Management", "Native Modules", "App Store Deployment"],
      prerequisites: "React knowledge required",
    },
    {
      id: 4,
      title: "Cybersecurity & Ethical Hacking",
      instructor: "Jennifer Walsh",
      instructorTitle: "Security Expert @ CrowdStrike",
      duration: "3 hours",
      capacity: "15 participants",
      difficulty: "Advanced",
      time: "Day 2, 1:00 PM - 4:00 PM",
      location: "Security Lab",
      icon: Shield,
      color: "from-red-500 to-orange-500",
      description:
        "Learn about cybersecurity fundamentals and ethical hacking techniques. Understand how to protect systems and identify vulnerabilities.",
      topics: [
        "Penetration Testing",
        "Network Security",
        "Web Application Security",
        "Social Engineering",
        "Incident Response",
      ],
      prerequisites: "Networking knowledge recommended",
    },
    {
      id: 5,
      title: "Database Design & Optimization",
      instructor: "Robert Thompson",
      instructorTitle: "Database Architect @ Netflix",
      duration: "2.5 hours",
      capacity: "35 participants",
      difficulty: "Intermediate",
      time: "Day 1, 3:00 PM - 5:30 PM",
      location: "Data Center",
      icon: Database,
      color: "from-indigo-500 to-blue-500",
      description:
        "Master database design principles and optimization techniques. Learn to build scalable and efficient database systems.",
      topics: ["Database Modeling", "SQL Optimization", "Indexing Strategies", "NoSQL vs SQL", "Performance Tuning"],
      prerequisites: "Basic SQL knowledge",
    },
    {
      id: 6,
      title: "UI/UX Design for Developers",
      instructor: "Maya Patel",
      instructorTitle: "Design Director @ Airbnb",
      duration: "3 hours",
      capacity: "25 participants",
      difficulty: "Beginner",
      time: "Day 2, 10:00 AM - 1:00 PM",
      location: "Design Studio",
      icon: Palette,
      color: "from-pink-500 to-rose-500",
      description:
        "Learn design principles and create beautiful, user-friendly interfaces. Perfect for developers who want to improve their design skills.",
      topics: ["Design Principles", "User Research", "Prototyping", "Design Systems", "Accessibility"],
      prerequisites: "No design experience needed",
    },
  ]

  const activities = [
    {
      title: "Opening Ceremony",
      time: "Day 1, 8:00 AM - 9:00 AM",
      location: "Main Auditorium",
      description:
        "Kick off Code211 with inspiring talks from industry leaders and an overview of the hackathon challenges.",
      icon: Award,
      type: "ceremony",
    },
    {
      title: "Team Formation Session",
      time: "Day 1, 9:00 AM - 10:00 AM",
      location: "Networking Lounge",
      description: "Find your perfect team members and start brainstorming your hackathon project ideas.",
      icon: Users,
      type: "networking",
    },
    {
      title: "Mentor Speed Dating",
      time: "Day 1, 7:00 PM - 8:00 PM",
      location: "Mentor Hub",
      description: "Meet with industry experts and get guidance on your project ideas and technical challenges.",
      icon: Zap,
      type: "mentoring",
    },
    {
      title: "Midnight Coding Session",
      time: "Day 1, 11:00 PM - 2:00 AM",
      location: "All Labs",
      description: "Late-night coding with energy drinks, snacks, and collaborative problem-solving.",
      icon: Code,
      type: "coding",
    },
    {
      title: "Project Presentations",
      time: "Day 2, 4:00 PM - 6:00 PM",
      location: "Main Auditorium",
      description: "Present your projects to judges and fellow participants. Show off what you've built!",
      icon: Star,
      type: "presentation",
    },
    {
      title: "Awards Ceremony",
      time: "Day 2, 6:30 PM - 7:30 PM",
      location: "Main Auditorium",
      description: "Celebrate the winners and wrap up an amazing 48 hours of coding and innovation.",
      icon: Award,
      type: "ceremony",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Advanced":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getActivityTypeColor = (type: string) => {
    switch (type) {
      case "ceremony":
        return "from-purple-500 to-pink-500"
      case "networking":
        return "from-blue-500 to-cyan-500"
      case "mentoring":
        return "from-green-500 to-emerald-500"
      case "coding":
        return "from-orange-500 to-red-500"
      case "presentation":
        return "from-indigo-500 to-purple-500"
      default:
        return "from-gray-500 to-gray-600"
    }
  }

  return (
    <div className="relative min-h-screen" id="workshops">
      <BackgroundAnimation />
      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117]/80 via-[#0d1117]/60 to-transparent" />

          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold text-[#e6edf3] mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Workshops & <span className="text-[#1f6feb]">Activities</span>
              </motion.h1>
              <motion.p
                className="text-xl text-[#8b949e] mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Level up your skills with expert-led workshops and engage in exciting activities throughout Code211
                Hackathon 2025.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4 text-[#8b949e]"
              >
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>48 Hours of Learning</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  <span>Expert Instructors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Certificates Provided</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Workshops Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-6">
                Expert-Led <span className="text-[#1f6feb]">Workshops</span>
              </h2>
              <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
                Learn from industry leaders and gain hands-on experience with cutting-edge technologies.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8">
              {workshops.map((workshop, index) => (
                <motion.div
                  key={workshop.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`relative p-8 rounded-2xl border border-[#30363d] bg-[#161b22]/50 backdrop-blur-sm hover:border-[#1f6feb]/50 transition-all duration-300 ${
                    workshop.featured ? "ring-2 ring-[#1f6feb]/20" : ""
                  }`}
                >
                  {workshop.featured && (
                    <div className="absolute -top-3 left-6">
                      <Badge className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] text-white border-0">
                        Featured Workshop
                      </Badge>
                    </div>
                  )}

                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${workshop.color}`}>
                      <workshop.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#e6edf3] mb-2">{workshop.title}</h3>
                      <div className="text-[#8b949e] mb-3">
                        <p className="font-medium">{workshop.instructor}</p>
                        <p className="text-sm">{workshop.instructorTitle}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge className={getDifficultyColor(workshop.difficulty)}>{workshop.difficulty}</Badge>
                        <Badge variant="outline" className="border-[#30363d] text-[#8b949e]">
                          {workshop.duration}
                        </Badge>
                        <Badge variant="outline" className="border-[#30363d] text-[#8b949e]">
                          {workshop.capacity}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-[#8b949e] mb-6">{workshop.description}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-[#e6edf3] font-semibold mb-2">Topics Covered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {workshop.topics.map((topic, topicIndex) => (
                          <span
                            key={topicIndex}
                            className="px-3 py-1 text-xs bg-[#0d1117] border border-[#30363d] rounded-full text-[#8b949e]"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 text-sm text-[#8b949e]">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{workshop.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{workshop.location}</span>
                      </div>
                    </div>

                    <div className="text-sm text-[#8b949e]">
                      <strong>Prerequisites:</strong> {workshop.prerequisites}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#1f6feb] text-white">
                    Reserve Spot
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-[#161b22]/50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3] mb-6">
                Hackathon <span className="text-[#1f6feb]">Activities</span>
              </h2>
              <p className="text-xl text-[#8b949e] max-w-3xl mx-auto">
                Beyond coding - networking, mentoring, and celebration activities to make your hackathon experience
                unforgettable.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="p-6 rounded-xl border border-[#30363d] bg-[#161b22]/50 backdrop-blur-sm hover:border-[#1f6feb]/50 transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${getActivityTypeColor(activity.type)} flex items-center justify-center mb-4`}
                  >
                    <activity.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-[#e6edf3] mb-2">{activity.title}</h3>

                  <div className="space-y-2 mb-4 text-sm text-[#8b949e]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      <span>{activity.location}</span>
                    </div>
                  </div>

                  <p className="text-[#8b949e] text-sm">{activity.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#e6edf3] mb-6">Ready to Level Up Your Skills?</h2>
              <p className="text-xl text-[#8b949e] mb-8">
                Join Code211 Hackathon 2025 and participate in these amazing workshops and activities. Limited spots
                available!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#1f6feb] to-[#58a6ff] hover:from-[#58a6ff] hover:to-[#1f6feb] text-white px-8 py-3"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#30363d] text-[#e6edf3] hover:bg-[#161b22] px-8 py-3 bg-transparent"
                >
                  View Schedule
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
