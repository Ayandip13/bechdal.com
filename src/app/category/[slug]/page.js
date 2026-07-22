import CategoryPageClient from "@/components/category/CategoryPageClient";
import { categoryDetails, categoryProducts } from "@/constants/categoryData";
import { featuredListings, premiumAds, nearYouAds } from "@/constants/dummyData";

// Dynamic Metadata Generator for SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const normalizedSlug = slug ? slug.toLowerCase() : "electronics";
  const category = categoryDetails[normalizedSlug];

  if (category) {
    return {
      title: `${category.title} - Buy & Sell on BechDal`,
      description: category.subtitle,
    };
  }

  // Format capitalized fallback for custom slugs
  const formattedTitle = normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1);
  return {
    title: `${formattedTitle} - BechDal Marketplace`,
    description: `Browse ${formattedTitle} listings on BechDal. Buy and sell directly with verified local buyers and sellers.`,
  };
}

export default async function DynamicCategoryPage({ params }) {
  const { slug } = await params;
  const normalizedSlug = slug ? slug.toLowerCase() : "electronics";

  // Check if we have exact category details
  let categoryInfo = categoryDetails[normalizedSlug];
  let products = categoryProducts[normalizedSlug];

  // Fallback for custom or unknown category slugs
  if (!categoryInfo) {
    const formattedTitle = normalizedSlug.charAt(0).toUpperCase() + normalizedSlug.slice(1);
    categoryInfo = {
      slug: normalizedSlug,
      title: formattedTitle,
      subtitle: `Explore pre-owned ${formattedTitle} listings at affordable prices`,
      icon: "Package",
      bannerGradient: "from-blue-600 to-indigo-700",
      subcategories: ["General Listings", "Verified Ads", "Trending Items"],
      brands: ["All Brands"],
    };
  }

  if (!products || products.length === 0) {
    // Combine homepage listings as realistic fallback items for unknown category
    products = [...featuredListings, ...premiumAds, ...nearYouAds].map((item, idx) => ({
      ...item,
      id: item.id + 5000,
      subcategory: categoryInfo.subcategories[idx % categoryInfo.subcategories.length],
      brand: "Marketplace",
      condition: "Excellent",
      sellerType: "Individual",
      isVerifiedSeller: true,
      isNegotiable: true,
      deliveryAvailable: true,
      rating: 4.8,
    }));
  }

  return (
    <CategoryPageClient
      categorySlug={normalizedSlug}
      initialCategory={categoryInfo}
      initialProducts={products}
    />
  );
}
