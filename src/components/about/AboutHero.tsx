"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative min-h-[75vh] sm:min-h-[85vh] pt-48 sm:pt-56 lg:pt-64 pb-28 sm:pb-36 lg:pb-40 flex items-center justify-center overflow-hidden bg-tsl-black border-b border-tsl-dark-grey/40">
      {/* Background Hero Photographic Image — Enhanced High Visibility */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/logos/pexels-kingjulas-10353711 (1).jpg"
          alt="The Startup Lens — About Us"
          fill
          priority
          className="object-cover object-center filter contrast-110 scale-105"
        />
        {/* Transparent Dark Vignette Overlay for Crisp Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-tsl-black/65 via-tsl-black/25 to-tsl-black/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.2),rgba(5,5,5,0.2)_85%)]" />
      </div>

      <div className="relative z-10 max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center flex flex-col items-center justify-center gap-8 sm:gap-10">
        {/* Main Display Heading: ABOUT US */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-bold uppercase tracking-tight text-tsl-white drop-shadow-[0_8px_40px_rgba(0,0,0,0.95)] leading-none select-none"
        >
          ABOUT US
        </motion.h1>

        {/* Dual Actions with High-Contrast Backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto"
        >
          {/* Button 1: Explore the Lens (Cyan fill slide up) */}
          <Link
            href="/discover"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-black/85 backdrop-blur-md border-2 border-tsl-blue text-tsl-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_25px_rgba(0,212,255,0.35)] hover:shadow-[0_0_40px_rgba(0,212,255,0.7)]"
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
            className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-black/85 backdrop-blur-md border-2 border-tsl-dark-grey hover:border-tsl-white text-tsl-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 shadow-[0_4px_25px_rgba(0,0,0,0.8)]"
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
