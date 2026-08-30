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

  const displayPrice = price ? price.toString().replace("₹", "") : "";

  return (
    <Link
      href={`/product/${id}`}
      className="bg-white dark:bg-slate-800/90 rounded-xl border border-slate-200/80 dark:border-slate-700/80 overflow-hidden shadow-2xs hover:shadow-md hover:border-primary/40 dark:hover:border-blue-400/60 transition-all flex flex-col min-w-0 w-full cursor-pointer group relative block"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] max-h-[130px] sm:max-h-[170px] w-full overflow-hidden bg-slate-100 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-700/60">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
          loading="lazy"
        />

        {/* Badges */}
        {badge && (
          <div className="absolute top-2 left-2 z-10">
            <span className="bg-secondary text-slate-950 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-black rounded shadow-2xs uppercase tracking-wider">
              {badge}
            </span>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={handleFavoriteClick}
          className="absolute top-2 right-2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xs p-1 rounded-full text-text-muted dark:text-slate-300 hover:text-red-500 transition-colors shadow-2xs z-20 focus:outline-none cursor-pointer"
        >
          <Heart className={`w-3 h-3 ${isFav ? "fill-red-500 text-red-500" : ""}`} />
        </button>
      </div>

      {/* Content Container */}
      <div className="p-2 sm:p-2.5 flex flex-col flex-grow">
        {/* Title */}
        <div className="flex items-center gap-1 mb-0.5">
          <h3
            className="font-semibold text-slate-800 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors line-clamp-1 text-xs sm:text-sm flex-1 leading-snug"
            title={title}
          >
            {title}
          </h3>
          {(isVerifiedSeller || badge === "Verified") && (
            <span className="text-primary dark:text-blue-400 shrink-0" title="Verified Seller">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.6 13.1L7 11.7L9.8 14.5L17 7.3L18.4 8.7L9.8 17.3Z" />
              </svg>
            </span>
          )}
        </div>

        {/* Price Section */}
        <div className="flex items-baseline gap-1 mt-0.5">
          <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
            ₹{displayPrice}
          </span>
          {originalPrice && (
            <span className="text-[9px] sm:text-xs text-text-light dark:text-slate-400 line-through font-medium">
              ₹{originalPrice.toString().replace("₹", "")}
            </span>
          )}
          {discount && (
            <span className="text-[8px] sm:text-[9px] font-extrabold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-950/60 px-1 rounded ml-auto">
              {discount}
            </span>
          )}
        </div>

        {/* Location & Time in one compact line */}
        <div className="mt-1 pt-1 border-t border-slate-100 dark:border-slate-700/50 flex items-center justify-between text-[9px] text-text-muted dark:text-slate-400 font-medium">
          <div className="flex items-center gap-0.5 truncate max-w-[65%]">
            <MapPin size={9} className="shrink-0 text-slate-400" />
            <span className="truncate">{location.split(",")[0]}</span>
          </div>
          {postedTime && (
            <span className="shrink-0 text-[9px] text-slate-400">{postedTime}</span>
          )}
        </div>
      </div>
    </Link>
  );
}
