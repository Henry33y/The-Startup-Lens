"use client";

import { motion } from "framer-motion";
import { Maximize2, Scan, Disc3 } from "lucide-react";

export default function LensSection() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-48 pb-28 sm:pb-36 lg:pb-48 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Background Soft Lens Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-tsl-blue/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Section Marker */}
        <div className="flex items-center space-x-3 mb-12 sm:mb-16">
          <span className="w-8 h-[2px] bg-tsl-blue" />
          <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
            05 / THE LENS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Philosophy (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <h2 className="display-lg text-tsl-white tracking-tight leading-[1.02]">
              LOOK <br />
              <span className="text-tsl-blue">CLOSER.</span>
            </h2>

            <div className="space-y-6 text-tsl-white-soft/85 font-sans text-base sm:text-xl font-light leading-relaxed">
              <p className="text-tsl-white font-normal text-xl sm:text-2xl">
                The Startup Lens exists to look closer—to notice the builders, experiments, ideas and journeys that are easy to miss.
              </p>

              <p>
                A lens isn&apos;t a megaphone. A megaphone just makes the loudest voices louder. A lens adjusts focal depth. It brings into sharp, deliberate clarity the details that the naked eye skims past.
              </p>

              <p className="text-tsl-grey">
                When you zoom in on the African tech landscape, you don&apos;t just see funding tickers. You see engineers soldering solar boards in Kumasi, healthcare algorithms trained on localized pathology in Lagos, and logistics networks routed through informal Dakar transit nodes.
              </p>
            </div>

            {/* Lens Specification Tags */}
            <div className="pt-6 border-t border-tsl-dark-grey/50 grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs font-mono text-tsl-grey">
              <div>
                <span className="text-tsl-white font-bold block mb-1">FOCAL DEPTH</span>
                <span>EARLY-STAGE ALPHA</span>
              </div>
              <div>
                <span className="text-tsl-white font-bold block mb-1">OPTICAL RESOLUTION</span>
                <span>RAW EXECUTION</span>
              </div>
              <div>
                <span className="text-tsl-white font-bold block mb-1">FIELD OF VIEW</span>
                <span>PAN-AFRICAN</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Sleek Optical Lens Visualization (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="lg:col-span-5 flex items-center justify-center relative p-8 sm:p-12"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Outer Optical Ring */}
              <div className="absolute inset-0 rounded-full border border-tsl-dark-grey/70 animate-spin" style={{ animationDuration: "35s" }}>
                {/* Tick marks around perimeter */}
                <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-tsl-blue/80" />
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-tsl-dark-grey" />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 w-3 h-1 bg-tsl-dark-grey" />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-1 bg-tsl-dark-grey" />
              </div>

              {/* Secondary Aperture Ring */}
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-tsl-blue/30 animate-spin" style={{ animationDuration: "20s", animationDirection: "reverse" }}>
                <span className="absolute top-0 right-1/4 w-1.5 h-1.5 rounded-full bg-tsl-blue shadow-[0_0_10px_#00D4FF]" />
              </div>

              {/* Inner Focus Glass Element */}
              <div className="absolute inset-16 sm:inset-20 rounded-full bg-tsl-surface/90 border border-tsl-dark-grey flex flex-col items-center justify-center text-center p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(0,212,255,0.12)] group hover:border-tsl-blue/60 transition-all">
                <Scan className="w-8 h-8 text-tsl-blue mb-2 animate-pulse" />
                <span className="font-display text-xs font-bold uppercase tracking-widest text-tsl-white">
                  THE LENS
                </span>
                <span className="text-[10px] font-mono text-tsl-grey mt-1">
                  ZOOM: 100% SIGNAL
                </span>
              </div>

              {/* Crosshair lines */}
              <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-tsl-blue/30 to-transparent top-1/2 -translate-y-1/2 pointer-events-none" />
              <div className="absolute h-full w-[1px] bg-gradient-to-b from-transparent via-tsl-blue/30 to-transparent left-1/2 -translate-x-1/2 pointer-events-none" />

              {/* Angle Readouts */}
              <div className="absolute top-0 left-0 text-[10px] font-mono text-tsl-grey">
                00°00&apos;N
              </div>
              <div className="absolute bottom-0 right-0 text-[10px] font-mono text-tsl-grey">
                TSL_OPTICAL_GRID
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
