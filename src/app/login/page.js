"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Phone, Lock, ArrowRight, Loader2 } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthDivider from "@/components/auth/AuthDivider";
import SocialLoginButton from "@/components/auth/SocialLoginButton";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, loginWithGoogle } = useAuth();

  const [formData, setFormData] = useState({
    emailOrMobile: "",
    password: "",
    rememberMe: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear inline error on typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};
    const val = formData.emailOrMobile.trim();

    if (!val) {
      newErrors.emailOrMobile = "Email or Mobile number is required";
    } else if (val.includes("@")) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(val)) {
        newErrors.emailOrMobile = "Please enter a valid email address";
      }
    } else {
      // Mobile validation: digits only, 10 digits
      const mobileDigits = val.replace(/\D/g, "");
      if (mobileDigits.length < 10) {
        newErrors.emailOrMobile = "Please enter a valid 10-digit mobile number";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setServerError("");

    try {
      await login(formData);
      router.push("/");
    } catch (err) {
      setServerError(err.message || "Failed to log in. Please check your credentials.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsSubmitting(true);
    try {
      await loginWithGoogle();
      router.push("/");
    } catch (err) {
      setServerError("Failed to sign in with Google.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Login" subtitle="Access your BechDal account">
      <AuthCard>
        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-3">
            <span className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tracking-tight">
              BechDal<span className="text-secondary dark:text-amber-400 font-black">.com</span>
            </span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Welcome back
          </h1>
          <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1">
            Log in to manage your ads, chats, and saved items.
          </p>
        </div>

        {/* Server Error Alert */}
        {serverError && (
          <div className="mb-5 p-3 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800/40 text-red-600 dark:text-red-400 text-xs font-bold leading-normal text-center">
            {serverError}
          </div>
        )}

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <AuthInput
            label="Email or Mobile Number"
            id="emailOrMobile"
            type="text"
            placeholder="e.g. name@example.com or 9876543210"
            value={formData.emailOrMobile}
            onChange={handleChange}
            error={errors.emailOrMobile}
            icon={formData.emailOrMobile.includes("@") ? Mail : Phone}
            required
            autoComplete="username"
          />

          <div className="flex flex-col gap-1">
            <PasswordInput
              label="Password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              autoComplete="current-password"
            />
            
            <div className="flex items-center justify-between mt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary rounded border-slate-300 dark:border-slate-700 focus:ring-primary dark:bg-slate-900"
                />
                <span className="text-xs font-medium text-text-muted dark:text-slate-300">Remember me</span>
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-bold text-primary dark:text-blue-400 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl text-xs sm:text-sm transition-all shadow-sm hover:shadow cursor-pointer min-h-[44px]"
          >
            {isSubmitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                <span>Log In</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        <AuthDivider text="OR" />

        {/* Social Login */}
        <SocialLoginButton onClick={handleGoogleLogin} isLoading={isSubmitting} />

        {/* Create Account Link */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 text-center">
          <p className="text-xs text-text-muted dark:text-slate-400 font-medium">
            New to BechDal?{" "}
            <Link href="/register" className="font-extrabold text-primary dark:text-blue-400 hover:underline ml-1">
              Create an Account
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
