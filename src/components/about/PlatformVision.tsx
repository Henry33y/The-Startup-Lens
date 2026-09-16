"use client";

import { motion } from "framer-motion";
import { Film, UserCheck, Compass, MessageSquareCode, Globe2 } from "lucide-react";

const PILLARS = [
  {
    id: "media",
    name: "MEDIA",
    icon: Film,
    headline: "Stories and founder dispatches capturing the real build process.",
  },
  {
    id: "discovery",
    name: "DISCOVERY",
    icon: Compass,
    headline: "A clear way to explore emerging startups and ideas across regions.",
  },
  {
    id: "builders",
    name: "BUILDERS",
    icon: UserCheck,
    headline: "Profiles and updates from the people turning ideas into products.",
  },
  {
    id: "community",
    name: "COMMUNITY",
    icon: MessageSquareCode,
    headline: "Direct connections between founders, early supporters, and peers.",
  },
  {
    id: "ecosystem",
    name: "ECOSYSTEM",
    icon: Globe2,
    headline: "A broader, grounded view of what is being built across Africa.",
  },
];

export default function PlatformVision() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-tsl-white tracking-tight"
          >
            WHAT WE&apos;RE BUILDING
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-xl text-tsl-white-soft/85 font-sans font-light leading-relaxed"
          >
            The Startup Lens is expanding into an interconnected platform where discovery, builder identity, storytelling, and community operate as one ecosystem.
          </motion.p>
        </div>

        {/* Connected Platform Architecture Layout */}
        <div className="relative border border-tsl-dark-grey/80 bg-tsl-black p-6 sm:p-10 lg:p-14">
          
          {/* Subtle Grid Crosshair Accents */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-tsl-dark-grey/40" />
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[1px] bg-tsl-dark-grey/40" />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="space-y-3 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-tsl-black-soft border border-tsl-dark-grey flex items-center justify-center group-hover:border-tsl-blue transition-colors">
                      <Icon className="w-4 h-4 text-tsl-blue" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                      {pillar.name}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-tsl-grey font-sans font-light leading-relaxed pl-11">
                    {pillar.headline}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
