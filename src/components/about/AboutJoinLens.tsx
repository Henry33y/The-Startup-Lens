"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, UserPlus, Compass } from "lucide-react";

export default function AboutJoinLens() {
  return (
    <section className="py-24 sm:py-32 lg:py-36 bg-tsl-black relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tsl-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto p-8 sm:p-14 bg-tsl-black-soft border border-tsl-dark-grey relative space-y-6"
        >
          {/* Headline */}
          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white leading-tight">
            YOUR JOURNEY <br />
            <span className="text-tsl-blue">DESERVES TO BE SEEN.</span>
          </h2>

          {/* Supporting Copy */}
          <div className="text-tsl-white-soft/85 text-base sm:text-lg font-sans font-light max-w-xl mx-auto leading-relaxed">
            <p>
              Building something? Document it. Share it. Let people follow the journey from the earliest stages.
            </p>
          </div>

          {/* Dual CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            
            {/* Primary CTA: Create Your Builder Profile */}
            <Link
              href="/signup"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-white border-2 border-tsl-white hover:border-tsl-blue text-tsl-black font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              <span className="absolute inset-0 bg-tsl-blue transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

              <span className="relative z-10 flex items-center space-x-2.5 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
                <UserPlus className="w-4 h-4 transition-colors duration-300 group-hover:text-tsl-black" />
                <span>CREATE YOUR BUILDER PROFILE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>

            {/* Secondary CTA: Explore The Builders */}
            <Link
              href="/builders"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-hero bg-tsl-surface/90 backdrop-blur-md border-2 border-tsl-dark-grey hover:border-tsl-white text-tsl-white-soft font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-tsl-white transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

              <span className="relative z-10 flex items-center space-x-2.5 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
                <Compass className="w-4 h-4 transition-colors duration-300 group-hover:text-tsl-black" />
                <span>EXPLORE THE BUILDERS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
