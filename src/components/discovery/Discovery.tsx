"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Sparkles, Eye, BookOpen, ArrowUpRight } from "lucide-react";

const DISCOVERY_TILES = [
  {
    title: "TRENDING BUILDERS",
    description: "Founders gaining highest engagement velocity this week across West and East Africa.",
    icon: TrendingUp,
    count: "42 Active Profiles",
    href: "/builders",
    accent: "border-tsl-blue/50",
  },
  {
    title: "NEW STARTUPS",
    description: "Freshly submitted early-stage products across AI, Fintech, HealthTech & Climate.",
    icon: Sparkles,
    count: "18 New This Week",
    href: "/startups",
    accent: "border-tsl-dark-grey",
  },
  {
    title: "UNDER THE LENS",
    description: "Deep investigative ecosystem breakdowns and technical teardowns.",
    icon: Eye,
    count: "12 Reports",
    href: "/discover",
    accent: "border-tsl-dark-grey",
  },
  {
    title: "RECENT STORIES",
    description: "Documentary-style interviews with early builders before their seed rounds.",
    icon: BookOpen,
    count: "28 Stories Published",
    href: "/stories",
    accent: "border-tsl-dark-grey",
  },
];

export default function Discovery() {
  return (
    <section className="py-24 bg-tsl-black-soft border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Title */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              DISCOVERY SURFACES
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">LOOK CLOSER.</h2>
        </div>

        {/* Tiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCOVERY_TILES.map((tile, idx) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Link
                  href={tile.href}
                  className={`surface-card group p-8 flex flex-col justify-between h-full border ${tile.accent} hover:border-tsl-blue block`}
                >
                  <div className="space-y-6">
                    <div className="w-12 h-12 bg-tsl-surface border border-tsl-dark-grey flex items-center justify-center text-tsl-blue group-hover:bg-tsl-blue group-hover:text-tsl-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                        {tile.title}
                      </h3>
                      <p className="text-tsl-grey text-sm font-sans leading-relaxed">
                        {tile.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-tsl-dark-grey/50 flex items-center justify-between text-xs font-mono text-tsl-grey">
                    <span>{tile.count}</span>
                    <ArrowUpRight className="w-4 h-4 text-tsl-blue transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
