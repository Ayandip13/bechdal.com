"use client";

import Link from "next/link";
import { 
  ArrowRight, 
  Tag, 
  ShieldCheck, 
  Smartphone, 
  Car, 
  Armchair, 
  Tractor,
  Home,
  Shirt,
  Dumbbell,
  Tv,
  Sparkles
} from "lucide-react";
import {
  AnimatedSellActionIcon,
  AnimatedExploreActionIcon,
  AnimatedCarActionIcon,
  AnimatedGadgetActionIcon,
  AnimatedActionArrow,
} from "@/components/common/ActionAnimatedIcons";
import {
  FloatingTechOutlines,
  FloatingVehicleOutlines,
  FloatingCommerceOutlines,
  FloatingPropertyOutlines,
  FloatingFurnitureOutlines,
  FloatingFashionOutlines,
  FloatingFitnessGymOutlines,
  FloatingAgriEquipmentOutlines,
  CategoryBannerOutlines,
} from "./FloatingBannerOutlines";

export default function PromoBanner({
  title,
  subtitle,
  ctaText = "Explore Deals",
  ctaLink = "/",
  theme = "blue", // 'blue' | 'emerald' | 'amber' | 'teal' | 'purple' | 'cyan' | 'rose' | 'dark'
  badgeText,
  icon = "tag",
  categorySlug,
}) {
  const iconMap = {
    shield: ShieldCheck,
    smartphone: Smartphone,
    car: Car,
    furniture: Armchair,
    armchair: Armchair,
    tractor: Tractor,
    agri: Tractor,
    tag: Tag,
    home: Home,
    property: Home,
    properties: Home,
    shirt: Shirt,
    fashion: Shirt,
    dumbbell: Dumbbell,
    fitness: Dumbbell,
    gym: Dumbbell,
    tv: Tv,
    electronics: Tv,
    sparkles: Sparkles,
  };

  const IconComponent = typeof icon === "string" ? (iconMap[icon.toLowerCase()] || Tag) : icon || Tag;

  const themeStyles = {
    blue: {
      bg: "bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white border-blue-800/80 dark:border-blue-700/60",
      badge: "bg-blue-800/80 text-blue-200 border-blue-700",
      button: "bg-primary hover:bg-primary-dark text-white",
      accent: "text-blue-400",
    },
    emerald: {
      bg: "bg-gradient-to-r from-emerald-900 via-slate-900 to-teal-950 text-white border-emerald-800/80 dark:border-emerald-700/60",
      badge: "bg-emerald-800/80 text-emerald-200 border-emerald-700",
      button: "bg-emerald-600 hover:bg-emerald-700 text-white",
      accent: "text-emerald-400",
    },
    teal: {
      bg: "bg-gradient-to-r from-teal-950 via-slate-900 to-emerald-950 text-white border-teal-800/80 dark:border-teal-700/60",
      badge: "bg-teal-800/80 text-teal-200 border-teal-700",
      button: "bg-teal-600 hover:bg-teal-700 text-white",
      accent: "text-teal-400",
    },
    amber: {
      bg: "bg-gradient-to-r from-amber-950 via-slate-900 to-orange-950 text-white border-amber-800/80 dark:border-amber-700/60",
      badge: "bg-amber-800/80 text-amber-200 border-amber-700",
      button: "bg-amber-500 hover:bg-amber-600 text-slate-950 font-black",
      accent: "text-amber-400",
    },
    purple: {
      bg: "bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white border-purple-800/80 dark:border-purple-700/60",
      badge: "bg-purple-800/80 text-purple-200 border-purple-700",
      button: "bg-purple-600 hover:bg-purple-700 text-white",
      accent: "text-purple-400",
    },
    cyan: {
      bg: "bg-gradient-to-r from-cyan-950 via-slate-900 to-blue-950 text-white border-cyan-800/80 dark:border-cyan-700/60",
      badge: "bg-cyan-800/80 text-cyan-200 border-cyan-700",
      button: "bg-cyan-600 hover:bg-cyan-700 text-white",
      accent: "text-cyan-400",
    },
    rose: {
      bg: "bg-gradient-to-r from-rose-950 via-slate-900 to-neutral-950 text-white border-rose-800/80 dark:border-rose-700/60",
      badge: "bg-rose-800/80 text-rose-200 border-rose-700",
      button: "bg-rose-600 hover:bg-rose-700 text-white",
      accent: "text-rose-400",
    },
    dark: {
      bg: "bg-slate-900 dark:bg-slate-800/90 text-white border-slate-800 dark:border-slate-700/80",
      badge: "bg-slate-800 text-amber-400 border-slate-700",
      button: "bg-primary hover:bg-primary-dark text-white",
      accent: "text-amber-400",
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.blue;

  // Determine which floating SVG outlines scene to render
  const renderFloatingOutlines = () => {
    if (categorySlug) {
      return <CategoryBannerOutlines categorySlug={categorySlug} className="opacity-75" />;
    }

    const iconStr = typeof icon === "string" ? icon.toLowerCase() : "";

    // Properties
    if (iconStr === "home" || iconStr === "property" || iconStr === "properties" || theme === "amber") {
      return <FloatingPropertyOutlines className="opacity-75" />;
    }
    // Furniture
    if (iconStr === "furniture" || iconStr === "armchair" || theme === "teal") {
      return <FloatingFurnitureOutlines className="opacity-75" />;
    }
    // Fashion
    if (iconStr === "shirt" || iconStr === "fashion" || theme === "purple") {
      return <FloatingFashionOutlines className="opacity-75" />;
    }
    // Fitness
    if (iconStr === "dumbbell" || iconStr === "fitness" || iconStr === "gym" || theme === "cyan") {
      return <FloatingFitnessGymOutlines className="opacity-75" />;
    }
    // Tech / Mobiles
    if (iconStr === "smartphone" || iconStr === "tech" || iconStr === "tv" || iconStr === "electronics" || theme === "blue") {
      return <FloatingTechOutlines className="opacity-75" />;
    }
    // Vehicles
    if (iconStr === "car" || iconStr === "bike" || iconStr === "vehicle" || theme === "emerald" || theme === "rose") {
      return <FloatingVehicleOutlines className="opacity-75" />;
    }
    // Agri
    if (iconStr === "tractor" || iconStr === "agri") {
      return <FloatingAgriEquipmentOutlines className="opacity-75" />;
    }

    // Default Commerce / Trust scene
    return <FloatingCommerceOutlines className="opacity-75" />;
  };

  return (
    <div className={`w-full rounded-2xl p-3.5 sm:p-6 border ${currentTheme.bg} shadow-sm relative overflow-hidden my-2 group`}>
      {/* Dynamic Animated Floating Outline Scene */}
      {renderFloatingOutlines()}

      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-start gap-2.5 sm:gap-3 pr-14 sm:pr-0">
          {IconComponent && (
            <div className={`p-2 sm:p-2.5 rounded-xl bg-white/10 backdrop-blur-xs shrink-0 ${currentTheme.accent}`}>
              <IconComponent size={18} className="sm:w-5 sm:h-5" />
            </div>
          )}
          <div>
            {badgeText && (
              <span className={`inline-block text-[9px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-md mb-1 ${currentTheme.badge}`}>
                {badgeText}
              </span>
            )}
            <h3 className="text-sm sm:text-lg font-black tracking-tight leading-snug">
              {title}
            </h3>
            {subtitle && (
              <p className="text-[10px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-normal max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <Link
          href={ctaLink}
          className={`inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-black transition-all shrink-0 cursor-pointer self-start sm:self-auto min-h-[34px] sm:min-h-[38px] group btn-shimmer hover:scale-105 active:scale-95 shadow-md ${currentTheme.button}`}
        >
          {ctaText?.toLowerCase().includes("sell") && <AnimatedSellActionIcon size={15} className="sm:w-4 sm:h-4" />}
          {ctaText?.toLowerCase().includes("mobile") && <AnimatedGadgetActionIcon size={15} className="sm:w-4 sm:h-4" />}
          {ctaText?.toLowerCase().includes("vehicle") && <AnimatedCarActionIcon size={15} className="sm:w-4 sm:h-4" />}
          {!ctaText?.toLowerCase().includes("sell") &&
            !ctaText?.toLowerCase().includes("mobile") &&
            !ctaText?.toLowerCase().includes("vehicle") && (
              <AnimatedExploreActionIcon size={15} className="sm:w-4 sm:h-4" />
            )}
          <span>{ctaText}</span>
          <AnimatedActionArrow size={13} className="sm:w-3.5 sm:h-3.5" />
        </Link>
      </div>
    </div>
  );
}
