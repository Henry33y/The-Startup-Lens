"use client";

import { motion } from "framer-motion";
import { ArrowDown, Eye } from "lucide-react";

const MANIFESTO_PAIRS = [
  {
    index: "01",
    notText: "NOT A HIGHLIGHT REEL.",
    areText: "A RECORD OF THE JOURNEY.",
    accent: "RECORD",
  },
  {
    index: "02",
    notText: "NOT JUST SUCCESS STORIES.",
    areText: "BUILDER STORIES.",
    accent: "BUILDER",
  },
  {
    index: "03",
    notText: "NOT MORE NOISE.",
    areText: "BETTER SIGNAL.",
    accent: "SIGNAL",
  },
  {
    index: "04",
    notText: "NOT ANOTHER AUDIENCE.",
    areText: "A COMMUNITY WITH IDENTITY.",
    accent: "COMMUNITY",
  },
  {
    index: "05",
    notText: "NOT ONLY THE BIG NAMES.",
    areText: "THE ONES YOU HAVEN'T HEARD OF YET.",
    accent: "HAVEN'T HEARD",
  },
  {
    index: "06",
    notText: "NOT WAITING FOR THE HEADLINES.",
    areText: "LOOKING BEFORE THEY HAPPEN.",
    accent: "BEFORE THEY HAPPEN",
    isCloser: true,
  },
];

export default function ManifestoSection() {
  return (
    <section className="pt-32 sm:pt-44 lg:pt-56 pb-32 sm:pb-44 lg:pb-56 bg-tsl-black relative overflow-hidden">
      {/* Ambient Lens Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-tsl-blue/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mb-20 sm:mb-28 lg:mb-36 space-y-6">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              03 / THE MANIFESTO
            </span>
          </div>

          <h2 className="display-lg text-tsl-white tracking-tight">
            THIS IS WHAT <br />
            <span className="text-tsl-blue">WE&apos;RE ABOUT.</span>
          </h2>

          <p className="text-tsl-grey text-lg sm:text-xl font-sans font-light max-w-2xl leading-relaxed">
            Our perspective is defined as much by what we deliberately reject as what we choose to champion.
          </p>
        </div>

        {/* Large Editorial Manifesto Sequence */}
        <div className="space-y-0 divide-y divide-tsl-dark-grey/50">
          {MANIFESTO_PAIRS.map((item) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className={`py-16 sm:py-24 lg:py-32 flex flex-col justify-between group transition-all duration-500 relative ${
                item.isCloser ? "pb-20 sm:pb-32 lg:pb-40" : ""
              }`}
            >
              {/* Subtle dynamic corner focus marker */}
              <div className="flex items-center justify-between mb-8 sm:mb-12">
                <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-tsl-grey group-hover:text-tsl-blue transition-colors">
                  <span className="w-2 h-2 rounded-full bg-tsl-dark-grey group-hover:bg-tsl-blue transition-colors" />
                  <span>{item.index} / 06</span>
                </div>

                <div className="hidden sm:flex items-center space-x-2 text-[10px] font-mono tracking-widest uppercase text-tsl-grey/60 group-hover:text-tsl-blue/80 transition-colors">
                  <Eye className="w-3.5 h-3.5" />
                  <span>TSL LENS FOCUS</span>
                </div>
              </div>

              {/* The Contrast Stack */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                
                {/* 1. The NOT Statement: Muted, smaller, grey, less visually dominant */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <span className="text-xs sm:text-sm font-mono text-tsl-grey/50 tracking-widest uppercase">
                    NOT
                  </span>
                  <span className="font-display text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold uppercase tracking-tight text-tsl-grey group-hover:text-tsl-white-soft/60 transition-colors duration-300">
                    {item.notText.replace("NOT ", "")}
                  </span>
                </div>

                {/* Subtle directional connector line */}
                <div className="pl-2 sm:pl-3 flex items-center space-x-4 text-tsl-dark-grey group-hover:text-tsl-blue/60 transition-colors">
                  <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 stroke-[1.5]" />
                  <div className="w-12 sm:w-20 h-[1px] bg-tsl-dark-grey group-hover:bg-tsl-blue/40 transition-colors" />
                </div>

                {/* 2. The WE ARE Statement: Oversized, dominant display typography */}
                <div className="pt-2">
                  <h3 className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase tracking-tight text-tsl-white leading-[1.02] drop-shadow-sm group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-500">
                    {item.areText}
                  </h3>
                </div>

              </div>

              {/* Special closer footer badge on item 06 */}
              {item.isCloser && (
                <div className="mt-12 sm:mt-16 pt-8 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-blue">
                  <span className="tracking-widest uppercase">END OF MANIFESTO SEQUENCE</span>
                  <span className="text-tsl-grey uppercase">ESTABLISHED PHILOSOPHY</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
