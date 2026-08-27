import Breadcrumb from "@/components/common/Breadcrumb";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductActions from "@/components/common/ProductActions";
import SellerCard from "@/components/seller/SellerCard";
import SafetyTips from "@/components/seller/SafetyTips";
import Description from "@/components/product/Description";
import SpecificationsTable from "@/components/product/SpecificationsTable";
import ProductCard from "@/components/cards/ProductCard";
import MoreOptionsListings from "@/components/product/MoreOptionsListings";

import { 
  productDetailsData, 
  featuredListings, 
  premiumAds, 
  nearYouAds, 
  categoryTemplates, 
  getCategoryByTitle 
} from "@/constants/dummyData";
import { ChevronRight, MessageSquare, Phone } from "lucide-react";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const allProducts = [...featuredListings, ...premiumAds, ...nearYouAds];
  const foundProduct = allProducts.find((p) => p.id.toString() === id?.toString());
  
  if (foundProduct) {
    return {
      title: `${foundProduct.title} | BechDal`,
      description: `Buy ${foundProduct.title} on BechDal.`,
    };
  }
  
  return {
    title: "Product Details | BechDal",
    description: "View product details on BechDal.",
  };
}

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;
  
  const allProducts = [...featuredListings, ...premiumAds, ...nearYouAds];
  const foundProduct = allProducts.find((p) => p.id.toString() === id?.toString());

  // Determine the category and get the template
  const categoryName = getCategoryByTitle(foundProduct?.title);
  const template = categoryTemplates[categoryName] || categoryTemplates['Mobile'];

  // Construct the dynamic product data
  const data = foundProduct 
    ? {
        ...foundProduct,
        images: [foundProduct.image, ...productDetailsData.images.slice(1, 4)],
        keyFeatures: template.keyFeatures,
        specifications: template.specifications,
        description: template.description,
        seller: productDetailsData.seller,
        rating: 4.5,
        reviewsCount: 34,
        interestedCount: Math.floor(Math.random() * 50) + 10,
        originalPrice: null,
        discount: null,
      }
    : productDetailsData;

  const breadcrumbItems = [
    { label: "Products", href: "#" },
    { label: data.title, href: null },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 lg:pb-12 flex flex-col gap-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Main Content Layout */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
        
        {/* Left Column - Gallery & Info */}
        <div className="w-full lg:w-[65%] flex flex-col gap-6">
          <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-subtle border border-border/50">
            <ProductGallery images={data.images} productData={data} />
          </div>

          {/* Desktop Description & Specs */}
          <div className="hidden lg:flex flex-col gap-6">
            <Description text={data.description} />
            <SpecificationsTable specifications={data.specifications} />
          </div>
        </div>

        {/* Right Column - Product Details, Actions, Seller */}
        <div className="w-full lg:w-[35%] flex flex-col gap-6 lg:sticky lg:top-4">
          <div className="bg-white rounded-2xl p-6 shadow-subtle border border-border/50">
            <ProductInfo data={data} />
            <ProductActions />
          </div>

          <SellerCard seller={data.seller} />
          <SafetyTips />
        </div>

      </div>

      {/* Mobile Description & Specs */}
      <div className="flex lg:hidden flex-col gap-6 mt-2">
        <Description text={data.description} />
        <SpecificationsTable specifications={data.specifications} />
      </div>

      {/* More Options / Alternatives comparisons */}
      <div className="mt-6">
        <MoreOptionsListings productTitle={data.title} currentProductPrice={data.price} />
      </div>

      {/* Similar Products */}
      <div className="mt-8">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-text">Similar Products</h2>
          <button className="flex items-center gap-1 text-primary text-sm font-semibold hover:text-primary-dark transition-colors whitespace-nowrap">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="relative group/similar">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {featuredListings.map((listing) => (
              <div key={listing.id} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px]">
                <ProductCard {...listing} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div className="mt-4">
        <div className="flex items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold text-text">Recently Viewed</h2>
        </div>
        <div className="relative group/recent">
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-4 snap-x">
            {nearYouAds.map((listing) => (
              <div key={listing.id} className="snap-start shrink-0 w-[240px] sm:w-[260px] md:w-[280px]">
                <ProductCard {...listing} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom Actions for Mobile/Tablet */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-slate-200 p-3.5 shadow-[0_-4px_10px_rgba(0,0,0,0.06)] flex items-center justify-between gap-3 px-4">
        <button className="flex-1 btn-primary gap-2 h-11">
          <MessageSquare className="w-5 h-5 flex-shrink-0" />
          <span>Chat</span>
        </button>
        <button className="flex-1 btn-outline gap-2 h-11">
          <Phone className="w-5 h-5 flex-shrink-0" />
          <span>Call Seller</span>
        </button>
      </div>

    </div>
  );
}
