"use client";

import React from "react";

/**
 * AnimatedLaptop
 * Reusable animated SVG unibody laptop illustration with opening lid,
 * glowing display, animated chart waveforms, and aluminum keyboard base.
 */
export default function AnimatedLaptop({ className = "", animate = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 220 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusableLaptopDisplayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>

          <linearGradient id="reusableLaptopAluminumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#e2e8f0" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          <radialGradient id="reusableLaptopGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <style>{`
          @keyframes laptopOpenBreathe {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.02) translateY(-1px); }
          }
          @keyframes laptopCodeScanMove {
            0% { transform: translateY(0); opacity: 0.5; }
            50% { opacity: 0.95; }
            100% { transform: translateY(-12px); opacity: 0.5; }
          }

          .anim-laptop-lid { animation: ${animate ? "laptopOpenBreathe 4s ease-in-out infinite" : "none"}; transform-origin: 110px 120px; }
          .anim-laptop-scan { animation: ${animate ? "laptopCodeScanMove 2.4s linear infinite" : "none"}; }
        `}</style>

        {/* Ambient Display Glow Cone */}
        <circle cx="110" cy="65" r="55" fill="url(#reusableLaptopGlow)" className="pointer-events-none" />

        {/* Screen Lid Assembly */}
        <g className="anim-laptop-lid">
          {/* Bezel */}
          <rect x="30" y="10" width="160" height="110" rx="8" fill="#0f172a" stroke="url(#reusableLaptopAluminumGrad)" strokeWidth="2.5" />
          {/* Webcam */}
          <circle cx="110" cy="15" r="1.5" fill="#38bdf8" />

          {/* Screen Display */}
          <rect x="36" y="20" width="148" height="94" rx="4" fill="url(#reusableLaptopDisplayGrad)" />

          {/* Animated Waveform & Code Lines */}
          <g className="anim-laptop-scan" opacity="0.85">
            <line x1="44" y1="32" x2="90" y2="32" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="44" y1="42" x2="75" y2="42" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round" />
            <line x1="44" y1="52" x2="105" y2="52" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 90 Q 65 60, 90 85 T 140 65 T 175 80" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
            <path d="M44 100 Q 65 75, 90 95 T 140 80 T 175 92" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" fill="none" />
          </g>

          {/* App Window */}
          <rect x="130" y="26" width="46" height="32" rx="4" fill="#0f172a" fillOpacity="0.45" stroke="#ffffff" strokeWidth="1" />
          <circle cx="140" cy="38" r="3" fill="#38bdf8" />
          <circle cx="150" cy="38" r="3" fill="#ec4899" />
          <circle cx="160" cy="38" r="3" fill="#facc15" />
        </g>

        {/* Aluminum Laptop Base */}
        <path
          d="M10 135 L 26 122 H 194 L 210 135 H 10 Z"
          fill="url(#reusableLaptopAluminumGrad)"
          stroke="#64748b"
          strokeWidth="2"
        />
        <path d="M100 135 H 120 L 118 138 H 102 Z" fill="#334155" />
        <rect x="85" y="124" width="50" height="9" rx="2" fill="#475569" stroke="#94a3b8" strokeWidth="0.8" />
      </svg>
    </div>
  );
}
