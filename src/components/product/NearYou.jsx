"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft, MapPin } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { nearYouAds } from "@/constants/dummyData";

export default function NearYou() {
  const scrollRef = useRef(null);

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
    <section className="w-full flex-1 py-2">
      <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Near You
          </h2>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-500/20 px-2 py-0.5 rounded-full">
            <MapPin size={11} /> Kolkata (~5 km)
          </span>
        </div>
        <Link href="/category/mobiles" className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0">
          <span>View All</span> <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative group/nav">
        <div ref={scrollRef} className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-3 pt-1 snap-x scroll-smooth">
          {nearYouAds.map((listing) => (
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



