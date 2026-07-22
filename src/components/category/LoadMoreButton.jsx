"use client";

import { useState } from "react";
import { Loader2, ArrowDown } from "lucide-react";

export default function LoadMoreButton({ currentCount, totalCount, onLoadMore, hasMore }) {
  const [isLoading, setIsLoading] = useState(false);

  if (!hasMore || totalCount <= currentCount) {
    return (
      <div className="py-8 text-center text-xs text-text-muted font-medium border-t border-border/50 mt-8">
        You've viewed all {totalCount} listings in this category.
      </div>
    );
  }

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      onLoadMore();
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 pt-8 pb-4">
      <p className="text-xs text-text-muted font-medium">
        Showing <strong className="text-text">{currentCount}</strong> of <strong className="text-text">{totalCount}</strong> listings
      </p>

      {/* Progress Bar */}
      <div className="w-48 h-1.5 bg-slate-200 rounded-full overflow-hidden mb-1">
        <div
          className="h-full bg-primary rounded-full transition-all duration-300"
          style={{ width: `${Math.min(100, (currentCount / totalCount) * 100)}%` }}
        />
      </div>

      <button
        type="button"
        disabled={isLoading}
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border hover:border-primary text-text hover:text-primary text-xs sm:text-sm font-bold rounded-xl shadow-subtle hover:shadow-card transition-all disabled:opacity-50 cursor-pointer group"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
            <span>Loading More Listings...</span>
          </>
        ) : (
          <>
            <span>Load More Listings</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </>
        )}
      </button>
    </div>
  );
}
