"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

/**
 * AnimatedVehiclesScene (Hero Slide 1)
 * Real animated SVG vehicle scene:
 * - A sporty red car drives smoothly along a two-lane highway with spinning alloy wheels & suspension bob.
 * - An aerodynamic blue motorcycle enters and cruises along the road with rotating wheels & headlight glow.
 * - Animated dashed highway lane markings create a genuine feeling of continuous forward motion.
 * - Realistic exhaust puffs and environmental speed lines establish lively quick-commerce energy.
 */
export default function AnimatedVehiclesScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute w-64 h-64 rounded-full bg-red-500/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full bg-amber-500/20 blur-2xl pointer-events-none" />

      {/* Main Vector Scene Container */}
      <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] aspect-[16/10] flex items-center justify-center">
        <svg
          viewBox="0 0 420 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl overflow-visible"
        >
          <defs>
            {/* Background Sky & Environment Gradient */}
            <linearGradient id="vehSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" stopOpacity="0.95" />
              <stop offset="60%" stopColor="#1e1b4b" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#31102f" stopOpacity="0.85" />
            </linearGradient>

            {/* Asphalt Road Gradient */}
            <linearGradient id="roadAsphalt" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#020617" />
            </linearGradient>

            {/* Car Paint Gradient (Vibrant Crimson / Sunset Red) */}
            <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#9f1239" />
            </linearGradient>

            {/* Bike Paint Gradient (Electric Cyan / Blue) */}
            <linearGradient id="bikeBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>

            {/* Headlight Beam Cone */}
            <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#fde047" stopOpacity="0" />
            </linearGradient>

            {/* Wheel Alloy Gradient */}
            <radialGradient id="alloyGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="60%" stopColor="#475569" />
              <stop offset="100%" stopColor="#0f172a" />
            </radialGradient>
          </defs>

          <style>{`
            /* Road Lane Markings Continuous Dash Flow */
            @keyframes roadDashFlow {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -72; }
            }
            /* Car Driving Motion with Suspension Bob */
            @keyframes carDriveAcross {
              0% { transform: translateX(-16px) translateY(0px); }
              25% { transform: translateX(8px) translateY(-2px); }
              50% { transform: translateX(18px) translateY(1px); }
              75% { transform: translateX(4px) translateY(-2px); }
              100% { transform: translateX(-16px) translateY(0px); }
            }
            /* Motorcycle Entering & Gliding along Top Lane */
            @keyframes bikeRideMotion {
              0% { transform: translateX(18px) translateY(0px) rotate(0.5deg); }
              50% { transform: translateX(-12px) translateY(-3px) rotate(-1deg); }
              100% { transform: translateX(18px) translateY(0px) rotate(0.5deg); }
            }
            /* Wheel Rotation */
            @keyframes wheelRotateLoop {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            /* Exhaust Smoke Billow */
            @keyframes exhaustBillow {
              0% { transform: scale(0.3) translate(0, 0); opacity: 0; }
              40% { opacity: 0.8; }
              100% { transform: scale(1.6) translate(-22px, -8px); opacity: 0; }
            }
            /* Distant Cloud Drift */
            @keyframes cloudMove {
              0%, 100% { transform: translateX(0); }
              50% { transform: translateX(14px); }
            }
            /* Speed Lines Flash */
            @keyframes speedLineBlink {
              0%, 100% { opacity: 0.2; transform: scaleX(0.8); }
              50% { opacity: 0.9; transform: scaleX(1.15); }
            }

            .anim-road-dash { animation: roadDashFlow 0.8s linear infinite; }
            .anim-car-group { animation: carDriveAcross 4.6s ease-in-out infinite; }
            .anim-bike-group { animation: bikeRideMotion 3.8s ease-in-out infinite; }
            .anim-wheel-c1 { animation: wheelRotateLoop 0.5s linear infinite; transform-origin: 104px 196px; }
            .anim-wheel-c2 { animation: wheelRotateLoop 0.5s linear infinite; transform-origin: 218px 196px; }
            .anim-wheel-b1 { animation: wheelRotateLoop 0.45s linear infinite; transform-origin: 258px 156px; }
            .anim-wheel-b2 { animation: wheelRotateLoop 0.45s linear infinite; transform-origin: 326px 156px; }
            .anim-smoke-1 { animation: exhaustBillow 1.2s ease-out infinite; transform-origin: 56px 192px; }
            .anim-smoke-2 { animation: exhaustBillow 1.2s ease-out infinite 0.6s; transform-origin: 56px 192px; }
            .anim-cloud-drift { animation: cloudMove 8s ease-in-out infinite; }
            .anim-speed-streak { animation: speedLineBlink 0.9s ease-in-out infinite; transform-origin: left center; }
          `}</style>

          {/* 1. Backdrop Scene Card */}
          <rect x="10" y="10" width="400" height="230" rx="20" fill="url(#vehSkyGrad)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

          {/* 2. Distant Horizon Hills & City Silhouette */}
          <g className="anim-cloud-drift" opacity="0.45">
            <path d="M10 135 Q 80 115, 160 128 T 320 122 T 410 130 V 145 H 10 Z" fill="#1e1b4b" />
            <rect x="85" y="105" width="16" height="25" fill="#312e81" opacity="0.4" />
            <rect x="110" y="95" width="22" height="35" fill="#312e81" opacity="0.5" />
            <rect x="290" y="100" width="20" height="30" fill="#312e81" opacity="0.4" />
            <rect x="320" y="88" width="26" height="42" fill="#312e81" opacity="0.5" />
          </g>

          {/* 3. The Highway (Two-Lane Asphalt with Moving Striping) */}
          <g>
            {/* Road Surface */}
            <path d="M10 142 L 410 142 L 410 238 A 18 18 0 0 1 392 238 L 28 238 A 18 18 0 0 1 10 238 Z" fill="url(#roadAsphalt)" />
            {/* Top Road Verge Line (Green Neon) */}
            <line x1="10" y1="142" x2="410" y2="142" stroke="#10b981" strokeWidth="2.5" strokeOpacity="0.8" />
            {/* Upper Lane Divider (Dashed & Continuously Moving) */}
            <line x1="10" y1="172" x2="410" y2="172" stroke="#facc15" strokeWidth="2" strokeDasharray="18 18" className="anim-road-dash" />
            {/* Lower Lane Boundary (Solid White) */}
            <line x1="10" y1="230" x2="410" y2="230" stroke="#ffffff" strokeWidth="2" strokeOpacity="0.5" />
          </g>

          {/* 4. Speed Motion Streaks in Environment */}
          <line x1="16" y1="160" x2="70" y2="160" stroke="#38bdf8" strokeWidth="1.6" strokeLinecap="round" className="anim-speed-streak" />
          <line x1="330" y1="135" x2="395" y2="135" stroke="#facc15" strokeWidth="1.6" strokeLinecap="round" className="anim-speed-streak" style={{ animationDelay: "400ms" }} />
          <line x1="280" y1="210" x2="370" y2="210" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" className="anim-speed-streak" style={{ animationDelay: "200ms" }} />

          {/* 5. Motorbike Scene (Cruising on the upper lane) */}
          <g className="anim-bike-group">
            {/* Bike Headlight Glow Beam */}
            <polygon points="340,146 410,132 410,165 340,154" fill="url(#headlightBeam)" opacity="0.6" />

            {/* Bike Chassis & Tank */}
            <path
              d="M260 156 L 278 132 L 298 132 L 316 122 L 334 140 L 326 156 Z"
              fill="url(#bikeBodyGrad)"
              stroke="#0284c7"
              strokeWidth="1.5"
            />
            {/* Aerodynamic Windscreen */}
            <path d="M312 122 L 324 108 L 332 122 Z" fill="#38bdf8" fillOpacity="0.6" stroke="#e0f2fe" strokeWidth="1" />
            {/* Rider Helmet Silhouette */}
            <circle cx="295" cy="112" r="9" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
            <path d="M298 108 H 304 C 306 108 307 110 306 112 L 302 115 H 298 Z" fill="#facc15" />
            {/* Handlebar & Exhaust Pipe */}
            <line x1="316" y1="124" x2="322" y2="120" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M272 152 L 254 158 H 244" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />

            {/* Bike Rear Wheel (with alloy spokes) */}
            <g className="anim-wheel-b1">
              <circle cx="258" cy="156" r="14" fill="#0f172a" stroke="#334155" strokeWidth="3.5" />
              <circle cx="258" cy="156" r="7" fill="url(#alloyGrad)" />
              <line x1="258" y1="145" x2="258" y2="167" stroke="#38bdf8" strokeWidth="1.4" />
              <line x1="247" y1="156" x2="269" y2="156" stroke="#38bdf8" strokeWidth="1.4" />
            </g>

            {/* Bike Front Wheel (with alloy spokes) */}
            <g className="anim-wheel-b2">
              <circle cx="326" cy="156" r="14" fill="#0f172a" stroke="#334155" strokeWidth="3.5" />
              <circle cx="326" cy="156" r="7" fill="url(#alloyGrad)" />
              <line x1="326" y1="145" x2="326" y2="167" stroke="#38bdf8" strokeWidth="1.4" />
              <line x1="315" y1="156" x2="337" y2="156" stroke="#38bdf8" strokeWidth="1.4" />
            </g>
          </g>

          {/* 6. Main Car Scene (Cruising on the lower lane with real animated parts) */}
          <g className="anim-car-group">
            {/* Exhaust Smoke Puffs */}
            <circle cx="56" cy="192" r="5" fill="#94a3b8" className="anim-smoke-1" />
            <circle cx="56" cy="192" r="4" fill="#cbd5e1" className="anim-smoke-2" />

            {/* Car Headlight Projection onto Asphalt */}
            <polygon points="252,192 370,175 370,225 252,204" fill="url(#headlightBeam)" />

            {/* Car Main Body (Sculpted Sports Coupe / Sedan) */}
            <path
              d="M62 192 L 68 170 C 70 162 76 156 84 154 L 116 142 C 124 139 132 134 138 126 L 152 110 C 158 104 166 100 176 100 H 208 C 218 100 226 105 232 114 L 250 144 L 260 148 C 266 150 270 156 270 164 L 272 188 C 272 192 268 196 264 196 H 244 A 26 26 0 0 0 192 196 H 130 A 26 26 0 0 0 78 196 H 64 C 60 196 58 194 62 192 Z"
              fill="url(#carBodyGrad)"
              stroke="#e11d48"
              strokeWidth="1.8"
              strokeLinejoin="round"
            />

            {/* Tinted Windows & Roof Pillar */}
            <path
              d="M142 126 L 154 112 C 158 108 164 105 172 105 H 204 C 212 105 218 110 222 118 L 236 142 H 142 Z"
              fill="#0f172a"
              fillOpacity="0.85"
              stroke="#38bdf8"
              strokeWidth="1.2"
            />
            {/* Center Door Pillar (B-Pillar) */}
            <line x1="184" y1="105" x2="184" y2="142" stroke="#475569" strokeWidth="2.5" />
            {/* Door Handle */}
            <rect x="156" y="154" width="12" height="3" rx="1.5" fill="#f8fafc" />
            <rect x="198" y="154" width="12" height="3" rx="1.5" fill="#f8fafc" />

            {/* Sleek Aerodynamic Headlight Lens */}
            <path d="M260 158 L 268 162 L 262 170 Z" fill="#fef08a" stroke="#facc15" strokeWidth="1" />
            {/* Taillight LED Bar */}
            <rect x="62" y="170" width="5" height="12" rx="2" fill="#ef4444" stroke="#f43f5e" strokeWidth="1" />

            {/* Front Wheel (Multi-part with rotating alloy spokes) */}
            <g className="anim-wheel-c2">
              <circle cx="218" cy="196" r="22" fill="#0f172a" stroke="#334155" strokeWidth="5" />
              <circle cx="218" cy="196" r="14" fill="url(#alloyGrad)" stroke="#64748b" strokeWidth="1.5" />
              {/* 5-Spoke Alloys */}
              <line x1="218" y1="183" x2="218" y2="209" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="206" y1="190" x2="230" y2="202" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="208" y1="204" x2="228" y2="188" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              {/* Center Hubcap */}
              <circle cx="218" cy="196" r="4" fill="#e11d48" />
              {/* Red Sport Brake Caliper */}
              <path d="M210 184 A 14 14 0 0 1 226 184" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
            </g>

            {/* Rear Wheel (Multi-part with rotating alloy spokes) */}
            <g className="anim-wheel-c1">
              <circle cx="104" cy="196" r="22" fill="#0f172a" stroke="#334155" strokeWidth="5" />
              <circle cx="104" cy="196" r="14" fill="url(#alloyGrad)" stroke="#64748b" strokeWidth="1.5" />
              {/* 5-Spoke Alloys */}
              <line x1="104" y1="183" x2="104" y2="209" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="92" y1="190" x2="116" y2="202" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              <line x1="94" y1="204" x2="114" y2="188" stroke="#f8fafc" strokeWidth="2.5" strokeLinecap="round" />
              {/* Center Hubcap */}
              <circle cx="104" cy="196" r="4" fill="#e11d48" />
              {/* Red Sport Brake Caliper */}
              <path d="M96 184 A 14 14 0 0 1 112 184" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />
            </g>
          </g>
        </svg>

        {/* Live Quick-Commerce Floating Badges */}
        <div className="absolute top-1 sm:top-2 left-2 sm:left-4 z-20 bg-slate-950/90 border border-emerald-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          <span className="text-[10px] sm:text-xs font-black text-white">0% Brokerage</span>
        </div>

        <div className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 z-20 bg-slate-950/90 border border-amber-400/50 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 flex items-center justify-center">
            <Zap size={12} className="fill-amber-400" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Instant Test Drive</span>
            <span className="text-[8px] sm:text-[9px] text-amber-300 font-bold">Direct Owner Deal</span>
          </div>
        </div>
      </div>
    </div>
  );
}
