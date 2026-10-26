"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronRight, ChevronLeft } from "lucide-react";
import SellerCard from "./SellerCard";
import { AnimatedActionArrow } from "@/components/common/ActionAnimatedIcons";
import { verifiedSellers } from "@/constants/dummyData";

export default function VerifiedSellers() {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  }, []);

  useEffect(() => {
    checkScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollState, { passive: true });
    window.addEventListener("resize", checkScrollState);

    // Support horizontal wheel scrolling
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 5) {
        if (
          (e.deltaY > 0 && el.scrollLeft + el.clientWidth < el.scrollWidth - 5) ||
          (e.deltaY < 0 && el.scrollLeft > 5)
        ) {
          e.preventDefault();
          el.scrollBy({ left: e.deltaY * 1.5, behavior: "smooth" });
        }
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", checkScrollState);
      window.removeEventListener("resize", checkScrollState);
      el.removeEventListener("wheel", onWheel);
    };
  }, [checkScrollState]);

  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = direction === "left" ? -320 : 320;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
    setTimeout(checkScrollState, 350);
  };

  return (
    <section className="w-full py-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Verified Sellers
          </h2>
          <p className="text-[11px] sm:text-xs font-semibold text-text-muted dark:text-slate-400 mt-0.5">
            Top rated & verified community sellers across India
          </p>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <Link href="/sellers" className="flex items-center gap-1.5 text-primary dark:text-blue-400 text-xs sm:text-sm font-extrabold hover:underline transition-all whitespace-nowrap cursor-pointer group">
            <span>View All Sellers</span>
            <AnimatedActionArrow size={14} />
          </Link>

          {/* Header Arrow Controls for Desktop */}
          <div className="hidden sm:flex items-center gap-1.5 ml-1">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              aria-label="Scroll sellers left"
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollLeft
                  ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-2xs hover:scale-105"
                  : "bg-slate-100 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              aria-label="Scroll sellers right"
              className={`w-7 h-7 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                canScrollRight
                  ? "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 shadow-2xs hover:scale-105"
                  : "bg-slate-100 dark:bg-slate-800/40 border-slate-200/50 dark:border-slate-800 text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-50"
              }`}
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Track */}
      <div className="relative group/track">
        {/* Left Floating Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="absolute -left-3 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-100 hover:text-primary dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Left Subtle Fade Mask */}
        {canScrollLeft && (
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none z-10" />
        )}

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 pt-1 snap-x scroll-smooth select-none"
        >
          {verifiedSellers.map((seller) => (
            <div key={seller.id} className="snap-start shrink-0">
              <SellerCard {...seller} />
            </div>
          ))}
        </div>

        {/* Right Floating Arrow */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="absolute -right-3 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-100 hover:text-primary dark:hover:text-blue-400 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Right Subtle Fade Mask */}
        {canScrollRight && (
          <div className="hidden sm:block absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none z-10" />
        )}
      </div>
    </section>
  );
}
