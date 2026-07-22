"use client";

import Link from "next/link";
import { SearchX, RotateCcw, ArrowRight } from "lucide-react";
import { categoryDetails } from "@/constants/categoryData";

export default function EmptyState({ onResetFilters, currentCategorySlug }) {
  const otherCategories = Object.values(categoryDetails)
    .filter((cat) => cat.slug !== currentCategorySlug)
    .slice(0, 4);

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-border shadow-subtle flex flex-col items-center justify-center max-w-2xl mx-auto my-6">
      {/* Visual Icon Illustration */}
      <div className="w-20 h-20 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mb-5 shadow-inner">
        <SearchX className="w-10 h-10 text-primary" strokeWidth={1.5} />
      </div>

      <h3 className="text-xl sm:text-2xl font-extrabold text-text mb-2">
        No products found
      </h3>
      <p className="text-sm text-text-muted max-w-md mb-6 leading-relaxed">
        We couldn’t find any listings matching your active filters or search terms. Try adjusting your filters or clearing them to explore all ads.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {onResetFilters && (
          <button
            type="button"
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-dark transition-all shadow-sm"
          >
            <RotateCcw className="w-4 h-4" /> Clear All Filters
          </button>
        )}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-text text-xs font-semibold rounded-xl hover:bg-slate-200 transition-all"
        >
          Go to Home
        </Link>
      </div>

      {/* Alternative Category Suggestions */}
      {otherCategories.length > 0 && (
        <div className="w-full pt-6 border-t border-border">
          <p className="text-xs font-bold text-text-muted uppercase tracking-wider mb-3">
            Or explore popular categories
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {otherCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-border text-xs font-medium text-text hover:border-primary hover:text-primary transition-colors"
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
