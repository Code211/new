"use client"

import type React from "react"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, Clock, Users, Code, Trophy, Coffee } from "lucide-react"

interface ScheduleEvent {
  id: number
  time: string
  title: string
  description: string
  icon: React.ReactNode
  day: string
}

const scheduleData: ScheduleEvent[] = [
  {
    id: 1,
    day: "Friday",
    time: "6:00 PM",
    title: "Registration & Check-in",
    description: "Welcome to Code211! Get your badge, swag, and meet fellow hackers.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 2,
    day: "Friday",
    time: "7:00 PM",
    title: "Opening Ceremony",
    description: "Kickoff presentation, rules overview, and team formation.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 3,
    day: "Friday",
    time: "8:00 PM",
    title: "Hacking Begins",
    description: "Let the coding marathon begin! 48 hours of pure innovation.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 4,
    day: "Friday",
    time: "10:00 PM",
    title: "Late Night Fuel",
    description: "Pizza and energy drinks to keep you going through the night.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: 5,
    day: "Saturday",
    time: "8:00 AM",
    title: "Breakfast & Coffee",
    description: "Start your day right with breakfast and premium coffee.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: 6,
    day: "Saturday",
    time: "12:00 PM",
    title: "Lunch Break",
    description: "Refuel with a delicious lunch and network with other teams.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: 7,
    day: "Saturday",
    time: "2:00 PM",
    title: "Tech Workshop",
    description: "Learn cutting-edge technologies from industry experts.",
    icon: <Code className="w-6 h-6" />,
  },
  {
    id: 8,
    day: "Saturday",
    time: "6:00 PM",
    title: "Dinner & Networking",
    description: "Great food and opportunities to connect with mentors.",
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 9,
    day: "Sunday",
    time: "8:00 AM",
    title: "Final Sprint Breakfast",
    description: "Last meal before the final push to completion.",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: 10,
    day: "Sunday",
    time: "12:00 PM",
    title: "Submissions Due",
    description: "Final deadline for project submissions. No extensions!",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: 11,
    day: "Sunday",
    time: "1:00 PM",
    title: "Project Presentations",
    description: "Show off your amazing creations to judges and peers.",
    icon: <Trophy className="w-6 h-6" />,
  },
  {
    id: 12,
    day: "Sunday",
    time: "4:00 PM",
    title: "Awards & Closing",
    description: "Winner announcements, prizes, and celebration!",
    icon: <Trophy className="w-6 h-6" />,
  },
]

function TimelineEvent({ event, index, isLeft }: { event: ScheduleEvent; index: number; isLeft: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-12 ${isLeft ? "flex-row" : "flex-row-reverse"}`}
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -100 : 100 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Event Card */}
      <motion.div
        className={`w-full md:w-5/12 ${isLeft ? "text-right pr-8" : "text-left pl-8"}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="bg-[#161b22] border border-[#1f6feb] rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-[#58a6ff]">
          <div className={`flex items-center gap-3 mb-3 ${isLeft ? "justify-end" : "justify-start"}`}>
            <div className="text-[#1f6feb]">{event.icon}</div>
            <div className="text-[#8b949e] text-sm font-mono">{event.day}</div>
          </div>

          <h3 className="text-xl font-bold text-[#e6edf3] mb-2">{event.title}</h3>
          <div className="text-[#1f6feb] font-mono text-lg mb-3">{event.time}</div>
          <p className="text-[#8b949e] leading-relaxed">{event.description}</p>
        </div>

        <motion.div
          className={`absolute top-1/2 ${isLeft ? "right-0 translate-x-4" : "left-0 -translate-x-4"} w-8 h-0.5 bg-gradient-to-r ${isLeft ? "from-[#1f6feb] to-transparent" : "from-transparent to-[#1f6feb]"}`}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
          style={{ transformOrigin: isLeft ? "right" : "left" }}
        />
      </motion.div>

      {/* Timeline Node */}
      <div className="relative flex items-center justify-center w-2/12">
        <motion.div
          className="w-4 h-4 bg-[#1f6feb] rounded-full border-4 border-[#0d1117] z-10 relative"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
          whileHover={{ scale: 1.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-[#1f6feb] rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="w-full md:w-5/12" />
    </motion.div>
  )
}

function TimelineLine() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-0.5 z-0">
      <motion.div
        className="w-full h-full bg-gradient-to-b from-[#1f6feb] via-[#58a6ff] to-[#1f6feb] origin-top"
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  )
}

export function Schedule() {
  const titleRef = useRef(null)
  const isTitleInView = useInView(titleRef, { once: true })

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
            <Calendar className="w-8 h-8 text-[#1f6feb]" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#e6edf3]">Schedule</h2>
          </div>
          <p className="text-xl text-[#8b949e] max-w-2xl mx-auto">
            48 hours of non-stop innovation, learning, and collaboration
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative min-h-full">
          <TimelineLine />

          <div className="relative z-10">
            {scheduleData.map((event, index) => (
              <TimelineEvent key={event.id} event={event} index={index} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-[#161b22] border border-[#1f6feb] rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#e6edf3] mb-4">Ready to Code the Future?</h3>
            <p className="text-[#8b949e] mb-6">
              Join us for 48 hours of intense coding, learning, and building the next big thing.
            </p>
            <motion.button
              className="bg-[#1f6feb] hover:bg-[#58a6ff] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: "0 0 20px rgba(31, 111, 235, 0.3)",
              }}
            >
              Register Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 border border-[#1f6feb] rounded-full opacity-10 animate-spin-slow" />
      <div
        className="absolute bottom-1/4 right-0 w-32 h-32 border border-[#1f6feb] rounded-full opacity-10 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      />
    </section>
  )
}
