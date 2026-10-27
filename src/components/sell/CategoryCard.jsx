"use client";

import AnimatedCategoryIcon from "@/components/categories/AnimatedCategoryIcon";

export default function CategoryCard({ category, onClick }) {
  const { name, description, id, slug } = category;
  const categorySlug = id || slug || "";

  return (
    <div 
      onClick={() => onClick(category)}
      className="bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-200 hover:border-primary dark:hover:border-blue-400 hover:shadow-md group flex items-center gap-3.5 funky-press"
    >
      {/* Live Animated Category Icon Sticker */}
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200/60 dark:border-slate-600/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 dark:group-hover:bg-blue-500/15 group-hover:border-primary/30 transition-all shadow-xs">
        <AnimatedCategoryIcon 
          slug={categorySlug} 
          size="md" 
          className="group-hover:scale-115 transition-transform duration-200" 
        />
      </div>

      <div className="flex-1 min-w-0">
        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors truncate">
          {name}
        </h3>
        <p className="text-[10px] sm:text-xs text-text-muted dark:text-slate-400 font-medium truncate mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}
