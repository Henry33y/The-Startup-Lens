"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, Volume2, ArrowUpRight, Sparkles } from "lucide-react";
import { DEMO_FOUNDER_DROPS } from "@/data/demo/founder-drops";

export default function FounderDrop() {
  const drop = DEMO_FOUNDER_DROPS[0];
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-24 bg-tsl-black-soft border-b border-tsl-dark-grey/40 relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                RAW UNFILTERED REELS
              </span>
            </div>
            <h2 className="heading-section text-tsl-white flex items-center space-x-3">
              <span>FOUNDER DROP</span>
              <Sparkles className="w-6 h-6 text-tsl-blue animate-pulse" />
            </h2>
          </div>

          <Link
            href="/founder-drops"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-blue transition-colors group"
          >
            <span>EXPLORE ALL DROPS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Short-form Video Object Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-tsl-black border border-tsl-dark-grey p-6 sm:p-10 relative">
          {/* Media Player Column */}
          <div className="lg:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] bg-tsl-surface border border-tsl-dark-grey overflow-hidden group">
            <Image
              src={drop.videoThumbnailUrl}
              alt={drop.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-tsl-black/40 group-hover:bg-tsl-black/20 transition-all duration-300" />

            {/* Play Trigger Badge */}
            <button
              type="button"
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
              aria-label="Play video drop"
            >
              <div className="w-16 h-16 rounded-full bg-tsl-blue text-tsl-black flex items-center justify-center shadow-[0_0_30px_#00D4FF] hover:bg-tsl-white transition-all">
                <Play className="w-6 h-6 fill-tsl-black ml-1" />
              </div>
            </button>

            {/* Duration Tag */}
            <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-tsl-black/80 backdrop-blur-md px-3 py-1 border border-tsl-dark-grey text-xs font-mono text-tsl-white">
              <Volume2 className="w-3.5 h-3.5 text-tsl-blue" />
              <span>{drop.duration} AUDIO / VIDEO DROP</span>
            </div>
          </div>

          {/* Quote & Founder Meta Column */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:pl-6">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-tsl-surface border border-tsl-dark-grey text-[10px] font-mono text-tsl-blue uppercase tracking-widest">
                <span>FOUNDER LESSON #{drop.id}</span>
              </div>

              <blockquote className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-tight">
                &ldquo;{drop.quote}&rdquo;
              </blockquote>

              <p className="text-tsl-grey text-sm font-sans leading-relaxed">
                Raw progress insights straight from founders on the ground. No corporate fluff, just hard lessons learned building in Africa.
              </p>
            </div>

            {/* Founder Identity */}
            <div className="pt-6 border-t border-tsl-dark-grey/60 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-tsl-dark-grey">
                  <Image
                    src={drop.avatarUrl}
                    alt={drop.founderName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-tsl-white font-display uppercase tracking-wide">
                    {drop.founderName}
                  </div>
                  <div className="text-xs font-mono text-tsl-grey">
                    {drop.founderRole} @ <span className="text-tsl-blue">{drop.startupName}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/founder-drops/${drop.slug}`}
                className="px-4 py-2 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white hover:border-tsl-blue hover:text-tsl-blue transition-all"
              >
                WATCH DROP
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
