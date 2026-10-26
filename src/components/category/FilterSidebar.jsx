"use client";

import FilterSection from "./FilterSection";
import PriceSlider from "./PriceSlider";
import { RotateCcw, Check } from "lucide-react";

function FilterCheckboxItem({ label, isChecked, onToggle }) {
  return (
    <label className="flex items-center gap-2 text-xs cursor-pointer py-1 group select-none transition-colors">
      <div
        className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-all shrink-0 ${
          isChecked
            ? "bg-primary border-primary text-white shadow-xs"
            : "border-slate-300 dark:border-slate-600 group-hover:border-primary dark:group-hover:border-blue-400 bg-white dark:bg-slate-700/80"
        }`}
      >
        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
      </div>
      <input
        type="checkbox"
        className="sr-only"
        checked={isChecked}
        onChange={onToggle}
      />
      <span
        className={`truncate transition-colors ${
          isChecked
            ? "font-bold text-primary dark:text-blue-400"
            : "font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-blue-400"
        }`}
      >
        {label}
      </span>
    </label>
  );
}

export default function FilterSidebar({
  categoryInfo,
  filters,
  onFilterChange,
  onResetFilters,
  activeFilterCount,
}) {
  const locations = [
    "Kolkata",
    "Mumbai",
    "Delhi NCR",
    "Bangalore",
    "Pune",
    "Hyderabad",
  ];

  const conditions = [
    "Brand New",
    "Like New",
    "Excellent",
    "Good",
    "Fair",
  ];

  const handleCheckboxToggle = (filterKey, itemValue) => {
    const currentList = filters[filterKey] || [];
    const isSelected = currentList.includes(itemValue);
    const updated = isSelected
      ? currentList.filter((val) => val !== itemValue)
      : [...currentList, itemValue];
    onFilterChange(filterKey, updated);
  };

  return (
    <aside className="w-full bg-white dark:bg-slate-800/90 rounded-2xl p-4 shadow-subtle border border-border/70 dark:border-slate-700/80 flex flex-col gap-1 transition-colors">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border dark:border-slate-700/70">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-sm text-slate-800 dark:text-slate-100">Filters</h2>
          {activeFilterCount > 0 && (
            <span className="bg-primary text-white text-[11px] font-semibold px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        {activeFilterCount > 0 && (
          <button
            type="button"
            onClick={onResetFilters}
            className="text-xs font-semibold text-primary dark:text-blue-400 hover:text-primary-dark dark:hover:text-blue-300 transition-colors flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" /> Clear
          </button>
        )}
      </div>

      <div className="divide-y divide-border/60 dark:divide-slate-700/60">
        {/* 1. Sub Category */}
        {categoryInfo?.subcategories?.length > 0 && (
          <FilterSection
            title="Sub Category"
            defaultOpen={true}
            activeCount={filters.subcategories?.length || 0}
          >
            <div className="space-y-0.5 max-h-48 overflow-y-auto pr-1 hide-scrollbar">
              {categoryInfo.subcategories.map((subCat) => {
                const isChecked = (filters.subcategories || []).includes(subCat);
                return (
                  <FilterCheckboxItem
                    key={subCat}
                    label={subCat}
                    isChecked={isChecked}
                    onToggle={() => handleCheckboxToggle("subcategories", subCat)}
                  />
                );
              })}
            </div>
          </FilterSection>
        )}

        {/* 2. Price Range */}
        <FilterSection
          title="Price Range"
          defaultOpen={true}
          activeCount={filters.minPrice || filters.maxPrice ? 1 : 0}
        >
          <PriceSlider
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            categorySlug={categoryInfo?.slug}
            onChange={(min, max) => {
              onFilterChange("minPrice", min);
              onFilterChange("maxPrice", max);
            }}
          />
        </FilterSection>

        {/* 3. Location */}
        <FilterSection
          title="Location"
          defaultOpen={true}
          activeCount={filters.locations?.length || 0}
        >
          <div className="space-y-0.5 max-h-40 overflow-y-auto pr-1 hide-scrollbar">
            {locations.map((loc) => {
              const isChecked = (filters.locations || []).includes(loc);
              return (
                <FilterCheckboxItem
                  key={loc}
                  label={loc}
                  isChecked={isChecked}
                  onToggle={() => handleCheckboxToggle("locations", loc)}
                />
              );
            })}
          </div>
        </FilterSection>

        {/* 4. Condition */}
        <FilterSection
          title="Condition"
          defaultOpen={true}
          activeCount={filters.conditions?.length || 0}
        >
          <div className="space-y-0.5">
            {conditions.map((cond) => {
              const isChecked = (filters.conditions || []).includes(cond);
              return (
                <FilterCheckboxItem
                  key={cond}
                  label={cond}
                  isChecked={isChecked}
                  onToggle={() => handleCheckboxToggle("conditions", cond)}
                />
              );
            })}
          </div>
        </FilterSection>

        {/* 5. Brand */}
        {categoryInfo?.brands?.length > 0 && (
          <FilterSection
            title="Brand"
            defaultOpen={false}
            activeCount={filters.brands?.length || 0}
          >
            <div className="space-y-0.5 max-h-40 overflow-y-auto pr-1 hide-scrollbar">
              {categoryInfo.brands.map((brand) => {
                const isChecked = (filters.brands || []).includes(brand);
                return (
                  <FilterCheckboxItem
                    key={brand}
                    label={brand}
                    isChecked={isChecked}
                    onToggle={() => handleCheckboxToggle("brands", brand)}
                  />
                );
              })}
            </div>
          </FilterSection>
        )}

        {/* 6. Dynamic Category Specific Filters */}
        {categoryInfo?.slug === "mobiles" && (
          <>
            <FilterSection
              title="Storage Capacity"
              defaultOpen={true}
              activeCount={filters.storage?.length || 0}
            >
              <div className="space-y-0.5">
                {["64GB", "128GB", "256GB", "512GB"].map((size) => {
                  const isChecked = (filters.storage || []).includes(size);
                  return (
                    <FilterCheckboxItem
                      key={size}
                      label={size}
                      isChecked={isChecked}
                      onToggle={() => handleCheckboxToggle("storage", size)}
                    />
                  );
                })}
              </div>
            </FilterSection>

            <FilterSection
              title="System RAM"
              defaultOpen={false}
              activeCount={filters.ram?.length || 0}
            >
              <div className="space-y-0.5">
                {["4GB", "6GB", "8GB", "12GB", "16GB"].map((ramSize) => {
                  const isChecked = (filters.ram || []).includes(ramSize);
                  return (
                    <FilterCheckboxItem
                      key={ramSize}
                      label={ramSize}
                      isChecked={isChecked}
                      onToggle={() => handleCheckboxToggle("ram", ramSize)}
                    />
                  );
                })}
              </div>
            </FilterSection>
          </>
        )}

        {categoryInfo?.slug === "vehicles" && (
          <>
            <FilterSection
              title="Fuel Type"
              defaultOpen={true}
              activeCount={filters.fuelTypes?.length || 0}
            >
              <div className="space-y-0.5">
                {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => {
                  const isChecked = (filters.fuelTypes || []).includes(fuel);
                  return (
                    <FilterCheckboxItem
                      key={fuel}
                      label={fuel}
                      isChecked={isChecked}
                      onToggle={() => handleCheckboxToggle("fuelTypes", fuel)}
                    />
                  );
                })}
              </div>
            </FilterSection>

            <FilterSection
              title="Transmission"
              defaultOpen={false}
              activeCount={filters.transmissions?.length || 0}
            >
              <div className="space-y-0.5">
                {["Manual", "Automatic"].map((trans) => {
                  const isChecked = (filters.transmissions || []).includes(trans);
                  return (
                    <FilterCheckboxItem
                      key={trans}
                      label={trans}
                      isChecked={isChecked}
                      onToggle={() => handleCheckboxToggle("transmissions", trans)}
                    />
                  );
                })}
              </div>
            </FilterSection>
          </>
        )}

        {categoryInfo?.slug === "properties" && (
          <>
            <FilterSection
              title="Furnishing Status"
              defaultOpen={true}
              activeCount={filters.furnishings?.length || 0}
            >
              <div className="space-y-0.5">
                {["Furnished", "Semi-Furnished", "Unfurnished"].map((furn) => {
                  const isChecked = (filters.furnishings || []).includes(furn);
                  return (
                    <FilterCheckboxItem
                      key={furn}
                      label={furn}
                      isChecked={isChecked}
                      onToggle={() => handleCheckboxToggle("furnishings", furn)}
                    />
                  );
                })}
              </div>
            </FilterSection>
          </>
        )}

        {/* 7. Seller Type */}
        <FilterSection
          title="Seller Type"
          defaultOpen={false}
          activeCount={filters.sellerTypes?.length || 0}
        >
          <div className="space-y-0.5">
            {["Individual", "Verified Dealer"].map((sellerType) => {
              const isChecked = (filters.sellerTypes || []).includes(sellerType);
              return (
                <FilterCheckboxItem
                  key={sellerType}
                  label={sellerType}
                  isChecked={isChecked}
                  onToggle={() => handleCheckboxToggle("sellerTypes", sellerType)}
                />
              );
            })}
          </div>
        </FilterSection>

        {/* 8. Additional Checklist Toggles (Verified, Negotiable, Delivery) */}
        <div className="py-3.5 space-y-3">
          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 cursor-pointer select-none transition-colors">
            <span>Verified Sellers Only</span>
            <input
              type="checkbox"
              checked={!!filters.verifiedSeller}
              onChange={(e) => onFilterChange("verifiedSeller", e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-primary focus:ring-primary cursor-pointer accent-primary"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 cursor-pointer select-none transition-colors">
            <span>Price Negotiable</span>
            <input
              type="checkbox"
              checked={!!filters.negotiable}
              onChange={(e) => onFilterChange("negotiable", e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-primary focus:ring-primary cursor-pointer accent-primary"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-blue-400 cursor-pointer select-none transition-colors">
            <span>Home Delivery Available</span>
            <input
              type="checkbox"
              checked={!!filters.deliveryAvailable}
              onChange={(e) => onFilterChange("deliveryAvailable", e.target.checked)}
              className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-primary focus:ring-primary cursor-pointer accent-primary"
            />
          </label>
        </div>

      </div>
    </aside>
  );
}
