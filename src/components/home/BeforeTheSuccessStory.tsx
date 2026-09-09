"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";

const TIMELINE_STEPS = [
  { month: "JAN", title: "IDEA", status: "completed", desc: "First hypothesis documented" },
  { month: "MAR", title: "FIRST PROTOTYPE", status: "completed", desc: "Scrappy hardware test on farm" },
  { month: "JUN", title: "FIRST USERS", status: "completed", desc: "10 pilot solar installations" },
  { month: "SEP", title: "MVP", status: "completed", desc: "First recurring payment collected" },
  { month: "NOW", title: "BUILDING...", status: "active", desc: "Scaling across Ashanti region" },
];

export default function BeforeTheSuccessStory() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 bg-tsl-black relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
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

        {/* Compact Visual Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-tsl-black-soft border border-tsl-dark-grey p-6 sm:p-10 relative overflow-hidden"
        >
          {/* Connecting line on desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[80px] right-[80px] h-[1px] bg-gradient-to-r from-tsl-blue via-tsl-blue/60 to-tsl-blue/20 pointer-events-none" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 relative z-10">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = step.status === "active";

              return (
                <div key={step.month} className="space-y-3 flex flex-col items-start lg:items-center text-left lg:text-center">
                  {/* Step Node */}
                  <div
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      isActive
                        ? "bg-tsl-blue text-tsl-black border-tsl-blue shadow-[0_0_20px_#00D4FF]"
                        : "bg-tsl-surface border-tsl-dark-grey text-tsl-blue"
                    }`}
                  >
                    {isActive ? (
                      <span className="w-2.5 h-2.5 rounded-full bg-tsl-black animate-ping" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4 text-tsl-blue" />
                    )}
                  </div>

                  {/* Month & Title */}
                  <div>
                    <div className="text-[11px] font-mono text-tsl-grey uppercase tracking-widest">
                      {step.month}
                    </div>
                    <div
                      className={`font-display text-base font-bold uppercase tracking-tight ${
                        isActive ? "text-tsl-blue" : "text-tsl-white"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>

                  {/* Concise Description */}
                  <p className="text-xs text-tsl-grey font-sans max-w-[180px]">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Footer */}
          <div className="mt-10 pt-6 border-t border-tsl-dark-grey/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-tsl-grey">
              FEATURING KWAME MENSAH • KUBESOLAR BUILD TIMELINE
            </div>

            <Link
              href="/builders/kwame-mensah"
              className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-tsl-blue hover:text-tsl-white transition-colors"
            >
              <span>VIEW BUILDER JOURNEY</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
