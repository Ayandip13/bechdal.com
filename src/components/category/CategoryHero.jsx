"use client";

import { 
  Tv, 
  Smartphone, 
  Car, 
  Home, 
  Armchair, 
  Shirt, 
  BookOpen, 
  Wrench, 
  Dog, 
  Package, 
  Sparkles,
  Layers
} from "lucide-react";

const ICON_MAP = {
  Tv,
  Smartphone,
  Car,
  Home,
  Armchair,
  Shirt,
  BookOpen,
  Wrench,
  Dog,
};

export default function CategoryHero({ category, totalCount }) {
  const IconComponent = (category && ICON_MAP[category.icon]) || Package;

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white p-6 sm:p-8 lg:p-10 shadow-sm border border-slate-800">
      {/* Dynamic Ambient Background Elements */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 -mb-12 w-64 h-64 rounded-full bg-secondary/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-secondary mb-3 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Category Marketplace
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
            {category?.title || "Explore Category"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
            {category?.subtitle || "Discover high quality pre-owned products at the best prices."}
          </p>

          <div className="mt-4 flex items-center gap-4 text-xs sm:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60">
              <Layers className="w-4 h-4 text-primary-light" />
              <span><strong className="text-white">{totalCount || 0}</strong> Active Listings</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Verified Sellers Included
            </div>
          </div>
        </div>

        {/* Small Visual Graphic Illustration */}
        <div className="relative shrink-0 hidden md:flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
          <IconComponent className="w-12 h-12 text-secondary" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
