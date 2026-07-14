import { Check } from "lucide-react";

export default function HeroSideCard() {
  const benefits = [
    "100% Free to Post",
    "Chat with Buyers",
    "Verified Sellers",
    "Safe & Secure"
  ];

  return (
    <div className="w-full lg:w-[320px] bg-white rounded-2xl p-6 shadow-sm border border-border/60 flex flex-col xl:w-[380px]">
      <h3 className="text-2xl font-bold text-text mb-6 leading-snug">
        Buy, Sell & Rent <br /> Anything!
      </h3>
      
      <div className="flex-1 flex flex-col gap-4 mb-8">
        {benefits.map((text, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-text-muted flex-shrink-0">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="text-text-muted font-medium text-sm">{text}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-secondary hover:bg-secondary-dark text-text font-bold py-3.5 rounded-lg transition-colors shadow-sm">
        Post Your Ad Now
      </button>
    </div>
  );
}
