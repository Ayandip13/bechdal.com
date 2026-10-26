"use client";

import Link from "next/link";
import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { 
  Menu, Monitor, Smartphone, Car, Home, Shirt, Armchair, 
  Briefcase, Wrench, Dog, BookOpen, ShoppingBag, 
  Leaf, Hammer, Printer, Sailboat, Dumbbell, ChevronLeft, ChevronRight
} from "lucide-react";

export default function CategoryNav() {
  const pathname = usePathname();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const categories = [
    { name: "Electronics", slug: "electronics", icon: Monitor },
    { name: "Mobiles", slug: "mobiles", icon: Smartphone },
    { name: "Vehicles", slug: "vehicles", icon: Car },
    { name: "Properties", slug: "properties", icon: Home },
    { name: "Furniture", slug: "furniture", icon: Armchair },
    { name: "Fashion", slug: "fashion", icon: Shirt },
    { name: "Boats", slug: "boats", icon: Sailboat },
    { name: "Gym Equipments", slug: "gym-equipment", icon: Dumbbell },
    { name: "Jobs", slug: "jobs", icon: Briefcase },
    { name: "Services", slug: "services", icon: Wrench },
    { name: "Pets", slug: "pets", icon: Dog },
    { name: "Books", slug: "books", icon: BookOpen },
    { name: "Pet Products", slug: "pet-products", icon: ShoppingBag },
    { name: "Agriculture", slug: "agricultural-products", icon: Leaf },
    { name: "Construction Equipment", slug: "construction-equipment", icon: Hammer },
    { name: "Office Equipment", slug: "office-equipment", icon: Printer },
  ];

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 6);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 6);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();

    const handleScroll = () => updateScrollState();
    el.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateScrollState);

    const onWheel = (e) => {
      if (el.scrollWidth > el.clientWidth) {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          el.scrollLeft += e.deltaY * 0.95;
        }
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollState);
      el.removeEventListener("wheel", onWheel);
    };
  }, [updateScrollState]);

  const handleScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = direction === "left" ? -280 : 280;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="bg-white dark:bg-slate-800/90 border-b border-border dark:border-slate-700/80 shadow-xs transition-colors duration-200">
      <div className="relative max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 group">
        
        {/* Left Scroll Arrow (Desktop) */}
        {canScrollLeft && (
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/95 dark:bg-slate-700/95 border border-slate-200 dark:border-slate-600 shadow-md items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 hover:text-primary transition-all cursor-pointer"
          >
            <ChevronLeft size={16} />
          </button>
        )}

        {/* Left Fade Gradient */}
        {canScrollLeft && (
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white dark:from-slate-800/90 to-transparent pointer-events-none z-10" />
        )}

        {/* Single Scroll Container (same as mobile view) */}
        <div 
          ref={scrollRef} 
          className="overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar flex items-center gap-2 sm:gap-2.5 py-2.5 w-full scroll-smooth select-none"
        >
          {/* All Categories Pill */}
          <Link
            href="/category/electronics"
            className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-3xs shrink-0 select-none ${
              pathname === "/category/electronics" || pathname === "/search"
                ? "bg-primary text-white dark:bg-blue-600 shadow-sm"
                : "bg-primary/10 dark:bg-blue-500/15 text-primary dark:text-blue-400 border border-primary/25 dark:border-blue-500/30 hover:bg-primary hover:text-white dark:hover:bg-blue-600 dark:hover:text-white"
            }`}
          >
            <Menu size={13} className="shrink-0" />
            <span>All Categories</span>
          </Link>

          {/* Category Pills */}
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = pathname === `/category/${cat.slug}`;
            return (
              <Link 
                key={cat.slug} 
                href={`/category/${cat.slug}`} 
                className={`flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shadow-3xs shrink-0 select-none ${
                  isActive
                    ? "bg-primary text-white border border-primary dark:bg-blue-600 dark:border-blue-500 shadow-sm"
                    : "bg-slate-50 dark:bg-slate-700/60 border border-slate-200/70 dark:border-slate-600/70 text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 hover:border-primary/40 dark:hover:border-blue-500/40 hover:bg-white dark:hover:bg-slate-700"
                }`}
              >
                <Icon size={13} className={`shrink-0 ${isActive ? "opacity-100" : "opacity-80"}`} />
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Right Fade Gradient */}
        {canScrollRight && (
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-12 bg-gradient-to-l from-white dark:from-slate-800/90 to-transparent pointer-events-none z-10" />
        )}

        {/* Right Scroll Arrow (Desktop) */}
        {canScrollRight && (
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/95 dark:bg-slate-700/95 border border-slate-200 dark:border-slate-600 shadow-md items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-600 hover:text-primary transition-all cursor-pointer"
          >
            <ChevronRight size={16} />
          </button>
        )}

      </div>
    </div>
  );
}

