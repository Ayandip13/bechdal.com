"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function AuthSuccessState({
  title = "Success!",
  description = "Your action has been completed successfully.",
  buttonText = "Continue to Login",
  buttonLink = "/login",
  onButtonClick,
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-6">
      <div className="w-16 h-16 rounded-full bg-green-50 dark:bg-green-950/50 border border-green-200 dark:border-green-800/40 text-green-600 dark:text-green-400 flex items-center justify-center mb-4 animate-in zoom-in-50 duration-300">
        <CheckCircle2 size={36} />
      </div>

      <h3 className="text-xl font-black text-slate-900 dark:text-white tracking-tight mb-2">
        {title}
      </h3>

      <p className="text-xs sm:text-sm text-text-muted dark:text-slate-300 font-medium max-w-sm mb-6 leading-relaxed">
        {description}
      </p>

      {buttonLink ? (
        <Link
          href={buttonLink}
          className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow cursor-pointer min-h-[44px]"
        >
          <span>{buttonText}</span>
          <ArrowRight size={16} />
        </Link>
      ) : (
        <button
          type="button"
          onClick={onButtonClick}
          className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow cursor-pointer min-h-[44px]"
        >
          <span>{buttonText}</span>
          <ArrowRight size={16} />
        </button>
      )}
    </div>
  );
}
