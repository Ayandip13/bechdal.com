"use client";

export default function AuthCard({ children, className = "" }) {
  return (
    <div className={`bg-white dark:bg-slate-800/90 rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 dark:border-slate-700/80 transition-colors w-full ${className}`}>
      {children}
    </div>
  );
}
