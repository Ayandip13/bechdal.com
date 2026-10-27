"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  Star, 
  MapPin, 
  CalendarDays, 
  ShieldCheck, 
  MessageSquare, 
  Phone, 
  Share2, 
  Check, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal,
  Clock,
  ThumbsUp,
  Package,
  Award,
  ChevronRight,
  BadgeCheck
} from "lucide-react";
import ProductCard from "@/components/cards/ProductCard";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function SellerProfileClient({ seller, products = [] }) {
  const [activeTab, setActiveTab] = useState("listings");
  const [isFollowing, setIsFollowing] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered and sorted listings
  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title?.toLowerCase().includes(q) ||
          p.location?.toLowerCase().includes(q) ||
          p.price?.toString().includes(q)
      );
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => {
        const pa = parseInt(a.price?.toString().replace(/[^0-9]/g, "") || "0");
        const pb = parseInt(b.price?.toString().replace(/[^0-9]/g, "") || "0");
        return pa - pb;
      });
    } else if (sortBy === "price-high") {
      result.sort((a, b) => {
        const pa = parseInt(a.price?.toString().replace(/[^0-9]/g, "") || "0");
        const pb = parseInt(b.price?.toString().replace(/[^0-9]/g, "") || "0");
        return pb - pa;
      });
    }

    return result;
  }, [products, searchQuery, sortBy]);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const breadcrumbItems = [
    { label: "Verified Sellers", href: "/#verified-sellers" },
    { label: seller.name, href: null },
  ];

  // Dummy customer reviews for this seller
  const reviews = [
    {
      id: 1,
      author: "Rahul Verma",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=120&auto=format&fit=crop",
      rating: 5,
      date: "2 days ago",
      comment: "Genius seller! The item condition was 100% as described, very polite in conversation and completed the deal in 20 minutes.",
      itemBought: products[0]?.title || "Premium Listing",
      verified: true
    },
    {
      id: 2,
      author: "Sneha Mukherjee",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop",
      rating: 5,
      date: "1 week ago",
      comment: "Super smooth deal. Let me test everything thoroughly before payment. Genuine verified seller on BechDal!",
      itemBought: products[1]?.title || "Electronic Item",
      verified: true
    },
    {
      id: 3,
      author: "Amitava Das",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=120&auto=format&fit=crop",
      rating: 4,
      date: "3 weeks ago",
      comment: "Great experience. Prompt response on chat and gave a fair price negotiation.",
      itemBought: products[2]?.title || "Vehicle Accessory",
      verified: true
    }
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-20 pt-2 flex flex-col gap-6">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Hero Banner & Seller Header Card */}
      <div className="bg-white dark:bg-slate-800/90 rounded-3xl border border-slate-200/80 dark:border-slate-700/80 shadow-subtle overflow-hidden transition-colors">
        
        {/* Cover Pattern Header */}
        <div className="h-36 sm:h-48 md:h-56 w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
          
          {/* Share Button top right */}
          <div className="absolute top-4 right-4 z-10">
            <button
              onClick={handleShare}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5 transition-all cursor-pointer border border-white/20"
            >
              {copiedLink ? <Check size={14} className="text-emerald-300" /> : <Share2 size={14} />}
              <span>{copiedLink ? "Link Copied!" : "Share Profile"}</span>
            </button>
          </div>
        </div>

        {/* Profile Info Section */}
        <div className="px-5 sm:px-8 pb-6 pt-0 relative">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 -mt-14 sm:-mt-16 mb-6">
            
            {/* Avatar & Basic Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4 sm:gap-6">
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-700 border-4 border-white dark:border-slate-800 shadow-lg">
                  <img
                    src={seller.avatar}
                    alt={seller.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online Indicator */}
                <div className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-slate-800 rounded-full shadow-xs" title="Online recently" />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                    {seller.name}
                  </h1>
                  {seller.isVerified && (
                    <div className="inline-flex items-center gap-1 bg-blue-50 dark:bg-blue-950/50 text-primary dark:text-blue-400 px-2.5 py-0.5 rounded-full text-xs font-bold border border-blue-200 dark:border-blue-800/60">
                      <BadgeCheck size={14} className="text-primary dark:text-blue-400" />
                      <span>Verified Business</span>
                    </div>
                  )}
                </div>

                {/* Rating & Location Meta */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-2">
                  <div className="flex items-center gap-1">
                    <div className="flex items-center text-amber-500">
                      <Star size={15} className="fill-amber-500" />
                    </div>
                    <span className="font-bold text-slate-800 dark:text-slate-200">{seller.rating}</span>
                    <span>({seller.reviewsCount} reviews)</span>
                  </div>
                  <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full hidden sm:block" />
                  <div className="flex items-center gap-1">
                    <MapPin size={14} className="text-slate-400" />
                    <span>{seller.location}, India</span>
                  </div>
                  <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full hidden sm:block" />
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} className="text-slate-400" />
                    <span>Member since {seller.joinedSince}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
              <button
                onClick={() => setIsFollowing((prev) => !prev)}
                className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-xs ${
                  isFollowing
                    ? "bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600"
                    : "bg-primary dark:bg-blue-600 text-white hover:bg-primary-dark"
                }`}
              >
                {isFollowing ? <Check size={15} /> : null}
                <span>{isFollowing ? "Following" : "+ Follow Seller"}</span>
              </button>

              <Link
                href="/inbox"
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-white dark:bg-slate-700/60 border border-slate-300 dark:border-slate-600 text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <MessageSquare size={15} className="text-primary dark:text-blue-400" />
                <span>Chat</span>
              </Link>

              <button
                onClick={() => setShowPhone((prev) => !prev)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Phone size={15} className="text-emerald-600 dark:text-emerald-400" />
                <span>{showPhone ? "+91 98300 24190" : "Show Phone"}</span>
              </button>
            </div>
          </div>

          {/* Description / Bio */}
          {seller.description && (
            <div className="bg-slate-50/80 dark:bg-slate-900/50 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
              <span className="font-semibold text-slate-900 dark:text-white">About this seller: </span>
              {seller.description}
            </div>
          )}

          {/* Trust Metrics Pill Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Package size={14} className="text-primary dark:text-blue-400" />
                <span>Active Listings</span>
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                {seller.totalListings || products.length}
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <ThumbsUp size={14} className="text-emerald-600 dark:text-emerald-400" />
                <span>Positive Rating</span>
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                98.4%
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Clock size={14} className="text-indigo-500 dark:text-indigo-400" />
                <span>Response Time</span>
              </div>
              <span className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                &lt; 15 mins
              </span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/60 p-3 sm:p-4 rounded-2xl border border-slate-200/70 dark:border-slate-700/60 flex flex-col">
              <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                <Award size={14} className="text-amber-500" />
                <span>Verification</span>
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-emerald-600 dark:text-emerald-400 flex items-center gap-1 mt-1">
                <CheckCircle2 size={15} /> 100% Verified
              </span>
            </div>
          </div>

        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-6 px-5 sm:px-8 border-t border-slate-200/80 dark:border-slate-700/80 bg-slate-50/50 dark:bg-slate-900/30">
          <button
            onClick={() => setActiveTab("listings")}
            className={`py-3.5 sm:py-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "listings"
                ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
                : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Active Listings</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-200 dark:bg-slate-700 font-extrabold text-slate-700 dark:text-slate-200">
              {filteredProducts.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`py-3.5 sm:py-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "reviews"
                ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
                : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Customer Reviews</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] bg-slate-200 dark:bg-slate-700 font-extrabold text-slate-700 dark:text-slate-200">
              {seller.reviewsCount || reviews.length}
            </span>
          </button>

          <button
            onClick={() => setActiveTab("about")}
            className={`py-3.5 sm:py-4 text-xs sm:text-sm font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === "about"
                ? "border-primary text-primary dark:text-blue-400 dark:border-blue-400"
                : "border-transparent text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
            }`}
          >
            <span>Verification & Trust</span>
          </button>
        </div>

      </div>

      {/* Main Content Area based on Tab */}
      {activeTab === "listings" && (
        <div className="flex flex-col gap-6">
          {/* Search & Sort Bar inside seller items */}
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-3 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search in ${seller.name}'s items...`}
                className="w-full bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-slate-900 dark:text-white rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm focus:outline-none focus:border-primary dark:focus:border-blue-400"
              />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-2.5 w-full sm:w-auto">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                Showing {filteredProducts.length} items
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700/80 text-slate-800 dark:text-slate-200 text-xs rounded-xl px-3 py-2 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-full">
                  <ProductCard {...product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-12 border border-slate-200/80 dark:border-slate-700/80 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-400">
                <Search size={24} />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                No listings matched your search
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm">
                Try searching with different keywords or clear the search query to see all products from this seller.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-2 text-xs font-bold text-primary dark:text-blue-400 hover:underline cursor-pointer"
              >
                Clear Search Filter
              </button>
            </div>
          )}
        </div>
      )}

      {/* Customer Reviews Tab */}
      {activeTab === "reviews" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Summary Box */}
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col gap-5 h-fit">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Ratings Summary</h3>
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black text-slate-900 dark:text-white">
                {seller.rating}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-amber-500" />
                  ))}
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Based on {seller.reviewsCount} verified reviews
                </span>
              </div>
            </div>

            {/* Rating breakdown bars */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-200/80 dark:border-slate-700/80 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-12 text-slate-500 font-medium">5 Star</span>
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[88%]" />
                </div>
                <span className="w-8 text-right font-bold text-slate-700 dark:text-slate-300">88%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-slate-500 font-medium">4 Star</span>
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[10%]" />
                </div>
                <span className="w-8 text-right font-bold text-slate-700 dark:text-slate-300">10%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-12 text-slate-500 font-medium">3 Star</span>
                <div className="flex-1 bg-slate-100 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full w-[2%]" />
                </div>
                <span className="w-8 text-right font-bold text-slate-700 dark:text-slate-300">2%</span>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.avatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
                    />
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-slate-900 dark:text-white text-sm">{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.2 rounded font-bold flex items-center gap-0.5">
                            <CheckCircle2 size={10} /> Verified Deal
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400">{rev.date}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-500" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  "{rev.comment}"
                </p>

                <div className="text-[11px] text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/60">
                  Purchased: <span className="font-semibold text-slate-800 dark:text-slate-200">{rev.itemBought}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Verification & Trust Tab */}
      {activeTab === "about" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="text-emerald-600 dark:text-emerald-400" size={20} />
              Identity & Trust Badges
            </h3>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Government ID Verified</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Official Aadhaar / PAN identity document successfully verified.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Phone & Email Verified</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Direct OTP verification on registered Indian mobile and email.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-700/60">
                <CheckCircle2 className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" size={16} />
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Physical Store / Local Address Confirmed</span>
                  <span className="text-slate-500 dark:text-slate-400 text-xs">Seller is based in {seller.location}, India with verified business presence.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl p-6 border border-emerald-100 dark:border-emerald-800/40 flex flex-col gap-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-emerald-100 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-600 dark:text-emerald-400" size={18} />
              Tips for Safe Transacting
            </h3>

            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Chat directly on BechDal chat to maintain an official transcript of messages.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Meet in a public location or inspect goods thoroughly before handing over money.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check size={16} className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>Never transfer advance money before receiving and verifying the physical product.</span>
              </li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
}
