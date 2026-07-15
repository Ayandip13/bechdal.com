import { Star, MapPin } from "lucide-react";

export default function TestimonialCard({
  customerName,
  avatar,
  rating,
  review,
  purchasedProduct,
  location,
}) {
  return (
    <div className="bg-white rounded-xl border border-border p-6 shadow-sm hover:shadow-card transition-shadow duration-300 flex flex-col min-w-[300px] w-full max-w-md">
      {/* Header */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex-shrink-0">
          <img src={avatar} alt={customerName} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-semibold text-text">{customerName}</h4>
          <div className="flex items-center gap-1 mt-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < rating ? "fill-secondary text-secondary" : "fill-gray-200 text-gray-200"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-text-muted italic flex-grow mb-4 leading-relaxed line-clamp-4">
        "{review}"
      </p>

      {/* Footer Info */}
      <div className="mt-auto pt-4 border-t border-border flex flex-col gap-1 text-xs">
        <div className="flex items-center justify-between text-text-muted">
          <span className="font-medium text-primary">Purchased: {purchasedProduct}</span>
        </div>
        <div className="flex items-center gap-1 text-text-light mt-1">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
}
