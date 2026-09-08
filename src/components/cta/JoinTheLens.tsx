"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, UserPlus } from "lucide-react";

export default function JoinTheLens() {
  return (
    <section className="py-28 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tsl-blue/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto p-10 sm:p-16 bg-tsl-black border border-tsl-dark-grey relative space-y-8"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-tsl-blue" />
            <span>JOIN THE AFRICAN BUILDER NETWORK</span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase tracking-tight text-tsl-white leading-tight">
            YOUR JOURNEY <br />
            <span className="text-tsl-blue">DESERVES TO BE SEEN.</span>
          </h2>

          <p className="text-tsl-white-soft/80 text-lg sm:text-xl font-sans max-w-2xl mx-auto leading-relaxed">
            Building something? Document it. Share it. Let fellow founders, ecosystem leaders, and early supporters follow your progress from day one.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-tsl-white text-tsl-black font-display font-bold text-sm tracking-widest uppercase hover:bg-tsl-blue transition-all shadow-[0_0_25px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] group"
            >
              <span className="flex items-center space-x-2">
                <UserPlus className="w-4 h-4" />
                <span>CREATE YOUR BUILDER PROFILE</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>

            <Link
              href="/login"
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-white transition-colors"
            >
              Already building? Sign In
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
