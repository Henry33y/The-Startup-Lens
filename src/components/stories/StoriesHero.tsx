"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function StoriesHero() {
  return (
    <section className="relative min-h-[65vh] sm:min-h-[75vh] pt-36 sm:pt-44 lg:pt-48 pb-20 sm:pb-28 flex flex-col justify-center overflow-hidden bg-tsl-black">
      {/* Background Hero Photographic Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logos/stories-hero.jpg"
          alt="African builders and creators recording stories from the build"
          fill
          priority
          unoptimized
          className="object-cover object-right md:object-center filter grayscale contrast-[1.20] brightness-90 opacity-80 scale-105"
        />

        {/* Ambient Darkened Base Tint — Deepened "just a bit more" */}
        <div className="absolute inset-0 bg-slate-950/35 pointer-events-none" />

        {/* Top Fade (blends seamlessly behind the fixed navbar) */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white via-white/60 to-transparent pointer-events-none" />

        {/* Left Typography Contrast Wash (makes black text pop without washing out the photo on the right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/55 to-transparent md:from-white/90 md:via-white/40 md:to-transparent pointer-events-none" />

        {/* Bottom Fade (smoothly melts the hero photograph into the white page surface below) */}
        <div className="absolute inset-x-0 bottom-0 h-44 sm:h-64 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10 w-full">
        <div className="max-w-3xl space-y-6">
          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-tsl-white leading-[0.95]"
          >
            STORIES FROM <br />
            <span className="text-tsl-blue">THE BUILD.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg sm:text-2xl text-tsl-white-soft/90 font-sans font-light max-w-2xl leading-relaxed pt-2"
          >
            The people, ideas, experiments and lessons behind Africa&apos;s emerging startups.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
