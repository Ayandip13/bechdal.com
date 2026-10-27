"use client";

import React from "react";

/**
 * CategoryVisualGraphic
 * Category-specific animated SVG showcase illustration cards for CategoryHero banners.
 * Replaces static icons with lively, relatable vector graphics tailored to:
 * - Properties (Modern luxury architectural villa, warm windows, location pin, 0% brokerage badge)
 * - Furniture & Home Decor (Nordic lounge armchair, arched floor lamp with warm cone, steaming mug, plants)
 * - Fashion & Lifestyle (Streetwear tee on wooden hanger, retro sneaker, sunglasses with glint star, trending badge)
 * - Fitness, Gym & Music (Olympic heavy barbell, hex kettlebell, neon ECG pulse wave, guitar silhouette)
 * - Vehicles (Aerodynamic sports car, LED headlights beam, spinning alloy wheels, road dashes)
 * - Mobiles & Electronics (Bezel-less phone with Bachat alert, slim laptop with scanline, TWS earbuds)
 * - Agriculture & Equipment (Heavy farm tractor, lug wheels, golden swaying wheat, industrial gear)
 * - Default / Fallback (Glassmorphic orbital badge with glowing rings and category icon)
 */

export default function CategoryVisualGraphic({ slug, title, IconComponent }) {
  const categorySlug = (slug || "").toLowerCase().trim();

  // 1. PROPERTIES
  if (categorySlug === "properties" || categorySlug === "real-estate" || categorySlug === "property") {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes villaFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
          }
          @keyframes windowPulse {
            0%, 100% { fill-opacity: 0.75; filter: drop-shadow(0 0 4px #fbbf24); }
            50% { fill-opacity: 0.95; filter: drop-shadow(0 0 10px #f59e0b); }
          }
          @keyframes pinBounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          @keyframes pinRingExpand {
            0% { transform: scale(0.6); opacity: 0.9; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          .anim-villa { animation: villaFloat 5s ease-in-out infinite; }
          .anim-window { animation: windowPulse 3.5s ease-in-out infinite; }
          .anim-pin { animation: pinBounce 2.8s ease-in-out infinite; }
          .anim-pin-ring { animation: pinRingExpand 2.2s ease-out infinite; transform-origin: 218px 52px; }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="propWallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="propGlassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="propGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="propLawnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>

          {/* Background Ambient Glow */}
          <circle cx="140" cy="90" r="70" fill="#f59e0b" fillOpacity="0.12" filter="blur(25px)" />

          {/* Villa Main Structure */}
          <g className="anim-villa">
            {/* Ground / Front Lawn */}
            <rect x="25" y="148" width="230" height="8" rx="4" fill="url(#propLawnGrad)" />
            <rect x="80" y="145" width="45" height="4" rx="2" fill="#34d399" />

            {/* Ground Floor Wall */}
            <rect x="50" y="88" width="145" height="60" rx="6" fill="url(#propWallGrad)" stroke="#f59e0b" strokeWidth="1.5" strokeOpacity="0.6" />

            {/* Ground Floor Large Patio Doors */}
            <rect x="62" y="104" width="48" height="44" rx="3" fill="url(#propGlassGrad)" stroke="#38bdf8" strokeWidth="1.2" />
            <line x1="86" y1="104" x2="86" y2="148" stroke="#38bdf8" strokeWidth="1" strokeDasharray="3 2" />

            {/* Warm Interior Living Room Glow Window */}
            <rect x="122" y="102" width="36" height="24" rx="3" fill="#fbbf24" className="anim-window" />
            <line x1="140" y1="102" x2="140" y2="126" stroke="#b45309" strokeWidth="1" />
            <line x1="122" y1="114" x2="158" y2="114" stroke="#b45309" strokeWidth="1" />

            {/* Front Door */}
            <rect x="165" y="112" width="22" height="36" rx="2" fill="#78350f" stroke="#d97706" strokeWidth="1.2" />
            <circle cx="182" cy="130" r="1.8" fill="#fef08a" />
            <rect x="162" y="106" width="28" height="4" rx="1" fill="#f59e0b" />

            {/* Cantilevered 2nd Floor & Terrace */}
            <rect x="42" y="46" width="128" height="44" rx="5" fill="#0f172a" stroke="#fbbf24" strokeWidth="1.8" />
            
            {/* 2nd Floor Master Bedroom Floor-to-Ceiling Windows */}
            <rect x="52" y="54" width="60" height="30" rx="3" fill="url(#propGlassGrad)" stroke="#38bdf8" strokeWidth="1.2" />
            <line x1="72" y1="54" x2="72" y2="84" stroke="#38bdf8" strokeWidth="1" />
            <line x1="92" y1="54" x2="92" y2="84" stroke="#38bdf8" strokeWidth="1" />

            {/* Balcony Glass Railing */}
            <rect x="48" y="74" width="70" height="12" rx="2" fill="#38bdf8" fillOpacity="0.25" stroke="#7dd3fc" strokeWidth="1" />

            {/* Rooftop Terrace Garden with Modern Planters */}
            <rect x="120" y="58" width="42" height="12" rx="2" fill="#334155" stroke="#64748b" strokeWidth="1" />
            {/* Potted plants */}
            <path d="M128 58 Q125 50 128 44 Q132 50 128 58Z" fill="#22c55e" />
            <path d="M136 58 Q134 48 138 42 Q142 48 136 58Z" fill="#10b981" />
            <path d="M148 58 Q145 51 149 46 Q153 51 148 58Z" fill="#34d399" />

            {/* Contemporary Slanted Roof Accent */}
            <polygon points="38,46 175,46 170,41 44,41" fill="#d97706" />

            {/* Subtle String Garden Lights on Terrace */}
            <circle cx="126" cy="46" r="2" fill="#fde047" />
            <circle cx="136" cy="45" r="2" fill="#fde047" />
            <circle cx="146" cy="46" r="2" fill="#fde047" />
            <circle cx="156" cy="47" r="2" fill="#fde047" />
          </g>

          {/* Hovering 3D Location Pin with Radiating Pulse Rings */}
          <g className="anim-pin">
            <circle cx="218" cy="52" r="14" stroke="#f59e0b" strokeWidth="1.5" className="anim-pin-ring" />
            <path d="M218 36 C210 36 204 42 204 50 C204 61 218 74 218 74 C218 74 232 61 232 50 C232 42 226 36 218 36 Z" fill="url(#propGoldGrad)" stroke="#fef3c7" strokeWidth="1.5" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.4))" />
            <circle cx="218" cy="49" r="4.5" fill="#ffffff" />
          </g>

          {/* Floating Trust Badge 1: 0% Brokerage */}
          <g transform="translate(182, 90)">
            <rect width="84" height="26" rx="13" fill="#0f172a" fillOpacity="0.9" stroke="#10b981" strokeWidth="1.5" />
            <circle cx="14" cy="13" r="7" fill="#10b981" />
            <path d="M11 13 L13.5 15.5 L17.5 10.5" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <text x="27" y="17" fill="#34d399" fontSize="10" fontWeight="800" fontFamily="sans-serif">0% Brokerage</text>
          </g>

          {/* Floating Trust Badge 2: Direct Owners */}
          <g transform="translate(14, 24)">
            <rect width="90" height="24" rx="12" fill="#0f172a" fillOpacity="0.9" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="13" cy="12" r="5" fill="#f59e0b" />
            <text x="25" y="16" fill="#fde047" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Direct Owners</text>
          </g>
        </svg>
      </div>
    );
  }

  // 2. FURNITURE & HOME LIVING
  if (categorySlug === "furniture" || categorySlug === "home-decor") {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes armchairFloat {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          @keyframes lampLightGlow {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.65; }
          }
          @keyframes steamRiseCurl {
            0% { transform: translateY(0) scaleX(1); opacity: 0; }
            30% { opacity: 0.8; }
            80% { transform: translateY(-12px) scaleX(1.3); opacity: 0.4; }
            100% { transform: translateY(-18px) scaleX(1.6); opacity: 0; }
          }
          .anim-furniture { animation: armchairFloat 4.8s ease-in-out infinite; }
          .anim-lamp-cone { animation: lampLightGlow 3.2s ease-in-out infinite; }
          .anim-steam-1 { animation: steamRiseCurl 2.4s ease-out infinite; }
          .anim-steam-2 { animation: steamRiseCurl 2.4s ease-out infinite 1.2s; }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="sofaEmeraldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#047857" />
            </linearGradient>
            <linearGradient id="lampConeGrad" x1="50%" y1="0%" x2="50%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="woodTableGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#b45309" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Warm Ambient Glow */}
          <circle cx="150" cy="95" r="75" fill="#10b981" fillOpacity="0.14" filter="blur(24px)" />

          {/* Arched Floor Lamp Light Cone */}
          <polygon points="120,40 60,150 185,150" fill="url(#lampConeGrad)" className="anim-lamp-cone" />

          {/* Arched Floor Lamp Stand */}
          <g>
            <path d="M70 152 h30" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M85 152 V 75 Q85 32 118 36" stroke="#f59e0b" strokeWidth="2.2" fill="none" strokeLinecap="round" />
            {/* Conical Lampshade */}
            <polygon points="110,36 128,36 135,48 103,48" fill="#f59e0b" stroke="#fef3c7" strokeWidth="1.2" />
            <ellipse cx="119" cy="48" rx="16" ry="4" fill="#fef08a" />
          </g>

          {/* Living Room Group (Armchair, Table & Mug) */}
          <g className="anim-furniture">
            {/* Designer Lounge Armchair */}
            {/* Tapered Wood Legs */}
            <line x1="120" y1="130" x2="114" y2="152" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="136" y1="130" x2="134" y2="152" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="172" y1="130" x2="175" y2="152" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="184" y1="130" x2="190" y2="152" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round" />

            {/* Deep Seat Cushion */}
            <rect x="115" y="112" width="74" height="20" rx="8" fill="url(#sofaEmeraldGrad)" stroke="#34d399" strokeWidth="1.8" />

            {/* Ergonomic Curved Backrest */}
            <path d="M125 114 C120 85 130 65 152 65 C174 65 184 85 179 114 Z" fill="url(#sofaEmeraldGrad)" stroke="#34d399" strokeWidth="1.8" />
            {/* Tufting Buttons on Backrest */}
            <circle cx="145" cy="84" r="2.2" fill="#065f46" stroke="#6ee7b7" strokeWidth="1" />
            <circle cx="159" cy="84" r="2.2" fill="#065f46" stroke="#6ee7b7" strokeWidth="1" />
            <circle cx="152" cy="98" r="2.2" fill="#065f46" stroke="#6ee7b7" strokeWidth="1" />

            {/* Curving Armrests */}
            <path d="M112 110 C110 98 116 94 122 96 L124 116" stroke="#34d399" strokeWidth="4" strokeLinecap="round" fill="none" />
            <path d="M192 110 C194 98 188 94 182 96 L180 116" stroke="#34d399" strokeWidth="4" strokeLinecap="round" fill="none" />

            {/* Mid-Century Low Coffee Table */}
            <line x1="202" y1="138" x2="198" y2="152" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
            <line x1="240" y1="138" x2="244" y2="152" stroke="#b45309" strokeWidth="2.2" strokeLinecap="round" />
            <rect x="195" y="132" width="52" height="7" rx="3.5" fill="url(#woodTableGrad)" stroke="#f59e0b" strokeWidth="1" />

            {/* Steaming Coffee Mug */}
            <rect x="214" y="122" width="11" height="11" rx="2.5" fill="#f8fafc" stroke="#64748b" strokeWidth="1" />
            <path d="M225 124 C228 124 228 128 225 129" stroke="#64748b" strokeWidth="1" fill="none" />
            {/* Animated Steam */}
            <path d="M217 119 Q219 114 218 110" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" fill="none" className="anim-steam-1" />
            <path d="M222 119 Q220 114 221 110" stroke="#f1f5f9" strokeWidth="1.2" strokeLinecap="round" fill="none" className="anim-steam-2" />

            {/* Potted Monstera Houseplant */}
            <rect x="42" y="138" width="18" height="15" rx="3" fill="#ea580c" stroke="#f97316" strokeWidth="1" />
            <path d="M51 138 Q45 125 36 126 Q40 134 51 138Z" fill="#10b981" />
            <path d="M51 138 Q52 120 58 116 Q58 128 51 138Z" fill="#059669" />
            <path d="M51 138 Q58 128 66 128 Q62 135 51 138Z" fill="#34d399" />
          </g>

          {/* Floating Badge 1: Save Up to 60% */}
          <g transform="translate(176, 20)">
            <rect width="94" height="25" rx="12.5" fill="#0f172a" fillOpacity="0.92" stroke="#34d399" strokeWidth="1.4" />
            <circle cx="14" cy="12.5" r="5.5" fill="#10b981" />
            <text x="26" y="16.5" fill="#a7f3d0" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Save Up to 60%</text>
          </g>

          {/* Floating Badge 2: Teak & Velvet */}
          <g transform="translate(12, 85)">
            <rect width="86" height="23" rx="11.5" fill="#0f172a" fillOpacity="0.9" stroke="#10b981" strokeWidth="1.2" />
            <text x="12" y="15.5" fill="#6ee7b7" fontSize="9" fontWeight="800" fontFamily="sans-serif">★ Teak & Velvet</text>
          </g>
        </svg>
      </div>
    );
  }

  // 3. FASHION & LIFESTYLE
  if (categorySlug === "fashion" || categorySlug === "clothing" || categorySlug === "lifestyle") {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes hangerSway {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(3deg); }
          }
          @keyframes starGlint {
            0%, 100% { transform: scale(0.7) rotate(0deg); opacity: 0.4; }
            50% { transform: scale(1.2) rotate(45deg); opacity: 1; filter: drop-shadow(0 0 6px #f43f5e); }
          }
          @keyframes sneakerFloat {
            0%, 100% { transform: translateY(0px) rotate(-8deg); }
            50% { transform: translateY(-6px) rotate(-5deg); }
          }
          .anim-hanger { animation: hangerSway 4.2s ease-in-out infinite; transform-origin: 90px 24px; }
          .anim-star { animation: starGlint 2.5s ease-in-out infinite; transform-origin: center; }
          .anim-sneaker { animation: sneakerFloat 4s ease-in-out infinite; transform-origin: center; }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="teeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="50%" stopColor="#d946ef" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="sneakerSoleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e2e8f0" />
            </linearGradient>
            <linearGradient id="sunglassLens" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Ambient Purple Glow */}
          <circle cx="140" cy="95" r="70" fill="#d946ef" fillOpacity="0.15" filter="blur(26px)" />

          {/* Streetwear Graphic T-Shirt on Wooden Hanger */}
          <g className="anim-hanger">
            {/* Hook */}
            <path d="M90 18 C90 12 96 12 96 17 C96 22 90 24 90 28" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" fill="none" />
            {/* Wooden Hanger Bar */}
            <path d="M56 42 L90 28 L124 42" stroke="#d97706" strokeWidth="3" strokeLinecap="round" />

            {/* T-Shirt Body */}
            <path d="M68 42 L52 56 L62 68 L72 60 L72 126 C72 130 108 130 108 126 L108 60 L118 68 L128 56 L112 42 Q90 50 68 42 Z" fill="url(#teeGrad)" stroke="#f472b6" strokeWidth="1.8" />
            {/* Collar Scoop */}
            <path d="M80 43 Q90 52 100 43" stroke="#fbcfe8" strokeWidth="2" fill="none" />
            {/* Front Graphic Badge / Logo */}
            <circle cx="90" cy="78" r="14" fill="#0f172a" stroke="#f43f5e" strokeWidth="1.2" />
            <polygon points="90,69 94,76 102,77 96,82 98,90 90,85 82,90 84,82 78,77 86,76" fill="#fde047" />
          </g>

          {/* Retro Streetwear High-Top Sneaker */}
          <g className="anim-sneaker" transform="translate(155, 95)">
            {/* Sneaker Upper */}
            <path d="M10 24 L24 4 L52 14 L64 22 L76 25 L84 38 L10 38 Z" fill="#0f172a" stroke="#ec4899" strokeWidth="1.8" />
            {/* Sneaker Toe Cap & Side Accent */}
            <path d="M62 24 Q72 26 82 38" stroke="#38bdf8" strokeWidth="2" fill="none" />
            <path d="M28 12 L46 36" stroke="#f43f5e" strokeWidth="3" strokeLinecap="round" />
            {/* Thick White Air Sole with Traction Grooves */}
            <rect x="8" y="38" width="80" height="12" rx="4" fill="url(#sneakerSoleGrad)" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="16" y1="44" x2="16" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="32" y1="44" x2="32" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="48" y1="44" x2="48" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="64" y1="44" x2="64" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            <line x1="80" y1="44" x2="80" y2="50" stroke="#94a3b8" strokeWidth="1.5" />
            {/* Speed dash accents */}
            <line x1="0" y1="36" x2="6" y2="36" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
            <line x1="-4" y1="44" x2="4" y2="44" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
          </g>

          {/* Luxury Aviator Sunglasses with Sparkle Glint */}
          <g transform="translate(150, 42)">
            {/* Bridge & Top Bar */}
            <path d="M14 16 L28 16 M38 16 L52 16" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M26 16 Q33 13 40 16" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
            {/* Tear-drop Lenses */}
            <path d="M12 16 C8 16 4 20 5 28 C6 35 15 38 23 35 C28 32 29 20 28 16 Z" fill="url(#sunglassLens)" stroke="#fbbf24" strokeWidth="1.5" />
            <path d="M38 16 C37 20 38 32 43 35 C51 38 60 35 61 28 C62 20 58 16 54 16 Z" fill="url(#sunglassLens)" stroke="#fbbf24" strokeWidth="1.5" />
            {/* Sparkle Glint Star */}
            <g transform="translate(56, 16)" className="anim-star">
              <polygon points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2" fill="#ffffff" />
            </g>
          </g>

          {/* Floating Badge 1: Trending Styles */}
          <g transform="translate(162, 14)">
            <rect width="98" height="25" rx="12.5" fill="#0f172a" fillOpacity="0.92" stroke="#ec4899" strokeWidth="1.4" />
            <circle cx="14" cy="12.5" r="5" fill="#ec4899" />
            <text x="26" y="16.5" fill="#fbcfe8" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Trending Styles</text>
          </g>

          {/* Floating Badge 2: Original Brands */}
          <g transform="translate(10, 142)">
            <rect width="90" height="23" rx="11.5" fill="#0f172a" fillOpacity="0.9" stroke="#a855f7" strokeWidth="1.2" />
            <text x="12" y="15.5" fill="#e9d5ff" fontSize="9" fontWeight="800" fontFamily="sans-serif">✓ 100% Original</text>
          </g>
        </svg>
      </div>
    );
  }

  // 4. FITNESS, GYM & MUSICAL INSTRUMENTS
  if (
    categorySlug === "fitness-gym-music" ||
    categorySlug === "gym" ||
    categorySlug === "fitness" ||
    categorySlug === "sports"
  ) {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes barbellBounce {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(1deg); }
          }
          @keyframes ecgDash {
            0% { stroke-dashoffset: 160; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes kettlebellTilt {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-6deg); }
          }
          .anim-barbell { animation: barbellBounce 4s ease-in-out infinite; }
          .anim-ecg-line {
            stroke-dasharray: 40 120;
            animation: ecgDash 2.4s linear infinite;
          }
          .anim-kettlebell { animation: kettlebellTilt 3.6s ease-in-out infinite; transform-origin: 215px 145px; }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="steelBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f8fafc" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="bumperPlateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="cyanNeonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          {/* Cyan Glow Background */}
          <circle cx="140" cy="90" r="72" fill="#06b6d4" fillOpacity="0.14" filter="blur(25px)" />

          {/* Heart-Rate Dynamic ECG Wave Across Middle */}
          <path
            d="M20 100 L80 100 L95 82 L106 122 L118 68 L130 114 L140 96 L148 100 L260 100"
            stroke="url(#cyanNeonGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="anim-ecg-line"
          />

          {/* Olympic Heavy Barbell */}
          <g className="anim-barbell">
            {/* Knurled Chrome Steel Shaft */}
            <rect x="40" y="66" width="170" height="8" rx="4" fill="url(#steelBarGrad)" stroke="#cbd5e1" strokeWidth="1" />
            {/* Grip Knurling Marks */}
            <line x1="90" y1="67" x2="90" y2="73" stroke="#334155" strokeWidth="1" strokeDasharray="1 1" />
            <line x1="160" y1="67" x2="160" y2="73" stroke="#334155" strokeWidth="1" strokeDasharray="1 1" />

            {/* Left Weight Plates (20 KG + 10 KG) */}
            <rect x="44" y="42" width="10" height="56" rx="4" fill="url(#bumperPlateGrad)" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="32" y="48" width="9" height="44" rx="3" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="24" y="56" width="6" height="28" rx="2" fill="#38bdf8" stroke="#bae6fd" strokeWidth="1" />
            {/* Collar Clamp */}
            <rect x="56" y="63" width="6" height="14" rx="2" fill="#f59e0b" />

            {/* Right Weight Plates (20 KG + 10 KG) */}
            <rect x="196" y="42" width="10" height="56" rx="4" fill="url(#bumperPlateGrad)" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="208" y="48" width="9" height="44" rx="3" fill="#0f172a" stroke="#0284c7" strokeWidth="1.5" />
            <rect x="220" y="56" width="6" height="28" rx="2" fill="#38bdf8" stroke="#bae6fd" strokeWidth="1" />
            {/* Collar Clamp */}
            <rect x="188" y="63" width="6" height="14" rx="2" fill="#f59e0b" />
          </g>

          {/* Hexagonal Cast-Iron Kettlebell with bold "16 KG" */}
          <g className="anim-kettlebell" transform="translate(170, 95)">
            {/* Kettlebell Handle */}
            <path d="M22 18 C22 4 44 4 44 18" stroke="#94a3b8" strokeWidth="4.5" strokeLinecap="round" fill="none" />
            {/* Solid Kettlebell Body */}
            <circle cx="33" cy="36" r="19" fill="#0f172a" stroke="#06b6d4" strokeWidth="2" />
            {/* Flat Base */}
            <path d="M22 51 h22" stroke="#06b6d4" strokeWidth="2.5" strokeLinecap="round" />
            <text x="21" y="40" fill="#38bdf8" fontSize="9" fontWeight="900" fontFamily="sans-serif">16KG</text>
          </g>

          {/* Acoustic Guitar Silhouette & Music Notes (Right Upper) */}
          <g transform="translate(30, 95)">
            <path d="M18 42 C12 36 12 28 17 24 C14 20 16 14 21 12 L28 8 L32 10 L28 16 C33 19 33 26 28 30 C34 36 31 44 24 45 Z" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.4" />
            <circle cx="21" cy="27" r="3" fill="#f59e0b" />
            {/* Music Notes */}
            <path d="M38 18 v-8 h8 v8" stroke="#38bdf8" strokeWidth="1.4" fill="none" />
            <circle cx="38" cy="18" r="2" fill="#38bdf8" />
            <circle cx="46" cy="18" r="2" fill="#38bdf8" />
          </g>

          {/* Floating Badge 1: Commercial Grade */}
          <g transform="translate(154, 18)">
            <rect width="105" height="25" rx="12.5" fill="#0f172a" fillOpacity="0.92" stroke="#06b6d4" strokeWidth="1.4" />
            <circle cx="14" cy="12.5" r="5" fill="#06b6d4" />
            <text x="26" y="16.5" fill="#a5f3fc" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Commercial Grade</text>
          </g>

          {/* Floating Badge 2: Tested Gear */}
          <g transform="translate(14, 142)">
            <rect width="94" height="23" rx="11.5" fill="#0f172a" fillOpacity="0.9" stroke="#3b82f6" strokeWidth="1.2" />
            <text x="12" y="15.5" fill="#bfdbfe" fontSize="9" fontWeight="800" fontFamily="sans-serif">★ Gym & Sound</text>
          </g>
        </svg>
      </div>
    );
  }

  // 5. VEHICLES
  if (categorySlug === "vehicles" || categorySlug === "cars" || categorySlug === "bikes") {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes carChassis {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-3px); }
          }
          @keyframes wheelSpinAnim {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes beamGlow {
            0%, 100% { opacity: 0.35; }
            50% { opacity: 0.75; }
          }
          @keyframes roadDashAnim {
            0% { stroke-dashoffset: 40; }
            100% { stroke-dashoffset: 0; }
          }
          .anim-car { animation: carChassis 3.5s ease-in-out infinite; }
          .anim-wheel { animation: wheelSpinAnim 1.6s linear infinite; }
          .anim-beam { animation: beamGlow 2.5s ease-in-out infinite; }
          .anim-road-dash {
            stroke-dasharray: 12 12;
            animation: roadDashAnim 1.2s linear infinite;
          }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f43f5e" />
              <stop offset="50%" stopColor="#e11d48" />
              <stop offset="100%" stopColor="#be123c" />
            </linearGradient>
            <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Crimson Ambient Glow */}
          <circle cx="140" cy="90" r="70" fill="#f43f5e" fillOpacity="0.16" filter="blur(26px)" />

          {/* Highway Road Line with Moving Dashes */}
          <line x1="20" y1="146" x2="260" y2="146" stroke="#475569" strokeWidth="3" />
          <line x1="20" y1="146" x2="260" y2="146" stroke="#fde047" strokeWidth="2" className="anim-road-dash" />

          {/* Headlight Forward Projector Beam */}
          <polygon points="210,116 276,96 276,140 210,126" fill="url(#headlightBeam)" className="anim-beam" />

          {/* Sports Coupe Car Silhouette */}
          <g className="anim-car">
            {/* Car Aerodynamic Body */}
            <path
              d="M48 126 C44 116 52 108 62 108 L94 108 L124 82 L176 82 L206 106 L216 112 C222 115 224 122 220 128 L214 132 C210 132 208 126 195 126 C182 126 180 132 176 132 L94 132 C90 132 88 126 75 126 C62 126 60 132 56 132 Z"
              fill="url(#carBodyGrad)"
              stroke="#fb7185"
              strokeWidth="2"
            />

            {/* Tinted Windshield and Windows */}
            <path d="M128 86 L154 86 L154 104 L104 104 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />
            <path d="M158 86 L174 86 L200 104 L158 104 Z" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.2" />

            {/* LED Headlight Accent */}
            <path d="M214 112 L219 116 L212 119 Z" fill="#38bdf8" filter="drop-shadow(0 0 4px #38bdf8)" />
            {/* LED Tail Light Accent */}
            <path d="M50 114 L46 118 L50 122 Z" fill="#f43f5e" filter="drop-shadow(0 0 4px #f43f5e)" />

            {/* Rear Alloy Wheel */}
            <g transform="translate(75, 128)">
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
              <g className="anim-wheel">
                <circle cx="0" cy="0" r="9" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="5 3" />
                <circle cx="0" cy="0" r="3" fill="#f43f5e" />
              </g>
            </g>

            {/* Front Alloy Wheel */}
            <g transform="translate(186, 128)">
              <circle cx="0" cy="0" r="14" fill="#0f172a" stroke="#e2e8f0" strokeWidth="2" />
              <g className="anim-wheel">
                <circle cx="0" cy="0" r="9" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="5 3" />
                <circle cx="0" cy="0" r="3" fill="#f43f5e" />
              </g>
            </g>
          </g>

          {/* Floating Badge 1: 0% Brokerage */}
          <g transform="translate(162, 18)">
            <rect width="98" height="25" rx="12.5" fill="#0f172a" fillOpacity="0.92" stroke="#f43f5e" strokeWidth="1.4" />
            <circle cx="14" cy="12.5" r="5" fill="#f43f5e" />
            <text x="26" y="16.5" fill="#fecdd3" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">0% Brokerage</text>
          </g>

          {/* Floating Badge 2: Verified RC */}
          <g transform="translate(12, 38)">
            <rect width="90" height="23" rx="11.5" fill="#0f172a" fillOpacity="0.9" stroke="#10b981" strokeWidth="1.2" />
            <text x="12" y="15.5" fill="#6ee7b7" fontSize="9" fontWeight="800" fontFamily="sans-serif">✓ Verified RC</text>
          </g>
        </svg>
      </div>
    );
  }

  // 6. MOBILES & ELECTRONICS
  if (categorySlug === "mobiles" || categorySlug === "electronics") {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes phoneFloat {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-5px) rotate(1deg); }
          }
          @keyframes screenScanline {
            0% { transform: translateY(0); opacity: 0.2; }
            50% { opacity: 0.8; }
            100% { transform: translateY(50px); opacity: 0.1; }
          }
          @keyframes soundWaveRings {
            0% { transform: scale(0.6); opacity: 0.9; }
            100% { transform: scale(1.6); opacity: 0; }
          }
          .anim-phone { animation: phoneFloat 4.2s ease-in-out infinite; }
          .anim-scan { animation: screenScanline 3s linear infinite; }
          .anim-wave { animation: soundWaveRings 2.2s ease-out infinite; transform-origin: 216px 115px; }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>
            <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>

          {/* Sky Blue Ambient Glow */}
          <circle cx="140" cy="90" r="70" fill="#0284c7" fillOpacity="0.16" filter="blur(26px)" />

          {/* Slim Workstation Laptop */}
          <g transform="translate(35, 78)">
            {/* Screen Lid */}
            <rect x="18" y="0" width="96" height="62" rx="6" fill="url(#laptopGrad)" stroke="#38bdf8" strokeWidth="1.6" />
            {/* Display Bezel */}
            <rect x="22" y="4" width="88" height="52" rx="3" fill="#020617" />
            {/* Matrix Code Scan lines */}
            <line x1="28" y1="16" x2="72" y2="16" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
            <line x1="28" y1="24" x2="88" y2="24" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="28" y1="32" x2="60" y2="32" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="28" y1="40" x2="76" y2="40" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="22" y1="4" x2="110" y2="4" stroke="#38bdf8" strokeWidth="1.5" className="anim-scan" />

            {/* Laptop Base Keyboard Deck */}
            <path d="M6 62 L126 62 L134 68 L0 68 Z" fill="#334155" stroke="#64748b" strokeWidth="1.2" />
            <rect x="54" y="63" width="24" height="3" rx="1.5" fill="#0f172a" />
          </g>

          {/* Flagship Edge-to-Edge Smartphone */}
          <g className="anim-phone" transform="translate(136, 36)">
            {/* Phone Outer Chassis */}
            <rect x="0" y="0" width="56" height="106" rx="12" fill="#020617" stroke="#38bdf8" strokeWidth="2" filter="drop-shadow(0 6px 12px rgba(0,0,0,0.5))" />
            {/* Edge Display */}
            <rect x="3" y="4" width="50" height="98" rx="9" fill="url(#phoneScreenGrad)" />
            {/* Punch hole selfie camera */}
            <circle cx="28" cy="9" r="1.8" fill="#000000" />

            {/* Bachat Live Notification Bubble */}
            <g transform="translate(8, 22)">
              <rect width="40" height="20" rx="5" fill="#0f172a" fillOpacity="0.88" stroke="#fde047" strokeWidth="1" />
              <text x="5" y="14" fill="#fde047" fontSize="8" fontWeight="800" fontFamily="sans-serif">₹ Bachat</text>
            </g>

            {/* Home Bar Indicator */}
            <line x1="18" y1="96" x2="38" y2="96" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          </g>

          {/* TWS Wireless Earbuds Pod with Sound Wave Rings */}
          <g transform="translate(200, 95)">
            <circle cx="16" cy="20" r="12" stroke="#38bdf8" strokeWidth="1.4" className="anim-wave" />
            <rect x="0" y="10" width="32" height="22" rx="7" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
            <circle cx="16" cy="21" r="2" fill="#22c55e" />
          </g>

          {/* Floating Badge 1: 32-Pt Inspected */}
          <g transform="translate(156, 12)">
            <rect width="105" height="25" rx="12.5" fill="#0f172a" fillOpacity="0.92" stroke="#38bdf8" strokeWidth="1.4" />
            <circle cx="14" cy="12.5" r="5" fill="#38bdf8" />
            <text x="26" y="16.5" fill="#bae6fd" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">32-Pt Inspected</text>
          </g>

          {/* Floating Badge 2: Verified Seller */}
          <g transform="translate(10, 42)">
            <rect width="94" height="23" rx="11.5" fill="#0f172a" fillOpacity="0.9" stroke="#10b981" strokeWidth="1.2" />
            <text x="12" y="15.5" fill="#a7f3d0" fontSize="9" fontWeight="800" fontFamily="sans-serif">✓ Verified Seller</text>
          </g>
        </svg>
      </div>
    );
  }

  // 7. AGRICULTURE & EQUIPMENT
  if (
    categorySlug === "agricultural-products" ||
    categorySlug === "construction-equipment" ||
    categorySlug === "agriculture"
  ) {
    return (
      <div className="relative w-48 h-32 xs:w-56 xs:h-36 sm:w-64 sm:h-40 md:w-72 md:h-44 shrink-0 select-none">
        <style>{`
          @keyframes tractorBob {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
          }
          @keyframes gearSpinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          @keyframes wheatSwaySlow {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(5deg); }
          }
          .anim-tractor { animation: tractorBob 3.6s ease-in-out infinite; }
          .anim-gear-spin { animation: gearSpinSlow 8s linear infinite; transform-origin: 220px 50px; }
          .anim-wheat-sway { animation: wheatSwaySlow 3s ease-in-out infinite; transform-origin: 35px 145px; }
        `}</style>
        <svg viewBox="0 0 280 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-2xl">
          <defs>
            <linearGradient id="tractorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#15803d" />
              <stop offset="100%" stopColor="#166534" />
            </linearGradient>
          </defs>

          {/* Amber-Green Ambient Glow */}
          <circle cx="140" cy="90" r="70" fill="#eab308" fillOpacity="0.14" filter="blur(26px)" />

          {/* Swaying Golden Wheat Sheaf on Left */}
          <g className="anim-wheat-sway">
            <path d="M35 145 V 95" stroke="#ca8a04" strokeWidth="2.2" strokeLinecap="round" />
            <ellipse cx="30" cy="92" rx="4" ry="7" transform="rotate(-30 30 92)" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <ellipse cx="40" cy="92" rx="4" ry="7" transform="rotate(30 40 92)" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <ellipse cx="31" cy="104" rx="3.5" ry="6" transform="rotate(-30 31 104)" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <ellipse cx="39" cy="104" rx="3.5" ry="6" transform="rotate(30 39 104)" fill="#facc15" stroke="#ca8a04" strokeWidth="1" />
            <circle cx="35" cy="85" r="3" fill="#fef08a" />
          </g>

          {/* Heavy Duty Farm Tractor */}
          <g className="anim-tractor" transform="translate(60, 52)">
            {/* Cab Roof & Pillars */}
            <rect x="22" y="16" width="38" height="6" rx="2" fill="#ca8a04" />
            <line x1="26" y1="22" x2="24" y2="46" stroke="#ca8a04" strokeWidth="3" />
            <line x1="56" y1="22" x2="58" y2="46" stroke="#ca8a04" strokeWidth="3" />
            {/* Glass Cab */}
            <rect x="28" y="24" width="28" height="22" fill="#38bdf8" fillOpacity="0.25" stroke="#7dd3fc" strokeWidth="1" />

            {/* Tractor Hood / Engine Body */}
            <path d="M58 38 L114 42 C118 42 120 46 118 50 L118 72 L58 72 Z" fill="url(#tractorGrad)" stroke="#22c55e" strokeWidth="2" />
            {/* Front Grill */}
            <rect x="114" y="44" width="6" height="24" rx="2" fill="#0f172a" stroke="#ca8a04" strokeWidth="1.2" />
            {/* Exhaust Stack */}
            <line x1="102" y1="42" x2="102" y2="20" stroke="#475569" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="102" y1="20" x2="106" y2="18" stroke="#475569" strokeWidth="3" strokeLinecap="round" />

            {/* Massive Rear Tread Lug Tire */}
            <circle cx="36" cy="74" r="24" fill="#0f172a" stroke="#ca8a04" strokeWidth="3" strokeDasharray="8 5" />
            <circle cx="36" cy="74" r="14" fill="#1e293b" stroke="#eab308" strokeWidth="2" />
            <circle cx="36" cy="74" r="5" fill="#facc15" />

            {/* Front Steer Tire */}
            <circle cx="106" cy="78" r="14" fill="#0f172a" stroke="#ca8a04" strokeWidth="2.5" strokeDasharray="6 4" />
            <circle cx="106" cy="78" r="7" fill="#1e293b" stroke="#eab308" strokeWidth="1.5" />
            <circle cx="106" cy="78" r="3" fill="#facc15" />
          </g>

          {/* Rotating Precision Gear Top Right */}
          <g className="anim-gear-spin">
            <circle cx="220" cy="50" r="18" stroke="#eab308" strokeWidth="2.5" strokeDasharray="6 4" fill="none" />
            <circle cx="220" cy="50" r="10" stroke="#ca8a04" strokeWidth="1.5" fill="#0f172a" />
            <circle cx="220" cy="50" r="4" fill="#facc15" />
          </g>

          {/* Floating Badge 1: Direct Farmers */}
          <g transform="translate(156, 14)">
            <rect width="105" height="25" rx="12.5" fill="#0f172a" fillOpacity="0.92" stroke="#eab308" strokeWidth="1.4" />
            <circle cx="14" cy="12.5" r="5" fill="#eab308" />
            <text x="26" y="16.5" fill="#fef08a" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">Farmer Direct</text>
          </g>

          {/* Floating Badge 2: Heavy Duty */}
          <g transform="translate(14, 142)">
            <rect width="94" height="23" rx="11.5" fill="#0f172a" fillOpacity="0.9" stroke="#16a34a" strokeWidth="1.2" />
            <text x="12" y="15.5" fill="#86efac" fontSize="9" fontWeight="800" fontFamily="sans-serif">★ Heavy Machinery</text>
          </g>
        </svg>
      </div>
    );
  }

  // 8. DEFAULT / FALLBACK (Pets, Services, Books, Jobs, etc.)
  return (
    <div className="relative w-40 h-28 xs:w-48 xs:h-32 sm:w-56 sm:h-36 md:w-64 md:h-40 shrink-0 select-none flex items-center justify-center">
      <style>{`
        @keyframes orbitalRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.4)); }
        }
        .anim-orbital { animation: orbitalRotate 12s linear infinite; transform-origin: 100px 70px; }
        .anim-orb-core { animation: orbPulse 3.5s ease-in-out infinite; transform-origin: 100px 70px; }
      `}</style>
      <svg viewBox="0 0 200 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-xl">
        <defs>
          <linearGradient id="orbCoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="50%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>

        {/* Ambient Halo */}
        <circle cx="100" cy="70" r="50" fill="#6366f1" fillOpacity="0.18" filter="blur(20px)" />

        {/* Outer Orbital Neon Rings */}
        <g className="anim-orbital">
          <ellipse cx="100" cy="70" rx="64" ry="24" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="14 10" strokeOpacity="0.7" />
          <circle cx="164" cy="70" r="3.5" fill="#38bdf8" />
          <circle cx="36" cy="70" r="2.5" fill="#f43f5e" />
        </g>

        {/* Glassmorphic Core Badge */}
        <g className="anim-orb-core">
          <circle cx="100" cy="70" r="32" fill="#0f172a" fillOpacity="0.88" stroke="url(#orbCoreGrad)" strokeWidth="2" />
          <circle cx="100" cy="70" r="26" fill="url(#orbCoreGrad)" fillOpacity="0.12" />
        </g>
      </svg>

      {/* Render Lucide Icon centered inside the orbital badge */}
      {IconComponent && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <IconComponent className="w-9 h-9 sm:w-11 sm:h-11 text-amber-400 drop-shadow-md" strokeWidth={1.8} />
        </div>
      )}
    </div>
  );
}
