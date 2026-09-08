"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { DEMO_STORIES } from "@/data/demo/stories";

export default function FeaturedStory() {
  const story = DEMO_STORIES[0]; // Featured story

  return (
    <section className="py-24 bg-tsl-black border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 space-y-4 sm:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                FEATURED EDITORIAL
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">THE COVER STORY</h2>
          </div>
          <Link
            href="/stories"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-blue transition-colors group"
          >
            <span>VIEW ALL STORIES ({DEMO_STORIES.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Featured Story Object */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-tsl-black-soft border border-tsl-dark-grey overflow-hidden hover:border-tsl-blue/40 transition-all duration-500"
        >
          {/* Cover Image Container */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] overflow-hidden">
            <Image
              src={story.coverImageUrl}
              alt={story.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-tsl-black via-transparent to-transparent opacity-80 lg:opacity-40" />
            
            {/* Category Tag */}
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3.5 py-1.5 bg-tsl-black/90 backdrop-blur-md border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-blue font-semibold">
                {story.category.toUpperCase()} DIARY
              </span>
            </div>
          </div>

          {/* Editorial Content Info */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 text-xs font-mono text-tsl-grey">
                <span className="flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-tsl-blue" />
                  <span>{story.readingTime} MIN READ</span>
                </span>
                <span>•</span>
                <span className="uppercase">JUNE 2025 EDITION</span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-tight group-hover:text-tsl-blue transition-colors duration-300">
                {story.title}
              </h3>

              <p className="text-tsl-white-soft/80 text-base sm:text-lg font-sans leading-relaxed font-normal">
                {story.excerpt}
              </p>
            </div>

            {/* Author & Read Action */}
            <div className="pt-6 border-t border-tsl-dark-grey/60 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-tsl-dark-grey">
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
                className="inline-flex items-center justify-center w-12 h-12 bg-tsl-surface border border-tsl-dark-grey text-tsl-white group-hover:bg-tsl-blue group-hover:text-tsl-black group-hover:border-tsl-blue transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
