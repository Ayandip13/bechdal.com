"use client";

import React from "react";

/**
 * FloatingBannerOutlines
 * High-definition, neon outline SVG vector illustrations for promotional banners.
 * Floating animations and ambient glowing strokes fill empty banner space
 * with mobile and electronics accessories, vehicles, and commerce motifs.
 */

// 1. Mobile & Electronics Accessories Floating Scene
export function FloatingTechOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatAcc1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(2deg); }
        }
        @keyframes floatAcc2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(6px) rotate(-2deg); }
        }
        @keyframes ringPulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.08); opacity: 0.95; }
        }
        @keyframes earbudAudioWave {
          0% { transform: scale(0.7); opacity: 0; }
          50% { transform: scale(1.15); opacity: 0.8; }
          100% { transform: scale(1.4); opacity: 0; }
        }
        @keyframes lightningPulse {
          0%, 100% { opacity: 0.4; filter: drop-shadow(0 0 2px #38bdf8); }
          50% { opacity: 1; filter: drop-shadow(0 0 8px #67e8f9); }
        }
        .anim-tech-1 { animation: floatAcc1 4.5s ease-in-out infinite; }
        .anim-tech-2 { animation: floatAcc2 5.2s ease-in-out infinite 0.7s; }
        .anim-tech-3 { animation: floatAcc1 4.8s ease-in-out infinite 1.4s; }
        .anim-tech-4 { animation: floatAcc2 4.2s ease-in-out infinite 1.1s; }
        .anim-ring-pulse { animation: ringPulse 2.8s ease-in-out infinite; transform-origin: center; }
        .anim-audio-wave { animation: earbudAudioWave 2.2s ease-out infinite; transform-origin: 32px 14px; }
        .anim-lightning-pulse { animation: lightningPulse 1.8s ease-in-out infinite; }
      `}</style>

      {/* SVG Definitions for Gradients */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="neonBlueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="neonEmeraldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* Accessory 1: Modern Smartwatch Outline with Pulsing Activity Ring & Heartbeat (Middle-Left) */}
      <div className="absolute left-[38%] sm:left-[42%] md:left-[45%] top-1/2 -translate-y-1/2 anim-tech-1 opacity-75 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="66" height="66" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 6V16h16V6c0-1.1-.9-2-2-2H28c-1.1 0-2 .9-2 2z" stroke="url(#neonCyanGlow)" strokeWidth="1.6" strokeDasharray="2 2" />
          <path d="M26 52v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V52" stroke="url(#neonCyanGlow)" strokeWidth="1.6" strokeDasharray="2 2" />
          <rect x="17" y="16" width="34" height="36" rx="9" stroke="url(#neonCyanGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.04" />
          <rect x="51" y="24" width="2.5" height="7" rx="1.2" stroke="url(#neonCyanGlow)" strokeWidth="1.4" />
          <circle cx="34" cy="34" r="11" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="45 20" strokeLinecap="round" className="anim-ring-pulse" />
          <path d="M27 34h3l2-4 3 8 2.5-6 1.5 2h4" stroke="#f43f5e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Accessory 2: Wireless TWS Earbuds & Open Charging Case (Middle-Right) */}
      <div className="absolute left-[54%] sm:left-[57%] md:left-[60%] top-[10%] anim-tech-2 opacity-75 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="60" height="60" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="14" r="7" stroke="#38bdf8" strokeWidth="1.2" strokeDasharray="3 3" className="anim-audio-wave" />
          <g transform="translate(18, 8) rotate(-14)">
            <ellipse cx="6" cy="6" rx="4.5" ry="3.5" stroke="url(#neonBlueGlow)" strokeWidth="1.5" />
            <path d="M6 9v9a1.5 1.5 0 0 1-3 0V9" stroke="url(#neonBlueGlow)" strokeWidth="1.4" />
            <circle cx="6" cy="6" r="1.5" fill="#38bdf8" />
          </g>
          <g transform="translate(36, 6) rotate(16)">
            <ellipse cx="6" cy="6" rx="4.5" ry="3.5" stroke="url(#neonBlueGlow)" strokeWidth="1.5" />
            <path d="M6 9v9a1.5 1.5 0 0 0 3 0V9" stroke="url(#neonBlueGlow)" strokeWidth="1.4" />
            <circle cx="6" cy="6" r="1.5" fill="#38bdf8" />
          </g>
          <rect x="16" y="32" width="32" height="24" rx="8" stroke="url(#neonBlueGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.04" />
          <path d="M16 40h32" stroke="url(#neonBlueGlow)" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx="32" cy="46" r="1.5" fill="#22c55e" />
        </svg>
      </div>

      {/* Accessory 3: MagSafe Wireless Charger with Lightning Arc (Clear of CTA button) */}
      <div className="absolute left-[68%] sm:left-[70%] md:left-[72%] top-1/2 -translate-y-1/2 anim-tech-3 opacity-75 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="52" height="52" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="20" stroke="url(#neonEmeraldGlow)" strokeWidth="1.8" strokeDasharray="6 3" />
          <circle cx="28" cy="28" r="14" stroke="url(#neonEmeraldGlow)" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
          <path
            d="M29 18l-6 11h6l-2 9 8-12h-6l2-8z"
            fill="#38bdf8"
            stroke="#67e8f9"
            strokeWidth="1.4"
            strokeLinejoin="round"
            className="anim-lightning-pulse"
          />
          <path d="M28 48v5c0 1.5 1 2.5 2.5 2.5h6" stroke="url(#neonEmeraldGlow)" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Accessory 4: Over-Ear Studio Headphones Outline (Center-Top) */}
      <div className="absolute left-[48%] sm:left-[50%] md:left-[52%] top-1 anim-tech-4 opacity-70 hover:opacity-100 transition-opacity hidden lg:block">
        <svg width="56" height="56" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 42C16 26.5 25.4 15 37 15s21 11.5 21 27" stroke="url(#neonCyanGlow)" strokeWidth="2" strokeLinecap="round" />
          <rect x="10" y="38" width="9" height="20" rx="4.5" stroke="url(#neonCyanGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.05" />
          <rect x="55" y="38" width="9" height="20" rx="4.5" stroke="url(#neonCyanGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.05" />
          <path d="M47 8l4-2v6l-4 2V8z" fill="#facc15" fillOpacity="0.7" />
        </svg>
      </div>

      {/* Ambient Glowing Dots */}
      <span className="absolute left-[36%] top-2 w-1 h-1 rounded-full bg-cyan-300 opacity-60 animate-ping" />
      <span className="absolute left-[65%] bottom-2 w-1.5 h-1.5 rounded-full bg-blue-300 opacity-50 anim-ring-pulse" />
    </div>
  );
}

// 2. Vehicles Floating Scene (Road Tracks, Cars, Bikes, Speedometers, Helmets, Key Fobs)
export function FloatingVehicleOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatVeh1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes carDriveTrack {
          0% { transform: translateX(0px) translateY(0px); }
          50% { transform: translateX(6px) translateY(-2px); }
          100% { transform: translateX(0px) translateY(0px); }
        }
        @keyframes bikeBounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(1.5deg); }
        }
        @keyframes wheelSpinTrack {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes speedoSurge {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(36deg); }
          70% { transform: rotate(-15deg); }
        }
        @keyframes signalCycle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .anim-veh-float { animation: floatVeh1 4.2s ease-in-out infinite; }
        .anim-car-drive { animation: carDriveTrack 3.5s ease-in-out infinite; }
        .anim-bike-bounce { animation: bikeBounce 3.2s ease-in-out infinite 0.5s; }
        .anim-wheel-fast-1 { animation: wheelSpinTrack 0.5s linear infinite; transform-origin: 18px 25px; }
        .anim-wheel-fast-2 { animation: wheelSpinTrack 0.5s linear infinite; transform-origin: 48px 25px; }
        .anim-bike-wheel-1 { animation: wheelSpinTrack 0.5s linear infinite; transform-origin: 12px 28px; }
        .anim-bike-wheel-2 { animation: wheelSpinTrack 0.5s linear infinite; transform-origin: 42px 28px; }
        .anim-speed-needle-surge { animation: speedoSurge 2.2s ease-in-out infinite; transform-origin: 28px 28px; }
        .anim-sig-green { animation: signalCycle 1.8s ease-in-out infinite; }
      `}</style>

      {/* SVG Definitions */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonTrackGreen" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Curving Asphalt Highway / Race Track with Center Dashed Markings */}
      <div className="absolute left-[30%] sm:left-[34%] md:left-[36%] right-[18%] sm:right-[22%] bottom-0 h-12 overflow-hidden opacity-80 hidden xs:block">
        <svg width="100%" height="48" viewBox="0 0 400 48" fill="none" preserveAspectRatio="none">
          {/* Top Road Boundary */}
          <path d="M0 32 Q 100 12, 200 24 T 400 18" stroke="#34d399" strokeWidth="1.8" strokeOpacity="0.65" />
          {/* Center Dashed Highway Line */}
          <path d="M0 38 Q 100 18, 200 30 T 400 24" stroke="#facc15" strokeWidth="2" strokeDasharray="10 8" strokeOpacity="0.75" />
          {/* Bottom Road Boundary */}
          <path d="M0 44 Q 100 24, 200 36 T 400 30" stroke="#34d399" strokeWidth="1.8" strokeOpacity="0.65" />
        </svg>
      </div>

      {/* 2. Speeding Modern Sports Car Outline (Driving on Track in the Open Middle Area) */}
      <div className="absolute left-[36%] sm:left-[39%] md:left-[41%] bottom-2 anim-car-drive opacity-85 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="72" height="38" viewBox="0 0 72 38" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Speed Dust / Motion Lines */}
          <line x1="2" y1="20" x2="10" y2="20" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          <line x1="0" y1="24" x2="8" y2="24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />

          {/* Car Body Shell */}
          <path
            d="M12 22l4-11a2 2 0 0 1 1.8-1.3h28.4a2 2 0 0 1 1.7 1l6.1 11.3h10a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a5 5 0 0 1-10 0H24a5 5 0 0 1-10 0H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4z"
            stroke="#34d399"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.08"
            strokeLinejoin="round"
          />
          {/* Windshield & Windows */}
          <path d="M19 19l3-7h15v7H19zm20 0v-7h8l4 7H39z" stroke="#38bdf8" strokeWidth="1.2" fill="#38bdf8" fillOpacity="0.15" />
          {/* Glowing Headlight */}
          <circle cx="68" cy="22" r="1.5" fill="#facc15" />

          {/* Front Wheel */}
          <g className="anim-wheel-fast-2">
            <circle cx="48" cy="25" r="4.5" stroke="#34d399" strokeWidth="1.8" fill="#1e293b" />
            <line x1="48" y1="21.5" x2="48" y2="28.5" stroke="#38bdf8" strokeWidth="1.2" />
            <line x1="44.5" y1="25" x2="51.5" y2="25" stroke="#38bdf8" strokeWidth="1.2" />
          </g>
          {/* Rear Wheel */}
          <g className="anim-wheel-fast-1">
            <circle cx="18" cy="25" r="4.5" stroke="#34d399" strokeWidth="1.8" fill="#1e293b" />
            <line x1="18" y1="21.5" x2="18" y2="28.5" stroke="#38bdf8" strokeWidth="1.2" />
            <line x1="14.5" y1="25" x2="21.5" y2="25" stroke="#38bdf8" strokeWidth="1.2" />
          </g>
        </svg>
      </div>

      {/* 3. Sporty Motorbike / Scooter Silhouette (Beside the Car, Clear of Button) */}
      <div className="absolute left-[54%] sm:left-[56%] md:left-[58%] bottom-3 anim-bike-bounce opacity-80 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="56" height="36" viewBox="0 0 56 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bike Frame & Tank */}
          <path d="M12 28l10-14h10l8 14" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M22 14l5-6h6l-3 6" stroke="#34d399" strokeWidth="1.6" fill="#34d399" fillOpacity="0.2" />
          {/* Handlebar */}
          <path d="M33 8l3-3h3" stroke="#facc15" strokeWidth="1.8" strokeLinecap="round" />
          {/* Headlamp beam */}
          <circle cx="45" cy="18" r="1.5" fill="#facc15" />

          {/* Front Wheel */}
          <g className="anim-bike-wheel-2">
            <circle cx="42" cy="28" r="4.5" stroke="#34d399" strokeWidth="1.8" fill="#1e293b" />
            <line x1="42" y1="24.5" x2="42" y2="31.5" stroke="#38bdf8" strokeWidth="1" />
            <line x1="38.5" y1="28" x2="45.5" y2="28" stroke="#38bdf8" strokeWidth="1" />
          </g>
          {/* Rear Wheel */}
          <g className="anim-bike-wheel-1">
            <circle cx="12" cy="28" r="4.5" stroke="#34d399" strokeWidth="1.8" fill="#1e293b" />
            <line x1="12" y1="24.5" x2="12" y2="31.5" stroke="#38bdf8" strokeWidth="1" />
            <line x1="8.5" y1="28" x2="15.5" y2="28" stroke="#38bdf8" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* 4. Digital Speedometer Gauge (Positioned Top-Center, Safely Away from the Right Button!) */}
      <div className="absolute left-[68%] sm:left-[70%] md:left-[72%] top-2 anim-veh-float opacity-75 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="56" height="52" viewBox="0 0 56 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 38A18 18 0 1 1 46 38" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 3" />
          <path d="M39 16a18 18 0 0 1 7 22" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="28" cy="28" r="3.5" stroke="#34d399" strokeWidth="1.6" fill="#10b981" />
          <g className="anim-speed-needle-surge">
            <line x1="28" y1="28" x2="38" y2="15" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </g>
          <text x="28" y="44" fill="#38bdf8" fontSize="8" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">KM/H</text>
        </svg>
      </div>

      {/* 5. Aerodynamic Rider Helmet (Top Center-Left) */}
      <div className="absolute left-[46%] sm:left-[49%] md:left-[51%] top-1 anim-veh-float opacity-75 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="50" height="50" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14 42c0-14 9-26 24-26s22 10 22 23c0 7-3 12-7 14l-6 2H22c-5 0-8-5-8-13z"
            stroke="#34d399"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.04"
          />
          <path d="M36 26h18c3 4 4 10 3 16l-18 2c-3-5-3-12-3-18z" stroke="#38bdf8" strokeWidth="1.6" fill="#38bdf8" fillOpacity="0.2" />
          <line x1="28" y1="21" x2="35" y2="21" stroke="#facc15" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      {/* 6. Smart Key Fob with Wireless Lock Waves */}
      <div className="absolute left-[34%] sm:left-[36%] top-2 anim-veh-float opacity-75 hover:opacity-100 transition-opacity hidden lg:block">
        <svg width="42" height="42" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(-15)">
          <rect x="17" y="10" width="20" height="34" rx="8" stroke="#34d399" strokeWidth="1.8" fill="currentColor" fillOpacity="0.04" />
          <path d="M27 10V5a2 2 0 0 0-2-2h-2" stroke="#34d399" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="27" cy="19" r="2.8" stroke="#38bdf8" strokeWidth="1.4" />
          <circle cx="27" cy="27" r="2.8" stroke="#38bdf8" strokeWidth="1.4" />
          <rect x="24.5" y="34" width="5" height="2.5" rx="1" stroke="#facc15" strokeWidth="1.2" />
        </svg>
      </div>
    </div>
  );
}

// 3. Commerce & Sell Savings Floating Scene (Rupee Banknotes, Piggy Bank, Trust Shield, Coins, Handshake)
export function FloatingCommerceOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes floatCom1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(2.5deg); }
        }
        @keyframes floatCom2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(6px) rotate(-2deg); }
        }
        @keyframes coinDropSlot {
          0% { transform: translateY(-12px) scale(0.7); opacity: 0; }
          40% { transform: translateY(0px) scale(1); opacity: 1; }
          75% { transform: translateY(5px) scale(0.9); opacity: 0.6; }
          100% { transform: translateY(10px) scale(0.6); opacity: 0; }
        }
        @keyframes coinGleamStar {
          0%, 100% { opacity: 0.4; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes cashFlutter {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-4px) rotate(-3deg); }
        }
        .anim-com-float-1 { animation: floatCom1 4.4s ease-in-out infinite; }
        .anim-com-float-2 { animation: floatCom2 5.0s ease-in-out infinite 0.6s; }
        .anim-coin-dropping { animation: coinDropSlot 2s ease-in infinite; transform-origin: center; }
        .anim-coin-shine { animation: coinGleamStar 1.8s ease-in-out infinite; }
        .anim-cash-flutter { animation: cashFlutter 3.4s ease-in-out infinite; }
      `}</style>

      {/* 1. Stack of Rupee Banknotes / Instant Cash Deal (Middle-Left) */}
      <div className="absolute left-[36%] sm:left-[39%] md:left-[42%] bottom-1 anim-cash-flutter opacity-80 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="68" height="48" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Bottom Bill */}
          <rect x="4" y="16" width="52" height="26" rx="4" stroke="#facc15" strokeWidth="1.4" strokeOpacity="0.4" fill="currentColor" fillOpacity="0.04" />
          {/* Middle Bill */}
          <rect x="8" y="12" width="52" height="26" rx="4" stroke="#facc15" strokeWidth="1.5" strokeOpacity="0.7" fill="currentColor" fillOpacity="0.05" />
          {/* Top Bill */}
          <rect x="12" y="8" width="52" height="26" rx="4" stroke="#facc15" strokeWidth="1.8" fill="#facc15" fillOpacity="0.08" />
          {/* Currency Center Emblem with Rupee */}
          <circle cx="38" cy="21" r="7" stroke="#38bdf8" strokeWidth="1.4" />
          <path d="M36 17h4M36 19h3.5M36 17a2 2 0 0 0 2 2 2 2 0 0 0-2-2M38 19l3 4" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          {/* Security strip line */}
          <line x1="22" y1="8" x2="22" y2="34" stroke="#34d399" strokeWidth="1.2" strokeDasharray="3 2" />
        </svg>
      </div>

      {/* 2. Cute Savings Piggy Bank with Gold Coins Dropping into Slot (Middle-Center) */}
      <div className="absolute left-[52%] sm:left-[55%] md:left-[57%] top-1/2 -translate-y-1/2 anim-com-float-1 opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="64" height="60" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Falling Gold Coin */}
          <g className="anim-coin-dropping">
            <ellipse cx="32" cy="12" rx="6" ry="3.5" stroke="#facc15" strokeWidth="1.5" fill="#fde047" fillOpacity="0.8" />
            <text x="32" y="13.5" fill="#854d0e" fontSize="5" fontWeight="900" textAnchor="middle">₹</text>
          </g>

          {/* Piggy Bank Body */}
          <ellipse cx="32" cy="35" rx="20" ry="16" stroke="#f43f5e" strokeWidth="1.8" fill="currentColor" fillOpacity="0.06" />
          {/* Snout */}
          <ellipse cx="50" cy="35" rx="4" ry="6" stroke="#f43f5e" strokeWidth="1.6" fill="#f43f5e" fillOpacity="0.2" />
          <circle cx="49" cy="33.5" r="1" fill="#f43f5e" />
          <circle cx="49" cy="36.5" r="1" fill="#f43f5e" />
          {/* Ear */}
          <path d="M38 22l4-8-8 3z" stroke="#f43f5e" strokeWidth="1.6" fill="#f43f5e" fillOpacity="0.3" strokeLinejoin="round" />
          {/* Eye */}
          <circle cx="42" cy="30" r="1.5" fill="#facc15" />
          {/* Coin Slot on Top */}
          <line x1="28" y1="20" x2="36" y2="20" stroke="#facc15" strokeWidth="2.2" strokeLinecap="round" />
          {/* Legs */}
          <rect x="20" y="47" width="5" height="6" rx="2" fill="#f43f5e" stroke="#f43f5e" strokeWidth="1.4" />
          <rect x="36" y="47" width="5" height="6" rx="2" fill="#f43f5e" stroke="#f43f5e" strokeWidth="1.4" />
          {/* Curly Tail */}
          <path d="M12 33c-3-2-4-6-1-7 2-1 4 1 3 3" stroke="#f43f5e" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3. 0% Brokerage & 100% Free Trust Shield (Positioned Safely Away from Right Button!) */}
      <div className="absolute left-[68%] sm:left-[70%] md:left-[72%] top-1/2 -translate-y-1/2 anim-com-float-2 opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="62" height="62" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield Outline */}
          <path
            d="M34 10l18 6v18c0 14-18 24-18 24S16 48 16 34V16l18-6z"
            stroke="#38bdf8"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.04"
          />
          {/* Checkmark */}
          <path d="M26 34l6 6 12-14" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <text x="34" y="52" fill="#38bdf8" fontSize="7.5" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">0% BROKERAGE</text>
        </svg>
      </div>

      {/* 4. 3D Floating Gold Rupee Coin with Gleam Star (Top-Left Center) */}
      <div className="absolute left-[44%] sm:left-[47%] top-1 anim-com-float-1 opacity-80 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="48" height="48" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="22" stroke="#facc15" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="32" cy="32" r="17" stroke="#facc15" strokeWidth="1.4" fill="#facc15" fillOpacity="0.08" />
          <path
            d="M26 23h12M26 28h9M26 23a5 5 0 0 0 5 5 5 5 0 0 0 5-5M31 28l7 12"
            stroke="#facc15"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M48 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="#fde047" className="anim-coin-shine" />
        </svg>
      </div>

      {/* 5. Direct Deal Handshake Emblem (Trust & Freedom) */}
      <div className="absolute left-[33%] sm:left-[35%] top-1 anim-com-float-2 opacity-70 hover:opacity-100 transition-opacity hidden lg:block">
        <svg width="44" height="44" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hands meeting */}
          <path d="M8 24l8-8 10 5-4 5 7 5-5 5-9-5-7 2z" stroke="#34d399" strokeWidth="1.6" strokeLinejoin="round" fill="#34d399" fillOpacity="0.1" />
          <path d="M40 24l-8-8-10 5 4 5-7 5 5 5 9-5 7 2z" stroke="#38bdf8" strokeWidth="1.6" strokeLinejoin="round" fill="#38bdf8" fillOpacity="0.1" />
          {/* Deal Star */}
          <circle cx="24" cy="14" r="2" fill="#facc15" className="anim-coin-shine" />
        </svg>
      </div>
    </div>
  );
}
