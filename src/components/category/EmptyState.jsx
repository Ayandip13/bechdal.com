"use client";

import Link from "next/link";
import { SearchX, RotateCcw, ArrowRight } from "lucide-react";
import { categoryDetails } from "@/constants/categoryData";

export default function EmptyState({ onResetFilters, currentCategorySlug }) {
  const otherCategories = Object.values(categoryDetails)
    .filter((cat) => cat.slug !== currentCategorySlug)
    .slice(0, 4);

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-8 sm:p-12 text-center border border-border/70 dark:border-slate-700/80 shadow-subtle flex flex-col items-center justify-center max-w-2xl mx-auto my-6 transition-colors">
      {/* Visual Icon Illustration */}
      <div className="w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 flex items-center justify-center mb-5 shadow-inner">
        <SearchX className="w-10 h-10 text-primary dark:text-blue-400" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-2">
        No products found
      </h3>
      <p className="text-sm text-text-muted dark:text-slate-400 max-w-md mb-6 leading-relaxed">
        We couldn’t find any listings matching your active filters or search terms. Try adjusting your filters or clearing them to explore all ads.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-all shadow-sm cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" /> Clear All Filters
          </button>
        )}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold rounded-xl hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
        >
          Go to Home
        </Link>
      </div>

      {/* Alternative Category Suggestions */}
      {otherCategories.length > 0 && (
        <div className="w-full pt-6 border-t border-border dark:border-slate-700/70">
          <p className="text-xs font-bold text-text-muted dark:text-slate-400 uppercase tracking-wider mb-3">
            Or explore popular categories
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-700/60 border border-border dark:border-slate-600 text-xs font-semibold text-slate-700 dark:text-slate-200 hover:border-primary dark:hover:border-blue-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
              >
                <span>{cat.title}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
