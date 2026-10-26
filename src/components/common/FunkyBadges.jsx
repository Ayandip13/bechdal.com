"use client";

import React from "react";
import { Sparkles, ShieldCheck, Flame, Zap, Check } from "lucide-react";

/**
 * FunkyBadges
 * Lively quick-commerce animated micro-badges for product cards and listings.
 */

// 1. Urgent / Hot / Fast Selling Badge with Animated Flame
export function UrgentBadge({ text = "Urgent", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 bg-gradient-to-r from-red-600 to-amber-600 text-white px-1.5 py-0.5 text-[8px] sm:text-[9px] font-black rounded-md shadow-sm uppercase tracking-wider select-none ${className}`}
    >
      <svg viewBox="0 0 16 16" className="w-2.5 h-2.5 anim-flame shrink-0" fill="currentColor">
        <path d="M8 0c-.3 1.2-1.5 2.5-2.5 3.5C4.2 4.8 3 6.5 3 8.5c0 2.8 2.2 5 5 5s5-2.2 5-5c0-1.8-1-3.4-2.2-4.5C9.8 3 9 1.5 8 0zm0 4.5c.8 1 2 2.2 2 3.8 0 1.1-.9 2-2 2s-2-.9-2-2c0-1.2.8-2.2 2-3.8z" fill="#fef08a" />
      </svg>
      <span>{text}</span>
    </span>
  );
}

// 2. Verified Seller Badge with Pulsing Blue/Emerald Shield
export function VerifiedBadge({ text = "Verified", showText = false, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 select-none ${className}`}
      title="Verified Seller"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-3 h-3 anim-shield-pulse shrink-0 fill-current"
      >
        <path d="M12 2L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-3zm-2 15l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
      {showText && <span className="text-[9px] font-extrabold text-blue-600 dark:text-blue-400">{text}</span>}
    </span>
  );
}

// 3. Bachat / Discount Badge with Savings Sparkle
export function DiscountBadge({ discount = "25% OFF", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-[7px] sm:text-[8px] font-black text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300/60 dark:border-emerald-700/60 px-1 py-0.5 rounded shadow-2xs select-none ${className}`}
    >
      <Zap size={8} className="fill-emerald-600 text-emerald-600 dark:fill-emerald-400 dark:text-emerald-400 shrink-0" />
      <span>{discount}</span>
    </span>
  );
}

// 4. Featured / Premium Listing Badge with Golden Sparkle
export function FeaturedBadge({ text = "Featured", className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-black rounded-md shadow-sm uppercase tracking-wider select-none ${className}`}
    >
      <Sparkles size={9} className="fill-slate-950 shrink-0 animate-pulse" />
      <span>{text}</span>
    </span>
  );
}
