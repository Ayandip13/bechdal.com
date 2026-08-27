"use client";

import { useState, useMemo } from "react";
import CategoryHero from "./CategoryHero";
import FilterSidebar from "./FilterSidebar";
import FilterDrawer from "./FilterDrawer";
import SortDropdown from "./SortDropdown";
import ProductGrid from "./ProductGrid";
import EmptyState from "./EmptyState";
import LoadMoreButton from "./LoadMoreButton";
import PopularSearches from "./PopularSearches";
import RecentlyViewed from "./RecentlyViewed";
import Breadcrumb from "@/components/common/Breadcrumb";
import { Filter, Search, X, SlidersHorizontal } from "lucide-react";

export default function CategoryPageClient({ categorySlug, initialCategory, initialProducts }) {
  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSort, setSelectedSort] = useState("newest");
  const [visibleCount, setVisibleCount] = useState(8);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);

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
    storage: [],
    ram: [],
    fuelTypes: [],
    transmissions: [],
    furnishings: [],
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
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
      storage: [],
      ram: [],
      fuelTypes: [],
      transmissions: [],
      furnishings: [],
    });
    setSearchQuery("");
    setSelectedSort("newest");
    setVisibleCount(8);
  };

  // Helper to parse price string e.g. "74,999" -> 74999
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const clean = priceStr.toString().replace(/[^0-9]/g, "");
    return parseInt(clean, 10) || 0;
  };

  // Compute Active Filter Count
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.subcategories.length > 0) count += filters.subcategories.length;
    if (filters.minPrice || filters.maxPrice) count += 1;
    if (filters.locations.length > 0) count += filters.locations.length;
    if (filters.conditions.length > 0) count += filters.conditions.length;
    if (filters.brands.length > 0) count += filters.brands.length;
    if (filters.postedWithin) count += 1;
    if (filters.sellerTypes.length > 0) count += filters.sellerTypes.length;
    if (filters.verifiedSeller) count += 1;
    if (filters.negotiable) count += 1;
    if (filters.deliveryAvailable) count += 1;
    if (filters.minRating) count += 1;
    if (searchQuery) count += 1;
    return count;
  }, [filters, searchQuery]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return initialProducts.filter((product) => {
      // Search Query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = product.title.toLowerCase().includes(q);
        const matchesLocation = product.location.toLowerCase().includes(q);
        const matchesBrand = product.brand?.toLowerCase().includes(q);
        const matchesSubcat = product.subcategory?.toLowerCase().includes(q);
        if (!matchesTitle && !matchesLocation && !matchesBrand && !matchesSubcat) {
          return false;
        }
      }

      // Subcategories
      if (filters.subcategories.length > 0) {
        if (!product.subcategory || !filters.subcategories.includes(product.subcategory)) {
          return false;
        }
      }

      // Price Range
      const numPrice = parsePrice(product.price);
      if (filters.minPrice && numPrice < parseInt(filters.minPrice, 10)) {
        return false;
      }
      if (filters.maxPrice && numPrice > parseInt(filters.maxPrice, 10)) {
        return false;
      }

      // Locations
      if (filters.locations.length > 0) {
        const matchesLoc = filters.locations.some((loc) =>
          product.location.toLowerCase().includes(loc.split(",")[0].toLowerCase())
        );
        if (!matchesLoc) return false;
      }

      // Conditions
      if (filters.conditions.length > 0) {
        if (!product.condition || !filters.conditions.includes(product.condition)) {
          return false;
        }
      }

      // Brands
      if (filters.brands.length > 0) {
        if (!product.brand || !filters.brands.includes(product.brand)) {
          return false;
        }
      }

      // Seller Types
      if (filters.sellerTypes.length > 0) {
        if (!product.sellerType || !filters.sellerTypes.includes(product.sellerType)) {
          return false;
        }
      }

      // Verified Seller
      if (filters.verifiedSeller && !product.isVerifiedSeller && product.badge !== "Verified") {
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

      // Min Rating
      if (filters.minRating && (product.rating || 0) < filters.minRating) {
        return false;
      }

      // Dynamic Mobiles Specs check
      if (filters.storage?.length > 0) {
        const matchesStorage = filters.storage.some(st => 
          product.title.toLowerCase().includes(st.toLowerCase()) || 
          product.storage?.toString().toLowerCase().includes(st.toLowerCase())
        );
        if (!matchesStorage) return false;
      }
      if (filters.ram?.length > 0) {
        const matchesRam = filters.ram.some(rm => 
          product.title.toLowerCase().includes(rm.toLowerCase()) || 
          product.ram?.toString().toLowerCase().includes(rm.toLowerCase())
        );
        if (!matchesRam) return false;
      }

      // Dynamic Vehicles Specs check
      if (filters.fuelTypes?.length > 0) {
        const matchesFuel = filters.fuelTypes.some(ft => 
          product.fuelType?.toLowerCase() === ft.toLowerCase() ||
          product.title.toLowerCase().includes(ft.toLowerCase())
        );
        if (!matchesFuel) return false;
      }
      if (filters.transmissions?.length > 0) {
        const matchesTrans = filters.transmissions.some(tr => 
          product.transmission?.toLowerCase() === tr.toLowerCase() ||
          product.title.toLowerCase().includes(tr.toLowerCase())
        );
        if (!matchesTrans) return false;
      }

      // Dynamic Properties Specs check
      if (filters.furnishings?.length > 0) {
        const matchesFurnish = filters.furnishings.some(fn => 
          product.furnished?.toLowerCase() === fn.toLowerCase() ||
          product.title.toLowerCase().includes(fn.toLowerCase())
        );
        if (!matchesFurnish) return false;
      }

      return true;
    });
  }, [initialProducts, filters, searchQuery]);

  // Apply Sorting
  const sortedProducts = useMemo(() => {
    const list = [...filteredProducts];
    switch (selectedSort) {
      case "price_asc":
        return list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
      case "price_desc":
        return list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
      case "most_viewed":
      case "popular":
        return list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case "featured":
        return list.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0));
      case "premium":
        return list.sort((a, b) => (b.isPremium ? 1 : 0) - (a.isPremium ? 1 : 0));
      case "nearest":
        return list.sort((a, b) => (a.location.includes("Kolkata") ? -1 : 1));
      case "newest":
      default:
        return list;
    }
  }, [filteredProducts, selectedSort]);

  const displayedProducts = sortedProducts.slice(0, visibleCount);

  const breadcrumbItems = [
    { label: "Categories", href: "/#categories" },
    { label: initialCategory.title, href: null },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 flex flex-col gap-6">
      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />

      {/* Category Hero */}
      <CategoryHero category={initialCategory} totalCount={initialProducts.length} />

      {/* Filter & Sort Toolbar */}
      <div className="bg-white rounded-2xl p-4 shadow-subtle border border-border/70 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search Inside Category & Mobile Filter Button */}
        <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
          <button
            type="button"
            onClick={() => setIsMobileDrawerOpen(true)}
            className="lg:hidden inline-flex items-center gap-2 px-3 py-2 bg-slate-100 border border-border rounded-xl text-xs font-bold text-text hover:bg-slate-200 transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            <span>Filters</span>
            {activeFilterCount > 0 && (
              <span className="bg-primary text-white text-[10px] font-extrabold px-1.5 py-0.5 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>

          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search in ${initialCategory.title}...`}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(8);
              }}
              className="w-full pl-9 pr-8 py-2 text-xs sm:text-sm bg-slate-50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-text font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Results Counter & Sort Dropdown */}
        <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-border">
          <span className="text-xs text-text-muted font-medium">
            Showing <strong className="text-text">{sortedProducts.length}</strong> results
          </span>

          <SortDropdown selectedSort={selectedSort} onSortChange={setSelectedSort} />
        </div>
      </div>

      {/* Active Filter Chips */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <span className="text-xs text-text-muted font-semibold mr-1">Active Filters:</span>
          {searchQuery && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-semibold rounded-full">
              Search: "{searchQuery}"
              <X className="w-3 h-3 cursor-pointer hover:text-primary-dark" onClick={() => setSearchQuery("")} />
            </span>
          )}
          {filters.subcategories.map((sub) => (
            <span key={sub} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-text text-xs font-medium rounded-full">
              {sub}
              <X className="w-3 h-3 cursor-pointer text-text-muted hover:text-text" onClick={() => handleFilterChange("subcategories", filters.subcategories.filter((s) => s !== sub))} />
            </span>
          ))}
          {filters.locations.map((loc) => (
            <span key={loc} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-text text-xs font-medium rounded-full">
              {loc}
              <X className="w-3 h-3 cursor-pointer text-text-muted hover:text-text" onClick={() => handleFilterChange("locations", filters.locations.filter((l) => l !== loc))} />
            </span>
          ))}
          {filters.conditions.map((cond) => (
            <span key={cond} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-text text-xs font-medium rounded-full">
              {cond}
              <X className="w-3 h-3 cursor-pointer text-text-muted hover:text-text" onClick={() => handleFilterChange("conditions", filters.conditions.filter((c) => c !== cond))} />
            </span>
          ))}
          {filters.brands.map((brand) => (
            <span key={brand} className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 text-text text-xs font-medium rounded-full">
              {brand}
              <X className="w-3 h-3 cursor-pointer text-text-muted hover:text-text" onClick={() => handleFilterChange("brands", filters.brands.filter((b) => b !== brand))} />
            </span>
          ))}
          {filters.verifiedSeller && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold rounded-full">
              Verified Sellers
              <X className="w-3 h-3 cursor-pointer hover:text-emerald-900" onClick={() => handleFilterChange("verifiedSeller", false)} />
            </span>
          )}

          <button
            type="button"
            onClick={handleResetFilters}
            className="text-xs font-bold text-primary hover:underline ml-2"
          >
            Clear All
          </button>
        </div>
      )}

      {/* Main Content Layout: Left Sticky Sidebar + Product Grid */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Desktop Left Sticky Sidebar */}
        <div className="hidden lg:block w-64 shrink-0 sticky top-4">
          <FilterSidebar
            categoryInfo={initialCategory}
            filters={filters}
            onFilterChange={handleFilterChange}
            onResetFilters={handleResetFilters}
            activeFilterCount={activeFilterCount}
          />
        </div>

        {/* Right Main Grid Area */}
        <div className="flex-1 w-full min-w-0">
          {displayedProducts.length > 0 ? (
            <>
              <ProductGrid products={displayedProducts} />
              <LoadMoreButton
                currentCount={displayedProducts.length}
                totalCount={sortedProducts.length}
                hasMore={displayedProducts.length < sortedProducts.length}
                onLoadMore={() => setVisibleCount((prev) => prev + 8)}
              />
            </>
          ) : (
            <EmptyState
              onResetFilters={handleResetFilters}
              currentCategorySlug={categorySlug}
            />
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <FilterDrawer
        isOpen={isMobileDrawerOpen}
        onClose={() => setIsMobileDrawerOpen(false)}
        categoryInfo={initialCategory}
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        activeFilterCount={activeFilterCount}
        totalResults={sortedProducts.length}
      />

      {/* Recently Viewed */}
      <RecentlyViewed />

      {/* Popular Searches */}
      <PopularSearches
        onTagClick={(tag) => setSearchQuery(tag)}
        activeQuery={searchQuery}
      />
    </div>
  );
}
