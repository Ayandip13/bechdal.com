import { useState, useRef } from "react";
import { useFormContext } from "react-hook-form";
import { UploadCloud, X, Image as ImageIcon, CheckCircle, AlertCircle } from "lucide-react";

export default function ImageUploader() {
  const { setValue, watch, formState: { errors } } = useFormContext();
  const images = watch("images") || [];
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const newImages = Array.from(files).slice(0, 10 - images.length).map(file => ({
      file,
      url: URL.createObjectURL(file),
      id: Math.random().toString(36).substring(7)
    }));
    
    setValue("images", [...images, ...newImages], { shouldValidate: true });
  };

  const onDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeImage = (indexToRemove) => {
    const newImages = images.filter((_, idx) => idx !== indexToRemove);
    setValue("images", newImages, { shouldValidate: true });
  };

  const moveImageToFront = (index) => {
    if (index === 0) return;
    const newImages = [...images];
    const [item] = newImages.splice(index, 1);
    newImages.unshift(item);
    setValue("images", newImages);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-border pb-4">
        <h2 className="text-xl font-bold text-text mb-1">Photos</h2>
        <p className="text-sm text-text-muted">Upload up to 10 photos. Listings with clear photos sell faster.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Uploader Area */}
        <div className="lg:col-span-2 space-y-4">
          <div
            className={`
              relative border-2 border-dashed rounded-xl p-8 text-center transition-all
              ${dragActive ? "border-primary bg-primary/5" : "border-border bg-slate-50 hover:bg-slate-100/80"}
              ${errors.images ? "border-red-500 bg-red-50" : ""}
            `}
            onDragEnter={onDrag}
            onDragLeave={onDrag}
            onDragOver={onDrag}
            onDrop={onDrop}
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
            
            <div className="flex flex-col items-center justify-center gap-4 pointer-events-none">
              <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <UploadCloud size={32} />
              </div>
              <div>
                <p className="font-semibold text-text text-lg">Click to upload or drag & drop</p>
                <p className="text-sm text-text-muted mt-1">PNG, JPG or JPEG (Max 10 images)</p>
              </div>
            </div>
            
            <button 
              type="button"
              onClick={() => inputRef.current?.click()}
              className="mt-6 px-6 py-2.5 bg-white border border-border rounded-lg text-sm font-semibold text-text hover:border-primary hover:text-primary transition-colors shadow-sm"
            >
              Select Photos
            </button>
          </div>

          {errors.images && <p className="text-sm text-red-500">{errors.images.message}</p>}

          {/* Preview Grid */}
          {images.length > 0 && (
            <div className="pt-4">
              <h3 className="font-semibold text-text mb-4 text-sm">Uploaded Photos ({images.length}/10)</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <div key={img.id} className="relative group rounded-lg overflow-hidden border border-border aspect-square bg-slate-100 animate-in zoom-in duration-300">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={img.url} alt="preview" className="w-full h-full object-cover" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <div className="flex justify-between">
                        {idx !== 0 ? (
                          <button 
                            type="button"
                            onClick={() => moveImageToFront(idx)}
                            className="bg-white/90 hover:bg-white text-[10px] px-2 py-1 rounded text-text font-medium"
                          >
                            Set Cover
                          </button>
                        ) : (
                          <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded">COVER</span>
                        )}
                        <button 
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="bg-red-500/90 hover:bg-red-500 text-white w-6 h-6 rounded flex items-center justify-center ml-auto"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Cover Label if not hovering */}
                    {idx === 0 && (
                      <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded shadow-sm group-hover:hidden">
                        COVER
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Guidelines Card */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 sticky top-28">
            <h3 className="font-bold text-primary flex items-center gap-2 mb-4">
              <ImageIcon size={18} /> Photo Guidelines
            </h3>
            
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2 text-text">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Use a clean, plain background.</span>
              </li>
              <li className="flex items-start gap-2 text-text">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Ensure good natural lighting.</span>
              </li>
              <li className="flex items-start gap-2 text-text">
                <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>Show any damages clearly if used.</span>
              </li>
              <li className="flex items-start gap-2 text-text">
                <AlertCircle size={16} className="text-amber-500 flex-shrink-0 mt-0.5" />
                <span>No blurry or low-res photos.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
