"use client";

import React from "react";
import TrustBadge from "./TrustBadge";

export default function ProductActions() {
  return (
    <div className="flex flex-col gap-4 mt-6 lg:mt-8">
      <div className="flex flex-col sm:flex-row gap-3">
        {/* Chat with Seller Button */}
        <button
          type="button"
          className="flex-1 btn-primary gap-2.5 py-3 rounded-xl font-black shadow-lg shadow-blue-600/25 funky-press btn-shimmer group cursor-pointer"
        >
          {/* Animated Chat Bubble SVG */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform">
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
            <circle cx="8" cy="12" r="1" fill="currentColor" className="animate-ping opacity-75" />
            <circle cx="12" cy="12" r="1" fill="currentColor" />
            <circle cx="16" cy="12" r="1" fill="currentColor" />
          </svg>
          <span className="text-sm font-black tracking-tight">Chat with Seller</span>
        </button>

        {/* Call Seller Button */}
        <button
          type="button"
          className="flex-1 btn-outline gap-2.5 py-3 rounded-xl font-black border-2 hover:bg-slate-50 dark:hover:bg-slate-800 funky-press group cursor-pointer"
        >
          {/* Animated Ringing Phone SVG */}
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 group-hover:rotate-12 transition-transform anim-phone-vibe">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="text-sm font-black tracking-tight">Call Seller</span>
        </button>
      </div>

      <div className="flex justify-center mt-2">
        <TrustBadge />
      </div>
    </div>
  );
}
