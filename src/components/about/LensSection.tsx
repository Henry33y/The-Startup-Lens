"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LensSection() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Background Soft Ambient Light */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-tsl-blue/[0.05] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Explanation (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="heading-section text-tsl-white tracking-tight leading-[1.05]">
              LOOK <br />
              <span className="text-tsl-blue">CLOSER.</span>
            </h2>

            <div className="space-y-6 text-tsl-white-soft/85 font-sans text-base sm:text-xl font-light leading-relaxed">
              <p className="text-tsl-white font-normal text-xl sm:text-2xl">
                The Startup Lens exists to notice the builders, ideas and journeys that are easy to miss.
              </p>

              <p>
                A lens brings into sharp, deliberate clarity the work that people often skim past. It focuses on the substance behind the headlines rather than the noise around them.
              </p>

              <p className="text-tsl-grey">
                When you look closer at the African tech landscape, you see engineers, operators, and problem-solvers quietly building solutions designed for real impact.
              </p>
            </div>
          </motion.div>

          {/* Right Column: TSL Logo Brandmark Image (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center p-4 sm:p-8"
          >
            <div className="w-full max-w-[340px] sm:max-w-[400px] flex items-center justify-center select-none">
              <Image
                src="/logos/the-startup-lens-logo-black.png"
                alt="The Startup Lens"
                width={480}
                height={480}
                unoptimized
                priority
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
              />
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
