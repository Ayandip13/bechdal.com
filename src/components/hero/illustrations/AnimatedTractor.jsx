"use client";

import React from "react";

/**
 * AnimatedTractor
 * Reusable animated SVG agricultural farm tractor illustration with independently spinning
 * heavy-traction lug tires, ROPS canopy, steering wheel, and exhaust smokestack puff.
 */
export default function AnimatedTractor({ className = "", isMoving = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 200 150"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="reusableTractorGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#16a34a" />
            <stop offset="50%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#166534" />
          </linearGradient>

          <radialGradient id="reusableTractorRimGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#facc15" />
            <stop offset="100%" stopColor="#ca8a04" />
          </radialGradient>
        </defs>

        <style>{`
          @keyframes tractorChugBob {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-2px); }
            50% { transform: translateY(1px); }
            75% { transform: translateY(-1px); }
          }
          @keyframes tractorWheelRotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes tractorSmokePuff {
            0% { transform: scale(0.3) translateY(0); opacity: 0; }
            40% { opacity: 0.85; }
            100% { transform: scale(1.8) translateY(-20px) translateX(-10px); opacity: 0; }
          }

          .anim-tractor-chassis { animation: ${isMoving ? "tractorChugBob 0.9s ease-in-out infinite" : "none"}; }
          .anim-tr-rear-w { animation: ${isMoving ? "tractorWheelRotate 1.6s linear infinite" : "none"}; transform-origin: 52px 108px; }
          .anim-tr-front-w { animation: ${isMoving ? "tractorWheelRotate 1.1s linear infinite" : "none"}; transform-origin: 152px 120px; }
          .anim-tr-smoke-puff1 { animation: ${isMoving ? "tractorSmokePuff 1.5s ease-out infinite" : "none"}; transform-origin: 126px 14px; }
          .anim-tr-smoke-puff2 { animation: ${isMoving ? "tractorSmokePuff 1.5s ease-out infinite 0.75s" : "none"}; transform-origin: 126px 14px; }
        `}</style>

        {/* Smokestack Puffs */}
        <circle cx="126" cy="14" r="5" fill="#94a3b8" className="anim-tr-smoke-puff1" />
        <circle cx="126" cy="14" r="4" fill="#cbd5e1" className="anim-tr-smoke-puff2" />

        {/* Chassis & Body Group */}
        <g className="anim-tractor-chassis">
          {/* Vertical Smokestack */}
          <rect x="124" y="16" width="4.5" height="30" rx="1.5" fill="#334155" stroke="#64748b" strokeWidth="1" />
          <ellipse cx="126" cy="16" rx="3.5" ry="1.5" fill="#94a3b8" />

          {/* Canopy / ROPS */}
          <path d="M40 80 V 26 C 40 20 46 16 54 16 H 94 C 100 16 104 20 104 26 V 80" stroke="#facc15" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <rect x="36" y="12" width="72" height="6" rx="2.5" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />

          {/* Seat & Steering */}
          <rect x="58" y="68" width="16" height="18" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <line x1="88" y1="57" x2="78" y2="70" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
          <circle cx="90" cy="55" r="5" stroke="#facc15" strokeWidth="2" fill="none" />

          {/* Front Engine Hood */}
          <path
            d="M98 58 H 160 C 168 58 174 64 174 72 V 102 H 98 V 58 Z"
            fill="url(#reusableTractorGreenGrad)"
            stroke="#15803d"
            strokeWidth="2"
          />
          {/* Grill & Halogen Light */}
          <rect x="168" y="68" width="5" height="26" rx="1" fill="#0f172a" />
          <line x1="170" y1="70" x2="170" y2="92" stroke="#facc15" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx="173" cy="66" r="3.5" fill="#fef08a" stroke="#eab308" strokeWidth="1" />

          {/* Rear Mudguard */}
          <path d="M24 100 A 38 38 0 0 1 80 80 V 100 Z" fill="url(#reusableTractorGreenGrad)" stroke="#15803d" strokeWidth="1.8" />
        </g>

        {/* Large Rear Tire with Deep Treads */}
        <g className="anim-tr-rear-w">
          <circle cx="52" cy="108" r="32" fill="#0f172a" stroke="#1e293b" strokeWidth="7" />
          <circle cx="52" cy="108" r="28" stroke="#334155" strokeWidth="3" strokeDasharray="6 8" />
          <circle cx="52" cy="108" r="18" fill="url(#reusableTractorRimGrad)" stroke="#ca8a04" strokeWidth="2" />
          <circle cx="52" cy="108" r="6" fill="#15803d" stroke="#0f172a" strokeWidth="2" />
          <circle cx="52" cy="98" r="1.5" fill="#0f172a" />
          <circle cx="52" cy="118" r="1.5" fill="#0f172a" />
          <circle cx="42" cy="108" r="1.5" fill="#0f172a" />
          <circle cx="62" cy="108" r="1.5" fill="#0f172a" />
        </g>

        {/* Smaller Front Steering Tire */}
        <g className="anim-tr-front-w">
          <circle cx="152" cy="120" r="18" fill="#0f172a" stroke="#1e293b" strokeWidth="4.5" />
          <circle cx="152" cy="120" r="10" fill="url(#reusableTractorRimGrad)" stroke="#ca8a04" strokeWidth="1.5" />
          <circle cx="152" cy="120" r="3.5" fill="#15803d" />
        </g>
      </svg>
    </div>
  );
}
