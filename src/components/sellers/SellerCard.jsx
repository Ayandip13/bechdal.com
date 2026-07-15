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
    <div className="bg-white rounded-xl border border-border p-4 shadow-sm hover:shadow-card transition-shadow duration-300 flex items-center gap-4 min-w-[280px] sm:min-w-[300px]">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 border border-border">
        <img
          src={avatar}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-1.5 mb-1">
          <h3 className="font-semibold text-text truncate text-sm sm:text-base">
            {name}
          </h3>
          {isVerified && (
            <div className="text-primary flex-shrink-0">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM9.8 17.3L5.6 13.1L7 11.7L9.8 14.5L17 7.3L18.4 8.7L9.8 17.3Z" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 mb-1">
          <Star className="w-3.5 h-3.5 fill-secondary text-secondary" />
          <span className="text-xs font-medium text-text">{rating}</span>
          <span className="text-xs text-text-muted">({reviewsCount})</span>
        </div>

        <div className="text-xs text-text-muted mb-2 flex flex-col gap-0.5">
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
            className="px-3 py-1 text-xs font-medium text-primary border border-primary/30 rounded-full hover:bg-primary/5 transition-colors"
          >
            Follow
          </button>
          {onViewProfile && (
            <button 
              onClick={onViewProfile}
              className="px-3 py-1 text-xs font-medium text-text border border-border rounded-full hover:bg-gray-50 transition-colors hidden"
            >
              Profile
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
