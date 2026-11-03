"use client";

import { motion } from "framer-motion";
import { Sparkles, Compass, HeartHandshake, MapPin } from "lucide-react";

export default function StartupsHeader() {
  return (
    <div className="relative pt-32 sm:pt-40 lg:pt-48 pb-12 sm:pb-16 overflow-hidden">
      {/* Ambient Radial Glow Vignettes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.07),transparent_70%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(56,189,248,0.03),transparent_60%)] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Monospace Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-[#00D4FF] font-mono text-[11px] sm:text-xs tracking-wider uppercase shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#00D4FF] animate-pulse" />
            <span>CONTINENTAL STARTUP INDEX • 140+ TEAMS DOCUMENTED</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-100 leading-[1.05]"
          >
            The Ideas Shaping <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-slate-200 to-[#00D4FF]">
              Africa’s Everyday Life.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 font-sans font-light max-w-2xl mx-auto leading-relaxed"
          >
            Forget corporate press releases and pitch decks. Discover the relatable problems African founders are tackling, the reality on the ground, and how you can support them.
          </motion.p>

          {/* Editorial Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs font-mono uppercase tracking-wider text-slate-400"
          >
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <MapPin className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>Accra • Lagos • Nairobi • Tunis • Kigali</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <Compass className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Real Human Grit</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.05]">
              <HeartHandshake className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Direct Community Support</span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

