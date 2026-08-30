"use client";

import { Check, X } from "lucide-react";

export default function PasswordRequirements({ password = "" }) {
  const requirements = [
    { label: "At least 8 characters long", isMet: password.length >= 8 },
    { label: "Includes letters and numbers", isMet: /[A-Za-z]/.test(password) && /[0-9]/.test(password) },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-xl p-3 border border-slate-200/80 dark:border-slate-700/80 my-1">
      <p className="text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1.5">
        Password requirements:
      </p>
      <div className="flex flex-col gap-1 text-[11px]">
        {requirements.map((req, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-1.5 font-medium ${
              req.isMet ? "text-green-600 dark:text-green-400" : "text-text-muted dark:text-slate-400"
            }`}
          >
            {req.isMet ? (
              <Check size={12} className="text-green-600 dark:text-green-400 flex-shrink-0" />
            ) : (
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-600 mx-0.5 flex-shrink-0" />
            )}
            <span>{req.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
