"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Car,
  Home,
  Dumbbell,
  Sparkles,
} from "lucide-react";
import HeroVisualScene from "./HeroVisualScene";
import {
  AnimatedSellActionIcon,
  AnimatedExploreActionIcon,
  AnimatedCarActionIcon,
  AnimatedGadgetActionIcon,
  AnimatedFurnitureActionIcon,
  AnimatedFitnessActionIcon,
  AnimatedFashionActionIcon,
  AnimatedActionArrow,
} from "@/components/common/ActionAnimatedIcons";

const bannerData = [
  {
    id: 1,
    badgeIcon: ShieldCheck,
    tag: "Instant Local Deals",
    title: "Sell Your Old Items in Minutes",
    subtitle: "Direct local deals. Zero platform fees. Get instant cash in hand.",
    ctaText: "Start Selling Free",
    ctaLink: "/sell",
    gradient: "from-slate-950 via-blue-950 to-indigo-950",
    accentColor: "from-blue-500 to-indigo-500",
    badgeBg: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    buttonBg: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30",
  },
  {
    id: 2,
    badgeIcon: Smartphone,
    tag: "Mobiles & Tech Deals",
    title: "Smart Deals. Maximum Bachat.",
    subtitle: "Certified MacBooks, iPhones, Smart TVs & audio up to 50% off.",
    ctaText: "Explore Electronics",
    ctaLink: "/category/electronics",
    gradient: "from-slate-950 via-slate-900 to-cyan-950",
    accentColor: "from-cyan-500 to-blue-500",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    buttonBg: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/30",
  },
  {
    id: 3,
    badgeIcon: Car,
    tag: "Cars & Bikes Super-Hub",
    title: "Your Dream Ride, Zero Brokerage",
    subtitle: "Discover inspected cars and superbikes. Inspect & test drive locally.",
    ctaText: "Explore Vehicles",
    ctaLink: "/category/vehicles",
    gradient: "from-slate-950 via-neutral-950 to-amber-950",
    accentColor: "from-red-500 to-amber-500",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    buttonBg: "bg-gradient-to-r from-amber-600 to-red-600 hover:from-amber-500 hover:to-red-500 text-white shadow-lg shadow-amber-600/30",
  },
  {
    id: 4,
    badgeIcon: Home,
    tag: "Homes & Living Deals",
    title: "Upgrade Living for Half Price",
    subtitle: "Designer sofa sets, teak dining & verified rental properties nearby.",
    ctaText: "Explore Furniture",
    ctaLink: "/category/furniture",
    gradient: "from-slate-950 via-slate-900 to-emerald-950",
    accentColor: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    buttonBg: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30",
  },
  {
    id: 5,
    badgeIcon: Dumbbell,
    tag: "Fitness & Strength Hub",
    title: "Level Up Your Fitness at Home",
    subtitle: "Cast iron dumbbells, benches & cardio gear at unbeatable prices.",
    ctaText: "Explore Gym Gear",
    ctaLink: "/category/gym-equipment",
    gradient: "from-slate-950 via-zinc-900 to-orange-950",
    accentColor: "from-orange-500 to-red-500",
    badgeBg: "bg-orange-500/20 text-orange-300 border-orange-400/30",
    buttonBg: "bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-600/30",
  },
  {
    id: 6,
    badgeIcon: Sparkles,
    tag: "Streetwear & Lifestyle",
    title: "Trending Styles. Unbeatable Bachat.",
    subtitle: "Trending sneakers, luxury watches & designer apparel nearby.",
    ctaText: "Explore Fashion",
    ctaLink: "/category/fashion",
    gradient: "from-slate-950 via-purple-950 to-slate-900",
    accentColor: "from-fuchsia-500 to-pink-500",
    badgeBg: "bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/30",
    buttonBg: "bg-gradient-to-r from-fuchsia-600 to-pink-600 hover:from-fuchsia-500 hover:to-pink-500 text-white shadow-lg shadow-fuchsia-600/30",
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
    }, 4800);

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
      className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-800 min-h-[240px] xs:min-h-[260px] sm:min-h-[290px] md:min-h-[320px] lg:min-h-[350px] flex items-center select-none bg-slate-950 outline-none group"
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

            {/* Container with Generous Padding to Avoid Arrow Overlap */}
            <div className="w-full px-10 xs:px-12 sm:px-16 md:px-20 lg:px-24 py-5 sm:py-7 md:py-8 flex items-center justify-between gap-4 sm:gap-8 relative z-10">
              {isActive && (
                <div
                  key={`slide-inner-${banner.id}-${currentIndex}`}
                  className="w-full flex items-center justify-between gap-4 sm:gap-8"
                >
                  {/* Left Column: Text & CTA with Staggered Entrance Animations */}
                  <div className="flex-1 min-w-0 max-w-xl flex flex-col items-start pr-1 sm:pr-4">
                    {/* Badge Pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border backdrop-blur-md mb-2 sm:mb-3 animate-hero-fade-up ${banner.badgeBg}`}
                      style={{ animationDelay: "100ms", animationFillMode: "both" }}
                    >
                      <BadgeIcon size={13} />
                      <span className="truncate">{banner.tag}</span>
                    </div>

                    {/* Main Headline */}
                    <h2
                      className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-2 sm:mb-3 text-white drop-shadow-sm animate-hero-fade-up"
                      style={{ animationDelay: "200ms", animationFillMode: "both" }}
                    >
                      {banner.title}
                    </h2>

                    {/* Subtitle */}
                    <p
                      className="text-[11px] xs:text-xs sm:text-sm text-slate-200 dark:text-slate-300 font-medium mb-4 sm:mb-6 leading-relaxed line-clamp-2 max-w-md animate-hero-fade-up"
                      style={{ animationDelay: "300ms", animationFillMode: "both" }}
                    >
                      {banner.subtitle}
                    </p>

                    {/* CTA Button with Micro-Animated Action SVGs & Shimmer */}
                    <Link
                      href={banner.ctaLink}
                      onClick={() => setIsPaused(true)}
                      className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer animate-hero-fade-up group btn-shimmer ${banner.buttonBg}`}
                      style={{ animationDelay: "400ms", animationFillMode: "both" }}
                    >
                      {banner.id === 1 && <AnimatedSellActionIcon size={18} />}
                      {banner.id === 2 && <AnimatedGadgetActionIcon size={18} />}
                      {banner.id === 3 && <AnimatedCarActionIcon size={18} />}
                      {banner.id === 4 && <AnimatedFurnitureActionIcon size={18} />}
                      {banner.id === 5 && <AnimatedFitnessActionIcon size={18} />}
                      {banner.id === 6 && <AnimatedFashionActionIcon size={18} />}
                      <span>{banner.ctaText}</span>
                      <AnimatedActionArrow size={15} />
                    </Link>
                  </div>

                  {/* Right Column: Real Commercial Photographic Showcase with Floating Stickers */}
                  <div
                    className="shrink-0 flex items-center justify-center max-w-[48%] sm:max-w-[50%] animate-hero-slide-right"
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

      {/* Navigation Arrows (Sleek Glassmorphic Buttons) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
          setIsPaused(true);
        }}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
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
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        aria-label="Next Banner"
      >
        <ChevronRight size={18} className="sm:w-5 sm:h-5" />
      </button>

      {/* Pagination Indicators (6 Dots with Active Expansion) */}
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
