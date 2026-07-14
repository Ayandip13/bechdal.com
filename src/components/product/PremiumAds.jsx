import { ChevronRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { premiumAds } from "@/constants/dummyData";

export default function PremiumAds() {
  return (
    <section className="w-full bg-[#fefce8] rounded-2xl p-6 shadow-subtle border border-[#fef08a]/50">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-text">Premium Ads</h2>
        <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary-dark transition-colors whitespace-nowrap">
          View All Premium Ads <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
          {premiumAds.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
