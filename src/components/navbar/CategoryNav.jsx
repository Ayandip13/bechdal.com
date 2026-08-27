"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Menu, Monitor, Smartphone, Car, Home, Shirt, Armchair, 
  Briefcase, Wrench, Dog, BookOpen, LayoutGrid, ShoppingBag, 
  Leaf, Hammer, Printer, Gamepad2, Dumbbell 
} from "lucide-react";

export default function CategoryNav() {
  const [showMoreDropdown, setShowMoreDropdown] = useState(false);

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
    { name: "Agricultural Products", slug: "agricultural-products", icon: Leaf },
    { name: "Construction Equipment", slug: "construction-equipment", icon: Hammer },
    { name: "Office Equipment", slug: "office-equipment", icon: Printer },
    { name: "Kids Accessories", slug: "kids-accessories", icon: Gamepad2 },
    { name: "Fitness & Gym", slug: "fitness-gym-music", icon: Dumbbell },
  ];

  return (
    <div className="bg-white border-b border-border shadow-sm hidden md:block">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
        
        {/* All Categories Dropdown / Link */}
        <Link
          href="/category/electronics"
          className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors whitespace-nowrap mr-2"
        >
          <Menu size={16} />
          All Categories
        </Link>

        {/* Categories List */}
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar flex-1">
          {mainCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={index} 
                href={`/category/${cat.slug}`} 
                className="flex items-center gap-1.5 text-text-muted hover:text-primary text-xs font-semibold transition-colors whitespace-nowrap py-1 border-b-2 border-transparent hover:border-primary"
              >
                <Icon size={14} className="opacity-80" />
                {cat.name}
              </Link>
            );
          })}

          {/* More Categories Dropdown Toggle */}
          <div 
            className="relative"
            onMouseEnter={() => setShowMoreDropdown(true)}
            onMouseLeave={() => setShowMoreDropdown(false)}
          >
            <button 
              className="flex items-center gap-1.5 text-text-muted hover:text-primary text-xs font-semibold transition-colors whitespace-nowrap py-1 cursor-pointer focus:outline-none"
            >
              <LayoutGrid size={14} className="opacity-80" />
              <span>More</span>
            </button>

            {/* Dropdown Panel */}
            {showMoreDropdown && (
              <div className="absolute top-[26px] right-0 bg-white border border-border rounded-xl shadow-lg py-2.5 w-60 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                <div className="px-3 pb-1.5 mb-1.5 border-b border-slate-100 text-[10px] uppercase tracking-wider font-extrabold text-text-muted">
                  Additional Categories
                </div>
                {moreCategories.map((cat, index) => {
                  const Icon = cat.icon;
                  return (
                    <Link
                      key={index}
                      href={`/category/${cat.slug}`}
                      className="flex items-center gap-2.5 px-4 py-2 text-xs font-semibold text-text-muted hover:text-primary hover:bg-slate-50 transition-colors"
                      onClick={() => setShowMoreDropdown(false)}
                    >
                      <Icon size={14} className="text-text-muted opacity-80" />
                      <span>{cat.name}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
