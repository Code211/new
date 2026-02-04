"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";

const Sponsors = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tiers = [
    {
      name: "Title",
      sponsors: [{ name: "TechCorp", logo: "TC" }],
      size: "w-40 h-40",
    },
    {
      name: "Gold",
      sponsors: [
        { name: "InnovateLabs", logo: "IL" },
        { name: "DevStudio", logo: "DS" },
      ],
      size: "w-32 h-32",
    },
    {
      name: "Silver",
      sponsors: [
        { name: "CloudBase", logo: "CB" },
        { name: "DataFlow", logo: "DF" },
        { name: "AppVenture", logo: "AV" },
      ],
      size: "w-24 h-24",
    },
    {
      name: "Bronze",
      sponsors: [
        { name: "CodeCraft", logo: "CC" },
        { name: "ByteSize", logo: "BS" },
        { name: "PixelPush", logo: "PP" },
        { name: "AlgoRhythm", logo: "AR" },
      ],
      size: "w-20 h-20",
    },
  ];

  const tierColors: Record<string, string> = {
    Title: "from-yellow-400 to-amber-600",
    Gold: "from-yellow-300 to-yellow-500",
    Silver: "from-gray-300 to-gray-400",
    Bronze: "from-amber-600 to-amber-800",
  };

  return (
    <section id="sponsors" className="py-24 bg-background noise-bg" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-mono text-primary uppercase tracking-widest mb-4 block">
            Made Possible By
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Sponsors</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Code211 is made possible thanks to the generous support of our
            amazing sponsors.
          </p>
        </motion.div>

        <div className="space-y-12">
          {tiers.map((tier, tierIndex) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + tierIndex * 0.1 }}
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border" />
                <span
                  className={`px-4 py-1 rounded-full text-sm font-semibold bg-gradient-to-r ${
                    tierColors[tier.name]
                  } text-background`}
                >
                  {tier.name} Sponsor{tier.sponsors.length > 1 ? "s" : ""}
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border" />
              </div>

              <div className="flex flex-wrap justify-center gap-6">
                {tier.sponsors.map((sponsor, sponsorIndex) => (
                  <motion.div
                    key={sponsor.name}
                    className={`${tier.size} bg-card border border-border rounded-xl flex items-center justify-center card-hover group cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + tierIndex * 0.1 + sponsorIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-center">
                      <span className="text-2xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                        {sponsor.logo}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {sponsor.name}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <div className="inline-block p-8 bg-card border border-border rounded-2xl">
            <h3 className="text-2xl font-bold mb-2">
              Interested in Sponsoring?
            </h3>
            <p className="text-muted-foreground mb-6">
              Partner with us to inspire the next generation of innovators.
            </p>
            <Button className="bg-primary hover:bg-primary/90 glow-effect">
              Become a Sponsor
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
