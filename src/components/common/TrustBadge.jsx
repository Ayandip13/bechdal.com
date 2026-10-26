import { ShieldCheck } from "lucide-react";

export default function TrustBadge() {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-200/80 dark:border-slate-700/80 transition-colors">
      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
      <span>100% Safe & Secure Transactions</span>
    </div>
  );
}
