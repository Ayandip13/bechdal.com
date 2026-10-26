"use client";

import { Star, MapPin, Clock } from "lucide-react";
import SpecificationList from "./SpecificationList";
import AnimatedHeartButton from "@/components/common/AnimatedHeartButton";
import { FeaturedBadge, VerifiedBadge, DiscountBadge } from "@/components/common/FunkyBadges";

export default function ProductInfo({ data }) {
  return (
    <div className="flex flex-col gap-6 select-none">
      <div>
        {/* Top Badges & Wishlist Action */}
        <div className="flex items-center justify-between mb-3 gap-2">
          <div className="flex items-center gap-2">
            {data.isFeatured && <FeaturedBadge text="Featured Listing" />}
            {data.isVerifiedSeller && <VerifiedBadge text="Verified Seller" showText />}
          </div>
          {/* Funky Animated Heart Button with Particle Burst */}
          <AnimatedHeartButton product={data} size="sm" />
        </div>
        
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3 leading-tight tracking-tight">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-500 dark:text-slate-400 mb-6">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
            <span className="font-bold text-slate-800 dark:text-slate-200">{data.rating || "4.8"}</span>
            <span>({data.reviewsCount || "34"} Reviews)</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 dark:bg-slate-600 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-500">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping inline-block" />
            <span>{data.interestedCount || "28"} People Interested</span>
          </div>
        </div>

        {/* Price Section with Animated Bachat Badge */}
        <div className="flex items-end gap-3 mb-4">
          <span className="text-3xl font-black text-slate-900 dark:text-white">₹{data.price}</span>
          {data.originalPrice && (
            <span className="text-lg text-slate-400 dark:text-slate-500 line-through mb-1">₹{data.originalPrice}</span>
          )}
          {data.discount && (
            <div className="mb-1.5">
              <DiscountBadge discount={data.discount} />
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 pb-6 border-b border-slate-200/80 dark:border-slate-700/80">
          <div className="flex items-center gap-1.5 group">
            <MapPin className="w-4 h-4 text-slate-400 group-hover:text-primary transition-colors" />
            <span className="font-medium">{data.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span className="font-medium">{data.postedTime}</span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <span className="text-xs text-slate-400 dark:text-slate-500 font-mono">ID: {data.id}</span>
          </div>
        </div>
      </div>

      <SpecificationList features={data.keyFeatures} />
    </div>
  );
}
