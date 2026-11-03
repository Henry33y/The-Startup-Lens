"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchX, RotateCcw, Sparkles } from "lucide-react";
import StartupsHeader from "./StartupsHeader";
import StartupsFilterBar from "./StartupsFilterBar";
import StoryCard from "./StoryCard";
import QuickStoryDrawer from "./QuickStoryDrawer";
import {
  STORY_STARTUPS,
  StoryStartup,
  SectorCategory,
  JourneyStage,
} from "@/data/startupsStoryData";

export default function StartupsDirectory() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<SectorCategory>("All Ideas");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedStage, setSelectedStage] = useState<JourneyStage | "All Stages">("All Stages");

  // Selected startup for slide-over Quick Story drawer
  const [selectedStartup, setSelectedStartup] = useState<StoryStartup | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Cheer state tracking (startupId -> { count: number, isCheered: boolean })
  const [cheersState, setCheersState] = useState<Record<string, { count: number; isCheered: boolean }>>(() => {
    const initial: Record<string, { count: number; isCheered: boolean }> = {};
    STORY_STARTUPS.forEach((s) => {
      initial[s.id] = { count: s.cheersCount, isCheered: false };
    });
    return initial;
  });

  // Handle URL query param deep linking (e.g. /startups?story=kudopos)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const storySlug = params.get("story");
      if (storySlug) {
        const found = STORY_STARTUPS.find(
          (s) => s.slug.toLowerCase() === storySlug.toLowerCase()
        );
        if (found) {
          setSelectedStartup(found);
          setIsDrawerOpen(true);
        }
      }
    }
  }, []);

  const handleCheer = (startupId: string) => {
    setCheersState((prev) => {
      const current = prev[startupId] || { count: 0, isCheered: false };
      const nextIsCheered = !current.isCheered;
      return {
        ...prev,
        [startupId]: {
          count: nextIsCheered ? current.count + 1 : current.count - 1,
          isCheered: nextIsCheered,
        },
      };
    });
  };

  const handleOpenDrawer = (startup: StoryStartup) => {
    setSelectedStartup(startup);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All Ideas");
    setSelectedCountry("All Countries");
    setSelectedStage("All Stages");
  };

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    selectedCategory !== "All Ideas" ||
    selectedCountry !== "All Countries" ||
    selectedStage !== "All Stages";

  // Filter logic
  const filteredStartups = useMemo(() => {
    return STORY_STARTUPS.filter((startup) => {
      // 1. Category filter
      if (selectedCategory !== "All Ideas") {
        const matchesPrimary = startup.category === selectedCategory;
        const matchesAdditional = startup.additionalCategories?.includes(selectedCategory);
        if (!matchesPrimary && !matchesAdditional) return false;
      }

      // 2. Country filter
      if (selectedCountry !== "All Countries") {
        if (startup.country.toLowerCase() !== selectedCountry.toLowerCase()) return false;
      }

      // 3. Stage filter
      if (selectedStage !== "All Stages") {
        if (startup.stage !== selectedStage) return false;
      }

      // 4. Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const inName = startup.name.toLowerCase().includes(q);
        const inOneLiner = startup.oneLiner.toLowerCase().includes(q);
        const inEverydayReality = startup.everydayReality.toLowerCase().includes(q);
        const inCity = startup.city.toLowerCase().includes(q);
        const inCountry = startup.country.toLowerCase().includes(q);
        const inFounders = startup.founders.some(
          (f) =>
            f.name.toLowerCase().includes(q) ||
            f.role.toLowerCase().includes(q) ||
            f.context.toLowerCase().includes(q)
        );
        if (!inName && !inOneLiner && !inEverydayReality && !inCity && !inCountry && !inFounders) {
          return false;
        }
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedCountry, selectedStage]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#0284C7] selection:text-white pb-28">
      {/* 1. Header */}
      <StartupsHeader />

      {/* 2. Directory Content Container */}
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 relative z-10">
        
        {/* Interactive Filter & Search Bar */}
        <StartupsFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedCountry={selectedCountry}
          onSelectCountry={setSelectedCountry}
          selectedStage={selectedStage}
          onSelectStage={setSelectedStage}
          filteredCount={filteredStartups.length}
          totalCount={STORY_STARTUPS.length}
          onResetFilters={handleResetFilters}
          hasActiveFilters={hasActiveFilters}
        />

        {/* 3. Magazine Story Cards Grid (1 col on mobile, 2 cols on lg) */}
        {filteredStartups.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredStartups.map((startup) => {
                const currentCheer = cheersState[startup.id] || {
                  count: startup.cheersCount,
                  isCheered: false,
                };
                return (
                  <StoryCard
                    key={startup.id}
                    startup={startup}
                    onOpenDrawer={handleOpenDrawer}
                    onCheer={handleCheer}
                    isCheered={currentCheer.isCheered}
                    cheersCount={currentCheer.count}
                  />
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          /* Empty Search State */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl bg-white border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto text-slate-500">
              <SearchX className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display text-xl font-bold uppercase tracking-tight text-slate-900">
                No Founder Stories Found
              </h3>
              <p className="text-xs text-slate-600 font-sans leading-relaxed">
                We couldn&apos;t find any startup stories matching your current filters. Try relaxing your search terms or clearing filters.
              </p>
            </div>
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-[#0284C7] text-white font-display font-bold text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset All Filters</span>
            </button>
          </motion.div>
        )}

      </div>

      {/* 4. Slide-Over Quick Story Drawer */}
      <QuickStoryDrawer
        startup={selectedStartup}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
        onCheer={handleCheer}
        isCheered={selectedStartup ? Boolean(cheersState[selectedStartup.id]?.isCheered) : false}
        cheersCount={selectedStartup ? cheersState[selectedStartup.id]?.count ?? selectedStartup.cheersCount : 0}
      />
    </div>
  );
}

