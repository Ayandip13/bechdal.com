"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterSection({ title, defaultOpen = true, children, activeCount = 0 }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/70 dark:border-slate-700/70 py-3.5 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm hover:text-primary dark:hover:text-blue-400 transition-colors py-1 group cursor-pointer select-none"
      >
        <span className="flex items-center gap-2">
          {title}
          {activeCount > 0 && (
            <span className="bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
              {activeCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-400 dark:text-slate-400 group-hover:text-primary dark:group-hover:text-blue-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-2.5 space-y-1 animate-fadeIn">{children}</div>}
    </div>
  );
}

