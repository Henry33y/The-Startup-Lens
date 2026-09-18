"use client";

import { useState, useMemo } from "react";
import { Story, StoryCategory } from "@/types";
import StoryCard from "./StoryCard";

interface StoryFeedProps {
  stories: Story[];
}

type FilterCategory = "all" | "founder" | "startup" | "insight" | "ecosystem";

interface CategoryTab {
  id: FilterCategory;
  label: string;
}

const CATEGORY_TABS: CategoryTab[] = [
  { id: "all", label: "ALL" },
  { id: "founder", label: "FOUNDER STORIES" },
  { id: "startup", label: "STARTUPS" },
  { id: "insight", label: "INSIGHTS" },
  { id: "ecosystem", label: "ECOSYSTEM" },
];

export default function StoryFeed({ stories }: StoryFeedProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredStories = useMemo(() => {
    if (activeCategory === "all") {
      return stories;
    }
    return stories.filter((story) => story.category === (activeCategory as StoryCategory));
  }, [stories, activeCategory]);

  return (
    <section className="pt-8 pb-24 sm:pb-32 bg-tsl-black">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 space-y-12 sm:space-y-16">
        {/* Category Navigation & Section Header */}
        <div className="space-y-8 border-b border-tsl-dark-grey/60 pb-8">
          {/* Functional Editorial Category Navigation */}
          <nav aria-label="Story Categories" className="overflow-x-auto scrollbar-none -mx-6 px-6 sm:mx-0 sm:px-0">
            <div className="flex items-center space-x-6 sm:space-x-8 md:space-x-12 min-w-max border-b border-tsl-dark-grey/40">
              {CATEGORY_TABS.map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveCategory(tab.id)}
                    className={`relative py-3.5 text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors duration-200 cursor-pointer ${
                      isActive
                        ? "text-tsl-blue font-bold"
                        : "text-tsl-grey hover:text-tsl-white"
                    }`}
                  >
                    <span>{tab.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-tsl-blue" />
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Section Heading & Result Count */}
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-3">
                <span className="w-6 h-[2px] bg-tsl-blue" />
                <span className="font-mono text-xs uppercase tracking-widest text-tsl-blue">
                  ARCHIVE
                </span>
              </div>
              <h2 className="heading-section text-tsl-white">
                LATEST STORIES
              </h2>
            </div>
            <div className="text-xs font-mono text-tsl-grey hidden sm:block">
              SHOWING {filteredStories.length} {filteredStories.length === 1 ? "STORY" : "STORIES"}
            </div>
          </div>
        </div>

        {/* Editorial Stories Layout */}
        {filteredStories.length === 0 ? (
          <div className="py-20 text-center border border-tsl-dark-grey/60 bg-tsl-black-soft p-8 space-y-3">
            <p className="font-display text-xl font-bold uppercase text-tsl-white">
              NO STORIES IN THIS CATEGORY YET
            </p>
            <p className="text-sm text-tsl-grey font-sans">
              Check back soon as we document more builders across the continent.
            </p>
          </div>
        ) : activeCategory === "all" ? (
          /* Varied Editorial Magazine Grid for 'ALL' view */
          <div className="space-y-8 sm:space-y-10">
            {/* Row 1: 2 Balanced Medium Stories */}
            {filteredStories.length >= 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <StoryCard story={filteredStories[0]} />
                <StoryCard story={filteredStories[1]} />
              </div>
            )}

            {/* Row 2: 1 Wide Horizontal Spotlight Story */}
            {filteredStories.length >= 3 && (
              <div>
                <StoryCard story={filteredStories[2]} variant="wide" />
              </div>
            )}

            {/* Row 3: Remaining Stories in a 2-Column / 3-Column Editorial Grid */}
            {filteredStories.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
                {filteredStories.slice(3).map((story) => (
                  <StoryCard key={story.id} story={story} />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Clean 2-Column Grid for Filtered Views */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
