"use client";

import { Recycle, Package } from "lucide-react";
import AnimatedCategoryIcon from "@/components/categories/AnimatedCategoryIcon";

function SellTypeCard({ type, title, description, icon: Icon, categorySlug, onClick }) {
  return (
    <div 
      onClick={() => onClick(type)}
      className="p-4 sm:p-5 rounded-xl sm:rounded-2xl cursor-pointer border border-slate-200/80 dark:border-slate-700/80 bg-white dark:bg-slate-800/90 hover:border-primary dark:hover:border-blue-400 hover:shadow-md transition-all duration-200 flex items-center gap-3.5 group min-h-[64px] funky-press"
    >
      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-slate-50 dark:bg-slate-700/50 border border-slate-200/60 dark:border-slate-600/50 flex items-center justify-center shrink-0 group-hover:bg-primary/10 dark:group-hover:bg-blue-500/15 group-hover:border-primary/30 transition-all shadow-xs">
        {categorySlug ? (
          <AnimatedCategoryIcon slug={categorySlug} size="md" className="group-hover:scale-115 transition-transform duration-200" />
        ) : (
          <Icon size={22} className="text-primary dark:text-blue-400 group-hover:scale-110 transition-transform duration-200" />
        )}
      </div>
      
      <div className="flex-1 min-w-0 text-left">
        <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white truncate">
          {title}
        </h3>
        <p className="text-xs text-text-muted dark:text-slate-400 font-medium truncate mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SellTypeSelection({ onSelectType }) {
  return (
    <div className="animate-in fade-in duration-300 max-w-3xl mx-auto py-2 sm:py-6">
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-500/20 px-3 py-1 rounded-full border border-primary/20">
          Post Free Ad
        </span>
        <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
          What are you selling?
        </h1>
        <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1">
          Select an item type to begin listing on BechDal.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-xl mx-auto">
        <SellTypeCard 
          type="old"
          title="Used / Pre-owned Item"
          description="Mobiles, gadgets, furniture, clothing & more"
          icon={Recycle}
          onClick={onSelectType}
        />
        <SellTypeCard 
          type="new"
          title="Brand New Item"
          description="Unused items in original packaging"
          icon={Package}
          onClick={onSelectType}
        />
        <SellTypeCard 
          type="vehicle"
          title="Vehicle or Bike"
          description="Cars, motorcycles, scooty & commercial"
          categorySlug="vehicles"
          onClick={onSelectType}
        />
        <SellTypeCard 
          type="property"
          title="Property / Real Estate"
          description="Flats, houses, PG & land listings"
          categorySlug="properties"
          onClick={onSelectType}
        />
      </div>
    </div>
  );
}
