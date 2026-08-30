"use client";

import Link from "next/link";
import { ArrowLeft, ShieldCheck } from "lucide-react";

export default function AuthLayout({ children, backUrl = "/" }) {
  return (
    <div className="min-h-[75vh] bg-background text-text transition-colors flex flex-col justify-center items-center py-6 px-4 sm:px-6">
      {/* Centered Form Wrapper */}
      <div className="w-full max-w-[440px] mx-auto flex flex-col items-center">
        
        {/* Optional Back to Marketplace Link */}
        <div className="w-full flex items-center justify-between mb-4 px-1">
          <Link
            href={backUrl}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-text-muted dark:text-slate-400 hover:text-primary dark:hover:text-blue-400 transition-colors"
          >
            <ArrowLeft size={15} />
            <span>Back to Marketplace</span>
          </Link>

          <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <ShieldCheck size={12} className="text-primary dark:text-blue-400" />
            <span>Secure</span>
          </span>
        </div>

        {/* Children Form Card */}
        {children}

        {/* Minimal Footer */}
        <div className="mt-6 text-center text-[11px] text-text-light dark:text-slate-500 font-medium">
          © 2026 BechDal.com •{" "}
          <Link href="/" className="hover:underline">
            Terms
          </Link>{" "}
          •{" "}
          <Link href="/" className="hover:underline">
            Privacy
          </Link>{" "}
          •{" "}
          <Link href="/" className="hover:underline">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
}

