"use client";

import { motion } from "framer-motion";
import { XCircle } from "lucide-react";

const NOT_ITEMS = [
  {
    number: "01",
    title: "WE'RE NOT A MEDIA TEAM.",
    description: "We don't exist simply to produce articles, interviews, and videos about startups for the sake of publishing content.",
  },
  {
    number: "02",
    title: "WE'RE NOT A NEWS OUTLET.",
    description: "We're not here only when something becomes officially newsworthy or raises a massive venture round.",
  },
  {
    number: "03",
    title: "WE'RE NOT A HIGHLIGHT REEL.",
    description: "Success isn't where the story begins. We document the messy, iterative, and unpolished work that happens before the headlines.",
  },
  {
    number: "04",
    title: "WE'RE NOT ANOTHER SOCIAL FEED.",
    description: "We're not interested in adding more algorithmic noise or speculative chatter to the internet. We prioritize genuine signal.",
  },
];

export default function WhatWereNot() {
  return (
    <section className="py-20 sm:py-24 lg:py-28 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-grey" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-grey">
              01 / BOUNDARIES &amp; INTENT
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            WHAT WE&apos;RE NOT.
          </h2>
          <p className="text-tsl-grey text-base sm:text-lg font-sans font-light">
            To understand what The Startup Lens is building, it helps to understand what we deliberately choose not to be.
          </p>
        </div>

        {/* 4 Clean Editorial Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {NOT_ITEMS.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="p-6 sm:p-8 bg-tsl-surface/40 border border-tsl-dark-grey/80 flex flex-col justify-between space-y-4 group hover:border-tsl-grey/60 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-tsl-grey tracking-widest">
                  NOT {item.number}
                </span>
                <XCircle className="w-4 h-4 text-tsl-grey/60 group-hover:text-tsl-white transition-colors" />
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-tsl-white-soft">
                  {item.title}
                </h3>
                <p className="text-sm text-tsl-grey font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
