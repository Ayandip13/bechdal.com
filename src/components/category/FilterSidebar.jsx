"use client";

import FilterSection from "./FilterSection";
import PriceSlider from "./PriceSlider";
import { RotateCcw, Check } from "lucide-react";

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
    <aside className="w-full bg-white rounded-2xl p-4 shadow-subtle border border-border/70 flex flex-col gap-1">
      {/* Sidebar Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border">
        <div className="flex items-center gap-2">
          <h2 className="font-bold text-sm text-text">Filters</h2>
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
            className="text-xs font-semibold text-primary hover:text-primary-dark transition-colors flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Clear
          </button>
        )}
      </div>

      <div className="divide-y divide-border/60">
        {/* 1. Sub Category */}
        {categoryInfo?.subcategories?.length > 0 && (
          <FilterSection
            title="Sub Category"
            defaultOpen={true}
            activeCount={filters.subcategories?.length || 0}
          >
            <div className="space-y-1 max-h-40 overflow-y-auto pr-1 hide-scrollbar">
              {categoryInfo.subcategories.map((subCat) => {
                const isChecked = (filters.subcategories || []).includes(subCat);
                return (
                  <label
                    key={subCat}
                    className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-primary border-primary text-white"
                          : "border-gray-300 group-hover:border-primary bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isChecked}
                      onChange={() => handleCheckboxToggle("subcategories", subCat)}
                    />
                    <span className="font-medium text-slate-700 group-hover:text-text truncate">
                      {subCat}
                    </span>
                  </label>
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
          <div className="space-y-1 max-h-36 overflow-y-auto pr-1 hide-scrollbar">
            {locations.map((loc) => {
              const isChecked = (filters.locations || []).includes(loc);
              return (
                <label
                  key={loc}
                  className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                      isChecked
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300 group-hover:border-primary bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={() => handleCheckboxToggle("locations", loc)}
                  />
                  <span className="font-medium text-slate-700 group-hover:text-text truncate">
                    {loc}
                  </span>
                </label>
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
          <div className="space-y-1">
            {conditions.map((cond) => {
              const isChecked = (filters.conditions || []).includes(cond);
              return (
                <label
                  key={cond}
                  className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none"
                >
                  <div
                    className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                      isChecked
                        ? "bg-primary border-primary text-white"
                        : "border-gray-300 group-hover:border-primary bg-white"
                    }`}
                  >
                    {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={() => handleCheckboxToggle("conditions", cond)}
                  />
                  <span className="font-medium text-slate-700 group-hover:text-text">
                    {cond}
                  </span>
                </label>
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
            <div className="space-y-1 max-h-36 overflow-y-auto pr-1 hide-scrollbar">
              {categoryInfo.brands.map((brand) => {
                const isChecked = (filters.brands || []).includes(brand);
                return (
                  <label
                    key={brand}
                    className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none"
                  >
                    <div
                      className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-primary border-primary text-white"
                          : "border-gray-300 group-hover:border-primary bg-white"
                      }`}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={isChecked}
                      onChange={() => handleCheckboxToggle("brands", brand)}
                    />
                    <span className="font-medium text-slate-700 group-hover:text-text">
                      {brand}
                    </span>
                  </label>
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
              <div className="space-y-1">
                {["64GB", "128GB", "256GB", "512GB"].map((size) => {
                  const isChecked = (filters.storage || []).includes(size);
                  return (
                    <label key={size} className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary bg-white"}`}>
                        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => handleCheckboxToggle("storage", size)} />
                      <span className="font-medium text-slate-700 group-hover:text-text">{size}</span>
                    </label>
                  );
                })}
              </div>
            </FilterSection>

            <FilterSection
              title="System RAM"
              defaultOpen={false}
              activeCount={filters.ram?.length || 0}
            >
              <div className="space-y-1">
                {["4GB", "6GB", "8GB", "12GB", "16GB"].map((ramSize) => {
                  const isChecked = (filters.ram || []).includes(ramSize);
                  return (
                    <label key={ramSize} className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary bg-white"}`}>
                        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => handleCheckboxToggle("ram", ramSize)} />
                      <span className="font-medium text-slate-700 group-hover:text-text">{ramSize}</span>
                    </label>
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
              <div className="space-y-1">
                {["Petrol", "Diesel", "CNG", "Electric"].map((fuel) => {
                  const isChecked = (filters.fuelTypes || []).includes(fuel);
                  return (
                    <label key={fuel} className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary bg-white"}`}>
                        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => handleCheckboxToggle("fuelTypes", fuel)} />
                      <span className="font-medium text-slate-700 group-hover:text-text">{fuel}</span>
                    </label>
                  );
                })}
              </div>
            </FilterSection>

            <FilterSection
              title="Transmission"
              defaultOpen={false}
              activeCount={filters.transmissions?.length || 0}
            >
              <div className="space-y-1">
                {["Manual", "Automatic"].map((trans) => {
                  const isChecked = (filters.transmissions || []).includes(trans);
                  return (
                    <label key={trans} className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary bg-white"}`}>
                        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => handleCheckboxToggle("transmissions", trans)} />
                      <span className="font-medium text-slate-700 group-hover:text-text">{trans}</span>
                    </label>
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
              <div className="space-y-1">
                {["Furnished", "Semi-Furnished", "Unfurnished"].map((furn) => {
                  const isChecked = (filters.furnishings || []).includes(furn);
                  return (
                    <label key={furn} className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none">
                      <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary bg-white"}`}>
                        {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                      </div>
                      <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => handleCheckboxToggle("furnishings", furn)} />
                      <span className="font-medium text-slate-700 group-hover:text-text">{furn}</span>
                    </label>
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
          <div className="space-y-1">
            {["Individual", "Verified Dealer"].map((sellerType) => {
              const isChecked = (filters.sellerTypes || []).includes(sellerType);
              return (
                <label key={sellerType} className="flex items-center gap-2 text-xs text-text hover:text-primary cursor-pointer py-0.5 group select-none">
                  <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center transition-colors ${isChecked ? "bg-primary border-primary text-white" : "border-gray-300 group-hover:border-primary bg-white"}`}>
                    {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                  </div>
                  <input type="checkbox" className="sr-only" checked={isChecked} onChange={() => handleCheckboxToggle("sellerTypes", sellerType)} />
                  <span className="font-medium text-slate-700 group-hover:text-text">{sellerType}</span>
                </label>
              );
            })}
          </div>
        </FilterSection>

        {/* 8. Additional Checklist Toggles (Verified, Negotiable, Delivery) */}
        <div className="py-3 space-y-2.5">
          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <span>Verified Sellers Only</span>
            <input
              type="checkbox"
              checked={!!filters.verifiedSeller}
              onChange={(e) => onFilterChange("verifiedSeller", e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <span>Price Negotiable</span>
            <input
              type="checkbox"
              checked={!!filters.negotiable}
              onChange={(e) => onFilterChange("negotiable", e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between text-xs font-semibold text-slate-700 cursor-pointer select-none">
            <span>Home Delivery Available</span>
            <input
              type="checkbox"
              checked={!!filters.deliveryAvailable}
              onChange={(e) => onFilterChange("deliveryAvailable", e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer"
            />
          </label>
        </div>

      </div>
    </aside>
  );
}
