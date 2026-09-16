"use client";

import { motion } from "framer-motion";
import { Search, FileText, Users, Radio } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    title: "DISCOVER",
    icon: Search,
    summary: "Find builders, startups, ideas and stories worth paying attention to.",
    detail: "We identify emerging builders and early-stage ventures before they become obvious or mainstream.",
  },
  {
    number: "02",
    title: "DOCUMENT",
    icon: FileText,
    summary: "Capture the real journey: progress, setbacks, milestones and lessons.",
    detail: "We record authentic build processes as they happen through editorial pieces, progress logs, and founder audio dispatches.",
  },
  {
    number: "03",
    title: "CONNECT",
    icon: Users,
    summary: "Help builders, audiences, collaborators and ecosystem participants find one another.",
    detail: "We bridge the gap between founders, early supporters, engineers, and contributors across African tech hubs.",
  },
  {
    number: "04",
    title: "AMPLIFY",
    icon: Radio,
    summary: "Give promising builders and startups greater visibility.",
    detail: "We direct attention to high-conviction ideas, elevating African builder perspectives across the continent and beyond.",
  },
];

export default function HowWeDoIt() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              05 / HOW WE OPERATE
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            HOW WE DO IT.
          </h2>
          <p className="text-tsl-white-soft/80 text-base sm:text-lg font-sans font-light">
            Four interconnected practices designed to turn early-stage execution into enduring visibility.
          </p>
        </div>

        {/* 4 Pillars Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-8 bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-tsl-dark-grey/60 group-hover:border-tsl-blue/30 transition-colors">
                    <span className="font-mono text-xs font-bold text-tsl-blue tracking-widest">
                      {pillar.number} / 04
                    </span>
                    <Icon className="w-4 h-4 text-tsl-grey group-hover:text-tsl-blue transition-colors" />
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="font-display text-base font-semibold uppercase tracking-wide text-tsl-white-soft leading-snug">
                    {pillar.summary}
                  </p>

                  <p className="text-sm text-tsl-grey font-sans leading-relaxed">
                    {pillar.detail}
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
