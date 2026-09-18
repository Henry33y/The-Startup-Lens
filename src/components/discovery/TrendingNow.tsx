"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Clock, User, Rocket, BookOpen } from "lucide-react";
import { Builder, Startup, Story } from "@/types";

interface TrendingNowProps {
  builder: Builder;
  startup: Startup;
  story: Story;
}

export default function TrendingNow({ builder, startup, story }: TrendingNowProps) {
  return (
    <section className="py-20 sm:py-28 bg-tsl-black-soft border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center space-x-3 mb-2">
            <span className="w-6 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              CURATED SELECTION
            </span>
          </div>
          <h2 className="heading-section text-tsl-white">TRENDING NOW</h2>
        </div>

        {/* 3-Column Triad Grid: Builder | Startup | Story */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* 1. BUILDER CARD */}
          <Link
            href={`/builders/${builder.username}`}
            className="group relative flex flex-col justify-between bg-tsl-surface/70 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 sm:p-8 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Type Badge & Location */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                  <User className="w-3 h-3 text-tsl-blue" />
                  <span>BUILDER SPOTLIGHT</span>
                </span>
                <span className="flex items-center space-x-1 text-xs font-mono text-tsl-grey">
                  <MapPin className="w-3 h-3 text-tsl-blue" />
                  <span>{builder.city}, {builder.country}</span>
                </span>
              </div>

              {/* Builder Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 shrink-0 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                  <Image
                    src={builder.avatarUrl}
                    alt={builder.displayName}
                    fill
                    className="object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {builder.displayName}
                  </h3>
                  <p className="text-xs font-mono text-tsl-grey">
                    {builder.role} @ <span className="text-tsl-white-soft">{builder.startupName}</span>
                  </p>
                </div>
              </div>

              {/* Bio / Description */}
              <p className="text-xs sm:text-sm font-sans text-tsl-white-soft/80 leading-relaxed line-clamp-3">
                {builder.bio}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-6 mt-6 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
              <span className="font-semibold uppercase tracking-wider">VIEW BUILDER PROFILE</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

          {/* 2. STARTUP CARD */}
          <Link
            href={`/startups/${startup.slug}`}
            className="group relative flex flex-col justify-between bg-tsl-surface/70 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 sm:p-8 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Type Badge & Category */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                  <Rocket className="w-3 h-3 text-tsl-blue" />
                  <span>STARTUP SPOTLIGHT</span>
                </span>
                <span className="px-2 py-0.5 bg-tsl-black text-[10px] font-mono uppercase tracking-wider text-tsl-white border border-tsl-dark-grey">
                  {startup.category}
                </span>
              </div>

              {/* Startup Info */}
              <div className="flex items-center space-x-4">
                <div className="relative w-16 h-16 shrink-0 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                  <Image
                    src={startup.logoUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200"}
                    alt={startup.name}
                    fill
                    className="object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-xs font-mono text-tsl-grey">
                    {startup.city}, {startup.country} • <span className="text-tsl-blue">{startup.stage}</span>
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs sm:text-sm font-sans text-tsl-white-soft/80 leading-relaxed line-clamp-3">
                {startup.tagline}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-6 mt-6 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
              <span className="font-semibold uppercase tracking-wider">EXPLORE STARTUP</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>

          {/* 3. STORY CARD */}
          <Link
            href={`/stories/${story.slug}`}
            className="group relative flex flex-col justify-between bg-tsl-surface/70 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 sm:p-8 transition-all duration-300"
          >
            <div className="space-y-6">
              {/* Type Badge & Reading Time */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center space-x-1.5 px-2.5 py-1 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                  <BookOpen className="w-3 h-3 text-tsl-blue" />
                  <span>EDITORIAL STORY</span>
                </span>
                <span className="flex items-center space-x-1 text-xs font-mono text-tsl-grey">
                  <Clock className="w-3 h-3 text-tsl-blue" />
                  <span>{story.readingTime} MIN READ</span>
                </span>
              </div>

              {/* Story Cover Image + Title */}
              <div className="space-y-3">
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                  <Image
                    src={story.coverImageUrl}
                    alt={story.title}
                    fill
                    className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors leading-snug line-clamp-2">
                  {story.title}
                </h3>
              </div>

              {/* Excerpt */}
              <p className="text-xs sm:text-sm font-sans text-tsl-white-soft/80 leading-relaxed line-clamp-2">
                {story.excerpt}
              </p>
            </div>

            {/* Action Footer */}
            <div className="pt-6 mt-6 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
              <span className="font-semibold uppercase tracking-wider">READ STORY</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
