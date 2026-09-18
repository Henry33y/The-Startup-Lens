"use client";

import Link from "next/link";
import { ArrowUpRight, Compass } from "lucide-react";

export default function DiscoveryJoinLens() {
  return (
    <section className="py-20 sm:py-28 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5 text-tsl-blue" />
            <span>BECOME DISCOVERABLE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-tight text-tsl-white">
            BUILDING SOMETHING?
          </h2>

          <p className="text-base sm:text-lg text-tsl-white-soft/80 font-sans leading-relaxed">
            Document the journey and share it with the people paying attention.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-nav bg-tsl-white border border-tsl-white hover:border-tsl-blue text-tsl-black font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)]"
            >
              {/* Cyan fill slide up from bottom */}
              <span className="absolute inset-0 bg-tsl-blue transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />

              <span className="relative z-10 flex items-center space-x-2 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
                <span>JOIN THE LENS</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>

            <Link
              href="/login"
              className="group relative w-full sm:w-auto inline-flex items-center justify-center btn-nav bg-tsl-surface/90 border border-tsl-dark-grey hover:border-tsl-white text-tsl-white-soft font-display font-bold text-xs sm:text-sm tracking-widest uppercase rounded-none transition-all duration-300"
            >
              <span>ALREADY BUILDING? SIGN IN</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
