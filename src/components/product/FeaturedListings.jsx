import { ChevronRight, Clock, Star, MapPin, Shield } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { featuredListings } from "@/constants/dummyData";

export default function FeaturedListings() {
  const filters = [
    { name: "Latest", icon: Clock, active: true },
    { name: "Featured", icon: Star, active: false },
    { name: "Near Me", icon: MapPin, active: false },
    { name: "Premium", icon: Shield, active: false },
  ];

  return (
    <section className="w-full py-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
          <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight">
            Featured Listings
          </h2>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap transition-all cursor-pointer ${
                    filter.active
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white dark:bg-slate-800/80 text-text-muted dark:text-slate-300 border border-border dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-700 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {filter.name}
                </button>
              );
            })}
          </div>
        </div>

        <button className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer">
          View All Listings <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative group/nav">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 pt-1 snap-x">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[165px] sm:w-[220px] md:w-[265px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
        
        {/* Right Arrow Navigation (Desktop) */}
        <button className="absolute -right-3 top-1/2 -translate-y-1/2 bg-white dark:bg-slate-800 rounded-full p-2.5 shadow-lg border border-border dark:border-slate-700 hidden lg:flex items-center justify-center text-text-muted dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 transition-all opacity-0 group-hover/nav:opacity-100 cursor-pointer">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}


