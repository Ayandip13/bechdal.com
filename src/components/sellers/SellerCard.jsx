"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Star, MapPin, CalendarDays, Check, UserPlus } from "lucide-react";

export default function SellerCard({
  id = 1,
  avatar,
  name,
  isVerified,
  rating,
  reviewsCount,
  totalListings,
  joinedSince,
  location,
  description,
  onFollow,
  onViewProfile,
}) {
  const [imgSrc, setImgSrc] = useState(avatar);
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setImgSrc(avatar);
  }, [avatar]);

  const handleFollowClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFollowing((prev) => !prev);
    if (onFollow) onFollow(!isFollowing);
  };

  return (
    <Link
      href={`/seller/${id}`}
      className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-4.5 shadow-xs hover:shadow-xl hover:border-primary/40 dark:hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 min-w-[280px] sm:min-w-[300px] cursor-pointer group block"
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 relative">
        <img
          src={imgSrc}
          alt={name}
          onError={() => setImgSrc("/images/kolkata_properties.png")}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="font-semibold text-text dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-400 truncate text-sm sm:text-base transition-colors">
            {name}
          </h3>
          {isVerified && (
            <div className="text-primary dark:text-blue-400 flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.6 13.1L7 11.7L9.8 14.5L17 7.3L18.4 8.7L9.8 17.3Z" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
          <span className="text-xs font-medium text-text dark:text-slate-200">{rating}</span>
          <span className="text-xs text-text-muted dark:text-slate-400">({reviewsCount})</span>
        </div>

        <div className="text-xs text-text-muted dark:text-slate-400 mb-2 flex flex-col gap-0.5">
          <span>{totalListings} Listings</span>
          {location && (
            <span className="text-[11px] text-slate-400 truncate flex items-center gap-1">
              <MapPin className="w-2.5 h-2.5 shrink-0" /> {location}
            </span>
          )}
        </div>

        <div className="flex gap-2">
          <button 
            type="button"
            onClick={handleFollowClick}
            className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-bold rounded-full transition-all duration-150 cursor-pointer active:scale-90 hover:scale-105 select-none ${
              isFollowing
                ? "bg-primary text-white border border-primary dark:bg-blue-600 shadow-xs"
                : "text-primary dark:text-blue-400 border border-primary/30 dark:border-blue-400/40 hover:bg-primary/5 dark:hover:bg-blue-400/10"
            }`}
          >
            {isFollowing ? (
              <>
                <Check size={12} className="stroke-[3] animate-pulse" />
                <span>Following</span>
              </>
            ) : (
              <>
                <UserPlus size={12} />
                <span>Follow</span>
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
}

