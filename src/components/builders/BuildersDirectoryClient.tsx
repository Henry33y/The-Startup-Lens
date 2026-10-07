"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, ArrowUpRight, ShieldCheck, Filter, Users, Sparkles } from "lucide-react";
import { Builder } from "@/types";

interface BuildersDirectoryClientProps {
  initialBuilders: Builder[];
}

export default function BuildersDirectoryClient({ initialBuilders }: BuildersDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStage, setSelectedStage] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  const countries = useMemo(() => {
    const list = Array.from(new Set(initialBuilders.map((b) => b.country)));
    return ["All", ...list];
  }, [initialBuilders]);

  const stages = ["All", "Idea", "MVP", "Launched"];

  const filteredBuilders = useMemo(() => {
    return initialBuilders.filter((builder) => {
      const matchesSearch =
        searchQuery === "" ||
        builder.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.startupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        builder.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        builder.country.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStage =
        selectedStage === "All" ||
        builder.stage.toLowerCase() === selectedStage.toLowerCase();

      const matchesCountry =
        selectedCountry === "All" ||
        builder.country.toLowerCase() === selectedCountry.toLowerCase();

      return matchesSearch && matchesStage && matchesCountry;
    });
  }, [initialBuilders, searchQuery, selectedStage, selectedCountry]);

  return (
    <div className="pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-16">
        {/* Page Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              RADAR DIRECTORY // {initialBuilders.length} PROFILES DOCUMENTED
            </span>
          </div>
          <h1 className="heading-hero text-tsl-white">
            BUILDERS ON RADAR.
          </h1>
          <p className="text-tsl-white-soft text-lg sm:text-xl font-sans leading-relaxed">
            The operators, engineers, and visionaries building Africa&apos;s next generation of technological infrastructure. Follow their unpolished journeys from day zero.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="surface-card p-6 space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-tsl-grey" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by builder name, company, skill (e.g., IoT, Fintech, Python), or country..."
              className="w-full bg-tsl-surface border border-tsl-dark-grey pl-11 pr-4 py-3.5 text-sm text-tsl-white placeholder:text-tsl-grey/70 focus:outline-none focus:border-tsl-blue font-sans"
            />
          </div>

          {/* Filter Chips Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-t border-tsl-dark-grey/50">
            {/* Stage Tabs */}
            <div className="flex items-center space-x-2 flex-wrap gap-y-2">
              <span className="text-xs font-mono text-tsl-grey flex items-center space-x-1 mr-2">
                <Filter className="w-3.5 h-3.5 text-tsl-blue" />
                <span>STAGE:</span>
              </span>
              {stages.map((stage) => (
                <button
                  key={stage}
                  type="button"
                  onClick={() => setSelectedStage(stage)}
                  className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedStage === stage
                      ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold shadow-[0_0_12px_rgba(0,212,255,0.3)]"
                      : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white hover:border-tsl-grey"
                  }`}
                >
                  {stage}
                </button>
              ))}
            </div>

            {/* Country Selector */}
            <div className="flex items-center space-x-2 flex-wrap gap-y-2">
              <span className="text-xs font-mono text-tsl-grey flex items-center space-x-1 mr-1">
                <MapPin className="w-3.5 h-3.5 text-tsl-blue" />
                <span>COUNTRY:</span>
              </span>
              {countries.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCountry(c)}
                  className={`px-2.5 py-1 text-xs font-mono uppercase tracking-wider transition-all border ${
                    selectedCountry === c
                      ? "bg-tsl-white text-tsl-black border-tsl-white font-bold"
                      : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Builders Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono text-tsl-grey border-b border-tsl-dark-grey/50 pb-3">
            <span>SHOWING {filteredBuilders.length} BUILDERS</span>
            <span>UPDATED CONTINUOUSLY</span>
          </div>

          {filteredBuilders.length === 0 ? (
            <div className="text-center py-20 bg-tsl-surface/50 border border-tsl-dark-grey space-y-4">
              <Users className="w-10 h-10 text-tsl-grey mx-auto" />
              <div className="font-display text-xl font-bold uppercase text-tsl-white">
                NO BUILDERS MATCH YOUR CRITERIA
              </div>
              <p className="text-sm text-tsl-grey font-sans">
                Try loosening your filters or search keywords.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStage("All");
                  setSelectedCountry("All");
                }}
                className="px-4 py-2 bg-tsl-surface border border-tsl-blue text-tsl-blue font-mono text-xs uppercase tracking-wider hover:bg-tsl-blue hover:text-tsl-black transition-colors"
              >
                RESET ALL FILTERS
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredBuilders.map((builder, idx) => (
                  <motion.div
                    key={builder.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="surface-card group relative p-6 flex flex-col justify-between h-full border border-tsl-dark-grey hover:border-tsl-blue/80 transition-all duration-300"
                  >
                    <div>
                      {/* Avatar & Location Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="relative w-16 h-16 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                          <Image
                            src={builder.avatarUrl}
                            alt={builder.displayName}
                            fill
                            className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                            sizes="64px"
                          />
                        </div>

                        <div className="flex flex-col items-end space-y-1.5">
                          <span
                            className={`px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold border ${
                              builder.stage.toLowerCase() === "launched"
                                ? "bg-tsl-blue/20 text-tsl-blue border-tsl-blue"
                                : builder.stage.toLowerCase() === "mvp"
                                ? "bg-tsl-white/10 text-tsl-white border-tsl-white-soft"
                                : "bg-tsl-dark-grey/50 text-tsl-grey border-tsl-dark-grey"
                            }`}
                          >
                            STAGE: {builder.stage.toUpperCase()}
                          </span>
                          <span className="flex items-center space-x-1 text-[11px] text-tsl-grey font-mono">
                            <MapPin className="w-3 h-3 text-tsl-blue" />
                            <span>
                              {builder.city ? `${builder.city}, ` : ""}
                              {builder.country}
                            </span>
                          </span>
                        </div>
                      </div>

                      {/* Name & Bio */}
                      <div className="space-y-3 mb-6">
                        <div>
                          <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors flex items-center space-x-2">
                            <span>{builder.displayName}</span>
                            {builder.featured && (
                              <ShieldCheck className="w-4 h-4 text-tsl-blue inline" />
                            )}
                          </h3>
                          <div className="text-xs font-mono text-tsl-grey mt-0.5">
                            {builder.role} @{" "}
                            <span className="text-tsl-white-soft font-semibold">
                              {builder.startupName}
                            </span>
                          </div>
                        </div>

                        <p className="text-tsl-white-soft/80 text-sm font-sans leading-relaxed line-clamp-3">
                          {builder.bio}
                        </p>
                      </div>
                    </div>

                    {/* Skill Tags & Action */}
                    <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-4">
                      <div className="flex flex-wrap gap-1.5">
                        {builder.skills.map((skill) => (
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
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Claim Profile Banner */}
        <div className="surface-card p-8 sm:p-12 border border-tsl-dark-grey relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-xs font-mono text-tsl-blue uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5" />
              <span>BUILD IN PUBLIC // AFRICA</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white">
              ARE YOU BUILDING SOMETHING IN AFRICA?
            </h2>
            <p className="text-sm text-tsl-grey font-sans">
              Create your verified builder profile, publish your milestones in real-time, and get discovered by angels, talent, and early adopters.
            </p>
          </div>

          <Link
            href="/signup"
            className="shrink-0 px-8 py-4 bg-tsl-white text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-blue transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            CLAIM YOUR BUILDER PROFILE
          </Link>
        </div>
      </div>
    </div>
  );
}
