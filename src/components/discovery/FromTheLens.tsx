"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Story } from "@/types";

interface FromTheLensProps {
  stories: Story[];
}

export default function FromTheLens({ stories }: FromTheLensProps) {
  const displayStories = stories.slice(0, 3);

  return (
    <section className="py-24 sm:py-32 bg-tsl-black border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-6 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                EDITORIAL DISPATCHES
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">FROM THE LENS</h2>
            <p className="text-base sm:text-lg text-tsl-white-soft/80 font-sans mt-2">
              In-depth reporting and raw accounts of building across Africa.
            </p>
          </div>

          <Link
            href="/stories"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-white transition-colors group self-start md:self-end"
          >
            <span>EXPLORE ALL STORIES ({stories.length})</span>
            <ArrowUpRight className="w-4 h-4 text-tsl-blue transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 3-Card Stories Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayStories.map((story) => (
            <Link
              key={story.id}
              href={`/stories/${story.slug}`}
              className="group flex flex-col justify-between bg-tsl-surface/50 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300"
            >
              <div>
                {/* Cover Image with Category Tag */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-tsl-surface">
                  <Image
                    src={story.coverImageUrl}
                    alt={story.title}
                    fill
                    className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 z-10">
                    <span className="px-2.5 py-1 bg-tsl-black/90 backdrop-blur-sm border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-widest text-tsl-blue font-semibold">
                      {story.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-mono text-tsl-grey">
                    <Clock className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>{story.readingTime} MIN READ</span>
                    <span>•</span>
                    <span className="truncate">{story.author.name}</span>
                  </div>

                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-tsl-white leading-snug group-hover:text-tsl-blue transition-colors line-clamp-2">
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm font-sans text-tsl-white-soft/75 leading-relaxed line-clamp-2">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
                  <span className="font-semibold uppercase tracking-wider">READ ARTICLE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
