"use client";

import { motion } from "framer-motion";
import { Search, FileText, Share2, Radio } from "lucide-react";

const ACTIONS = [
  {
    number: "01",
    title: "DISCOVER",
    icon: Search,
    summary: "Find builders, startups, ideas and stories worth paying attention to.",
    detail:
      "We scout early signals across tech hubs before they are widely known. From obscure GitHub repos to field trials on agricultural cooperatives, we unearth people solving foundational problems.",
  },
  {
    number: "02",
    title: "DOCUMENT",
    icon: FileText,
    summary: "Capture the actual journey, progress, setbacks, milestones and lessons.",
    detail:
      "Through written essays, audio founder drops, progress timelines, and living builder profiles, we record authentic startup development as it unfolds in real time.",
  },
  {
    number: "03",
    title: "CONNECT",
    icon: Share2,
    summary: "Help builders, audiences and ecosystem participants find one another.",
    detail:
      "We create direct pathways between founders, angel operators, engineers, and early supporters without algorithmic noise or paywalled barriers.",
  },
  {
    number: "04",
    title: "AMPLIFY",
    icon: Radio,
    summary: "Give visibility to people and ideas that deserve to be seen.",
    detail:
      "We elevate African builder perspectives to regional and global attention, creating a lasting digital record of continental technological ambition.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36 lg:pb-44 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              04 / WHAT WE DO
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            FOUR WAYS WE OPERATE.
          </h2>
          <p className="text-tsl-white-soft/80 text-lg sm:text-xl font-sans font-light">
            A deliberate editorial and discovery framework designed for early-stage momentum.
          </p>
        </div>

        {/* 4 Pillars Editorial Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-16 sm:gap-y-20">
          {ACTIONS.map((action, idx) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="space-y-6 group"
              >
                {/* Top Index & Icon Row */}
                <div className="flex items-center justify-between pb-4 border-b border-tsl-dark-grey/60 group-hover:border-tsl-blue/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-sm font-bold text-tsl-blue tracking-widest">
                      {action.number}
                    </span>
                    <span className="text-xs font-mono text-tsl-grey uppercase tracking-widest">
                      FUNCTION
                    </span>
                  </div>
                  <Icon className="w-4 h-4 text-tsl-grey group-hover:text-tsl-blue transition-colors" />
                </div>

                {/* Title */}
                <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                  {action.title}
                </h3>

                {/* Summary */}
                <p className="font-display text-base sm:text-lg font-semibold uppercase tracking-wide text-tsl-white-soft/90 leading-snug">
                  {action.summary}
                </p>

                {/* Detail */}
                <p className="text-sm text-tsl-grey font-sans leading-relaxed">
                  {action.detail}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
