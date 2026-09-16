"use client";

import { motion } from "framer-motion";
import { Film, UserCheck, Compass, MessageSquareCode, Globe2 } from "lucide-react";

const PLATFORM_AREAS = [
  {
    layer: "01",
    name: "MEDIA",
    icon: Film,
    headline: "Stories, founder stories, podcasts, short-form video, and Founder Diaries.",
    details: "Deep editorial reporting and unfiltered audio dispatches capturing the build process in founder voices.",
  },
  {
    layer: "02",
    name: "BUILDERS",
    icon: UserCheck,
    headline: "Profiles, identities, startups, and progress journeys.",
    details: "Living founder identities, active projects, and chronological progress logs that document milestones over time.",
  },
  {
    layer: "03",
    name: "DISCOVERY",
    icon: Compass,
    headline: "A way to discover builders, startups, and emerging ideas.",
    details: "A structured discovery radar making early-stage innovation easy to search, filter, and explore across markets.",
  },
  {
    layer: "04",
    name: "COMMUNITY",
    icon: MessageSquareCode,
    headline: "Following, conversations, reactions, and participation.",
    details: "Direct connection spaces where founders interact with peers, supporters, operators, and early contributors.",
  },
  {
    layer: "05",
    name: "ECOSYSTEM",
    icon: Globe2,
    headline: "A broader view of who is building what across Africa.",
    details: "Real-time ecosystem visibility that maps continental startup momentum, regional clusters, and emerging trends.",
  },
];

export default function PlatformVision() {
  return (
    <section className="py-20 sm:py-28 lg:py-32 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-14 sm:mb-20 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              07 / WHAT WE&apos;RE BUILDING
            </span>
          </div>

          <h2 className="heading-section text-tsl-white leading-tight">
            WE&apos;RE NOT JUST PUBLISHING CONTENT. <br />
            <span className="text-tsl-blue">
              WE&apos;RE BUILDING A WAY TO SEE AN ECOSYSTEM IN MOTION.
            </span>
          </h2>

          <p className="text-tsl-white-soft/80 text-base sm:text-lg font-sans font-light max-w-2xl leading-relaxed">
            The platform connects editorial storytelling with builder identity, discovery tools, and ecosystem intelligence across five core areas.
          </p>
        </div>

        {/* 5 Layered Areas */}
        <div className="space-y-3 sm:space-y-4">
          {PLATFORM_AREAS.map((area, idx) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={area.layer}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="p-6 sm:p-7 bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/50 transition-colors grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-center group"
              >
                {/* Area Tag & Name */}
                <div className="md:col-span-3 flex items-center space-x-3">
                  <span className="font-mono text-xs font-bold text-tsl-blue tracking-widest">
                    AREA {area.layer}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-tsl-grey group-hover:text-tsl-blue transition-colors" />
                    <span className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                      {area.name}
                    </span>
                  </div>
                </div>

                {/* Headline (Middle) */}
                <div className="md:col-span-5">
                  <p className="font-display text-xs sm:text-sm font-semibold uppercase tracking-wide text-tsl-white-soft">
                    {area.headline}
                  </p>
                </div>

                {/* Details (Right) */}
                <div className="md:col-span-4">
                  <p className="text-xs sm:text-sm text-tsl-grey font-sans leading-relaxed">
                    {area.details}
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
