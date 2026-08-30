"use client";

import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { nearYouAds } from "@/constants/dummyData";

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
          className="hidden sm:flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {nearYouAds.map((listing) => (
          <ProductCard key={listing.id} {...listing} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-4 text-center">
        <Link
          href="/category/mobiles"
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto"
        >
          <span>View All Nearby Deals</span>
          <ArrowRight className="w-4 h-4 text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
