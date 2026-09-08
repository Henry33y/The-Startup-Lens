import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { DEMO_STORIES } from "@/data/demo/stories";

export default function StoriesListingPage() {
  return (
    <main className="min-h-screen bg-tsl-black text-tsl-white pt-32 pb-24">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-8 h-[2px] bg-tsl-blue" />
            <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
              EDITORIAL ARCHIVE
            </span>
          </div>
          <h1 className="heading-section text-tsl-white">FOUNDER STORIES &amp; INSIGHTS</h1>
          <p className="text-tsl-grey text-lg font-sans">
            Unfiltered accounts of building early-stage companies across the African continent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEMO_STORIES.map((story) => (
            <div
              key={story.id}
              className="surface-card group flex flex-col justify-between overflow-hidden"
            >
              <div>
                <div className="relative h-52 w-full bg-tsl-surface overflow-hidden">
                  <Image
                    src={story.coverImageUrl}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-tsl-black/80 backdrop-blur-md border border-tsl-dark-grey text-[10px] font-mono text-tsl-blue uppercase font-bold">
                      {story.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-3 text-xs font-mono text-tsl-grey">
                    <Clock className="w-3.5 h-3.5 text-tsl-blue" />
                    <span>{story.readingTime} MIN READ</span>
                  </div>

                  <h2 className="font-display text-xl font-bold uppercase tracking-tight text-tsl-white group-hover:text-tsl-blue transition-colors">
                    {story.title}
                  </h2>

                  <p className="text-tsl-white-soft/80 text-sm font-sans line-clamp-3">
                    {story.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/stories/${story.slug}`}
                  className="w-full inline-flex items-center justify-between px-4 py-3 bg-tsl-surface border border-tsl-dark-grey text-xs font-mono uppercase tracking-wider text-tsl-white group-hover:border-tsl-blue group-hover:text-tsl-blue transition-all"
                >
                  <span>READ STORY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
