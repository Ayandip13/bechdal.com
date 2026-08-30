"use client";

import { useRef } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import ProductCard from "../cards/ProductCard";

export default function CategoryProductRail({ title, categorySlug, products = [], subtitle }) {
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

  if (!products || products.length === 0) return null;

  return (
    <section className="w-full py-2">
      <div className="flex items-center justify-between gap-4 mb-3 sm:mb-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] sm:text-xs font-semibold text-text-muted dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <Link
          href={`/category/${categorySlug}`}
          className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>View All</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="relative group/nav">
        {/* Scrollable Rail */}
        <div
          ref={scrollRef}
          className="flex gap-3 sm:gap-4 overflow-x-auto hide-scrollbar pb-3 pt-1 snap-x scroll-smooth"
        >
          {products.map((product) => (
            <div key={product.id} className="snap-start shrink-0 w-[150px] sm:w-[210px] md:w-[250px]">
              <ProductCard {...product} />
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
