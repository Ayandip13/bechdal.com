"use client";

import { useMemo } from "react";

export default function PriceSlider({ minPrice, maxPrice, onChange, categorySlug = "all" }) {
  
  const presets = useMemo(() => {
    const slug = categorySlug?.toLowerCase() || "all";
    
    if (slug === "vehicles" || slug === "properties") {
      return [
        { label: "Under ₹1L", min: "", max: "100000" },
        { label: "₹1L - ₹5L", min: "100000", max: "500000" },
        { label: "₹5L - ₹10L", min: "500000", max: "1000000" },
        { label: "₹10L - ₹20L", min: "1000000", max: "2000000" },
        { label: "Above ₹20L", min: "2000000", max: "" },
      ];
    }
    
    if (slug === "electronics" || slug === "mobiles") {
      return [
        { label: "Under ₹5k", min: "", max: "5000" },
        { label: "₹5k - ₹15k", min: "5000", max: "15000" },
        { label: "₹15k - ₹30k", min: "15000", max: "30000" },
        { label: "₹30k - ₹75k", min: "30000", max: "75000" },
        { label: "Above ₹75k", min: "75000", max: "" },
      ];
    }
    
    // Default categories (Books, Pets, Pet Products, Fashion, Agriculture, Office, etc.)
    return [
      { label: "Under ₹500", min: "", max: "500" },
      { label: "₹500 - ₹1k", min: "500", max: "1000" },
      { label: "₹1k - ₹5k", min: "1000", max: "5000" },
      { label: "₹5k - ₹10k", min: "5000", max: "10000" },
      { label: "Above ₹10k", min: "10000", max: "" },
    ];
  }, [categorySlug]);

  return (
    <div className="space-y-3 pt-1">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <span className="absolute left-2.5 top-2 text-xs text-text-muted dark:text-slate-400 font-semibold select-none">₹</span>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => onChange(e.target.value, maxPrice)}
            className="w-full pl-6 pr-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-700/80 border border-border dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400 font-medium transition-colors"
          />
        </div>
        <span className="text-xs text-text-muted dark:text-slate-400 font-medium select-none">to</span>
        <div className="relative flex-1">
          <span className="absolute left-2.5 top-2 text-xs text-text-muted dark:text-slate-400 font-semibold select-none">₹</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => onChange(minPrice, e.target.value)}
            className="w-full pl-6 pr-2 py-1.5 text-xs bg-slate-50 dark:bg-slate-700/80 border border-border dark:border-slate-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-slate-800 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-400 font-medium transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 pt-1">
        {presets.map((preset, idx) => {
          const isActive = minPrice === preset.min && maxPrice === preset.max;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onChange(preset.min, preset.max)}
              className={`text-[11px] font-semibold py-1.5 px-2 rounded-lg border transition-all text-center truncate cursor-pointer select-none ${
                isActive
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-slate-50 dark:bg-slate-700/70 text-slate-700 dark:text-slate-200 border-border dark:border-slate-600/80 hover:bg-slate-100 dark:hover:bg-slate-600 hover:text-primary dark:hover:text-blue-400"
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
