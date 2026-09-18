"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Clock, User, Rocket, BookOpen, XCircle } from "lucide-react";
import { Builder, Startup, Story } from "@/types";

interface DiscoverySearchResultsProps {
  query: string;
  builders: Builder[];
  startups: Startup[];
  stories: Story[];
  onClearSearch: () => void;
}

export default function DiscoverySearchResults({
  query,
  builders,
  startups,
  stories,
  onClearSearch,
}: DiscoverySearchResultsProps) {
  const totalResults = builders.length + startups.length + stories.length;

  return (
    <section className="py-16 sm:py-24 bg-tsl-black min-h-[60vh]">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Search Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-12 border-b border-tsl-dark-grey/50 gap-4">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-tsl-blue mb-1">
              <span>SEARCH RESULTS</span>
              <span>•</span>
              <span>{totalResults} MATCH{totalResults === 1 ? "" : "ES"} FOUND</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold uppercase text-tsl-white tracking-tight">
              &ldquo;{query}&rdquo;
            </h2>
          </div>

          <button
            type="button"
            onClick={onClearSearch}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-tsl-surface hover:bg-tsl-dark-grey/80 border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white transition-colors self-start sm:self-auto"
          >
            <XCircle className="w-4 h-4 text-tsl-grey" />
            <span>CLEAR SEARCH</span>
          </button>
        </div>

        {/* Empty State */}
        {totalResults === 0 && (
          <div className="py-16 text-center border border-tsl-dark-grey bg-tsl-surface/30 p-8 sm:p-12 max-w-xl mx-auto space-y-4">
            <h3 className="font-display text-xl font-bold uppercase text-tsl-white">
              NO MATCHES FOUND
            </h3>
            <p className="text-sm font-sans text-tsl-white-soft/80 leading-relaxed">
              We couldn&apos;t find any builders, startups, or stories matching &ldquo;{query}&rdquo;.
              Try searching by builder name, country, sector (e.g. Fintech, Climate), or reset your search.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={onClearSearch}
                className="px-6 py-2.5 bg-tsl-blue text-tsl-black font-display font-bold text-xs uppercase tracking-widest hover:bg-tsl-white transition-colors"
              >
                EXPLORE ALL CONTENT
              </button>
            </div>
          </div>
        )}

        <div className="space-y-16">
          {/* 1. MATCHING BUILDERS */}
          {builders.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-tsl-blue font-semibold">
                <User className="w-3.5 h-3.5" />
                <span>BUILDERS ({builders.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {builders.map((builder) => (
                  <Link
                    key={builder.id}
                    href={`/builders/${builder.username}`}
                    className="group flex flex-col justify-between bg-tsl-surface/60 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="relative w-12 h-12 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                          <Image
                            src={builder.avatarUrl}
                            alt={builder.displayName}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <span className="flex items-center space-x-1 text-[11px] font-mono text-tsl-grey">
                          <MapPin className="w-3 h-3 text-tsl-blue" />
                          <span>{builder.city || builder.country}</span>
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display text-lg font-bold uppercase text-tsl-white group-hover:text-tsl-blue transition-colors">
                          {builder.displayName}
                        </h4>
                        <p className="text-xs font-mono text-tsl-grey">
                          {builder.role} @ {builder.startupName}
                        </p>
                      </div>

                      <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2">
                        {builder.bio}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
                      <span>VIEW PROFILE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 2. MATCHING STARTUPS */}
          {startups.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-tsl-blue font-semibold">
                <Rocket className="w-3.5 h-3.5" />
                <span>STARTUPS ({startups.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {startups.map((startup) => (
                  <Link
                    key={startup.id}
                    href={`/startups/${startup.slug}`}
                    className="group flex flex-col justify-between bg-tsl-surface/60 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="relative w-12 h-12 overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                          <Image
                            src={startup.logoUrl || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=200"}
                            alt={startup.name}
                            fill
                            className="object-cover"
                            sizes="48px"
                          />
                        </div>
                        <span className="px-2 py-0.5 bg-tsl-black border border-tsl-dark-grey text-[10px] font-mono uppercase text-tsl-blue">
                          {startup.category}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-display text-lg font-bold uppercase text-tsl-white group-hover:text-tsl-blue transition-colors">
                          {startup.name}
                        </h4>
                        <p className="text-xs font-mono text-tsl-grey">
                          {startup.city || "Lagos"}, {startup.country} • {startup.stage}
                        </p>
                      </div>

                      <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2">
                        {startup.tagline}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
                      <span>EXPLORE STARTUP</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 3. MATCHING STORIES */}
          {stories.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-tsl-blue font-semibold">
                <BookOpen className="w-3.5 h-3.5" />
                <span>EDITORIAL STORIES ({stories.length})</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stories.map((story) => (
                  <Link
                    key={story.id}
                    href={`/stories/${story.slug}`}
                    className="group flex flex-col justify-between bg-tsl-surface/60 hover:bg-tsl-surface border border-tsl-dark-grey hover:border-tsl-blue/50 p-6 transition-all"
                  >
                    <div className="space-y-4">
                      <div className="relative aspect-[16/10] w-full overflow-hidden border border-tsl-dark-grey">
                        <Image
                          src={story.coverImageUrl}
                          alt={story.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="flex items-center space-x-2 text-xs font-mono text-tsl-grey">
                        <Clock className="w-3.5 h-3.5 text-tsl-blue" />
                        <span>{story.readingTime} MIN READ</span>
                        <span>•</span>
                        <span className="uppercase text-tsl-blue">{story.category}</span>
                      </div>

                      <h4 className="font-display text-base font-bold uppercase text-tsl-white group-hover:text-tsl-blue transition-colors line-clamp-2">
                        {story.title}
                      </h4>

                      <p className="text-xs font-sans text-tsl-white-soft/80 line-clamp-2">
                        {story.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-tsl-dark-grey/40 flex items-center justify-between text-xs font-mono text-tsl-grey group-hover:text-tsl-blue transition-colors">
                      <span>READ STORY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
