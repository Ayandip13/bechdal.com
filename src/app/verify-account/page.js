"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ShieldCheck, ArrowRight, Edit3, Loader2 } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import OtpInput from "@/components/auth/OtpInput";
import AuthSuccessState from "@/components/auth/AuthSuccessState";
import { useAuth } from "@/context/AuthContext";

function VerifyAccountContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { verifyOtp } = useAuth();

  const target = searchParams.get("target") || "your email / mobile";
  const type = searchParams.get("type") || "register"; // 'register' | 'reset' | 'email'

  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleComplete = (code) => {
    setOtpCode(code);
    if (error) setError("");
  };

  const handleVerify = async (e) => {
    if (e) e.preventDefault();
    if (!otpCode || otpCode.length !== 6) {
      setError("Please enter the complete 6-digit verification code");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await verifyOtp({ code: otpCode, target });
      if (type === "reset") {
        router.push("/reset-password");
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setError(err.message || "Verification failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResend = async () => {
    setError("");
  };

  return (
    <AuthLayout title="Account Verification" subtitle="Verify Code">
      <AuthCard>
        {isSuccess ? (
          <AuthSuccessState
            title="Account Verified!"
            description="Your BechDal account has been successfully verified. You can now post ads and connect with local buyers directly."
            buttonText="Explore BechDal Marketplace"
            buttonLink="/"
          />
        ) : (
          <>
            {/* Heading */}
            <div className="mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary dark:text-blue-400 flex items-center justify-center mb-3">
                <ShieldCheck size={24} />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Enter Verification Code
              </h1>
              <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1 leading-relaxed">
                We sent a 6-digit verification code to{" "}
                <span className="font-extrabold text-slate-800 dark:text-slate-200">{target}</span>.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleVerify} className="flex flex-col gap-6">
              <OtpInput
                length={6}
                onComplete={handleComplete}
                error={error}
                onResend={handleResend}
                resendCooldown={60}
              />

              <button
                type="submit"
                disabled={isSubmitting || otpCode.length !== 6}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-dark disabled:opacity-50 text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow cursor-pointer min-h-[44px]"
              >
                {isSubmitting ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <span>Verify Code</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Change Email / Mobile link */}
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 text-center flex justify-between items-center text-xs">
              <Link
                href={type === "reset" ? "/forgot-password" : "/register"}
                className="font-extrabold text-primary dark:text-blue-400 hover:underline flex items-center gap-1"
              >
                <Edit3 size={13} />
                <span>Change Email / Mobile</span>
              </Link>

              <Link
                href="/login"
                className="font-bold text-text-muted dark:text-slate-400 hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </>
        )}
      </AuthCard>
    </AuthLayout>
  );
}

export default function VerifyAccountPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[70vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
      </div>
    }>
      <VerifyAccountContent />
    </Suspense>
  );
}
