"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/redux/wishlistSlice";

/**
 * AnimatedHeartButton
 * Funky quick-commerce animated wishlist button.
 * Triggers a spring pop bounce on press.
 * Strictly prevents parent link navigation.
 */
export default function AnimatedHeartButton({ product, size = "sm", className = "" }) {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isFav = wishlistItems.some((item) => item.id === product?.id);

  const [isPopping, setIsPopping] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.nativeEvent) {
      e.nativeEvent.stopImmediatePropagation?.();
    }

    setIsPopping(true);
    setTimeout(() => setIsPopping(false), 500);

    dispatch(toggleFavorite(product));
  };

  const handlePointerDown = (e) => {
    e.stopPropagation();
  };

  const sizeClasses = {
    xs: "w-6 h-6 p-1",
    sm: "w-7 h-7 p-1.5",
    md: "w-9 h-9 p-2",
  };

  const iconSizes = {
    xs: 12,
    sm: 14,
    md: 18,
  };

  const iconSize = iconSizes[size] || 14;

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseDown={handlePointerDown}
      onTouchStart={handlePointerDown}
      onPointerDown={handlePointerDown}
      aria-label={isFav ? "Remove from wishlist" : "Add to wishlist"}
      className={`relative rounded-full bg-white/95 dark:bg-slate-800/95 backdrop-blur-md shadow-md border border-slate-200/80 dark:border-slate-700/80 flex items-center justify-center cursor-pointer transition-all duration-150 select-none hover:scale-110 active:scale-90 ${sizeClasses[size] || sizeClasses.sm} ${className}`}
    >
      {/* Particle Sparkles Burst on Click */}
      {isPopping && (
        <span className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <span className="absolute -top-1.5 w-1 h-1 rounded-full bg-red-400 anim-sparkle-burst" />
          <span className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-amber-400 anim-sparkle-burst" style={{ animationDelay: "40ms" }} />
          <span className="absolute -left-1.5 w-1 h-1 rounded-full bg-pink-400 anim-sparkle-burst" style={{ animationDelay: "80ms" }} />
          <span className="absolute -right-1.5 w-1 h-1 rounded-full bg-yellow-400 anim-sparkle-burst" style={{ animationDelay: "120ms" }} />
          <span className="absolute -top-1 -right-1 w-1 h-1 rounded-full bg-rose-500 anim-sparkle-burst" style={{ animationDelay: "60ms" }} />
        </span>
      )}

      {/* Heart SVG with spring pop when active */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill={isFav ? "#ef4444" : "none"}
        stroke={isFav ? "#ef4444" : "currentColor"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-colors text-slate-500 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 ${
          isPopping ? "heart-pop" : ""
        }`}
      >
        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      </svg>
    </button>
  );
}
