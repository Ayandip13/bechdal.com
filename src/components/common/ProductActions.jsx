import { MessageSquare, Phone } from "lucide-react";
import TrustBadge from "./TrustBadge";

export default function ProductActions() {
  return (
    <div className="flex flex-col gap-4 mt-6 lg:mt-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm">
          <MessageSquare className="w-5 h-5" />
          <span>Chat with Seller</span>
        </button>
        <button className="flex-1 bg-white hover:bg-gray-50 text-text font-semibold py-3.5 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors border border-border shadow-sm">
          <Phone className="w-5 h-5" />
          <span>Call Seller</span>
        </button>
      </div>
      
      <div className="flex justify-center mt-2">
        <TrustBadge />
      </div>
    </div>
  );
}
