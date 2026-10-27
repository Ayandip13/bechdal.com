"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Car,
  Home,
  Smartphone,
  Dumbbell,
} from "lucide-react";
import HeroVisualScene from "./HeroVisualScene";
import {
  AnimatedCarActionIcon,
  AnimatedFurnitureActionIcon,
  AnimatedGadgetActionIcon,
  AnimatedFitnessActionIcon,
  AnimatedActionArrow,
} from "@/components/common/ActionAnimatedIcons";

/**
 * 4 Curated Category-Specific Animated Hero Slides
 * Slide 1 — Cars and Bikes: "Your Dream Ride, Zero Brokerage" -> /category/vehicles
 * Slide 2 — Furniture and Properties: "Upgrade Living for Less" -> /category/furniture
 * Slide 3 — Electronics and Mobiles: "Smart Deals. Maximum Bachat." -> /category/electronics
 * Slide 4 — Gym, Agriculture and Equipment: "Find the Equipment You Need" -> /search
 */
const bannerData = [
  {
    id: 1,
    badgeIcon: Car,
    tag: "Cars & Bikes Hub",
    title: "Your Dream Ride, Zero Brokerage",
    subtitle: "Discover verified cars, superbikes & scooters. Inspect & test drive locally.",
    ctaText: "Explore Vehicles",
    ctaLink: "/category/vehicles",
    gradient: "from-slate-950 via-neutral-950 to-amber-950",
    accentColor: "from-red-500 to-amber-500",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    buttonBg: "bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white shadow-lg shadow-amber-600/30",
  },
  {
    id: 2,
    badgeIcon: Home,
    tag: "Homes & Living Deals",
    title: "Upgrade Living for Less",
    subtitle: "Designer sofas, teak dining sets & verified 0% brokerage rental flats nearby.",
    ctaText: "Explore Furniture",
    ctaLink: "/category/furniture",
    gradient: "from-slate-950 via-slate-900 to-emerald-950",
    accentColor: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    buttonBg: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30",
  },
  {
    id: 3,
    badgeIcon: Smartphone,
    tag: "Mobiles & Tech Deals",
    title: "Smart Deals. Maximum Bachat.",
    subtitle: "Certified MacBooks, 5G iPhones, Smart TVs & audio up to 50% off.",
    ctaText: "Explore Electronics",
    ctaLink: "/category/electronics",
    gradient: "from-slate-950 via-slate-900 to-cyan-950",
    accentColor: "from-cyan-500 to-blue-500",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    buttonBg: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/30",
  },
  {
    id: 4,
    badgeIcon: Dumbbell,
    tag: "Equipment & Machinery",
    title: "Find the Equipment You Need",
    subtitle: "Heavy gym gear, tractors, farm tools & industrial machinery at direct seller prices.",
    ctaText: "Explore Categories",
    ctaLink: "/search",
    gradient: "from-slate-950 via-zinc-900 to-orange-950",
    accentColor: "from-orange-500 to-red-500",
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-400/30",
    buttonBg: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-600/30",
  },
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef(null);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === bannerData.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? bannerData.length - 1 : prev - 1));
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
      setIsPaused(true);
    } else if (e.key === "ArrowRight") {
      handleNext();
      setIsPaused(true);
    }
  };

  useEffect(() => {
    if (isPaused) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      return;
    }

    autoplayTimer.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isPaused]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
      setIsPaused(true);
    } else if (distance < -minSwipeDistance) {
      handlePrev();
      setIsPaused(true);
    }
  };

  return (
    <div
      className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border border-slate-200/80 dark:border-slate-800 min-h-[190px] xs:min-h-[220px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[360px] flex items-center select-none bg-slate-950 outline-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Promotional Hero Banner Carousel"
    >
      {/* Slides */}
      {bannerData.map((banner, index) => {
        const isActive = index === currentIndex;
        const BadgeIcon = banner.badgeIcon;
        return (
          <div
            key={banner.id}
            className={`absolute inset-0 w-full h-full bg-gradient-to-r ${banner.gradient} text-white transition-opacity duration-700 ease-in-out flex items-center ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Ambient Background Decorative Glows */}
            <div
              className={`absolute top-0 right-1/4 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br ${banner.accentColor} opacity-20 rounded-full blur-3xl pointer-events-none`}
            />
            <div className="absolute bottom-0 left-10 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Container with Responsive Padding for Mobile & Desktop */}
            <div className="w-full px-3.5 xs:px-5 sm:px-12 md:px-16 lg:px-20 py-3 xs:py-4 sm:py-6 md:py-8 flex items-center justify-between gap-2.5 xs:gap-4 sm:gap-6 md:gap-8 relative z-10">
              {isActive && (
                <div
                  key={`slide-inner-${banner.id}-${currentIndex}`}
                  className="w-full flex items-center justify-between gap-2.5 xs:gap-4 sm:gap-6 md:gap-8"
                >
                  {/* Left Column: Text & CTA with Staggered Entrance Animations */}
                  <div className="flex-1 min-w-0 max-w-xl flex flex-col items-start pr-1 sm:pr-3">
                    {/* Badge Pill */}
                    <div
                      className={`inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider border backdrop-blur-md mb-1 sm:mb-2 animate-hero-fade-up ${banner.badgeBg}`}
                      style={{ animationDelay: "100ms", animationFillMode: "both" }}
                    >
                      <BadgeIcon size={11} className="sm:w-3.5 sm:h-3.5" />
                      <span className="truncate">{banner.tag}</span>
                    </div>

                    {/* Main Headline */}
                    <h2
                      className="text-sm xs:text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-1 sm:mb-2 text-white drop-shadow-sm animate-hero-fade-up"
                      style={{ animationDelay: "200ms", animationFillMode: "both" }}
                    >
                      {banner.title}
                    </h2>

                    {/* Subtitle */}
                    <p
                      className="text-[10px] xs:text-xs sm:text-sm text-slate-200 dark:text-slate-300 font-medium mb-2.5 sm:mb-4 leading-normal sm:leading-relaxed line-clamp-2 max-w-md animate-hero-fade-up"
                      style={{ animationDelay: "300ms", animationFillMode: "both" }}
                    >
                      {banner.subtitle}
                    </p>

                    {/* CTA Button with Micro-Animated Action SVGs & Shimmer */}
                    <Link
                      href={banner.ctaLink}
                      onClick={() => setIsPaused(true)}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 xs:px-4 xs:py-2 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-[11px] xs:text-xs sm:text-sm font-black transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer animate-hero-fade-up group btn-shimmer shadow-md ${banner.buttonBg}`}
                      style={{ animationDelay: "400ms", animationFillMode: "both" }}
                    >
                      {banner.id === 1 && <AnimatedCarActionIcon size={15} className="sm:w-[18px] sm:h-[18px]" />}
                      {banner.id === 2 && <AnimatedFurnitureActionIcon size={15} className="sm:w-[18px] sm:h-[18px]" />}
                      {banner.id === 3 && <AnimatedGadgetActionIcon size={15} className="sm:w-[18px] sm:h-[18px]" />}
                      {banner.id === 4 && <AnimatedFitnessActionIcon size={15} className="sm:w-[18px] sm:h-[18px]" />}
                      <span>{banner.ctaText}</span>
                      <AnimatedActionArrow size={12} className="sm:w-4 sm:h-4" />
                    </Link>
                  </div>

                  {/* Right Column: Genuine Animated SVG Scene with Multi-layer Motion */}
                  <div
                    className="shrink-0 flex items-center justify-center w-[44%] xs:w-[46%] sm:w-[48%] md:w-[50%] max-w-[180px] xs:max-w-[240px] sm:max-w-[360px] md:max-w-[440px] lg:max-w-[480px] animate-hero-slide-right"
                    style={{ animationDelay: "250ms", animationFillMode: "both" }}
                  >
                    <HeroVisualScene slideId={banner.id} />
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows (Desktop & Tablet only to avoid mobile overlapping) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
          setIsPaused(true);
        }}
        className="hidden sm:flex absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        aria-label="Previous Banner"
      >
        <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
          setIsPaused(true);
        }}
        className="hidden sm:flex absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/20 text-white items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        aria-label="Next Banner"
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* Pagination Indicators (4 Dots with Active Expansion) */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 bg-slate-950/50 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
        {bannerData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive ? "w-6 sm:w-8 bg-white shadow-sm" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
