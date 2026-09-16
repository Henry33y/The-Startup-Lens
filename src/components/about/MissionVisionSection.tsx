"use client";

import { motion } from "framer-motion";
import { Target, Eye } from "lucide-react";

export default function MissionVisionSection() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* 1. MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-12 bg-tsl-black border border-tsl-dark-grey relative flex flex-col justify-between space-y-8 group hover:border-tsl-blue/50 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-6 h-[2px] bg-tsl-blue" />
                  <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                    03 / OUR MISSION
                  </span>
                </div>
                <Target className="w-5 h-5 text-tsl-blue" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-snug">
                TO GIVE EARLY-STAGE AFRICAN BUILDERS GREATER VISIBILITY.
              </h3>

              <p className="text-base sm:text-lg text-tsl-white-soft/85 font-sans font-light leading-relaxed">
                By documenting their journeys, helping people discover what they&apos;re building, and creating meaningful connections around the work.
              </p>
            </div>

            <div className="pt-6 border-t border-tsl-dark-grey/50 text-xs font-mono text-tsl-grey">
              CORE PURPOSE • VISIBILITY &amp; CONNECTION
            </div>
          </motion.div>

          {/* 2. VISION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="p-8 sm:p-12 bg-tsl-black border border-tsl-dark-grey relative flex flex-col justify-between space-y-8 group hover:border-tsl-white/40 transition-colors"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                  <span className="w-6 h-[2px] bg-tsl-white" />
                  <span className="font-mono text-xs uppercase tracking-widest text-tsl-white">
                    04 / OUR VISION
                  </span>
                </div>
                <Eye className="w-5 h-5 text-tsl-white" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-snug">
                TO BECOME A LEADING PLATFORM FOR UNDERSTANDING INNOVATION.
              </h3>

              <p className="text-base sm:text-lg text-tsl-white-soft/85 font-sans font-light leading-relaxed">
                Discovering and understanding the people, startups, and ideas shaping Africa&apos;s next generation of technological and economic progress.
              </p>
            </div>

            <div className="pt-6 border-t border-tsl-dark-grey/50 text-xs font-mono text-tsl-grey">
              LONG-TERM OBJECTIVE • ECOSYSTEM HORIZON
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
