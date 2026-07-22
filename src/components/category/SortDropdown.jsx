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

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-border/80 shadow-lg z-30 py-1 divide-y divide-border/40 animate-fadeIn">
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
                  className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors ${
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
    </div>
  );
}
