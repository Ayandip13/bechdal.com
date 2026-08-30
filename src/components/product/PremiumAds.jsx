"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { premiumAds } from "@/constants/dummyData";

export default function PremiumAds() {
  return (
    <section className="w-full py-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>Premium Ads</span>
          <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-widest text-amber-700 dark:text-amber-300 bg-amber-100 dark:bg-amber-950/60 px-2 py-0.5 rounded-md border border-amber-200 dark:border-amber-800/40">
            <Sparkles size={11} className="fill-amber-500 text-amber-500 dark:fill-amber-400 dark:text-amber-400" /> Featured
          </span>
        </h2>
        <Link
          href="/category/vehicles"
          className="hidden sm:flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
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
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto"
        >
          <span>View All Premium Ads</span>
          <ArrowRight className="w-4 h-4 text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
