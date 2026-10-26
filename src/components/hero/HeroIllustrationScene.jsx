"use client";

import React from "react";
import { Sparkles, ShieldCheck, Zap } from "lucide-react";

/**
 * HeroIllustrationScene
 * Layered quick-commerce style promotional illustrations for the 4 hero slides.
 * Pure SVG + CSS animations for optimal mobile performance and zero external asset failure.
 */
export default function HeroIllustrationScene({ slideId }) {
  switch (slideId) {
    // -------------------------------------------------------------
    // Slide 1: Sell Anything — "Sell Your Old Items in Minutes"
    // -------------------------------------------------------------
    case 1:
      return (
        <div className="relative w-full h-full min-h-[150px] xs:min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center pointer-events-none select-none">
          {/* Ambient Glow */}
          <div className="absolute w-40 sm:w-64 h-40 sm:h-64 rounded-full bg-blue-500/20 blur-3xl animate-pulse-glow" />

          {/* Central Featured Ad Card */}
          <div className="relative z-10 w-32 xs:w-40 sm:w-52 md:w-60 bg-slate-900/90 dark:bg-slate-800/90 border border-blue-400/40 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 shadow-2xl backdrop-blur-xl animate-float-slow">
            {/* Top Bar with Camera & Live Status */}
            <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
              <div className="flex items-center gap-1 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Live In 2m</span>
              </div>
              <span className="text-[8px] sm:text-[10px] font-black text-amber-300 bg-amber-500/20 px-1.5 py-0.5 rounded-full border border-amber-400/30">
                0% Fee
              </span>
            </div>

            {/* Central Product Showcase Preview */}
            <div className="w-full h-16 xs:h-20 sm:h-28 md:h-30 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-950 via-slate-950 to-indigo-950 border border-white/10 flex items-center justify-center relative overflow-hidden group">
              {/* Camera Lens Circle with Flash Effect */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-dashed border-blue-400/50 flex items-center justify-center animate-spin [animation-duration:15s]">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-600/30 border border-blue-400/60" />
              </div>

              {/* Product Silhouette Vector */}
              <svg viewBox="0 0 40 40" className="w-8 h-8 sm:w-11 sm:h-11 absolute z-10 drop-shadow-lg" fill="none">
                <rect x="12" y="6" width="16" height="28" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
                <rect x="14" y="9" width="12" height="22" rx="1.5" fill="#0284c7" />
                <circle cx="20" cy="8" r="0.8" fill="#38bdf8" />
              </svg>

              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Price & Deal Pill Bottom */}
            <div className="mt-1.5 sm:mt-2.5 flex items-center justify-between">
              <div>
                <p className="text-[7px] sm:text-[9px] text-slate-400 font-medium">Value Estimate</p>
                <p className="text-[10px] xs:text-xs sm:text-sm font-extrabold text-white">
                  ₹18,500 <span className="text-[8px] text-emerald-400 font-bold hidden xs:inline">Instant</span>
                </p>
              </div>
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Zap size={12} className="fill-white" />
              </div>
            </div>
          </div>

          {/* Floating Orbiting Pill: Armchair (Desktop & Tablet) */}
          <div className="absolute -top-1 sm:top-2 -right-2 sm:-right-4 z-20 bg-slate-900/90 border border-amber-400/40 p-1.5 sm:p-2.5 rounded-xl shadow-xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-1.5 sm:gap-2">
            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M7 11V7a5 5 0 0 1 10 0v4h1a3 3 0 0 1 3 3v4a2 2 0 0 1-2 2h-1l-1 2h-2l1-2H8l1 2H7l-1-2H5a2 2 0 0 1-2-2v-4a3 3 0 0 1 3-3h1z" />
              </svg>
            </div>
            <div className="text-left pr-1">
              <span className="block text-[9px] sm:text-[10px] font-black text-white leading-tight">Furniture</span>
              <span className="text-[8px] text-amber-300 font-bold">Fast Buyer</span>
            </div>
          </div>

          {/* Floating Orbiting Pill: Verified Deal (Desktop) */}
          <div className="absolute -bottom-1 sm:bottom-2 -left-2 sm:-left-6 z-20 bg-slate-900/90 border border-emerald-400/40 px-2 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-slow hidden md:flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <ShieldCheck size={12} />
            </div>
            <div className="text-left">
              <span className="block text-[9px] font-extrabold text-white">Direct Deal</span>
              <span className="text-[7px] text-slate-300">Verified Local Buyer</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 2: Electronics & Mobiles — "Smart Deals. Maximum Bachat."
    // -------------------------------------------------------------
    case 2:
      return (
        <div className="relative w-full h-full min-h-[150px] xs:min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center pointer-events-none select-none">
          {/* Cyber Glow Halo */}
          <div className="absolute w-44 sm:w-60 h-44 sm:h-60 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow" />

          {/* Laptop Base & Screen */}
          <div className="relative z-10 w-32 xs:w-40 sm:w-52 md:w-60 animate-float-slow">
            {/* Screen */}
            <div className="w-full h-20 xs:h-24 sm:h-32 md:h-36 rounded-t-xl bg-slate-950 border sm:border-2 border-cyan-500/50 p-1.5 sm:p-2 shadow-2xl relative overflow-hidden">
              {/* Screen Top Bar */}
              <div className="flex items-center justify-between pb-1 border-b border-cyan-500/20">
                <div className="flex gap-1">
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-rose-500" />
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-500" />
                  <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-500" />
                </div>
                <span className="text-[7px] sm:text-[8px] font-bold text-cyan-300 uppercase tracking-widest">Tech Bachat Hub</span>
              </div>

              {/* Glowing Screen Dashboard */}
              <div className="pt-1.5 flex flex-col gap-1 sm:gap-1.5">
                <div className="h-1.5 sm:h-2 w-3/4 bg-cyan-500/30 rounded" />
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="h-7 sm:h-9 w-12 sm:w-16 bg-blue-500/20 rounded border border-blue-400/30 flex items-center justify-center">
                    <span className="text-[7px] sm:text-[9px] font-black text-cyan-300">M2 Chip</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="h-1 sm:h-1.5 w-full bg-slate-700 rounded" />
                    <div className="h-1 sm:h-1.5 w-4/5 bg-slate-700 rounded" />
                    <div className="h-1 sm:h-1.5 w-2/3 bg-cyan-400/60 rounded" />
                  </div>
                </div>
              </div>

              {/* Glowing Discount Badge */}
              <div className="absolute bottom-1.5 right-1.5 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-1.5 py-0.5 rounded font-black text-[7px] sm:text-[9px] shadow-lg">
                SAVE 50%
              </div>
            </div>

            {/* Laptop Base Trackpad */}
            <div className="w-[108%] -ml-[4%] h-2.5 sm:h-3.5 bg-slate-800 rounded-b-lg border-t border-slate-700 shadow-md relative flex justify-center">
              <div className="w-10 sm:w-12 h-1 bg-slate-600 rounded-b" />
            </div>
          </div>

          {/* Floating Smartphone (Overlapping Left) */}
          <div className="absolute -left-2 sm:-left-6 top-6 sm:top-8 z-20 w-14 xs:w-18 sm:w-22 md:w-26 rounded-xl sm:rounded-2xl bg-slate-900 border-2 border-indigo-400 p-1 shadow-2xl backdrop-blur-md animate-float-reverse">
            <div className="w-full h-20 xs:h-24 sm:h-30 rounded-lg sm:rounded-xl bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-700 p-1 flex flex-col justify-between relative overflow-hidden">
              <div className="w-4 h-0.5 bg-black/60 rounded-full mx-auto" />
              <div className="text-center py-1">
                <Sparkles size={12} className="text-amber-300 mx-auto animate-pulse" />
                <span className="block text-[7px] sm:text-[8px] font-black text-white mt-0.5">iPhone 15</span>
                <span className="text-[6px] sm:text-[7px] text-blue-200">₹42,999</span>
              </div>
              <div className="w-6 h-0.5 bg-white/70 rounded-full mx-auto" />
            </div>
          </div>

          {/* Floating Audio Badge (Desktop & Tablet) */}
          <div className="absolute top-1 sm:top-3 right-0 sm:-right-4 z-20 bg-slate-900/90 border border-cyan-400/40 px-2 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-slow hidden sm:flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-lg bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-[9px]">
              5G
            </div>
            <div className="text-left pr-1">
              <span className="block text-[8px] sm:text-[9px] font-extrabold text-white">Inspected</span>
              <span className="text-[7px] text-cyan-300 font-bold">Warranty Pass</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 3: Vehicles & Property — "Your Next Find Is Here"
    // -------------------------------------------------------------
    case 3:
      return (
        <div className="relative w-full h-full min-h-[150px] xs:min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center pointer-events-none select-none">
          {/* Sunset Amber Glow */}
          <div className="absolute w-44 sm:w-60 h-44 sm:h-60 rounded-full bg-amber-500/20 blur-3xl animate-pulse-glow" />

          {/* Central Layer: Modern Duplex Property Illustration */}
          <div className="relative z-10 w-32 xs:w-40 sm:w-50 md:w-56 animate-float-slow">
            <svg viewBox="0 0 100 80" className="w-full h-auto drop-shadow-2xl" fill="none">
              {/* Sky Ground Base */}
              <rect x="0" y="65" width="100" height="15" rx="3" fill="#1e293b" />
              <line x1="10" y1="72" x2="90" y2="72" stroke="#475569" strokeWidth="1" strokeDasharray="4 3" />

              {/* Main Modern Villa Building */}
              <rect x="25" y="25" width="50" height="40" rx="2" fill="#334155" stroke="#f59e0b" strokeWidth="1.2" />
              {/* Roof overhang */}
              <rect x="20" y="22" width="60" height="4" rx="1.5" fill="#f59e0b" />
              {/* Glass Floor 2 Window */}
              <rect x="30" y="30" width="18" height="12" rx="1" fill="#38bdf8" opacity="0.85" />
              <rect x="52" y="30" width="18" height="12" rx="1" fill="#fef08a" opacity="0.75" />
              {/* Balcony Railing */}
              <line x1="28" y1="44" x2="72" y2="44" stroke="#94a3b8" strokeWidth="1" />
              {/* Ground Entrance Door */}
              <rect x="42" y="48" width="16" height="17" rx="1" fill="#0f172a" />
              <circle cx="54" cy="56" r="1" fill="#f59e0b" />

              {/* Sun / Moon behind property */}
              <circle cx="82" cy="18" r="8" fill="#fbbf24" opacity="0.4" />
            </svg>
          </div>

          {/* Floating Sports Car Moving in front */}
          <div className="absolute -bottom-1 sm:bottom-2 left-0 sm:-left-4 z-20 w-28 xs:w-34 sm:w-42 md:w-46 bg-slate-900/95 border border-amber-400/40 p-1.5 sm:p-2 rounded-xl sm:rounded-2xl shadow-2xl backdrop-blur-md animate-hero-slide-right flex items-center gap-1.5 sm:gap-2">
            <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center text-white shrink-0 shadow-md">
              <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-white">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-4.66l.12-.34h13.77l.11.34V17z" />
                <circle cx="7.5" cy="14.5" r="1.5" />
                <circle cx="16.5" cy="14.5" r="1.5" />
              </svg>
            </div>
            <div className="text-left min-w-0">
              <span className="block text-[8px] sm:text-[10px] font-black text-white truncate">Cars & Bikes</span>
              <span className="text-[7px] sm:text-[8px] text-amber-300 font-extrabold">0% Brokerage</span>
            </div>
          </div>

          {/* Floating Property Pill (Desktop & Tablet) */}
          <div className="absolute top-1 sm:top-3 right-0 sm:-right-4 z-20 bg-slate-900/90 border border-emerald-400/40 px-2 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-reverse hidden sm:flex items-center gap-1.5">
            <span className="text-emerald-400 text-xs">🏡</span>
            <div className="text-left pr-1">
              <span className="block text-[8px] sm:text-[9px] font-extrabold text-white">Direct Owner</span>
              <span className="text-[7px] text-emerald-300 font-bold">Inspect Nearby</span>
            </div>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 4: More Categories — "More Choices. Less Spending."
    // -------------------------------------------------------------
    case 4:
      return (
        <div className="relative w-full h-full min-h-[150px] xs:min-h-[170px] sm:min-h-[220px] md:min-h-[260px] flex items-center justify-center pointer-events-none select-none">
          {/* Emerald Mint Glow */}
          <div className="absolute w-44 sm:w-60 h-44 sm:h-60 rounded-full bg-emerald-500/20 blur-3xl animate-pulse-glow" />

          {/* Central 2x2 Quick-Commerce Category Showcase Grid */}
          <div className="relative z-10 grid grid-cols-2 gap-1.5 xs:gap-2 sm:gap-3 w-32 xs:w-40 sm:w-52 md:w-60 animate-float-slow">
            {/* Tile 1: Furniture */}
            <div className="bg-slate-900/90 border border-amber-500/40 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center text-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 mb-0.5 sm:mb-1">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                  <path d="M20 10V7a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v3a3 3 0 0 0-3 3v5h2v2h2v-2h12v2h2v-2h2v-5a3 3 0 0 0-3-3z" />
                </svg>
              </div>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-white">Furniture</span>
              <span className="text-[6px] sm:text-[7px] text-amber-300 font-bold">Top Deals</span>
            </div>

            {/* Tile 2: Pets */}
            <div className="bg-slate-900/90 border border-pink-500/40 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center text-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-0.5 sm:mb-1">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                  <path d="M4.5 9.5a2.5 2.5 0 0 1 5 0c0 1.5-1.5 3-2.5 3s-2.5-1.5-2.5-3zm10 0a2.5 2.5 0 0 1 5 0c0 1.5-1.5 3-2.5 3s-2.5-1.5-2.5-3zM12 13c-2.5 0-5 1.5-5 4s2.5 4 5 4 5-1.5 5-4-2.5-4-5-4z" />
                </svg>
              </div>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-white">Pets & Care</span>
              <span className="text-[6px] sm:text-[7px] text-pink-300 font-bold">Loving</span>
            </div>

            {/* Tile 3: Gym & Fitness */}
            <div className="bg-slate-900/90 border border-orange-500/40 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center text-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-0.5 sm:mb-1">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                  <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43 1.43 1.43 2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43 1.71-1.71z" />
                </svg>
              </div>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-white">Gym Gear</span>
              <span className="text-[6px] sm:text-[7px] text-orange-300 font-bold">Fit At Home</span>
            </div>

            {/* Tile 4: Agriculture */}
            <div className="bg-slate-900/90 border border-emerald-500/40 p-1.5 sm:p-2.5 rounded-xl sm:rounded-2xl shadow-xl backdrop-blur-md flex flex-col items-center text-center">
              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-0.5 sm:mb-1">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current">
                  <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z" />
                </svg>
              </div>
              <span className="text-[8px] sm:text-[10px] font-extrabold text-white">Agri Tools</span>
              <span className="text-[6px] sm:text-[7px] text-emerald-300 font-bold">Farm Direct</span>
            </div>
          </div>

          {/* Floating Pill Banner (Desktop & Tablet) */}
          <div className="absolute -bottom-2 sm:bottom-1 left-1/2 -translate-x-1/2 z-20 bg-emerald-950/95 border border-emerald-400/50 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full shadow-2xl backdrop-blur-md whitespace-nowrap animate-pulse-glow hidden sm:flex items-center gap-1.5">
            <Sparkles size={11} className="text-amber-300" />
            <span className="text-[8px] sm:text-[9px] font-black text-white">10,000+ Verified Ads Across India</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
