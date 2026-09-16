"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative pt-44 sm:pt-52 lg:pt-56 pb-20 sm:pb-24 lg:pb-28 overflow-hidden bg-tsl-black border-b border-tsl-dark-grey/40">
      {/* Background Subtle Optical Ring & Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-tsl-blue/5 rounded-full blur-[140px]" />
        <div className="absolute w-[450px] sm:w-[650px] aspect-square rounded-full border border-tsl-dark-grey/30 opacity-40" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2.5 px-3.5 py-1.5 bg-tsl-surface/80 border border-tsl-dark-grey backdrop-blur-md rounded-full text-xs font-mono text-tsl-blue tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-tsl-blue animate-ping" />
          <span>ABOUT THE STARTUP LENS</span>
        </motion.div>

        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-lg max-w-4xl text-tsl-white tracking-tight font-display drop-shadow-md leading-[1.05]"
        >
          SEEING THE BUILDERS <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-tsl-white via-tsl-white-soft to-tsl-blue">
            BEFORE THE HEADLINES.
          </span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl text-base sm:text-xl text-tsl-white-soft/85 font-sans font-light leading-relaxed"
        >
          The Startup Lens is a platform for discovering, documenting, and connecting with the people building Africa&apos;s next generation of startups.
        </motion.p>

        {/* Dual Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto z-20 pt-2"
        >
          {/* Button 1: Explore the Lens (Cyan fill slide up) */}
          <Link
            href="/discover"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-black-soft border-2 border-tsl-blue text-tsl-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_25px_rgba(0,212,255,0.2)] hover:shadow-[0_0_35px_rgba(0,212,255,0.5)]"
          >
            <span className="absolute inset-0 bg-tsl-blue transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />
            
            <span className="relative z-10 flex items-center space-x-2.5 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
              <Compass className="w-4 h-4 transition-colors duration-300 group-hover:text-tsl-black" />
              <span>EXPLORE THE LENS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>

          {/* Button 2: Join the Lens (White fill slide up) */}
          <Link
            href="/signup"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-surface/90 backdrop-blur-md border-2 border-tsl-dark-grey hover:border-tsl-white text-tsl-white-soft font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-tsl-white transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

            <span className="relative z-10 flex items-center space-x-2.5 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
              <span>JOIN THE LENS</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
