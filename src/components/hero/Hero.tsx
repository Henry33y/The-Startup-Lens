"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Compass, Sparkles } from "lucide-react";
import AfricaHeroMap from "./AfricaHeroMap";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-36 pb-24 overflow-hidden bg-tsl-black border-b border-tsl-dark-grey/40">
      {/* African Continent Map Atmospheric Light Reveal Background */}
      <AfricaHeroMap />

      <div className="relative z-10 max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center flex flex-col items-center">
        {/* Signal Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2.5 px-4 py-1.5 bg-tsl-surface/90 backdrop-blur-md border border-tsl-dark-grey text-xs font-mono tracking-widest text-tsl-white-soft mb-8 rounded-full shadow-lg"
        >
          <Sparkles className="w-3.5 h-3.5 text-tsl-blue animate-pulse" />
          <span className="text-tsl-grey">THE AFRICAN STARTUP ENGINE</span>
          <span className="text-tsl-blue font-semibold">• RAW PROGRESS</span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="display-xl max-w-5xl text-tsl-white tracking-tight mb-8 font-display drop-shadow-md"
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
          className="max-w-2xl text-lg sm:text-xl text-tsl-white-soft/85 font-sans font-normal leading-relaxed mb-12 drop-shadow-sm"
        >
          Discover the founders, startups, and ideas shaping Africa&apos;s technological future before everyone else catches on.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-5 w-full sm:w-auto z-20"
        >
          <Link
            href="/discover"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-tsl-white text-tsl-black font-display font-bold text-sm tracking-widest uppercase hover:bg-tsl-blue transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] group"
          >
            <span className="flex items-center space-x-2">
              <Compass className="w-4 h-4 text-tsl-black" />
              <span>EXPLORE THE LENS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>

          <Link
            href="/signup"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-tsl-surface/90 backdrop-blur-md border border-tsl-dark-grey text-tsl-white font-display font-bold text-sm tracking-widest uppercase hover:border-tsl-blue hover:text-tsl-blue transition-all duration-300"
          >
            <span>JOIN THE LENS</span>
          </Link>
        </motion.div>

        {/* Live Ecosystem Ticker Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 flex items-center space-x-6 text-xs text-tsl-grey font-mono bg-tsl-black/60 backdrop-blur-sm px-4 py-2 border border-tsl-dark-grey/40 rounded-full"
        >
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-tsl-blue animate-ping" />
            <span className="text-tsl-white font-semibold">1,420+ ACTIVE BUILDERS</span>
          </div>
          <span className="text-tsl-dark-grey">|</span>
          <div>54 CITIES MAPPED</div>
          <span className="text-tsl-dark-grey">|</span>
          <div>RAW FOUNDER DIARIES</div>
        </motion.div>
      </div>
    </section>
  );
}
