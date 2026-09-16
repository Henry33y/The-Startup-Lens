"use client";

import { motion } from "framer-motion";
import { Users, Rocket, Milestone, Compass, HeartHandshake } from "lucide-react";

const ANCHORS = [
  {
    icon: Users,
    title: "BUILDERS",
    description: "Profiles and verified identities of the individuals turning ideas into reality across Africa.",
  },
  {
    icon: Rocket,
    title: "STARTUPS",
    description: "The ventures, hardware experiments, and software products taking shape across different markets.",
  },
  {
    icon: Milestone,
    title: "JOURNEYS",
    description: "Real-time documentation of progress, pivots, milestones, and lessons as they unfold.",
  },
  {
    icon: Compass,
    title: "DISCOVERY",
    description: "A continuous radar for identifying promising founders and ideas before mainstream recognition.",
  },
  {
    icon: HeartHandshake,
    title: "COMMUNITY",
    description: "Meaningful connection and collaboration between founders, early adopters, and ecosystem peers.",
  },
];

export default function WhatWeAre() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              02 / CORE IDENTITY
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            WHAT WE ARE.
          </h2>
        </div>

        {/* Major Editorial Proposition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16 sm:mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-snug">
              The Startup Lens is a platform for discovering, documenting, and connecting with the people building Africa&apos;s next generation of startups.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 space-y-4 text-tsl-white-soft/80 font-sans leading-relaxed text-base sm:text-lg"
          >
            <div className="p-6 bg-tsl-black-soft border-l-2 border-tsl-blue border-y border-r border-tsl-dark-grey/70">
              <p className="font-display text-lg sm:text-xl font-bold uppercase tracking-wide text-tsl-white leading-tight">
                &ldquo;We don&apos;t just cover the ecosystem. We help make it visible.&rdquo;
              </p>
            </div>
            <p className="text-sm text-tsl-grey">
              Media is one important way we tell stories, but the platform is engineered around the actual people, ventures, and progress data powering the continent.
            </p>
          </motion.div>

        </div>

        {/* 5 Structural Anchors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {ANCHORS.map((anchor, idx) => {
            const Icon = anchor.icon;
            return (
              <motion.div
                key={anchor.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/50 transition-colors flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <Icon className="w-5 h-5 text-tsl-blue group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-mono text-tsl-grey">0{idx + 1}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {anchor.title}
                  </h3>
                  <p className="text-xs text-tsl-grey font-sans leading-relaxed">
                    {anchor.description}
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
