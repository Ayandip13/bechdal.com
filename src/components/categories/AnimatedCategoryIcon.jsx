"use client";

import React from "react";

/**
 * AnimatedCategoryIcon
 * Modern, colorful vector micro-illustrations inspired by quick-commerce apps.
 * Lightweight, pure SVG with hardware-accelerated CSS animations.
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
    // 1. Electronics — Laptop screen glow / subtle device animation
    case "electronics":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-glow group-hover:scale-110 transition-transform">
            {/* Screen Glow Halo */}
            <circle cx="16" cy="14" r="10" fill="#3b82f6" opacity="0.25" className="animate-pulse" />
            {/* Laptop Base */}
            <path d="M4 23H28C28.5523 23 29 22.5523 29 22V21H3V22C3 22.5523 3.44772 23 4 23Z" fill="#64748b" />
            <path d="M12 23H20V22H12V23Z" fill="#94a3b8" />
            {/* Laptop Screen Body */}
            <rect x="6" y="8" width="20" height="13" rx="2" fill="#1e293b" stroke="#3b82f6" strokeWidth="1.5" />
            {/* Screen Display Gradient */}
            <rect x="8" y="10" width="16" height="9" rx="1" fill="url(#screenGrad)" />
            {/* Code / Content Lines on screen */}
            <path d="M10 13H15M10 15H19" stroke="#93c5fd" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="21" cy="13" r="1" fill="#38bdf8" />
            <defs>
              <linearGradient id="screenGrad" x1="8" y1="10" x2="24" y2="19" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e3a8a" />
                <stop offset="1" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // 2. Mobiles — Phone tilt & screen glow bounce
    case "mobiles":
    case "mobile":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-tilt group-hover:scale-110 transition-transform">
            {/* Phone Body */}
            <rect x="9" y="5" width="14" height="23" rx="3.5" fill="#0f172a" stroke="#2563eb" strokeWidth="1.5" />
            {/* Screen Wallpaper */}
            <rect x="10.5" y="7" width="11" height="19" rx="2.5" fill="url(#mobileGrad)" />
            {/* Notch / Dynamic Island */}
            <rect x="13.5" y="6" width="5" height="1.5" rx="0.75" fill="#020617" />
            {/* Camera dot */}
            <circle cx="16" cy="6.75" r="0.5" fill="#38bdf8" />
            {/* Screen sparkle/notification bubble */}
            <circle cx="18" cy="10" r="1.5" fill="#fde047" className="animate-ping opacity-75" />
            <circle cx="18" cy="10" r="1.5" fill="#f59e0b" />
            {/* Home indicator bar */}
            <rect x="14" y="24.5" width="4" height="0.8" rx="0.4" fill="#ffffff" opacity="0.8" />
            <defs>
              <linearGradient id="mobileGrad" x1="10.5" y1="7" x2="21.5" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3b82f6" />
                <stop offset="0.5" stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // 3. Vehicles — Car with forward movement & spinning wheels
    case "vehicles":
    case "cars":
    case "bikes":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-drive group-hover:scale-110 transition-transform">
            {/* Speed trail */}
            <path d="M2 20H6M3 16H8" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" opacity="0.6" />
            {/* Car Roof & Cabin */}
            <path d="M8 17L11.5 11H20.5L24 17" fill="url(#carRoofGrad)" />
            {/* Car Windows */}
            <path d="M12 12H19.5L22.5 17H9.5L12 12Z" fill="#38bdf8" opacity="0.85" />
            {/* Car Lower Body */}
            <path d="M5 17C5 16.4477 5.44772 16 6 16H26C26.5523 16 27 16.4477 27 17L28 20.5C28 21.0523 27.5523 21.5 27 21.5H5C4.44772 21.5 4 21.0523 4 20.5L5 17Z" fill="#dc2626" />
            {/* Headlight beam */}
            <polygon points="27,18 31,16 31,21 27,20" fill="#fef08a" opacity="0.6" />
            {/* Left Wheel */}
            <circle cx="10" cy="22" r="3" fill="#1e293b" />
            <circle cx="10" cy="22" r="1.5" fill="#94a3b8" />
            {/* Right Wheel */}
            <circle cx="22" cy="22" r="3" fill="#1e293b" />
            <circle cx="22" cy="22" r="1.5" fill="#94a3b8" />
            <defs>
              <linearGradient id="carRoofGrad" x1="11.5" y1="11" x2="20.5" y2="17" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ef4444" />
                <stop offset="1" stopColor="#b91c1c" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // 4. Properties — House with pop-up / window light glow
    case "properties":
    case "property":
    case "real-estate":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-pop group-hover:scale-110 transition-transform">
            {/* Chimney */}
            <rect x="20" y="8" width="2.5" height="5" fill="#c2410c" />
            {/* Smoke puff */}
            <circle cx="21" cy="6" r="1" fill="#cbd5e1" opacity="0.7" />
            {/* Roof */}
            <path d="M16 6L5 16H9V26H23V16H27L16 6Z" fill="#ea580c" />
            {/* House Wall Front */}
            <rect x="9" y="15" width="14" height="11" rx="0.5" fill="#ffedd5" />
            {/* Door */}
            <rect x="14" y="19" width="4" height="7" rx="0.5" fill="#9a3412" />
            <circle cx="17" cy="22.5" r="0.4" fill="#fbbf24" />
            {/* Glowing Attic Window */}
            <circle cx="16" cy="11.5" r="1.75" fill="#fef08a" stroke="#ea580c" strokeWidth="0.8" />
          </svg>
        </div>
      );

    // 5. Furniture — Sofa with cushion bounce / settle
    case "furniture":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-sofa group-hover:scale-110 transition-transform">
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

    // 6. Fashion — T-shirt on hanger with gentle sway
    case "fashion":
    case "clothing":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-sway group-hover:scale-110 transition-transform">
            {/* Hanger Hook */}
            <path d="M16 6C17 6 18 7 17.5 8.5C17 10 16 10.5 16 11.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
            {/* Hanger Triangle */}
            <path d="M9 13.5L16 11.5L23 13.5" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* T-Shirt Body */}
            <path d="M12 12C13 13.5 19 13.5 20 12L25 15L23 18L21 17V26H11V17L9 18L7 15L12 12Z" fill="url(#fashionGrad)" />
            {/* Collar Accent */}
            <path d="M12.5 12C13.5 13.5 18.5 13.5 19.5 12" stroke="#ffffff" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
            <defs>
              <linearGradient id="fashionGrad" x1="7" y1="12" x2="25" y2="26" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8b5cf6" />
                <stop offset="1" stopColor="#6366f1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );

    // 7. Boats — Sailboat / boat with bobbing wave motion
    case "boats":
    case "boat":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-bob group-hover:scale-110 transition-transform">
            {/* Water Waves */}
            <path d="M3 24C6 23 8 25 11 24C14 23 16 25 19 24C22 23 24 25 27 24C28 23.5 29 24 30 24" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
            {/* Mast */}
            <line x1="16" y1="7" x2="16" y2="20" stroke="#64748b" strokeWidth="1.5" />
            {/* Main Sail (Cyan to Blue) */}
            <path d="M16 8L24 18H16V8Z" fill="#06b6d4" />
            {/* Front Sail (Teal) */}
            <path d="M15 10L9 18H15V10Z" fill="#0891b2" />
            {/* Boat Hull */}
            <path d="M6 20L8 23.5H24L26 20H6Z" fill="#0f766e" />
          </svg>
        </div>
      );

    // 8. Gym Equipment — Hex dumbbell with lifting motion
    case "gym-equipment":
    case "gym-equipments":
    case "fitness":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-lift group-hover:scale-110 transition-transform">
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
            {/* Sparkle */}
            <circle cx="26" cy="10" r="1.2" fill="#fde047" className="animate-ping opacity-60" />
          </svg>
        </div>
      );

    // 9. Services — Wrench & gear with gentle tap
    case "services":
    case "service":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-tools group-hover:scale-110 transition-transform">
            {/* Background Gear */}
            <circle cx="16" cy="16" r="6" stroke="#9333ea" strokeWidth="2" strokeDasharray="3 2" opacity="0.6" />
            {/* Wrench */}
            <path d="M10 22L17 15M21 9C20.5 7.5 18 6.5 16.5 7.5C15 8.5 15.5 10.5 16.5 11.5L20.5 15.5C21.5 16.5 23.5 17 24.5 15.5C25.5 14 24.5 11.5 23 11L21 9Z" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="22" r="1.5" fill="#9333ea" />
          </svg>
        </div>
      );

    // 10. Pets — Cute playful dog/cat with ear perk
    case "pets":
    case "pet":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-pet group-hover:scale-110 transition-transform">
            {/* Left Ear */}
            <path d="M8 8L12 14H6L8 8Z" fill="#d97706" />
            {/* Right Ear */}
            <path d="M24 8L26 14H20L24 8Z" fill="#d97706" />
            {/* Face */}
            <circle cx="16" cy="17" r="8" fill="#f59e0b" />
            {/* Muzzle */}
            <ellipse cx="16" cy="19.5" rx="4" ry="3" fill="#fef3c7" />
            {/* Eyes */}
            <circle cx="13" cy="15" r="1.3" fill="#1e293b" />
            <circle cx="19" cy="15" r="1.3" fill="#1e293b" />
            <circle cx="12.5" cy="14.5" r="0.4" fill="#ffffff" />
            <circle cx="18.5" cy="14.5" r="0.4" fill="#ffffff" />
            {/* Nose */}
            <ellipse cx="16" cy="18.5" rx="1.2" ry="0.9" fill="#78350f" />
            {/* Tongue */}
            <path d="M15 21C15 22.5 17 22.5 17 21" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </div>
      );

    // 11. Books — Open book with flipping page effect
    case "books":
    case "book":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-flip group-hover:scale-110 transition-transform">
            {/* Book Spine */}
            <path d="M16 9V24M16 24C13 22 7 22 5 24V9C7 7 13 7 16 9C19 7 25 7 27 9V24C25 22 19 22 16 24Z" fill="#059669" stroke="#047857" strokeWidth="1.5" />
            {/* Left Page Surface */}
            <path d="M6 10C8 8.5 13 8.5 15 10V22C13 20.5 8 20.5 6 22V10Z" fill="#d1fae5" />
            {/* Right Page Surface */}
            <path d="M26 10C24 8.5 19 8.5 17 10V22C19 20.5 24 20.5 26 22V10Z" fill="#ffffff" />
            {/* Animated Page Flip Wave */}
            <path d="M16 10C18 8 22 9 24 10V21C22 20 18 19 16 21V10Z" fill="#a7f3d0" opacity="0.75" />
            {/* Text lines on left page */}
            <line x1="8" y1="12" x2="13" y2="12" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
            <line x1="8" y1="15" x2="13" y2="15" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
            <line x1="8" y1="18" x2="12" y2="18" stroke="#10b981" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    // 12. Pet Products — Bowl with bone treat
    case "pet-products":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-pet group-hover:scale-110 transition-transform">
            {/* Dog Bone */}
            <path d="M11 9C11 8 10 7.5 9.5 8C9 8.5 9.5 9.5 10.5 9.5H21.5C22.5 9.5 23 8.5 22.5 8C22 7.5 21 8 21 9V10C21 11 22 11.5 22.5 11C23 10.5 22.5 9.5 21.5 9.5H10.5C9.5 9.5 9 10.5 9.5 11C10 11.5 11 11 11 10V9Z" fill="#fde047" stroke="#eab308" strokeWidth="0.8" />
            {/* Bowl Body */}
            <path d="M6 16H26L23 24H9L6 16Z" fill="#ec4899" />
            {/* Bowl Rim */}
            <ellipse cx="16" cy="16" rx="10" ry="2" fill="#f472b6" />
            {/* Paw Print on Bowl */}
            <circle cx="16" cy="20.5" r="1.2" fill="#ffffff" opacity="0.9" />
            <circle cx="14" cy="19" r="0.6" fill="#ffffff" opacity="0.9" />
            <circle cx="16" cy="18.5" r="0.6" fill="#ffffff" opacity="0.9" />
            <circle cx="18" cy="19" r="0.6" fill="#ffffff" opacity="0.9" />
          </svg>
        </div>
      );

    // 13. Agriculture — Sprouting green leaf growing
    case "agriculture":
    case "agricultural-products":
    case "farming":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-leaf group-hover:scale-110 transition-transform">
            {/* Soil Mound */}
            <path d="M8 25C11 23 21 23 24 25H8Z" fill="#78350f" />
            {/* Main Plant Stem */}
            <path d="M16 24V11" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" />
            {/* Right Sprout Leaf */}
            <path d="M16 16C19 13 25 14 24 19C20 20 17 18 16 16Z" fill="#22c55e" />
            {/* Left Sprout Leaf */}
            <path d="M16 13C13 10 7 11 8 16C12 17 15 15 16 13Z" fill="#15803d" />
            {/* Tiny Bud Leaf Top */}
            <circle cx="16" cy="10" r="1.5" fill="#86efac" />
          </svg>
        </div>
      );

    // 14. Construction Equipment — Excavator machinery arm tilting
    case "construction":
    case "construction-equipment":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-excavator group-hover:scale-110 transition-transform">
            {/* Track Wheels */}
            <rect x="6" y="21" width="16" height="4.5" rx="2" fill="#334155" stroke="#0f172a" strokeWidth="1" />
            <circle cx="9" cy="23.2" r="1.2" fill="#94a3b8" />
            <circle cx="14" cy="23.2" r="1.2" fill="#94a3b8" />
            <circle cx="19" cy="23.2" r="1.2" fill="#94a3b8" />
            {/* Cab */}
            <rect x="8" y="14" width="9" height="7" rx="1" fill="#eab308" />
            {/* Cab Window */}
            <rect x="12" y="15" width="4" height="4" rx="0.5" fill="#38bdf8" />
            {/* Crane / Digger Arm */}
            <path d="M16 16L22 10L26 14" stroke="#ca8a04" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Digger Bucket */}
            <path d="M26 14L28 17L25 18Z" fill="#713f12" />
          </svg>
        </div>
      );

    // 15. Office Equipment — Printer sliding document
    case "office-equipment":
    case "office-assets":
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full anim-icon-printer group-hover:scale-110 transition-transform">
            {/* Top Paper Feed */}
            <rect x="10" y="6" width="12" height="7" rx="1" fill="#f8fafc" stroke="#94a3b8" strokeWidth="1" />
            {/* Printed Lines on Paper */}
            <line x1="12" y1="8.5" x2="17" y2="8.5" stroke="#3b82f6" strokeWidth="1" strokeLinecap="round" />
            <line x1="12" y1="10.5" x2="20" y2="10.5" stroke="#64748b" strokeWidth="1" strokeLinecap="round" />
            {/* Printer Main Housing */}
            <rect x="6" y="12" width="20" height="9" rx="2" fill="#1e40af" />
            {/* Front Panel Light */}
            <circle cx="23" cy="15" r="1" fill="#22c55e" className="animate-pulse" />
            {/* Output Tray & Output Paper */}
            <rect x="9" y="18" width="14" height="6" rx="1" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
            <line x1="11" y1="20.5" x2="18" y2="20.5" stroke="#0284c7" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      );

    // Default / All Categories — Playful 4-grid animated tiles
    default:
      return (
        <div className={`relative shrink-0 flex items-center justify-center ${dimensionClass} ${className}`}>
          <svg viewBox="0 0 32 32" fill="none" className="w-full h-full group-hover:rotate-12 transition-transform duration-300">
            <rect x="6" y="6" width="8" height="8" rx="2" fill="#2563eb" />
            <rect x="18" y="6" width="8" height="8" rx="2" fill="#eab308" />
            <rect x="6" y="18" width="8" height="8" rx="2" fill="#10b981" />
            <rect x="18" y="18" width="8" height="8" rx="2" fill="#8b5cf6" />
          </svg>
        </div>
      );
  }
}
