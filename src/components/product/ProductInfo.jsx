import { CheckCircle2, Star, MapPin, Clock } from "lucide-react";
import SpecificationList from "./SpecificationList";

export default function ProductInfo({ data }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        {data.isFeatured && (
          <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-600 px-3 py-1 text-xs font-semibold rounded-full mb-3 border border-blue-100">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Featured Listing</span>
          </div>
        )}
        
        <h1 className="text-2xl sm:text-3xl font-bold text-text mb-3 leading-tight">
          {data.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-text-muted mb-6">
          <div className="flex items-center gap-1">
            <div className="flex items-center text-amber-500">
              <Star className="w-4 h-4 fill-amber-500" />
            </div>
            <span className="font-semibold text-text">{data.rating}</span>
            <span>({data.reviewsCount} Reviews)</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block"></div>
          <div className="flex items-center gap-1.5">
            <HeartIcon className="w-4 h-4" />
            <span>{data.interestedCount} Interested</span>
          </div>
        </div>

        <div className="flex items-end gap-3 mb-4">
          <span className="text-3xl font-bold text-text">₹{data.price}</span>
          {data.originalPrice && (
            <span className="text-lg text-text-muted line-through mb-1">₹{data.originalPrice}</span>
          )}
          {data.discount && (
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold mb-1.5 border border-green-200">
              {data.discount}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted pb-6 border-b border-border/50">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4" />
            <span>{data.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{data.postedTime}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-gray-400">ID: {data.id}</span>
          </div>
        </div>
      </div>

      <SpecificationList features={data.keyFeatures} />
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}
