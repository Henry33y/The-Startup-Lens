"use client";

import { motion } from "framer-motion";
import { Compass, HeartHandshake, MapPin } from "lucide-react";

export default function StartupsHeader() {
  return (
    <div className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 overflow-hidden">
      {/* Ambient Radial Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(2,132,199,0.06),transparent_70%)] pointer-events-none" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-[radial-gradient(circle,rgba(56,189,248,0.04),transparent_60%)] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]"
          >
            The Ideas Shaping <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-[#0284C7]">
              Africa’s Everyday Life.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-base sm:text-lg md:text-xl text-slate-600 font-sans font-normal max-w-2xl mx-auto leading-relaxed"
          >
            Forget corporate press releases and pitch decks. Discover the relatable problems African founders are tackling, the reality on the ground, and how you can support them.
          </motion.p>

          {/* Editorial Highlights Row */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono uppercase tracking-wider text-slate-600"
          >
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
              <span>Accra • Lagos • Nairobi • Tunis • Kigali</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-sky-600" />
              <span>Real Human Grit</span>
            </div>
            <div className="flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Community Support</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
