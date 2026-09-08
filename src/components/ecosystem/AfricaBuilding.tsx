"use client";

import { motion } from "framer-motion";
import { Map, Cpu, Zap, Activity, Globe2 } from "lucide-react";

const STATS = [
  { label: "MAPPED TECH HUBS", value: "54 CITIES", change: "Across 28 Countries" },
  { label: "ACTIVE BUILDERS", value: "1,420+", change: "+14% this month" },
  { label: "STARTUPS IN INDEX", value: "380+", change: "Idea to Launched" },
  { label: "FOUNDER DIARIES", value: "120+", change: "Raw progress logs" },
];

const HUB_HIGHLIGHTS = [
  { city: "Lagos Hub", sector: "Fintech & AI", startups: "420 Startups" },
  { city: "Nairobi Hub", sector: "AgriTech & Climate", startups: "310 Startups" },
  { city: "Accra Hub", sector: "Clean Energy & Mobility", startups: "180 Startups" },
  { city: "Cape Town Hub", sector: "SaaS & Biotech", startups: "240 Startups" },
];

export default function AfricaBuilding() {
  return (
    <section className="py-24 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              DATA & ECOSYSTEM MAP
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">AFRICA IS BUILDING.</h2>
          <p className="text-tsl-grey text-lg font-sans">
            Thousands of builders. Hundreds of ideas. One interconnected continental ecosystem.
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-tsl-black-soft border border-tsl-dark-grey space-y-2 relative group hover:border-tsl-blue/50 transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-tsl-grey">
                {stat.label}
              </div>
              <div className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-tsl-blue flex items-center space-x-1">
                <Activity className="w-3 h-3" />
                <span>{stat.change}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Ecosystem Map Visual Frame (Foundation for Africa Builder Map) */}
        <div className="relative bg-tsl-black-soft border border-tsl-dark-grey p-8 sm:p-12 overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-xs text-tsl-grey flex items-center space-x-2">
            <Globe2 className="w-4 h-4 text-tsl-blue animate-spin-slow" />
            <span>CONTINENTAL STARTUP DENSITY MAP V1.0</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-6">
            <div className="lg:col-span-6 space-y-6">
              <span className="px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono text-tsl-blue uppercase tracking-widest">
                FUTURE BUILDER MAP ENGINE
              </span>
              <h3 className="font-display text-3xl font-bold uppercase tracking-tight text-tsl-white">
                MAPPING PAN-AFRICAN INNOVATION IN REAL-TIME
              </h3>
              <p className="text-tsl-white-soft/80 text-base font-sans leading-relaxed">
                From rural IoT solar micro-grids in Ghana to AI oncology diagnostics in Nigeria, our data layer aggregates grassroots builder momentum across all major African tech hubs.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                {HUB_HIGHLIGHTS.map((hub) => (
                  <div key={hub.city} className="p-4 bg-tsl-surface border border-tsl-dark-grey space-y-1">
                    <div className="text-sm font-bold font-display uppercase text-tsl-white">{hub.city}</div>
                    <div className="text-xs font-mono text-tsl-blue">{hub.sector}</div>
                    <div className="text-[11px] font-mono text-tsl-grey">{hub.startups}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stylized African Graphic Container */}
            <div className="lg:col-span-6 flex items-center justify-center p-6 bg-tsl-surface border border-tsl-dark-grey relative min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(#00D4FF_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="relative text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full bg-tsl-blue/10 border border-tsl-blue flex items-center justify-center text-tsl-blue shadow-[0_0_40px_rgba(0,212,255,0.3)]">
                  <Map className="w-10 h-10" />
                </div>
                <div className="font-display text-xl font-bold uppercase tracking-wider text-tsl-white">
                  AFRICA BUILDER MAP
                </div>
                <p className="text-xs font-mono text-tsl-grey max-w-xs mx-auto">
                  Interactive GIS visualization engine linking founders, startups &amp; investor metrics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
