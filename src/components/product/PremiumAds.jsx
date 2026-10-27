"use client";

import Link from "next/link";
import { ArrowRight, Award } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { premiumAds } from "@/constants/dummyData";
import { AnimatedExploreActionIcon, AnimatedActionArrow } from "@/components/common/ActionAnimatedIcons";

export default function PremiumAds() {
  return (
    <section className="w-full py-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>Premium Ads</span>
          <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/40">
            <Award size={11} className="text-amber-500 dark:text-amber-400" /> Featured
          </span>
        </h2>
        <Link
          href="/category/vehicles"
          className="hidden sm:flex items-center gap-1.5 text-primary dark:text-blue-400 text-xs sm:text-sm font-extrabold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0 group"
        >
          <span>View All</span>
          <AnimatedActionArrow size={14} />
        </Link>
      </div>

      {/* Product Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {premiumAds.map((listing) => (
          <ProductCard key={listing.id} {...listing} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-4 text-center">
        <Link
          href="/category/vehicles"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-extrabold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto shadow-2xs group btn-shimmer hover:scale-102 active:scale-98"
        >
          <AnimatedExploreActionIcon size={16} />
          <span>View All Premium Ads</span>
          <AnimatedActionArrow size={14} className="text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
