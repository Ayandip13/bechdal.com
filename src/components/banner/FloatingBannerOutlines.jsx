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

      {/* Accessory 1: Modern Smartwatch Outline with Pulsing Activity Ring & Heartbeat (Responsive on Mobile) */}
      <div className="absolute left-[38%] sm:left-[42%] md:left-[45%] top-2 sm:top-1/2 sm:-translate-y-1/2 anim-tech-1 opacity-35 sm:opacity-75 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="60" height="60" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[66px] sm:h-[66px]">
          <path d="M26 6V16h16V6c0-1.1-.9-2-2-2H28c-1.1 0-2 .9-2 2z" stroke="url(#neonCyanGlow)" strokeWidth="1.6" strokeDasharray="2 2" />
          <path d="M26 52v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V52" stroke="url(#neonCyanGlow)" strokeWidth="1.6" strokeDasharray="2 2" />
          <rect x="17" y="16" width="34" height="36" rx="9" stroke="url(#neonCyanGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.04" />
          <rect x="51" y="24" width="2.5" height="7" rx="1.2" stroke="url(#neonCyanGlow)" strokeWidth="1.4" />
          <circle cx="34" cy="34" r="11" stroke="#38bdf8" strokeWidth="1.8" strokeDasharray="45 20" strokeLinecap="round" className="anim-ring-pulse" />
          <path d="M27 34h3l2-4 3 8 2.5-6 1.5 2h4" stroke="#f43f5e" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Accessory 2: Wireless TWS Earbuds & Open Charging Case (Middle-Right) */}
      <div className="absolute left-[54%] sm:left-[57%] md:left-[60%] top-2 sm:top-[10%] anim-tech-2 opacity-35 sm:opacity-75 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="54" height="54" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[60px] sm:h-[60px]">
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

      {/* 1. Curving Asphalt Highway / Race Track with Center Dashed Markings (Responsive on Mobile) */}
      <div className="absolute left-[10%] sm:left-[34%] md:left-[36%] right-[5%] sm:right-[22%] bottom-0 h-10 sm:h-12 overflow-hidden opacity-50 sm:opacity-80 block">
        <svg width="100%" height="48" viewBox="0 0 400 48" fill="none" preserveAspectRatio="none">
          {/* Top Road Boundary */}
          <path d="M0 32 Q 100 12, 200 24 T 400 18" stroke="#34d399" strokeWidth="1.8" strokeOpacity="0.65" />
          {/* Center Dashed Highway Line */}
          <path d="M0 38 Q 100 18, 200 30 T 400 24" stroke="#facc15" strokeWidth="2" strokeDasharray="10 8" strokeOpacity="0.75" />
          {/* Bottom Road Boundary */}
          <path d="M0 44 Q 100 24, 200 36 T 400 30" stroke="#34d399" strokeWidth="1.8" strokeOpacity="0.65" />
        </svg>
      </div>

      {/* 2. Speeding Modern Sports Car Outline (Responsive on Mobile) */}
      <div className="absolute left-[36%] sm:left-[39%] md:left-[41%] bottom-1 sm:bottom-2 anim-car-drive opacity-50 sm:opacity-85 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="64" height="34" viewBox="0 0 72 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[72px] sm:h-[38px]">
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
      <div className="absolute left-[52%] sm:left-[56%] md:left-[58%] bottom-2 sm:bottom-3 anim-bike-bounce opacity-45 sm:opacity-80 hover:opacity-100 transition-opacity hidden sm:block">
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

      {/* 1. Stack of Rupee Banknotes / Instant Cash Deal (Responsive on Mobile) */}
      <div className="absolute left-[36%] sm:left-[39%] md:left-[42%] bottom-1 anim-cash-flutter opacity-35 sm:opacity-80 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="60" height="42" viewBox="0 0 68 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[68px] sm:h-[48px]">
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
      <div className="absolute left-[52%] sm:left-[55%] md:left-[57%] top-1/2 -translate-y-1/2 anim-com-float-1 opacity-35 sm:opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="56" height="52" viewBox="0 0 64 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[64px] sm:h-[60px]">
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
      <div className="absolute left-[68%] sm:left-[70%] md:left-[72%] top-2 sm:top-1/2 sm:-translate-y-1/2 anim-com-float-2 opacity-35 sm:opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="54" height="54" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[62px] sm:h-[62px]">
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
      <div className="absolute right-16 sm:right-auto sm:left-[47%] top-2 sm:top-1 anim-com-float-1 opacity-50 sm:opacity-80 hover:opacity-100 transition-opacity hidden xs:block">
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

// 4. Properties Floating Scene (Modern Villa, Skyline, Smart Key, Blueprint, Location Pin)
export function FloatingPropertyOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes propFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(1.5deg); }
        }
        @keyframes propFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(-1.5deg); }
        }
        @keyframes windowGlint {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.95; filter: drop-shadow(0 0 4px #fbbf24); }
        }
        @keyframes keySway {
          0%, 100% { transform: rotate(-8deg); }
          50% { transform: rotate(12deg); }
        }
        @keyframes pinBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .anim-prop-float-1 { animation: propFloat1 4.5s ease-in-out infinite; }
        .anim-prop-float-2 { animation: propFloat2 5.0s ease-in-out infinite 0.8s; }
        .anim-window-glow-pulse { animation: windowGlint 2.4s ease-in-out infinite; }
        .anim-key-sway { animation: keySway 3.6s ease-in-out infinite; transform-origin: 27px 12px; }
        .anim-pin-bounce { animation: pinBounce 2.8s ease-in-out infinite; }
      `}</style>

      {/* SVG Defs */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonAmberPropGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Modern Duplex Villa / Multi-story Residence (Middle-Left) */}
      <div className="absolute right-2 sm:right-auto sm:left-[39%] md:left-[42%] bottom-1 anim-prop-float-1 opacity-50 sm:opacity-85 hover:opacity-100 transition-opacity block">
        <svg width="68" height="52" viewBox="0 0 76 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[76px] sm:h-[56px]">
          {/* Ground base */}
          <line x1="2" y1="52" x2="74" y2="52" stroke="#f59e0b" strokeWidth="1.6" strokeDasharray="4 3" strokeOpacity="0.6" />
          {/* Main Duplex Structure */}
          <rect x="14" y="20" width="34" height="32" rx="3" stroke="url(#neonAmberPropGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.05" />
          {/* Cantilever Upper Floor Balcony */}
          <rect x="8" y="16" width="46" height="4" rx="2" stroke="#f59e0b" strokeWidth="1.4" fill="#fbbf24" fillOpacity="0.2" />
          {/* Windows on Floor 2 */}
          <rect x="18" y="24" width="11" height="9" rx="1.5" stroke="#38bdf8" strokeWidth="1.2" fill="#38bdf8" fillOpacity="0.2" className="anim-window-glow-pulse" />
          <rect x="33" y="24" width="11" height="9" rx="1.5" stroke="#fbbf24" strokeWidth="1.2" fill="#fbbf24" fillOpacity="0.25" className="anim-window-glow-pulse" style={{ animationDelay: "500ms" }} />
          {/* Balcony Railing */}
          <line x1="16" y1="36" x2="46" y2="36" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
          {/* Entrance Door */}
          <rect x="26" y="39" width="10" height="13" rx="1.5" stroke="#f59e0b" strokeWidth="1.4" fill="#0f172a" />
          <circle cx="34" cy="46" r="0.8" fill="#fbbf24" />
          {/* Adjacent Wing */}
          <path d="M48 26h18v26H48" stroke="url(#neonAmberPropGlow)" strokeWidth="1.6" fill="currentColor" fillOpacity="0.03" />
          <rect x="52" y="30" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="1" fill="#38bdf8" fillOpacity="0.15" />
          <rect x="52" y="41" width="10" height="7" rx="1" stroke="#38bdf8" strokeWidth="1" fill="#38bdf8" fillOpacity="0.15" />
        </svg>
      </div>

      {/* 2. House Key with Keychain Pendant (Middle-Center) */}
      <div className="absolute left-[52%] sm:left-[55%] md:left-[58%] top-1 anim-key-sway opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="48" height="52" viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Key Ring */}
          <circle cx="27" cy="12" r="8" stroke="#fbbf24" strokeWidth="2" strokeDasharray="8 3" fill="none" />
          {/* Key Stem */}
          <path d="M27 20v26l5-3v-4l4-3v-3l-9 0" stroke="url(#neonAmberPropGlow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="27" cy="12" r="3" fill="#f59e0b" />
          {/* Mini House Charm on Keychain */}
          <g transform="translate(36, 14)">
            <path d="M0 6l6-5 6 5v7H0V6z" stroke="#38bdf8" strokeWidth="1.4" fill="#0284c7" fillOpacity="0.2" />
            <rect x="4" y="8" width="4" height="5" fill="#38bdf8" />
          </g>
        </svg>
      </div>

      {/* 3. Location Pin with Radar Wave / Verified Plot (Right Flank) */}
      <div className="absolute left-[68%] sm:left-[70%] md:left-[73%] top-2 sm:top-1/2 sm:-translate-y-1/2 anim-pin-bounce opacity-40 sm:opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Pulsing Base Ring */}
          <ellipse cx="32" cy="54" rx="14" ry="4" stroke="#f59e0b" strokeWidth="1.4" strokeDasharray="4 3" opacity="0.6" />
          {/* Map Pin Shell */}
          <path
            d="M32 8C22 8 14 16 14 26c0 14 18 26 18 26s18-12 18-26c0-10-8-18-18-18z"
            stroke="url(#neonAmberPropGlow)"
            strokeWidth="2"
            fill="currentColor"
            fillOpacity="0.06"
          />
          {/* Center House / For Sale glyph */}
          <path d="M25 28l7-6 7 6v8H25v-8z" stroke="#38bdf8" strokeWidth="1.6" fill="#38bdf8" fillOpacity="0.2" />
          <rect x="29" y="30" width="6" height="6" fill="#fbbf24" rx="1" />
        </svg>
      </div>

      {/* 4. Architectural Blueprint / Floor Plan (Top-Center) */}
      <div className="absolute left-[47%] sm:left-[49%] top-2 anim-prop-float-2 opacity-65 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="52" height="44" viewBox="0 0 58 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="4" width="50" height="40" rx="4" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="3 3" fill="#0284c7" fillOpacity="0.04" />
          <path d="M12 12h16v14H12zM28 12h18v8H28zM28 20h18v16H28z" stroke="#38bdf8" strokeWidth="1.2" />
          <text x="24" y="40" fill="#f59e0b" fontSize="5" fontWeight="bold">100% 0% BROKERAGE</text>
        </svg>
      </div>
    </div>
  );
}

// 5. Furniture & Living Floating Scene (Designer Sofa, Floor Lamp, Coffee Table, Wall Clock)
export function FloatingFurnitureOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes furnFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(1deg); }
        }
        @keyframes furnFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(-1.5deg); }
        }
        @keyframes lampConeGlow {
          0%, 100% { opacity: 0.25; filter: drop-shadow(0 0 4px #fef08a); }
          50% { opacity: 0.65; filter: drop-shadow(0 0 12px #fde047); }
        }
        @keyframes steamFloatPuff {
          0% { transform: translateY(0) scale(0.8); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-8px) scale(1.2); opacity: 0; }
        }
        @keyframes clockSecondSweep {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .anim-furn-float-1 { animation: furnFloat1 4.6s ease-in-out infinite; }
        .anim-furn-float-2 { animation: furnFloat2 5.2s ease-in-out infinite 0.6s; }
        .anim-lamp-glow { animation: lampConeGlow 2.6s ease-in-out infinite; }
        .anim-steam-puff-1 { animation: steamFloatPuff 2s ease-out infinite; }
        .anim-clock-sweep { animation: clockSecondSweep 12s linear infinite; transform-origin: 20px 20px; }
      `}</style>

      {/* SVG Defs */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonTealFurnGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.45" />
          </linearGradient>
          <linearGradient id="neonWarmWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ca8a04" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Designer Mid-Century Sofa with Cushions (Middle-Left) */}
      <div className="absolute left-[36%] sm:left-[38%] md:left-[41%] bottom-1 anim-furn-float-1 opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="74" height="48" viewBox="0 0 80 52" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-[80px] sm:h-[52px]">
          {/* Sofa Backrest */}
          <rect x="8" y="14" width="64" height="22" rx="7" stroke="url(#neonTealFurnGlow)" strokeWidth="1.8" fill="currentColor" fillOpacity="0.05" />
          {/* Split Tufted Cushions */}
          <rect x="14" y="17" width="24" height="16" rx="4" stroke="#34d399" strokeWidth="1.2" fill="#10b981" fillOpacity="0.15" />
          <rect x="42" y="17" width="24" height="16" rx="4" stroke="#34d399" strokeWidth="1.2" fill="#10b981" fillOpacity="0.15" />
          {/* Sofa Seat Base */}
          <rect x="4" y="28" width="72" height="12" rx="4" stroke="url(#neonTealFurnGlow)" strokeWidth="1.8" fill="#047857" fillOpacity="0.2" />
          {/* Rounded Armrests */}
          <rect x="4" y="22" width="9" height="18" rx="4.5" stroke="url(#neonTealFurnGlow)" strokeWidth="1.6" fill="#0f172a" />
          <rect x="67" y="22" width="9" height="18" rx="4.5" stroke="url(#neonTealFurnGlow)" strokeWidth="1.6" fill="#0f172a" />
          {/* Wooden Peg Legs */}
          <line x1="14" y1="40" x2="10" y2="50" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="66" y1="40" x2="70" y2="50" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* 2. Sleek Arc Floor Lamp with Light Cone (Middle-Center) */}
      <div className="absolute left-[52%] sm:left-[54%] md:left-[57%] top-1 anim-furn-float-2 opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="52" height="58" viewBox="0 0 56 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Lamp Base */}
          <ellipse cx="14" cy="58" rx="10" ry="3.5" stroke="#94a3b8" strokeWidth="1.6" fill="#334155" />
          {/* Arch Stem */}
          <path d="M14 58 V 30 C 14 12, 42 12, 42 22" stroke="url(#neonWarmWood)" strokeWidth="2" strokeLinecap="round" />
          {/* Conical Shade */}
          <path d="M34 22 L 50 22 L 54 30 L 30 30 Z" stroke="#facc15" strokeWidth="1.8" fill="#ca8a04" fillOpacity="0.3" />
          {/* Light Cone Glow */}
          <polygon points="32,30 52,30 62,56 22,56" fill="url(#neonWarmWood)" opacity="0.2" className="anim-lamp-glow" />
          <circle cx="42" cy="27" r="2.5" fill="#fef08a" />
        </svg>
      </div>

      {/* 3. Nordic Coffee Table with Steaming Mug (Right Flank) */}
      <div className="absolute left-[68%] sm:left-[69%] md:left-[72%] bottom-2 anim-furn-float-1 opacity-40 sm:opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="58" height="48" viewBox="0 0 64 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Table Legs */}
          <line x1="18" y1="36" x2="12" y2="50" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <line x1="46" y1="36" x2="52" y2="50" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          {/* Table Surface */}
          <ellipse cx="32" cy="36" rx="26" ry="7" stroke="url(#neonTealFurnGlow)" strokeWidth="1.8" fill="#047857" fillOpacity="0.15" />
          {/* Steaming Mug */}
          <rect x="28" y="24" width="8" height="9" rx="1.5" stroke="#f8fafc" strokeWidth="1.4" fill="#38bdf8" fillOpacity="0.2" />
          <path d="M36 26.5h2.5a1.5 1.5 0 0 1 0 3H36" stroke="#f8fafc" strokeWidth="1.2" />
          <path d="M30 21 Q 28 17, 30 13" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" className="anim-steam-puff-1" />
          <path d="M34 20 Q 36 16, 34 12" stroke="#94a3b8" strokeWidth="1.2" strokeLinecap="round" className="anim-steam-puff-1" style={{ animationDelay: "500ms" }} />
        </svg>
      </div>

      {/* 4. Minimalist Wall Clock (Top-Center) */}
      <div className="absolute left-[46%] sm:left-[48%] top-1 anim-furn-float-2 opacity-65 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="16" stroke="#34d399" strokeWidth="1.8" strokeDasharray="6 3" />
          <circle cx="20" cy="20" r="13" stroke="#34d399" strokeWidth="1.2" fill="currentColor" fillOpacity="0.04" />
          <g className="anim-clock-sweep">
            <line x1="20" y1="20" x2="20" y2="10" stroke="#f59e0b" strokeWidth="1.6" strokeLinecap="round" />
            <line x1="20" y1="20" x2="26" y2="20" stroke="#38bdf8" strokeWidth="1.4" strokeLinecap="round" />
          </g>
          <circle cx="20" cy="20" r="2" fill="#facc15" />
        </svg>
      </div>
    </div>
  );
}

// 6. Fashion & Lifestyle Floating Scene (Designer Hanger, Sneakers, Sunglasses, Handbag)
export function FloatingFashionOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes fashFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes fashFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(-2deg); }
        }
        @keyframes hangerSwingGently {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(10deg); }
        }
        @keyframes glintShine {
          0%, 100% { opacity: 0.3; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        .anim-fash-float-1 { animation: fashFloat1 4.4s ease-in-out infinite; }
        .anim-fash-float-2 { animation: fashFloat2 5.0s ease-in-out infinite 0.7s; }
        .anim-hanger-swing-slow { animation: hangerSwingGently 3.8s ease-in-out infinite; transform-origin: 32px 6px; }
        .anim-glint-sparkle { animation: glintShine 2s ease-in-out infinite; }
      `}</style>

      {/* SVG Defs */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonPurpleFashGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c084fc" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#f43f5e" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Chic T-Shirt on Wooden Hanger (Middle-Left) */}
      <div className="absolute left-[36%] sm:left-[39%] md:left-[42%] top-2 anim-hanger-swing-slow opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="58" height="58" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hook */}
          <path d="M32 6c3 0 5 2 4.5 4.5C36 13 32 14 32 16" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          {/* Hanger Triangle */}
          <path d="M14 22L32 16l18 6" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          {/* T-Shirt Body Outline */}
          <path
            d="M24 19c2 3 14 3 16 0l12 6-4 8-4-2v24H20V31l-4 2-4-8 12-6z"
            stroke="url(#neonPurpleFashGlow)"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.06"
            strokeLinejoin="round"
          />
          {/* Front V/Collar line */}
          <path d="M26 19.5c2 2.5 10 2.5 12 0" stroke="#f43f5e" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="28" cy="28" r="2" fill="#ec4899" />
        </svg>
      </div>

      {/* 2. Streetwear High-Top Sneaker Outline (Middle-Center) */}
      <div className="absolute left-[52%] sm:left-[55%] md:left-[58%] bottom-1 anim-fash-float-1 opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="68" height="44" viewBox="0 0 74 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Sole Cushion */}
          <path d="M6 42h62c0-3-2-5-5-5H11c-3 0-5 2-5 5z" stroke="#38bdf8" strokeWidth="1.8" fill="#0284c7" fillOpacity="0.2" />
          {/* Sneaker Body */}
          <path
            d="M10 37l4-18 16 2 12 12 18 1c4 0 7 2 8 3v-2l-12-8-6-15h-8l-4 8-18-2-10 20z"
            stroke="url(#neonPurpleFashGlow)"
            strokeWidth="1.8"
            fill="currentColor"
            fillOpacity="0.05"
            strokeLinejoin="round"
          />
          {/* Swoosh */}
          <path d="M22 28c8 2 24-2 36 6" stroke="#f43f5e" strokeWidth="2.2" strokeLinecap="round" />
          <line x1="32" y1="20" x2="38" y2="23" stroke="#f8fafc" strokeWidth="1.4" strokeLinecap="round" />
          <line x1="34" y1="24" x2="40" y2="27" stroke="#f8fafc" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>

      {/* 3. Designer Sunglasses with Glint (Right Flank) */}
      <div className="absolute left-[68%] sm:left-[70%] md:left-[73%] top-2 sm:top-1/2 sm:-translate-y-1/2 anim-fash-float-2 opacity-40 sm:opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="56" height="42" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="16" width="22" height="18" rx="6" stroke="url(#neonPurpleFashGlow)" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.25" />
          <line x1="9" y1="21" x2="16" y2="30" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
          <path d="M28 22c2-2 6-2 8 0" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
          <rect x="36" y="16" width="22" height="18" rx="6" stroke="url(#neonPurpleFashGlow)" strokeWidth="2" fill="#8b5cf6" fillOpacity="0.25" />
          <line x1="39" y1="21" x2="46" y2="30" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="round" opacity="0.7" />
          <path d="M6 18l-3-4" stroke="url(#neonPurpleFashGlow)" strokeWidth="2" strokeLinecap="round" />
          <path d="M58 18l3-4" stroke="url(#neonPurpleFashGlow)" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" fill="#facc15" className="anim-glint-sparkle" />
        </svg>
      </div>

      {/* 4. Luxury Handbag / Tote Outline (Top-Center) */}
      <div className="absolute left-[47%] sm:left-[49%] bottom-2 anim-fash-float-1 opacity-65 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="44" height="44" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 18c0-7 14-7 14 0" stroke="#fbbf24" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M12 18h26l-3 24H15l-3-24z" stroke="#ec4899" strokeWidth="1.8" fill="#ec4899" fillOpacity="0.08" strokeLinejoin="round" />
          <circle cx="25" cy="27" r="2" fill="#fbbf24" />
        </svg>
      </div>
    </div>
  );
}

// 7. Fitness & Gym Floating Scene (Barbell Weights, Kettlebell, Heartbeat Pulse, Dumbbell)
export function FloatingFitnessGymOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes gymFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(2deg); }
        }
        @keyframes gymFloat2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(5px) rotate(-2deg); }
        }
        @keyframes pulseEcgWave {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; filter: drop-shadow(0 0 4px #ef4444); }
        }
        .anim-gym-float-1 { animation: gymFloat1 4.5s ease-in-out infinite; }
        .anim-gym-float-2 { animation: gymFloat2 5.0s ease-in-out infinite 0.7s; }
        .anim-ecg-pulse { animation: pulseEcgWave 2.2s linear infinite; }
      `}</style>

      {/* SVG Defs */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonOrangeGymGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#ef4444" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Heavy Olympic Barbell with Weight Plates (Middle-Left) */}
      <div className="absolute left-[36%] sm:left-[38%] md:left-[41%] bottom-1 anim-gym-float-1 opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="74" height="42" viewBox="0 0 80 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="6" y1="22" x2="74" y2="22" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="30" y1="22" x2="50" y2="22" stroke="#f59e0b" strokeWidth="2.8" strokeDasharray="3 2" />
          <rect x="14" y="8" width="5" height="28" rx="2" stroke="url(#neonOrangeGymGlow)" strokeWidth="1.8" fill="#1e293b" />
          <rect x="20" y="12" width="4" height="20" rx="1.5" stroke="url(#neonOrangeGymGlow)" strokeWidth="1.6" fill="#0f172a" />
          <rect x="61" y="8" width="5" height="28" rx="2" stroke="url(#neonOrangeGymGlow)" strokeWidth="1.8" fill="#1e293b" />
          <rect x="56" y="12" width="4" height="20" rx="1.5" stroke="url(#neonOrangeGymGlow)" strokeWidth="1.6" fill="#0f172a" />
        </svg>
      </div>

      {/* 2. Cast Iron Kettlebell (Middle-Center) */}
      <div className="absolute left-[52%] sm:left-[55%] md:left-[58%] top-1 anim-gym-float-2 opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="48" height="52" viewBox="0 0 54 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 22 C 18 10, 36 10, 36 22" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          <circle cx="27" cy="36" r="16" stroke="url(#neonOrangeGymGlow)" strokeWidth="2" fill="currentColor" fillOpacity="0.06" />
          <circle cx="27" cy="36" r="11" stroke="#f97316" strokeWidth="1.2" strokeDasharray="4 2" />
          <text x="27" y="39" fill="#facc15" fontSize="7" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">24 KG</text>
        </svg>
      </div>

      {/* 3. Heartbeat ECG Pulse Wave (Right Flank) */}
      <div className="absolute left-[68%] sm:left-[70%] md:left-[73%] top-2 sm:top-1/2 sm:-translate-y-1/2 anim-gym-float-1 opacity-40 sm:opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="56" height="44" viewBox="0 0 64 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 24h12l4-14 6 28 6-20 4 10 4-4h18"
            stroke="#ef4444"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="anim-ecg-pulse"
          />
          <circle cx="54" cy="24" r="2.5" fill="#f97316" />
        </svg>
      </div>
    </div>
  );
}

// 8. Agricultural & Machinery Floating Scene (Tractor Wheel, Wheat Stalks, Industrial Gears)
export function FloatingAgriEquipmentOutlines({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      <style>{`
        @keyframes agriFloat1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(1.5deg); }
        }
        @keyframes gearTurnWheel {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes wheatBreeze {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(8deg); }
        }
        .anim-agri-float-1 { animation: agriFloat1 4.5s ease-in-out infinite; }
        .anim-gear-turn { animation: gearTurnWheel 12s linear infinite; transform-origin: 32px 32px; }
        .anim-wheat-sway { animation: wheatBreeze 3.2s ease-in-out infinite; transform-origin: 27px 60px; }
      `}</style>

      {/* SVG Defs */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="neonGreenGoldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#22c55e" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Heavy Tractor Lug Tire & Wheel (Middle-Left) */}
      <div className="absolute left-[36%] sm:left-[38%] md:left-[41%] bottom-1 anim-agri-float-1 opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden xs:block">
        <svg width="68" height="52" viewBox="0 0 74 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="37" cy="28" r="22" stroke="url(#neonGreenGoldGlow)" strokeWidth="3" strokeDasharray="6 4" />
          <circle cx="37" cy="28" r="16" stroke="#ca8a04" strokeWidth="2" fill="#1e293b" />
          <circle cx="37" cy="28" r="7" stroke="#15803d" strokeWidth="2" fill="#0f172a" />
          <circle cx="37" cy="28" r="2.5" fill="#eab308" />
        </svg>
      </div>

      {/* 2. Golden Wheat Stalks (Middle-Center) */}
      <div className="absolute left-[52%] sm:left-[54%] md:left-[57%] bottom-1 anim-wheat-sway opacity-45 sm:opacity-85 hover:opacity-100 transition-opacity hidden sm:block">
        <svg width="48" height="54" viewBox="0 0 54 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27 60 V 20" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="22" cy="18" rx="4" ry="7" transform="rotate(-30 22 18)" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
          <ellipse cx="32" cy="18" rx="4" ry="7" transform="rotate(30 32 18)" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
          <ellipse cx="23" cy="28" rx="3.5" ry="6.5" transform="rotate(-30 23 28)" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
          <ellipse cx="31" cy="28" rx="3.5" ry="6.5" transform="rotate(30 31 28)" fill="#facc15" stroke="#ca8a04" strokeWidth="1.2" />
          <circle cx="27" cy="10" r="3" fill="#fef08a" />
        </svg>
      </div>

      {/* 3. Rotating Industrial Gear Pair (Right Flank) */}
      <div className="absolute left-[68%] sm:left-[69%] md:left-[72%] top-2 sm:top-1/2 sm:-translate-y-1/2 anim-agri-float-1 opacity-40 sm:opacity-80 hover:opacity-100 transition-opacity hidden md:block">
        <svg width="56" height="56" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g className="anim-gear-turn">
            <circle cx="32" cy="32" r="22" stroke="url(#neonGreenGoldGlow)" strokeWidth="3" strokeDasharray="8 6" />
            <circle cx="32" cy="32" r="14" stroke="#ca8a04" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />
            <circle cx="32" cy="32" r="5" fill="#facc15" />
          </g>
        </svg>
      </div>
    </div>
  );
}

/**
 * Universal Category Banner Outlines Dispatcher
 * Renders dedicated, relatable animated SVG floating outlines based on category slug.
 */
export function CategoryBannerOutlines({ categorySlug, className = "" }) {
  const slug = (categorySlug || "").toLowerCase().trim();

  if (slug === "mobiles" || slug === "electronics") {
    return <FloatingTechOutlines className={className} />;
  }
  if (slug === "vehicles" || slug === "bikes" || slug === "cars" || slug === "boats") {
    return <FloatingVehicleOutlines className={className} />;
  }
  if (slug === "properties" || slug === "property" || slug === "real-estate") {
    return <FloatingPropertyOutlines className={className} />;
  }
  if (slug === "furniture" || slug === "home-decor") {
    return <FloatingFurnitureOutlines className={className} />;
  }
  if (slug === "fashion" || slug === "clothing" || slug === "lifestyle") {
    return <FloatingFashionOutlines className={className} />;
  }
  if (
    slug === "fitness-gym-music" ||
    slug === "gym-equipment" ||
    slug === "gym" ||
    slug === "fitness" ||
    slug === "sports"
  ) {
    return <FloatingFitnessGymOutlines className={className} />;
  }
  if (
    slug === "agricultural-products" ||
    slug === "construction-equipment" ||
    slug === "agriculture" ||
    slug === "machinery"
  ) {
    return <FloatingAgriEquipmentOutlines className={className} />;
  }

  // Default fallback for pets, pet-products, books, services, jobs, office-equipment, etc.
  return <FloatingCommerceOutlines className={className} />;
}
