"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ArrowRight, MapPin, Sparkles, Volume2 } from "lucide-react";
import { StoryStartup, JOURNEY_STAGES } from "@/data/startupsStoryData";

interface StoryCardProps {
  startup: StoryStartup;
  onOpenDrawer: (startup: StoryStartup) => void;
  onCheer: (startupId: string) => void;
  isCheered: boolean;
  cheersCount: number;
}

export default function StoryCard({
  startup,
  onOpenDrawer,
  onCheer,
  isCheered,
  cheersCount,
}: StoryCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Stage configuration
  const stageConfig =
    JOURNEY_STAGES.find((s) => s.stage === startup.stage) || JOURNEY_STAGES[0];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-2xl bg-[#0D0F15] hover:bg-[#12151F] border border-white/[0.07] hover:border-[#00D4FF]/40 transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.8),0_0_30px_rgba(0,212,255,0.08)] overflow-hidden p-6 sm:p-7"
    >
      {/* Top Subtle Cyan Glow on Hover */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-[#00D4FF]/[0.03] group-hover:bg-[#00D4FF]/[0.08] blur-3xl pointer-events-none transition-colors duration-500" />

      <div className="space-y-6 relative z-10">
        
        {/* 1. TOP RAIL: Country Flag + City Tag & Stage Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Location & Category Tag */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-400">
            <span className="text-base leading-none">{startup.countryFlag}</span>
            <span className="font-semibold text-slate-300">
              {startup.city}, {startup.country}
            </span>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400 uppercase tracking-wider text-[11px]">
              {startup.category}
            </span>
          </div>

          {/* Stage Badge with colored status dot */}
          <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono tracking-wider uppercase text-slate-300">
            <span className={`w-2 h-2 rounded-full ${stageConfig.dotClass}`} />
            <span>{startup.stage}</span>
          </div>
        </div>

        {/* 2. TITLE & RELATABLE PROMISE */}
        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 group-hover:text-[#00D4FF] transition-colors duration-200">
              {startup.name}
            </h2>
            <div className="hidden sm:inline-flex items-center space-x-1 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
              <Volume2 className="w-3 h-3 text-[#00D4FF]" />
              <span>Voice Note Available</span>
            </div>
          </div>

          <p className="text-slate-200 font-sans text-base sm:text-lg font-medium leading-snug italic">
            &ldquo;{startup.oneLiner}&rdquo;
          </p>
        </div>

        {/* 3. THE EVERYDAY REALITY (Distinct Recessed Callout) */}
        <div className="bg-white/[0.025] hover:bg-white/[0.035] border border-white/[0.06] rounded-xl p-4 transition-colors space-y-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.03)]">
          <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-[#00D4FF]/90 font-semibold">
            <Sparkles className="w-3 h-3 text-[#00D4FF]" />
            <span>THE EVERYDAY REALITY</span>
          </div>
          <p className="text-slate-300 text-sm font-sans leading-relaxed">
            {startup.everydayReality}
          </p>
        </div>

        {/* 4. FOUNDER STRIP */}
        <div className="pt-2 flex items-center justify-between border-t border-white/[0.06]">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-800">
              <Image
                src={startup.founders[0].avatarUrl}
                alt={startup.founders[0].name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-sans font-semibold text-slate-200 flex items-center space-x-1.5">
                <span>{startup.founders[0].name}</span>
                {startup.founders.length > 1 && (
                  <span className="text-xs text-slate-500 font-normal">
                    + {startup.founders.length - 1} co-founder
                  </span>
                )}
              </div>
              <div className="text-xs font-mono text-slate-400">
                {startup.founders[0].context} • {startup.founders[0].role}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 5. COMMUNITY ACTION FOOTER */}
      <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3 relative z-10">
        
        {/* Interactive Heart / Cheer Button */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.92 }}
          onClick={(e) => {
            e.stopPropagation();
            onCheer(startup.id);
          }}
          className={`inline-flex items-center space-x-2 px-3.5 py-2 rounded-xl border text-xs font-mono uppercase tracking-wider transition-all duration-200 cursor-pointer ${
            isCheered
              ? "bg-rose-500/10 border-rose-500/40 text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.2)]"
              : "bg-white/[0.03] hover:bg-white/[0.06] border-white/[0.08] text-slate-400 hover:text-slate-200"
          }`}
          aria-label={`Cheer for ${startup.name}`}
        >
          <motion.div
            animate={isCheered ? { scale: [1, 1.35, 1] } : {}}
            transition={{ duration: 0.3 }}
          >
            <Heart
              className={`w-3.5 h-3.5 ${
                isCheered ? "fill-rose-500 text-rose-500" : "text-slate-400"
              }`}
            />
          </motion.div>
          <span>
            {cheersCount}{" "}
            <span className="hidden sm:inline">
              {isCheered ? "Cheered On!" : "Cheering On"}
            </span>
          </span>
        </motion.button>

        {/* Read Their Story CTA */}
        <button
          type="button"
          onClick={() => onOpenDrawer(startup)}
          className="group/btn inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-[#00D4FF] border border-white/[0.1] hover:border-[#00D4FF] text-xs font-display font-bold uppercase tracking-wider text-slate-200 hover:text-black transition-all duration-300 cursor-pointer shadow-sm hover:shadow-[0_0_20px_rgba(0,212,255,0.4)]"
        >
          <span>Read Their Story</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
        </button>

      </div>
    </motion.div>
  );
}

