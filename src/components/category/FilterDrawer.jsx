"use client";

import { useEffect } from "react";
import FilterSidebar from "./FilterSidebar";
import { X, Check } from "lucide-react";

export default function FilterDrawer({
  isOpen,
  onClose,
  categoryInfo,
  filters,
  onFilterChange,
  onResetFilters,
  activeFilterCount,
  totalResults,
}) {
  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end lg:hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xs sm:max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 overflow-hidden animate-slideInRight">
        {/* Header */}
        <div className="p-4 border-b border-border flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-lg text-text">Filter Products</h2>
            {activeFilterCount > 0 && (
              <span className="bg-primary text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full text-text-muted hover:text-text hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Filters Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <FilterSidebar
            categoryInfo={categoryInfo}
            filters={filters}
            onFilterChange={onFilterChange}
            onResetFilters={onResetFilters}
            activeFilterCount={activeFilterCount}
          />
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-border bg-white flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              onResetFilters();
            }}
            className="flex-1 py-2.5 px-4 text-xs font-semibold text-text border border-border rounded-xl hover:bg-slate-50 transition-colors text-center"
          >
            Reset All
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 px-4 text-xs font-bold text-white bg-primary hover:bg-primary-dark rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
          >
            <Check className="w-4 h-4" />
            Show ({totalResults})
          </button>
        </div>
      </div>
    </div>
  );
}
