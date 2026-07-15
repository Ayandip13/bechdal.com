import { CheckCircle2, Star } from "lucide-react";

export default function SellerCard({ seller }) {
  return (
    <div className="bg-white rounded-xl p-5 border border-border/50 shadow-sm flex flex-col gap-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <h3 className="font-bold text-text text-base">{seller.name}</h3>
              {seller.isVerified && (
                <CheckCircle2 className="w-4 h-4 text-blue-500" />
              )}
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-text-muted">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="font-semibold text-text">{seller.rating}</span>
              <span>({seller.reviewsCount} Reviews)</span>
            </div>
            
            <p className="text-xs text-text-muted mt-1.5">
              Member since {seller.memberSince}
            </p>
          </div>
        </div>
        
        <button className="text-primary text-xs font-semibold hover:underline">
          View Profile
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-border/50">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-bold text-text text-lg">{seller.activeListings}</span>
          <span className="text-xs text-text-muted">Active Listings</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center border-l border-border/50">
          <span className="font-bold text-text text-lg">{seller.positiveReviews}</span>
          <span className="text-xs text-text-muted">Positive Reviews</span>
        </div>
      </div>

      <button className="w-full bg-white text-primary border border-primary font-semibold py-2.5 rounded-lg hover:bg-primary hover:text-white transition-colors">
        Follow
      </button>
    </div>
  );
}
