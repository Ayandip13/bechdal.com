import { useFormContext } from "react-hook-form";
import { Navigation } from "lucide-react";

export default function LocationSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4 flex justify-between items-center">
        <div>
          <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-1">Location</h2>
          <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium">Where is your item located?</p>
        </div>
        <button 
          type="button"
          className="hidden md:flex items-center gap-2 text-primary dark:text-blue-400 font-bold hover:underline text-xs sm:text-sm cursor-pointer"
        >
          <Navigation size={15} />
          Use Current Location
        </button>
      </div>

      <button 
        type="button"
        className="md:hidden w-full flex items-center justify-center gap-2 bg-blue-50 dark:bg-blue-950/50 text-primary dark:text-blue-400 border border-blue-200 dark:border-blue-800 py-2.5 rounded-xl font-bold text-xs hover:bg-blue-100 transition-colors cursor-pointer"
      >
        <Navigation size={16} />
        Use Current Location
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">State *</label>
          <select 
            {...register("state")}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.state ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
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
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">City *</label>
          <input 
            type="text"
            placeholder="e.g. Kolkata"
            {...register("city")}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.city ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
          />
          {errors.city && <p className="text-xs text-red-500 mt-1">{errors.city.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">Area / Locality *</label>
          <input 
            type="text"
            placeholder="e.g. Salt Lake"
            {...register("area")}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.area ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
          />
          {errors.area && <p className="text-xs text-red-500 mt-1">{errors.area.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-1.5">Pincode *</label>
          <input 
            type="text"
            placeholder="e.g. 700091"
            {...register("pincode")}
            className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.pincode ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
          />
          {errors.pincode && <p className="text-xs text-red-500 mt-1">{errors.pincode.message}</p>}
        </div>
      </div>
    </div>
  );
}
