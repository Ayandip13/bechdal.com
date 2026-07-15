import HeroSection from "@/components/hero/HeroSection";
import QuickActions from "@/components/hero/QuickActions";
import PopularCategories from "@/components/categories/PopularCategories";
import FeaturedListings from "@/components/product/FeaturedListings";
import PremiumAds from "@/components/product/PremiumAds";
import NearYou from "@/components/product/NearYou";
import VerifiedSellers from "@/components/sellers/VerifiedSellers";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import FAQSection from "@/components/faq/FAQSection";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8">
      <HeroSection />
      <QuickActions />
      <PopularCategories />
      <FeaturedListings />
      <PremiumAds />
      <div className="flex flex-col lg:flex-row gap-8">
        <NearYou />
        {/* Empty div to balance layout if Trending Now was to be added here, but not needed as flex-1 is on NearYou */}
      </div>
      <VerifiedSellers />
      <TestimonialsSection />
      <FAQSection />
    </div>
  );
}
