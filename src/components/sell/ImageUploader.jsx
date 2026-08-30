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
      <div className="border-b border-slate-100 dark:border-slate-700/80 pb-4">
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white mb-1">Photos</h2>
        <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium">Upload up to 10 photos. Listings with clear photos sell faster.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        
        {/* Uploader Area */}
        <div className="lg:col-span-2 space-y-4">
          <div
            className={`
              relative border-2 border-dashed rounded-2xl p-6 sm:p-8 text-center transition-all cursor-pointer
              ${dragActive ? "border-primary dark:border-blue-400 bg-primary/5 dark:bg-blue-500/10" : "border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800/60"}
              ${errors.images ? "border-red-500 bg-red-50/20" : ""}
            `}
            onDragEnter={onDrag}
            onDragLeave={onDrag}
            onDragOver={onDrag}
            onDrop={onDrop}
            onClick={() => inputRef.current?.click()}
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleChange}
            />
            
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-2xs flex items-center justify-center text-primary dark:text-blue-400">
                <UploadCloud size={28} />
              </div>
              <div>
                <p className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">Click to upload or drag & drop</p>
                <p className="text-xs text-text-muted dark:text-slate-400 mt-1 font-medium">PNG, JPG or JPEG (Max 10 images)</p>
              </div>
            </div>
            
            <button 
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                inputRef.current?.click();
              }}
              className="mt-4 px-5 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-800 dark:text-slate-200 hover:border-primary dark:hover:border-blue-400 transition-colors shadow-2xs cursor-pointer"
            >
              Select Photos
            </button>
          </div>

          {errors.images && <p className="text-sm text-red-500">{errors.images.message}</p>}

          {/* Preview Grid */}
          {images.length > 0 && (
            <div className="pt-4">
              <h3 className="font-bold text-slate-900 dark:text-slate-100 mb-3 text-xs sm:text-sm">Uploaded Photos ({images.length}/10)</h3>
              <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 aspect-square bg-slate-100 dark:bg-slate-900 animate-in zoom-in duration-200">
                    <img src={img.url} alt="preview" className="w-full h-full object-cover" />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2">
                      <div className="flex justify-between">
                        {idx !== 0 ? (
                          <button 
                            type="button"
                            onClick={() => moveImageToFront(idx)}
                            className="bg-white/90 text-slate-900 hover:bg-white text-[10px] px-2 py-0.5 rounded font-bold"
                          >
                            Set Cover
                          </button>
                        ) : (
                          <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">COVER</span>
                        )}
                        <button 
                          type="button"
                          onClick={() => removeImage(idx)}
                          className="bg-red-600 hover:bg-red-700 text-white w-5 h-5 rounded flex items-center justify-center ml-auto cursor-pointer"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Cover Label if not hovering */}
                    {idx === 0 && (
                      <div className="absolute top-2 left-2 bg-primary text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-2xs group-hover:hidden">
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
          <div className="bg-blue-50 dark:bg-slate-900 border border-blue-100 dark:border-slate-700/80 rounded-2xl p-5 sticky top-28">
            <h3 className="font-extrabold text-primary dark:text-blue-400 flex items-center gap-2 mb-3 text-sm">
              <ImageIcon size={18} /> Photo Guidelines
            </h3>
            
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Use a clean, plain background.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Ensure good natural lighting.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <CheckCircle size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                <span>Show any damages clearly if used.</span>
              </li>
              <li className="flex items-start gap-2 text-slate-700 dark:text-slate-300 font-medium">
                <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                <span>No blurry or low-res photos.</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
