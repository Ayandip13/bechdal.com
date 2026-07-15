import { ChevronRight } from "lucide-react";
import SellerCard from "./SellerCard";
import { verifiedSellers } from "@/constants/dummyData";

export default function VerifiedSellers() {
  return (
    <section className="w-full bg-white rounded-2xl p-6 shadow-subtle border border-border/50">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold text-text">Verified Sellers</h2>
        <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary-dark transition-colors whitespace-nowrap">
          View All Sellers <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative group">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
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
