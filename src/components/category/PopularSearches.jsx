"use client";

import { Tag } from "lucide-react";
import { popularSearchTags } from "@/constants/categoryData";

export default function PopularSearches({ onTagClick, activeQuery = "" }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border shadow-subtle mt-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="p-1.5 rounded-lg bg-blue-50 text-primary">
          <Tag className="w-4 h-4" />
        </div>
        <h3 className="font-bold text-sm sm:text-base text-text">
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
              className={`text-xs font-medium px-3 py-1.5 rounded-full border transition-all cursor-pointer ${
                isActive
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-slate-50 border-border text-slate-700 hover:bg-slate-100 hover:border-slate-300 hover:text-text"
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
