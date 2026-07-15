"use client";

import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ question, answer, isOpen, onClick }) {
  return (
    <div className="border border-border rounded-xl overflow-hidden mb-3 bg-white hover:border-primary/30 transition-colors">
      <button
        className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 focus:outline-none"
        onClick={onClick}
      >
        <span className="font-semibold text-text">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-text-muted transition-transform duration-300 flex-shrink-0 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>
      
      <div
        className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-text-muted text-sm leading-relaxed border-t border-border/50 pt-3">
          {answer}
        </p>
      </div>
    </div>
  );
}
