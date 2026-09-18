import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Story } from "@/types";
import { DEMO_STORIES } from "@/data/demo/stories";

interface FeaturedStoryProps {
  story?: Story;
}

export default function FeaturedStory({ story = DEMO_STORIES[0] }: FeaturedStoryProps) {
  if (!story) return null;

  return (
    <section className="pt-4 pb-20 sm:pb-28 bg-tsl-black">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        <Link
          href={`/stories/${story.slug}`}
          className="group block bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-500 overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Featured Image Container — Dominant Visual Space */}
            <div className="lg:col-span-7 relative min-h-[320px] sm:min-h-[440px] lg:min-h-[520px] overflow-hidden bg-tsl-surface">
              <Image
                src={story.coverImageUrl}
                alt={story.title}
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              {/* Soft Ambient Corner Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-tsl-black-soft/70 via-transparent to-transparent lg:hidden" />
              
              {/* Category Marker */}
              <div className="absolute top-5 left-5 z-10">
                <span className="px-3.5 py-1.5 bg-tsl-black/90 backdrop-blur-md border border-tsl-dark-grey text-xs font-mono uppercase tracking-widest text-tsl-blue font-bold">
                  {story.category} STORY
                </span>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between space-y-8 bg-tsl-black-soft">
              <div className="space-y-6">
                {/* Meta Row: Reading Time */}
                <div className="flex items-center space-x-3 text-xs font-mono text-tsl-grey">
                  <span className="flex items-center space-x-1.5 text-tsl-blue">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{story.readingTime} MIN READ</span>
                  </span>
                  <span>•</span>
                  <span className="uppercase tracking-wider">FEATURE ARTICLE</span>
                </div>

                {/* Main Headline */}
                <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-tsl-white leading-[1.1] group-hover:text-tsl-blue transition-colors duration-300">
                  {story.title}
                </h2>

                {/* Excerpt */}
                <p className="text-base sm:text-lg text-tsl-white-soft/80 font-sans font-light leading-relaxed">
                  {story.excerpt}
                </p>
              </div>

              {/* Author & Action Footer */}
              <div className="pt-6 border-t border-tsl-dark-grey/60 flex items-center justify-between">
                <div className="flex items-center space-x-3.5">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden border border-tsl-dark-grey group-hover:border-tsl-blue/60 transition-colors">
                    <Image
                      src={story.author.avatarUrl}
                      alt={story.author.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-tsl-white font-sans">
                      {story.author.name}
                    </div>
                    <div className="text-xs text-tsl-grey font-mono">
                      {story.author.role}
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-tsl-blue group-hover:text-tsl-white transition-colors">
                  <span>READ STORY</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
