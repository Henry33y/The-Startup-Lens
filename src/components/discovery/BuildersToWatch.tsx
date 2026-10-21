"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Builder } from "@/types";

interface BuildersToWatchProps {
  builders: Builder[];
}

export default function BuildersToWatch({ builders }: BuildersToWatchProps) {
  const featuredBuilder = builders[0];
  const otherBuilders = builders.slice(1, 5);

  return (
    <section className="py-24 sm:py-32 bg-tsl-black-soft text-tsl-white border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-6 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue font-semibold">
                BUILDER SPOTLIGHT
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">BUILDERS TO WATCH</h2>
            <p className="text-base sm:text-lg text-tsl-white-soft/80 font-sans mt-2">
              People worth paying attention to.
            </p>
          </div>

          <Link
            href="/builders"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-grey hover:text-tsl-blue transition-colors group font-semibold self-start md:self-end"
          >
            <span>VIEW ALL BUILDERS ({builders.length})</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Composition: Featured Left + Grid Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          {/* Featured Builder Card (5 cols) */}
          {featuredBuilder && (
            <div className="lg:col-span-5 flex">
              <Link
                href={`/builders/${featuredBuilder.username}`}
                className="group w-full surface-card border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="space-y-6">
                  {/* Image with Tag */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-tsl-surface-elevated border border-tsl-dark-grey/50">
                    <Image
                      src={featuredBuilder.avatarUrl}
                      alt={featuredBuilder.displayName}
                      fill
                      className="object-cover filter grayscale-[10%] group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 bg-tsl-surface/90 backdrop-blur-md border border-tsl-dark-grey text-tsl-white text-[10px] font-mono uppercase tracking-wider font-semibold inline-flex items-center space-x-1.5 shadow-sm">
                        <Sparkles className="w-3 h-3 text-tsl-blue" />
                        <span>FEATURED BUILDER</span>
                      </span>
                    </div>
                  </div>

                  {/* Identity & Location */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center space-x-1 text-xs font-mono text-tsl-grey">
                        <MapPin className="w-3 h-3 text-tsl-blue/80" />
                        <span>{featuredBuilder.city}, {featuredBuilder.country}</span>
                      </span>
                      <span className="px-2 py-0.5 bg-tsl-surface-elevated border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider font-semibold text-tsl-white-soft">
                        {featuredBuilder.stage}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                      {featuredBuilder.displayName}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-tsl-grey">
                      {featuredBuilder.role} @ <span className="font-bold text-tsl-white">{featuredBuilder.startupName}</span>
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-sm font-sans text-tsl-white-soft/85 leading-relaxed line-clamp-3">
                    {featuredBuilder.bio}
                  </p>

                  {/* Skills tags */}
                  {featuredBuilder.skills && featuredBuilder.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {featuredBuilder.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-tsl-surface-elevated border border-tsl-dark-grey text-[11px] font-mono text-tsl-grey"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-8 border-t border-tsl-dark-grey/50 flex items-center justify-between text-xs font-mono text-tsl-white font-semibold">
                  <span className="uppercase tracking-wider">VIEW PROFILE &amp; JOURNEY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-tsl-blue" />
                </div>
              </Link>
            </div>
          )}

          {/* Other Builders Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {otherBuilders.map((builder) => (
              <Link
                key={builder.id}
                href={`/builders/${builder.username}`}
                className="group surface-card border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300 p-6 flex flex-col justify-between shadow-sm hover:shadow-md"
              >
                <div className="space-y-4">
                  {/* Avatar & Location Row */}
                  <div className="flex items-start justify-between">
                    <div className="relative w-14 h-14 overflow-hidden border border-tsl-dark-grey bg-tsl-surface-elevated">
                      <Image
                        src={builder.avatarUrl}
                        alt={builder.displayName}
                        fill
                        className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                        sizes="56px"
                      />
                    </div>

                    <div className="text-right">
                      <span className="flex items-center justify-end space-x-1 text-[11px] font-mono text-tsl-grey">
                        <MapPin className="w-3 h-3 text-tsl-blue/80" />
                        <span>{builder.city || builder.country}</span>
                      </span>
                      <span className="inline-block mt-1 px-1.5 py-0.5 bg-tsl-surface-elevated text-[9px] font-mono uppercase tracking-wider text-tsl-white-soft border border-tsl-dark-grey font-semibold">
                        {builder.stage}
                      </span>
                    </div>
                  </div>

                  {/* Name & Startup */}
                  <div className="space-y-1">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                      {builder.displayName}
                    </h3>
                    <p className="text-xs font-mono text-tsl-grey">
                      {builder.role} @ <span className="font-semibold text-tsl-white">{builder.startupName}</span>
                    </p>
                  </div>

                  {/* Bio */}
                  <p className="text-xs font-sans text-tsl-white-soft/85 leading-relaxed line-clamp-2">
                    {builder.bio}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-4 mt-6 border-t border-tsl-dark-grey/50 flex items-center justify-between text-[11px] font-mono text-tsl-grey font-semibold group-hover:text-tsl-blue">
                  <span>VIEW PROFILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
