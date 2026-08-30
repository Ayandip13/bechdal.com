"use client";

import Link from "next/link";
import { ArrowRight, Tag, ShieldCheck, Smartphone, Car, Armchair, Tractor } from "lucide-react";

export default function PromoBanner({
  title,
  subtitle,
  ctaText = "Explore Deals",
  ctaLink = "/",
  theme = "blue", // 'blue' | 'emerald' | 'amber' | 'purple' | 'dark'
  badgeText,
  icon = "tag",
}) {
  const iconMap = {
    shield: ShieldCheck,
    smartphone: Smartphone,
    car: Car,
    furniture: Armchair,
    tractor: Tractor,
    tag: Tag,
  };

  const IconComponent = typeof icon === "string" ? (iconMap[icon] || Tag) : icon || Tag;
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
    dark: {
      bg: "bg-slate-900 dark:bg-slate-800/90 text-white border-slate-800 dark:border-slate-700/80",
      badge: "bg-slate-800 text-amber-400 border-slate-700",
      button: "bg-primary hover:bg-primary-dark text-white",
      accent: "text-amber-400",
    },
  };

  const currentTheme = themeStyles[theme] || themeStyles.blue;

  return (
    <div className={`w-full rounded-2xl p-4 sm:p-6 border ${currentTheme.bg} shadow-sm relative overflow-hidden my-2`}>
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
        <div className="flex items-start gap-3">
          {IconComponent && (
            <div className={`p-2.5 rounded-xl bg-white/10 backdrop-blur-xs shrink-0 ${currentTheme.accent}`}>
              <IconComponent size={20} />
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
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium mt-0.5 leading-normal max-w-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <Link
          href={ctaLink}
          className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer self-start sm:self-auto min-h-[38px] ${currentTheme.button}`}
        >
          <span>{ctaText}</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
