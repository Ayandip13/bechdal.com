import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ConditionSelector from "./ConditionSelector";
import SpecificationFields from "./SpecificationFields";
import PriceSection from "./PriceSection";
import ImageUploader from "./ImageUploader";
import LocationSection from "./LocationSection";
import ContactSection from "./ContactSection";
import PreviewModal from "./PreviewModal";
import { Eye, CheckCircle, MapPin, FileText, Camera, ArrowRight, ArrowLeft, Check } from "lucide-react";

export default function ListingForm({ category, onPublish }) {
  const { register, watch, handleSubmit, trigger, formState: { errors } } = useFormContext();
  const [currentStep, setCurrentStep] = useState(1);
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

  const handleNextStep1 = async () => {
    const valid = await trigger(["state", "city", "area", "pincode"]);
    if (valid) {
      setCurrentStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextStep2 = async () => {
    const fieldsToValidate = ["title", "condition", "description"];
    if (subcategories.length > 0) {
      fieldsToValidate.push("subCategory");
    }
    const valid = await trigger(fieldsToValidate);
    if (valid) {
      setCurrentStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const steps = [
    { id: 1, title: "City & Location", icon: MapPin, desc: "Where is it located?" },
    { id: 2, title: "Item Details", icon: FileText, desc: "Title, specs & condition" },
    { id: 3, title: "Photos & Price", icon: Camera, desc: "Images & pricing" },
  ];

  return (
    <>
      <form onSubmit={handleSubmit(onPublish)} className="max-w-3xl mx-auto pb-20 animate-in fade-in duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white tracking-tight mb-1">Create Listing</h1>
            <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium flex items-center gap-1.5">
              Category: <span className="font-bold text-primary dark:text-blue-400">{category.name}</span>
            </p>
          </div>
          {isDraftSaved && (
            <span className="hidden md:flex items-center gap-1.5 text-xs text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800 shadow-2xs">
              <CheckCircle size={15} className="text-emerald-600 dark:text-emerald-400" /> Draft Saved
            </span>
          )}
        </div>

        {/* Visual Stepper Bar */}
        <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-4 sm:p-6 shadow-2xs mb-6 sm:mb-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 relative">
            {steps.map((step) => {
              const Icon = step.icon;
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;
              return (
                <div 
                  key={step.id} 
                  onClick={() => {
                    if (step.id < currentStep) {
                      setCurrentStep(step.id);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left p-2.5 sm:p-3.5 rounded-xl transition-all duration-200 relative ${
                    isCurrent 
                      ? "bg-blue-50/90 dark:bg-blue-950/60 border-2 border-primary dark:border-blue-400 shadow-2xs" 
                      : isCompleted 
                        ? "bg-slate-50 dark:bg-slate-700/60 border border-emerald-300 dark:border-emerald-700/80 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700" 
                        : "bg-slate-50/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/60 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5 sm:mb-2">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isCurrent 
                        ? "bg-primary dark:bg-blue-500 text-white shadow-2xs" 
                        : isCompleted 
                          ? "bg-emerald-500 text-white" 
                          : "bg-slate-200 dark:bg-slate-700 text-text-muted dark:text-slate-400"
                    }`}>
                      {isCompleted ? <Check size={18} /> : <Icon size={18} />}
                    </div>
                    <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-extrabold text-text-muted dark:text-slate-400">
                      Step 0{step.id}
                    </span>
                  </div>
                  <h3 className={`text-xs sm:text-base font-bold truncate w-full ${
                    isCurrent ? "text-primary dark:text-blue-400" : isCompleted ? "text-emerald-700 dark:text-emerald-400" : "text-slate-800 dark:text-slate-200"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="hidden sm:block text-xs text-text-muted dark:text-slate-400 truncate w-full mt-0.5 font-medium">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: City & Location */}
        {currentStep === 1 && (
          <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 md:p-8 shadow-2xs space-y-6 animate-in fade-in duration-300">
            <LocationSection />
            
            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex justify-end fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-800 z-30 sm:relative sm:p-0 sm:border-none shadow-[0_-4px_12px_rgba(0,0,0,0.05)] sm:shadow-none">
              <button
                type="button"
                onClick={handleNextStep1}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-2xs flex items-center justify-center gap-2 h-11 cursor-pointer"
              >
                Next: Item Details <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Product Details & Specifications */}
        {currentStep === 2 && (
          <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 md:p-8 shadow-2xs space-y-6 animate-in fade-in duration-300">
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white pb-4 border-b border-slate-100 dark:border-slate-700/80">Product Details & Specifications</h2>
            
            {/* Title */}
            <div>
              <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Product Title *</label>
              <input
                {...register("title")}
                type="text"
                placeholder="e.g. iPhone 13 Pro Max 256GB or 3 BHK Flat in Salt Lake"
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 ${errors.title ? "border-red-500 bg-red-50/30" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900"}`}
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
            </div>

            {/* Subcategory */}
            {subcategories.length > 0 && (
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Subcategory / Type *</label>
                <select
                  {...register("subCategory")}
                  className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.subCategory ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
                >
                  <option value="">Select Option</option>
                  {subcategories.map(sub => (
                    <option key={sub} value={sub}>{sub}</option>
                  ))}
                </select>
                {errors.subCategory && <p className="text-sm text-red-500 mt-1">{errors.subCategory.message}</p>}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Brand <span className="text-text-muted dark:text-slate-400 font-normal">(Optional)</span></label>
                <input
                  {...register("brand")}
                  type="text"
                  placeholder="e.g. Apple, Maruti, Sony, etc."
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-2">Model / Year <span className="text-text-muted dark:text-slate-400 font-normal">(Optional)</span></label>
                <input
                  {...register("model")}
                  type="text"
                  placeholder="e.g. 2023 / 13 Pro Max"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <ConditionSelector />

            {/* Description */}
            <div>
              <div className="flex justify-between mb-2">
                <label className="block text-sm font-bold text-slate-900 dark:text-slate-100">Description *</label>
                <span className="text-xs text-text-muted dark:text-slate-400">{watch("description")?.length || 0}/4000</span>
              </div>
              <textarea
                {...register("description")}
                rows={5}
                placeholder="Describe your item in detail. Mention features, condition, reason for selling, or any flaws."
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 ${errors.description ? "border-red-500 bg-red-50/30" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:bg-white dark:focus:bg-slate-900"}`}
              />
              {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
            </div>

            <SpecificationFields categoryId={category.id} />

            <div className="pt-4 border-t border-slate-100 dark:border-slate-700/80 flex flex-row items-center justify-between gap-3 fixed bottom-0 left-0 right-0 p-4 bg-white dark:bg-slate-800 z-30 sm:relative sm:p-0 sm:border-none shadow-[0_-4px_12px_rgba(0,0,0,0.05)] sm:shadow-none">
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-1.5 h-11 cursor-pointer"
              >
                <ArrowLeft size={16} /> Back
              </button>
              <button
                type="button"
                onClick={handleNextStep2}
                className="flex-1 sm:flex-none px-6 py-3 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-2xs flex items-center justify-center gap-1.5 h-11 cursor-pointer"
              >
                Next <ArrowRight size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Photos, Price & Contact Info */}
        {currentStep === 3 && (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-300">
            {/* Section: Photos */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 md:p-8 shadow-2xs">
              <ImageUploader />
            </div>

            {/* Section: Pricing */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 md:p-8 shadow-2xs">
              <PriceSection />
            </div>

            {/* Section: Contact */}
            <div className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 rounded-2xl p-5 md:p-8 shadow-2xs">
              <ContactSection />
            </div>

            {/* Value Proposition Guarantee Badge */}
            <div className="bg-slate-900 dark:bg-slate-900 text-white border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-2xs">
              <div className="text-left">
                <span className="text-secondary dark:text-amber-400 font-black uppercase text-[9px] tracking-wider bg-slate-800 px-2.5 py-1 rounded">
                  Free Posting
                </span>
                <h4 className="text-sm font-black mt-2 text-white">Maximum Bachat. No Hidden Charges. No Platform Fees.</h4>
                <p className="text-slate-400 text-xs mt-1 font-semibold leading-normal">
                  BechDal is 100% free for everyone. Keep 100% of the price you negotiate with the buyer!
                </p>
              </div>
              <span className="text-2xl hidden sm:block opacity-80">🤝</span>
            </div>

            {/* Step 3 Action Bar */}
            <div className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 p-4 flex flex-row items-center justify-between gap-3 fixed bottom-0 left-0 right-0 z-30 sm:relative sm:p-6 sm:border sm:border-slate-200/80 dark:sm:border-slate-700/80 sm:rounded-2xl sm:shadow-2xs">
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl font-bold bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex items-center justify-center gap-1.5 h-11 cursor-pointer"
              >
                <ArrowLeft size={16} /> Back
              </button>
              
              <div className="flex items-center gap-2 flex-1 sm:flex-none justify-end">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl font-bold bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors shadow-2xs flex items-center justify-center gap-1.5 h-11 cursor-pointer"
                >
                  <Eye size={16} /> Preview
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl font-bold bg-primary hover:bg-primary-dark text-white transition-all shadow-2xs flex items-center justify-center gap-1.5 h-11 cursor-pointer"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        )}

      </form>

      {showPreview && (
        <PreviewModal data={watch()} onClose={() => setShowPreview(false)} />
      )}
    </>
  );
}
