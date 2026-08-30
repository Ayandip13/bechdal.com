"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "", showLabel = false, compact = false }) {
  const { theme, toggleTheme, mounted } = useTheme();

  const isDark = theme === "dark";

  if (!mounted) {
    return (
      <div 
        className={`rounded-full bg-slate-200/60 dark:bg-slate-700/60 animate-pulse ${
          compact ? "w-8 h-8" : showLabel ? "w-full h-10" : "w-9 h-9"
        } ${className}`} 
      />
    );
  }

  if (showLabel) {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        aria-label="Toggle dark and light theme"
        className={`flex items-center justify-between w-full px-3.5 py-2.5 text-xs font-semibold rounded-xl transition-all duration-200 cursor-pointer select-none border ${
          isDark
            ? "bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700/80"
            : "bg-slate-100/80 text-slate-700 border-slate-200 hover:bg-slate-200/80"
        } ${className}`}
      >
        <div className="flex items-center gap-2.5">
          {isDark ? (
            <Sun size={17} className="text-amber-400 fill-amber-400/30" />
          ) : (
            <Moon size={17} className="text-indigo-600 fill-indigo-600/30" />
          )}
          <span className="font-bold">{isDark ? "Lighter Dark Theme" : "Light Theme"}</span>
        </div>
        
        {/* Toggle switch pill */}
        <div className={`w-9 h-5 rounded-full p-0.5 transition-colors flex items-center ${isDark ? "bg-primary justify-end" : "bg-slate-300 justify-start"}`}>
          <div className="w-4 h-4 rounded-full bg-white shadow-xs transition-transform duration-200 flex items-center justify-center text-[9px]">
            {isDark ? "🌙" : "☀️"}
          </div>
        </div>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "Light" : "Lighter Dark"} theme`}
      className={`relative inline-flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none cursor-pointer group ${
        compact 
          ? "w-8 h-8 p-1.5" 
          : "w-9 h-9 p-2"
      } ${
        isDark
          ? "bg-slate-800/90 text-amber-400 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 shadow-xs"
          : "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200 hover:text-slate-900 shadow-xs"
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      <div className="relative w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {isDark ? (
          <Sun 
            size={compact ? 16 : 18} 
            className="text-amber-400 transition-all duration-300 rotate-0 hover:rotate-45" 
          />
        ) : (
          <Moon 
            size={compact ? 16 : 18} 
            className="text-indigo-600 dark:text-indigo-400 transition-all duration-300 -rotate-12 group-hover:rotate-0" 
          />
        )}
      </div>
    </button>
  );
}
