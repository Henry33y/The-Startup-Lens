import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Story } from "@/types";

interface StoryCardProps {
  story: Story;
  variant?: "standard" | "wide";
  priority?: boolean;
}

export default function StoryCard({
  story,
  variant = "standard",
  priority = false,
}: StoryCardProps) {
  if (variant === "wide") {
    return (
      <Link
        href={`/stories/${story.slug}`}
        className="group block bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300 overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch h-full">
          {/* Image */}
          <div className="md:col-span-6 relative min-h-[260px] sm:min-h-[320px] bg-tsl-surface overflow-hidden">
            <Image
              src={story.coverImageUrl}
              alt={story.title}
              fill
              priority={priority}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 bg-tsl-black/90 backdrop-blur-md border border-tsl-dark-grey text-[11px] font-mono uppercase tracking-widest text-tsl-blue font-semibold">
                {story.category}
              </span>
            </div>
          </div>

          {/* Editorial Content */}
          <div className="md:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-xs font-mono text-tsl-grey">
                <span className="flex items-center space-x-1.5 text-tsl-blue">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{story.readingTime} MIN READ</span>
                </span>
                <span>•</span>
                <span className="uppercase text-tsl-grey">{story.author.name}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-tsl-white leading-tight group-hover:text-tsl-blue transition-colors duration-300">
                {story.title}
              </h3>

              <p className="text-sm sm:text-base text-tsl-white-soft/80 font-sans font-light leading-relaxed line-clamp-3">
                {story.excerpt}
              </p>
            </div>

            <div className="pt-4 border-t border-tsl-dark-grey/50 flex items-center justify-between">
              <span className="text-xs font-mono text-tsl-grey">
                {story.author.role}
              </span>
              <span className="inline-flex items-center space-x-2 text-xs font-mono font-bold uppercase tracking-widest text-tsl-blue group-hover:text-tsl-white transition-colors">
                <span>READ STORY</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Standard Editorial Card
  return (
    <Link
      href={`/stories/${story.slug}`}
      className="group flex flex-col justify-between bg-tsl-black-soft border border-tsl-dark-grey hover:border-tsl-blue/50 transition-all duration-300 overflow-hidden h-full"
    >
      <div>
        {/* Image Container */}
        <div className="relative aspect-[16/10] w-full bg-tsl-surface overflow-hidden">
          <Image
            src={story.coverImageUrl}
            alt={story.title}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[15%] group-hover:grayscale-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-2.5 py-1 bg-tsl-black/90 backdrop-blur-md border border-tsl-dark-grey text-[10px] font-mono uppercase tracking-widest text-tsl-blue font-semibold">
              {story.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-7 space-y-3">
          <div className="flex items-center space-x-2 text-xs font-mono text-tsl-grey">
            <Clock className="w-3.5 h-3.5 text-tsl-blue" />
            <span>{story.readingTime} MIN READ</span>
          </div>

          <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-tsl-white leading-snug group-hover:text-tsl-blue transition-colors duration-300">
            {story.title}
          </h3>

          <p className="text-xs sm:text-sm text-tsl-white-soft/80 font-sans font-light leading-relaxed line-clamp-3">
            {story.excerpt}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 sm:p-7 pt-0">
        <div className="pt-4 border-t border-tsl-dark-grey/50 flex items-center justify-between">
          <span className="text-xs font-mono text-tsl-grey">
            {story.author.name}
          </span>
          <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-semibold uppercase tracking-wider text-tsl-blue group-hover:text-tsl-white transition-colors">
            <span>READ</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
