"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Play, Volume2 } from "lucide-react";
import { DEMO_STORIES } from "@/data/demo/stories";
import { DEMO_FOUNDER_DROPS } from "@/data/demo/founder-drops";

export default function TheLens() {
  const story = DEMO_STORIES[0];
  const drop = DEMO_FOUNDER_DROPS[0];

  return (
    <section className="pt-28 sm:pt-36 lg:pt-44 pb-28 sm:pb-36 lg:pb-44 bg-tsl-black relative overflow-hidden">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 space-y-4 sm:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                THE LENS
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">WHAT YOU&apos;LL DISCOVER HERE</h2>
          </div>
          <Link
            href="/stories"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-blue transition-colors group"
          >
            <span>EXPLORE ALL EDITORIAL ({DEMO_STORIES.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* The Lens Combined Layout: Dominant Story + Supporting Founder Drop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Dominant Featured Story (8 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 group bg-tsl-black-soft border border-tsl-dark-grey overflow-hidden hover:border-tsl-blue/40 transition-all duration-500"
          >
            {/* Story Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <Image
                src={story.coverImageUrl}
                alt={story.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tsl-black-soft via-tsl-black-soft/40 to-transparent" />

              <div className="absolute top-4 left-4 z-10">
                <span className="px-3 py-1 bg-tsl-black/90 backdrop-blur-md border border-tsl-dark-grey text-[11px] font-mono uppercase tracking-wider text-tsl-blue font-semibold">
                  FEATURED STORY
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-tsl-grey">
                <span className="flex items-center space-x-1.5 text-tsl-white-soft">
                  <Clock className="w-3.5 h-3.5 text-tsl-blue" />
                  <span>{story.readingTime} MIN READ</span>
                </span>
                <span className="uppercase text-tsl-grey">ACCRA • NAIROBI • LAGOS</span>
              </div>
            </div>

            {/* Story Text & Action */}
            <div className="p-6 sm:p-8 space-y-4">
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-snug group-hover:text-tsl-blue transition-colors duration-300">
                {story.title}
              </h3>

              <p className="text-tsl-white-soft/80 text-base sm:text-lg font-sans leading-relaxed">
                {story.excerpt}
              </p>

              <div className="pt-4 border-t border-tsl-dark-grey/60 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-tsl-dark-grey">
                    <Image
                      src={story.author.avatarUrl}
                      alt={story.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-tsl-white">{story.author.name}</div>
                    <div className="text-[11px] text-tsl-grey font-mono">{story.author.role}</div>
                  </div>
                </div>

                <Link
                  href={`/stories/${story.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-tsl-blue hover:text-tsl-white transition-colors"
                >
                  <span>READ STORY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Supporting Founder Drop (4 cols on desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 bg-tsl-surface/70 border border-tsl-dark-grey p-6 sm:p-7 flex flex-col justify-between space-y-6 relative group hover:border-tsl-dark-grey/90 transition-all"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-widest text-tsl-blue">
                  <Volume2 className="w-3 h-3 text-tsl-blue" />
                  <span>FOUNDER DROP</span>
                </span>
                <span className="text-[11px] font-mono text-tsl-grey">{drop.duration}</span>
              </div>

              <blockquote className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-tsl-white leading-snug">
                &ldquo;{drop.quote}&rdquo;
              </blockquote>

              <p className="text-xs text-tsl-grey font-sans leading-relaxed">
                Raw unfiltered execution audio straight from founder desks across the continent.
              </p>
            </div>

            {/* Founder Info & Quick Listen */}
            <div className="pt-4 border-t border-tsl-dark-grey/60 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-tsl-dark-grey">
                  <Image
                    src={drop.avatarUrl}
                    alt={drop.founderName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-tsl-white font-display uppercase tracking-wide">
                    {drop.founderName}
                  </div>
                  <div className="text-[11px] font-mono text-tsl-grey">
                    {drop.founderRole} @ <span className="text-tsl-blue">{drop.startupName}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/founder-drops/${drop.slug}`}
                aria-label={`Listen to ${drop.founderName}'s drop`}
                className="w-9 h-9 rounded-full bg-tsl-surface-elevated border border-tsl-dark-grey flex items-center justify-center text-tsl-blue hover:bg-tsl-blue hover:text-tsl-black transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
