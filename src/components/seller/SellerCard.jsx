import Link from "next/link";
import { CheckCircle2, Star } from "lucide-react";

export default function SellerCard({ seller }) {
  const sellerId = seller?.id || 1;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-subtle flex flex-col gap-5 transition-colors">
      <div className="flex items-start justify-between">
        <Link href={`/seller/${sellerId}`} className="flex items-center gap-4 group">
          <img
            src={seller.avatar}
            alt={seller.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-sm group-hover:scale-105 transition-transform"
          />
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-base group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                {seller.name}
              </h3>
              {seller.isVerified && (
                <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              )}
            </div>
            
            <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center text-amber-500">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
              </div>
              <span className="font-semibold text-slate-800 dark:text-slate-200">{seller.rating}</span>
              <span>({seller.reviewsCount} Reviews)</span>
            </div>
            
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5">
              Member since {seller.memberSince}
            </p>
          </div>
        </Link>
        
        <Link href={`/seller/${sellerId}`} className="text-primary dark:text-blue-400 text-xs font-semibold hover:underline cursor-pointer">
          View Profile
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-slate-200/80 dark:border-slate-700/80">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-bold text-slate-900 dark:text-white text-lg">{seller.activeListings}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Active Listings</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center border-l border-slate-200/80 dark:border-slate-700/80">
          <span className="font-bold text-slate-900 dark:text-white text-lg">{seller.positiveReviews}</span>
          <span className="text-xs text-slate-500 dark:text-slate-400">Positive Reviews</span>
        </div>
      </div>

      <button className="w-full bg-white dark:bg-slate-800 text-primary dark:text-blue-400 border border-primary dark:border-blue-500 font-semibold py-2.5 rounded-lg hover:bg-primary dark:hover:bg-primary hover:text-white dark:hover:text-white transition-colors cursor-pointer">
        Follow
      </button>
    </div>
  );
}
