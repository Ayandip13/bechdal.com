import { MessageSquare, Phone } from "lucide-react";
import TrustBadge from "./TrustBadge";

export default function ProductActions() {
  return (
    <div className="flex flex-col gap-4 mt-6 lg:mt-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="flex-1 btn-primary gap-2">
          <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span>Chat with Seller</span>
        </button>
        <button className="flex-1 btn-outline gap-2">
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
          <span>Call Seller</span>
        </button>
      </div>
      
      <div className="flex justify-center mt-2">
        <TrustBadge />
      </div>
    </div>
  );
}
