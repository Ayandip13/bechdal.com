"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import {
  AnimatedExploreActionIcon,
  AnimatedCarActionIcon,
  AnimatedGadgetActionIcon,
  AnimatedActionArrow,
} from "@/components/common/ActionAnimatedIcons";

export default function CategoryProductGrid({ title, subtitle, categorySlug, products = [] }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="w-full py-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[11px] sm:text-xs font-semibold text-text-muted dark:text-slate-400">
              {subtitle}
            </p>
          )}
        </div>

        <Link
          href={`/category/${categorySlug}`}
          className="hidden sm:flex items-center gap-1.5 text-primary dark:text-blue-400 text-xs sm:text-sm font-extrabold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0 group"
        >
          <span>View All</span>
          <AnimatedActionArrow size={14} />
        </Link>
      </div>

      {/* Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Bottom Explore Button */}
      <div className="mt-3 text-center">
        <Link
          href={`/category/${categorySlug}`}
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200/80 dark:hover:bg-slate-700/80 text-slate-800 dark:text-slate-100 text-xs sm:text-sm font-extrabold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto shadow-2xs group btn-shimmer hover:scale-102 active:scale-98"
        >
          {categorySlug === "vehicles" && <AnimatedCarActionIcon size={16} />}
          {categorySlug === "mobiles" && <AnimatedGadgetActionIcon size={16} />}
          {categorySlug !== "vehicles" && categorySlug !== "mobiles" && (
            <AnimatedExploreActionIcon size={16} />
          )}
          <span>Explore {title}</span>
          <AnimatedActionArrow size={14} className="text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
