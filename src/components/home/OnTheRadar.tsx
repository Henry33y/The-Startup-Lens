"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowUpRight, TrendingUp } from "lucide-react";
import { DEMO_BUILDERS } from "@/data/demo/builders";
import { DEMO_STARTUPS } from "@/data/demo/startups";

export default function OnTheRadar() {
  const [activeTab, setActiveTab] = useState<"builders" | "startups">("builders");

  const previewBuilders = DEMO_BUILDERS.slice(0, 3);
  const previewStartups = DEMO_STARTUPS.slice(0, 3);

  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 bg-tsl-black-soft border-y border-tsl-dark-grey/40 relative">
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

          {/* Clean Segmented Tab Switcher */}
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

        {/* Content Preview Grid: Light, Airy, Editorial, Fully Clickable Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "builders" ? (
            <motion.div
              key="builders-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {previewBuilders.map((builder) => (
                <Link
                  key={builder.id}
                  href={`/builders/${builder.username}`}
                  className="group relative p-6 sm:p-7 bg-tsl-surface/60 hover:bg-tsl-surface/90 border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Avatar + Stage/Location + Hover Arrow */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative w-14 h-14 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                        <Image
                          src={builder.avatarUrl}
                          alt={builder.displayName}
                          fill
                          className="object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col items-end space-y-1">
                          <span className="px-2 py-0.5 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                            {builder.stage.toUpperCase()}
                          </span>
                          <span className="flex items-center space-x-1 text-[11px] text-tsl-grey font-mono">
                            <MapPin className="w-3 h-3 text-tsl-blue" />
                            <span>{builder.city}, {builder.country}</span>
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-tsl-grey group-hover:text-tsl-blue transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Builder Identity */}
                    <div className="space-y-1 mb-3">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                        {builder.displayName}
                      </h3>
                      <div className="text-xs font-mono text-tsl-grey">
                        {builder.role} @ <span className="text-tsl-white-soft">{builder.startupName}</span>
                      </div>
                    </div>

                    {/* Short Bio */}
                    <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2 leading-relaxed">
                      {builder.bio}
                    </p>
                  </div>

                  {/* Clean Editorial Footnote */}
                  <div className="pt-4 mt-6 border-t border-tsl-dark-grey/50 flex items-center justify-between text-[11px] font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
                    <span>VIEW BUILD LOGS</span>
                    <span>→</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="startups-grid"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {previewStartups.map((startup) => (
                <Link
                  key={startup.id}
                  href={`/startups/${startup.slug || startup.id}`}
                  className="group relative p-6 sm:p-7 bg-tsl-surface/60 hover:bg-tsl-surface/90 border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Logo + Stage/Location + Hover Arrow */}
                    <div className="flex items-start justify-between mb-5">
                      <div className="relative w-14 h-14 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                        <Image
                          src={startup.logoUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200"}
                          alt={startup.name}
                          fill
                          className="object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                          sizes="56px"
                        />
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex flex-col items-end space-y-1">
                          <span className="px-2 py-0.5 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                            {startup.stage.toUpperCase()}
                          </span>
                          <span className="flex items-center space-x-1 text-[11px] text-tsl-grey font-mono">
                            <MapPin className="w-3 h-3 text-tsl-blue" />
                            <span>{startup.city || "Lagos"}, {startup.country || "Nigeria"}</span>
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-tsl-grey group-hover:text-tsl-blue transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>

                    {/* Startup Identity */}
                    <div className="space-y-1 mb-3">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                        {startup.name}
                      </h3>
                      <div className="text-xs font-mono text-tsl-blue">
                        {startup.category.toUpperCase()} • SECTOR
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2 leading-relaxed">
                      {startup.tagline}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="pt-4 mt-6 border-t border-tsl-dark-grey/50 flex items-center justify-between text-[11px] font-mono text-tsl-grey">
                    {startup.metrics ? (
                      <span className="flex items-center space-x-1.5 text-tsl-blue">
                        <TrendingUp className="w-3 h-3" />
                        <span className="truncate">{startup.metrics.mrr || startup.metrics.users || "Active Pre-Seed"}</span>
                      </span>
                    ) : (
                      <span>EXPLORE VENTURE</span>
                    )}
                    <span className="group-hover:text-tsl-blue transition-colors">→</span>
                  </div>
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Curated Preview Footer Action */}
        <div className="mt-12 pt-6 border-t border-tsl-dark-grey/40 flex justify-center">
          <Link
            href={activeTab === "builders" ? "/builders" : "/startups"}
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-white transition-colors group"
          >
            <span>
              {activeTab === "builders" ? "EXPLORE FULL BUILDER DIRECTORY" : "EXPLORE FULL STARTUP INDEX"}
            </span>
            <ArrowUpRight className="w-4 h-4 text-tsl-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
