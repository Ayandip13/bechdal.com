import { ShieldCheck } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium text-text-muted bg-gray-50 px-3 py-1.5 rounded-full border border-border/50">
      <ShieldCheck className="w-4 h-4 text-green-600" />
      <span>100% Safe & Secure Transactions</span>
    </div>
  );
}
