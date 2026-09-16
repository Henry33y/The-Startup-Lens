"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";
import AfricaHeroMap from "./AfricaHeroMap";
import HeroInteractiveParticles from "./HeroInteractiveParticles";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-start items-center pt-48 sm:pt-60 lg:pt-64 pb-44 sm:pb-56 lg:pb-64 overflow-hidden bg-tsl-black border-b border-tsl-dark-grey/40" style={{ paddingTop: "200px", paddingBottom: "180px" }}>
      {/* African Continent Map Atmospheric Light Reveal Background */}
      <AfricaHeroMap />

      {/* Interactive Cursor Light Glow & Constellation Particles */}
      <HeroInteractiveParticles />

      <div className="relative z-10 max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center flex flex-col items-center gap-8 sm:gap-10">

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-xl max-w-5xl text-tsl-white tracking-tight font-display drop-shadow-md leading-[1.08]"
        >
          SEE WHAT&apos;S <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tsl-white via-tsl-white-soft to-tsl-blue">
            BEING BUILT
          </span>{" "}
          NEXT.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-lg sm:text-2xl text-tsl-white-soft/85 font-sans font-normal leading-relaxed drop-shadow-sm"
        >
          Discover the founders, startups, and ideas shaping Africa&apos;s technological future before everyone else catches on.
        </motion.p>

        {/* CTA Buttons with Bottom-to-Top Fill Hover Animation & Responsive Tailwind Padding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 w-full sm:w-auto z-20 pt-4"
        >
          {/* Button 1: Explore the Lens (Cyan fill slide up from bottom) */}
          <Link
            href="/discover"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-black-soft border-2 border-tsl-blue text-tsl-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(0,212,255,0.25)] hover:shadow-[0_0_45px_rgba(0,212,255,0.6)]"
          >
            {/* Color fill layer sliding from bottom */}
            <span className="absolute inset-0 bg-tsl-blue transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />
            
            <span className="relative z-10 flex items-center space-x-3 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
              <Compass className="w-4 h-4 transition-colors duration-300 group-hover:text-tsl-black" />
              <span>EXPLORE THE LENS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>

          {/* Button 2: Join the Lens (White fill slide up from bottom) */}
          <Link
            href="/signup"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-surface/90 backdrop-blur-md border-2 border-tsl-dark-grey hover:border-tsl-white text-tsl-white-soft font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300"
          >
            {/* Color fill layer sliding from bottom */}
            <span className="absolute inset-0 bg-tsl-white transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

            <span className="relative z-10 flex items-center space-x-3 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
              <span>JOIN THE LENS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </motion.div>

        {/* Live Ecosystem Ticker Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-8 flex items-center space-x-6 text-xs text-tsl-grey font-mono bg-tsl-black/60 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 border border-tsl-dark-grey/40 rounded-full"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-tsl-blue animate-ping" />
            <span className="text-tsl-white font-semibold">1,420+ ACTIVE BUILDERS</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
