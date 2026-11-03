"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ArrowRight, Sparkles, Volume2 } from "lucide-react";
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
  const [, setIsHovered] = useState(false);

  // Stage configuration
  const stageConfig =
    JOURNEY_STAGES.find((s) => s.stage === startup.stage) || JOURNEY_STAGES[0];

  // Stage badge color styles for light mode
  const getStageBadgeStyle = (stage: string) => {
    switch (stage) {
      case "Just Getting Started":
        return "bg-amber-50 text-amber-800 border-amber-200/80";
      case "Testing with Real People":
        return "bg-sky-50 text-sky-800 border-sky-200/80";
      case "Live & Open to Everyone":
        return "bg-emerald-50 text-emerald-800 border-emerald-200/80";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between rounded-2xl bg-white hover:bg-slate-50/50 border border-slate-200/90 hover:border-[#0284C7]/50 transition-all duration-300 shadow-xs hover:shadow-md overflow-hidden p-6 sm:p-7"
    >
      {/* Top Subtle Sky Glow on Hover */}
      <div className="absolute top-0 right-0 w-64 h-32 bg-[#0284C7]/[0.02] group-hover:bg-[#0284C7]/[0.05] blur-2xl pointer-events-none transition-colors duration-500" />

      <div className="space-y-6 relative z-10">
        
        {/* 1. TOP RAIL: Country Flag + City Tag & Stage Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          {/* Location & Category Tag */}
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-500">
            <span className="text-base leading-none">{startup.countryFlag}</span>
            <span className="font-semibold text-slate-800">
              {startup.city}, {startup.country}
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-500 uppercase tracking-wider text-[11px]">
              {startup.category}
            </span>
          </div>

          {/* Stage Badge with colored status dot */}
          <div
            className={`inline-flex items-center space-x-2 px-2.5 py-1 rounded-full border text-[11px] font-mono tracking-wider uppercase ${getStageBadgeStyle(
              startup.stage
            )}`}
          >
            <span className={`w-2 h-2 rounded-full ${stageConfig.dotClass}`} />
            <span>{startup.stage}</span>
          </div>
        </div>

        {/* 2. TITLE & RELATABLE PROMISE */}
        <div className="space-y-2.5">
          <div className="flex items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 group-hover:text-[#0284C7] transition-colors duration-200">
              {startup.name}
            </h2>
            <div className="hidden sm:inline-flex items-center space-x-1 font-mono text-[10px] text-slate-400 uppercase tracking-wider">
              <Volume2 className="w-3 h-3 text-[#0284C7]" />
              <span>Voice Note Available</span>
            </div>
          </div>

          <p className="text-slate-700 font-sans text-base sm:text-lg font-medium leading-snug italic">
            &ldquo;{startup.oneLiner}&rdquo;
          </p>
        </div>

        {/* 3. THE EVERYDAY REALITY (Distinct Recessed Callout) */}
        <div className="bg-slate-50/80 hover:bg-slate-50 border border-slate-200/80 rounded-xl p-4 transition-colors space-y-1.5 shadow-2xs">
          <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-[#0284C7] font-semibold">
            <Sparkles className="w-3 h-3 text-[#0284C7]" />
            <span>THE EVERYDAY REALITY</span>
          </div>
          <p className="text-slate-600 text-sm font-sans leading-relaxed">
            {startup.everydayReality}
          </p>
        </div>

        {/* 4. FOUNDER STRIP */}
        <div className="pt-2 flex items-center justify-between border-t border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-200 shrink-0 bg-slate-100">
              <Image
                src={startup.founders[0].avatarUrl}
                alt={startup.founders[0].name}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <div className="space-y-0.5">
              <div className="text-sm font-sans font-semibold text-slate-900 flex items-center space-x-1.5">
                <span>{startup.founders[0].name}</span>
                {startup.founders.length > 1 && (
                  <span className="text-xs text-slate-400 font-normal">
                    + {startup.founders.length - 1} co-founder
                  </span>
                )}
              </div>
              <div className="text-xs font-mono text-slate-500">
                {startup.founders[0].context} • {startup.founders[0].role}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 5. COMMUNITY ACTION FOOTER */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3 relative z-10">
        
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
              ? "bg-rose-50 border-rose-200 text-rose-600 shadow-xs"
              : "bg-white hover:bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 shadow-xs"
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
          className="group/btn inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#0284C7] border border-slate-900 hover:border-[#0284C7] text-xs font-display font-bold uppercase tracking-wider text-white transition-all duration-200 cursor-pointer shadow-xs"
        >
          <span>Read Their Story</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </button>

      </div>
    </motion.div>
  );
}
