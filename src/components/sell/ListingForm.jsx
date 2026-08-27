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
      <form onSubmit={handleSubmit(onPublish)} className="max-w-3xl mx-auto pb-20 animate-in fade-in duration-500">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-text mb-1">Create Listing</h1>
            <p className="text-sm text-text-muted flex items-center gap-1.5">
              Category: <span className="font-semibold text-primary">{category.name}</span>
            </p>
          </div>
          {isDraftSaved && (
            <span className="hidden md:flex items-center gap-1.5 text-xs text-green-700 font-semibold bg-green-50 px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
              <CheckCircle size={15} className="text-green-600" /> Draft Saved
            </span>
          )}
        </div>

        {/* Visual Stepper Bar */}
        <div className="bg-white border border-border rounded-2xl p-4 sm:p-6 shadow-sm mb-8">
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
                  className={`flex flex-col items-center sm:items-start text-center sm:text-left p-2.5 sm:p-3.5 rounded-xl transition-all duration-300 relative ${
                    isCurrent 
                      ? "bg-blue-50/80 border-2 border-primary shadow-subtle transform -translate-y-0.5" 
                      : isCompleted 
                        ? "bg-slate-50 border border-emerald-200 cursor-pointer hover:bg-slate-100" 
                        : "bg-slate-50/60 border border-border/60 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between w-full mb-1.5 sm:mb-2">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                      isCurrent 
                        ? "bg-primary text-white shadow-md" 
                        : isCompleted 
                          ? "bg-emerald-500 text-white" 
                          : "bg-slate-200 text-text-muted"
                    }`}>
                      {isCompleted ? <Check size={18} /> : <Icon size={18} />}
                    </div>
                    <span className="hidden sm:inline-block text-[10px] uppercase tracking-wider font-extrabold text-text-muted">
                      Step 0{step.id}
                    </span>
                  </div>
                  <h3 className={`text-xs sm:text-base font-bold truncate w-full ${
                    isCurrent ? "text-primary" : isCompleted ? "text-emerald-950" : "text-text"
                  }`}>
                    {step.title}
                  </h3>
                  <p className="hidden sm:block text-xs text-text-muted truncate w-full mt-0.5">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 1: City & Location */}
        {currentStep === 1 && (
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
            <LocationSection />
            
            <div className="pt-6 border-t border-border flex justify-end">
              <button
                type="button"
                onClick={handleNextStep1}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Next: Item Details <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Product Details & Specifications */}
        {currentStep === 2 && (
          <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-6 animate-in fade-in duration-300">
            <h2 className="text-xl font-bold text-text pb-4 border-b border-border">Product Details & Specifications</h2>
            
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-text mb-2">Product Title *</label>
              <input
                {...register("title")}
                type="text"
                placeholder="e.g. iPhone 13 Pro Max 256GB or 3 BHK Flat in Salt Lake"
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.title ? "border-red-500" : "border-border bg-slate-50 focus:bg-white"}`}
              />
              {errors.title && <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>}
            </div>

            {/* Subcategory */}
            {subcategories.length > 0 && (
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Subcategory / Type *</label>
                <select
                  {...register("subCategory")}
                  className={`w-full px-4 py-3 rounded-lg border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 ${errors.subCategory ? "border-red-500" : "border-border"}`}
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
                <label className="block text-sm font-semibold text-text mb-2">Brand <span className="text-text-muted font-normal">(Optional)</span></label>
                <input
                  {...register("brand")}
                  type="text"
                  placeholder="e.g. Apple, Maruti, Sony, etc."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-text mb-2">Model / Year <span className="text-text-muted font-normal">(Optional)</span></label>
                <input
                  {...register("model")}
                  type="text"
                  placeholder="e.g. 2023 / 13 Pro Max"
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
                placeholder="Describe your item in detail. Mention features, condition, reason for selling, or any flaws."
                className={`w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all ${errors.description ? "border-red-500" : "border-border bg-slate-50 focus:bg-white"}`}
              />
              {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description.message}</p>}
            </div>

            <SpecificationFields categoryId={category.id} />

            <div className="pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-slate-100 border border-border text-text hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Back: Location
              </button>
              <button
                type="button"
                onClick={handleNextStep2}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                Next: Photos & Price <ArrowRight size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Photos, Price & Contact Info */}
        {currentStep === 3 && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Section: Photos */}
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <ImageUploader />
            </div>

            {/* Section: Pricing */}
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <PriceSection />
            </div>

            {/* Section: Contact */}
            <div className="bg-white border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <ContactSection />
            </div>

            {/* Value Proposition Guarantee Badge */}
            <div className="bg-slate-900 text-white border border-slate-800 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
              <div className="text-left">
                <span className="text-secondary font-black uppercase text-[9px] tracking-wider bg-slate-800 px-2.5 py-1 rounded">
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
            <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrevStep}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold bg-slate-100 border border-border text-text hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
              >
                <ArrowLeft size={18} /> Back: Item Details
              </button>
              
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setShowPreview(true)}
                  className="flex-1 sm:flex-none px-6 py-3.5 rounded-xl font-semibold bg-white border border-border text-text hover:bg-slate-55 transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <Eye size={18} /> Preview
                </button>
                <button
                  type="submit"
                  className="flex-1 sm:flex-none px-8 py-3.5 rounded-xl font-semibold bg-primary hover:bg-primary-dark text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Publish Listing
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
