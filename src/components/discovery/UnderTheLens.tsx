"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UnderTheLensItem {
  id: string;
  index: string;
  title: string;
  descriptor: string;
  location: string;
  sector: string;
  href: string;
  imageUrl: string;
  type: "builder" | "startup" | "story";
}

const UNDER_THE_LENS_ITEMS: UnderTheLensItem[] = [
  {
    id: "utl-1",
    index: "01",
    title: "AMA MENSAH",
    descriptor: "Building decentralized credit protocol for Francophone West Africa",
    location: "Dakar, Senegal",
    sector: "Fintech",
    href: "/builders/aminata_diallo",
    imageUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=600",
    type: "builder",
  },
  {
    id: "utl-2",
    index: "02",
    title: "KWAME MENSAH",
    descriptor: "Autonomous solar micro-grids tailored for rural agricultural processing hubs",
    location: "Accra, Ghana",
    sector: "Climate",
    href: "/builders/kwame_mensah",
    imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    type: "builder",
  },
  {
    id: "utl-3",
    index: "03",
    title: "TUNDE ADEBAYO",
    descriptor: "Mobile ultrasound AI enabling low-cost rapid oncology triage across primary clinics",
    location: "Lagos, Nigeria",
    sector: "Health",
    href: "/builders/tunde_adebayo",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
    type: "builder",
  },
  {
    id: "utl-4",
    index: "04",
    title: "ZOLA NKOSANA",
    descriptor: "Zero-data interactive STEM classrooms powered by local P2P mesh networking",
    location: "Cape Town, South Africa",
    sector: "EdTech",
    href: "/builders/zola_nkosana",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
    type: "builder",
  },
  {
    id: "utl-5",
    index: "05",
    title: "GRACE UWASE",
    descriptor: "Automating agricultural soil carbon validation using IoT sensors and satellite radar",
    location: "Kigali, Rwanda",
    sector: "AI & Climate",
    href: "/builders/grace_uwase",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
    type: "builder",
  },
  {
    id: "utl-6",
    index: "06",
    title: "DAVID KIGEN",
    descriptor: "Real-time SMS auction protocol eliminating middleman margins for livestock farmers",
    location: "Nairobi, Kenya",
    sector: "Agriculture",
    href: "/builders/david_kigen",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
    type: "builder",
  },
];

export default function UnderTheLens() {
  const [hoveredItem, setHoveredItem] = useState<UnderTheLensItem | null>(null);

  return (
    <section className="py-24 sm:py-32 bg-tsl-black border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header with Subtle Lens Reticle Marker */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-3">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue flex items-center gap-2">
                <Eye className="w-3.5 h-3.5" />
                <span>SIGNATURE DISCOVERY</span>
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">UNDER THE LENS</h2>
            <p className="text-base sm:text-lg text-tsl-white-soft/80 font-sans mt-2">
              People and ideas that deserve a closer look.
            </p>
          </div>

          <div className="hidden lg:flex items-center space-x-2 text-xs font-mono text-tsl-grey">
            <span className="w-2 h-2 rounded-full bg-tsl-blue animate-pulse" />
            <span>HOVER ROW TO INSPECT</span>
          </div>
        </div>

        {/* Editorial Vertical List with Dynamic Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main List Column */}
          <div className="lg:col-span-8 divide-y divide-tsl-dark-grey/50 border-y border-tsl-dark-grey/50">
            {UNDER_THE_LENS_ITEMS.map((item) => {
              const isHovered = hoveredItem?.id === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onFocus={() => setHoveredItem(item)}
                  onBlur={() => setHoveredItem(null)}
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between py-6 sm:py-8 px-4 sm:px-6 transition-all duration-300 hover:bg-tsl-surface/50 block"
                >
                  {/* Left: Index + Name & Description */}
                  <div className="flex items-start sm:items-center space-x-4 sm:space-x-8">
                    {/* Index Number */}
                    <span className="font-mono text-sm sm:text-base font-bold text-tsl-blue/80 group-hover:text-tsl-blue transition-colors pt-1 sm:pt-0">
                      {item.index}
                    </span>

                    {/* Title + Shift Transition */}
                    <div className="space-y-1 sm:space-y-1.5 transition-transform duration-300 group-hover:translate-x-2">
                      <div className="flex items-center space-x-3">
                        <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                          {item.title}
                        </h3>
                        <span className="inline-block lg:hidden px-2 py-0.5 bg-tsl-surface border border-tsl-dark-grey text-[10px] font-mono uppercase text-tsl-blue">
                          {item.sector}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm font-sans text-tsl-white-soft/70 max-w-xl line-clamp-2 sm:line-clamp-1">
                        {item.descriptor}
                      </p>
                    </div>
                  </div>

                  {/* Right: Location & Arrow */}
                  <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6 mt-4 sm:mt-0 pl-8 sm:pl-0">
                    <span className="text-xs font-mono text-tsl-grey">
                      {item.location}
                    </span>
                    <div className="w-8 h-8 rounded-none border border-tsl-dark-grey/60 group-hover:border-tsl-blue flex items-center justify-center text-tsl-grey group-hover:text-tsl-blue group-hover:bg-tsl-blue/10 transition-all">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Desktop Preview Panel (Pinned / Floating on Hover) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-36">
            <div className="border border-tsl-dark-grey bg-tsl-black-soft p-6 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-tsl-grey pb-3 border-b border-tsl-dark-grey/50">
                <span className="flex items-center space-x-1.5 text-tsl-blue font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>OPTICAL INSPECTION</span>
                </span>
                <span>{hoveredItem ? hoveredItem.index : "01"} / 06</span>
              </div>

              {/* Preview Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-tsl-dark-grey bg-tsl-surface">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={hoveredItem ? hoveredItem.id : "default"}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={
                        hoveredItem
                          ? hoveredItem.imageUrl
                          : UNDER_THE_LENS_ITEMS[0].imageUrl
                      }
                      alt={hoveredItem ? hoveredItem.title : UNDER_THE_LENS_ITEMS[0].title}
                      fill
                      className="object-cover"
                      sizes="350px"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Sector tag */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 bg-tsl-black/90 backdrop-blur-sm border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                    {hoveredItem ? hoveredItem.sector : UNDER_THE_LENS_ITEMS[0].sector}
                  </span>
                </div>
              </div>

              {/* Preview Metadata */}
              <div className="space-y-2 pt-2">
                <h4 className="font-display text-lg font-bold uppercase tracking-tight text-tsl-white">
                  {hoveredItem ? hoveredItem.title : UNDER_THE_LENS_ITEMS[0].title}
                </h4>
                <p className="text-xs font-mono text-tsl-grey">
                  {hoveredItem ? hoveredItem.location : UNDER_THE_LENS_ITEMS[0].location}
                </p>
                <p className="text-xs font-sans text-tsl-white-soft/80 leading-relaxed">
                  {hoveredItem ? hoveredItem.descriptor : UNDER_THE_LENS_ITEMS[0].descriptor}
                </p>
              </div>

              <div className="pt-3 border-t border-tsl-dark-grey/50">
                <Link
                  href={hoveredItem ? hoveredItem.href : UNDER_THE_LENS_ITEMS[0].href}
                  className="w-full py-2 bg-tsl-surface hover:bg-tsl-blue hover:text-tsl-black border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white flex items-center justify-center space-x-2 transition-colors font-semibold"
                >
                  <span>INSPECT FULL ENTRY</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
