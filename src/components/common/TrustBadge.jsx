"use client";

import React from "react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200 bg-emerald-50/80 dark:bg-emerald-950/40 px-3.5 py-1.5 rounded-full border border-emerald-300/60 dark:border-emerald-700/60 transition-all select-none shadow-xs group hover:scale-105">
      {/* Animated Green Security Shield */}
      <span className="relative flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-500/20 stroke-emerald-600 dark:stroke-emerald-400 stroke-2 anim-shield-pulse">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
        <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
      </span>
      <span className="text-[11px] font-extrabold text-emerald-800 dark:text-emerald-300">
        100% Verified Direct Deal • Zero Fraud Guarantee
      </span>
    </div>
  );
}
