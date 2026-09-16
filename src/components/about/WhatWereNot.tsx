"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const NOT_ITEMS = [
  "A MEDIA TEAM.",
  "A NEWS OUTLET.",
  "A HIGHLIGHT REEL.",
  "ANOTHER SOCIAL FEED.",
];

function StrikethroughStatement({ item, idx }: { item: string; idx: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAppeared, setHasAppeared] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: idx * 0.12 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block w-fit cursor-pointer group py-1 select-none"
    >
      {/* Statement Text: Crisply visible in both struck and active states */}
      <motion.span
        initial={{ opacity: 0.95, color: "rgba(248, 248, 248, 1)" }}
        whileInView={
          hasAppeared
            ? undefined
            : {
                opacity: 0.72,
                color: "rgba(230, 230, 230, 0.8)",
              }
        }
        animate={
          hasAppeared
            ? isHovered
              ? { opacity: 1, color: "rgba(255, 255, 255, 1)" }
              : { opacity: 0.72, color: "rgba(230, 230, 230, 0.8)" }
            : undefined
        }
        onAnimationComplete={() => setHasAppeared(true)}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: hasAppeared ? 0.3 : 0.5,
          delay: hasAppeared ? 0 : 0.35 + idx * 0.14,
          ease: "easeOut",
        }}
        className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight block transition-colors duration-300"
      >
        {item}
      </motion.span>

      {/* Editorial Strikethrough Line: Sweeps left-to-right on scroll, retracts on hover */}
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={hasAppeared ? undefined : { scaleX: 1 }}
        animate={
          hasAppeared
            ? isHovered
              ? { scaleX: 0 }
              : { scaleX: 1 }
            : undefined
        }
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          duration: hasAppeared ? 0.32 : 0.65,
          delay: hasAppeared ? 0 : 0.2 + idx * 0.14,
          ease: [0.16, 1, 0.3, 1],
        }}
        style={{ transformOrigin: "left" }}
        className="absolute left-0 top-[50%] -translate-y-1/2 w-full h-[3px] sm:h-[4px] bg-tsl-blue origin-left pointer-events-none shadow-[0_0_12px_rgba(0,212,255,0.6)]"
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
            viewport={{ once: true, margin: "-50px" }}
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
