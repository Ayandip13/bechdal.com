import { useFormContext } from "react-hook-form";
import { IndianRupee } from "lucide-react";

export default function PriceSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-1">Pricing</h2>
        <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium">Set a competitive price to sell faster.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Selling Price */}
        <div className="flex-1">
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Selling Price (₹) *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <IndianRupee size={18} className="text-slate-400 dark:text-slate-500" />
            </div>
            <input
              {...register("price")}
              type="text"
              placeholder="0"
              className={`w-full pl-10 pr-4 py-3 text-lg font-bold rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.price ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
            />
          </div>
          {errors.price && <p className="text-sm text-red-500 mt-1">{errors.price.message}</p>}
        </div>

        {/* Negotiable Toggle */}
        <div className="flex-1 flex items-center p-4 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900">
          <div className="flex-1">
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">Price Negotiable</h4>
            <p className="text-xs text-text-muted dark:text-slate-400 font-medium">Allow buyers to make offers</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input type="checkbox" {...register("negotiable")} className="sr-only peer" />
            <div className="w-11 h-6 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-blue-500"></div>
          </label>
        </div>

      </div>
    </div>
  );
}
