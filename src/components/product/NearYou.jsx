import { ChevronRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { nearYouAds } from "@/constants/dummyData";

export default function NearYou() {
  return (
    <section className="w-full bg-white rounded-2xl p-6 shadow-subtle border border-border/50 flex-1">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-text">Near You</h2>
        <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary-dark transition-colors whitespace-nowrap">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
          {nearYouAds.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
