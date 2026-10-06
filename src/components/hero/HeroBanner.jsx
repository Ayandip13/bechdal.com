"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Smartphone,
  Car,
  Home,
  Tag,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const bannerData = [
  {
    id: 1,
    badgeIcon: ShieldCheck,
    tag: "100% Free Marketplace",
    title: "Sell Your Old Items\nIn Minutes, 0% Fee.",
    subtitle: "Direct local deals in Kolkata & across India. No middleman brokerage.",
    ctaText: "Start Selling Free",
    ctaLink: "/sell",
    gradient: "from-blue-900 via-indigo-900 to-slate-900",
    accentColor: "from-blue-500 to-indigo-500",
    badgeBg: "bg-blue-500/20 text-blue-300 border-blue-400/30",
    buttonBg: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30",
    visual: {
      title: "Quick Post Ad",
      sub: "100% Free & Unlimited",
      stat: "Instant Reach",
      image: "/images/yamaha_mt15.png",
      pill: "Verified Direct Deal",
    },
  },
  {
    id: 2,
    badgeIcon: Smartphone,
    tag: "Mobiles & Tech Deals",
    title: "Upgrade Your Gadgets\nWithout Overspending",
    subtitle: "Save up to 50% on pre-owned laptops, iPhones, TVs & gaming consoles.",
    ctaText: "Explore Tech Deals",
    ctaLink: "/category/electronics",
    gradient: "from-slate-900 via-blue-950 to-indigo-950",
    accentColor: "from-cyan-500 to-blue-500",
    badgeBg: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
    buttonBg: "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/30",
    visual: {
      title: "MacBook & Mobiles",
      sub: "Verified Condition",
      stat: "Save up to 50%",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
      pill: "Under Warranty",
    },
  },
  {
    id: 3,
    badgeIcon: Car,
    tag: "Vehicles & Rides",
    title: "Bikes & Cars Direct\nFrom Verified Owners",
    subtitle: "No dealers or heavy commissions. Inspect in person & pay safely.",
    ctaText: "Explore Vehicles",
    ctaLink: "/category/vehicles",
    gradient: "from-amber-950 via-slate-900 to-red-950",
    accentColor: "from-amber-500 to-orange-500",
    badgeBg: "bg-amber-500/20 text-amber-300 border-amber-400/30",
    buttonBg: "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-lg shadow-amber-600/30",
    visual: {
      title: "Scooters & Bikes",
      sub: "Test Drive Locally",
      stat: "Top Condition",
      image: "/images/honda_activa.png",
      pill: "0% Brokerage",
    },
  },
  {
    id: 4,
    badgeIcon: Home,
    tag: "Homes & Living",
    title: "Furnish Your Home\nFor Half The Price",
    subtitle: "Explore sofa sets, teak tables, appliances, & rental properties nearby.",
    ctaText: "Explore Furniture",
    ctaLink: "/category/furniture",
    gradient: "from-emerald-950 via-slate-900 to-teal-950",
    accentColor: "from-emerald-500 to-teal-500",
    badgeBg: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
    buttonBg: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-lg shadow-emerald-600/30",
    visual: {
      title: "Home Decor & Rentals",
      sub: "Premium Quality",
      stat: "Great Bachat",
      image: "/images/furniture_hub.png",
      pill: "Ready to Move",
    },
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
      className="w-full relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 dark:border-slate-800 min-h-[220px] sm:min-h-[260px] md:min-h-[300px] flex items-center select-none bg-slate-900 outline-none"
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
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Ambient Background Decorative Glows */}
            <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${banner.accentColor} opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none`} />
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />

            {/* Container with Generous Padding to Avoid Arrow Overlap */}
            <div className="w-full px-12 sm:px-16 md:px-20 lg:px-24 py-6 sm:py-8 flex items-center justify-between gap-6 relative z-10">
              
              {/* Left Column: Text & CTA */}
              <div className="max-w-xl flex flex-col items-start">
                {/* Badge Pill */}
                <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md mb-3 ${banner.badgeBg}`}>
                  <BadgeIcon size={14} />
                  <span>{banner.tag}</span>
                </div>

                {/* Main Headline */}
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-2.5 text-white whitespace-pre-line drop-shadow-sm">
                  {banner.title}
                </h2>

                {/* Subtitle */}
                <p className="text-xs sm:text-sm text-slate-300 font-medium mb-5 leading-relaxed line-clamp-2 max-w-md">
                  {banner.subtitle}
                </p>

                {/* CTA Button */}
                <Link
                  href={banner.ctaLink}
                  onClick={() => setIsPaused(true)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer ${banner.buttonBg}`}
                >
                  <span>{banner.ctaText}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              {/* Right Column: Premium Visual Glass Card (Desktop & Tablet) */}
              <div className="hidden sm:flex items-center justify-center shrink-0 pr-2">
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl bg-white/10 dark:bg-slate-800/40 backdrop-blur-xl border border-white/20 dark:border-slate-700/50 p-3 shadow-2xl flex flex-col justify-between overflow-hidden group hover:border-white/40 transition-all duration-500">
                  {/* Image Background Thumbnail */}
                  <div className="w-full h-32 md:h-36 lg:h-40 rounded-xl overflow-hidden relative bg-slate-950">
                    <img
                      src={banner.visual.image}
                      alt={banner.visual.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    
                    {/* Floating Pill on Image */}
                    <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-slate-900/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-400/30 flex items-center gap-1">
                      <Sparkles size={10} />
                      <span>{banner.visual.pill}</span>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-2 px-1 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-bold text-white truncate max-w-[130px]">
                        {banner.visual.title}
                      </h4>
                      <p className="text-[11px] text-slate-300 font-medium">
                        {banner.visual.sub}
                      </p>
                    </div>
                    <div className="px-2 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[10px] font-extrabold uppercase tracking-wide">
                      {banner.visual.stat}
                    </div>
                  </div>
                </div>
              </div>

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
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        aria-label="Previous Banner"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
          setIsPaused(true);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 active:bg-white/30 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-200 z-20 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
        aria-label="Next Banner"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-slate-950/40 px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
        {bannerData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                isActive ? "w-6 bg-white shadow-sm" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
    </div>
  );
}
