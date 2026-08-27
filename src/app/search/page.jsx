"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { categoryDetails, categoryProducts } from "@/constants/categoryData";
import { featuredListings, premiumAds, nearYouAds } from "@/constants/dummyData";
import ProductCard from "@/components/cards/ProductCard";
import FilterSidebar from "@/components/category/FilterSidebar";
import FilterDrawer from "@/components/category/FilterDrawer";
import SortDropdown from "@/components/category/SortDropdown";
import EmptyState from "@/components/category/EmptyState";
import Breadcrumb from "@/components/common/Breadcrumb";
import MoreOptionsListings from "@/components/product/MoreOptionsListings";
import { SlidersHorizontal, Search, Star, Sparkles } from "lucide-react";

function SearchPageContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const categoryParam = searchParams.get("category") || "all";

  // Filter States
  const [searchQuery, setSearchQuery] = useState(query);
  const [selectedSort, setSelectedSort] = useState("relevance");
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(8);

  const [filters, setFilters] = useState({
    subcategories: [],
    minPrice: "",
    maxPrice: "",
    locations: [],
    conditions: [],
    brands: [],
    postedWithin: "",
    sellerTypes: [],
    verifiedSeller: false,
    negotiable: false,
    deliveryAvailable: false,
    minRating: null,
  });

  // Reset filters if category changes or query changes
  useEffect(() => {
    setSearchQuery(query);
    setFilters({
      subcategories: [],
      minPrice: "",
      maxPrice: "",
      locations: [],
      conditions: [],
      brands: [],
      postedWithin: "",
      sellerTypes: [],
      verifiedSeller: false,
      negotiable: false,
      deliveryAvailable: false,
      minRating: null,
    });
  }, [query, categoryParam]);

  // Aggregate all mock products
  const allProducts = useMemo(() => {
    let list = [];
    if (categoryParam !== "all" && categoryProducts[categoryParam]) {
      list = categoryProducts[categoryParam];
    } else {
      // Pull products from all categories
      Object.keys(categoryProducts).forEach((key) => {
        list = [...list, ...categoryProducts[key]];
      });
    }

    // Include homepage ads to guarantee a robust catalog
    const homeAds = [...featuredListings, ...premiumAds, ...nearYouAds].map(item => ({
      ...item,
      subcategory: item.subcategory || "General",
      brand: item.brand || "Generic",
      condition: item.condition || "Excellent",
      sellerType: item.sellerType || "Individual",
      isVerifiedSeller: item.isVerifiedSeller || item.badge === "Verified",
      isNegotiable: item.isNegotiable || false,
      deliveryAvailable: item.deliveryAvailable || true,
      rating: item.rating || 4.5
    }));

    // Deduplicate by ID
    const uniqueMap = {};
    [...list, ...homeAds].forEach(item => {
      uniqueMap[item.id] = item;
    });

    return Object.values(uniqueMap);
  }, [categoryParam]);

  // Filter products based on search term & filter choices
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Search Query text matching
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(q);
        const matchesLocation = product.location.toLowerCase().includes(q);
        const matchesBrand = product.brand?.toLowerCase().includes(q);
        const matchesSubcat = product.subcategory?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocation && !matchesBrand && !matchesSubcat) {
          return false;
        }
      }

      // Filter subcategories
      if (filters.subcategories.length > 0) {
        if (!product.subcategory || !filters.subcategories.includes(product.subcategory)) {
          return false;
        }
      }

      // Price Range Filter
      const parsePrice = (p) => parseInt(p.toString().replace(/[^0-9]/g, ""), 10) || 0;
      const numPrice = parsePrice(product.price);
      if (filters.minPrice && numPrice < parseInt(filters.minPrice, 10)) {
        return false;
      }
      if (filters.maxPrice && numPrice > parseInt(filters.maxPrice, 10)) {
        return false;
      }

      // Location Filter
      if (filters.locations.length > 0) {
        const matchesLoc = filters.locations.some((loc) =>
          product.location.toLowerCase().includes(loc.toLowerCase())
        );
        if (!matchesLoc) return false;
      }

      // Condition Filter
      if (filters.conditions.length > 0) {
        if (!product.condition || !filters.conditions.includes(product.condition)) {
          return false;
        }
      }

      // Brand Filter
      if (filters.brands.length > 0) {
        if (!product.brand || !filters.brands.includes(product.brand)) {
          return false;
        }
      }

      // Seller Verified
      if (filters.verifiedSeller && !product.isVerifiedSeller) {
        return false;
      }

      // Negotiable
      if (filters.negotiable && !product.isNegotiable) {
        return false;
      }

      // Delivery Available
      if (filters.deliveryAvailable && !product.deliveryAvailable) {
        return false;
      }

      return true;
    });
  }, [allProducts, query, filters]);

  // Sort products
  const sortedProducts = useMemo(() => {
    const parsePrice = (p) => parseInt(p.toString().replace(/[^0-9]/g, ""), 10) || 0;
    const list = [...filteredProducts];
    switch (selectedSort) {
      case "price_asc":
        return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case "price_desc":
        return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case "newest":
        return list.reverse(); // Mock reverse chronological order
      case "popular":
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "featured":
        return list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      case "relevance":
      default:
        return list;
    }
  }, [filteredProducts, selectedSort]);

  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.subcategories.length > 0) count += filters.subcategories.length;
    if (filters.minPrice || filters.maxPrice) count += 1;
    if (filters.locations.length > 0) count += filters.locations.length;
    if (filters.conditions.length > 0) count += filters.conditions.length;
    if (filters.brands.length > 0) count += filters.brands.length;
    if (filters.verifiedSeller) count += 1;
    if (filters.negotiable) count += 1;
    if (filters.deliveryAvailable) count += 1;
    return count;
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setVisibleCount(8);
  };

  const handleResetFilters = () => {
    setFilters({
      subcategories: [],
      minPrice: "",
      maxPrice: "",
      locations: [],
      conditions: [],
      brands: [],
      postedWithin: "",
      sellerTypes: [],
      verifiedSeller: false,
      negotiable: false,
      deliveryAvailable: false,
      minRating: null,
    });
    setVisibleCount(8);
  };

  const categoryInfo = useMemo(() => {
    if (categoryParam !== "all" && categoryDetails[categoryParam]) {
      return categoryDetails[categoryParam];
    }
    return {
      title: "All Categories",
      subcategories: Array.from(new Set(allProducts.map(p => p.subcategory))),
      brands: Array.from(new Set(allProducts.map(p => p.brand).filter(Boolean))),
    };
  }, [categoryParam, allProducts]);

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-12 flex flex-col gap-6">
      
      {/* Breadcrumb */}
      <Breadcrumb items={[{ label: "Search Results", href: null }]} />

      {/* Page Title / Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 flex items-center gap-2">
            Search Results for <span className="text-primary font-black">"{query || "All Products"}"</span>
          </h2>
          <p className="text-xs text-text-muted mt-1 font-bold">
            Found {sortedProducts.length} listings in {categoryInfo.title}
          </p>
        </div>

        {/* Toolbar Sort */}
        <div className="flex items-center gap-3 justify-between md:justify-end">
          <button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-text hover:bg-slate-100 transition-colors"
          >
            <SlidersHorizontal size={14} className="text-primary" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-primary text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-text-muted hidden sm:inline">Sort By:</span>
            <SortDropdown selected={selectedSort} onChange={setSelectedSort} />
          </div>
        </div>
      </div>

      {/* Main Grid Layout */}
      <div className="flex gap-6 lg:gap-8 items-start">
        
        {/* Desktop Sidebar Filters */}
        <div className="hidden lg:block w-[280px] shrink-0">
          <FilterSidebar
            categoryInfo={categoryInfo}
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            activeFilterCount={activeFilterCount}
          />
        </div>

        {/* Products Listing */}
        <div className="flex-1 w-full flex flex-col gap-6">
          
          {/* Matches & alternatives recommendation block */}
          {query && sortedProducts.length > 0 && (
            <div className="mb-2">
              <MoreOptionsListings productTitle={query} currentProductPrice={sortedProducts[0]?.price} />
            </div>
          )}

          {/* Actual listings grid */}
          {sortedProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 w-full">
                {sortedProducts.slice(0, visibleCount).map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {visibleCount < sortedProducts.length && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setVisibleCount(prev => prev + 8)}
                    className="px-6 py-2.5 bg-slate-100 border border-border text-xs font-bold text-text hover:bg-slate-200 transition-colors rounded-xl cursor-pointer"
                  >
                    Load More Results
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="flex flex-col">
              <EmptyState 
                title="No results matched your search"
                subtitle="Try checking your spelling, using more general keywords, or resetting your filter choices."
                onReset={handleResetFilters}
              />
            </div>
          )}

        </div>

      </div>

      {/* Mobile Filter Drawer */}
      <FilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        categoryInfo={categoryInfo}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        activeFilterCount={activeFilterCount}
        totalResults={sortedProducts.length}
      />

    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="max-w-[1400px] mx-auto p-12 text-center text-xs font-bold text-text-muted animate-pulse flex items-center justify-center gap-2">
        <Search size={16} className="animate-bounce" /> Loading Search Results...
      </div>
    }>
      <SearchPageContent />
    </Suspense>
  );
}
