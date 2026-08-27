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
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 pt-4">
      <HeroSection />
      <QuickActions />
      
      {/* Trust & Brand Value Proposition Section */}
      <section className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-md">
        <div className="absolute right-0 top-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left flex-1">
            <span className="text-secondary font-black uppercase text-[10px] tracking-widest bg-slate-800 px-3 py-1 rounded-full">
              BechDal Promise
            </span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight mt-3 text-white leading-tight">
              Maximum Bachat. No Hidden Charges. No Platform Fees.
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 leading-relaxed font-semibold">
              We connect local buyers and sellers directly. Unlike other listing platforms, BechDal is 100% free. 
              No commissions, no hidden posting fees, and zero brokerage. Keep 100% of your earnings!
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 sm:gap-3 shrink-0">
            <div className="bg-slate-850 border border-slate-800 rounded-xl p-3 flex flex-col text-center w-24 sm:w-28 shadow-2xs">
              <span className="text-secondary text-lg sm:text-xl font-black">₹0</span>
              <span className="text-[9px] text-slate-400 font-extrabold mt-1 uppercase tracking-wider">Listing Fee</span>
            </div>
            <div className="bg-slate-855 border border-slate-800 rounded-xl p-3 flex flex-col text-center w-24 sm:w-28 shadow-2xs">
              <span className="text-secondary text-lg sm:text-xl font-black">0%</span>
              <span className="text-[9px] text-slate-400 font-extrabold mt-1 uppercase tracking-wider">Commissions</span>
            </div>
            <div className="bg-slate-855 border border-slate-800 rounded-xl p-3 flex flex-col text-center w-24 sm:w-28 shadow-2xs">
              <span className="text-secondary text-lg sm:text-xl font-black">100%</span>
              <span className="text-[9px] text-slate-400 font-extrabold mt-1 uppercase tracking-wider">Direct Deals</span>
            </div>
          </div>
        </div>
      </section>

      <PopularCategories />
      <FeaturedListings />
      <PremiumAds />
      <div className="flex flex-col lg:flex-row gap-8">
        <NearYou />
      </div>
      <VerifiedSellers />
      <FAQSection />
    </div>
  );
}
