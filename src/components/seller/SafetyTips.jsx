import { ShieldCheck, Check, AlertTriangle } from "lucide-react";

export default function SafetyTips() {
  const tips = [
    "Meet in a safe & public place",
    "Check the item before buying",
    "Pay only after collecting item",
    "Do not pay in advance"
  ];

  return (
    <div className="bg-emerald-50/70 dark:bg-emerald-950/20 rounded-2xl p-5 border border-emerald-100 dark:border-emerald-800/40 flex flex-col gap-4 transition-colors">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        <h3 className="font-bold text-slate-900 dark:text-emerald-200 text-base">Safety Tips for Buyers</h3>
      </div>
      
      <div className="flex flex-col gap-2.5">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <div className="mt-0.5">
              {index === 3 ? (
                <AlertTriangle className="w-4 h-4 text-amber-500" />
              ) : (
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              )}
            </div>
            <span className="text-sm text-slate-700 dark:text-slate-300">{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
