"use client";

import React from "react";

/**
 * AnimatedSofa
 * Reusable animated SVG sofa illustration with tufted velvet fabric,
 * tapered wooden legs, plush throw pillows, and gentle breathing/settle animation.
 */
export default function AnimatedSofa({ className = "", animate = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusableSofaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" />
            <stop offset="60%" stopColor="#059669" />
            <stop offset="100%" stopColor="#047857" />
          </linearGradient>

          <linearGradient id="reusableCushionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>

        <style>{`
          @keyframes sofaGentleBreathe {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-3px) scale(1.01); }
          }
          .anim-sofa-breathe { animation: ${animate ? "sofaGentleBreathe 4s ease-in-out infinite" : "none"}; transform-origin: bottom center; }
        `}</style>

        {/* Drop Shadow */}
        <ellipse cx="100" cy="115" rx="72" ry="10" fill="#000000" fillOpacity="0.35" />

        <g className="anim-sofa-breathe">
          {/* Wooden Legs */}
          <line x1="40" y1="100" x2="35" y2="116" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="160" y1="100" x2="165" y2="116" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
          <line x1="60" y1="100" x2="58" y2="114" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
          <line x1="140" y1="100" x2="142" y2="114" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />

          {/* Tufted Backrest */}
          <rect x="30" y="20" width="140" height="52" rx="16" fill="url(#reusableSofaGrad)" stroke="#059669" strokeWidth="1.8" />
          <circle cx="60" cy="40" r="2" fill="#047857" />
          <circle cx="100" cy="40" r="2" fill="#047857" />
          <circle cx="140" cy="40" r="2" fill="#047857" />

          {/* Left Armrest */}
          <rect x="18" y="38" width="22" height="54" rx="10" fill="url(#reusableSofaGrad)" stroke="#047857" strokeWidth="1.8" />
          {/* Right Armrest */}
          <rect x="160" y="38" width="22" height="54" rx="10" fill="url(#reusableSofaGrad)" stroke="#047857" strokeWidth="1.8" />

          {/* Seat Cushion Base */}
          <rect x="29" y="64" width="142" height="28" rx="8" fill="url(#reusableCushionGrad)" stroke="#047857" strokeWidth="1.8" />

          {/* Accent Throw Pillows */}
          <g transform="translate(36, 50) rotate(14)">
            <rect x="0" y="0" width="22" height="22" rx="6" fill="#facc15" stroke="#eab308" strokeWidth="1.2" />
            <line x1="4" y1="11" x2="18" y2="11" stroke="#ca8a04" strokeWidth="1" />
          </g>
          <g transform="translate(138, 52) rotate(-16)">
            <rect x="0" y="0" width="22" height="22" rx="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
            <circle cx="11" cy="11" r="3" fill="#e0f2fe" />
          </g>
        </g>
      </svg>
    </div>
  );
}
