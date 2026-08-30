"use client";

import ProductCard from "@/components/cards/ProductCard";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";

export default function WishlistClient() {
  const wishlistItems = useSelector((state) => state.wishlist.items);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8 min-h-[70vh]">
      <section className="w-full bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-subtle border border-border/50 dark:border-slate-700/80 transition-colors">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text dark:text-slate-100 mb-2">My Wishlist</h1>
            <p className="text-text-muted dark:text-slate-300">
              Manage and view all your saved items in one place.
            </p>
          </div>
          <div className="bg-blue-50 dark:bg-slate-700/60 text-primary dark:text-blue-400 px-4 py-2 rounded-lg font-medium text-sm border border-blue-100 dark:border-slate-600">
            {wishlistItems.length} Items Saved
          </div>
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {wishlistItems.map((item) => (
              <ProductCard key={item.id} {...item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="bg-gray-50 dark:bg-slate-700/60 w-24 h-24 rounded-full flex items-center justify-center mb-4">
              <Heart className="w-12 h-12 text-gray-300 dark:text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-text dark:text-slate-100 mb-2">Your wishlist is empty</h3>
            <p className="text-text-muted dark:text-slate-300 max-w-md">
              Looks like you haven't saved any items yet. Browse our categories and click the heart icon to add items here.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
