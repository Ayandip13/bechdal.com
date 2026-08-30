import { Star, MapPin, CalendarDays } from "lucide-react";

export default function SellerCard({
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
  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 p-4.5 shadow-xs hover:shadow-xl hover:border-primary/40 dark:hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300 flex items-center gap-4 min-w-[280px] sm:min-w-[300px]">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="font-semibold text-text dark:text-slate-100 truncate text-sm sm:text-base">
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
          {/* Reusable parts hidden in the compact screenshot version but available for other views */}
          {location && joinedSince && (
            <div className="hidden flex-col gap-0.5 mt-0.5">
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3"/> {location}</span>
              <span className="flex items-center gap-1"><CalendarDays className="w-3 h-3"/> {joinedSince}</span>
            </div>
          )}
        </div>

        <div className="flex gap-2">
          <button 
            onClick={onFollow}
            className="px-3 py-1 text-xs font-medium text-primary dark:text-blue-400 border border-primary/30 dark:border-blue-400/40 rounded-full hover:bg-primary/5 dark:hover:bg-blue-400/10 transition-colors cursor-pointer"
          >
            Follow
          </button>
          {onViewProfile && (
            <button 
              onClick={onViewProfile}
              className="px-3 py-1 text-xs font-medium text-text dark:text-slate-200 border border-border dark:border-slate-600 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors hidden cursor-pointer"
            >
              Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

