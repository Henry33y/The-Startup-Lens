"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Startup, Category } from "@/types";

interface StartupsToExploreProps {
  startups: Startup[];
}

const SECTOR_FILTERS: { id: string; label: string }[] = [
  { id: "ALL", label: "ALL" },
  { id: "AI", label: "AI" },
  { id: "Fintech", label: "FINTECH" },
  { id: "Health", label: "HEALTH" },
  { id: "Agriculture", label: "AGRICULTURE" },
  { id: "Climate", label: "CLIMATE" },
  { id: "EdTech", label: "EDTECH" },
];

export default function StartupsToExplore({ startups }: StartupsToExploreProps) {
  const [selectedSector, setSelectedSector] = useState<string>("ALL");

  const filteredStartups = useMemo(() => {
    if (selectedSector === "ALL") return startups;
    return startups.filter(
      (s) => s.category?.toLowerCase() === selectedSector.toLowerCase()
    );
  }, [startups, selectedSector]);

  return (
    <section className="py-24 sm:py-32 bg-tsl-black-soft border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-6 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                VENTURE DIRECTORY
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">STARTUPS TO EXPLORE</h2>
            <p className="text-base sm:text-lg text-tsl-white-soft/80 font-sans mt-2">
              Early-stage African ventures building scalable technology.
            </p>
          </div>

          <Link
            href="/startups"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-white transition-colors group self-start md:self-end"
          >
            <span>VIEW ALL STARTUPS ({startups.length})</span>
            <ArrowUpRight className="w-4 h-4 text-tsl-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Discrete Category Sector Filters */}
        <div className="mb-10 flex items-center space-x-2 sm:space-x-3 overflow-x-auto no-scrollbar pb-2">
          {SECTOR_FILTERS.map((sector) => {
            const isSelected = selectedSector === sector.id;
            return (
              <button
                key={sector.id}
                type="button"
                onClick={() => setSelectedSector(sector.id)}
                className={`px-3.5 py-1.5 text-xs font-mono tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? "bg-tsl-blue text-tsl-black font-bold shadow-[0_0_15px_rgba(0,212,255,0.25)]"
                    : "bg-tsl-surface/70 hover:bg-tsl-surface text-tsl-white-soft/80 border border-tsl-dark-grey hover:text-tsl-white"
                }`}
              >
                {sector.label}
              </button>
            );
          })}
        </div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredStartups.map((startup) => (
            <Link
              key={startup.id}
              href={`/startups/${startup.slug}`}
              className="group relative flex flex-col justify-between bg-tsl-surface/50 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 sm:p-7 transition-all duration-300"
            >
              <div className="space-y-5">
                {/* Top Row: Logo, Stage, Location */}
                <div className="flex items-start justify-between">
                  <div className="relative w-14 h-14 shrink-0 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                    <Image
                      src={
                        startup.logoUrl ||
                        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200"
                      }
                      alt={startup.name}
                      fill
                      className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                      sizes="56px"
                    />
                  </div>

                  <div className="flex flex-col items-end space-y-1">
                    <span className="px-2 py-0.5 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                      {startup.stage}
                    </span>
                    <span className="flex items-center space-x-1 text-[11px] font-mono text-tsl-grey">
                      <MapPin className="w-3 h-3 text-tsl-blue" />
                      <span>{startup.city || "Lagos"}, {startup.country}</span>
                    </span>
                  </div>
                </div>

                {/* Identity & Sector */}
                <div className="space-y-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-xs font-mono text-tsl-blue">
                    {startup.category.toUpperCase()} • SECTOR
                  </p>
                </div>

                {/* Short Tagline */}
                <p className="text-xs sm:text-sm font-sans text-tsl-white-soft/80 leading-relaxed line-clamp-2">
                  {startup.tagline}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-6 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
                <span className="font-semibold uppercase tracking-wider">EXPLORE STARTUP</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        {filteredStartups.length === 0 && (
          <div className="p-12 text-center border border-tsl-dark-grey bg-tsl-surface/30">
            <p className="text-sm font-mono text-tsl-grey">
              No startups found under {selectedSector}.
            </p>
            <button
              type="button"
              onClick={() => setSelectedSector("ALL")}
              className="mt-4 px-4 py-2 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-blue hover:text-tsl-white transition-colors"
            >
              Reset Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
