import { verifiedSellers, featuredListings, premiumAds, nearYouAds } from "@/constants/dummyData";
import { categoryProducts } from "@/constants/categoryData";
import SellerProfileClient from "./SellerProfileClient";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const seller = verifiedSellers.find((s) => s.id.toString() === id?.toString()) || verifiedSellers[0];

  return {
    title: `${seller?.name || "Seller Profile"} | Verified Seller | BechDal`,
    description: `Browse items, reviews, and verified details for ${seller?.name} on BechDal.`,
  };
}

export default async function SellerProfilePage({ params }) {
  const { id } = await params;

  // Find seller by id or fallback to first seller
  const seller = verifiedSellers.find((s) => s.id.toString() === id?.toString()) || verifiedSellers[0];

  // Category mapping based on seller
  let sellerProducts = [];
  const sellerNameLower = (seller?.name || "").toLowerCase();

  if (sellerNameLower.includes("tech") || sellerNameLower.includes("gadget") || sellerNameLower.includes("mobile")) {
    sellerProducts = [
      ...(categoryProducts["mobiles"] || []),
      ...(categoryProducts["electronics"] || []),
    ];
  } else if (sellerNameLower.includes("bike") || sellerNameLower.includes("car") || sellerNameLower.includes("auto")) {
    sellerProducts = [...(categoryProducts["vehicles"] || [])];
  } else if (sellerNameLower.includes("propert")) {
    sellerProducts = [...(categoryProducts["properties"] || [])];
  } else if (sellerNameLower.includes("fashion")) {
    sellerProducts = [...(categoryProducts["fashion"] || [])];
  } else if (sellerNameLower.includes("furniture")) {
    sellerProducts = [...(categoryProducts["furniture"] || [])];
  } else if (sellerNameLower.includes("gym") || sellerNameLower.includes("fit")) {
    sellerProducts = [...(categoryProducts["gym-equipments"] || [])];
  } else if (sellerNameLower.includes("book")) {
    sellerProducts = [...(categoryProducts["books"] || [])];
  }

  // If specific products are too few, supplement with featured/premium listings
  if (sellerProducts.length < 4) {
    const backupList = [...featuredListings, ...premiumAds, ...nearYouAds];
    sellerProducts = [...sellerProducts, ...backupList.slice(0, 8 - sellerProducts.length)];
  }

  return <SellerProfileClient seller={seller} products={sellerProducts} />;
}
