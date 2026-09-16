"use client";

import { motion } from "framer-motion";
import { Sparkles, Activity, ShieldAlert, Zap } from "lucide-react";

const PRINCIPLES = [
  {
    icon: Activity,
    title: "RAW PROGRESS",
    contrast: "NOT A HIGHLIGHT REEL → A RECORD OF THE JOURNEY",
    description:
      "We care about the journey, not only the polished outcome. Real innovation happens through iterations, pivots, and quiet persistence.",
  },
  {
    icon: Sparkles,
    title: "BETTER SIGNAL",
    contrast: "NOT MORE NOISE → BETTER SIGNAL",
    description:
      "We want people to discover meaningful builders and ideas rather than simply consume more content. We focus on depth over churn.",
  },
  {
    icon: ShieldAlert,
    title: "BUILDER-FIRST",
    contrast: "NOT PASSIVE AUDIENCE → COMMUNITY WITH IDENTITY",
    description:
      "The people building matter as much as the products they are building. We elevate founder identity, technical context, and lived experience.",
  },
  {
    icon: Zap,
    title: "EARLY VISIBILITY",
    contrast: "NOT WAITING FOR HEADLINES → LOOKING BEFORE THEY HAPPEN",
    description:
      "We want to find promising builders before everyone already knows their names, when visibility, connection, and belief create the greatest leverage.",
  },
];

export default function WhatMakesUsDifferent() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              06 / WHAT MAKES US DIFFERENT
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            FOUR CORE DISTINCTIONS.
          </h2>
          <p className="text-tsl-white-soft/80 text-base sm:text-lg font-sans font-light">
            How our philosophy translates into practical, day-to-day focus.
          </p>
        </div>

        {/* 4 Distinctions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {PRINCIPLES.map((principle, idx) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 bg-tsl-black border border-tsl-dark-grey hover:border-tsl-blue/40 transition-colors flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <Icon className="w-4 h-4 text-tsl-blue" />
                      <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                        {principle.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-tsl-grey">0{idx + 1}</span>
                  </div>

                  <div className="inline-block px-3 py-1 bg-tsl-surface text-[11px] font-mono text-tsl-blue uppercase tracking-wider border border-tsl-dark-grey/60">
                    {principle.contrast}
                  </div>

                  <p className="text-sm text-tsl-grey font-sans leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
