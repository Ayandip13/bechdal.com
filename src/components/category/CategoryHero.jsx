"use client";

import React from "react";
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
  Layers,
  Sailboat,
  Dumbbell,
  Briefcase,
  ShoppingBag,
  Leaf,
  Hammer,
  Printer,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

import { CategoryBannerOutlines } from "@/components/banner/FloatingBannerOutlines";
import CategoryVisualGraphic from "./CategoryVisualGraphic";

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
  Sailboat,
  Dumbbell,
  Briefcase,
  ShoppingBag,
  Leaf,
  Hammer,
  Printer,
};

const CATEGORY_THEMES = {
  properties: {
    gradient: "from-slate-950 via-stone-900 to-amber-950/80",
    border: "border-amber-500/30",
    glow1: "bg-amber-500/20",
    glow2: "bg-orange-600/15",
    pillBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    badgeAccent: "text-amber-400",
    label: "Properties & Real Estate",
    tagline: "Verified flats, houses, plots & commercial spaces with 0% brokerage",
  },
  furniture: {
    gradient: "from-slate-950 via-slate-900 to-emerald-950/80",
    border: "border-emerald-500/30",
    glow1: "bg-emerald-500/20",
    glow2: "bg-teal-500/15",
    pillBg: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    badgeAccent: "text-emerald-400",
    label: "Furniture & Home Living",
    tagline: "Quality pre-owned furniture, decor & office furnishings",
  },
  fashion: {
    gradient: "from-slate-950 via-zinc-950 to-purple-950/80",
    border: "border-pink-500/30",
    glow1: "bg-fuchsia-500/20",
    glow2: "bg-purple-600/15",
    pillBg: "bg-fuchsia-500/15 text-fuchsia-300 border-fuchsia-500/30",
    badgeAccent: "text-pink-400",
    label: "Fashion & Lifestyle",
    tagline: "Trendy clothing, footwear, watches & luxury accessories",
  },
  "fitness-gym-music": {
    gradient: "from-slate-950 via-slate-900 to-blue-950/80",
    border: "border-cyan-500/30",
    glow1: "bg-cyan-500/20",
    glow2: "bg-indigo-600/15",
    pillBg: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    badgeAccent: "text-cyan-400",
    label: "Fitness, Gym & Musical Gear",
    tagline: "Commercial gym equipment, weights, instruments & studio gear",
  },
  vehicles: {
    gradient: "from-slate-950 via-neutral-950 to-rose-950/80",
    border: "border-rose-500/30",
    glow1: "bg-rose-500/20",
    glow2: "bg-amber-600/15",
    pillBg: "bg-rose-500/15 text-rose-300 border-rose-500/30",
    badgeAccent: "text-rose-400",
    label: "Vehicles & Automobiles",
    tagline: "Used cars, bikes & scooters from verified local owners",
  },
  mobiles: {
    gradient: "from-slate-950 via-slate-900 to-indigo-950/80",
    border: "border-sky-500/30",
    glow1: "bg-sky-500/20",
    glow2: "bg-indigo-600/15",
    pillBg: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    badgeAccent: "text-sky-400",
    label: "Smartphones & Mobile Tech",
    tagline: "Pre-owned iPhones, Android phones, tablets & accessories",
  },
  electronics: {
    gradient: "from-slate-950 via-slate-900 to-blue-950/80",
    border: "border-blue-500/30",
    glow1: "bg-blue-500/20",
    glow2: "bg-cyan-600/15",
    pillBg: "bg-blue-500/15 text-blue-300 border-blue-500/30",
    badgeAccent: "text-blue-400",
    label: "Consumer Electronics & Laptops",
    tagline: "Laptops, audio, cameras & home appliances at best prices",
  },
  "agricultural-products": {
    gradient: "from-slate-950 via-stone-950 to-emerald-950/80",
    border: "border-yellow-500/30",
    glow1: "bg-yellow-500/20",
    glow2: "bg-emerald-600/15",
    pillBg: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    badgeAccent: "text-yellow-400",
    label: "Agriculture & Farm Machinery",
    tagline: "Tractors, farm implements, seeds & harvest equipment",
  },
  "construction-equipment": {
    gradient: "from-slate-950 via-neutral-950 to-amber-950/80",
    border: "border-amber-500/30",
    glow1: "bg-amber-500/20",
    glow2: "bg-yellow-600/15",
    pillBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    badgeAccent: "text-amber-400",
    label: "Commercial & Construction",
    tagline: "Heavy machinery, industrial tools & commercial equipment",
  },
  pets: {
    gradient: "from-slate-950 via-amber-950/50 to-orange-950/80",
    border: "border-amber-500/30",
    glow1: "bg-amber-500/20",
    glow2: "bg-orange-600/15",
    pillBg: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    badgeAccent: "text-amber-400",
    label: "Pets & Supplies",
    tagline: "Pet food, care accessories & supplies from verified sellers",
  },
  books: {
    gradient: "from-slate-950 via-slate-900 to-teal-950/80",
    border: "border-teal-500/30",
    glow1: "bg-teal-500/20",
    glow2: "bg-emerald-600/15",
    pillBg: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    badgeAccent: "text-teal-400",
    label: "Books, Hobbies & Study",
    tagline: "Novels, exam preparation, board games & instruments",
  },
  services: {
    gradient: "from-slate-950 via-slate-900 to-violet-950/80",
    border: "border-violet-500/30",
    glow1: "bg-violet-500/20",
    glow2: "bg-purple-600/15",
    pillBg: "bg-violet-500/15 text-violet-300 border-violet-500/30",
    badgeAccent: "text-violet-400",
    label: "Services & Repairs",
    tagline: "Trusted local technicians, appliance repairs & cleaning experts",
  },
  jobs: {
    gradient: "from-slate-950 via-slate-900 to-sky-950/80",
    border: "border-sky-500/30",
    glow1: "bg-sky-500/20",
    glow2: "bg-indigo-600/15",
    pillBg: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    badgeAccent: "text-sky-400",
    label: "Jobs & Opportunities",
    tagline: "Full-time, part-time & freelance verified local openings",
  },
};

const DEFAULT_THEME = {
  gradient: "from-slate-950 via-slate-900 to-slate-950",
  border: "border-slate-800",
  glow1: "bg-primary/20",
  glow2: "bg-secondary/15",
  pillBg: "bg-white/10 text-secondary border-white/15",
  badgeAccent: "text-secondary",
  label: "Category Marketplace",
  tagline: "Discover high quality pre-owned products at the best prices.",
};

export default function CategoryHero({ category, totalCount }) {
  const IconComponent = (category && ICON_MAP[category.icon]) || Package;
  const currentSlug = category?.slug?.toLowerCase()?.trim() || "";
  const theme = CATEGORY_THEMES[currentSlug] || DEFAULT_THEME;

  return (
    <div className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r ${theme.gradient} text-white p-4 xs:p-5 sm:p-7 lg:p-8 shadow-md border ${theme.border} transition-all duration-300`}>
      {/* Dynamic Ambient Background Glow Elements */}
      <div className={`absolute top-0 right-0 -mt-16 -mr-16 w-64 sm:w-80 h-64 sm:h-80 rounded-full ${theme.glow1} blur-3xl pointer-events-none`} />
      <div className={`absolute bottom-0 left-1/3 -mb-16 w-64 sm:w-80 h-64 sm:h-80 rounded-full ${theme.glow2} blur-3xl pointer-events-none`} />

      {/* Floating Outline SVG Accessories Scene - Auto routes to category-specific neon SVGs */}
      <CategoryBannerOutlines categorySlug={category?.slug} className="opacity-70" />

      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 lg:gap-8">
        <div className="max-w-2xl flex-1">
          {/* Category Chip Tag */}
          <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 backdrop-blur-md ${theme.pillBg}`}>
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>{theme.label}</span>
          </div>

          {/* Heading */}
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white mb-2 leading-tight">
            {category?.title || "Explore Category"}
          </h1>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-xl">
            {category?.subtitle || theme.tagline}
          </p>

          {/* Statistics and Badges */}
          <div className="mt-3.5 xs:mt-4 flex flex-wrap items-center gap-2.5 xs:gap-3 text-xs sm:text-sm text-slate-300 font-medium">
            <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-xs">
              <Layers className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary-light shrink-0" />
              <span><strong className="text-white font-bold">{totalCount || 0}</strong> Active Listings</span>
            </div>

            <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700/60 shadow-xs text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-emerald-400" />
              <span>Verified Sellers</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-slate-400 text-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-secondary shrink-0" />
              <span>0% Platform Commission</span>
            </div>
          </div>
        </div>

        {/* Dedicated Animated Visual Showcase Graphic */}
        <div className="w-full md:w-auto flex justify-center md:justify-end shrink-0 self-center md:self-auto pt-2 md:pt-0">
          <CategoryVisualGraphic
            slug={category?.slug}
            title={category?.title}
            IconComponent={IconComponent}
          />
        </div>
      </div>
    </div>
  );
}
