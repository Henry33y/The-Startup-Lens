"use client";

import { motion } from "framer-motion";

export default function WhatWeAre() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-tsl-white tracking-tight"
          >
            WHAT WE ARE
          </motion.h2>
        </div>

        {/* Major Editorial Definition */}
        <div className="max-w-4xl space-y-8 sm:space-y-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-bold uppercase tracking-tight text-tsl-white leading-snug"
          >
            The Startup Lens is a platform for discovering, documenting, and connecting with the people building Africa&apos;s next generation of startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="pl-6 sm:pl-8 border-l-2 border-tsl-blue py-1"
          >
            <p className="font-display text-xl sm:text-2xl font-bold uppercase tracking-wide text-tsl-blue leading-tight">
              &ldquo;We don&apos;t just cover the ecosystem. We help make it visible.&rdquo;
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="text-base sm:text-lg text-tsl-white-soft/80 font-sans font-light leading-relaxed max-w-2xl"
          >
            Media is one way we tell stories, but the platform is built around real builders, their progress, and the connections that help them grow.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
