"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Milestone, Rocket, Flame, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { DEMO_JOURNEYS } from "@/data/demo/journeys";

export default function BuilderJourney() {
  return (
    <section className="py-24 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              SIGNATURE FEATURE
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            SUCCESS ISN&apos;T THE STARTING POINT.
          </h2>
          <p className="text-tsl-grey text-base sm:text-lg font-sans">
            Every breakthrough is preceded by months of quiet execution. Follow the living timeline of Kwame Mensah building KubeSolar.
          </p>
        </div>

        {/* Interactive Visual Timeline Grid */}
        <div className="relative border-l-2 border-tsl-dark-grey/80 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12 my-8">
          {/* Animated Blue Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[-2px] w-[2px] bg-gradient-to-b from-tsl-blue via-tsl-blue/50 to-transparent pointer-events-none" />

          {DEMO_JOURNEYS.map((entry, idx) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Point Marker */}
              <div className="absolute top-1 -left-[31px] sm:-left-[55px] w-6 h-6 rounded-full bg-tsl-black border-2 border-tsl-blue flex items-center justify-center group-hover:scale-125 transition-transform shadow-[0_0_10px_#00D4FF]">
                <div className="w-2 h-2 rounded-full bg-tsl-blue" />
              </div>

              {/* Timeline Card */}
              <div className="surface-card p-6 sm:p-8 space-y-3 max-w-3xl">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono font-bold text-tsl-blue uppercase tracking-wider">
                    {entry.date}
                  </span>
                  <span className="text-xs font-mono text-tsl-grey uppercase">
                    TYPE: {entry.type.toUpperCase()}
                  </span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                  {entry.title}
                </h3>

                <p className="text-tsl-white-soft/80 text-sm sm:text-base font-sans leading-relaxed">
                  {entry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline Bottom CTA */}
        <div className="pt-12 text-center flex flex-col items-center">
          <p className="text-sm font-mono text-tsl-grey mb-4">
            WANT YOUR BUILDER JOURNEY DOCUMENTED IN REAL-TIME?
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-tsl-white text-tsl-black font-display font-bold text-xs tracking-widest uppercase hover:bg-tsl-blue transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <span>START DOCUMENTING YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
