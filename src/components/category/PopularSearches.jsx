"use client";

import { Tag } from "lucide-react";
import { popularSearchTags } from "@/constants/categoryData";

export default function PopularSearches({ onTagClick, activeQuery = "" }) {
  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-border/70 dark:border-slate-700/80 shadow-subtle mt-8 transition-colors">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-primary dark:text-blue-400">
          <Tag className="w-4 h-4" />
        </div>
        <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white">
          Popular Searches in Marketplace
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {popularSearchTags.map((tag, idx) => {
          const isActive = activeQuery.toLowerCase() === tag.toLowerCase();
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onTagClick && onTagClick(tag)}
              className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer select-none ${
                isActive
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-slate-50 dark:bg-slate-700/60 border-border dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 hover:border-slate-300 dark:hover:border-slate-500 hover:text-primary dark:hover:text-blue-400"
              }`}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
