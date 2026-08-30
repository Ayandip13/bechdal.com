"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Clock, Star, MapPin, Shield } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { featuredListings } from "@/constants/dummyData";

export default function FeaturedListings() {
  const scrollRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState("Latest");

  const filters = [
    { name: "Latest", icon: Clock },
    { name: "Featured", icon: Star },
    { name: "Near Me", icon: MapPin },
    { name: "Premium", icon: Shield },
  ];

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -260, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 260, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 mb-3 sm:mb-4">
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

        <Link href="/category/electronics" className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0">
          <span>View All</span> <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative group/nav">
        <div ref={scrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-3 pt-1 snap-x scroll-smooth">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[150px] sm:w-[210px] md:w-[250px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
        
        {/* Left Arrow (Desktop) */}
        <button
          onClick={scrollLeft}
          className="absolute -left-3 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md border border-slate-200 dark:border-slate-700 hidden lg:flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-all opacity-0 group-hover/nav:opacity-100 cursor-pointer z-10"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Right Arrow (Desktop) */}
        <button
          onClick={scrollRight}
          className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-full p-2 shadow-md border border-slate-200 dark:border-slate-700 hidden lg:flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-all opacity-0 group-hover/nav:opacity-100 cursor-pointer z-10"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}



