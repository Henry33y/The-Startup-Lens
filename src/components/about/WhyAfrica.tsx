"use client";

import { motion } from "framer-motion";

export default function WhyAfrica() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              08 / WHY AFRICA
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            AFRICA IS BUILDING.
          </h2>
          <p className="text-tsl-white-soft/80 text-base sm:text-lg font-sans font-light">
            And the people doing the building deserve to be seen.
          </p>
        </div>

        {/* Grounded Editorial Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pb-12 border-b border-tsl-dark-grey/50">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 text-base text-tsl-white-soft/85 font-sans leading-relaxed"
          >
            <p className="text-lg sm:text-xl text-tsl-white font-normal leading-snug">
              African builders are solving some of the most critical structural challenges in the world today.
            </p>
            <p>
              From decentralizing energy and reimagining agricultural distribution to building offline-first financial tools and accessible healthcare infrastructure, innovation across the continent is deeply contextual and practical.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-4 text-base text-tsl-white-soft/85 font-sans leading-relaxed"
          >
            <p>
              Each startup hub—whether in West, East, North, or Southern Africa—operates within distinct market dynamics, regulatory landscapes, and cultural contexts.
            </p>
            <p className="text-tsl-grey">
              The Startup Lens is focused on providing continuous, credible visibility to these builders while they are actively creating solutions, rather than waiting for mainstream validation.
            </p>
          </motion.div>

        </div>

        {/* Bottom Grounded Takeaway */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-tsl-grey">
          <span className="text-tsl-blue uppercase font-semibold">
            CONTEXTUAL INNOVATION • REAL PROGRESS
          </span>
          <span className="uppercase text-tsl-grey/80">
            DISCOVERING BUILDERS ACROSS AFRICAN HUBS
          </span>
        </div>

      </div>
    </section>
  );
}
