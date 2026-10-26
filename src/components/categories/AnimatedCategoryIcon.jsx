"use client";

import React from "react";

/**
 * AnimatedCategoryIcon
 * Lively, animated vector micro-illustrations inspired by quick-commerce app stickers (Flipkart Minutes / Blinkit).
 * Features multi-part internal SVG animations with snappy spring dynamics and zero external dependencies.
 */
export default function AnimatedCategoryIcon({ slug, size = "sm", className = "" }) {
  const normalizedSlug = (slug || "").toLowerCase().trim();

  // Size configurations
  const sizeMap = {
    xs: "w-3.5 h-3.5",
    sm: "w-4.5 h-4.5 sm:w-5 sm:h-5", // default for CategoryNav pills
    md: "w-7 h-7 sm:w-8 sm:h-8",
    lg: "w-10 h-10 sm:w-12 sm:h-12", // for PopularCategories cards
  };

  const dimensionClass = sizeMap[size] || sizeMap.sm;

  switch (normalizedSlug) {
    // -------------------------------------------------------------
    // 1. Electronics — Laptop screen glow, code scan line & wifi wave
    // -------------------------------------------------------------
    case "electronics":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-laptop-bounce">
            {/* Screen Glow Halo */}
            <circle cx="16" cy="14" r="11" fill="#3b82f6" opacity="0.3" className="anim-screen-glow" />

            {/* Wifi Wave pulses above screen */}
            <path d="M12 5C14.5 3 17.5 3 20 5" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" className="anim-wifi-radiate" />
            <path d="M13.5 6.8C15 5.5 17 5.5 18.5 6.8" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" className="anim-wifi-radiate" style={{ animationDelay: "200ms" }} />
            <circle cx="16" cy="8.5" r="0.8" fill="#38bdf8" />

            {/* Laptop Base */}
            <path d="M4 23H28C28.5523 23 29 22.5523 29 22V21H3V22C3 22.5523 3.44772 23 4 23Z" fill="#64748b" />
            <path d="M12 23H20V22H12V23Z" fill="#94a3b8" />

            {/* Laptop Screen Body */}
            <rect x="6" y="9" width="20" height="12" rx="2" fill="#0f172a" stroke="#3b82f6" strokeWidth="1.5" />
            {/* Screen Display Gradient */}
            <rect x="7.5" y="10.5" width="17" height="9" rx="1" fill="url(#screenGradLive)" />

            {/* Code / Content Lines on screen with scanning pulse */}
            <line x1="9.5" y1="13" x2="16.5" y2="13" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" className="anim-code-scan" />
            <line x1="9.5" y1="15.5" x2="20.5" y2="15.5" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" className="anim-code-scan" style={{ animationDelay: "300ms" }} />
            <circle cx="22" cy="13" r="1" fill="#38bdf8" className="animate-ping opacity-80" />

            <defs>
              <linearGradient id="screenGradLive" x1="7.5" y1="10.5" x2="24.5" y2="19.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e3a8a" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 2. Mobiles — Phone vibrating jiggle & pop-up notification badge
    // -------------------------------------------------------------
    case "mobiles":
    case "mobile":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-phone-vibe">
            {/* Phone Body */}
            <rect x="9" y="5" width="14" height="23" rx="3.5" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
            {/* Screen Wallpaper */}
            <rect x="10.5" y="7" width="11" height="19" rx="2.5" fill="url(#mobileGradLive)" />
            {/* Notch / Dynamic Island */}
            <rect x="13.5" y="6" width="5" height="1.5" rx="0.75" fill="#020617" />
            <circle cx="16" cy="6.75" r="0.5" fill="#38bdf8" />

            {/* Live Message / Notification bubble in top right */}
            <g className="anim-badge-spring" style={{ transformOrigin: "22px 6px" }}>
              <circle cx="22.5" cy="6.5" r="3.5" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />
              <text x="22.5" y="8" textAnchor="middle" fill="#ffffff" fontSize="4" fontWeight="900" fontFamily="sans-serif">1</text>
            </g>

            {/* Glowing screen sound / message bar */}
            <rect x="12" y="14" width="8" height="2" rx="1" fill="#ffffff" opacity="0.85" className="anim-code-scan" />
            <rect x="13" y="17.5" width="6" height="1.5" rx="0.75" fill="#93c5fd" opacity="0.8" />

            {/* Home indicator bar */}
            <rect x="14" y="24.5" width="4" height="0.8" rx="0.4" fill="#ffffff" opacity="0.8" />

            <defs>
              <linearGradient id="mobileGradLive" x1="10.5" y1="7" x2="21.5" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="0.5" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 3. Vehicles — Car suspension ride, spinning wheels & exhaust smoke
    // -------------------------------------------------------------
    case "vehicles":
    case "cars":
    case "bikes":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-car-ride">
            {/* Exhaust smoke puffs */}
            <circle cx="3" cy="20" r="1.5" fill="#94a3b8" className="anim-exhaust" />
            <circle cx="1.5" cy="18" r="1.2" fill="#cbd5e1" className="anim-exhaust" style={{ animationDelay: "300ms" }} />

            {/* Car Roof & Cabin */}
            <path d="M8 17L11.5 11H20.5L24 17" fill="url(#carRoofGradLive)" />
            {/* Car Windows */}
            <path d="M12 12H19.5L22.5 17H9.5L12 12Z" fill="#38bdf8" opacity="0.85" />

            {/* Car Lower Body */}
            <path d="M5 17C5 16.4477 5.44772 16 6 16H26C26.5523 16 27 16.4477 27 17L28 20.5C28 21.0523 27.5523 21.5 27 21.5H5C4.44772 21.5 4 21.0523 4 20.5L5 17Z" fill="#dc2626" />

            {/* Headlight beam pulse */}
            <polygon points="27,18 31,16 31,21 27,20" fill="#fef08a" className="anim-headlight-flash" />

            {/* Left Wheel with spinning spokes */}
            <g className="anim-wheel-spin" style={{ transformOrigin: "10px 22px" }}>
              <circle cx="10" cy="22" r="3" fill="#1e293b" />
              <circle cx="10" cy="22" r="1.5" fill="#94a3b8" />
              <line x1="8.5" y1="22" x2="11.5" y2="22" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="10" y1="20.5" x2="10" y2="23.5" stroke="#ffffff" strokeWidth="0.8" />
            </g>

            {/* Right Wheel with spinning spokes */}
            <g className="anim-wheel-spin" style={{ transformOrigin: "22px 22px" }}>
              <circle cx="22" cy="22" r="3" fill="#1e293b" />
              <circle cx="22" cy="22" r="1.5" fill="#94a3b8" />
              <line x1="20.5" y1="22" x2="23.5" y2="22" stroke="#ffffff" strokeWidth="0.8" />
              <line x1="22" y1="20.5" x2="22" y2="23.5" stroke="#ffffff" strokeWidth="0.8" />
            </g>

            <defs>
              <linearGradient id="carRoofGradLive" x1="11.5" y1="11" x2="20.5" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ef4444" />
                <stop offset="1" stopColor="#b91c1c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 4. Properties — House pop-up, rising chimney smoke & window glow
    // -------------------------------------------------------------
    case "properties":
    case "property":
    case "real-estate":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-house-pop">
            {/* Chimney */}
            <rect x="20" y="8" width="2.5" height="5" fill="#c2410c" />
            {/* Animated Smoke Puffs rising */}
            <circle cx="21" cy="6" r="1.2" fill="#cbd5e1" className="anim-smoke-puff" />
            <circle cx="21.5" cy="4" r="1.5" fill="#e2e8f0" className="anim-smoke-puff" style={{ animationDelay: "400ms" }} />

            {/* Roof */}
            <path d="M16 6L5 16H9V26H23V16H27L16 6Z" fill="#ea580c" />
            {/* House Wall Front */}
            <rect x="9" y="15" width="14" height="11" rx="0.5" fill="#ffedd5" />
            {/* Door */}
            <rect x="14" y="19" width="4" height="7" rx="0.5" fill="#9a3412" />
            <circle cx="17" cy="22.5" r="0.4" fill="#fbbf24" />

            {/* Glowing Attic Window */}
            <circle cx="16" cy="11.5" r="1.8" fill="#fef08a" stroke="#ea580c" strokeWidth="0.8" className="anim-window-glow" />
            {/* Glowing Ground Window */}
            <rect x="10.5" y="18" width="2.5" height="3" rx="0.5" fill="#fbbf24" className="anim-window-glow" style={{ animationDelay: "300ms" }} />
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 5. Furniture — Sofa squash bounce with cozy sparkle
    // -------------------------------------------------------------
    case "furniture":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-sofa-squash" style={{ transformOrigin: "bottom center" }}>
            {/* Floating Sparkle above sofa */}
            <g className="anim-sparkle-float" style={{ transformOrigin: "24px 7px" }}>
              <polygon points="24,4 25,6 27,7 25,8 24,10 23,8 21,7 23,6" fill="#fbbf24" />
            </g>

            {/* Sofa Backrest */}
            <rect x="6" y="10" width="20" height="10" rx="3" fill="#b45309" />
            {/* Backrest Cushions */}
            <rect x="8" y="11" width="7.5" height="7" rx="1.5" fill="#d97706" />
            <rect x="16.5" y="11" width="7.5" height="7" rx="1.5" fill="#d97706" />
            {/* Sofa Base */}
            <rect x="4" y="18" width="24" height="6" rx="2" fill="#92400e" />
            {/* Armrest Left */}
            <rect x="4" y="14" width="3.5" height="9" rx="1.5" fill="#b45309" />
            {/* Armrest Right */}
            <rect x="24.5" y="14" width="3.5" height="9" rx="1.5" fill="#b45309" />
            {/* Wooden Legs */}
            <line x1="7" y1="24" x2="6" y2="27" stroke="#78350f" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="25" y1="24" x2="26" y2="27" stroke="#78350f" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 6. Fashion — Hanger pendulum swing with fabric ripple
    // -------------------------------------------------------------
    case "fashion":
    case "clothing":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-hanger-swing" style={{ transformOrigin: "16px 6px" }}>
            {/* Sparkle on clothes */}
            <g className="anim-sparkle-float" style={{ transformOrigin: "19px 15px" }}>
              <polygon points="19,13 20,15 22,15.5 20,16 19,18 18,16 16,15.5 18,15" fill="#fde047" />
            </g>

            {/* Hanger Hook */}
            <path d="M16 6C17 6 18 7 17.5 8.5C17 10 16 10.5 16 11.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            {/* Hanger Triangle */}
            <path d="M9 13.5L16 11.5L23 13.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* T-Shirt Body */}
            <path d="M12 12C13 13.5 19 13.5 20 12L25 15L23 18L21 17V26H11V17L9 18L7 15L12 12Z" fill="url(#fashionGradLive)" />
            {/* Collar Accent */}
            <path d="M12.5 12C13.5 13.5 18.5 13.5 19.5 12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

            <defs>
              <linearGradient id="fashionGradLive" x1="7" y1="12" x2="25" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 7. Boats — Sailboat rocking on sliding ocean waves with wind flag
    // -------------------------------------------------------------
    case "boats":
    case "boat":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Sliding Wave Layer */}
            <g className="anim-wave-flow">
              <path d="M1 24C4 23 7 25 10 24C13 23 16 25 19 24C22 23 25 25 28 24C30 23.5 32 24.5 34 24" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M-2 26C1 25.5 4 27 7 26C10 25 13 27 16 26C19 25 22 27 25 26C28 25 31 27 34 26" stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
            </g>

            {/* Rocking Boat Assembly */}
            <g className="anim-boat-heave" style={{ transformOrigin: "16px 20px" }}>
              {/* Mast Flag fluttering */}
              <polygon points="16,6 20,7.5 16,9" fill="#ef4444" className="anim-flag-flutter" style={{ transformOrigin: "16px 7.5px" }} />

              {/* Mast */}
              <line x1="16" y1="6" x2="16" y2="20" stroke="#64748b" strokeWidth="1.5" />
              {/* Main Sail (Cyan to Blue) */}
              <path d="M16 7L24 18H16V7Z" fill="#06b6d4" />
              {/* Front Sail (Teal) */}
              <path d="M15 9L9 18H15V9Z" fill="#0891b2" />
              {/* Boat Hull */}
              <path d="M6 20L8 23.5H24L26 20H6Z" fill="#0f766e" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 8. Gym Equipment — Dumbbell bicep curl lift & energy sparks
    // -------------------------------------------------------------
    case "gym-equipment":
    case "gym-equipments":
    case "fitness":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Workout Power Burst on peak lift */}
            <g className="anim-energy-spark" style={{ transformOrigin: "26px 8px" }}>
              <polygon points="26,5 27,7 29,8 27,9 26,11 25,9 23,8 25,7" fill="#fde047" />
            </g>
            <g className="anim-energy-spark" style={{ transformOrigin: "6px 8px", animationDelay: "200ms" }}>
              <polygon points="6,6 7,7.5 8.5,8 7,8.5 6,10 5,8.5 3.5,8 5,7.5" fill="#f97316" />
            </g>

            {/* Lifting Dumbbell */}
            <g className="anim-dumbbell-curl" style={{ transformOrigin: "16px 16px" }}>
              {/* Left Weight Outer Hex */}
              <rect x="5" y="11" width="3" height="10" rx="1" fill="#f97316" />
              <rect x="8" y="13" width="2" height="6" rx="0.5" fill="#ea580c" />
              {/* Center Chrome Grip Bar */}
              <rect x="10" y="14.5" width="12" height="3" rx="0.5" fill="#cbd5e1" stroke="#64748b" strokeWidth="0.5" />
              {/* Grip Knurling */}
              <line x1="14" y1="14.5" x2="14" y2="17.5" stroke="#94a3b8" strokeWidth="1" />
              <line x1="16" y1="14.5" x2="16" y2="17.5" stroke="#94a3b8" strokeWidth="1" />
              <line x1="18" y1="14.5" x2="18" y2="17.5" stroke="#94a3b8" strokeWidth="1" />
              {/* Right Weight Outer Hex */}
              <rect x="22" y="13" width="2" height="6" rx="0.5" fill="#ea580c" />
              <rect x="24" y="11" width="3" height="10" rx="1" fill="#f97316" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 9. Services — Rotating gear & ratcheting wrench
    // -------------------------------------------------------------
    case "services":
    case "service":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Spinning Background Gear */}
            <g className="anim-gear-turn" style={{ transformOrigin: "16px 16px" }}>
              <circle cx="16" cy="16" r="7" stroke="#9333ea" strokeWidth="2.5" strokeDasharray="3.5 2.5" />
              <circle cx="16" cy="16" r="3.5" fill="#7e22ce" opacity="0.3" />
            </g>

            {/* Spark on ratchet contact */}
            <circle cx="21" cy="9" r="1.5" fill="#fbbf24" className="animate-ping opacity-75" />

            {/* Ratcheting Wrench */}
            <g className="anim-wrench-ratchet" style={{ transformOrigin: "10px 22px" }}>
              <path d="M10 22L17 15M21 9C20.5 7.5 18 6.5 16.5 7.5C15 8.5 15.5 10.5 16.5 11.5L20.5 15.5C21.5 16.5 23.5 17 24.5 15.5C25.5 14 24.5 11.5 23 11L21 9Z" stroke="#a855f7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="10" cy="22" r="1.6" fill="#9333ea" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 10. Pets — Dog head bob, ear wiggles, wagging tail & tongue pant
    // -------------------------------------------------------------
    case "pets":
    case "pet":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-dog-bob">
            {/* Wagging Tail behind head */}
            <path d="M16 26C18 29 23 27 25 24" stroke="#d97706" strokeWidth="2.2" strokeLinecap="round" className="anim-tail-wag" style={{ transformOrigin: "16px 26px" }} />

            {/* Left Ear wiggling */}
            <path d="M8 8L12 14H6L8 8Z" fill="#d97706" className="anim-ear-left" style={{ transformOrigin: "8px 14px" }} />
            {/* Right Ear wiggling */}
            <path d="M24 8L26 14H20L24 8Z" fill="#d97706" className="anim-ear-right" style={{ transformOrigin: "24px 14px" }} />

            {/* Dog Face */}
            <circle cx="16" cy="17" r="8" fill="#f59e0b" />
            {/* Muzzle */}
            <ellipse cx="16" cy="19.5" rx="4" ry="3" fill="#fef3c7" />

            {/* Eyes blinking/sparkling */}
            <circle cx="13" cy="15" r="1.3" fill="#1e293b" />
            <circle cx="19" cy="15" r="1.3" fill="#1e293b" />
            <circle cx="12.5" cy="14.5" r="0.4" fill="#ffffff" />
            <circle cx="18.5" cy="14.5" r="0.4" fill="#ffffff" />

            {/* Nose */}
            <ellipse cx="16" cy="18.5" rx="1.2" ry="0.9" fill="#78350f" />

            {/* Panting Tongue */}
            <path d="M14.5 21C14.5 23.5 17.5 23.5 17.5 21" fill="#ef4444" stroke="#dc2626" strokeWidth="0.8" strokeLinecap="round" className="anim-tongue-pant" style={{ transformOrigin: "16px 21px" }} />
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 11. Books — Floating book with rapid flipping pages & magic star
    // -------------------------------------------------------------
    case "books":
    case "book":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-book-float">
            {/* Magic Star rising from book */}
            <g className="anim-sparkle-float" style={{ transformOrigin: "16px 5px" }}>
              <polygon points="16,2 17,4 19,5 17,6 16,8 15,6 13,5 15,4" fill="#fbbf24" />
            </g>

            {/* Book Spine & Outer Cover */}
            <path d="M16 9V24M16 24C13 22 7 22 5 24V9C7 7 13 7 16 9C19 7 25 7 27 9V24C25 22 19 22 16 24Z" fill="#059669" stroke="#047857" strokeWidth="1.5" />
            {/* Left Page Surface */}
            <path d="M6 10C8 8.5 13 8.5 15 10V22C13 20.5 8 20.5 6 22V10Z" fill="#d1fae5" />
            {/* Right Page Surface */}
            <path d="M26 10C24 8.5 19 8.5 17 10V22C19 20.5 24 20.5 26 22V10Z" fill="#ffffff" />

            {/* Active Flipping Page Wave */}
            <path d="M16 10C18 8 22 9 24 10V21C22 20 18 19 16 21V10Z" fill="#a7f3d0" className="anim-page-flip-left" style={{ transformOrigin: "16px 16px" }} />

            {/* Text lines on left page */}
            <line x1="8" y1="12" x2="13" y2="12" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
            <line x1="8" y1="15" x2="13" y2="15" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
            <line x1="8" y1="18" x2="12" y2="18" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 12. Pet Products — Bouncing bone treat & reactive food bowl
    // -------------------------------------------------------------
    case "pet-products":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Bouncing Dog Bone */}
            <g className="anim-bone-drop" style={{ transformOrigin: "16px 9px" }}>
              <path d="M11 9C11 8 10 7.5 9.5 8C9 8.5 9.5 9.5 10.5 9.5H21.5C22.5 9.5 23 8.5 22.5 8C22 7.5 21 8 21 9V10C21 11 22 11.5 22.5 11C23 10.5 22.5 9.5 21.5 9.5H10.5C9.5 9.5 9 10.5 9.5 11C10 11.5 11 11 11 10V9Z" fill="#fde047" stroke="#eab308" strokeWidth="1" />
            </g>

            {/* Bowl Body reacting to drop */}
            <g className="anim-sofa-squash" style={{ transformOrigin: "bottom center" }}>
              <path d="M6 16H26L23 24H9L6 16Z" fill="#ec4899" />
              <ellipse cx="16" cy="16" rx="10" ry="2" fill="#f472b6" />
              {/* Paw Print on Bowl */}
              <circle cx="16" cy="20.5" r="1.2" fill="#ffffff" opacity="0.9" />
              <circle cx="14" cy="19" r="0.6" fill="#ffffff" opacity="0.9" />
              <circle cx="16" cy="18.5" r="0.6" fill="#ffffff" opacity="0.9" />
              <circle cx="18" cy="19" r="0.6" fill="#ffffff" opacity="0.9" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 13. Agriculture — Sprouting leaf swaying in breeze with dew sparkle
    // -------------------------------------------------------------
    case "agriculture":
    case "agricultural-products":
    case "farming":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Dewdrop / Sun Sparkle at tip of leaf */}
            <g className="anim-sparkle-float" style={{ transformOrigin: "24px 13px" }}>
              <polygon points="24,10 25,12 27,13 25,14 24,16 23,14 21,13 23,12" fill="#86efac" />
            </g>

            {/* Soil Mound */}
            <path d="M8 25C11 23 21 23 24 25H8Z" fill="#78350f" />

            {/* Plant Sprout swaying in wind */}
            <g className="anim-plant-breeze" style={{ transformOrigin: "16px 24px" }}>
              <path d="M16 24V11" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" />
              {/* Right Sprout Leaf */}
              <path d="M16 16C19 13 25 14 24 19C20 20 17 18 16 16Z" fill="#22c55e" />
              {/* Left Sprout Leaf */}
              <path d="M16 13C13 10 7 11 8 16C12 17 15 15 16 13Z" fill="#15803d" />
              {/* Bud Leaf Top */}
              <circle cx="16" cy="10" r="1.5" fill="#86efac" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 14. Construction Equipment — Excavator digging & scooping arm
    // -------------------------------------------------------------
    case "construction":
    case "construction-equipment":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            {/* Machinery Track Base with idle vibration */}
            <g className="anim-machinery-idle">
              <rect x="6" y="21" width="16" height="4.5" rx="2" fill="#334155" stroke="#0f172a" strokeWidth="1" />
              <circle cx="9" cy="23.2" r="1.2" fill="#94a3b8" />
              <circle cx="14" cy="23.2" r="1.2" fill="#94a3b8" />
              <circle cx="19" cy="23.2" r="1.2" fill="#94a3b8" />
              {/* Cab */}
              <rect x="8" y="14" width="9" height="7" rx="1" fill="#eab308" />
              <rect x="12" y="15" width="4" height="4" rx="0.5" fill="#38bdf8" />
            </g>

            {/* Powerful Hydraulic Crane Arm & Bucket scooping */}
            <g className="anim-excavator-dig" style={{ transformOrigin: "16px 16px" }}>
              <path d="M16 16L22 10L26 14" stroke="#ca8a04" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 14L28 17L25 18Z" fill="#713f12" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // 15. Office Equipment — Printer feeding paper & sliding output with LED
    // -------------------------------------------------------------
    case "office-equipment":
    case "office-assets":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-laptop-bounce">
            {/* Top Paper Feed sliding in */}
            <g className="anim-paper-in">
              <rect x="10" y="5" width="12" height="7" rx="1" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
              <line x1="12" y1="7.5" x2="17" y2="7.5" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" />
              <line x1="12" y1="9.5" x2="20" y2="9.5" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
            </g>

            {/* Printer Main Housing */}
            <rect x="6" y="12" width="20" height="9" rx="2" fill="#1e40af" />
            {/* Active Flashing Green LED */}
            <circle cx="23" cy="15" r="1.2" fill="#22c55e" className="anim-led-flash" />

            {/* Output Tray & Output Paper sliding out */}
            <g className="anim-paper-out">
              <rect x="9" y="17" width="14" height="7" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="11" y1="19.5" x2="18" y2="19.5" stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" />
              <line x1="11" y1="21.5" x2="16" y2="21.5" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      );

    // -------------------------------------------------------------
    // Default / All Categories — Playful 4-tile jelly-pop sequence
    // -------------------------------------------------------------
    default:
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
            <rect x="6" y="6" width="8" height="8" rx="2" fill="#2563eb" className="anim-tile-1" style={{ transformOrigin: "10px 10px" }} />
            <rect x="18" y="6" width="8" height="8" rx="2" fill="#eab308" className="anim-tile-2" style={{ transformOrigin: "22px 10px" }} />
            <rect x="6" y="18" width="8" height="8" rx="2" fill="#10b981" className="anim-tile-3" style={{ transformOrigin: "10px 22px" }} />
            <rect x="18" y="18" width="8" height="8" rx="2" fill="#8b5cf6" className="anim-tile-4" style={{ transformOrigin: "22px 22px" }} />
          </svg>
        </div>
      );
  }
}
