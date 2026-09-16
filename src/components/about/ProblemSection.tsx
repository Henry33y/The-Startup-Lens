"use client";

import { motion } from "framer-motion";

export default function ProblemSection() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-48 pb-24 sm:pb-32 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-tsl-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="space-y-12 sm:space-y-16">
          
          {/* Eyebrow / Section Marker */}
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              01 / THE PROBLEM
            </span>
          </div>

          {/* Editorial Grid: Giant Statement + Grounded Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Signature Editorial Statement (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-tsl-white leading-[1.02]">
                AFRICA ISN&apos;T <br />
                <span className="text-tsl-grey">SHORT ON BUILDERS.</span> <br />
                IT&apos;S SHORT ON <br />
                <span className="text-tsl-blue">VISIBILITY.</span>
              </h2>

              <div className="w-16 h-[2px] bg-tsl-dark-grey" />
            </motion.div>

            {/* Right Column: Grounded Editorial Narrative (5 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5 space-y-6 text-tsl-white-soft/80 font-sans leading-relaxed text-base sm:text-lg"
            >
              <p className="text-tsl-white font-medium text-lg sm:text-xl">
                Across African tech hubs, extraordinary ideas are being tested and iterated every single day.
              </p>

              <p>
                Yet the existing media landscape predominantly concentrates on late-stage funding announcements, mega-rounds, and polished victory laps.
              </p>

              <p>
                The critical inflection points—the scrappy initial prototypes, the tough pivots, the early community experiments, and the quiet milestones—happen entirely out of view.
              </p>

              <div className="pt-6 border-t border-tsl-dark-grey/60">
                <blockquote className="font-display text-sm sm:text-base font-semibold uppercase tracking-wide text-tsl-white leading-snug pl-4 border-l-2 border-tsl-blue">
                  &ldquo;By the time a founder reaches the headlines, ninety percent of their formative journey has already passed unseen.&rdquo;
                </blockquote>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}
