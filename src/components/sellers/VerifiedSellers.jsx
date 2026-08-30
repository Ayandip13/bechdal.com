import { ChevronRight } from "lucide-react";
import SellerCard from "./SellerCard";
import { verifiedSellers } from "@/constants/dummyData";

export default function VerifiedSellers() {
  return (
    <section className="w-full py-2">
      <div className="flex items-center justify-between gap-4 mb-5">
        <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight">Verified Sellers</h2>
        <button className="flex items-center gap-1 text-primary dark:text-blue-400 text-xs sm:text-sm font-bold hover:underline transition-all whitespace-nowrap cursor-pointer">
          View All Sellers <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 pt-1 snap-x">
          {verifiedSellers.map((seller) => (
            <div key={seller.id} className="snap-start shrink-0">
              <SellerCard {...seller} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


