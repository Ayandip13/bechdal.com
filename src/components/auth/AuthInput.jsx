"use client";

import { AlertCircle } from "lucide-react";

export default function AuthInput({
  label,
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon: Icon,
  required = false,
  autoComplete,
  disabled = false,
  helperText,
}) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label htmlFor={id} className="text-xs font-extrabold text-slate-800 dark:text-slate-200 flex items-center justify-between">
          <span>
            {label} {required && <span className="text-red-500">*</span>}
          </span>
        </label>
      )}

      <div className="relative w-full">
        {Icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-400 pointer-events-none">
            <Icon size={16} />
          </div>
        )}

        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          disabled={disabled}
          className={`w-full py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border rounded-xl font-medium transition-all text-text dark:text-slate-100 placeholder:text-text-muted dark:placeholder:text-slate-500 focus:outline-none min-h-[44px] ${
            Icon ? "pl-10 pr-4" : "px-4"
          } ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-blue-400"
          }`}
        />
      </div>

      {error ? (
        <p className="text-[11px] font-bold text-red-500 flex items-center gap-1 mt-0.5">
          <AlertCircle size={12} className="flex-shrink-0" />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p className="text-[11px] text-text-muted dark:text-slate-400 font-medium">{helperText}</p>
      ) : null}
    </div>
  );
}
