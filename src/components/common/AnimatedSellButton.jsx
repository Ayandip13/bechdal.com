"use client";

import React from "react";
import Link from "next/link";


/**
 * AnimatedSellButton
 * Funky quick-commerce animated "Sell Now" / "Post Free Ad" button.
 * Features an animated camera SVG with glowing lens flash, rotating plus icon,
 * shimmering light sweep (.btn-shimmer), and tactile spring bounce (.funky-press).
 */
export default function AnimatedSellButton({ compact = false, className = "" }) {
  if (compact) {
    return (
      <Link
        href="/sell"
        className={`relative inline-flex items-center gap-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white px-3 py-1.5 rounded-xl text-xs font-black shadow-md shadow-blue-600/30 border border-blue-400/40 select-none funky-press btn-shimmer group shrink-0 ${className}`}
      >
        {/* Animated Camera Icon */}
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" className="anim-screen-glow" fill="#38bdf8" fillOpacity="0.4" />
        </svg>

        <span>Sell</span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-ping inline-block" />
      </Link>
    );
  }

  return (
    <Link
      href="/sell"
      className={`relative inline-flex items-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white px-4 py-2 rounded-xl font-black shadow-lg shadow-blue-600/25 border border-blue-400/40 select-none funky-press btn-shimmer group whitespace-nowrap ${className}`}
    >
      {/* Animated Mini Camera with Flash & Lens Flare */}
      <div className="relative w-6 h-6 rounded-lg bg-white/20 border border-white/30 flex items-center justify-center group-hover:rotate-6 transition-transform">
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-white stroke-2">
          <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
          <circle cx="12" cy="13" r="3" fill="#67e8f9" fillOpacity="0.6" className="animate-pulse" />
        </svg>
        <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-amber-300 animate-ping" />
      </div>

      <div className="flex flex-col text-left">
        <div className="flex items-center gap-1">
          <span className="text-xs leading-none font-black tracking-tight">Sell Now</span>
          <span className="bg-amber-400 text-slate-950 text-[7px] font-black px-1 rounded uppercase">Free</span>
        </div>
        <span className="text-[8px] font-bold text-blue-200 tracking-wide mt-0.5">Instant Local Cash</span>
      </div>
    </Link>
  );
}
