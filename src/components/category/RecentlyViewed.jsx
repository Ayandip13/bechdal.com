"use client";

import ProductCard from "@/components/cards/ProductCard";
import { nearYouAds, featuredListings } from "@/constants/dummyData";

export default function RecentlyViewed() {
  // Combine sample listings for recently viewed items
  const recentProducts = [...nearYouAds, ...featuredListings].slice(0, 6);

  return (
    <div className="mt-8 bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-border/70 dark:border-slate-700/80 shadow-subtle transition-colors">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">Recently Viewed Listings</h2>
          <p className="text-xs text-text-muted dark:text-slate-400 mt-0.5">Based on your recent browsing history</p>
        </div>
      </div>
      
      <div className="relative group/recent">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2 snap-x">
          {recentProducts.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[230px] sm:w-[250px] md:w-[270px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
