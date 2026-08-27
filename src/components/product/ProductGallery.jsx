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
        className="relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/3] w-full bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center border border-border/50 select-none"
      >
        {productData.badge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="bg-red-500 text-white px-3 py-1 text-xs font-bold rounded flex items-center uppercase tracking-wide">
              {productData.badge}
            </span>
          </div>
        )}
        
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-4 right-4 z-10 bg-white shadow-sm p-2.5 rounded-full text-text-muted hover:text-red-500 transition-colors border border-border/50"
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
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-card border border-border/50 text-text-muted hover:text-primary transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button 
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-card border border-border/50 text-text-muted hover:text-primary transition-colors cursor-pointer"
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
            className={`relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all snap-start bg-gray-50 ${
              activeIndex === index ? "border-primary" : "border-transparent hover:border-border"
            }`}
          >
            <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}
