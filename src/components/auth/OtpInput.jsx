"use client";

import { useState, useRef, useEffect } from "react";
import { AlertCircle, RotateCcw } from "lucide-react";

export default function OtpInput({
  length = 6,
  onComplete,
  error,
  onResend,
  resendCooldown = 60,
}) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [timer, setTimer] = useState(resendCooldown);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const inputRefs = useRef([]);

  // Timer countdown
  useEffect(() => {
    let interval = null;
    if (isResendDisabled && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setIsResendDisabled(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isResendDisabled, timer]);

  // Handle individual box input
  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Only take the last character typed
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onComplete(combinedOtp);
    }

    // Auto-focus next box
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace navigation
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  // Handle Paste event
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();
    if (!pastedData || isNaN(pastedData)) return;

    const pastedDigits = pastedData.slice(0, length).split("");
    const newOtp = [...otp];

    pastedDigits.forEach((digit, idx) => {
      newOtp[idx] = digit;
      if (inputRefs.current[idx]) {
        inputRefs.current[idx].value = digit;
      }
    });

    setOtp(newOtp);

    if (pastedDigits.length === length) {
      onComplete(newOtp.join(""));
      inputRefs.current[length - 1]?.focus();
    } else if (inputRefs.current[pastedDigits.length]) {
      inputRefs.current[pastedDigits.length].focus();
    }
  };

  const handleResendClick = () => {
    if (isResendDisabled) return;
    setTimer(resendCooldown);
    setIsResendDisabled(true);
    setOtp(Array(length).fill(""));
    inputRefs.current[0]?.focus();
    if (onResend) onResend();
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      {/* OTP Boxes */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 w-full" onPaste={handlePaste}>
        {otp.map((digit, idx) => (
          <input
            key={idx}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            ref={(el) => (inputRefs.current[idx] = el)}
            onChange={(e) => handleChange(e, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
            className={`w-10 h-12 sm:w-12 sm:h-14 text-center text-lg sm:text-xl font-extrabold bg-slate-50 dark:bg-slate-900 border rounded-xl focus:outline-none transition-all ${
              error
                ? "border-red-500 text-red-500 focus:ring-2 focus:ring-red-500/20"
                : "border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-primary/20 focus:border-primary dark:focus:border-blue-400"
            }`}
          />
        ))}
      </div>

      {error && (
        <p className="text-xs font-bold text-red-500 flex items-center gap-1">
          <AlertCircle size={13} />
          <span>{error}</span>
        </p>
      )}

      {/* Resend & Timer UI */}
      <div className="flex items-center justify-between w-full text-xs font-semibold text-text-muted dark:text-slate-400 pt-2 border-t border-slate-100 dark:border-slate-700/60">
        <span>Didn't receive code?</span>
        {isResendDisabled ? (
          <span className="font-bold text-slate-500 dark:text-slate-400">
            Resend in <span className="text-primary dark:text-blue-400 font-extrabold">{timer}s</span>
          </span>
        ) : (
          <button
            type="button"
            onClick={handleResendClick}
            className="text-primary dark:text-blue-400 font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <RotateCcw size={12} />
            <span>Resend Code</span>
          </button>
        )}
      </div>
    </div>
  );
}
