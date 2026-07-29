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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="sticky top-0 bg-white/90 backdrop-blur-md border-b border-border p-4 flex items-center justify-between z-10">
          <h2 className="font-bold text-lg text-text">Listing Preview</h2>
          <button onClick={onClose} className="p-2 bg-slate-100 hover:bg-slate-200 text-text rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Images Area */}
        <div className="h-64 sm:h-80 bg-slate-100 flex items-center justify-center relative">
          {data.images && data.images.length > 0 ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={data.images[0].url} alt="Cover" className="w-full h-full object-cover" />
          ) : (
            <div className="text-text-muted flex flex-col items-center">
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
                <span className="text-xs font-semibold bg-slate-100 text-text px-2 py-0.5 rounded">
                  {selectedCat?.name || "Category"}
                </span>
                {data.subCategory && (
                  <span className="text-xs font-medium text-text-muted">
                    {data.subCategory}
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-bold text-text mb-2 line-clamp-2">
                {data.title || "Your Product Title"}
              </h1>
              <div className="flex items-center text-text-muted text-sm gap-1">
                <MapPin size={16} />
                <span>{[data.area, data.city, data.state].filter(Boolean).join(", ") || "Location details"}</span>
              </div>
            </div>

            <div className="text-left md:text-right">
              <div className="text-3xl font-bold text-text flex items-center md:justify-end gap-1">
                <IndianRupee size={28} />
                {formatPrice(data.price)}
              </div>
              {data.negotiable && (
                <span className="text-xs text-green-600 font-medium bg-green-50 px-2 py-0.5 rounded mt-1 inline-block">Price Negotiable</span>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              
              {/* Description */}
              <div>
                <h3 className="text-lg font-bold text-text mb-3">Description</h3>
                <p className="text-text whitespace-pre-line text-sm leading-relaxed">
                  {data.description || "No description provided."}
                </p>
              </div>

              {/* Specifications */}
              <div className="border border-border rounded-xl overflow-hidden">
                <div className="bg-slate-50 p-4 border-b border-border">
                  <h3 className="font-bold text-text">Specifications</h3>
                </div>
                <div className="p-4 grid grid-cols-2 gap-y-4 gap-x-6 text-sm">
                  <div className="flex justify-between border-b border-border border-dashed pb-2">
                    <span className="text-text-muted">Condition</span>
                    <span className="font-semibold text-text">{conditionLabel}</span>
                  </div>
                  {data.brand && (
                    <div className="flex justify-between border-b border-border border-dashed pb-2">
                      <span className="text-text-muted">Brand</span>
                      <span className="font-semibold text-text">{data.brand}</span>
                    </div>
                  )}
                  {data.model && (
                    <div className="flex justify-between border-b border-border border-dashed pb-2">
                      <span className="text-text-muted">Model</span>
                      <span className="font-semibold text-text">{data.model}</span>
                    </div>
                  )}
                  
                  {data.specifications && Object.entries(data.specifications).map(([key, value]) => {
                    if (!value) return null;
                    const displayKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
                    const displayVal = typeof value === 'boolean' ? (value ? 'Yes' : 'No') : value;
                    
                    return (
                      <div key={key} className="flex justify-between border-b border-border border-dashed pb-2">
                        <span className="text-text-muted">{displayKey}</span>
                        <span className="font-semibold text-text text-right max-w-[50%] truncate" title={displayVal}>{displayVal}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Seller Contact Card */}
            <div className="md:col-span-1">
              <div className="border border-border rounded-xl p-5 bg-slate-50 shadow-sm">
                <h3 className="font-bold text-text mb-4">Seller Details</h3>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-white border border-border rounded-full flex items-center justify-center text-primary font-bold text-lg shadow-sm">
                    {data.sellerName ? data.sellerName.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div>
                    <p className="font-bold text-text">{data.sellerName || "User Name"}</p>
                    <p className="text-xs text-text-muted">Member since {new Date().getFullYear()}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {data.showPhone && (
                    <button type="button" className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-2.5 rounded-lg font-semibold transition-colors">
                      <Phone size={18} />
                      {data.phoneNumber || "Show Number"}
                    </button>
                  )}
                  
                  {data.allowChat && (
                    <button type="button" className="w-full flex items-center justify-center gap-2 bg-white border border-primary text-primary hover:bg-primary/5 py-2.5 rounded-lg font-semibold transition-colors">
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
