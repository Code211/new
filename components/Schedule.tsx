"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Schedule = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scheduleData = [
    {
      day: "Saturday, April 4th",
      events: [
        {
          time: "8:00 AM",
          title: "Check-in Opens",
          type: "general",
          description: "Registration and breakfast",
        },
        {
          time: "9:30 AM",
          title: "Opening Ceremony",
          type: "general",
          description: "Welcome and keynote speakers",
        },
        {
          time: "10:30 AM",
          title: "Hacking Begins!",
          type: "hacking",
          description: "Start building your project",
        },
        {
          time: "11:00 AM",
          title: "Intro to Web Dev Workshop",
          type: "workshop",
          description: "HTML, CSS, JavaScript basics",
        },
        {
          time: "12:00 PM",
          title: "Lunch",
          type: "general",
          description: "Food provided",
        },
        {
          time: "1:00 PM",
          title: "API Integration Workshop",
          type: "workshop",
          description: "Working with REST APIs",
        },
        {
          time: "3:00 PM",
          title: "Trivia Game",
          type: "activity",
          description: "Win prizes!",
        },
        {
          time: "5:00 PM",
          title: "Mentor Check-ins",
          type: "general",
          description: "Get help from industry experts",
        },
        {
          time: "6:00 PM",
          title: "Dinner",
          type: "general",
          description: "Food provided",
        },
        {
          time: "7:00 PM",
          title: "ML/AI Workshop",
          type: "workshop",
          description: "Intro to machine learning",
        },
        {
          time: "9:00 PM",
          title: "Game Night",
          type: "activity",
          description: "Board games and video games",
        },
        {
          time: "11:00 PM",
          title: "Midnight Snacks",
          type: "general",
          description: "Pizza and snacks",
        },
      ],
    },
  ];

  const typeColors: Record<
    string,
    { bg: string; text: string; border: string }
  > = {
    hacking: {
      bg: "bg-primary/10 dark:bg-primary/25",
      text: "text-primary",
      border: "border-primary/30 dark:border-primary/40",
    },
    workshop: {
      bg: "bg-secondary/10 dark:bg-secondary/25",
      text: "text-secondary",
      border: "border-secondary/30 dark:border-secondary/40",
    },
    activity: {
      bg: "bg-secondary/10 dark:bg-secondary/25",
      text: "text-secondary",
      border: "border-secondary/30 dark:border-secondary/40",
    },
    general: {
      bg: "bg-muted dark:bg-white/[0.06]",
      text: "text-muted-foreground",
      border: "border-border dark:border-white/10",
    },
  };

  return (
    <section id="schedule" className="py-24 bg-background noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
            Event Timeline
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Schedule
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: dayIndex === 0 ? -20 : 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + dayIndex * 0.1 }}
            >
              <div className="mb-4 border-b border-border">
                
              </div>

              <div className="space-y-3">
                {day.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.title}
                    className={`relative pl-6 py-4 px-4 rounded-lg border ${
                      typeColors[event.type].bg
                    } ${typeColors[event.type].border}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + eventIndex * 0.05 }}
                  >
                    <div
                      className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full ${
                        typeColors[event.type].bg
                      } border-2 ${typeColors[event.type].border}`}
                    />

                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <span className="font-mono text-sm font-medium min-w-[80px]">
                        {event.time}
                      </span>
                      <div className="flex-1">
                        <h4
                          className={`font-semibold ${
                            typeColors[event.type].text
                          }`}
                        >
                          {event.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full capitalize ${
                          typeColors[event.type].bg
                        } ${typeColors[event.type].text} border ${
                          typeColors[event.type].border
                        }`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
