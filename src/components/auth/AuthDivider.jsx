"use client";

export default function AuthDivider({ text = "OR" }) {
  return (
    <div className="relative flex items-center justify-center my-4 w-full">
      <div className="border-t border-slate-200 dark:border-slate-700/80 w-full" />
      <span className="bg-white dark:bg-slate-800 px-3 text-[11px] font-extrabold uppercase tracking-wider text-text-muted dark:text-slate-400 absolute">
        {text}
      </span>
    </div>
  );
}
