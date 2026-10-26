"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/redux/wishlistSlice";

export default function ProductGallery({ images, productData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isFav = wishlistItems.some((item) => item.id === productData.id);

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(productData));
  };

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
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div 
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        className="relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] w-full bg-slate-100 dark:bg-slate-900/70 rounded-2xl overflow-hidden flex items-center justify-center border border-slate-200/80 dark:border-slate-700/80 select-none"
      >
        {productData.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded flex items-center uppercase tracking-wide shadow-xs">
              {productData.badge}
            </span>
          </div>
        )}
        
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 z-10 bg-white/95 dark:bg-slate-800/95 shadow-sm p-2.5 rounded-full text-slate-500 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors border border-slate-200/80 dark:border-slate-700/80 cursor-pointer"
          aria-label="Add to wishlist"
        >
          <Heart className={`w-5 h-5 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        </button>

        <img
          src={images[activeIndex]}
          alt={`Product view ${activeIndex + 1}`}
          className="w-full h-full object-contain pointer-events-none"
        />

        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 rounded-full p-2 shadow-card border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors cursor-pointer"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/95 dark:bg-slate-800/95 rounded-full p-2 shadow-card border border-slate-200/80 dark:border-slate-700/80 text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-blue-400 transition-colors cursor-pointer"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar snap-x py-1">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all snap-start bg-slate-100 dark:bg-slate-900/60 ${
              activeIndex === index
                ? "border-primary dark:border-blue-500 shadow-xs"
                : "border-transparent hover:border-slate-300 dark:hover:border-slate-700"
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
