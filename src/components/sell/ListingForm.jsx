import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ConditionSelector from "./ConditionSelector";
import SpecificationFields from "./SpecificationFields";
import PriceSection from "./PriceSection";
import ImageUploader from "./ImageUploader";
import LocationSection from "./LocationSection";
import ContactSection from "./ContactSection";
import PreviewModal from "./PreviewModal";
import { Eye, CheckCircle } from "lucide-react";

export default function ListingForm({ category, onPublish }) {
  const { register, watch, handleSubmit, formState: { errors } } = useFormContext();
  const [showPreview, setShowPreview] = useState(false);
  const [isDraftSaved, setIsDraftSaved] = useState(false);

  // Auto-save draft simulation
  useEffect(() => {
    const subscription = watch(() => {
      setIsDraftSaved(false);
      const timer = setTimeout(() => setIsDraftSaved(true), 1500);
      return () => clearTimeout(timer);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const subcategories = category.subcategories || [];

  return (
    <>
      <form onSubmit={handleSubmit(onPublish)} className="max-w-3xl mx-auto pb-32 lg:pb-12 animate-in fade-in duration-500">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text mb-2">Listing Details</h1>
            <p className="text-text-muted flex items-center gap-2">
              Category: <span className="font-semibold text-text">{category.name}</span>
            </p>
          </div>
          {isDraftSaved && (
            <span className="hidden md:flex items-center gap-1.5 text-sm text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-full">
              <CheckCircle size={16} /> Draft Saved
            </span>
          )}
        </div>

        <div className="space-y-8">
          
          {/* Section: Product Details */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-text mb-6 pb-4 border-b border-border">Product Details</h2>
            
            <div className="space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Product Title *</label>
                <input
                  {...register("title")}
                  type="text"
                  placeholder="e.g. iPhone 13 Pro Max 256GB"
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.title ? "border-red-500" : "border-border bg-slate-50 focus:bg-white"}`}
                />
                {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
              </div>

              {/* Subcategory */}
              {subcategories.length > 0 && (
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Subcategory *</label>
                  <select
                    {...register("subCategory")}
                    className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.subCategory ? "border-red-500" : "border-border"}`}
                  >
                    <option value="">Select Subcategory</option>
                    {subcategories.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                  {errors.subCategory && <p className="text-sm text-red-500 mt-1">{errors.subCategory.message}</p>}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Brand <span className="text-text-muted font-normal">(Optional)</span></label>
                  <input
                    {...register("brand")}
                    type="text"
                    placeholder="e.g. Apple"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-2">Model <span className="text-text-muted font-normal">(Optional)</span></label>
                  <input
                    {...register("model")}
                    type="text"
                    placeholder="e.g. 13 Pro Max"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <ConditionSelector />

              {/* Description */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="block text-sm font-semibold text-text">Description *</label>
                  <span className="text-xs text-text-muted">{watch("description")?.length || 0}/4000</span>
                </div>
                <textarea
                  {...register("description")}
                  rows={5}
                  placeholder="Describe your item in detail. Mention any flaws or defects."
                  className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.description ? "border-red-500" : "border-border bg-slate-50 focus:bg-white"}`}
                />
                {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
              </div>

              <SpecificationFields categoryId={category.id} />
            </div>
          </div>

          {/* Section: Photos */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <ImageUploader />
          </div>

          {/* Section: Pricing */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <PriceSection />
          </div>

          {/* Section: Location */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <LocationSection />
          </div>

          {/* Section: Contact */}
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
            <ContactSection />
          </div>

        </div>

        {/* Desktop Action Bar */}
        <div className="hidden lg:flex items-center justify-end gap-4 mt-8">
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="px-6 py-3 rounded-xl font-semibold bg-white border border-border text-text hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2"
          >
            <Eye size={18} /> Preview
          </button>
          <button
            type="submit"
            className="px-8 py-3 rounded-xl font-semibold bg-primary hover:bg-primary-dark text-white transition-colors shadow-md"
          >
            Publish Listing
          </button>
        </div>

        {/* Mobile Sticky Action Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.1)] z-50 flex gap-3">
          <button
            type="button"
            onClick={() => setShowPreview(true)}
            className="flex-1 py-3.5 rounded-xl font-semibold bg-slate-100 text-text hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
          >
            <Eye size={18} /> Preview
          </button>
          <button
            type="submit"
            className="flex-1 py-3.5 rounded-xl font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-md"
          >
            Publish
          </button>
        </div>

      </form>

      {showPreview && (
        <PreviewModal data={watch()} onClose={() => setShowPreview(false)} />
      )}
    </>
  );
}
