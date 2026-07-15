import { ChevronRight, Clock, Star, MapPin, Shield } from "lucide-react";
import ProductCard from "../cards/ProductCard";
import { featuredListings } from "@/constants/dummyData";

export default function FeaturedListings() {
  const filters = [
    { name: "Latest", icon: Clock, active: true },
    { name: "Featured", icon: Star, active: false },
    { name: "Near Me", icon: MapPin, active: false },
    { name: "Premium", icon: Shield, active: false },
  ];

  return (
    <section className="w-full bg-white rounded-2xl p-6 shadow-subtle border border-border/50">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-8">
          <h2 className="text-xl font-bold text-text">Featured Listings</h2>
          
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
            {filters.map((filter) => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    filter.active
                      ? "bg-primary-light/10 text-primary border border-primary/20"
                      : "bg-white text-text-muted border border-border hover:bg-gray-50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.name}
                </button>
              );
            })}
          </div>
        </div>

        <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary-dark transition-colors whitespace-nowrap">
          View All Listings <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="relative group/nav">
        <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
          {featuredListings.map((listing) => (
            <div key={listing.id} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px]">
              <ProductCard {...listing} />
            </div>
          ))}
        </div>
        
        {/* Right Arrow Navigation (Desktop) */}
        <button className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-card border border-border hidden lg:flex items-center justify-center text-text-muted hover:text-primary transition-colors opacity-0 group-hover/nav:opacity-100">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
