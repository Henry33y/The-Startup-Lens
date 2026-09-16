"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-right">
        
        {/* Section Heading — Right Aligned */}
        <div className="mb-10 sm:mb-14 flex justify-end">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-tsl-white tracking-tight text-right"
          >
            OUR VISION
          </motion.h2>
        </div>

        {/* Primary Vision Statement — Right Aligned */}
        <div className="max-w-4xl ml-auto space-y-6 sm:space-y-8 flex flex-col items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold uppercase tracking-tight text-tsl-white leading-snug text-right"
          >
            To become a leading platform for discovering and understanding the people, startups and ideas shaping Africa&apos;s next generation of innovation.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
