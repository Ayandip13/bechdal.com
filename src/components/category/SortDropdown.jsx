"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowUpDown, ChevronDown, Check } from "lucide-react";

export default function SortDropdown({ selectedSort, onSortChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Price Low to High", value: "price_asc" },
    { label: "Price High to Low", value: "price_desc" },
    { label: "Most Viewed", value: "most_viewed" },
    { label: "Popular", value: "popular" },
    { label: "Featured", value: "featured" },
    { label: "Nearest", value: "nearest" },
    { label: "Premium Listings", value: "premium" },
  ];

  const currentOption = sortOptions.find((opt) => opt.value === selectedSort) || sortOptions[0];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-between gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors shadow-xs"
      >
        <ArrowUpDown className="w-3.5 h-3.5 text-text-muted dark:text-slate-400 shrink-0" />
        <span className="hidden sm:inline text-text-muted dark:text-slate-400 font-normal">Sort:</span>
        <span className="text-slate-900 dark:text-white font-bold">{currentOption.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-text-muted dark:text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop Dropdown Menu */}
      {isOpen && (
        <div className="hidden sm:block absolute right-0 mt-2 w-48 rounded-xl bg-white dark:bg-slate-800 border border-border/80 dark:border-slate-700 shadow-lg z-30 py-1 divide-y divide-border/40 dark:divide-slate-700/60 animate-fadeIn">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-text-muted dark:text-slate-400 bg-slate-50/50 dark:bg-slate-700/40">
            Sort Listings By
          </div>
          <div className="py-1">
            {sortOptions.map((option) => {
              const isSelected = option.value === selectedSort;
              return (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onSortChange(option.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-primary/10 dark:bg-blue-500/15 text-primary dark:text-blue-400 font-bold"
                      : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700/80 font-medium"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-primary dark:text-blue-400 stroke-[3]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Mobile Bottom Sheet overlay */}
      {isOpen && (
        <div className="sm:hidden fixed inset-0 z-[100] flex items-end justify-center animate-in fade-in duration-200">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" 
            onClick={() => setIsOpen(false)}
          />
          {/* Bottom Sheet Drawer */}
          <div className="relative w-full bg-white dark:bg-slate-900 rounded-t-2xl shadow-xl z-10 p-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-250 select-none pb-8 text-left">
            {/* Grab indicator */}
            <div className="w-12 h-1 bg-slate-200 dark:bg-slate-700 rounded-full mx-auto mb-4" />
            
            <h3 className="text-xs font-black text-slate-800 dark:text-slate-100 uppercase tracking-wider mb-3">
              Sort Listings By
            </h3>
            
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {sortOptions.map((option) => {
                const isSelected = option.value === selectedSort;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onSortChange(option.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left py-3.5 px-1 text-xs flex items-center justify-between transition-colors font-bold ${
                      isSelected
                        ? "text-primary dark:text-blue-400"
                        : "text-slate-700 dark:text-slate-200 active:bg-slate-50 dark:active:bg-slate-800"
                    }`}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-primary dark:text-blue-400 stroke-[3]" />}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
