import { MapPin, IndianRupee, Image as ImageIcon, MessageSquare, Phone, X } from "lucide-react";
import { sellCategories } from "@/constants/sellDummyData";

export default function PreviewModal({ data, onClose }) {
  const selectedCat = sellCategories.find(c => c.id === data.category);
  const conditionLabel = data.condition ? data.condition.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : 'New';

  const formatPrice = (price) => {
    if (!price) return "0";
    return price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-xs p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200 border border-slate-200 dark:border-slate-700">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-700 p-4 flex items-center justify-between z-10">
          <h2 className="font-extrabold text-lg text-slate-900 dark:text-white">Listing Preview</h2>
          <button onClick={onClose} className="p-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 rounded-full transition-colors cursor-pointer">
            <X size={20} />
          </button>
        </div>

        {/* Images Area */}
        <div className="h-64 sm:h-80 bg-slate-100 dark:bg-slate-900 flex items-center justify-center relative">
          {data.images && data.images.length > 0 ? (
            <img src={data.images[0].url} alt="Cover" className="w-full h-full object-cover" />
          ) : (
            <div className="text-text-muted dark:text-slate-400 flex flex-col items-center">
              <ImageIcon size={48} className="mb-2 opacity-50" />
              <span>No images uploaded</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-0.5 rounded">
                  {selectedCat?.name || "Category"}
                </span>
                {data.subCategory && (
                  <span className="text-xs font-semibold text-text-muted dark:text-slate-400">
                    {data.subCategory}
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white mb-2 line-clamp-2">
                {data.title || "Your Product Title"}
              </h1>
              <div className="flex items-center text-text-muted dark:text-slate-400 text-sm gap-1 font-medium">
                <MapPin size={16} />
                <span>{[data.area, data.city, data.state].filter(Boolean).join(", ") || "Location details"}</span>
              </div>
            </div>

            <div className="text-left md:text-right">
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white flex items-center md:justify-end gap-1">
                <IndianRupee size={28} />
                {formatPrice(data.price)}
              </div>
              {data.negotiable && (
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mt-1 inline-block border border-emerald-200 dark:border-emerald-800">Price Negotiable</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              
              {/* Description */}
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-3">Description</h3>
                <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line text-sm leading-relaxed font-medium">
                  {data.description || "No description provided."}
                </p>
              </div>

              {/* Specifications */}
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
                <div className="bg-slate-50 dark:bg-slate-900 p-4 border-b border-slate-200 dark:border-slate-700">
                  <h3 className="font-extrabold text-slate-900 dark:text-white">Specifications</h3>
                </div>
                <div className="p-4 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 border-dashed pb-2">
                    <span className="text-text-muted dark:text-slate-400 font-medium">Condition</span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{conditionLabel}</span>
                  </div>
                  {data.brand && (
                    <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 border-dashed pb-2">
                      <span className="text-text-muted dark:text-slate-400 font-medium">Brand</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{data.brand}</span>
                    </div>
                  )}
                  {data.model && (
                    <div className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 border-dashed pb-2">
                      <span className="text-text-muted dark:text-slate-400 font-medium">Model</span>
                      <span className="font-bold text-slate-900 dark:text-slate-100">{data.model}</span>
                    </div>
                  )}
                  
                  {data.specifications && Object.entries(data.specifications).map(([key, value]) => {
                    if (!value) return null;
                    const displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
                    
                    return (
                      <div key={key} className="flex justify-between border-b border-slate-100 dark:border-slate-700/60 border-dashed pb-2">
                        <span className="text-text-muted dark:text-slate-400 font-medium">{displayKey}</span>
                        <span className="font-bold text-slate-900 dark:text-slate-100 text-right max-w-[50%] truncate" title={displayVal}>{displayVal}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Seller Contact Card */}
            <div className="md:col-span-1">
              <div className="border border-slate-200 dark:border-slate-700 rounded-xl p-5 bg-slate-50 dark:bg-slate-900 shadow-2xs">
                <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Seller Details</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-primary dark:text-blue-400 font-extrabold text-lg shadow-2xs">
                    {data.sellerName ? data.sellerName.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-slate-100">{data.sellerName || "User Name"}</p>
                    <p className="text-xs text-text-muted dark:text-slate-400">Member since {new Date().getFullYear()}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {data.showPhone && (
                    <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-xl font-bold transition-colors shadow-2xs">
                      <Phone size={18} />
                      {data.phoneNumber || "Show Number"}
                    </button>
                  )}
                  
                  {data.allowChat && (
                    <button type="button" className="w-full flex items-center justify-center gap-2 bg-white dark:bg-slate-800 border border-primary text-primary dark:text-blue-400 hover:bg-primary/5 py-2.5 rounded-xl font-bold transition-colors">
                      <MessageSquare size={18} />
                      Chat
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
