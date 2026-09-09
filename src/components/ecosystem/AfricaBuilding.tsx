"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, MapPin } from "lucide-react";

const ECOSYSTEM_STATS = [
  { country: "GHANA", count: "124", label: "BUILDERS", hub: "Accra" },
  { country: "NIGERIA", count: "318", label: "BUILDERS", hub: "Lagos" },
  { country: "KENYA", count: "187", label: "BUILDERS", hub: "Nairobi" },
  { country: "SOUTH AFRICA", count: "231", label: "BUILDERS", hub: "Cape Town" },
];

export default function AfricaBuilding() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-20 sm:pb-28 bg-tsl-black-soft border-y border-tsl-dark-grey/40 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tsl-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              CONTINENTAL MOMENTUM
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">
            AFRICA IS BUILDING.
          </h2>
          <p className="text-tsl-white-soft/80 text-lg sm:text-xl font-sans font-light">
            Thousands of builders. Hundreds of ideas. One ecosystem.
          </p>
        </div>

        {/* Curated Hub Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {ECOSYSTEM_STATS.map((stat, idx) => (
            <motion.div
              key={stat.country}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-tsl-black border border-tsl-dark-grey space-y-2 group hover:border-tsl-blue/50 transition-colors"
            >
              <div className="flex items-center justify-between text-[11px] font-mono text-tsl-grey">
                <span className="tracking-widest">{stat.country}</span>
                <span className="text-tsl-blue/80 flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{stat.hub}</span>
                </span>
              </div>
              <div className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                {stat.count}
              </div>
              <div className="text-[11px] font-mono text-tsl-grey uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightweight Discovery Engine CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-8 sm:p-12 bg-tsl-black border border-tsl-dark-grey flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-mono uppercase tracking-widest text-tsl-blue">
              LOOK CLOSER
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white">
              EXPLORE BUILDERS, STARTUPS AND STORIES ACROSS AFRICA.
            </h3>
          </div>

          <Link
            href="/discover"
            className="group relative inline-flex items-center justify-center btn-hero bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue text-tsl-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase overflow-hidden transition-all duration-300"
          >
            <span className="absolute inset-0 bg-tsl-blue transition-transform duration-500 ease-out origin-bottom translate-y-full group-hover:translate-y-0 pointer-events-none" />
            <span className="relative z-10 flex items-center space-x-2 transition-colors duration-300 group-hover:text-tsl-black pointer-events-none">
              <span>DISCOVER THE ECOSYSTEM</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
