"use client";

import HeroSection from "@/components/hero/HeroSection";
import QuickActions from "@/components/hero/QuickActions";
import FeaturedListings from "@/components/product/FeaturedListings";
import PremiumAds from "@/components/product/PremiumAds";
import NearYou from "@/components/product/NearYou";
import CategoryProductGrid from "@/components/product/CategoryProductGrid";
import PromoBanner from "@/components/banner/PromoBanner";
import VerifiedSellers from "@/components/sellers/VerifiedSellers";
import FAQSection from "@/components/faq/FAQSection";
import { Smartphone, Car, ShieldCheck, Tag } from "lucide-react";

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
    {
      id: 205,
      title: "Google Pixel 7 Pro (128GB)",
      price: "36,999",
      originalPrice: "84,999",
      discount: "56% off",
      location: "Ballygunge, Kolkata",
      postedTime: "Just now",
      image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
    {
      id: 206,
      title: "iPhone 12 Pro Max 128GB",
      price: "41,500",
      originalPrice: "1,19,900",
      discount: "65% off",
      location: "Dum Dum, Kolkata",
      postedTime: "5 hours ago",
      image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
      badge: "Deal",
      isVerifiedSeller: true,
    },
    {
      id: 207,
      title: "Asus ROG Zephyrus G14",
      price: "64,000",
      originalPrice: "1,25,000",
      discount: "48% off",
      location: "Sector V, Kolkata",
      postedTime: "1 day ago",
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
    {
      id: 208,
      title: "Nothing Phone (2) 256GB",
      price: "27,999",
      originalPrice: "49,999",
      discount: "44% off",
      location: "Howrah, West Bengal",
      postedTime: "2 days ago",
      image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=600&auto=format&fit=crop",
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
    {
      id: 304,
      title: "Hyundai Creta SX 1.5 Petrol 2021",
      price: "10,25,000",
      originalPrice: "13,50,000",
      discount: "24% off",
      location: "Alipore, Kolkata",
      postedTime: "5 days ago",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
    {
      id: 305,
      title: "Tata Nexon EV Max XZ+ 2022",
      price: "11,50,000",
      originalPrice: "17,50,000",
      discount: "34% off",
      location: "Rajarhat, Kolkata",
      postedTime: "Just now",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
    {
      id: 306,
      title: "Yamaha MT-15 V2 (2023)",
      price: "1,22,000",
      originalPrice: "1,68,000",
      discount: "27% off",
      location: "Jadavpur, Kolkata",
      postedTime: "1 day ago",
      image: "https://images.unsplash.com/photo-1623861517329-a1b742880f08?q=80&w=600&auto=format&fit=crop",
      badge: "Deal",
      isVerifiedSeller: true,
    },
    {
      id: 307,
      title: "Honda Activa 6G 2022",
      price: "52,000",
      originalPrice: "78,000",
      discount: "33% off",
      location: "Behala, Kolkata",
      postedTime: "4 hours ago",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=600&auto=format&fit=crop",
      badge: null,
      isVerifiedSeller: false,
    },
    {
      id: 308,
      title: "Kia Seltos GTX Plus Diesel 2021",
      price: "12,90,000",
      originalPrice: "18,90,000",
      discount: "31% off",
      location: "Salt Lake, Kolkata",
      postedTime: "2 days ago",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=600&auto=format&fit=crop",
      badge: "Verified",
      isVerifiedSeller: true,
    },
  ];

  return (
    <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8 flex flex-col gap-4 sm:gap-7 pt-2 sm:pt-4 overflow-x-hidden">
      {/* 1. Compact Hero Banner Carousel */}
      <HeroSection />

      {/* 2. Compact Quick Actions (2x2 grid on mobile) */}
      <QuickActions />

      {/* 3. Featured Listings (Grid) */}
      <FeaturedListings />

      {/* 4. Interstitial Promo Banner 1: Trust & Brand */}
      <PromoBanner
        title="Sell Without Extra Fees. Maximum Bachat!"
        subtitle="100% free to post listings. Zero platform fees and 0% brokerage on every deal."
        ctaText="Start Selling Free"
        ctaLink="/sell"
        theme="dark"
        badgeText="BechDal Promise"
        icon="shield"
      />

      {/* 5. Premium Ads (Grid) */}
      <PremiumAds />

      {/* 6. Interstitial Promo Banner 2: Category Promotion (Mobiles & Tech) */}
      <PromoBanner
        title="Upgrade Your Phone Without Overspending"
        subtitle="Explore pre-owned smartphones and laptops from verified local sellers near you."
        ctaText="Explore Mobiles"
        ctaLink="/category/mobiles"
        theme="blue"
        badgeText="Trending Category"
        icon="smartphone"
      />

      {/* 7. Category Product Grid: Mobiles & Electronics */}
      <CategoryProductGrid
        title="Trending Mobiles & Tech"
        subtitle="Top pre-owned gadgets and smartphones"
        categorySlug="mobiles"
        products={mobileListings}
      />

      {/* 8. Near You (Grid) */}
      <NearYou />

      {/* 9. Interstitial Promo Banner 3: Vehicles */}
      <PromoBanner
        title="Find Your Next Ride — Cars, Bikes & Scooters"
        subtitle="Direct deals from verified vehicle owners across Kolkata and West Bengal."
        ctaText="Explore Vehicles"
        ctaLink="/category/vehicles"
        theme="emerald"
        badgeText="Direct Deals"
        icon="car"
      />

      {/* 10. Category Product Grid: Vehicles & Bikes */}
      <CategoryProductGrid
        title="Vehicles, Bikes & Cars"
        subtitle="Inspected pre-owned vehicles from local sellers"
        categorySlug="vehicles"
        products={vehicleListings}
      />

      {/* 11. Verified Sellers */}
      <VerifiedSellers />

      {/* 12. FAQ Section */}
      <FAQSection />
    </div>
  );
}
