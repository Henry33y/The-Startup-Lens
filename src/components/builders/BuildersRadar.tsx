"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { DEMO_BUILDERS } from "@/data/demo/builders";

export default function BuildersRadar() {
  const builders = DEMO_BUILDERS.slice(0, 6);

  return (
    <section className="py-24 bg-tsl-black-soft border-b border-tsl-dark-grey/40">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-[2px] bg-tsl-blue" />
              <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                EARLY DISCOVERY
              </span>
            </div>
            <h2 className="heading-section text-tsl-white">ON OUR RADAR</h2>
            <p className="text-tsl-grey text-base font-sans mt-2">
              Builders you should know before everyone else does.
            </p>
          </div>

          <Link
            href="/builders"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-tsl-white-soft hover:text-tsl-blue transition-colors group"
          >
            <span>DISCOVER ALL BUILDERS</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        {/* Builder Object Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builders.map((builder, idx) => (
            <motion.div
              key={builder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="surface-card group relative p-6 flex flex-col justify-between h-full"
            >
              <div>
                {/* Header Metadata */}
                <div className="flex items-start justify-between mb-6">
                  <div className="relative w-16 h-16 rounded-none overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue transition-colors">
                    <Image
                      src={builder.avatarUrl}
                      alt={builder.displayName}
                      fill
                      className="object-cover filter grayscale-[15%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex flex-col items-end space-y-1.5">
                    <span className="px-2.5 py-0.5 bg-tsl-surface border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-wider text-tsl-blue">
                      STAGE: {builder.stage.toUpperCase()}
                    </span>
                    <span className="flex items-center space-x-1 text-[11px] text-tsl-grey font-mono">
                      <MapPin className="w-3 h-3 text-tsl-blue" />
                      <span>{builder.city}, {builder.country}</span>
                    </span>
                  </div>
                </div>

                {/* Identity & Bio */}
                <div className="space-y-3 mb-6">
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors flex items-center space-x-2">
                      <span>{builder.displayName}</span>
                      {builder.featured && (
                        <ShieldCheck className="w-4 h-4 text-tsl-blue inline" />
                      )}
                    </h3>
                    <div className="text-xs font-mono text-tsl-grey mt-0.5">
                      {builder.role} @ <span className="text-tsl-white-soft">{builder.startupName}</span>
                    </div>
                  </div>

                  <p className="text-tsl-white-soft/80 text-sm font-sans leading-relaxed line-clamp-3">
                    {builder.bio}
                  </p>
                </div>
              </div>

              {/* Skills Tags & Profile Action */}
              <div className="pt-4 border-t border-tsl-dark-grey/60 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {builder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-tsl-black text-[10px] font-mono text-tsl-grey border border-tsl-dark-grey/50"
                    >
                      #{skill}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/builders/${builder.username}`}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white group-hover:border-tsl-blue group-hover:text-tsl-blue transition-all"
                >
                  <span>VIEW BUILDER PROFILE</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
