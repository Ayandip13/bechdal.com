"use client";

import React from "react";

/**
 * ActionAnimatedIcons
 * High-performance, playful SVG action icons designed for CTA buttons
 * (e.g. "Start Selling", "Explore Categories", "Contact Support", etc.)
 * Features crisp vector geometries and lightweight CSS keyframe loops.
 */

// 1. Sell Action Icon: Vibrating price tag with glowing Rupee coin
export function AnimatedSellActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes sellTagTilt {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-8deg) scale(1.05); }
        }
        .anim-sell-tag { animation: sellTagTilt 1.8s ease-in-out infinite; transform-origin: top right; }
      `}</style>
      <g className="anim-sell-tag">
        {/* Tag Body */}
        <path
          d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"
          fill="currentColor"
          fillOpacity="0.15"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Tag Hole */}
        <circle cx="7" cy="7" r="1.5" fill="currentColor" />
        {/* Rupee Symbol inside tag */}
        <path
          d="M10 13h4M10 15h3M10 13a2 2 0 0 0 2-2 2 2 0 0 0-2-2h3M12 15l2.5 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

// 2. Explore Action Icon: Discovery Compass with oscillating magnetic needle
export function AnimatedExploreActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes compassNeedle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(38deg); }
          75% { transform: rotate(-28deg); }
        }
        @keyframes compassRing {
          0%, 100% { stroke-dashoffset: 0; }
          50% { stroke-dashoffset: 8; }
        }
        .anim-compass-needle { animation: compassNeedle 2.4s ease-in-out infinite; transform-origin: 12px 12px; }
      `}</style>
      {/* Outer Dial */}
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" strokeOpacity="0.8" />
      {/* Cardinal Ticks */}
      <line x1="12" y1="3.5" x2="12" y2="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="12" y1="19" x2="12" y2="20.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="3.5" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="19" y1="12" x2="20.5" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* Oscillating Needle */}
      <g className="anim-compass-needle">
        {/* North Pointer (Filled Red/Amber) */}
        <polygon points="12,6 14.5,12 12,11.5" fill="#ef4444" />
        {/* South Pointer (Outlined) */}
        <polygon points="12,18 9.5,12 12,12.5" fill="currentColor" fillOpacity="0.4" />
        {/* Center Pivot */}
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </g>
    </svg>
  );
}

// 3. Vehicles Action Icon: Sports car with spinning wheel spokes
export function AnimatedCarActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes wheelSpinAction {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes carHopAction {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1px); }
        }
        @keyframes speedLinePulse {
          0%, 100% { opacity: 0.2; transform: scaleX(0.7); }
          50% { opacity: 1; transform: scaleX(1.1); }
        }
        .anim-wheel-action-1 { animation: wheelSpinAction 0.6s linear infinite; transform-origin: 6.5px 17px; }
        .anim-wheel-action-2 { animation: wheelSpinAction 0.6s linear infinite; transform-origin: 17.5px 17px; }
        .anim-car-body { animation: carHopAction 0.6s ease-in-out infinite; }
        .anim-speed-line { animation: speedLinePulse 0.8s ease-in-out infinite; transform-origin: left center; }
      `}</style>
      {/* Speed lines behind car */}
      <line x1="1" y1="11" x2="3.5" y2="11" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" className="anim-speed-line" />
      <line x1="0.5" y1="14" x2="2.5" y2="14" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" className="anim-speed-line" style={{ animationDelay: "150ms" }} />

      <g className="anim-car-body">
        {/* Car chassis */}
        <path
          d="M4 14l2-6h11l3 6h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1.5M4 14H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.5M9.5 18h5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Windshield */}
        <path d="M6.5 13.5l1.5-4h7.5l2 4z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        {/* Headlight beam */}
        <circle cx="21" cy="14.5" r="1" fill="#facc15" />
      </g>

      {/* Front & Rear Wheels */}
      <g className="anim-wheel-action-1">
        <circle cx="6.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
        <line x1="6.5" y1="14.8" x2="6.5" y2="19.2" stroke="currentColor" strokeWidth="1" />
        <line x1="4.3" y1="17" x2="8.7" y2="17" stroke="currentColor" strokeWidth="1" />
      </g>
      <g className="anim-wheel-action-2">
        <circle cx="17.5" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8" fill="currentColor" fillOpacity="0.2" />
        <line x1="17.5" y1="14.8" x2="17.5" y2="19.2" stroke="currentColor" strokeWidth="1" />
        <line x1="15.3" y1="17" x2="19.7" y2="17" stroke="currentColor" strokeWidth="1" />
      </g>
    </svg>
  );
}

// 4. Gadgets / Mobiles Action Icon: Glowing phone with pulsing network waves
export function AnimatedGadgetActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes phoneTiltAction {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(6deg) scale(1.05); }
        }
        @keyframes signalRing {
          0% { opacity: 0; transform: scale(0.6); }
          50% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.3); }
        }
        .anim-phone-action { animation: phoneTiltAction 1.6s ease-in-out infinite; transform-origin: bottom center; }
        .anim-signal-1 { animation: signalRing 1.4s ease-out infinite; transform-origin: 19px 5px; }
        .anim-signal-2 { animation: signalRing 1.4s ease-out infinite 0.3s; transform-origin: 19px 5px; }
      `}</style>
      {/* Radiating Signal Waves */}
      <circle cx="19" cy="5" r="3" stroke="#38bdf8" strokeWidth="1.2" className="anim-signal-1" />
      <circle cx="19" cy="5" r="5" stroke="#38bdf8" strokeWidth="1" className="anim-signal-2" />

      {/* Phone Body */}
      <g className="anim-phone-action">
        <rect
          x="5"
          y="3"
          width="11"
          height="18"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          fill="currentColor"
          fillOpacity="0.15"
        />
        {/* Screen Notch */}
        <line x1="9" y1="5.5" x2="12" y2="5.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Home Indicator */}
        <line x1="9.5" y1="18.5" x2="11.5" y2="18.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
        {/* Screen Glow Accent */}
        <circle cx="10.5" cy="11" r="2.5" fill="#38bdf8" fillOpacity="0.35" />
      </g>
    </svg>
  );
}

// 5. Contact / Support Action Icon: Headset with animated soundwaves & live indicator
export function AnimatedSupportActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes headsetBob {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-1.5px) scale(1.04); }
        }
        @keyframes soundWavePing {
          0% { transform: scale(0.6); opacity: 0; }
          50% { transform: scale(1.1); opacity: 0.9; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes greenLivePulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.25); opacity: 1; }
        }
        .anim-headset-bob { animation: headsetBob 1.6s ease-in-out infinite; transform-origin: bottom center; }
        .anim-sound-wave { animation: soundWavePing 1.2s ease-out infinite; transform-origin: 19px 15px; }
        .anim-live-dot { animation: greenLivePulse 1.2s ease-in-out infinite; transform-origin: 18px 6px; }
      `}</style>
      {/* Soundwaves around microphone */}
      <circle cx="19" cy="15" r="2.5" stroke="#38bdf8" strokeWidth="1.2" className="anim-sound-wave" />

      {/* Headset Frame */}
      <g className="anim-headset-bob">
        {/* Headband */}
        <path
          d="M4 13a8 8 0 0 1 16 0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Left Earpad */}
        <rect x="2.5" y="11" width="3" height="6" rx="1.5" fill="currentColor" />
        {/* Right Earpad */}
        <rect x="18.5" y="11" width="3" height="6" rx="1.5" fill="currentColor" />
        {/* Microphone Boom */}
        <path
          d="M19 14v2a2 2 0 0 1-2 2h-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        {/* Mic Tip */}
        <circle cx="12" cy="18" r="1.2" fill="#ef4444" />
      </g>

      {/* Live Online Dot */}
      <circle cx="18" cy="6" r="2" fill="#22c55e" className="anim-live-dot" />
    </svg>
  );
}

// 6. Furniture / Home Action Icon: Bouncing armchair with lamp glow
export function AnimatedFurnitureActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes sofaBounceAction {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-1.5px) scale(1.03); }
        }
        .anim-sofa-bounce { animation: sofaBounceAction 1.5s ease-in-out infinite; transform-origin: bottom center; }
      `}</style>
      <g className="anim-sofa-bounce">
        {/* Backrest */}
        <path d="M5 8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4H5V8z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.8" />
        {/* Cushion */}
        <rect x="4" y="12" width="16" height="5" rx="2" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1.8" />
        {/* Left Arm */}
        <rect x="2" y="10" width="3.5" height="7" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        {/* Right Arm */}
        <rect x="18.5" y="10" width="3.5" height="7" rx="1.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        {/* Legs */}
        <line x1="6" y1="17" x2="5" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="18" y1="17" x2="19" y2="20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 7. Gym / Fitness Action Icon: Dumbbell with lift rotation
export function AnimatedFitnessActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes dumbbellCurlAction {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(25deg) scale(1.08); }
        }
        .anim-dumbbell-action { animation: dumbbellCurlAction 1.4s ease-in-out infinite; transform-origin: 12px 12px; }
      `}</style>
      <g className="anim-dumbbell-action">
        {/* Bar */}
        <line x1="5" y1="12" x2="19" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        {/* Weights Left */}
        <rect x="3" y="8" width="2.5" height="8" rx="1" fill="currentColor" stroke="currentColor" strokeWidth="1" />
        <rect x="6" y="9.5" width="2" height="5" rx="0.5" fill="currentColor" />
        {/* Weights Right */}
        <rect x="18.5" y="8" width="2.5" height="8" rx="1" fill="currentColor" stroke="currentColor" strokeWidth="1" />
        <rect x="16" y="9.5" width="2" height="5" rx="0.5" fill="currentColor" />
        {/* Grip Knurling */}
        <line x1="10.5" y1="10.5" x2="10.5" y2="13.5" stroke="#facc15" strokeWidth="1.2" />
        <line x1="13.5" y1="10.5" x2="13.5" y2="13.5" stroke="#facc15" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

// 8. Fashion Action Icon: Sneaker with speed swoosh
export function AnimatedFashionActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes sneakerJumpAction {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(-6deg); }
        }
        .anim-sneaker-action { animation: sneakerJumpAction 1.2s ease-in-out infinite; transform-origin: bottom left; }
      `}</style>
      <g className="anim-sneaker-action">
        {/* Sole */}
        <path d="M2 18h19a1 1 0 0 0 1-1v-1H2v2z" fill="#facc15" stroke="currentColor" strokeWidth="1.5" />
        {/* Shoe upper */}
        <path
          d="M3 16l3-8 5 2 4-3h4a2 2 0 0 1 2 2v7H3z"
          fill="currentColor"
          fillOpacity="0.2"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        {/* Laces */}
        <line x1="9" y1="10" x2="11" y2="12" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="11" y1="8.5" x2="13" y2="10.5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// 9. Interactive Arrow: Slides right with spring bounce on parent button hover
export function AnimatedActionArrow({ size = 15, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 group-hover:translate-x-1 shrink-0 ${className}`}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

// 10. Property Action Icon: Cozy house with chimney smoke puff
export function AnimatedPropertyActionIcon({ size = 18, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      <style>{`
        @keyframes houseChimneyPuff {
          0% { transform: translateY(0) scale(0.6); opacity: 0; }
          50% { transform: translateY(-2.5px) scale(1); opacity: 0.8; }
          100% { transform: translateY(-5px) scale(1.4); opacity: 0; }
        }
        @keyframes housePopAction {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.04); }
        }
        .anim-chimney-puff { animation: houseChimneyPuff 1.4s ease-out infinite; transform-origin: 18px 4px; }
        .anim-house-pop { animation: housePopAction 1.8s ease-in-out infinite; transform-origin: bottom center; }
      `}</style>
      {/* Chimney smoke puff */}
      <circle cx="18" cy="4" r="1.5" fill="#f43f5e" className="anim-chimney-puff" />
      <g className="anim-house-pop">
        {/* Roof */}
        <path d="M3 10.5L12 3l9 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {/* House Walls */}
        <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.8" />
        {/* Chimney */}
        <path d="M17 7.5V4h2v5.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        {/* Door */}
        <rect x="9.5" y="14" width="5" height="7" rx="1" fill="#f43f5e" fillOpacity="0.8" />
        <circle cx="13.5" cy="17.5" r="0.75" fill="#ffffff" />
      </g>
    </svg>
  );
}
