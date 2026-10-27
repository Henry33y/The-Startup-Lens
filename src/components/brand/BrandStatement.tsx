"use client";

import { motion } from "framer-motion";

export default function BrandStatement() {
  return (
    <section className="pt-16 sm:pt-20 lg:pt-24 pb-24 sm:pb-32 bg-tsl-black-soft border-y border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Background Subtle Gradient & Lens Line */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tsl-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Heading */}
          <div className="w-full flex justify-center pb-2 sm:pb-4">
            <span className="font-mono text-base sm:text-lg uppercase tracking-widest text-tsl-white font-semibold border-b-2 border-tsl-white pb-1 inline-block">
              OUR POSITIONING
            </span>
          </div>

          {/* Statement Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-tsl-white leading-[1.02]"
          >
            AFRICA ISN&apos;T <br />
            <span className="text-tsl-grey">SHORT ON BUILDERS.</span> <br />
            IT&apos;S SHORT ON <br />
            <span className="text-tsl-blue">VISIBILITY.</span>
          </motion.h2>

          {/* Concise Supporting Sentence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6 border-t border-tsl-dark-grey/50 max-w-2xl"
          >
            <p className="text-lg sm:text-2xl text-tsl-white-soft/90 font-sans font-light leading-relaxed">
              We document the people building Africa&apos;s future while they&apos;re still building it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
