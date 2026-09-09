"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, TrendingUp, ShieldCheck, Globe } from "lucide-react";
import { DEMO_BUILDERS } from "@/data/demo/builders";
import { DEMO_STARTUPS } from "@/data/demo/startups";

export default function OnTheRadar() {
  const [activeTab, setActiveTab] = useState<"builders" | "startups">("builders");

  const previewBuilders = DEMO_BUILDERS.slice(0, 3);
  const previewStartups = DEMO_STARTUPS.slice(0, 3);

  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 bg-tsl-black-soft border-y border-tsl-dark-grey/40 relative">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header with Title & Tab Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 space-y-6 md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                ON THE RADAR
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">
              BUILDERS &amp; STARTUPS WORTH WATCHING
            </h2>
          </div>

          {/* Simple Toggle Switcher */}
          <div className="flex items-center bg-tsl-black border border-tsl-dark-grey p-1">
            <button
              type="button"
              onClick={() => setActiveTab("builders")}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "builders"
                  ? "bg-tsl-blue text-tsl-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                  : "text-tsl-grey hover:text-tsl-white"
              }`}
            >
              BUILDERS ({DEMO_BUILDERS.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("startups")}
              className={`px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all ${
                activeTab === "startups"
                  ? "bg-tsl-blue text-tsl-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                  : "text-tsl-grey hover:text-tsl-white"
              }`}
            >
              STARTUPS ({DEMO_STARTUPS.length})
            </button>
          </div>
        </div>

        {/* Content Preview Grid */}
        <AnimatePresence mode="wait">
          {activeTab === "builders" ? (
            <motion.div
              key="builders-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {previewBuilders.map((builder) => (
                <div
                  key={builder.id}
                  className="surface-card group relative p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Header Metadata */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative w-14 h-14 rounded-none overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                        <Image
                          src={builder.avatarUrl}
                          alt={builder.displayName}
                          fill
                          className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex flex-col items-end space-y-1.5">
                        <span className="px-2.5 py-0.5 bg-tsl-surface border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                          STAGE: {builder.stage.toUpperCase()}
                        </span>
                        <span className="flex items-center space-x-1 text-[11px] text-tsl-grey font-mono">
                          <MapPin className="w-3 h-3 text-tsl-blue" />
                          <span>{builder.city}, {builder.country}</span>
                        </span>
                      </div>
                    </div>

                    {/* Builder Identity */}
                    <div className="space-y-1 mb-4">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                        {builder.displayName}
                      </h3>
                      <div className="text-xs font-mono text-tsl-grey">
                        {builder.role} @ <span className="text-tsl-white-soft">{builder.startupName}</span>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2 leading-relaxed mb-6">
                      {builder.bio}
                    </p>
                  </div>

                  {/* Footer Skill Tags & Action */}
                  <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-4">
                    <div className="flex flex-wrap gap-1.5">
                      {builder.skills.slice(0, 3).map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 bg-tsl-black text-[10px] font-mono text-tsl-grey border border-tsl-dark-grey/50"
                        >
                          #{skill}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/builders/${builder.username}`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white group-hover:border-tsl-blue group-hover:text-tsl-blue transition-all"
                    >
                      <span>VIEW BUILDER PROFILE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="startups-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {previewStartups.map((startup) => (
                <div
                  key={startup.id}
                  className="surface-card group relative p-6 flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Header Metadata */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="relative w-14 h-14 rounded-none overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                        <Image
                          src={startup.logoUrl}
                          alt={startup.name}
                          fill
                          className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex flex-col items-end space-y-1.5">
                        <span className="px-2.5 py-0.5 bg-tsl-surface border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                          {startup.stage.toUpperCase()}
                        </span>
                        <span className="flex items-center space-x-1 text-[11px] text-tsl-grey font-mono">
                          <MapPin className="w-3 h-3 text-tsl-blue" />
                          <span>
                            {startup.city || "Lagos"}, {startup.country || "Nigeria"}
                          </span>
                        </span>
                      </div>
                    </div>

                    {/* Startup Identity */}
                    <div className="space-y-1 mb-4">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                        {startup.name}
                      </h3>
                      <div className="text-xs font-mono text-tsl-blue">
                        {startup.category.toUpperCase()} • SECTOR
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2 leading-relaxed mb-6">
                      {startup.tagline}
                    </p>
                  </div>

                  {/* Footer Metrics & Action */}
                  <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-4">
                    {startup.metrics && (
                      <div className="flex items-center space-x-2 text-[11px] font-mono text-tsl-grey bg-tsl-black/60 px-2.5 py-1 border border-tsl-dark-grey/40">
                        <TrendingUp className="w-3 h-3 text-tsl-blue" />
                        <span className="truncate">
                          {startup.metrics.mrr || startup.metrics.users || "Active Pre-Seed Phase"}
                        </span>
                      </div>
                    )}

                    <Link
                      href={`/startups/${startup.slug || startup.id}`}
                      className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white group-hover:border-tsl-blue group-hover:text-tsl-blue transition-all"
                    >
                      <span>EXPLORE STARTUP</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Curated Preview Footer Action */}
        <div className="mt-10 pt-6 border-t border-tsl-dark-grey/40 flex justify-center">
          <Link
            href={activeTab === "builders" ? "/builders" : "/startups"}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-white transition-colors"
          >
            <span>
              {activeTab === "builders" ? "EXPLORE FULL BUILDER DIRECTORY" : "EXPLORE FULL STARTUP INDEX"}
            </span>
            <ArrowUpRight className="w-4 h-4 text-tsl-blue" />
          </Link>
        </div>
      </div>
    </section>
  );
}
