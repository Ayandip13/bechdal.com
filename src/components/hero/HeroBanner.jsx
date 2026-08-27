import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="flex-1 relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-50 to-blue-50/50 p-6 md:p-12 shadow-xs border border-border/50 flex flex-col justify-center min-h-[240px] sm:min-h-[280px] md:min-h-[360px]">
      
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-black text-text leading-tight mb-2 md:mb-4">
          Sell Your Old <br className="hidden md:block"/> Mobile in Minutes
        </h2>
        <p className="text-text-muted text-xs sm:text-base md:text-lg mb-4 md:mb-8 font-semibold">
          Get the best price for your used mobile with Zero Platform Fees!
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold shadow-sm transition-all flex items-center gap-1.5 hover:gap-2.5 group text-xs sm:text-sm cursor-pointer w-fit">
          Sell Now
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Placeholder for Phones Image */}
      <div className="absolute right-8 bottom-0 w-[45%] h-[90%] hidden lg:block">
        <div className="w-full h-full bg-slate-200 rounded-t-3xl shadow-xl flex items-center justify-center text-slate-400 relative overflow-hidden">
          <div className="absolute -bottom-10 left-10 w-[140px] h-[300px] bg-slate-700 rounded-3xl border-[6px] border-slate-800 shadow-2xl rotate-[-10deg]"></div>
          <div className="absolute bottom-0 right-10 w-[160px] h-[320px] bg-blue-100 rounded-3xl border-[6px] border-white shadow-2xl rotate-[5deg] flex items-center justify-center">
            <div className="text-4xl opacity-20">📱</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-text-muted hover:text-primary hover:scale-105 transition-all hidden md:flex cursor-pointer border border-slate-100">
        <ChevronLeft size={18} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-9 h-9 bg-white rounded-full shadow-md flex items-center justify-center text-text-muted hover:text-primary hover:scale-105 transition-all hidden md:flex cursor-pointer border border-slate-100">
        <ChevronRight size={18} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-text-muted/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-text-muted/60"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-text-muted/60"></div>
        <div className="w-2 h-2 rounded-full bg-primary"></div>
      </div>

    </div>
  );
}
