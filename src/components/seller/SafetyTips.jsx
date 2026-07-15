import { ShieldCheck, Check, AlertTriangle } from "lucide-react";

export default function SafetyTips() {
  const tips = [
    "Meet in a safe & public place",
    "Check the item before buying",
    "Pay only after collecting item",
    "Do not pay in advance"
  ];

  return (
    <div className="bg-green-50 rounded-xl p-5 border border-green-100 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <ShieldCheck className="w-5 h-5 text-green-600" />
        <h3 className="font-bold text-text text-base">Safety Tips for Buyers</h3>
      </div>
      
      <div className="flex flex-col gap-2.5">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start gap-2.5">
            <div className="mt-0.5">
              {index === 3 ? (
                <AlertTriangle className="w-4 h-4 text-amber-500" />
              ) : (
                <Check className="w-4 h-4 text-green-600" />
              )}
            </div>
            <span className="text-sm text-text-muted">{tip}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
