"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { nearYouAds } from "@/constants/dummyData";
import { AnimatedExploreActionIcon, AnimatedActionArrow } from "@/components/common/ActionAnimatedIcons";

export default function NearYou() {
  return (
    <section className="w-full py-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Near You
          </h2>
          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-500/20 px-2 py-0.5 rounded-full">
            <MapPin size={11} /> Kolkata (~5 km)
          </span>
        </div>
        <Link
          href="/category/mobiles"
          className="hidden sm:flex items-center gap-1.5 text-primary dark:text-blue-400 text-xs sm:text-sm font-extrabold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0 group"
        >
          <span>View All</span>
          <AnimatedActionArrow size={14} />
        </Link>
      </div>

      {/* Product Grid: Exactly 1 row with 3 products */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {nearYouAds.slice(0, 3).map((listing) => (
          <ProductCard key={listing.id} {...listing} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-4 text-center">
        <Link
          href="/category/mobiles"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-extrabold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto shadow-2xs group btn-shimmer hover:scale-102 active:scale-98"
        >
          <AnimatedExploreActionIcon size={16} />
          <span>View All Nearby Deals</span>
          <AnimatedActionArrow size={14} className="text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
