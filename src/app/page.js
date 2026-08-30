import HeroSection from "@/components/hero/HeroSection";
import QuickActions from "@/components/hero/QuickActions";
import FeaturedListings from "@/components/product/FeaturedListings";
import PremiumAds from "@/components/product/PremiumAds";
import NearYou from "@/components/product/NearYou";
import CategoryProductRail from "@/components/product/CategoryProductRail";
import VerifiedSellers from "@/components/sellers/VerifiedSellers";
import FAQSection from "@/components/faq/FAQSection";
import { featuredListings, premiumAds } from "@/constants/dummyData";

export default function Home() {
  const mobileListings = [
    {
      id: 201,
      title: "OnePlus 11R 5G (16GB/256GB)",
      price: "28,500",
      originalPrice: "44,999",
      discount: "36% off",
      location: "Salt Lake, Kolkata",
      postedTime: "Today",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
    {
      id: 202,
      title: "Samsung Galaxy S23 Ultra",
      price: "68,000",
      originalPrice: "1,24,999",
      discount: "45% off",
      location: "Park Street, Kolkata",
      postedTime: "Yesterday",
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop",
      badge: null,
      isVerifiedSeller: true,
    },
    {
      id: 203,
      title: "MacBook Air M2 (8GB / 256GB)",
      price: "72,900",
      originalPrice: "99,900",
      discount: "27% off",
      location: "New Town, Kolkata",
      postedTime: "3 days ago",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
      badge: "Deal",
      isVerifiedSeller: true,
    },
    {
      id: 204,
      title: "iPad Air 5th Gen M1 WiFi",
      price: "39,500",
      originalPrice: "59,900",
      discount: "34% off",
      location: "Garia, Kolkata",
      postedTime: "4 days ago",
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop",
      badge: null,
      isVerifiedSeller: false,
    },
  ];

  const vehicleListings = [
    {
      id: 301,
      title: "Royal Enfield Hunter 350 (2023)",
      price: "1,35,000",
      originalPrice: "1,75,000",
      discount: "22% off",
      location: "Howrah, West Bengal",
      postedTime: "Today",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
    {
      id: 302,
      title: "Maruti Suzuki Swift ZXi 2022",
      price: "5,80,000",
      originalPrice: "7,50,000",
      discount: "22% off",
      location: "Kolkata",
      postedTime: "2 days ago",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
      badge: "FEATURED",
      isVerifiedSeller: true,
    },
    {
      id: 303,
      title: "TVS Apache RTR 160 4V",
      price: "85,000",
      originalPrice: "1,25,000",
      discount: "32% off",
      location: "Dum Dum, Kolkata",
      postedTime: "3 days ago",
      image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop",
      badge: null,
      isVerifiedSeller: false,
    },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-6 pt-3 sm:pt-4">
      {/* 1. Compact Hero Banner Carousel */}
      <HeroSection />

      {/* 2. Compact Quick Actions */}
      <QuickActions />

      {/* 3. Slim Marketplace Trust Strip ("BechDal Promise") */}
      <div className="bg-slate-900/90 dark:bg-slate-800/90 border border-slate-800 dark:border-slate-700/80 rounded-xl px-3.5 py-2.5 text-white flex flex-wrap items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-2 text-xs font-bold">
          <span className="text-secondary dark:text-amber-400 font-black">⚡ Maximum Bachat</span>
          <span className="text-slate-600 font-normal hidden sm:inline">•</span>
          <span className="text-slate-300 hidden sm:inline">No Hidden Charges</span>
          <span className="text-slate-600 font-normal hidden sm:inline">•</span>
          <span className="text-slate-300 hidden sm:inline">No Platform Fees</span>
        </div>
        <div className="flex items-center gap-2.5 sm:gap-4 text-[10px] sm:text-xs font-extrabold text-secondary dark:text-amber-400">
          <span>₹0 Listing Fee</span>
          <span>0% Commission</span>
          <span>100% Direct Deals</span>
        </div>
      </div>

      {/* 4. Featured Listings Rail */}
      <FeaturedListings />

      {/* 5. Premium Ads Rail */}
      <PremiumAds />

      {/* 6. Near You Rail */}
      <NearYou />

      {/* 7. Category Discovery Rail: Mobiles & Electronics */}
      <CategoryProductRail
        title="Trending Mobiles & Tech"
        subtitle="Pre-owned smartphones, laptops, and gadgets near you"
        categorySlug="mobiles"
        products={mobileListings}
      />

      {/* 8. Category Discovery Rail: Vehicles & Bikes */}
      <CategoryProductRail
        title="Vehicles, Bikes & Cars"
        subtitle="Direct deals from verified local owners"
        categorySlug="vehicles"
        products={vehicleListings}
      />

      {/* 9. Verified Sellers */}
      <VerifiedSellers />

      {/* 10. FAQ */}
      <FAQSection />
    </div>
  );
}
