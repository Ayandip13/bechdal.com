"use client";

import { Heart, MapPin, Clock, Star } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/redux/wishlistSlice";
import Link from "next/link";

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

  const dispatch = useDispatch();
  const wishlistItems = useSelector((state) => state.wishlist.items);
  const isFav = wishlistItems.some((item) => item.id === id);

  const handleFavoriteClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(props));
  };

  // Helper to parse price string for display formatting if needed
  const displayPrice = price ? price.toString().replace("₹", "") : "";

  return (
    <Link href={`/product/${id}`} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col min-w-0 w-full cursor-pointer group block relative">
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-50 border-b border-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
          loading="lazy"
        />
        
        {/* Badges */}
        {badge && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-secondary text-text px-1.5 py-0.5 text-[9px] font-extrabold rounded shadow-xs uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button 
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 bg-white/95 backdrop-blur-xs p-1.5 rounded-full text-text-muted hover:text-red-500 transition-colors shadow-xs z-20 focus:outline-none"
        >
          <Heart className={`w-3.5 h-3.5 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-2 sm:p-3.5 flex flex-col flex-grow">
        
        {/* Condition pill & Rating */}
        <div className="flex items-center justify-between gap-2 mb-1.5">
          {condition && (
            <span className="text-[9px] font-extrabold uppercase bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
              {condition}
            </span>
          )}
          {rating && (
            <div className="flex items-center gap-0.5 text-amber-500 font-extrabold text-[10px]">
              <Star size={10} className="fill-amber-500" />
              <span>{rating}</span>
            </div>
          )}
        </div>

        {/* Title and Verified */}
        <div className="flex items-start gap-1 mb-1">
          <h3 className="font-bold text-slate-800 group-hover:text-primary transition-colors line-clamp-2 text-xs sm:text-sm flex-1 leading-snug" title={title}>
            {title}
          </h3>
          {(isVerifiedSeller || badge === "Verified") && (
            <span className="text-primary mt-0.5 flex-shrink-0" title="Verified Seller">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.6 13.1L7 11.7L9.8 14.5L17 7.3L18.4 8.7L9.8 17.3Z" />
              </svg>
            </span>
          )}
        </div>

        {/* Price Section */}
        <div className="flex flex-wrap items-baseline gap-1 mt-auto pt-1.5">
          <span className="font-extrabold text-sm sm:text-base text-slate-900">
            ₹{displayPrice}
          </span>
          {originalPrice && (
            <>
              <span className="text-[9px] sm:text-xs text-text-light line-through font-medium">
                ₹{originalPrice.toString().replace("₹", "")}
              </span>
              {discount && (
                <span className="text-[9px] sm:text-[10px] font-extrabold text-green-700 bg-green-50 px-1 rounded">
                  {discount}
                </span>
              )}
            </>
          )}
        </div>

        {/* Location and Time */}
        <div className="mt-2 pt-1.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[9px] text-text-muted font-semibold">
          <div className="flex items-center gap-0.5 truncate max-w-full">
            <MapPin className="w-2.5 h-2.5 flex-shrink-0 text-text-light" />
            <span className="truncate">{location.split(",")[0]}</span>
          </div>
          {postedTime && (
            <div className="flex items-center gap-0.5 flex-shrink-0">
              <Clock className="w-2.5 h-2.5 flex-shrink-0 text-text-light" />
              <span>{postedTime}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
