"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  Database,
  UserCheck,
  Bell,
  FileText,
  Mail,
  HelpCircle,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Search,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState("collection");
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      id: "collection",
      icon: Database,
      title: "1. Information We Collect",
      content: `At BechDal.com, we collect information to provide a safe, smooth, and efficient marketplace experience. The types of information we gather include:

• Personal Information: When you register, create an ad, or communicate with us, we collect your name, phone number, email address, and general location (city/state).
• Listing Details: Product photos, titles, descriptions, pricing, and category metadata submitted when posting classified ads.
• Usage & Device Data: IP address, browser type, operating system, unique device identifiers, referral URLs, and interactions with listings.
• Communications: Messages exchanged with buyers or sellers via our in-app chat system to prevent fraud and enforce community safety.`,
    },
    {
      id: "usage",
      icon: Eye,
      title: "2. How We Use Your Information",
      content: `We process your information for legitimate business purposes and to enhance platform security:

• Marketplace Operations: Facilitate buyer-seller connections, display your ads to relevant buyers in your city, and manage your account.
• Safety & Fraud Prevention: Detect suspicious activity, verify accounts, monitor for banned/counterfeit listings, and protect our community.
• Communication: Send notification alerts regarding buyer queries, account updates, security alerts, and customer support responses.
• Analytics & Improvements: Analyze usage patterns to optimize app performance, search algorithms, and user interface design.`,
    },
    {
      id: "sharing",
      icon: UserCheck,
      title: "3. Data Sharing & Third Parties",
      content: `We respect your privacy and DO NOT sell your personal data to third parties. We only share information under strict conditions:

• Public Ad Listings: Your public profile name, general location, ad content, and preferred contact option (chat or phone if disclosed by you) are visible to visitors.
• Service Providers: Trusted vendors providing cloud infrastructure, SMS verification, map integration, and analytics under strict confidentiality contracts.
• Legal Compliance: When required by law enforcement, court order, or legal proceedings to protect rights, property, or safety.`,
    },
    {
      id: "cookies",
      icon: Lock,
      title: "4. Cookies & Tracking Technologies",
      content: `BechDal.com uses cookies and local storage technologies to remember your preferences (such as selected location and dark/light theme), maintain active sessions, and provide seamless navigation.

You can manage or disable cookies through your browser settings, though some platform features (such as staying signed in) may not function optimally without essential cookies.`,
    },
    {
      id: "rights",
      icon: ShieldCheck,
      title: "5. Your Data Rights & Choices",
      content: `You maintain complete control over your personal information on BechDal.com:

• Access & Edit: View and update your profile details, phone number, and active listings anytime via your Account Settings.
• Delete Ads & Account: Delete your published listings instantly or request permanent account deletion through support.
• Communication Preferences: Control push notifications, email alerts, and marketing communications in your settings.`,
    },
    {
      id: "security",
      icon: Bell,
      title: "6. Security & Data Retention",
      content: `We implement industry-standard SSL/TLS encryption, secure server architecture, and strict access controls to safeguard your data against unauthorized access, loss, or alteration.

We retain user data only as long as necessary to maintain active accounts, resolve disputes, comply with statutory obligations, and enforce our terms.`,
    },
    {
      id: "contact",
      icon: Mail,
      title: "7. Contact Privacy Officer",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to our dedicated privacy team:

Email: privacy@bechdal.com
Response Time: Within 24-48 business hours.`,
    },
  ];

  const filteredSections = sections.filter(
    (sec) =>
      sec.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sec.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0b1329] text-slate-800 dark:text-slate-200 py-10 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-5xl mx-auto">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
          <Link href="/" className="hover:text-primary transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <span>/</span>
          <span className="text-slate-700 dark:text-slate-300">Privacy Policy</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-10 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <ShieldCheck size={280} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wide uppercase mb-4 border border-white/20">
              <ShieldCheck size={14} className="text-blue-200" />
              <span>Trust & Safety</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              At BechDal.com, protecting your personal information and maintaining transparency in how we handle data is our highest priority.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-blue-200 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" /> Last Updated: October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Lock size={14} className="text-amber-300" /> 100% Encrypted & Secure
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search privacy topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Quick Navigation Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 px-2">
                Policy Sections
              </h3>
              <nav className="space-y-1">
                {sections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeSection === sec.id;
                  return (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      onClick={() => setActiveSection(sec.id)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon size={16} />
                        <span className="truncate">{sec.title}</span>
                      </div>
                      <ChevronRight size={14} className={isActive ? "opacity-100" : "opacity-40"} />
                    </a>
                  );
                })}
              </nav>

              <div className="mt-6 pt-5 border-t border-slate-100 dark:border-slate-800 px-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-primary dark:text-blue-400">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">Need Help?</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Email privacy@bechdal.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Articles */}
          <div className="lg:col-span-8 space-y-6">
            {filteredSections.map((sec) => {
              const Icon = sec.icon;
              return (
                <section
                  key={sec.id}
                  id={sec.id}
                  className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm transition-all hover:border-slate-300 dark:hover:border-slate-700"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary dark:bg-blue-500/10 dark:text-blue-400">
                      <Icon size={22} />
                    </div>
                    <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                      {sec.title}
                    </h2>
                  </div>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300 whitespace-pre-line">
                    {sec.content}
                  </div>
                </section>
              );
            })}

            {filteredSections.length === 0 && (
              <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-12 text-center">
                <FileText className="mx-auto text-slate-400 mb-3" size={40} />
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching sections found</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Try searching for terms like "cookies", "security", "data", or "contact".
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
