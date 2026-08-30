"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { 
  Menu, Monitor, Smartphone, Car, Home, Shirt, Armchair, 
  Briefcase, Wrench, Dog, BookOpen, LayoutGrid, ShoppingBag, 
  Leaf, Hammer, Printer
} from "lucide-react";

export default function CategoryNav() {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);
  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  useEffect(() => {
    const el = desktopScrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 0.95;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (el.scrollWidth > el.clientWidth) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 0.95;
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const mainCategories = [
    { name: "Electronics", slug: "electronics", icon: Monitor },
    { name: "Mobiles", slug: "mobiles", icon: Smartphone },
    { name: "Vehicles", slug: "vehicles", icon: Car },
    { name: "Properties", slug: "properties", icon: Home },
    { name: "Furniture", slug: "furniture", icon: Armchair },
    { name: "Fashion", slug: "fashion", icon: Shirt },
    { name: "Jobs", slug: "jobs", icon: Briefcase },
    { name: "Services", slug: "services", icon: Wrench },
    { name: "Pets", slug: "pets", icon: Dog },
    { name: "Books", slug: "books", icon: BookOpen },
  ];

  const moreCategories = [
    { name: "Pet Products", slug: "pet-products", icon: ShoppingBag },
    { name: "Agriculture", slug: "agricultural-products", icon: Leaf },
    { name: "Construction Equipment", slug: "construction-equipment", icon: Hammer },
    { name: "Office Equipment", slug: "office-equipment", icon: Printer },
  ];

  const allCategories = [...mainCategories, ...moreCategories];

  return (
    <div className="bg-white dark:bg-slate-800/90 border-b border-border dark:border-slate-700/80 shadow-xs transition-colors duration-200">
      
      {/* ----------------- DESKTOP LAYOUT ----------------- */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between gap-4">
        {/* All Categories Link */}
        <Link
          href="/category/electronics"
          className="flex items-center gap-1.5 text-primary dark:text-blue-400 font-bold text-xs hover:text-primary-dark transition-colors whitespace-nowrap mr-2 select-none h-8"
        >
          <Menu size={15} />
          All Categories
        </Link>

        {/* Categories List */}
        <div ref={desktopScrollRef} className="flex items-center gap-5 overflow-x-auto overflow-y-hidden hide-scrollbar flex-1 scroll-smooth">
          {mainCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={index} 
                href={`/category/${cat.slug}`} 
                className="flex items-center gap-1.5 text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-primary dark:hover:border-blue-400 h-8"
              >
                <Icon size={13} className="opacity-80" />
                {cat.name}
              </Link>
            );
          })}

          {/* More Categories Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setShowMoreDropdown(true)}
            onMouseLeave={() => setShowMoreDropdown(false)}
          >
            <button 
              className="flex items-center gap-1.5 text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 text-[11px] sm:text-xs font-semibold transition-colors whitespace-nowrap py-1 cursor-pointer focus:outline-none h-8"
            >
              <LayoutGrid size={13} className="opacity-80" />
              <span>More</span>
            </button>

            {showMoreDropdown && (
              <div className="absolute top-[28px] right-0 bg-white dark:bg-slate-800 border border-border dark:border-slate-700 rounded-xl shadow-lg py-2 w-56 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 pb-1 border-b border-slate-100 dark:border-slate-700 text-[9px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400">
                  More Categories
                </div>
                {moreCategories.map((cat, index) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={index}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                      onClick={() => setShowMoreDropdown(false)}
                    >
                      <Icon size={13} className="text-text-muted dark:text-slate-400 opacity-80" />
                      <span>{cat.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ----------------- MOBILE LAYOUT (Horizontally Scrollable) ----------------- */}
      <div className="relative block md:hidden w-full overflow-hidden">
        
        {/* Scroll Container */}
        <div ref={mobileScrollRef} className="overflow-x-auto overflow-y-hidden whitespace-nowrap hide-scrollbar flex items-center gap-3.5 px-4 py-2.5 w-full scroll-smooth">
          {allCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={index} 
                href={`/category/${cat.slug}`} 
                className="flex items-center gap-1 bg-slate-50 dark:bg-slate-700/60 border border-slate-200/60 dark:border-slate-600 px-3 py-1.5 rounded-full text-[10px] sm:text-xs font-bold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-colors whitespace-nowrap shadow-3xs"
              >
                <Icon size={12} className="opacity-85 text-slate-500 dark:text-slate-400" />
                <span>{cat.name}</span>
              </Link>
            );
          })}
        </div>

        {/* Subtle right-side fade indicator for scroll direction */}
        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white dark:from-slate-800 to-transparent pointer-events-none"></div>

      </div>

    </div>
  );
}

