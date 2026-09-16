"use client";

import { motion } from "framer-motion";

const BELIEFS = [
  {
    number: "01",
    title: "RAW PROGRESS",
    tagline: "The journey matters, not only the polished outcome.",
    description:
      "Real innovation is iterative, demanding, and often uncertain. We believe the early chapters of building—hypotheses, pivots, first user discoveries, and hard-earned lessons—hold far greater value than retroactive victory narratives.",
  },
  {
    number: "02",
    title: "SIGNAL OVER NOISE",
    tagline: "Meaningful discovery rather than endless content.",
    description:
      "The ecosystem doesn't need more generic commentary or algorithmic churn. We focus on verified builder updates, genuine traction, and distinct ideas that deserve undivided attention.",
  },
  {
    number: "03",
    title: "COMMUNITY WITH IDENTITY",
    tagline: "Participate, contribute, follow journeys, and belong.",
    description:
      "We reject passive audiences. Founders, early believers, operators, and ecosystem peers belong to a shared identity where progress is documented openly and supported collaboratively.",
  },
];

export default function BeliefsSection() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36 lg:pb-44 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              02 / WHAT WE BELIEVE
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            THREE FOUNDATIONAL PRINCIPLES.
          </h2>
          <p className="text-tsl-white-soft/80 text-lg sm:text-xl font-sans font-light">
            How we see the world shapes what we choose to document.
          </p>
        </div>

        {/* 3 Principles Editorial Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {BELIEFS.map((belief, idx) => (
            <motion.div
              key={belief.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group p-8 sm:p-10 bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/50 flex flex-col justify-between transition-all duration-300 relative overflow-hidden"
            >
              {/* Subtle top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-tsl-dark-grey group-hover:bg-tsl-blue transition-colors duration-300" />

              <div className="space-y-6">
                {/* Number & Indicator */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-bold text-tsl-blue tracking-widest">
                    {belief.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-tsl-dark-grey group-hover:bg-tsl-blue transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors duration-300">
                  {belief.title}
                </h3>

                {/* Tagline */}
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-tsl-white-soft/90 leading-snug">
                  {belief.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-tsl-grey font-sans leading-relaxed">
                  {belief.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-tsl-dark-grey/40 flex items-center justify-between text-[11px] font-mono text-tsl-grey">
                <span>CORE PILLAR</span>
                <span className="group-hover:text-tsl-white transition-colors">TSL PHILOSOPHY</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
