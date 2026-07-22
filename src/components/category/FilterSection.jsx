"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FilterSection({ title, defaultOpen = true, children, activeCount = 0 }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border py-4 last:border-b-0">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-left font-semibold text-text text-sm hover:text-primary transition-colors py-1 group"
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
          className={`w-4 h-4 text-text-muted group-hover:text-primary transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="mt-3 space-y-2.5 animate-fadeIn">{children}</div>}
    </div>
  );
}
