"use client";

import { motion } from "framer-motion";

export default function MissionSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-tsl-white tracking-tight"
          >
            OUR MISSION
          </motion.h2>
        </div>

        {/* Primary Mission Statement */}
        <div className="max-w-4xl space-y-6 sm:space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[42px] font-bold uppercase tracking-tight text-tsl-white leading-snug"
          >
            To give early-stage African builders greater visibility by documenting their journeys, helping people discover what they&apos;re building, and creating meaningful connections around the work.
          </motion.p>
        </div>

      </div>
    </section>
  );
}
