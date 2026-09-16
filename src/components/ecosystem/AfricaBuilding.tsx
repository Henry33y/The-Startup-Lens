"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ECOSYSTEM_STATS = [
  { country: "GHANA", count: "124", label: "BUILDERS", hub: "Accra" },
  { country: "NIGERIA", count: "318", label: "BUILDERS", hub: "Lagos" },
  { country: "KENYA", count: "187", label: "BUILDERS", hub: "Nairobi" },
  { country: "SOUTH AFRICA", count: "231", label: "BUILDERS", hub: "Cape Town" },
];

export default function AfricaBuilding() {
  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 bg-tsl-black relative overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tsl-blue/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-20 space-y-4">
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

        {/* Borderless Editorial Statistics (No boxed cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-14 border-b border-tsl-dark-grey/50">
          {ECOSYSTEM_STATS.map((stat, idx) => (
            <motion.div
              key={stat.country}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="space-y-2 flex flex-col"
            >
              <div className="flex items-center space-x-1.5 text-xs font-mono text-tsl-grey">
                <span className="tracking-widest">{stat.country}</span>
                <span>•</span>
                <span className="text-tsl-blue/80">{stat.hub}</span>
              </div>
              <div className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-tsl-white">
                {stat.count}
              </div>
              <div className="text-xs font-mono text-tsl-grey uppercase tracking-wider">
                {stat.label} ON RADAR
              </div>
            </motion.div>
          ))}
        </div>

        {/* Seamless Editorial Discovery Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-12 sm:pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
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
            className="group relative inline-flex items-center justify-center btn-hero bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue text-tsl-white font-display font-bold text-xs sm:text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 shadow-[0_0_20px_rgba(0,212,255,0.1)] hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
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
