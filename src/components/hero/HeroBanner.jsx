"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const bannerData = [
  {
    tag: "BechDal Promise",
    title: "Sell Your Old Stuff\nin Minutes",
    subtitle: "Buy. Sell. Rent. Direct Local Deals.",
    desc: "Maximum Bachat. No Hidden Charges. No Platform Fees.",
    bgGradient: "from-orange-50 via-orange-100/30 to-blue-50/50",
    ctaText: "Start Selling",
    ctaLink: "/sell",
    themeColor: "text-orange-700 bg-orange-50 border-orange-100",
    buttonTheme: "bg-primary hover:bg-primary-dark",
    emoji: "🤝",
    visual: "📱"
  },
  {
    tag: "Technology & Electronics",
    title: "Upgrade Without\nOverspending",
    subtitle: "Find great deals on pre-owned tech.",
    desc: "Mobiles, Laptops, Electronics, and Office Equipment.",
    bgGradient: "from-blue-50 via-indigo-50/30 to-slate-50",
    ctaText: "Explore Electronics",
    ctaLink: "/category/electronics",
    themeColor: "text-blue-700 bg-blue-50 border-blue-100",
    buttonTheme: "bg-blue-600 hover:bg-blue-700",
    emoji: "💻",
    visual: "⚙️"
  },
  {
    tag: "Lifestyle & Home",
    title: "Everything You Need.\nFor Less.",
    subtitle: "Save big on household items and clothing.",
    desc: "Furniture, Fashion, Books, and Pet Products.",
    bgGradient: "from-emerald-50 via-teal-50/30 to-slate-50",
    ctaText: "Explore Categories",
    ctaLink: "/category/furniture",
    themeColor: "text-emerald-700 bg-emerald-50 border-emerald-100",
    buttonTheme: "bg-emerald-600 hover:bg-emerald-700",
    emoji: "🛋️",
    visual: "👕"
  },
  {
    tag: "Bikes, Cars & Property",
    title: "From Bikes to\nBig Equipment",
    subtitle: "No brokerages or middleman fee commissions.",
    desc: "Vehicles, Agriculture, Construction Equipment, and Properties.",
    bgGradient: "from-purple-50 via-pink-50/30 to-amber-50/50",
    ctaText: "Explore More",
    ctaLink: "/category/vehicles",
    themeColor: "text-purple-700 bg-purple-50 border-purple-100",
    buttonTheme: "bg-purple-600 hover:bg-purple-700",
    emoji: "🚜",
    visual: "🚗"
  }
];

export default function HeroBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoplayTimer = useRef(null);

  // Swipe gesture tracking
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
    setIsPaused(true); // Permanent pause on interaction until refresh
  };

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      handlePrev();
      setIsPaused(true);
    } else if (e.key === "ArrowRight") {
      handleNext();
      setIsPaused(true);
    }
  };

  // Start Autoplay Loop
  useEffect(() => {
    if (isPaused) {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
      return;
    }

    autoplayTimer.current = setInterval(() => {
      handleNext();
    }, 4500);

    return () => {
      if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    };
  }, [isPaused]);

  // Touch handlers for mobile swiping
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
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
      setIsPaused(true);
    } else if (isRightSwipe) {
      handlePrev();
      setIsPaused(true);
    }
  };

  return (
    <div
      className="w-full relative rounded-2xl overflow-hidden shadow-2xs border border-border/50 min-h-[140px] sm:min-h-[180px] md:min-h-[240px] lg:min-h-[280px] flex items-center outline-none select-none"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Promotional Banners Carousel"
    >

      {/* Slides container */}
      {bannerData.map((banner, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={banner.id || index}
            className={`absolute inset-0 w-full h-full p-3.5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-r ${banner.bgGradient} dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
          >
            {/* Background ambient glow */}
            <div className="absolute right-0 bottom-0 w-48 h-48 sm:w-72 sm:h-72 bg-secondary/15 dark:bg-blue-500/10 rounded-full blur-2xl translate-x-1/4 translate-y-1/4"></div>

            {/* Split Grid */}
            <div className="relative z-10 flex items-center justify-between gap-3 w-full text-left">

              {/* Info Column */}
              <div className="max-w-[70%] sm:max-w-md md:max-w-lg">
                {/* Badge tag */}
                <span className={`inline-block text-[8px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-md mb-1 sm:mb-2 ${banner.themeColor} dark:bg-slate-700/80 dark:text-amber-300 dark:border-slate-600`}>
                  {banner.tag}
                </span>

                {/* Title */}
                <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl font-black text-text dark:text-white leading-tight mb-1 sm:mb-2 whitespace-pre-line">
                  {banner.title}
                </h2>

                {/* Subtitle */}
                <p className="text-text-muted dark:text-slate-300 text-[10px] sm:text-xs md:text-sm font-bold mb-2 sm:mb-4 leading-tight truncate sm:whitespace-normal">
                  {banner.subtitle}
                </p>

                {/* CTA Button */}
                <Link
                  href={banner.ctaLink}
                  onClick={() => setIsPaused(true)}
                  className={`inline-flex items-center gap-1 sm:gap-2 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-[10px] sm:text-xs font-bold shadow-2xs hover:shadow transition-all group cursor-pointer ${banner.buttonTheme}`}
                >
                  <span>{banner.ctaText}</span>
                  <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Graphic / Visual Box */}
              <div className="flex justify-end pr-2 sm:pr-6 shrink-0">
                <div className="w-16 h-16 sm:w-28 sm:h-28 md:w-36 md:h-36 bg-white/50 dark:bg-slate-700/50 backdrop-blur-md border border-white/60 dark:border-slate-600 rounded-2xl sm:rounded-3xl shadow-2xs flex flex-col items-center justify-center p-2 relative overflow-hidden group">
                  <div className="text-2xl sm:text-4xl md:text-6xl animate-bounce duration-1000 mb-1">{banner.emoji}</div>
                  <div className="absolute -bottom-2 -left-2 w-7 h-7 sm:w-10 sm:h-10 bg-white/60 dark:bg-slate-600/60 rounded-full flex items-center justify-center text-xs sm:text-base shadow-2xs">{banner.visual}</div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 sm:w-12 sm:h-12 bg-secondary/40 dark:bg-amber-500/40 rounded-full flex items-center justify-center text-xs sm:text-base rotate-12">⭐</div>
                </div>
              </div>

            </div>

          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrev();
          setIsPaused(true);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs rounded-full shadow-2xs flex items-center justify-center text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-all z-20 cursor-pointer border border-slate-100 dark:border-slate-700"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={15} />
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
          setIsPaused(true);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs rounded-full shadow-2xs flex items-center justify-center text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-all z-20 cursor-pointer border border-slate-100 dark:border-slate-700"
        aria-label="Next Slide"
      >
        <ChevronRight size={15} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-slate-900/10 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full backdrop-blur-xs">
        {bannerData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all focus:outline-none cursor-pointer ${isActive ? "bg-primary w-3 sm:w-4" : "bg-slate-400/60 dark:bg-slate-500/60 hover:bg-slate-600"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

    </div>
  );
}
