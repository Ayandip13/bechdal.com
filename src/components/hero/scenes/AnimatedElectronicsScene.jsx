"use client";

import React from "react";
import { Zap, ShieldCheck } from "lucide-react";

/**
 * AnimatedElectronicsScene (Hero Slide 3)
 * Real animated SVG electronics & gadgets scene:
 * - A flagship smartphone enters with a smooth tilt & floating rotation, displaying a live notification badge.
 * - A sleek unibody laptop opens its lid and illuminates with an animated glowing display & code scan waves.
 * - Nearby TWS wireless earbuds float with radiating audio soundwave arcs.
 * - An animated smartwatch with a pulsing fitness activity ring completes the tech super-hub.
 */
export default function AnimatedElectronicsScene() {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none overflow-hidden">
      {/* Ambient Lighting Glows */}
      <div className="absolute w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-blue-600/20 blur-2xl pointer-events-none" />

      {/* Main Vector Scene Container */}
      <div className="relative w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[440px] md:max-w-[480px] aspect-[16/10] flex items-center justify-center">
        <svg
          viewBox="0 0 420 250"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-2xl overflow-visible"
        >
          <defs>
            {/* Tech Room Gradient */}
            <linearGradient id="elecSkyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#020617" stopOpacity="0.95" />
              <stop offset="65%" stopColor="#082f49" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#031b29" stopOpacity="0.95" />
            </linearGradient>

            {/* Laptop Screen Illuminated Display Gradient */}
            <linearGradient id="laptopDisplayGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#6366f1" />
            </linearGradient>

            {/* Smartphone Display Gradient */}
            <linearGradient id="phoneDisplayGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#312e81" />
            </linearGradient>

            {/* Metallic Aluminum Unibody Gradient */}
            <linearGradient id="aluminumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#94a3b8" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Ambient Screen Glow Radial */}
            <radialGradient id="screenGlowCone" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </radialGradient>
          </defs>

          <style>{`
            /* Smartphone Smooth Tilt Entrance & Idle Float */
            @keyframes phoneEntranceFloat {
              0% { transform: translateY(45px) rotate(-18deg); opacity: 0; }
              60% { transform: translateY(-4px) rotate(-7deg); opacity: 1; }
              100% { transform: translateY(0px) rotate(-8deg); opacity: 1; }
            }
            @keyframes phoneBobbing {
              0%, 100% { transform: translateY(0px) rotate(-8deg); }
              50% { transform: translateY(-7px) rotate(-6deg); }
            }
            /* Laptop Lid Opening & Screen Illumination */
            @keyframes laptopLidOpen {
              0% { transform: scaleY(0.7) skewX(-4deg); opacity: 0.6; }
              60% { transform: scaleY(1.02) skewX(1deg); opacity: 1; }
              100% { transform: scaleY(1) skewX(0deg); opacity: 1; }
            }
            /* Screen Dynamic Data Wave Scanning */
            @keyframes screenCodeScan {
              0% { transform: translateY(0); opacity: 0.5; }
              50% { opacity: 0.95; }
              100% { transform: translateY(-16px); opacity: 0.5; }
            }
            /* TWS Audio Soundwave Radiations */
            @keyframes soundWaveRings {
              0% { transform: scale(0.6); opacity: 0; }
              50% { transform: scale(1.15); opacity: 0.85; }
              100% { transform: scale(1.45); opacity: 0; }
            }
            /* Notification Pop */
            @keyframes notifPopBadge {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.08); }
            }
            /* Smartwatch Heart Pulse */
            @keyframes watchRingPulse {
              0%, 100% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.1); opacity: 1; }
            }

            .anim-phone-entry { animation: phoneEntranceFloat 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
            .anim-phone-idle { animation: phoneBobbing 4.2s ease-in-out infinite 1.2s; }
            .anim-laptop-open { animation: laptopLidOpen 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; transform-origin: 240px 185px; }
            .anim-code-scan { animation: screenCodeScan 2.4s linear infinite; }
            .anim-audio-ring { animation: soundWaveRings 2s ease-out infinite; transform-origin: 350px 80px; }
            .anim-notif-pop { animation: notifPopBadge 2.5s ease-in-out infinite; transform-origin: center; }
            .anim-watch-pulse { animation: watchRingPulse 2.6s ease-in-out infinite; transform-origin: 82px 64px; }
          `}</style>

          {/* 1. Backdrop Scene Card */}
          <rect x="10" y="10" width="400" height="230" rx="20" fill="url(#elecSkyGrad)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

          {/* 2. Modern Desktop Workstation Surface */}
          <path d="M10 185 L 410 185 L 410 238 A 18 18 0 0 1 392 238 L 28 238 A 18 18 0 0 1 10 238 Z" fill="#0f172a" />
          <line x1="10" y1="185" x2="410" y2="185" stroke="#38bdf8" strokeWidth="2" strokeOpacity="0.7" />
          {/* Desk Mat with Rounded Edges */}
          <rect x="90" y="185" width="280" height="48" rx="8" fill="#1e293b" fillOpacity="0.8" stroke="#334155" strokeWidth="1.2" />

          {/* 3. Ambient Desktop Circuit Micro-Traces in Background */}
          <g opacity="0.35">
            <path d="M40 40 H 120 V 90" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="4 4" fill="none" />
            <circle cx="120" cy="90" r="2.5" fill="#38bdf8" />
            <path d="M380 40 H 320 V 70" stroke="#6366f1" strokeWidth="1.4" strokeDasharray="4 4" fill="none" />
            <circle cx="320" cy="70" r="2.5" fill="#6366f1" />
          </g>

          {/* 4. Centerpiece: Sleek Unibody Laptop (Opens slightly with glowing screen!) */}
          <g>
            {/* Screen Glow Radiance behind lid */}
            <circle cx="230" cy="120" r="65" fill="url(#screenGlowCone)" className="pointer-events-none" />

            {/* Laptop Screen Lid Assembly (Lifting & Opening) */}
            <g className="anim-laptop-open">
              {/* Screen Bezel Frame */}
              <rect x="150" y="60" width="160" height="110" rx="8" fill="#0f172a" stroke="url(#aluminumGrad)" strokeWidth="2.5" />
              {/* Webcam Notch */}
              <circle cx="230" cy="65" r="1.5" fill="#38bdf8" />

              {/* Glowing High-Resolution Display Screen */}
              <rect x="156" y="70" width="148" height="94" rx="4" fill="url(#laptopDisplayGrad)" />

              {/* Animated Display UI Content (Dashboard Wave & Code Lines) */}
              <g className="anim-code-scan" opacity="0.85">
                <line x1="164" y1="82" x2="210" y2="82" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="164" y1="92" x2="195" y2="92" stroke="#e0f2fe" strokeWidth="2" strokeLinecap="round" />
                <line x1="164" y1="102" x2="225" y2="102" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" />
                {/* Visual Chart Waveform */}
                <path d="M164 140 Q 185 110, 210 135 T 260 115 T 295 130" stroke="#facc15" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                <path d="M164 150 Q 185 125, 210 145 T 260 130 T 295 142" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" fill="none" />
              </g>

              {/* App Icons / Windows on Screen */}
              <rect x="250" y="76" width="46" height="32" rx="4" fill="#0f172a" fillOpacity="0.45" stroke="#ffffff" strokeWidth="1" />
              <circle cx="260" cy="88" r="3" fill="#38bdf8" />
              <circle cx="270" cy="88" r="3" fill="#ec4899" />
              <circle cx="280" cy="88" r="3" fill="#facc15" />
            </g>

            {/* Laptop Base Unibody (Resting solidly on the desk) */}
            <path
              d="M130 185 L 146 172 H 314 L 330 185 H 130 Z"
              fill="url(#aluminumGrad)"
              stroke="#64748b"
              strokeWidth="2"
            />
            {/* Front Display Thumb Notch */}
            <path d="M220 185 H 240 L 238 188 H 222 Z" fill="#334155" />
            {/* Glass Trackpad */}
            <rect x="205" y="174" width="50" height="9" rx="2" fill="#475569" stroke="#94a3b8" strokeWidth="0.8" />
          </g>

          {/* 5. Flagship Smartphone (Entering with tilt & rotation + live notification!) */}
          <g className="anim-phone-entry">
            <g className="anim-phone-idle">
              {/* Phone Shadow */}
              <ellipse cx="92" cy="188" rx="28" ry="6" fill="#000000" fillOpacity="0.4" />

              {/* Phone Frame (Flagship Titanium Curved Bezel) */}
              <rect
                x="65"
                y="90"
                width="64"
                height="124"
                rx="14"
                fill="#020617"
                stroke="url(#aluminumGrad)"
                strokeWidth="2.8"
              />

              {/* OLED Edge-to-Edge Display Screen */}
              <rect
                x="68"
                y="93"
                width="58"
                height="118"
                rx="11"
                fill="url(#phoneDisplayGrad)"
              />

              {/* Dynamic Island / Camera Pill */}
              <rect x="88" y="96" width="18" height="5" rx="2.5" fill="#000000" />
              <circle cx="102" cy="98.5" r="1.2" fill="#0284c7" />

              {/* Live Bachat Notification Pill on Phone */}
              <g className="anim-notif-pop" transform="translate(72, 114)">
                <rect x="0" y="0" width="50" height="24" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.2" />
                <circle cx="8" cy="12" r="3.5" fill="#22c55e" />
                <text x="15" y="10" fill="#f8fafc" fontSize="5" fontWeight="900" fontFamily="sans-serif">BACHAT DEAL</text>
                <text x="15" y="18" fill="#38bdf8" fontSize="6" fontWeight="bold" fontFamily="sans-serif">Flat 50% Off</text>
              </g>

              {/* Phone App Grid Circles */}
              <circle cx="82" cy="154" r="5" fill="#3b82f6" fillOpacity="0.8" />
              <circle cx="97" cy="154" r="5" fill="#10b981" fillOpacity="0.8" />
              <circle cx="112" cy="154" r="5" fill="#f43f5e" fillOpacity="0.8" />

              <circle cx="82" cy="172" r="5" fill="#eab308" fillOpacity="0.8" />
              <circle cx="97" cy="172" r="5" fill="#8b5cf6" fillOpacity="0.8" />
              <circle cx="112" cy="172" r="5" fill="#06b6d4" fillOpacity="0.8" />

              {/* Bottom Home Indicator Bar */}
              <line x1="88" y1="205" x2="106" y2="205" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </g>
          </g>

          {/* 6. Smartwatch (Top-Left Accent with Pulsing Activity Ring) */}
          <g className="anim-watch-pulse">
            <rect x="68" y="44" width="28" height="38" rx="8" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.8" />
            <rect x="74" y="36" width="16" height="8" rx="2" fill="#334155" stroke="#475569" strokeWidth="1" />
            <rect x="74" y="82" width="16" height="8" rx="2" fill="#334155" stroke="#475569" strokeWidth="1" />
            {/* Watch Screen Activity Rings */}
            <circle cx="82" cy="63" r="8" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="30 15" strokeLinecap="round" />
            <circle cx="82" cy="63" r="5" stroke="#22c55e" strokeWidth="1.8" strokeDasharray="20 10" strokeLinecap="round" />
          </g>

          {/* 7. Wireless TWS Earbuds & Charging Case (Right Flank with Soundwaves) */}
          <g>
            {/* Radiating Audio Soundwave Arcs */}
            <circle cx="356" cy="116" r="16" stroke="#38bdf8" strokeWidth="1.4" strokeDasharray="4 4" className="anim-audio-ring" />
            <circle cx="356" cy="116" r="24" stroke="#60a5fa" strokeWidth="1.2" strokeDasharray="5 5" className="anim-audio-ring" style={{ animationDelay: "600ms" }} />

            {/* Left Floating Earbud */}
            <g transform="translate(342, 98) rotate(-18)">
              <ellipse cx="6" cy="6" rx="5" ry="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.4" />
              <path d="M6 10v10a1.5 1.5 0 0 1-3 0V10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.4" />
              <circle cx="6" cy="6" r="1.8" fill="#38bdf8" />
            </g>

            {/* Right Floating Earbud */}
            <g transform="translate(362, 96) rotate(16)">
              <ellipse cx="6" cy="6" rx="5" ry="4" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.4" />
              <path d="M6 10v10a1.5 1.5 0 0 0 3 0V10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.4" />
              <circle cx="6" cy="6" r="1.8" fill="#38bdf8" />
            </g>

            {/* Open Charging Case Base */}
            <rect x="338" y="132" width="36" height="26" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.8" />
            <circle cx="356" cy="144" r="1.8" fill="#22c55e" />
          </g>
        </svg>

        {/* Live Quick-Commerce Floating Badges */}
        <div className="absolute top-1 sm:top-2 left-2 sm:left-4 z-20 bg-slate-950/90 border border-cyan-400/50 px-2.5 py-1 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
          <span className="text-[10px] sm:text-xs font-black text-white">Verified 32-Pt Check</span>
        </div>

        <div className="absolute bottom-1 sm:bottom-2 right-2 sm:right-4 z-20 bg-slate-950/90 border border-blue-400/50 px-3 py-1.5 rounded-xl shadow-xl backdrop-blur-md flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center">
            <Zap size={12} className="fill-blue-400 text-blue-400" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] sm:text-[11px] font-black text-white leading-tight">Instant Delivery</span>
            <span className="text-[8px] sm:text-[9px] text-blue-300 font-bold">100% Genuine Gadgets</span>
          </div>
        </div>
      </div>
    </div>
  );
}
