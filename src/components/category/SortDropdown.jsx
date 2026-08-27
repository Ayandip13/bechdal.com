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
        className="inline-flex items-center justify-between gap-2 px-3 py-2 bg-white border border-border rounded-xl text-xs font-semibold text-text hover:bg-slate-50 transition-colors shadow-xs"
      >
        <ArrowUpDown className="w-3.5 h-3.5 text-text-muted shrink-0" />
        <span className="hidden sm:inline text-text-muted font-normal">Sort:</span>
        <span className="text-text font-bold">{currentOption.label}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-text-muted transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Desktop Dropdown Menu */}
      {isOpen && (
        <div className="hidden sm:block absolute right-0 mt-2 w-48 rounded-xl bg-white border border-border/80 shadow-lg z-30 py-1 divide-y divide-border/40 animate-fadeIn">
          <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-text-muted bg-slate-50/50">
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
                      ? "bg-primary/10 text-primary font-bold"
                      : "text-text hover:bg-slate-50 font-medium"
                  }`}
                >
                  <span>{option.label}</span>
                  {isSelected && <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />}
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
          <div className="relative w-full bg-white rounded-t-2xl shadow-xl z-10 p-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-250 select-none pb-8 text-left">
            {/* Grab indicator */}
            <div className="w-12 h-1 bg-slate-200 rounded-full mx-auto mb-4" />
            
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-wider mb-3">
              Sort Listings By
            </h3>
            
            <div className="divide-y divide-slate-100">
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
                        ? "text-primary"
                        : "text-slate-700 active:bg-slate-50"
                    }`}
                  >
                    <span>{option.label}</span>
                    {isSelected && <Check className="w-4 h-4 text-primary stroke-[3]" />}
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
