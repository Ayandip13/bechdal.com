"use client";

import React from "react";

/**
 * AnimatedMotorcycle
 * Reusable animated SVG sports bike illustration with rotating alloy wheels,
 * aerodynamic visor, rider silhouette, and headlight projection.
 */
export default function AnimatedMotorcycle({ className = "", isMoving = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 160 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusableBikeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>

          <radialGradient id="reusableBikeAlloyGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          <linearGradient id="reusableBikeBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes bikeVibration {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-1.5px) rotate(-0.5deg); }
          }
          @keyframes bikeWheelSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .anim-bike-chassis { animation: ${isMoving ? "bikeVibration 0.8s ease-in-out infinite" : "none"}; }
          .anim-bike-w1 { animation: ${isMoving ? "bikeWheelSpin 0.45s linear infinite" : "none"}; transform-origin: 28px 66px; }
          .anim-bike-w2 { animation: ${isMoving ? "bikeWheelSpin 0.45s linear infinite" : "none"}; transform-origin: 96px 66px; }
        `}</style>

        {/* Headlight Projection */}
        <polygon points="105,58 150,45 150,75 105,64" fill="url(#reusableBikeBeam)" opacity="0.6" />

        {/* Suspended Chassis & Rider Group */}
        <g className="anim-bike-chassis">
          {/* Main Tank & Tail Fairing */}
          <path
            d="M30 66 L 48 42 L 68 42 L 86 32 L 104 50 L 96 66 Z"
            fill="url(#reusableBikeBodyGrad)"
            stroke="#0284c7"
            strokeWidth="1.5"
          />
          {/* Aerodynamic Windscreen */}
          <path d="M82 32 L 94 18 L 102 32 Z" fill="#38bdf8" fillOpacity="0.6" stroke="#e0f2fe" strokeWidth="1" />
          {/* Rider Silhouette */}
          <circle cx="65" cy="22" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
          <path d="M68 18 H 74 C 76 18 77 20 76 22 L 72 25 H 68 Z" fill="#facc15" />
          {/* Handlebar & Exhaust Pipe */}
          <line x1="86" y1="34" x2="92" y2="30" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 62 L 24 68 H 14" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        {/* Rear Wheel with Rotating Spokes */}
        <g className="anim-bike-w1">
          <circle cx="28" cy="66" r="14" fill="#0f172a" stroke="#334155" strokeWidth="3.5" />
          <circle cx="28" cy="66" r="7" fill="url(#reusableBikeAlloyGrad)" />
          <line x1="28" y1="55" x2="28" y2="77" stroke="#38bdf8" strokeWidth="1.4" />
          <line x1="17" y1="66" x2="39" y2="66" stroke="#38bdf8" strokeWidth="1.4" />
        </g>

        {/* Front Wheel with Rotating Spokes */}
        <g className="anim-bike-w2">
          <circle cx="96" cy="66" r="14" fill="#0f172a" stroke="#334155" strokeWidth="3.5" />
          <circle cx="96" cy="66" r="7" fill="url(#reusableBikeAlloyGrad)" />
          <line x1="96" y1="55" x2="96" y2="77" stroke="#38bdf8" strokeWidth="1.4" />
          <line x1="85" y1="66" x2="107" y2="66" stroke="#38bdf8" strokeWidth="1.4" />
        </g>
      </svg>
    </div>
  );
}
