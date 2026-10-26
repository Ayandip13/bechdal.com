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
  Sparkles,
} from "lucide-react";
import HeroIllustrationScene from "./HeroIllustrationScene";

const bannerData = [
  {
    id: 1,
    badgeIcon: ShieldCheck,
    tag: "Direct Local Deals",
    title: "Sell Your Old Items in Minutes",
    subtitle: "Direct local deals. Zero platform fees.",
    ctaText: "Start Selling Free",
    ctaLink: "/sell",
    gradient: "from-blue-900 via-indigo-900 to-slate-900",
    accentColor: "from-blue-500 to-indigo-500",
    badgeBg: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    buttonBg: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30",
  },
  {
    id: 2,
    badgeIcon: Smartphone,
    tag: "Mobiles & Tech Deals",
    title: "Smart Deals. Maximum Bachat.",
    subtitle: "Discover mobiles, laptops and electronics.",
    ctaText: "Explore Electronics",
    ctaLink: "/category/electronics",
    gradient: "from-slate-900 via-blue-950 to-indigo-950",
    accentColor: "from-cyan-500 to-blue-500",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    buttonBg: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/30",
  },
  {
    id: 3,
    badgeIcon: Car,
    tag: "Vehicles & Properties",
    title: "Your Next Find Is Here",
    subtitle: "Discover cars, bikes and properties near you.",
    ctaText: "Explore Listings",
    ctaLink: "/category/vehicles",
    gradient: "from-amber-950 via-slate-900 to-red-950",
    accentColor: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    buttonBg: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-lg shadow-amber-600/30",
  },
  {
    id: 4,
    badgeIcon: Sparkles,
    tag: "All-in-One Marketplace",
    title: "More Choices. Less Spending.",
    subtitle: "Explore furniture, pets, agriculture and equipment.",
    ctaText: "Explore Categories",
    ctaLink: "/search",
    gradient: "from-emerald-950 via-slate-900 to-teal-950",
    accentColor: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    buttonBg: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30",
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
    }, 5500);

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
      className="w-full relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 min-h-[210px] xs:min-h-[230px] sm:min-h-[270px] md:min-h-[300px] flex items-center select-none bg-slate-900 outline-none"
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
              className={`absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-to-br ${banner.accentColor} opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none`}
            />
            <div className="absolute bottom-0 left-1/3 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Container with Generous Padding to Avoid Arrow Overlap */}
            <div className="w-full px-11 xs:px-13 sm:px-16 md:px-20 lg:px-24 py-5 sm:py-7 md:py-8 flex items-center justify-between gap-3 sm:gap-6 relative z-10">
              {isActive && (
                <div
                  key={`slide-inner-${banner.id}-${currentIndex}`}
                  className="w-full flex items-center justify-between gap-3 sm:gap-6"
                >
                  {/* Left Column: Text & CTA with Staggered Entrance Animations */}
                  <div className="flex-1 min-w-0 max-w-xl flex flex-col items-start pr-1 sm:pr-4">
                    {/* Badge Pill */}
                    <div
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider border backdrop-blur-md mb-2 sm:mb-3 animate-hero-fade-up ${banner.badgeBg}`}
                      style={{ animationDelay: "100ms", animationFillMode: "both" }}
                    >
                      <BadgeIcon size={13} />
                      <span className="truncate">{banner.tag}</span>
                    </div>

                    {/* Main Headline */}
                    <h2
                      className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug sm:leading-tight mb-1.5 sm:mb-2.5 text-white drop-shadow-sm animate-hero-fade-up"
                      style={{ animationDelay: "200ms", animationFillMode: "both" }}
                    >
                      {banner.title}
                    </h2>

                    {/* Subtitle */}
                    <p
                      className="text-[11px] xs:text-xs sm:text-sm text-slate-200 dark:text-slate-300 font-medium mb-3.5 sm:mb-5 leading-relaxed line-clamp-2 max-w-md animate-hero-fade-up"
                      style={{ animationDelay: "300ms", animationFillMode: "both" }}
                    >
                      {banner.subtitle}
                    </p>

                    {/* CTA Button */}
                    <Link
                      href={banner.ctaLink}
                      onClick={() => setIsPaused(true)}
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer animate-hero-fade-up ${banner.buttonBg}`}
                      style={{ animationDelay: "400ms", animationFillMode: "both" }}
                    >
                      <span>{banner.ctaText}</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>

                  {/* Right Column: Layered Animated Illustration Scene */}
                  <div
                    className="shrink-0 flex items-center justify-center max-w-[45%] sm:max-w-none animate-hero-slide-right"
                    style={{ animationDelay: "250ms", animationFillMode: "both" }}
                  >
                    <HeroIllustrationScene slideId={banner.id} />
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

      {/* Pagination Indicators */}
      <div className="absolute bottom-2.5 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 sm:gap-2 z-20 bg-slate-950/40 px-2.5 sm:px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
        {bannerData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive ? "w-5 sm:w-7 bg-white shadow-sm" : "w-1.5 sm:w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
