"use client";

import React from "react";

/**
 * AnimatedPlant
 * Reusable animated SVG potted Monstera houseplant illustration with independent
 * swaying split leaves in the breeze.
 */
export default function AnimatedPlant({ className = "", animate = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 90 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusableLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes plantPotSway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg) translateY(-1px); }
          }
          @keyframes leafSingleFlutter {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-7deg); }
          }

          .anim-plant-breeze-pot { animation: ${animate ? "plantPotSway 3.6s ease-in-out infinite" : "none"}; transform-origin: 45px 110px; }
          .anim-plant-leaf-flutter { animation: ${animate ? "leafSingleFlutter 2.8s ease-in-out infinite" : "none"}; transform-origin: 45px 55px; }
        `}</style>

        <g className="anim-plant-breeze-pot">
          {/* Terracotta Planter Pot */}
          <path d="M33 85 L 37 112 H 53 L 57 85 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
          <ellipse cx="45" cy="85" rx="12" ry="3.5" fill="#9a3412" />

          {/* Main Central Stem */}
          <path d="M45 85 Q 43 55, 45 32" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Swaying Monstera Leaf 1 (Left Split Leaf) */}
          <g className="anim-plant-leaf-flutter">
            <path
              d="M43 42 C 31 38, 16 28, 17 12 C 18 -2, 35 6, 43 32 Z"
              fill="url(#reusableLeafGrad)"
              stroke="#166534"
              strokeWidth="1.4"
            />
            <line x1="43" y1="32" x2="26" y2="12" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Swaying Monstera Leaf 2 (Right Top Big Leaf) */}
          <g>
            <path
              d="M45 32 C 55 25, 73 14, 69 -2 C 65 -16, 47 -4, 43 25 Z"
              fill="url(#reusableLeafGrad)"
              stroke="#166534"
              strokeWidth="1.4"
            />
            <line x1="43" y1="25" x2="61" y2="2" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
          </g>

          {/* Baby Leaf */}
          <ellipse cx="35" cy="62" rx="7" ry="11" transform="rotate(-30 35 62)" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
