"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, Sparkles, Filter } from "lucide-react";
import { sellCategories } from "@/constants/sellDummyData";
import CategoryCard from "./CategoryCard";

export default function SellCategoryGrid({ sellType, onSelectCategory, onBack }) {
  const [showAllOverride, setShowAllOverride] = useState(false);

  const isVehicleType = sellType === "vehicle";
  const isPropertyType = sellType === "property";

  // Filtered categories based on the user's selected Sell Type
  const displayedCategories = useMemo(() => {
    if (showAllOverride) {
      return sellCategories;
    }

    // When "Vehicle or Bike" is selected:
    // Only show: vehicles, services, boats, kids accessories
    if (isVehicleType) {
      const vehicleCategoryIds = [
        "vehicles",
        "services",
        "boats",
        "kids-accessories",
      ];
      return vehicleCategoryIds
        .map((id) => sellCategories.find((cat) => cat.id === id))
        .filter(Boolean);
    }

    // When "Property / Real Estate" is selected:
    // Only show: properties, services
    if (isPropertyType) {
      const propertyCategoryIds = ["properties", "services"];
      return propertyCategoryIds
        .map((id) => sellCategories.find((cat) => cat.id === id))
        .filter(Boolean);
    }

    // Default for 'old', 'new', or all items
    return sellCategories;
  }, [sellType, showAllOverride, isVehicleType, isPropertyType]);

  const headerInfo = useMemo(() => {
    if (isVehicleType && !showAllOverride) {
      return {
        badge: "Vehicles & Transport",
        title: "Select Vehicle Category",
        subtitle: "Choose from vehicles, auto services, watercraft, or ride-ons.",
      };
    }
    if (isPropertyType && !showAllOverride) {
      return {
        badge: "Real Estate & Spaces",
        title: "Select Property Category",
        subtitle: "Choose from residential, commercial properties or related services.",
      };
    }
    return {
      badge: "Free Listing",
      title: "Select a Category",
      subtitle: "Choose the main category for your listing.",
    };
  }, [isVehicleType, isPropertyType, showAllOverride]);

  const isCompactGrid = displayedCategories.length <= 4;

  return (
    <div className="animate-in fade-in duration-300 max-w-4xl mx-auto py-2 sm:py-6">
      {/* Top Navigation Bar: Back Button & Category Toggle */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        {onBack ? (
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 px-3.5 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-2xs transition-all funky-press cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Back to Item Types</span>
          </button>
        ) : <div />}

        {(isVehicleType || isPropertyType) && (
          <button
            type="button"
            onClick={() => setShowAllOverride((prev) => !prev)}
            className="inline-flex items-center gap-1 text-xs font-bold text-primary dark:text-blue-400 hover:underline transition-all cursor-pointer bg-primary/10 dark:bg-blue-500/15 px-3 py-1.5 rounded-xl border border-primary/20 dark:border-blue-500/30"
          >
            <Filter size={13} />
            <span>{showAllOverride ? "Show Vehicle Options" : "Show All Categories"}</span>
          </button>
        )}
      </div>

      {/* Header Info */}
      <div className="text-center mb-6 sm:mb-8">
        <span className="text-[10px] font-black uppercase tracking-widest text-primary dark:text-blue-400 bg-primary/10 dark:bg-blue-500/20 px-3 py-1 rounded-full border border-primary/20 inline-flex items-center gap-1 shadow-2xs">
          <Sparkles size={11} />
          {headerInfo.badge}
        </span>
        <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight mt-2">
          {headerInfo.title}
        </h1>
        <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1">
          {headerInfo.subtitle}
        </p>
      </div>

      {/* Category Cards Grid */}
      <div 
        className={
          isCompactGrid
            ? "grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5"
        }
      >
        {displayedCategories.map((category) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onClick={onSelectCategory} 
          />
        ))}
      </div>
    </div>
  );
}
