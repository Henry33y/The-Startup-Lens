"use client";

import { useRef } from "react";
import { Search, X } from "lucide-react";

export type DiscoveryCategory = "ALL" | "BUILDERS" | "STARTUPS" | "STORIES";

interface DiscoveryNavAndSearchProps {
  activeCategory: DiscoveryCategory;
  onCategoryChange: (category: DiscoveryCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CATEGORIES: { id: DiscoveryCategory; label: string }[] = [
  { id: "ALL", label: "ALL" },
  { id: "BUILDERS", label: "BUILDERS" },
  { id: "STARTUPS", label: "STARTUPS" },
  { id: "STORIES", label: "STORIES" },
];

export default function DiscoveryNavAndSearch({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: DiscoveryNavAndSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onSearchChange("");
    inputRef.current?.focus();
  };

  return (
    <section className="bg-tsl-black border-b border-tsl-dark-grey/50 sticky top-[68px] sm:top-[76px] z-30 backdrop-blur-md bg-tsl-black/95">
      <div className="max-w-container mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-4 sm:py-5 flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6">
        {/* Editorial Category Navigation */}
        <nav
          aria-label="Discovery categories"
          className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto no-scrollbar py-1"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(cat.id)}
                className={`group relative text-xs sm:text-sm font-mono tracking-widest uppercase transition-colors whitespace-nowrap py-1 cursor-pointer select-none ${
                  isActive
                    ? "text-tsl-blue font-bold"
                    : "text-tsl-white-soft/70 hover:text-tsl-white"
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                {/* Active Cyan Underline indicator */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-tsl-blue transition-all duration-300 origin-left ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-60"
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Minimal Search Input */}
        <div className="relative w-full md:w-80 lg:w-96">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 w-4 h-4 text-tsl-grey pointer-events-none" />
            <input
              ref={inputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search builders, startups and stories"
              aria-label="Search builders, startups and stories"
              className="w-full bg-tsl-surface/80 hover:bg-tsl-surface border border-tsl-dark-grey focus:border-tsl-blue text-xs sm:text-sm text-tsl-white placeholder:text-tsl-grey pl-10 pr-9 py-2.5 font-sans transition-all focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Clear search"
                className="absolute right-3 p-0.5 text-tsl-grey hover:text-tsl-white focus:outline-none transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
