"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Star, MapPin, Shield } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { featuredListings } from "@/constants/dummyData";

export default function FeaturedListings() {
  const [activeFilter, setActiveFilter] = useState("Latest");

  const filters = [
    { name: "Latest", icon: Clock },
    { name: "Featured", icon: Star },
    { name: "Near Me", icon: MapPin },
    { name: "Premium", icon: Shield },
  ];

  return (
    <section className="w-full py-2">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Featured Listings
          </h2>
          
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.name;
              return (
                <button
                  key={filter.name}
                  onClick={() => setActiveFilter(filter.name)}
                  className={`flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? "bg-primary text-white shadow-2xs"
                      : "bg-slate-50 dark:bg-slate-800 text-text-muted dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{filter.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <Link
          href="/category/electronics"
          className="hidden sm:flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {featuredListings.map((listing) => (
          <ProductCard key={listing.id} {...listing} />
        ))}
      </div>

      {/* Bottom View All Button */}
      <div className="mt-4 text-center">
        <Link
          href="/category/electronics"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto"
        >
          <span>View All Featured Listings</span>
          <ArrowRight className="w-4 h-4 text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
