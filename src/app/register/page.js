"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Phone, ArrowRight, Loader2 } from "lucide-react";
import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import PasswordRequirements from "@/components/auth/PasswordRequirements";
import { useAuth } from "@/context/AuthContext";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
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

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address";
      }
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else {
      const digits = formData.mobile.replace(/\D/g, "");
      if (digits.length < 10) {
        newErrors.mobile = "Please enter a valid 10-digit mobile number";
      }
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[A-Za-z]/.test(formData.password) || !/[0-9]/.test(formData.password)) {
      newErrors.password = "Password must combine letters and numbers";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the Terms of Use and Privacy Policy";
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
      await register(formData);
      // Navigate to OTP verification page
      router.push(`/verify-account?target=${encodeURIComponent(formData.email)}&type=register`);
    } catch (err) {
      setServerError(err.message || "Failed to create account. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout title="Create Account" subtitle="Join India's trusted marketplace">
      <AuthCard>
        {/* Brand Header */}
        <div className="text-center mb-6">
          <Link href="/" className="inline-block mb-3">
            <span className="text-2xl sm:text-3xl font-black text-primary dark:text-blue-400 tracking-tight">
              BechDal<span className="text-secondary dark:text-amber-400 font-black">.com</span>
            </span>
          </Link>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
            Create an Account
          </h1>
          <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1">
            Start buying and selling locally with zero fees.
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
            label="Full Name"
            id="fullName"
            type="text"
            placeholder="e.g. Ayandip Mondal"
            value={formData.fullName}
            onChange={handleChange}
            error={errors.fullName}
            icon={User}
            required
            autoComplete="name"
          />

          <AuthInput
            label="Email Address"
            id="email"
            type="email"
            placeholder="e.g. name@example.com"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
            icon={Mail}
            required
            autoComplete="email"
          />

          <AuthInput
            label="Mobile Number"
            id="mobile"
            type="tel"
            placeholder="e.g. 9876543210"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
            icon={Phone}
            required
            autoComplete="tel"
          />

          <div className="flex flex-col gap-2">
            <PasswordInput
              label="Password"
              id="password"
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              required
              autoComplete="new-password"
            />
            
            <PasswordRequirements password={formData.password} />
          </div>

          <PasswordInput
            label="Confirm Password"
            id="confirmPassword"
            placeholder="Re-enter your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            error={errors.confirmPassword}
            required
            autoComplete="new-password"
          />

          {/* Terms & Conditions Checkbox */}
          <div className="flex flex-col gap-1 mt-1">
            <label className="flex items-start gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="w-4 h-4 text-primary rounded border-slate-300 dark:border-slate-700 focus:ring-primary dark:bg-slate-900 mt-0.5"
              />
              <span className="text-xs text-text-muted dark:text-slate-300 font-medium leading-relaxed">
                I agree to the{" "}
                <Link href="/" className="font-bold text-primary dark:text-blue-400 hover:underline">
                  Terms of Use
                </Link>{" "}
                and{" "}
                <Link href="/" className="font-bold text-primary dark:text-blue-400 hover:underline">
                  Privacy Policy
                </Link>
                .
              </span>
            </label>
            {errors.agreeTerms && (
              <p className="text-[11px] font-bold text-red-500">{errors.agreeTerms}</p>
            )}
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
                <span>Create Account</span>
                <ArrowRight size={16} />
              </>
            )}
          </button>
        </form>

        {/* Already have an account link */}
        <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-700/60 text-center">
          <p className="text-xs text-text-muted dark:text-slate-400 font-medium">
            Already have an account?{" "}
            <Link href="/login" className="font-extrabold text-primary dark:text-blue-400 hover:underline ml-1">
              Log In
            </Link>
          </p>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
