"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Clock,
  MapPin,
  Gamepad2,
  Music,
  Pizza,
  Coffee,
  Trophy,
  Puzzle,
  Film,
  Laugh,
} from "lucide-react";

const activities = [
  {
    name: "Tech Trivia Championship",
    description: "Test your knowledge. Win amazing prizes!",
    location: "Main Hall",
    time: "Sat 3:00 PM",
    icon: Trophy,
    color: "from-yellow-400 to-amber-500",
  },
  {
    name: "Game Night",
    description: "Board games, card games, and video game tournaments.",
    location: "Lounge Area",
    time: "Sat 9:00 PM",
    icon: Gamepad2,
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Midnight Snack Attack",
    description: "Pizza, snacks, and energy drinks.",
    location: "Cafeteria",
    time: "Sat 11:00 PM",
    icon: Pizza,
    color: "from-red-400 to-orange-500",
  },
  {
    name: "Coffee & Chat",
    description: "Network with fellow hackers over specialty coffee.",
    location: "Coffee Lounge",
    time: "Sun 8:00 AM",
    icon: Coffee,
    color: "from-amber-600 to-yellow-700",
  },
  {
    name: "Escape Room Challenge",
    description: "Solve puzzles and escape before time runs out!",
    location: "Room C101",
    time: "Sat 5:00 PM",
    icon: Puzzle,
    color: "from-green-400 to-emerald-500",
  },
  {
    name: "Karaoke Hour",
    description: "Late-night karaoke session.",
    location: "Lounge Area",
    time: "Sat 10:00 PM",
    icon: Music,
    color: "from-pink-400 to-rose-500",
  },
  {
    name: "Movie Screening",
    description: "Tech-themed movie marathon. Popcorn provided!",
    location: "Theater Room",
    time: "Sun 1:00 AM",
    icon: Film,
    color: "from-blue-400 to-indigo-500",
  },
  {
    name: "Stand-up Comedy",
    description: "Open mic comedy session.",
    location: "Main Hall",
    time: "Sat 8:00 PM",
    icon: Laugh,
    color: "from-teal-400 to-cyan-500",
  },
];

export default function ActivitiesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
              Take a Break
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Activities</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hackathons are not just about coding! Join us for games, food,
              networking, and fun.
            </p>
          </motion.div>

          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
              <span className="text-2xl mr-2">🎉</span>
              <span className="font-medium">
                Remember: Balance is key! Have fun while you hack.
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                className="group relative bg-card border border-border rounded-xl overflow-hidden card-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <div
                  className={`h-24 bg-gradient-to-br ${activity.color} flex items-center justify-center`}
                >
                  <activity.icon className="w-10 h-10 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2">{activity.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {activity.description}
                  </p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{activity.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                </div>
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${activity.color} pointer-events-none`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
