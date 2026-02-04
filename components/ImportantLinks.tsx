"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  ExternalLink,
  Users,
  FileText,
  MessageCircle,
  Send,
} from "lucide-react";

const ImportantLinks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const links = [
    {
      title: "Registration",
      description: "Sign up your team now",
      icon: Users,
      href: "#",
      color: "from-primary to-accent",
    },
    {
      title: "Discord",
      description: "Join our community",
      icon: MessageCircle,
      href: "#",
      color: "from-[#5865F2] to-[#7289DA]",
    },
    {
      title: "Rules",
      description: "Event guidelines",
      icon: FileText,
      href: "#",
      color: "from-secondary to-accent",
    },
    {
      title: "Code of Conduct",
      description: "Community standards",
      icon: FileText,
      href: "#",
      color: "from-accent-dark to-primary",
    },
  ];

  return (
    <section className="py-24 bg-card noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
            Quick Access
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Important <span className="gradient-text">Links</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <motion.a
              key={link.title}
              href={link.href}
              className="group relative p-6 bg-background rounded-xl border border-border overflow-hidden card-hover"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br ${link.color}`}
              />

              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 bg-gradient-to-br ${link.color}`}
              >
                <link.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                {link.title}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>

              <motion.div
                className="absolute bottom-4 right-4 text-muted-foreground"
                initial={{ x: 0, opacity: 0.5 }}
                whileHover={{ x: 5, opacity: 1 }}
              >
                →
              </motion.div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
