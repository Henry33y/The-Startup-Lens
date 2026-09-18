"use client";

import { useState, useMemo } from "react";
import { Builder, Startup, Story } from "@/types";
import DiscoveryHero from "./DiscoveryHero";
import DiscoveryNavAndSearch, { DiscoveryCategory } from "./DiscoveryNavAndSearch";
import TrendingNow from "./TrendingNow";
import BuildersToWatch from "./BuildersToWatch";
import UnderTheLens from "./UnderTheLens";
import StartupsToExplore from "./StartupsToExplore";
import FromTheLens from "./FromTheLens";
import DiscoveryJoinLens from "./DiscoveryJoinLens";
import DiscoverySearchResults from "./DiscoverySearchResults";

interface DiscoveryClientProps {
  builders: Builder[];
  startups: Startup[];
  stories: Story[];
}

export default function DiscoveryClient({
  builders,
  startups,
  stories,
}: DiscoveryClientProps) {
  const [activeCategory, setActiveCategory] = useState<DiscoveryCategory>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Spotlight items for "Trending Now" triad
  const trendingBuilder = builders.find((b) => b.featured) || builders[0];
  const trendingStartup = startups.find((s) => s.featured) || startups[0];
  const trendingStory = stories.find((s) => s.featured) || stories[0];

  // Search Filtering Engine across all 3 domains
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return { builders: [], startups: [], stories: [] };

    const matchedBuilders = builders.filter(
      (b) =>
        b.displayName?.toLowerCase().includes(q) ||
        b.startupName?.toLowerCase().includes(q) ||
        b.role?.toLowerCase().includes(q) ||
        b.bio?.toLowerCase().includes(q) ||
        b.country?.toLowerCase().includes(q) ||
        b.city?.toLowerCase().includes(q) ||
        b.skills?.some((s) => s.toLowerCase().includes(q))
    );

    const matchedStartups = startups.filter(
      (s) =>
        s.name?.toLowerCase().includes(q) ||
        s.tagline?.toLowerCase().includes(q) ||
        s.description?.toLowerCase().includes(q) ||
        s.category?.toLowerCase().includes(q) ||
        s.country?.toLowerCase().includes(q) ||
        s.city?.toLowerCase().includes(q) ||
        s.problem?.toLowerCase().includes(q) ||
        s.solution?.toLowerCase().includes(q)
    );

    const matchedStories = stories.filter(
      (st) =>
        st.title?.toLowerCase().includes(q) ||
        st.excerpt?.toLowerCase().includes(q) ||
        st.category?.toLowerCase().includes(q) ||
        st.author?.name?.toLowerCase().includes(q)
    );

    return {
      builders: matchedBuilders,
      startups: matchedStartups,
      stories: matchedStories,
    };
  }, [searchQuery, builders, startups, stories]);

  const isSearching = searchQuery.trim().length > 0;

  return (
    <div className="min-h-screen bg-tsl-black text-tsl-white">
      {/* 1. HERO */}
      <DiscoveryHero />

      {/* 2. DISCOVERY NAVIGATION & SEARCH BAR */}
      <DiscoveryNavAndSearch
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 3. DYNAMIC CONTENT RENDERING */}
      {isSearching ? (
        /* Search Active View */
        <DiscoverySearchResults
          query={searchQuery}
          builders={searchResults.builders}
          startups={searchResults.startups}
          stories={searchResults.stories}
          onClearSearch={() => setSearchQuery("")}
        />
      ) : activeCategory === "BUILDERS" ? (
        /* Builders Focused View */
        <div className="space-y-0">
          <BuildersToWatch builders={builders} />
          <UnderTheLens />
        </div>
      ) : activeCategory === "STARTUPS" ? (
        /* Startups Focused View */
        <div className="space-y-0">
          <StartupsToExplore startups={startups} />
          <UnderTheLens />
        </div>
      ) : activeCategory === "STORIES" ? (
        /* Stories Focused View */
        <div className="space-y-0">
          <FromTheLens stories={stories} />
          <UnderTheLens />
        </div>
      ) : (
        /* "ALL" - Balanced Full Editorial Discovery View */
        <div className="space-y-0">
          {/* 3. TRENDING NOW */}
          <TrendingNow
            builder={trendingBuilder}
            startup={trendingStartup}
            story={trendingStory}
          />

          {/* 4. BUILDERS TO WATCH (Light Editorial Rhythm) */}
          <BuildersToWatch builders={builders} />

          {/* 5. UNDER THE LENS (Signature Dark Vertical List) */}
          <UnderTheLens />

          {/* 6. STARTUPS TO EXPLORE */}
          <StartupsToExplore startups={startups} />

          {/* 7. FROM THE LENS */}
          <FromTheLens stories={stories} />
        </div>
      )}

      {/* 8. JOIN THE LENS (Always visible conversion footer) */}
      <DiscoveryJoinLens />
    </div>
  );
}
