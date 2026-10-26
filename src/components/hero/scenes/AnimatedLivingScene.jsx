"use client";

import React from "react";
import { Sparkles, ShieldCheck } from "lucide-react";

/**
 * AnimatedLivingScene (Hero Slide 2)
 * Real animated SVG home and living scene:
 * - A plush designer sofa slides gently into place with a subtle spring settle.
 * - An arching brass floor lamp switches on and casts a warm illuminating light cone.
 * - A potted Monstera houseplant sways gently in the breeze.
 * - Warm ambient wall art and a steaming coffee mug on a round table add realistic coziness.
 */
export default function AnimatedLivingScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute w-64 h-64 rounded-full bg-emerald-500/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute -top-6 -right-6 w-48 h-48 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

      {/* Main Vector Scene Container */}
      <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] aspect-[16/10] flex items-center justify-center">
        <svg
          viewBox="0 0 420 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl overflow-visible"
        >
          <defs>
            {/* Room Wall Gradient */}
            <linearGradient id="livingWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#132a24" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#061e18" stopOpacity="0.95" />
            </linearGradient>

            {/* Hardwood Floor Gradient */}
            <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Sofa Fabric Gradient (Modern Emerald / Forest Velvet) */}
            <linearGradient id="sofaFabricGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="60%" stopColor="#059669" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>

            {/* Cushion Gradient */}
            <linearGradient id="cushionGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Lamp Light Glow Cone */}
            <linearGradient id="lampGlowCone" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.85" />
              <stop offset="35%" stopColor="#fde047" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
            </linearGradient>

            {/* Monstera Leaf Gradient */}
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="100%" stopColor="#15803d" />
            </linearGradient>
          </defs>

          <style>{`
            /* Sofa Entrance Slide & Gentle Breathe */
            @keyframes sofaSlideIn {
              0% { transform: translateX(65px); opacity: 0; }
              60% { transform: translateX(-4px); opacity: 1; }
              80% { transform: translateX(2px); }
              100% { transform: translateX(0); opacity: 1; }
            }
            @keyframes sofaBreathe {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-2px); }
            }
            /* Lamp Light Turn On & Warm Glow Pulse */
            @keyframes lampTurnOn {
              0%, 10% { opacity: 0; transform: scaleY(0.7); }
              25% { opacity: 0.9; transform: scaleY(1); }
              35% { opacity: 0.4; }
              50%, 100% { opacity: 0.75; transform: scaleY(1); }
            }
            /* Plant Leaf Sway in Breeze */
            @keyframes plantSwayBreeze {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(5deg) translateY(-1px); }
            }
            @keyframes leafFlutter {
              0%, 100% { transform: rotate(0deg); }
              50% { transform: rotate(-6deg); }
            }
            /* Coffee Mug Steam */
            @keyframes steamRise {
              0% { transform: translateY(0) scale(0.6); opacity: 0; }
              50% { opacity: 0.8; }
              100% { transform: translateY(-12px) scale(1.4); opacity: 0; }
            }
            /* Wall Art Sun Pulse */
            @keyframes sunPulse {
              0%, 100% { transform: scale(1); opacity: 0.8; }
              50% { transform: scale(1.15); opacity: 1; }
            }

            .anim-sofa-entry { animation: sofaSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            .anim-sofa-idle { animation: sofaBreathe 4s ease-in-out infinite 1.2s; }
            .anim-lamp-cone { animation: lampTurnOn 1.4s ease-out forwards; transform-origin: 320px 76px; }
            .anim-plant-pot { animation: plantSwayBreeze 3.6s ease-in-out infinite; transform-origin: 52px 200px; }
            .anim-leaf-single { animation: leafFlutter 2.8s ease-in-out infinite; transform-origin: 52px 145px; }
            .anim-steam-1 { animation: steamRise 1.8s ease-out infinite; }
            .anim-steam-2 { animation: steamRise 1.8s ease-out infinite 0.7s; }
            .anim-sun-glow { animation: sunPulse 3s ease-in-out infinite; transform-origin: 190px 75px; }
          `}</style>

          {/* 1. Backdrop Scene Card */}
          <rect x="10" y="10" width="400" height="230" rx="20" fill="url(#livingWallGrad)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

          {/* 2. Hardwood Parquet Floor */}
          <path d="M10 185 L 410 185 L 410 238 A 18 18 0 0 1 392 238 L 28 238 A 18 18 0 0 1 10 238 Z" fill="url(#floorGrad)" />
          <line x1="10" y1="185" x2="410" y2="185" stroke="#334155" strokeWidth="2" strokeOpacity="0.8" />
          {/* Baseboard Trim */}
          <line x1="10" y1="182" x2="410" y2="182" stroke="#475569" strokeWidth="1.2" strokeOpacity="0.4" />

          {/* 3. Wall Art & Window Arch (Atmospheric Interior Details) */}
          <g opacity="0.65">
            {/* Minimalist Arched Wall Painting */}
            <rect x="155" y="38" width="70" height="88" rx="35" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.6" />
            {/* Rising Sun inside painting */}
            <circle cx="190" cy="75" r="16" fill="#facc15" fillOpacity="0.85" className="anim-sun-glow" />
            <path d="M156 95 Q 190 85, 224 95 V 125 H 156 Z" fill="#0f172a" />
            <line x1="156" y1="110" x2="224" y2="110" stroke="#34d399" strokeWidth="1.2" />

            {/* Geometric Floating Shelf */}
            <line x1="60" y1="65" x2="120" y2="65" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
            <rect x="72" y="48" width="12" height="17" rx="2" fill="#38bdf8" fillOpacity="0.5" />
            <rect x="87" y="42" width="10" height="23" rx="2" fill="#f43f5e" fillOpacity="0.5" />
            <circle cx="107" cy="56" r="6" stroke="#facc15" strokeWidth="1.2" />
          </g>

          {/* 4. Floor Lamp Light Glow Cone (Illuminates the Sofa below!) */}
          <polygon points="320,76 220,230 380,230" fill="url(#lampGlowCone)" className="anim-lamp-cone pointer-events-none" />

          {/* 5. Modern Floor Lamp (Arching Brass Stem & Shade) */}
          <g>
            {/* Heavy Base */}
            <ellipse cx="340" cy="216" rx="18" ry="5" fill="#facc15" stroke="#eab308" strokeWidth="1.5" />
            {/* Curved Stem */}
            <path d="M340 216 V 110 C 340 70, 320 60, 320 74" stroke="#facc15" strokeWidth="3.2" strokeLinecap="round" fill="none" />
            {/* Lamp Shade (Pivoting downward) */}
            <polygon points="308,82 332,82 338,72 302,72" fill="#fde047" stroke="#eab308" strokeWidth="1.5" />
            {/* Glowing Bulb Tip */}
            <circle cx="320" cy="80" r="4" fill="#ffffff" />
          </g>

          {/* 6. Main Feature: Designer 3-Seater Velvet Sofa (Slides gently into place!) */}
          <g className="anim-sofa-entry">
            <g className="anim-sofa-idle">
              {/* Sofa Drop Shadow */}
              <ellipse cx="205" cy="208" rx="72" ry="10" fill="#000000" fillOpacity="0.35" />

              {/* Wooden Tapered Legs */}
              <line x1="145" y1="192" x2="140" y2="208" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="265" y1="192" x2="270" y2="208" stroke="#facc15" strokeWidth="3.5" strokeLinecap="round" />
              <line x1="165" y1="192" x2="163" y2="206" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />
              <line x1="245" y1="192" x2="247" y2="206" stroke="#ca8a04" strokeWidth="3" strokeLinecap="round" />

              {/* Main Sofa Backrest */}
              <rect x="135" y="112" width="140" height="52" rx="16" fill="url(#sofaFabricGrad)" stroke="#059669" strokeWidth="1.8" />
              {/* Tufted Button Dimples on Backrest */}
              <circle cx="165" cy="132" r="2" fill="#047857" />
              <circle cx="205" cy="132" r="2" fill="#047857" />
              <circle cx="245" cy="132" r="2" fill="#047857" />

              {/* Left Armrest */}
              <rect x="122" y="130" width="22" height="54" rx="10" fill="url(#sofaFabricGrad)" stroke="#047857" strokeWidth="1.8" />
              {/* Right Armrest */}
              <rect x="266" y="130" width="22" height="54" rx="10" fill="url(#sofaFabricGrad)" stroke="#047857" strokeWidth="1.8" />

              {/* Plush Seat Base */}
              <rect x="134" y="156" width="142" height="28" rx="8" fill="url(#cushionGrad)" stroke="#047857" strokeWidth="1.8" />

              {/* Accent Throw Pillows */}
              <g transform="translate(142, 142) rotate(14)">
                <rect x="0" y="0" width="22" height="22" rx="6" fill="#facc15" stroke="#eab308" strokeWidth="1.2" />
                <line x1="4" y1="11" x2="18" y2="11" stroke="#ca8a04" strokeWidth="1" />
              </g>
              <g transform="translate(244, 144) rotate(-16)">
                <rect x="0" y="0" width="22" height="22" rx="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />
                <circle cx="11" cy="11" r="3" fill="#e0f2fe" />
              </g>
            </g>
          </g>

          {/* 7. Round Nordic Coffee Table with Steaming Mug */}
          <g>
            {/* Table Legs */}
            <line x1="185" y1="202" x2="178" y2="220" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="225" y1="202" x2="232" y2="220" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
            {/* Table Surface */}
            <ellipse cx="205" cy="202" rx="30" ry="7" fill="#1e293b" stroke="#64748b" strokeWidth="1.6" />

            {/* Steaming Coffee Mug */}
            <rect x="200" y="190" width="10" height="10" rx="2" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
            <path d="M210 193 H 213 A 2 2 0 0 1 213 197 H 210" stroke="#cbd5e1" strokeWidth="1" fill="none" />
            {/* Animated Steam Plumes */}
            <path d="M203 188 Q 201 184, 203 180" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" className="anim-steam-1" />
            <path d="M207 187 Q 209 183, 207 179" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" className="anim-steam-2" />
          </g>

          {/* 8. Potted Monstera Houseplant (Swaying gently in the breeze!) */}
          <g className="anim-plant-pot">
            {/* Terracotta Planter Pot */}
            <path d="M42 195 L 46 222 H 62 L 66 195 Z" fill="#ea580c" stroke="#c2410c" strokeWidth="1.5" />
            <ellipse cx="54" cy="195" rx="12" ry="3.5" fill="#9a3412" />

            {/* Main Central Stem */}
            <path d="M54 195 Q 52 165, 54 142" stroke="#15803d" strokeWidth="2.5" strokeLinecap="round" fill="none" />

            {/* Swaying Monstera Leaf 1 (Left Split Leaf) */}
            <g className="anim-leaf-single">
              <path
                d="M52 152 C 40 148, 25 138, 26 122 C 27 108, 44 116, 52 142 Z"
                fill="url(#leafGrad)"
                stroke="#166534"
                strokeWidth="1.4"
              />
              <line x1="52" y1="142" x2="35" y2="122" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* Swaying Monstera Leaf 2 (Right Top Big Leaf) */}
            <g>
              <path
                d="M54 142 C 64 135, 82 124, 78 108 C 74 94, 56 106, 52 135 Z"
                fill="url(#leafGrad)"
                stroke="#166534"
                strokeWidth="1.4"
              />
              <line x1="52" y1="135" x2="70" y2="112" stroke="#86efac" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* Small Baby Leaf */}
            <ellipse cx="44" cy="172" rx="7" ry="11" transform="rotate(-30 44 172)" fill="#22c55e" stroke="#15803d" strokeWidth="1" />
          </g>
        </svg>

        {/* Live Quick-Commerce Floating Badges */}
        <div className="absolute top-1 sm:top-2 left-2 sm:left-4 z-20 bg-slate-950/90 border border-emerald-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-[10px] sm:text-xs font-black text-white">Save Up to 60%</span>
        </div>

        <div className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 z-20 bg-slate-950/90 border border-amber-400/50 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
            <Sparkles size={12} className="fill-amber-400 text-amber-400" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Teak & Velvet</span>
            <span className="text-[8px] sm:text-[9px] text-amber-300 font-bold">100% Quality Inspected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
