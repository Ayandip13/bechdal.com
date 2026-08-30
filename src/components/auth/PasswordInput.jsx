"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

export default function PasswordInput({
  label = "Password",
  id = "password",
  placeholder = "Enter your password",
  value,
  onChange,
  error,
  required = false,
  autoComplete = "current-password",
  helperText,
}) {
  const [showPassword, setShowPassword] = useState(false);

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
        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-400 pointer-events-none">
          <Lock size={16} />
        </div>

        <input
          id={id}
          name={id}
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          className={`w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50 dark:bg-slate-900 border rounded-xl font-medium transition-all text-text dark:text-slate-100 placeholder:text-text-muted dark:placeholder:text-slate-500 focus:outline-none min-h-[44px] ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-blue-400"
          }`}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-text-muted dark:text-slate-400 hover:text-text dark:hover:text-slate-200 focus:outline-none p-1 cursor-pointer"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
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
