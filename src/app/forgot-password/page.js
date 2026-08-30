"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Phone, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import { useAuth } from "@/context/AuthContext";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const { forgotPassword } = useAuth();

  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const val = emailOrMobile.trim();
    if (!val) {
      setError("Please enter your registered email or mobile number");
      return false;
    }

    if (val.includes("@")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        setError("Please enter a valid email address");
        return false;
      }
    } else {
      const digits = val.replace(/\D/g, "");
      if (digits.length < 10) {
        setError("Please enter a valid 10-digit mobile number");
        return false;
      }
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError("");

    try {
      await forgotPassword({ emailOrMobile });
      router.push(`/verify-account?target=${encodeURIComponent(emailOrMobile)}&type=reset`);
    } catch (err) {
      setServerError(err.message || "Failed to process request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Forgot Password" subtitle="Password Recovery">
      <AuthCard>
        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-3">
            <span className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tracking-tight">
              BechDal<span className="text-secondary dark:text-amber-400 font-black">.com</span>
            </span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Forgot Password?
          </h1>
          <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1 leading-relaxed">
            Enter your registered email address or mobile number and we will help you reset your password.
          </p>
        </div>

        {/* Server Error Alert */}
        {serverError && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 text-red-600 dark:text-red-400 text-xs font-bold leading-normal">
            {serverError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AuthInput
            label="Registered Email or Mobile Number"
            id="emailOrMobile"
            type="text"
            placeholder="e.g. name@example.com or 9876543210"
            value={emailOrMobile}
            onChange={(e) => {
              setEmailOrMobile(e.target.value);
              if (error) setError("");
              if (serverError) setServerError("");
            }}
            error={error}
            icon={emailOrMobile.includes("@") ? Mail : Phone}
            required
            autoComplete="username"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow cursor-pointer min-h-[44px]"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Continue</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Back to Login */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 text-center">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-extrabold text-primary dark:text-blue-400 hover:underline"
          >
            <ArrowLeft size={14} />
            <span>Back to Login</span>
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
