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
      className="flex-1 relative rounded-2xl overflow-hidden shadow-xs border border-border/50 min-h-[220px] sm:min-h-[280px] md:min-h-[360px] flex items-center outline-none select-none"
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
            className={`absolute inset-0 w-full h-full p-5 sm:p-8 md:p-12 bg-gradient-to-r ${banner.bgGradient} dark:from-slate-800 dark:via-slate-800/90 dark:to-slate-900 flex flex-col justify-center transition-opacity duration-500 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Decorative Blob */}
            <div className="absolute right-0 bottom-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-secondary/10 dark:bg-blue-500/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

            {/* Responsive Split Columns Grid */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-6 w-full items-center text-left">
              
              {/* Left Column: Info & CTA */}
              <div className="max-w-sm sm:max-w-md md:max-w-lg">
                {/* Badge tag */}
                <span className={`inline-block text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 border rounded-md mb-2 sm:mb-3.5 ${banner.themeColor} dark:bg-slate-700/80 dark:text-amber-300 dark:border-slate-600`}>
                  {banner.tag}
                </span>

                {/* Title with clamping and line breaks */}
                <h2 className="text-lg sm:text-2xl md:text-3.5xl lg:text-4.5xl font-black text-text dark:text-white leading-tight mb-1.5 sm:mb-3 whitespace-pre-line">
                  {banner.title}
                </h2>

                {/* Subtitle */}
                <p className="text-text-muted dark:text-slate-300 text-xs sm:text-sm md:text-base font-bold mb-3 sm:mb-5 leading-snug">
                  {banner.subtitle} <br className="hidden sm:block" />
                  <span className="text-[10px] sm:text-xs text-text/80 dark:text-slate-400 font-semibold">{banner.desc}</span>
                </p>

                {/* CTA Button */}
                <Link 
                  href={banner.ctaLink}
                  onClick={() => setIsPaused(true)}
                  className={`inline-flex items-center gap-1.5 sm:gap-2 text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all group cursor-pointer ${banner.buttonTheme}`}
                >
                  <span>{banner.ctaText}</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Right Column: Illustration / Graphic */}
              <div className="hidden md:flex justify-end pr-6">
                <div className="w-36 h-36 md:w-48 md:h-48 bg-white/40 dark:bg-slate-700/40 backdrop-blur-md border border-white/60 dark:border-slate-600 rounded-3xl shadow-sm flex flex-col items-center justify-center p-3 relative overflow-hidden group">
                  <div className="text-5xl md:text-7xl animate-bounce duration-1000 mb-2">{banner.emoji}</div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white/50 dark:bg-slate-600/50 rounded-full flex items-center justify-center text-xl shadow-sm">{banner.visual}</div>
                  <div className="absolute -top-4 -right-4 w-14 h-14 bg-secondary/35 dark:bg-amber-500/35 rounded-full flex items-center justify-center text-lg rotate-12">⭐</div>
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
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs rounded-full shadow-xs flex items-center justify-center text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:scale-105 transition-all z-20 cursor-pointer border border-slate-100 dark:border-slate-700"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={16} />
      </button>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
          setIsPaused(true);
        }}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs rounded-full shadow-xs flex items-center justify-center text-text-muted dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 hover:scale-105 transition-all z-20 cursor-pointer border border-slate-100 dark:border-slate-700"
        aria-label="Next Slide"
      >
        <ChevronRight size={16} />
      </button>


      {/* Pagination Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-slate-900/10 px-2.5 py-1 rounded-full backdrop-blur-xs">
        {bannerData.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all focus:outline-none cursor-pointer ${
                isActive ? "bg-primary w-3.5 sm:w-4" : "bg-text-muted/50 hover:bg-text-muted"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>

    </div>
  );
}
