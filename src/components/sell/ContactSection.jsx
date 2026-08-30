import { useFormContext } from "react-hook-form";
import { User, Phone } from "lucide-react";

export default function ContactSection() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-1">Contact Information</h2>
        <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium">How should buyers contact you?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Name *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User size={18} className="text-slate-400 dark:text-slate-500" />
            </div>
            <input 
              {...register("sellerName")}
              type="text"
              placeholder="John Doe"
              className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.sellerName ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
            />
          </div>
          {errors.sellerName && <p className="text-xs text-red-500 mt-1">{errors.sellerName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Phone Number *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-sm font-bold text-text-muted dark:text-slate-400">+91</span>
              <div className="w-px h-4 bg-slate-200 dark:bg-slate-700 mx-2"></div>
              <Phone size={16} className="text-slate-400 dark:text-slate-500" />
            </div>
            <input 
              {...register("phoneNumber")}
              type="tel"
              placeholder="9876543210"
              maxLength={10}
              className={`w-full pl-16 pr-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.phoneNumber ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
            />
          </div>
          {errors.phoneNumber && <p className="text-xs text-red-500 mt-1">{errors.phoneNumber.message}</p>}
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-2">
        <div className="flex-1 flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xs">
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">Allow Chat on BechDal</h4>
            <p className="text-xs text-text-muted dark:text-slate-400 font-medium">Buyers can message you inside the app</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input type="checkbox" {...register("allowChat")} className="sr-only peer" />
            <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-blue-500"></div>
          </label>
        </div>

        <div className="flex-1 flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xs">
          <div>
            <h4 className="font-extrabold text-slate-900 dark:text-slate-100 text-sm">Show Phone Number</h4>
            <p className="text-xs text-text-muted dark:text-slate-400 font-medium">Buyers can see your phone number</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer ml-4">
            <input type="checkbox" {...register("showPhone")} className="sr-only peer" />
            <div className="w-9 h-5 bg-slate-200 dark:bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary dark:peer-checked:bg-blue-500"></div>
          </label>
        </div>
      </div>
    </div>
  );
}
