"use client";

import React from "react";

/**
 * AnimatedCar
 * Reusable animated SVG sports car illustration with independently rotating alloy wheels,
 * suspension motion, headlight illumination, and exhaust puffs.
 */
export default function AnimatedCar({ className = "", isMoving = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 320 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          {/* Car Body Gradient */}
          <linearGradient id="reusableCarBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f43f5e" />
            <stop offset="50%" stopColor="#e11d48" />
            <stop offset="100%" stopColor="#9f1239" />
          </linearGradient>

          {/* Alloy Gradient */}
          <radialGradient id="reusableAlloyGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="60%" stopColor="#475569" />
            <stop offset="100%" stopColor="#0f172a" />
          </radialGradient>

          {/* Headlight Projection */}
          <linearGradient id="reusableCarBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes carSuspensionBob {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-2px); }
            50% { transform: translateY(1px); }
            75% { transform: translateY(-1.5px); }
          }
          @keyframes carWheelSpin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes exhaustSmokePuff {
            0% { transform: scale(0.3) translate(0, 0); opacity: 0; }
            40% { opacity: 0.8; }
            100% { transform: scale(1.6) translate(-18px, -6px); opacity: 0; }
          }

          .anim-car-suspension { animation: ${isMoving ? "carSuspensionBob 0.9s ease-in-out infinite" : "none"}; }
          .anim-car-w1 { animation: ${isMoving ? "carWheelSpin 0.5s linear infinite" : "none"}; transform-origin: 74px 92px; }
          .anim-car-w2 { animation: ${isMoving ? "carWheelSpin 0.5s linear infinite" : "none"}; transform-origin: 228px 92px; }
          .anim-car-smoke-1 { animation: ${isMoving ? "exhaustSmokePuff 1.1s ease-out infinite" : "none"}; transform-origin: 26px 88px; }
          .anim-car-smoke-2 { animation: ${isMoving ? "exhaustSmokePuff 1.1s ease-out infinite 0.55s" : "none"}; transform-origin: 26px 88px; }
        `}</style>

        {/* Exhaust Puffs */}
        <circle cx="26" cy="88" r="5" fill="#94a3b8" className="anim-car-smoke-1" />
        <circle cx="26" cy="88" r="4" fill="#cbd5e1" className="anim-car-smoke-2" />

        {/* Headlight Beam Cone */}
        <polygon points="280,88 340,75 340,110 280,98" fill="url(#reusableCarBeam)" />

        {/* Car Suspended Body Group */}
        <g className="anim-car-suspension">
          {/* Main Sculpted Body */}
          <path
            d="M32 88 L 38 66 C 40 58 46 52 54 50 L 86 38 C 94 35 102 30 108 22 L 122 6 C 128 0 136 -4 146 -4 H 178 C 188 -4 196 1 202 10 L 220 40 L 230 44 C 236 46 240 52 240 60 L 242 84 C 242 88 238 92 234 92 H 214 A 26 26 0 0 0 162 92 H 100 A 26 26 0 0 0 48 92 H 34 C 30 92 28 90 32 88 Z"
            fill="url(#reusableCarBodyGrad)"
            stroke="#e11d48"
            strokeWidth="1.8"
            strokeLinejoin="round"
            transform="translate(30, 2)"
          />

          {/* Cabin Glass & Roof Pillar */}
          <path
            d="M172 28 L 184 14 C 188 10 194 7 202 7 H 234 C 242 7 248 12 252 20 L 266 44 H 172 Z"
            fill="#0f172a"
            fillOpacity="0.85"
            stroke="#38bdf8"
            strokeWidth="1.2"
          />
          {/* B-Pillar */}
          <line x1="214" y1="7" x2="214" y2="44" stroke="#475569" strokeWidth="2.5" />
          {/* Handles */}
          <rect x="186" y="56" width="12" height="3" rx="1.5" fill="#f8fafc" />
          <rect x="228" y="56" width="12" height="3" rx="1.5" fill="#f8fafc" />

          {/* Front Light Cluster */}
          <path d="M290 60 L 298 64 L 292 72 Z" fill="#fef08a" stroke="#facc15" strokeWidth="1" />
          {/* Taillight LED Bar */}
          <rect x="62" y="68" width="5" height="12" rx="2" fill="#ef4444" stroke="#f43f5e" strokeWidth="1" />
        </g>

        {/* Independently Spinning Wheels */}
        {/* Rear Wheel */}
        <g className="anim-car-w1">
          <circle cx="74" cy="92" r="22" fill="#0f172a" stroke="#334155" strokeWidth="5" />
          <circle cx="74" cy="92" r="14" fill="url(#reusableAlloyGrad)" stroke="#64748b" strokeWidth="1.5" />
          {/* 5-Spoke Alloys */}
          <line x1="74" y1="79" x2="74" y2="105" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="62" y1="86" x2="86" y2="98" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="64" y1="100" x2="84" y2="84" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="74" cy="92" r="4" fill="#e11d48" />
          <path d="M66 80 A 14 14 0 0 1 82 80" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* Front Wheel */}
        <g className="anim-car-w2">
          <circle cx="228" cy="92" r="22" fill="#0f172a" stroke="#334155" strokeWidth="5" />
          <circle cx="228" cy="92" r="14" fill="url(#reusableAlloyGrad)" stroke="#64748b" strokeWidth="1.5" />
          {/* 5-Spoke Alloys */}
          <line x1="228" y1="79" x2="228" y2="105" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="216" y1="86" x2="240" y2="98" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="218" y1="100" x2="238" y2="84" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="228" cy="92" r="4" fill="#e11d48" />
          <path d="M220 80 A 14 14 0 0 1 236 80" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
