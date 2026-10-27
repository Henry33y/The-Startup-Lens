"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const NOT_ITEMS = [
  "A MEDIA TEAM.",
  "A NEWS OUTLET.",
  "A HIGHLIGHT REEL.",
  "ANOTHER SOCIAL FEED.",
];

function StrikethroughStatement({ item, idx }: { item: string; idx: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-40px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: isInView ? idx * 0.1 : 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block w-fit cursor-pointer group py-1 select-none"
    >
      {/* Statement Text: Crisply visible in both struck and active states */}
      <motion.span
        animate={
          isInView
            ? isHovered
              ? { opacity: 1, color: "#0A0A0A" }
              : { opacity: 0.65, color: "#0A0A0A" }
            : { opacity: 1, color: "#0A0A0A" }
        }
        transition={{
          duration: isHovered ? 0.25 : 0.4,
          delay: isInView && !isHovered ? 0.3 + idx * 0.12 : 0,
          ease: "easeOut",
        }}
        className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight block transition-colors duration-300 text-tsl-white"
      >
        {item}
      </motion.span>

      {/* Editorial Strikethrough Line: Sweeps left-to-right whenever in view, retracts on hover */}
      <motion.span
        animate={{
          scaleX: isInView && !isHovered ? 1 : 0,
        }}
        transition={{
          duration: isHovered ? 0.28 : isInView ? 0.65 : 0.2,
          delay: isHovered || !isInView ? 0 : 0.2 + idx * 0.14,
          ease: isHovered ? "easeOut" : [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="absolute left-0 top-[50%] -translate-y-1/2 w-full h-[3px] sm:h-[4px] bg-tsl-blue origin-left pointer-events-none shadow-[0_0_8px_rgba(2,132,199,0.3)]"
      />
    </motion.div>
  );
}

export default function WhatWereNot() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Heading with Scroll Entrance */}
        <div className="max-w-3xl mb-14 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="heading-section text-tsl-white tracking-tight"
          >
            WHAT WE&apos;RE NOT
          </motion.h2>
        </div>

        {/* Reversible Strikethrough Statement List with Enhanced Visibility & Scroll Entrance */}
        <div className="flex flex-col space-y-8 sm:space-y-10 lg:space-y-12 max-w-4xl">
          {NOT_ITEMS.map((item, idx) => (
            <StrikethroughStatement key={item} item={item} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
