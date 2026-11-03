"use client";

import { motion } from "framer-motion";
import { Search, X, ChevronDown, RotateCcw } from "lucide-react";
import {
  SectorCategory,
  JourneyStage,
  SECTOR_CATEGORIES,
  JOURNEY_STAGES,
  COUNTRIES,
} from "@/data/startupsStoryData";

interface StartupsFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: SectorCategory;
  onSelectCategory: (category: SectorCategory) => void;
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
  selectedStage: JourneyStage | "All Stages";
  onSelectStage: (stage: JourneyStage | "All Stages") => void;
  filteredCount: number;
  totalCount: number;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
}

export default function StartupsFilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedCountry,
  onSelectCountry,
  selectedStage,
  onSelectStage,
  filteredCount,
  totalCount,
  onResetFilters,
  hasActiveFilters,
}: StartupsFilterBarProps) {
  return (
    <div className="space-y-6 mb-12">
      {/* 1. Search Bar & Dropdowns Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 items-center">
        
        {/* Search Input (6 cols on lg) */}
        <div className="lg:col-span-6 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search by problem, city, or founder name..."
            className="w-full pl-11 pr-10 py-3.5 bg-white border border-slate-200 rounded-xl text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all font-sans shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Dropdowns: Country & Stage (6 cols on lg) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          
          {/* Country Dropdown */}
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => onSelectCountry(e.target.value)}
              className="w-full appearance-none bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-4 pr-10 py-3.5 text-xs font-mono uppercase tracking-wider text-slate-700 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all cursor-pointer shadow-xs"
            >
              {COUNTRIES.map((c) => (
                <option key={c.name} value={c.name} className="bg-white text-slate-800">
                  {c.flag} {c.name}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          {/* Journey Stage Dropdown */}
          <div className="relative">
            <select
              value={selectedStage}
              onChange={(e) => onSelectStage(e.target.value as JourneyStage | "All Stages")}
              className="w-full appearance-none bg-white border border-slate-200 hover:border-slate-300 rounded-xl pl-4 pr-10 py-3.5 text-xs font-mono uppercase tracking-wider text-slate-700 focus:outline-none focus:border-[#0284C7] focus:ring-2 focus:ring-[#0284C7]/20 transition-all cursor-pointer shadow-xs"
            >
              <option value="All Stages" className="bg-white text-slate-800">
                ⚡ All Stages
              </option>
              {JOURNEY_STAGES.map((s) => (
                <option key={s.stage} value={s.stage} className="bg-white text-slate-800">
                  {s.stage === "Just Getting Started"
                    ? "🟡 Just Getting Started"
                    : s.stage === "Testing with Real People"
                    ? "🔵 Testing with Real People"
                    : "🟢 Live & Open to Everyone"}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>

      {/* 2. Category Pill Bar (Horizontal Scrollable with Smooth Active Pill) */}
      <div className="relative flex items-center justify-between gap-4 pt-1">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar py-1 w-full">
          {SECTOR_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`relative px-4 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-colors duration-200 cursor-pointer ${
                  isSelected ? "text-white font-semibold" : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategory"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    className="absolute inset-0 bg-[#0284C7] rounded-lg shadow-sm"
                  />
                )}
                {!isSelected && (
                  <div className="absolute inset-0 bg-white border border-slate-200/80 rounded-lg hover:border-slate-300 hover:bg-slate-50/80 transition-colors shadow-xs" />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Results Meta & Clear Filters Row */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-3 border-t border-slate-200">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
          <span>
            SHOWING <strong className="text-slate-900 font-semibold">{filteredCount}</strong> OF{" "}
            <strong className="text-slate-900 font-semibold">{totalCount}</strong> STORIES
          </span>
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center space-x-1.5 text-xs text-slate-500 hover:text-[#0284C7] font-medium transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RESET FILTERS</span>
          </button>
        )}
      </div>
    </div>
  );
}
