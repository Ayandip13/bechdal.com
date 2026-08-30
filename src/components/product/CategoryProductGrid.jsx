"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";

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
          className="hidden sm:flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer shrink-0"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Grid: 2 cols on mobile, 3 on tablet, 4 on desktop */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      {/* Bottom Button */}
      <div className="mt-3 text-center">
        <Link
          href={`/category/${categorySlug}`}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-bold rounded-xl border border-slate-200/80 dark:border-slate-700/80 transition-all cursor-pointer w-full sm:w-auto"
        >
          <span>Explore {title}</span>
          <ArrowRight className="w-4 h-4 text-primary dark:text-blue-400" />
        </Link>
      </div>
    </section>
  );
}
