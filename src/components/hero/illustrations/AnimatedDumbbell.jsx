"use client";

import React from "react";

/**
 * AnimatedDumbbell
 * Reusable animated SVG cast-iron dumbbell illustration with knurled chrome handle,
 * hexagonal 20KG weight plates, and smooth controlled lifting curl motion.
 */
export default function AnimatedDumbbell({ className = "", animate = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 140 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusableCastIronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>

          <linearGradient id="reusableChromeSteelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#cbd5e1" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes dumbbellCurlSmooth {
            0% { transform: translateY(8px) rotate(-10deg); }
            25% { transform: translateY(0px) rotate(-2deg); }
            50% { transform: translateY(-10px) rotate(12deg); }
            75% { transform: translateY(-2px) rotate(3deg); }
            100% { transform: translateY(8px) rotate(-10deg); }
          }

          .anim-dumbbell-lift { animation: ${animate ? "dumbbellCurlSmooth 3.2s ease-in-out infinite" : "none"}; transform-origin: 70px 40px; }
        `}</style>

        {/* Dumbbell Assembly */}
        <g className="anim-dumbbell-lift">
          {/* Chrome Knurled Handle */}
          <rect x="39" y="37" width="62" height="6" rx="2" fill="url(#reusableChromeSteelGrad)" stroke="#64748b" strokeWidth="1" />
          <line x1="53" y1="38" x2="53" y2="42" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="70" y1="38" x2="70" y2="42" stroke="#94a3b8" strokeWidth="1.2" />
          <line x1="87" y1="38" x2="87" y2="42" stroke="#94a3b8" strokeWidth="1.2" />

          {/* Left Hexagonal Plates */}
          <polygon points="27,23 39,23 45,40 39,57 27,57 21,40" fill="url(#reusableCastIronGrad)" stroke="#475569" strokeWidth="1.8" />
          <polygon points="15,27 25,27 30,40 25,53 15,53 10,40" fill="#1e293b" stroke="#334155" strokeWidth="1.4" />
          <text x="33" y="43" fill="#f8fafc" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">20</text>

          {/* Right Hexagonal Plates */}
          <polygon points="101,23 113,23 119,40 113,57 101,57 95,40" fill="url(#reusableCastIronGrad)" stroke="#475569" strokeWidth="1.8" />
          <polygon points="115,27 125,27 130,40 125,53 115,53 110,40" fill="#1e293b" stroke="#334155" strokeWidth="1.4" />
          <text x="107" y="43" fill="#f8fafc" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">KG</text>
        </g>
      </svg>
    </div>
  );
}
