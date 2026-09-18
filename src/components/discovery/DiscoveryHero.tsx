"use client";

import { motion } from "framer-motion";

export default function DiscoveryHero() {
  return (
    <section className="relative pt-36 sm:pt-44 lg:pt-52 pb-20 sm:pb-28 overflow-hidden bg-tsl-black border-b border-tsl-dark-grey/40">
      {/* Subtle Optical Lens Reticle Motif in Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 select-none">
        <svg
          viewBox="0 0 800 800"
          className="w-[600px] sm:w-[750px] lg:w-[900px] h-[600px] sm:h-[750px] lg:h-[900px] text-tsl-grey/40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Concentric Lens Rings */}
          <circle cx="400" cy="400" r="380" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="400" cy="400" r="280" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="400" r="180" stroke="currentColor" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="400" cy="400" r="90" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="400" r="8" fill="currentColor" fillOpacity="0.4" />

          {/* Precision Optical Crosshairs */}
          <line x1="400" y1="40" x2="400" y2="120" stroke="currentColor" strokeWidth="1" />
          <line x1="400" y1="680" x2="400" y2="760" stroke="currentColor" strokeWidth="1" />
          <line x1="40" y1="400" x2="120" y2="400" stroke="currentColor" strokeWidth="1" />
          <line x1="680" y1="400" x2="760" y2="400" stroke="currentColor" strokeWidth="1" />

          {/* Diagonal Corner Tick Marks */}
          <line x1="160" y1="160" x2="180" y2="180" stroke="currentColor" strokeWidth="1" />
          <line x1="640" y1="160" x2="620" y2="180" stroke="currentColor" strokeWidth="1" />
          <line x1="160" y1="640" x2="180" y2="620" stroke="currentColor" strokeWidth="1" />
          <line x1="640" y1="640" x2="620" y2="620" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-4xl space-y-6">
          {/* Subtle Category/Status Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <span className="w-6 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              ECOSYSTEM DISCOVERY
            </span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="display-xl text-tsl-white tracking-tight leading-[0.92]"
          >
            LOOK CLOSER.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-2xl text-tsl-white-soft/85 font-sans font-light max-w-2xl leading-relaxed pt-2"
          >
            Discover the builders, startups, stories and ideas shaping Africa.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
