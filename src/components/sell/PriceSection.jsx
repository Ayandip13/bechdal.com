import { useFormContext } from "react-hook-form";
import { IndianRupee } from "lucide-react";

export default function PriceSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-bold text-text mb-1">Pricing</h2>
        <p className="text-sm text-text-muted">Set a competitive price to sell faster.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Selling Price */}
        <div className="flex-1">
          <label className="block text-sm font-semibold text-text mb-2">Selling Price (₹) *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IndianRupee size={18} className="text-text-muted" />
            </div>
            <input
              {...register("price")}
              type="text"
              placeholder="0"
              className={`w-full pl-10 pr-4 py-3 text-lg font-semibold rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.price ? "border-red-500" : "border-border"}`}
            />
          </div>
          {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
        </div>

        {/* Negotiable Toggle */}
        <div className="flex-1 flex items-center p-4 border border-border rounded-lg bg-slate-50">
          <div className="flex-1">
            <h4 className="font-semibold text-text">Price Negotiable</h4>
            <p className="text-xs text-text-muted">Allow buyers to make offers</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input type="checkbox" {...register("negotiable")} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
          </label>
        </div>

      </div>
    </div>
  );
}
