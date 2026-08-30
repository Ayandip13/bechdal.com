"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Loader2 } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import PasswordInput from "@/components/auth/PasswordInput";
import PasswordRequirements from "@/components/auth/PasswordRequirements";
import AuthSuccessState from "@/components/auth/AuthSuccessState";
import { useAuth } from "@/context/AuthContext";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { resetPassword } = useAuth();

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters long";
    } else if (!/[A-Za-z]/.test(formData.newPassword) || !/[0-9]/.test(formData.newPassword)) {
      newErrors.newPassword = "Password must combine letters and numbers";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your new password";
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError("");

    try {
      await resetPassword(formData);
      setIsSuccess(true);
    } catch (err) {
      setServerError(err.message || "Failed to reset password. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Reset Password" subtitle="Set New Password">
      <AuthCard>
        {isSuccess ? (
          <AuthSuccessState
            title="Password Updated Successfully"
            description="Your password has been changed successfully. You can now log in with your new credentials."
            buttonText="Continue to Login"
            buttonLink="/login"
          />
        ) : (
          <>
            {/* Brand Header */}
            <div className="text-center mb-6">
              <Link href="/" className="inline-block mb-3">
                <span className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tracking-tight">
                  BechDal<span className="text-secondary dark:text-amber-400 font-black">.com</span>
                </span>
              </Link>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                Reset Your Password
              </h1>
              <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1 leading-relaxed">
                Choose a strong password to secure your BechDal account.
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
              <div className="flex flex-col gap-2">
                <PasswordInput
                  label="New Password"
                  id="newPassword"
                  placeholder="Enter new password"
                  value={formData.newPassword}
                  onChange={handleChange}
                  error={errors.newPassword}
                  required
                  autoComplete="new-password"
                />

                <PasswordRequirements password={formData.newPassword} />
              </div>

              <PasswordInput
                label="Confirm New Password"
                id="confirmPassword"
                placeholder="Re-enter new password"
                value={formData.confirmPassword}
                onChange={handleChange}
                error={errors.confirmPassword}
                required
                autoComplete="new-password"
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
                    <span>Reset Password</span>
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 text-center">
              <Link
                href="/login"
                className="text-xs font-extrabold text-primary dark:text-blue-400 hover:underline"
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
