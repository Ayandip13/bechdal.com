"use client";

import React from "react";

/**
 * AnimatedSmartphone
 * Reusable animated SVG flagship smartphone illustration with dynamic island,
 * Bachat deal notification popup, apps grid, and smooth floating tilt motion.
 */
export default function AnimatedSmartphone({ className = "", animate = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 100 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusablePhoneDisplayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e1b4b" />
            <stop offset="100%" stopColor="#312e81" />
          </linearGradient>

          <linearGradient id="reusablePhoneAluminumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes phoneFloatBob {
            0%, 100% { transform: translateY(0px) rotate(-6deg); }
            50% { transform: translateY(-6px) rotate(-3deg); }
          }
          @keyframes phoneNotifPulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.06); }
          }

          .anim-phone-floating { animation: ${animate ? "phoneFloatBob 4s ease-in-out infinite" : "none"}; transform-origin: center bottom; }
          .anim-phone-notif { animation: ${animate ? "phoneNotifPulse 2.4s ease-in-out infinite" : "none"}; transform-origin: center; }
        `}</style>

        {/* Drop Shadow */}
        <ellipse cx="48" cy="154" rx="34" ry="6" fill="#000000" fillOpacity="0.35" />

        <g className="anim-phone-floating">
          {/* Phone Frame */}
          <rect
            x="18"
            y="12"
            width="64"
            height="124"
            rx="14"
            fill="#020617"
            stroke="url(#reusablePhoneAluminumGrad)"
            strokeWidth="2.8"
          />

          {/* OLED Screen */}
          <rect
            x="21"
            y="15"
            width="58"
            height="118"
            rx="11"
            fill="url(#reusablePhoneDisplayGrad)"
          />

          {/* Dynamic Island Notch */}
          <rect x="41" y="18" width="18" height="5" rx="2.5" fill="#000000" />
          <circle cx="55" cy="20.5" r="1.2" fill="#0284c7" />

          {/* Live Bachat Notification Pill */}
          <g className="anim-phone-notif" transform="translate(25, 36)">
            <rect x="0" y="0" width="50" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
            <circle cx="8" cy="12" r="3.5" fill="#22c55e" />
            <text x="15" y="10" fill="#f8fafc" fontSize="5" fontWeight="900" fontFamily="sans-serif">BACHAT DEAL</text>
            <text x="15" y="18" fill="#38bdf8" fontSize="6" fontWeight="bold" fontFamily="sans-serif">Flat 50% Off</text>
          </g>

          {/* App Grid */}
          <circle cx="35" cy="76" r="5" fill="#3b82f6" fillOpacity="0.8" />
          <circle cx="50" cy="76" r="5" fill="#10b981" fillOpacity="0.8" />
          <circle cx="65" cy="76" r="5" fill="#f43f5e" fillOpacity="0.8" />

          <circle cx="35" cy="94" r="5" fill="#eab308" fillOpacity="0.8" />
          <circle cx="50" cy="94" r="5" fill="#8b5cf6" fillOpacity="0.8" />
          <circle cx="65" cy="94" r="5" fill="#06b6d4" fillOpacity="0.8" />

          {/* Home Bar */}
          <line x1="41" y1="127" x2="59" y2="127" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
