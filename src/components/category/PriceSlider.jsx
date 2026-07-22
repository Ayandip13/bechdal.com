"use client";

export default function PriceSlider({ minPrice, maxPrice, onChange }) {
  const presets = [
    { label: "Under ₹10k", min: "", max: "10000" },
    { label: "₹10k - ₹30k", min: "10000", max: "30000" },
    { label: "₹30k - ₹75k", min: "30000", max: "75000" },
    { label: "Above ₹75k", min: "75000", max: "" },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <span className="absolute left-2.5 top-2 text-xs text-text-muted">₹</span>
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => onChange(e.target.value, maxPrice)}
            className="w-full pl-6 pr-2 py-1.5 text-xs bg-slate-50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-text font-medium"
          />
        </div>
        <span className="text-xs text-text-muted font-medium">to</span>
        <div className="relative flex-1">
          <span className="absolute left-2.5 top-2 text-xs text-text-muted">₹</span>
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => onChange(minPrice, e.target.value)}
            className="w-full pl-6 pr-2 py-1.5 text-xs bg-slate-50 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-primary text-text font-medium"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 pt-1">
        {presets.map((preset, idx) => {
          const isActive = minPrice === preset.min && maxPrice === preset.max;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onChange(preset.min, preset.max)}
              className={`text-[11px] font-medium py-1 px-2 rounded-md border transition-all text-center truncate ${
                isActive
                  ? "bg-primary text-white border-primary shadow-xs"
                  : "bg-slate-50 text-text-muted border-border hover:bg-slate-100 hover:text-text"
              }`}
            >
              {preset.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
