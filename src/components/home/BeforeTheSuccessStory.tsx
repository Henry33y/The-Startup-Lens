"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const TIMELINE_STEPS = [
  { month: "JAN", title: "IDEA", status: "completed", desc: "First hypothesis documented" },
  { month: "MAR", title: "FIRST PROTOTYPE", status: "completed", desc: "Scrappy hardware test on farm" },
  { month: "JUN", title: "FIRST USERS", status: "completed", desc: "10 pilot solar installations" },
  { month: "SEP", title: "MVP", status: "completed", desc: "First recurring payment collected" },
  { month: "NOW", title: "BUILDING...", status: "active", desc: "Scaling across Ashanti region" },
];

export default function BeforeTheSuccessStory() {
  return (
    <section className="pt-24 sm:pt-32 lg:pt-40 pb-20 sm:pb-28 bg-tsl-black relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 space-y-4 md:space-y-0">
          <div className="max-w-2xl space-y-3">
            <div className="flex items-center space-x-3 mb-1">
              <span className="w-8 h-[1px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                THE PROCESS
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">
              BEFORE THE SUCCESS STORY.
            </h2>
            <p className="text-tsl-white-soft/80 text-lg sm:text-xl font-sans font-light">
              Follow the process, not just the outcome.
            </p>
          </div>

          <Link
            href="/builders/kwame-mensah"
            className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-tsl-blue hover:text-tsl-white transition-colors group"
          >
            <span>VIEW BUILDER JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Open, Unboxed Visual Timeline */}
        <div className="relative pt-6 sm:pt-8">
          {/* Subtle Horizontal Hairline Rule connecting steps across desktop */}
          <div className="hidden lg:block absolute top-[19px] left-4 right-4 h-[1px] bg-tsl-dark-grey/60 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = step.status === "active";

              return (
                <motion.div
                  key={step.month}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="space-y-3 flex flex-col items-start"
                >
                  {/* Step Node Marker */}
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                        isActive
                          ? "bg-tsl-blue border-tsl-blue shadow-[0_0_12px_#00D4FF]"
                          : "bg-tsl-black border-tsl-blue/60"
                      }`}
                    >
                      {isActive ? (
                        <span className="w-1.5 h-1.5 rounded-full bg-tsl-black animate-ping" />
                      ) : (
                        <span className="w-1 h-1 rounded-full bg-tsl-blue" />
                      )}
                    </div>

                    <span className="text-xs font-mono text-tsl-grey tracking-widest uppercase">
                      {step.month}
                    </span>
                  </div>

                  {/* Title */}
                  <div
                    className={`font-display text-lg sm:text-xl font-bold uppercase tracking-tight ${
                      isActive ? "text-tsl-blue" : "text-tsl-white"
                    }`}
                  >
                    {step.title}
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-tsl-grey font-sans leading-relaxed max-w-[220px]">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Hairline Editorial Attribution */}
          <div className="mt-14 pt-6 border-t border-tsl-dark-grey/40 text-[11px] font-mono text-tsl-grey">
            FEATURING KWAME MENSAH • KUBESOLAR BUILD JOURNEY (ACCRA, GHANA)
          </div>
        </div>
      </div>
    </section>
  );
}
