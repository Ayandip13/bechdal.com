import { ChevronRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { premiumAds } from "@/constants/dummyData";

export default function PremiumAds() {
  return (
    <section className="w-full bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 dark:from-amber-500/10 dark:via-slate-900/60 dark:to-amber-500/10 rounded-2xl p-5 sm:p-6 border border-amber-500/20 dark:border-amber-500/30 transition-all">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="text-xl font-black text-text dark:text-white tracking-tight flex items-center gap-2">
          <span>Premium Ads</span>
          <span className="text-[9px] font-black uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded-md border border-amber-500/25">Featured</span>
        </h2>
        <button className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer">
          View All Premium Ads <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
          {premiumAds.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[165px] sm:w-[220px] md:w-[265px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

