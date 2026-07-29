import { useFormContext } from "react-hook-form";
import { Navigation } from "lucide-react";

export default function LocationSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-text mb-1">Location</h2>
          <p className="text-sm text-text-muted">Where is your item located?</p>
        </div>
        <button 
          type="button"
          className="hidden md:flex items-center gap-2 text-primary font-semibold hover:underline text-sm"
        >
          <Navigation size={16} />
          Use Current Location
        </button>
      </div>

      <button 
        type="button"
        className="md:hidden w-full flex items-center justify-center gap-2 bg-blue-50 text-primary border border-blue-200 py-3 rounded-lg font-semibold hover:bg-blue-100 transition-colors"
      >
        <Navigation size={18} />
        Use Current Location
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">State *</label>
          <select 
            {...register("state")}
            className={`w-full px-4 py-3 rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.state ? "border-red-500" : "border-border"}`}
          >
            <option value="">Select State</option>
            <option value="West Bengal">West Bengal</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Delhi">Delhi</option>
          </select>
          {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state.message}</p>}
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">City *</label>
          <input 
            type="text"
            placeholder="e.g. Kolkata"
            {...register("city")}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.city ? "border-red-500" : "border-border"}`}
          />
          {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">Area / Locality *</label>
          <input 
            type="text"
            placeholder="e.g. Salt Lake"
            {...register("area")}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.area ? "border-red-500" : "border-border"}`}
          />
          {errors.area && <p className="text-xs text-red-500 mt-1">{errors.area.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-semibold text-text mb-1.5">Pincode *</label>
          <input 
            type="text"
            placeholder="e.g. 700091"
            {...register("pincode")}
            className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.pincode ? "border-red-500" : "border-border"}`}
          />
          {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode.message}</p>}
        </div>
      </div>
    </div>
  );
}
