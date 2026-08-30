import { ChevronRight } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { nearYouAds } from "@/constants/dummyData";

export default function NearYou() {
  return (
    <section className="w-full flex-1 py-2">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight">Near You</h2>
        <button className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 pt-1 snap-x">
          {nearYouAds.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[165px] sm:w-[220px] md:w-[265px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


