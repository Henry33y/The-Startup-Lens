"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WhyAfrica() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-16 sm:space-y-20">
        
        {/* Editorial Documentary Image Break */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-none overflow-hidden border border-tsl-dark-grey group"
        >
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1600"
            alt="African founders and engineers collaborating in a builder workshop"
            fill
            className="object-cover object-center filter grayscale contrast-110 brightness-90 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          />
          {/* Subtle vignette / atmospheric overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-tsl-black via-transparent to-transparent opacity-80 pointer-events-none" />
          
          {/* Documentary Caption */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-tsl-white-soft/80 bg-tsl-black/80 px-3 py-1 border border-tsl-dark-grey/60 backdrop-blur-sm">
              ACCRA / LAGOS / NAIROBI / KIGALI
            </span>
          </div>
        </motion.div>

        {/* Section Heading & Narrative */}
        <div className="space-y-10 sm:space-y-12">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-section text-tsl-white tracking-tight"
            >
              AFRICA IS BUILDING.
            </motion.h2>
          </div>

          {/* Grounded Editorial Narrative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-base sm:text-lg text-tsl-white-soft/85 font-sans font-light leading-relaxed"
            >
              <p className="text-xl sm:text-2xl text-tsl-white font-normal leading-snug">
                African builders are solving some of the most critical structural challenges in the world today.
              </p>
              <p>
                From energy access and agricultural distribution to healthcare delivery and localized financial infrastructure, innovation across the continent is practical, resilient, and deeply contextual.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-5 text-base sm:text-lg text-tsl-white-soft/85 font-sans font-light leading-relaxed"
            >
              <p>
                Startups across different regions operate within distinct market dynamics, regulatory environments, and community needs.
              </p>
              <p className="text-tsl-grey">
                The Startup Lens is dedicated to making these builders visible while they are actively doing the work, helping ideas and people get the attention they deserve.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
