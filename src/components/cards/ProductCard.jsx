"use client";

import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import Link from "next/link";
import AnimatedHeartButton from "@/components/common/AnimatedHeartButton";
import { UrgentBadge, FeaturedBadge, VerifiedBadge, DiscountBadge } from "@/components/common/FunkyBadges";

export default function ProductCard(props) {
  const {
    id,
    image,
    title,
    price,
    originalPrice,
    discount,
    location,
    postedTime,
    badge,
    condition,
    rating,
    isVerifiedSeller,
    deliveryAvailable,
    isPremium,
    isFeatured,
  } = props;

  const [imgSrc, setImgSrc] = useState(image);

  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  const displayPrice = price ? price.toString().replace("₹", "") : "";

  // Determine badge type
  const isUrgent = badge?.toLowerCase() === "urgent" || badge?.toLowerCase() === "hot";
  const isFeaturedBadge = isFeatured || badge?.toLowerCase() === "featured" || isPremium;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-2xs hover:shadow-md hover:border-primary/40 dark:hover:border-blue-400/60 transition-all flex flex-col min-w-0 w-full cursor-pointer group relative block select-none">
      {/* 1. Full-Card Underlying Link for Product Navigation (z-0) */}
      <Link
        href={`/product/${id}`}
        className="absolute inset-0 z-0"
        aria-label={title}
      />

      {/* 2. Image Container (pointer-events-none so card click passes through to Link) */}
      <div className="relative aspect-[4/3] max-h-[110px] sm:max-h-[150px] w-full overflow-hidden bg-slate-100 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-700/60 pointer-events-none">
        <img
          src={imgSrc}
          alt={title}
          onError={() => setImgSrc("/images/yamaha_mt15.png")}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Funky Animated Badges (Top Left) */}
        <div className="absolute top-1.5 left-1.5 z-10 flex flex-col gap-1 items-start">
          {isUrgent && <UrgentBadge text={badge || "Urgent"} />}
          {!isUrgent && isFeaturedBadge && <FeaturedBadge text={badge || "Featured"} />}
          {!isUrgent && !isFeaturedBadge && badge && (
            <span className="bg-secondary text-slate-950 px-1 py-0.5 text-[8px] font-black rounded shadow-2xs uppercase tracking-wider">
              {badge}
            </span>
          )}
        </div>
      </div>

      {/* 3. Interactive Funky Heart Button (z-30 pointer-events-auto — strictly isolated from card link) */}
      <div
        className="absolute top-1.5 right-1.5 z-30 pointer-events-auto"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        onMouseDown={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
      >
        <AnimatedHeartButton product={props} size="xs" />
      </div>

      {/* 4. Content Container (pointer-events-none so card click passes through to Link) */}
      <div className="p-1.5 sm:p-2 flex flex-col flex-grow pointer-events-none">
        {/* Title */}
        <div className="flex items-center gap-1 mb-0.5">
          <h3
            className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-1 text-[11px] sm:text-xs flex-1 leading-snug"
            title={title}
          >
            {title}
          </h3>
          {(isVerifiedSeller || badge === "Verified") && <VerifiedBadge />}
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="font-extrabold text-xs sm:text-sm text-slate-900 dark:text-white">
            ₹{displayPrice}
          </span>
          {originalPrice && (
            <span className="text-[8px] sm:text-[10px] text-text-light dark:text-slate-400 line-through font-medium">
              ₹{originalPrice.toString().replace("₹", "")}
            </span>
          )}
          {discount && <DiscountBadge discount={discount} className="ml-auto" />}
        </div>

        {/* Location & Time in one compact line */}
        <div className="mt-1 pt-0.5 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[8px] sm:text-[9px] text-text-muted dark:text-slate-400 font-medium">
          <div className="flex items-center gap-0.5 truncate max-w-[65%] group/loc">
            <MapPin size={8} className="shrink-0 text-slate-400 group-hover:text-primary group-hover:-translate-y-0.5 transition-all" />
            <span className="truncate">{location ? location.split(",")[0] : "Local"}</span>
          </div>
          {postedTime && (
            <span className="shrink-0 text-[8px] sm:text-[9px] text-slate-400">{postedTime}</span>
          )}
        </div>
      </div>
    </div>
  );
}
