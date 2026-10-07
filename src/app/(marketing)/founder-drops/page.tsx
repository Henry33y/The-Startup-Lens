import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Play, ArrowUpRight, Clock, Video } from "lucide-react";
import { DEMO_FOUNDER_DROPS } from "@/data/demo/founder-drops";

export const metadata: Metadata = {
  title: "Founder Drops | The Startup Lens",
  description:
    "Raw, unvarnished 2-minute video lessons and hard-won insights from African founders building in the trenches.",
  openGraph: {
    title: "Founder Drops | The Startup Lens",
    description: "Raw 2-minute video lessons from African founders building in the trenches.",
    url: "https://thestartuplens.com/founder-drops",
    siteName: "The Startup Lens",
    images: [
      {
        url: "/logos/TheStartUPLens-Logo-white.png",
        width: 1200,
        height: 630,
        alt: "The Startup Lens — Founder Drops",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder Drops | The Startup Lens",
    description: "Raw 2-minute video lessons from African founders.",
    images: ["/logos/TheStartUPLens-Logo-white.png"],
  },
};

export default function FounderDropsPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-16">
        {/* Page Header */}
        <div className="space-y-6 max-w-3xl">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              RAW SIGNAL // TRENCH LESSONS
            </span>
          </div>
          <h1 className="heading-hero text-tsl-white">
            FOUNDER DROPS.
          </h1>
          <p className="text-tsl-white-soft text-lg sm:text-xl font-sans leading-relaxed">
            No PR polish. No generic advice. Direct 2-minute video reflections from African founders encountering reality and adapting in real-time.
          </p>
        </div>

        {/* Founder Drops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_FOUNDER_DROPS.map((drop) => (
            <Link
              key={drop.id}
              href={`/founder-drops/${drop.slug}`}
              className="surface-card group border border-tsl-dark-grey hover:border-tsl-blue transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Video Thumbnail Header */}
                <div className="relative h-52 w-full bg-tsl-surface overflow-hidden">
                  <Image
                    src={drop.videoThumbnailUrl}
                    alt={drop.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale-[15%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-tsl-black via-tsl-black/30 to-transparent" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-tsl-black/80 border border-tsl-blue text-tsl-blue flex items-center justify-center group-hover:scale-110 group-hover:bg-tsl-blue group-hover:text-tsl-black transition-all shadow-[0_0_20px_rgba(0,212,255,0.4)]">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 bg-tsl-black/90 border border-tsl-dark-grey text-[10px] font-mono text-tsl-blue flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{drop.duration}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {drop.title}
                  </h3>

                  <blockquote className="text-xs sm:text-sm font-sans italic text-tsl-white-soft/80 border-l-2 border-tsl-blue/60 pl-3 leading-relaxed">
                    &ldquo;{drop.quote}&rdquo;
                  </blockquote>
                </div>
              </div>

              {/* Founder Footer */}
              <div className="p-6 pt-0 border-t border-tsl-dark-grey/60 mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-3 pt-4">
                  <div className="relative w-9 h-9 rounded-full overflow-hidden border border-tsl-dark-grey shrink-0">
                    <Image src={drop.avatarUrl} alt={drop.founderName} fill className="object-cover" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-tsl-white">{drop.founderName}</div>
                    <div className="text-[10px] font-mono text-tsl-grey">{drop.founderRole} @ {drop.startupName}</div>
                  </div>
                </div>

                <div className="pt-4 text-tsl-grey group-hover:text-tsl-blue transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
