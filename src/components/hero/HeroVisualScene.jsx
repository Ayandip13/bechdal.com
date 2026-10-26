"use client";

import React from "react";
import { Sparkles, ShieldCheck, Zap, CheckCircle2, TrendingUp, Tag, Star, Award, Clock } from "lucide-react";

/**
 * HeroVisualScene
 * Real commercial product showcase for the 6 promotional slides.
 * Uses high-resolution photographic visuals with edge blending, dynamic lighting,
 * and live animated quick-commerce floating stickers (Blinkit / Flipkart Minutes style).
 */
export default function HeroVisualScene({ slideId }) {
  switch (slideId) {
    // -------------------------------------------------------------
    // Slide 1: Sell Anything & Get Instant Cash
    // -------------------------------------------------------------
    case 1:
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Ambient Blue & Golden Glow */}
          <div className="absolute w-56 h-56 rounded-full bg-blue-500/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -top-4 -right-4 w-40 h-40 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />

          {/* Main Photographic Visual Container */}
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-36 xs:h-44 sm:h-52 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/15 dark:border-slate-700/60 group">
            <img
              src="/images/hero_sell_cash.jpg"
              alt="Sell Old Items & Instant Cash"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Edge Vignette & Ambient Gradient Blend */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Floating Badge 1: Live Ad Status (Top Left) */}
          <div className="absolute -top-2 -left-2 sm:-left-4 z-20 bg-slate-950/90 border border-emerald-400/50 px-2.5 py-1 rounded-xl shadow-2xl backdrop-blur-md animate-float-slow flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="text-[10px] sm:text-xs font-black text-white">Live In 2 Mins</span>
          </div>

          {/* Live Floating Badge 2: Instant Cash Handover (Bottom Right) */}
          <div className="absolute -bottom-2 -right-2 sm:-right-4 z-20 bg-slate-950/90 border border-amber-400/50 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-float-reverse flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
              <Zap size={12} className="fill-amber-400" />
            </div>
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Instant Cash</span>
              <span className="text-[8px] sm:text-[9px] text-amber-300 font-bold">0% Platform Fee</span>
            </div>
          </div>

          {/* Live Floating Badge 3: Verified Direct Deal (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20 bg-slate-950/90 border border-blue-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-slow hidden md:flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-blue-400" />
            <span className="text-[10px] font-black text-white">Direct Local Buyer</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 2: Electronics & Mobiles (Smart Tech Deals)
    // -------------------------------------------------------------
    case 2:
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Ambient Cyan & Royal Blue Glow */}
          <div className="absolute w-56 h-56 rounded-full bg-cyan-500/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />

          {/* Main Photographic Visual Container */}
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-36 xs:h-44 sm:h-52 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/30 dark:border-cyan-500/40 group">
            <img
              src="/images/hero_tech_gadgets.jpg"
              alt="MacBook, iPhone & Gadgets"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Edge Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Floating Badge 1: 50% Off Tag (Top Right) */}
          <div className="absolute -top-2 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 px-2.5 sm:px-3 py-1 rounded-xl font-black text-[10px] sm:text-xs shadow-2xl backdrop-blur-md animate-float-reverse flex items-center gap-1">
            <Sparkles size={12} className="fill-slate-950" />
            <span>SAVE UP TO 50%</span>
          </div>

          {/* Live Floating Badge 2: Warranty Inspected (Bottom Left) */}
          <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 bg-slate-950/90 border border-cyan-400/50 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-float-slow flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-extrabold text-[10px]">
              5G
            </div>
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">MacBook & iPhone</span>
              <span className="text-[8px] sm:text-[9px] text-cyan-300 font-bold">Tested & Inspected</span>
            </div>
          </div>

          {/* Live Floating Badge 3: 7-Day Guarantee (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 bg-slate-950/90 border border-blue-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-reverse hidden md:flex items-center gap-1.5">
            <CheckCircle2 size={13} className="text-blue-400" />
            <span className="text-[10px] font-black text-white">Genuine Devices</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 3: Vehicles & Rides (Cars & Superbikes)
    // -------------------------------------------------------------
    case 3:
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Ambient Red & Amber Sunset Glow */}
          <div className="absolute w-60 h-60 rounded-full bg-red-500/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -top-4 -left-4 w-44 h-44 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />

          {/* Main Photographic Visual Container */}
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-36 xs:h-44 sm:h-52 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-red-500/30 dark:border-amber-500/40 group">
            <img
              src="/images/hero_vehicles_car.jpg"
              alt="Cars & Sports Bikes"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Speed Light Streak Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Floating Badge 1: 0% Brokerage (Top Right) */}
          <div className="absolute -top-2 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-red-600 to-amber-600 text-white px-3 py-1 rounded-xl font-black text-[10px] sm:text-xs shadow-2xl backdrop-blur-md animate-float-reverse flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-ping inline-block" />
            <span>0% BROKERAGE</span>
          </div>

          {/* Live Floating Badge 2: Verified RC & Test Drive (Bottom Left) */}
          <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 bg-slate-950/90 border border-amber-400/50 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-float-slow flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold text-xs">
              🏎️
            </div>
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Cars & Superbikes</span>
              <span className="text-[8px] sm:text-[9px] text-amber-300 font-bold">Verified RC • Inspect in Person</span>
            </div>
          </div>

          {/* Live Floating Badge 3: Direct Owner Deal (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 bg-slate-950/90 border border-red-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-slow hidden md:flex items-center gap-1.5">
            <Award size={13} className="text-amber-400" />
            <span className="text-[10px] font-black text-white">Direct Owner Deals</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 4: Homes & Modern Luxury Furniture
    // -------------------------------------------------------------
    case 4:
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Ambient Emerald & Teal Glow */}
          <div className="absolute w-56 h-56 rounded-full bg-emerald-500/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -bottom-4 -right-4 w-40 h-40 rounded-full bg-teal-500/20 blur-2xl pointer-events-none" />

          {/* Main Photographic Visual Container */}
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-36 xs:h-44 sm:h-52 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-emerald-500/30 dark:border-teal-500/40 group">
            <img
              src="/images/hero_furniture_home.jpg"
              alt="Luxury Living & Furniture"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Edge Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Floating Badge 1: 60% Off Tag (Top Left) */}
          <div className="absolute -top-2 -left-2 sm:-left-4 z-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-3 py-1 rounded-xl font-black text-[10px] sm:text-xs shadow-2xl backdrop-blur-md animate-float-slow flex items-center gap-1">
            <Sparkles size={12} className="fill-white" />
            <span>SAVE UP TO 60%</span>
          </div>

          {/* Live Floating Badge 2: Premium Living (Bottom Right) */}
          <div className="absolute -bottom-2 -right-2 sm:-right-4 z-20 bg-slate-950/90 border border-emerald-400/50 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-float-reverse flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center text-xs">
              🛋️
            </div>
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Sofas & Properties</span>
              <span className="text-[8px] sm:text-[9px] text-emerald-300 font-bold">Ready to Move & Pick Up</span>
            </div>
          </div>

          {/* Live Floating Badge 3: Direct Owner Deal (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20 bg-slate-950/90 border border-teal-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-slow hidden md:flex items-center gap-1.5">
            <ShieldCheck size={13} className="text-emerald-400" />
            <span className="text-[10px] font-black text-white">0% Brokerage Flats</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 5: Fitness & Gym Equipment (New 5th Slide!)
    // -------------------------------------------------------------
    case 5:
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Ambient Orange & Fire Rim Glow */}
          <div className="absolute w-56 h-56 rounded-full bg-orange-500/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -top-4 -right-4 w-40 h-40 rounded-full bg-red-600/20 blur-2xl pointer-events-none" />

          {/* Main Photographic Visual Container */}
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-36 xs:h-44 sm:h-52 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-orange-500/30 dark:border-red-500/40 group">
            <img
              src="/images/hero_gym_fitness.jpg"
              alt="Gym Equipment & Weights"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Edge Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Floating Badge 1: Power Tag (Top Right) */}
          <div className="absolute -top-2 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-1 rounded-xl font-black text-[10px] sm:text-xs shadow-2xl backdrop-blur-md animate-float-reverse flex items-center gap-1.5">
            <Zap size={12} className="fill-white" />
            <span>FIT AT HOME • 60% OFF</span>
          </div>

          {/* Live Floating Badge 2: Iron Weights & Benches (Bottom Left) */}
          <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 bg-slate-950/90 border border-orange-400/50 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-float-slow flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-orange-500/20 text-orange-300 flex items-center justify-center text-xs">
              🏋️
            </div>
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Dumbbells & Benches</span>
              <span className="text-[8px] sm:text-[9px] text-orange-300 font-bold">Top Brand Gear Deals</span>
            </div>
          </div>

          {/* Live Floating Badge 3: Same Day Pickup (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-20 bg-slate-950/90 border border-amber-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-reverse hidden md:flex items-center gap-1.5">
            <Clock size={13} className="text-orange-400" />
            <span className="text-[10px] font-black text-white">Local Pickup Nearby</span>
          </div>
        </div>
      );

    // -------------------------------------------------------------
    // Slide 6: Trending Fashion & Sneakers (New 6th Slide!)
    // -------------------------------------------------------------
    case 6:
      return (
        <div className="relative w-full h-full flex items-center justify-center select-none">
          {/* Ambient Purple & Magenta Glow */}
          <div className="absolute w-56 h-56 rounded-full bg-fuchsia-500/25 blur-3xl animate-pulse-glow pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full bg-purple-600/20 blur-2xl pointer-events-none" />

          {/* Main Photographic Visual Container */}
          <div className="relative w-44 xs:w-52 sm:w-64 md:w-72 lg:w-80 h-36 xs:h-44 sm:h-52 md:h-56 lg:h-64 rounded-2xl overflow-hidden shadow-2xl border border-fuchsia-500/30 dark:border-purple-500/40 group">
            <img
              src="/images/hero_fashion_sneakers.jpg"
              alt="Trending Sneakers & Watches"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Edge Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Live Floating Badge 1: 50% Off Golden Tag (Top Right) */}
          <div className="absolute -top-2 -right-2 sm:-right-4 z-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-xl font-black text-[10px] sm:text-xs shadow-2xl backdrop-blur-md animate-float-reverse flex items-center gap-1.5">
            <Star size={12} className="fill-amber-300 text-amber-300" />
            <span>100% AUTHENTIC</span>
          </div>

          {/* Live Floating Badge 2: Rare Sneakers & Watches (Bottom Left) */}
          <div className="absolute -bottom-2 -left-2 sm:-left-4 z-20 bg-slate-950/90 border border-fuchsia-400/50 px-3 py-1.5 rounded-xl shadow-2xl backdrop-blur-md animate-float-slow flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-pink-500/20 text-pink-300 flex items-center justify-center text-xs">
              👟
            </div>
            <div className="text-left">
              <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Air Jordans & Watches</span>
              <span className="text-[8px] sm:text-[9px] text-pink-300 font-bold">Unbeatable Bachat Deals</span>
            </div>
          </div>

          {/* Live Floating Badge 3: Trending Verified (Desktop) */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-20 bg-slate-950/90 border border-purple-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md animate-float-slow hidden md:flex items-center gap-1.5">
            <TrendingUp size={13} className="text-pink-400" />
            <span className="text-[10px] font-black text-white">Trending Local Finds</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}
