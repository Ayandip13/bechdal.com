import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="flex-1 relative rounded-2xl overflow-hidden bg-gradient-to-r from-orange-50 to-blue-50/50 p-8 md:p-12 shadow-sm border border-border/50 flex flex-col justify-center min-h-[360px]">
      
      {/* Decorative Blob */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 max-w-lg">
        <h2 className="text-4xl md:text-5xl font-bold text-text leading-tight mb-4">
          Sell Your Old <br className="hidden md:block"/> Mobile in Minutes
        </h2>
        <p className="text-text-muted text-lg mb-8">
          Get the best price for your used mobile
        </p>
        <button className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all flex items-center gap-2 hover:gap-3 group">
          Sell Now
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Placeholder for Phones Image */}
      <div className="absolute right-8 bottom-0 w-[45%] h-[90%] hidden lg:block">
        <div className="w-full h-full bg-slate-200 rounded-t-3xl shadow-xl flex items-center justify-center text-slate-400 relative overflow-hidden">
          {/* Mocking the phones with basic CSS shapes since we don't have the image */}
          <div className="absolute -bottom-10 left-10 w-[140px] h-[300px] bg-slate-700 rounded-3xl border-[6px] border-slate-800 shadow-2xl rotate-[-10deg]"></div>
          <div className="absolute bottom-0 right-10 w-[160px] h-[320px] bg-blue-100 rounded-3xl border-[6px] border-white shadow-2xl rotate-[5deg] flex items-center justify-center">
            <div className="text-4xl opacity-20">📱</div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-text-muted hover:text-primary hover:scale-105 transition-all hidden md:flex">
        <ChevronLeft size={20} />
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-text-muted hover:text-primary hover:scale-105 transition-all hidden md:flex">
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-text-muted transition-all"></div>
        <div className="w-2 h-2 rounded-full bg-text-muted transition-all"></div>
        <div className="w-2 h-2 rounded-full bg-text-muted transition-all"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-primary transition-all"></div>
      </div>

    </div>
  );
}
