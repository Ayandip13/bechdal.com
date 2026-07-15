"use client";

import { Heart, MapPin, Clock } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/redux/wishlistSlice";
import Link from "next/link";

export default function ProductCard(props) {
  const {
    id,
    image,
    title,
    price,
    location,
    postedTime,
    badge,
    isPremium,
    isFeatured,
  } = props;

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isFav = wishlistItems.some((item) => item.id === id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(props));
  };

  return (
    <Link href={`/product/${id}`} className="bg-card rounded-xl border border-border overflow-hidden shadow-sm hover:shadow-card transition-shadow duration-300 flex flex-col min-w-[240px] w-full cursor-pointer group block">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-secondary text-text px-2 py-1 text-[10px] font-bold rounded flex items-center uppercase tracking-wide">
              {badge}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-1.5 rounded-full text-text-muted hover:text-red-500 transition-colors shadow-sm z-20"
        >
          <Heart className={`w-4 h-4 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and Verified */}
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-text truncate text-sm lg:text-base" title={title}>
            {title}
          </h3>
          {/* Mock verified checkmark if badge is 'Verified' or some logic. Based on screenshot, iPhone has a verified tick. */}
          {title.includes("iPhone 14 Pro Max") && (
            <div className="text-primary mt-0.5 flex-shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.6 13.1L7 11.7L9.8 14.5L17 7.3L18.4 8.7L9.8 17.3Z" />
              </svg>
            </div>
          )}
        </div>

        {/* Price */}
        <div className="font-bold text-lg text-text mb-3">
          ₹{price}
        </div>

        {/* Location and Time */}
        <div className="mt-auto space-y-1.5">
          <div className="flex items-center text-xs text-text-muted gap-1.5">
            <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
            <span className="truncate">{location}</span>
          </div>
          <div className="flex items-center text-xs text-text-muted gap-1.5">
            <Clock className="w-3.5 h-3.5 flex-shrink-0" />
            <span>{postedTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
