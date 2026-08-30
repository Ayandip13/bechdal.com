"use client";

import ProductCard from "@/components/cards/ProductCard";

export default function ProductGrid({ products, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4 w-full">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-2xs flex flex-col h-[240px] animate-pulse"
          >
            <div className="w-full aspect-[4/3] max-h-[130px] bg-slate-200 dark:bg-slate-700" />
            <div className="p-3 space-y-2 flex-1 flex flex-col justify-between">
              <div className="space-y-1.5">
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-3/4" />
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
              </div>
              <div className="pt-1.5 border-t border-slate-100 dark:border-slate-700/50">
                <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-2.5 sm:gap-4 lg:gap-5 w-full">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
