"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const STEPS = [
  {
    title: "DISCOVER",
    description: "We find the builders, startups and ideas worth paying attention to.",
  },
  {
    title: "DOCUMENT",
    description: "We tell the story behind the work — the progress, experiments, setbacks and milestones.",
  },
  {
    title: "CONNECT",
    description: "We create a place where builders and the people around them can find each other.",
  },
  {
    title: "AMPLIFY",
    description: "We help promising people and ideas reach a wider audience.",
  },
];

export default function HowWeOperate() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 70%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="heading-section text-tsl-white tracking-tight"
          >
            HOW WE OPERATE
          </motion.h2>
        </div>

        {/* Editorial Vertical Timeline / Rail */}
        <div ref={containerRef} className="relative max-w-3xl pl-8 sm:pl-12">
          
          {/* Base Background Rail Line (Subtle Dark Grey) */}
          <div className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-tsl-dark-grey/60 pointer-events-none" />

          {/* Active Scroll-Linked Rail Line (TSL Cyan Glow) */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-[7px] sm:left-[11px] top-4 bottom-4 w-[2px] bg-tsl-blue origin-top pointer-events-none shadow-[0_0_8px_rgba(0,212,255,0.6)]"
          />

          <div className="space-y-16 sm:space-y-24">
            {STEPS.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Node Marker */}
                <div className="absolute -left-[37px] sm:-left-[43px] top-1.5 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-tsl-black border-2 border-tsl-dark-grey group-hover:border-tsl-blue transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-tsl-blue opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base sm:text-xl text-tsl-white-soft/85 font-sans font-light leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
