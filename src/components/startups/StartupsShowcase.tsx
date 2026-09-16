"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Globe, UserCheck } from "lucide-react";
import { DEMO_STARTUPS } from "@/data/demo/startups";
import { Category } from "@/types";

const CATEGORIES: (Category | "All")[] = [
  "All",
  "AI",
  "Fintech",
  "Health",
  "Agriculture",
  "Climate",
  "EdTech",
];

export default function StartupsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category | "All">("All");

  const filteredStartups =
    selectedCategory === "All"
      ? DEMO_STARTUPS
      : DEMO_STARTUPS.filter((s) => s.category === selectedCategory);

  return (
    <section className="pt-36 sm:pt-48 lg:pt-56 pb-24 sm:pb-32 bg-tsl-black border-y border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 space-y-6 lg:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                ECOSYSTEM INDEX
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">WHAT&apos;S BEING BUILT</h2>
            <p className="text-tsl-grey text-base font-sans mt-2">
              Filter early-stage African technological ventures by sector and execution stage.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-tsl-blue text-tsl-black border-tsl-blue font-bold shadow-[0_0_15px_rgba(0,212,255,0.3)]"
                    : "bg-tsl-surface text-tsl-grey border-tsl-dark-grey hover:text-tsl-white hover:border-tsl-grey"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredStartups.map((startup) => (
              <motion.div
                key={startup.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="surface-card group flex flex-col justify-between h-full overflow-hidden"
              >
                <div>
                  {/* Cover Header Image */}
                  <div className="relative h-44 w-full bg-tsl-surface border-b border-tsl-dark-grey overflow-hidden">
                    {startup.coverImageUrl && (
                      <Image
                        src={startup.coverImageUrl}
                        alt={startup.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[20%] group-hover:grayscale-0"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-tsl-black-soft via-tsl-black-soft/40 to-transparent" />
                    
                    {/* Category & Stage Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 bg-tsl-black/80 backdrop-blur-md border border-tsl-dark-grey text-[10px] font-mono text-tsl-blue font-semibold uppercase">
                        {startup.category}
                      </span>
                      <span
                        className={`px-2.5 py-1 text-[10px] font-mono uppercase font-bold border ${
                          startup.stage === "launched"
                            ? "bg-tsl-blue/20 text-tsl-blue border-tsl-blue"
                            : startup.stage === "mvp"
                            ? "bg-tsl-white/10 text-tsl-white border-tsl-white-soft"
                            : "bg-tsl-dark-grey/50 text-tsl-grey border-tsl-dark-grey"
                        }`}
                      >
                        STAGE: {startup.stage.toUpperCase()}
                      </span>
                    </div>

                    {/* Logo Overlay */}
                    {startup.logoUrl && (
                      <div className="absolute bottom-3 left-4 w-12 h-12 border border-tsl-dark-grey overflow-hidden bg-tsl-surface">
                        <Image
                          src={startup.logoUrl}
                          alt={startup.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="flex items-center justify-between">
                        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                          {startup.name}
                        </h3>
                        <span className="text-xs font-mono text-tsl-grey flex items-center space-x-1">
                          <Globe className="w-3 h-3 text-tsl-blue" />
                          <span>{startup.country}</span>
                        </span>
                      </div>
                      <p className="text-xs font-mono text-tsl-blue mt-1">
                        {startup.tagline}
                      </p>
                    </div>

                    <p className="text-tsl-white-soft/80 text-sm font-sans line-clamp-3 leading-relaxed">
                      {startup.description}
                    </p>

                    {/* Founders Link */}
                    <div className="pt-2 flex items-center space-x-2 text-xs text-tsl-grey font-mono">
                      <UserCheck className="w-3.5 h-3.5 text-tsl-blue" />
                      <span>FOUNDED BY: {startup.founders.map((f) => f.name).join(", ")}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <Link
                    href={`/startups/${startup.slug}`}
                    className="w-full inline-flex items-center justify-between px-4 py-3 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white group-hover:border-tsl-blue group-hover:text-tsl-blue transition-all"
                  >
                    <span>EXPLORE STARTUP PROFILE</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
