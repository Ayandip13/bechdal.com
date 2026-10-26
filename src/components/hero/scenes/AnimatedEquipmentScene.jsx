"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

/**
 * AnimatedEquipmentScene (Hero Slide 4)
 * Real animated SVG equipment & machinery scene:
 * - A heavy-duty agricultural farm tractor chugs along with spinning lugged wheels & rhythmic exhaust smoke.
 * - An iconic cast-iron dumbbell executes a smooth, controlled lifting curl motion with power sparkles.
 * - A kettlebell with weight markings and a rotating industrial gear establish a versatile commercial hub.
 */
export default function AnimatedEquipmentScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute w-64 h-64 rounded-full bg-amber-500/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute -top-6 -left-6 w-48 h-48 rounded-full bg-orange-600/20 blur-2xl pointer-events-none" />

      {/* Main Vector Scene Container */}
      <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] aspect-[16/10] flex items-center justify-center">
        <svg
          viewBox="0 0 420 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl overflow-visible"
        >
          <defs>
            {/* Equipment Scene Backdrop Gradient */}
            <linearGradient id="equipSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#2a1b06" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#1c1003" stopOpacity="0.95" />
            </linearGradient>

            {/* Farm Tractor Green Paint */}
            <linearGradient id="tractorGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#16a34a" />
              <stop offset="50%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>

            {/* Heavy Cast Iron Dumbbell Gradient */}
            <linearGradient id="castIronGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="50%" stopColor="#334155" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>

            {/* Chrome Steel Barbell Knurling */}
            <linearGradient id="chromeSteelGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#cbd5e1" />
              <stop offset="50%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>

            {/* Golden Yellow Tractor Wheel Rim */}
            <radialGradient id="tractorRimGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="50%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#ca8a04" />
            </radialGradient>
          </defs>

          <style>{`
            /* Dumbbell Lifting & Curling Motion */
            @keyframes dumbbellLiftCurl {
              0% { transform: translateY(14px) rotate(-12deg); }
              25% { transform: translateY(0px) rotate(-4deg); }
              50% { transform: translateY(-16px) rotate(14deg); }
              75% { transform: translateY(-4px) rotate(4deg); }
              100% { transform: translateY(14px) rotate(-12deg); }
            }
            /* Power Spark Burst at Peak of Lift */
            @keyframes powerGleam {
              0%, 40% { transform: scale(0.4); opacity: 0; }
              50% { transform: scale(1.3); opacity: 1; }
              65%, 100% { transform: scale(0.6); opacity: 0; }
            }
            /* Farm Tractor Chugging Forward Motion */
            @keyframes tractorChug {
              0%, 100% { transform: translateX(0) translateY(0); }
              25% { transform: translateX(5px) translateY(-2px); }
              50% { transform: translateX(10px) translateY(1px); }
              75% { transform: translateX(4px) translateY(-1px); }
            }
            /* Tractor Wheel Rotation */
            @keyframes tractorWheelSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            /* Smokestack Puff */
            @keyframes smokePuffRise {
              0% { transform: scale(0.3) translateY(0); opacity: 0; }
              40% { opacity: 0.85; }
              100% { transform: scale(1.8) translateY(-22px) translateX(-12px); opacity: 0; }
            }
            /* Industrial Gear Rotation */
            @keyframes gearSlowTurn {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }

            .anim-dumbbell-curl { animation: dumbbellLiftCurl 3.2s ease-in-out infinite; transform-origin: 105px 125px; }
            .anim-power-spark { animation: powerGleam 3.2s ease-in-out infinite; transform-origin: 105px 105px; }
            .anim-tractor-group { animation: tractorChug 3.8s ease-in-out infinite; }
            .anim-tr-rear-wheel { animation: tractorWheelSpin 1.6s linear infinite; transform-origin: 226px 186px; }
            .anim-tr-front-wheel { animation: tractorWheelSpin 1.1s linear infinite; transform-origin: 326px 198px; }
            .anim-tr-smoke-1 { animation: smokePuffRise 1.6s ease-out infinite; transform-origin: 300px 92px; }
            .anim-tr-smoke-2 { animation: smokePuffRise 1.6s ease-out infinite 0.8s; transform-origin: 300px 92px; }
            .anim-gear-turn { animation: gearSlowTurn 14s linear infinite; transform-origin: 180px 70px; }
          `}</style>

          {/* 1. Backdrop Scene Card */}
          <rect x="10" y="10" width="400" height="230" rx="20" fill="url(#equipSkyGrad)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

          {/* 2. Heavy Ground Surface (Industrial / Field Concrete) */}
          <path d="M10 185 L 410 185 L 410 238 A 18 18 0 0 1 392 238 L 28 238 A 18 18 0 0 1 10 238 Z" fill="#0f172a" />
          <line x1="10" y1="185" x2="410" y2="185" stroke="#f59e0b" strokeWidth="2" strokeOpacity="0.7" />
          {/* Safety Hazard Stripes at Base */}
          <line x1="20" y1="230" x2="400" y2="230" stroke="#facc15" strokeWidth="2.5" strokeDasharray="14 10" strokeOpacity="0.4" />

          {/* 3. Background Industrial Heavy Gear (Smoothly turning in background) */}
          <g className="anim-gear-turn" opacity="0.3">
            <circle cx="180" cy="70" r="34" stroke="#f59e0b" strokeWidth="3" strokeDasharray="10 6" fill="none" />
            <circle cx="180" cy="70" r="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
            <circle cx="180" cy="70" r="7" fill="#0f172a" />
          </g>

          {/* 4. Agriculture & Construction Tractor (Chugging forward with smoke puffs!) */}
          <g className="anim-tractor-group">
            {/* Smokestack Puffs */}
            <circle cx="300" cy="92" r="5" fill="#94a3b8" className="anim-tr-smoke-1" />
            <circle cx="300" cy="92" r="4" fill="#cbd5e1" className="anim-tr-smoke-2" />

            {/* Vertical Smokestack Pipe */}
            <rect x="298" y="94" width="4.5" height="30" rx="1.5" fill="#334155" stroke="#64748b" strokeWidth="1" />
            <ellipse cx="300" cy="94" rx="3.5" ry="1.5" fill="#94a3b8" />

            {/* Tractor Driver ROPS Canopy / Cab Frame */}
            <path d="M214 158 V 104 C 214 98 220 94 228 94 H 268 C 274 94 278 98 278 104 V 158" stroke="#facc15" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            {/* Cab Roof Shield */}
            <rect x="210" y="90" width="72" height="6" rx="2.5" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
            {/* Driver Steering Wheel & Seat */}
            <rect x="232" y="146" width="16" height="18" rx="4" fill="#0f172a" stroke="#475569" strokeWidth="1" />
            <line x1="262" y1="135" x2="252" y2="148" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
            <circle cx="264" cy="133" r="5" stroke="#facc15" strokeWidth="2" fill="none" />

            {/* Tractor Front Engine Hood / Bonnet */}
            <path
              d="M272 136 H 334 C 342 136 348 142 348 150 V 180 H 272 V 136 Z"
              fill="url(#tractorGreenGrad)"
              stroke="#15803d"
              strokeWidth="2"
            />
            {/* Front Grill Radiator */}
            <rect x="342" y="146" width="5" height="26" rx="1" fill="#0f172a" />
            <line x1="344" y1="148" x2="344" y2="170" stroke="#facc15" strokeWidth="1.2" strokeDasharray="2 2" />
            {/* Front Bright Halogen Worklight */}
            <circle cx="347" cy="144" r="3.5" fill="#fef08a" stroke="#eab308" strokeWidth="1" />

            {/* Rear Mudguard / Fender */}
            <path d="M198 178 A 38 38 0 0 1 254 158 V 178 Z" fill="url(#tractorGreenGrad)" stroke="#15803d" strokeWidth="1.8" />

            {/* Rear Big Heavy Lugged Tire (With Deep Traction Treads) */}
            <g className="anim-tr-rear-wheel">
              <circle cx="226" cy="186" r="32" fill="#0f172a" stroke="#1e293b" strokeWidth="7" />
              {/* Traction Lug Cleats */}
              <circle cx="226" cy="186" r="28" stroke="#334155" strokeWidth="3" strokeDasharray="6 8" />
              {/* Big Yellow Alloy Rim */}
              <circle cx="226" cy="186" r="18" fill="url(#tractorRimGrad)" stroke="#ca8a04" strokeWidth="2" />
              <circle cx="226" cy="186" r="6" fill="#15803d" stroke="#0f172a" strokeWidth="2" />
              {/* Rim Bolt Studs */}
              <circle cx="226" cy="176" r="1.5" fill="#0f172a" />
              <circle cx="226" cy="196" r="1.5" fill="#0f172a" />
              <circle cx="216" cy="186" r="1.5" fill="#0f172a" />
              <circle cx="236" cy="186" r="1.5" fill="#0f172a" />
            </g>

            {/* Front Smaller Steering Tire */}
            <g className="anim-tr-front-wheel">
              <circle cx="326" cy="198" r="18" fill="#0f172a" stroke="#1e293b" strokeWidth="4.5" />
              <circle cx="326" cy="198" r="10" fill="url(#tractorRimGrad)" stroke="#ca8a04" strokeWidth="1.5" />
              <circle cx="326" cy="198" r="3.5" fill="#15803d" />
            </g>
          </g>

          {/* 5. Gym Equipment Showcase (Dumbbell executing controlled lifting motion!) */}
          <g>
            {/* Power Sparkles Burst at Apex of Curl */}
            <path
              d="M105 78 L 107 83 L 112 85 L 107 87 L 105 92 L 103 87 L 98 85 L 103 83 Z"
              fill="#facc15"
              className="anim-power-spark"
            />
            <circle cx="120" cy="80" r="2" fill="#38bdf8" className="anim-power-spark" />

            {/* Lifting Cast-Iron Hex Dumbbell */}
            <g className="anim-dumbbell-curl">
              {/* Chrome Knurled Handle Grip */}
              <rect x="74" y="122" width="62" height="6" rx="2" fill="url(#chromeSteelGrad)" stroke="#64748b" strokeWidth="1" />
              <line x1="88" y1="123" x2="88" y2="127" stroke="#94a3b8" strokeWidth="1.2" />
              <line x1="105" y1="123" x2="105" y2="127" stroke="#94a3b8" strokeWidth="1.2" />
              <line x1="122" y1="123" x2="122" y2="127" stroke="#94a3b8" strokeWidth="1.2" />

              {/* Left Weight Plates (Hexagonal Silhouette) */}
              <polygon points="62,108 74,108 80,125 74,142 62,142 56,125" fill="url(#castIronGrad)" stroke="#475569" strokeWidth="1.8" />
              <polygon points="50,112 60,112 65,125 60,138 50,138 45,125" fill="#1e293b" stroke="#334155" strokeWidth="1.4" />
              <text x="68" y="128" fill="#f8fafc" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">20</text>

              {/* Right Weight Plates (Hexagonal Silhouette) */}
              <polygon points="136,108 148,108 154,125 148,142 136,142 130,125" fill="url(#castIronGrad)" stroke="#475569" strokeWidth="1.8" />
              <polygon points="150,112 160,112 165,125 160,138 150,138 145,125" fill="#1e293b" stroke="#334155" strokeWidth="1.4" />
              <text x="142" y="128" fill="#f8fafc" fontSize="6.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">KG</text>
            </g>

            {/* Competition Cast Iron Kettlebell (Resting on floor beside) */}
            <g transform="translate(68, 168)">
              {/* Handle */}
              <path d="M12 12 C 12 2, 28 2, 28 12" stroke="#64748b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Bell Ball */}
              <circle cx="20" cy="22" r="14" fill="url(#castIronGrad)" stroke="#334155" strokeWidth="1.8" />
              {/* Weight Stamp Circle */}
              <circle cx="20" cy="22" r="7" fill="#f59e0b" fillOpacity="0.2" stroke="#f59e0b" strokeWidth="1" />
              <text x="20" y="24.5" fill="#facc15" fontSize="6" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">16KG</text>
            </g>
          </g>
        </svg>

        {/* Live Quick-Commerce Floating Badges */}
        <div className="absolute top-1 sm:top-2 left-2 sm:left-4 z-20 bg-slate-950/90 border border-amber-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping inline-block" />
          <span className="text-[10px] sm:text-xs font-black text-white">Commercial Grade</span>
        </div>

        <div className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 z-20 bg-slate-950/90 border border-emerald-400/50 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
            <ShieldCheck size={12} className="text-emerald-400" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Direct Inspection</span>
            <span className="text-[8px] sm:text-[9px] text-emerald-300 font-bold">Heavy Assets & Gym</span>
          </div>
        </div>
      </div>
    </div>
  );
}
