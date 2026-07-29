import Link from "next/link";
import { CheckCircle2, Eye, LayoutGrid, PlusCircle, ArrowRight } from "lucide-react";

export default function PublishSuccess({ onReset }) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 text-center animate-in zoom-in-95 duration-500">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 size={48} className="text-green-500" />
      </div>

      <h1 className="text-4xl font-bold text-text mb-4">🎉 Listing Published Successfully!</h1>
      <p className="text-lg text-text-muted mb-10 max-w-md mx-auto">
        Your listing is now live. Buyers can now see your product and contact you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
        <button 
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white py-3 px-6 rounded-lg font-semibold transition-colors shadow-sm"
        >
          <Eye size={18} />
          View My Listing
        </button>
        
        <Link 
          href="/" 
          className="flex items-center justify-center gap-2 bg-white border border-border hover:border-primary text-text hover:text-primary py-3 px-6 rounded-lg font-semibold transition-colors shadow-sm"
        >
          <LayoutGrid size={18} />
          My Listings
        </Link>

        <button 
          onClick={onReset}
          className="md:col-span-2 flex items-center justify-center gap-2 bg-slate-50 border border-slate-200 hover:bg-slate-100 text-text py-3 px-6 rounded-lg font-semibold transition-colors mt-2"
        >
          <PlusCircle size={18} />
          Sell Another Item
        </button>
      </div>

      <div className="mt-12 text-sm text-text-muted">
        <Link href="/" className="inline-flex items-center gap-1 hover:text-primary transition-colors">
          Go Home <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
