"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FileText,
  Scale,
  ShieldAlert,
  ShoppingBag,
  UserCheck,
  AlertTriangle,
  FileCheck,
  Mail,
  CheckCircle2,
  ChevronRight,
  ArrowLeft,
  Search,
  Sparkles,
  Award,
} from "lucide-react";

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("eligibility");
  const [searchTerm, setSearchTerm] = useState("");

  const sections = [
    {
      id: "eligibility",
      icon: UserCheck,
      title: "1. Account Registration & Eligibility",
      content: `By accessing or using BechDal.com, you agree to comply with and be legally bound by these Terms and Conditions:

• Age Requirement: You must be at least 18 years of age or possess legal parental/guardian consent to use this platform.
• Account Confidentiality: You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.
• Accurate Information: You agree to provide true, accurate, current, and complete details when creating an account or posting classified listings.`,
    },
    {
      id: "listing-rules",
      icon: ShoppingBag,
      title: "2. Marketplace Listing Rules & User Content",
      content: `BechDal.com provides a platform for users to publish classified advertisements for items, vehicles, properties, and services:

• Item Authenticity: All advertised items must be genuine, legally owned by you or authorized for sale, and accurately described.
• Fair Pricing & Details: Misleading prices, spam listings, duplicated posts across multiple categories, or deceptive descriptions are strictly prohibited.
• License to Display: By uploading images and content to BechDal.com, you grant us a non-exclusive, worldwide, royalty-free license to host, display, and promote your listings across our platform.`,
    },
    {
      id: "prohibited",
      icon: ShieldAlert,
      title: "3. Prohibited Goods & Illegal Activities",
      content: `The following items and activities are strictly banned on BechDal.com:

• Weapons, explosives, fireworks, and hazardous materials.
• Illegal substances, prescription medicines, and drugs.
• Counterfeit, pirated, stolen, or replica goods.
• Adult content, hate speech, harassment, or abusive language.
• Automated scraping, spamming, phishing, or financial scams.

Violation of these rules will result in immediate removal of listings, permanent account ban, and reporting to relevant legal authorities.`,
    },
    {
      id: "disclaimer",
      icon: AlertTriangle,
      title: "4. Platform Role & Buyer-Seller Safety Disclaimer",
      content: `BechDal.com acts purely as an online classifieds marketplace connecting independent buyers and sellers:

• No Intermediary Guarantee: BechDal.com is NOT a party to any transaction between users, nor do we store inventory or inspect items physically.
• Buyer Due Diligence: Buyers are advised to inspect items in person, verify working condition, and meet in public, safe places before making payment.
• Safe Payment Advice: NEVER send advance money, booking deposits, or UPI payments to unverified sellers prior to inspecting the item.`,
    },
    {
      id: "intellectual",
      icon: FileCheck,
      title: "5. Intellectual Property Rights",
      content: `All trademarks, logos, brand assets, site graphics, interface designs, and code belonging to BechDal.com are protected under copyright and trademark laws.

You may not copy, reproduce, reverse engineer, or redistribute any part of our platform without prior written authorization from BechDal.com.`,
    },
    {
      id: "termination",
      icon: Scale,
      title: "6. Account Suspension & Termination",
      content: `We reserve the right to suspend, limit, or terminate user accounts or remove listings immediately and without prior notice if:

• You breach any provision of these Terms & Conditions.
• We detect fraudulent, abusive, or suspicious activity linked to your account.
• Law enforcement or regulatory agencies request platform action.`,
    },
    {
      id: "governing-law",
      icon: Award,
      title: "7. Governing Law & Dispute Resolution",
      content: `These Terms shall be governed by and construed in accordance with the laws of India. 

Any legal disputes or claims arising out of or relating to the use of BechDal.com shall be subject to the exclusive jurisdiction of the competent courts in Kolkata, West Bengal.`,
    },
    {
      id: "contact-legal",
      icon: Mail,
      title: "8. Contact & Legal Notices",
      content: `For any inquiries, legal notices, or reporting violations regarding these Terms & Conditions, please contact us:

Email: legal@bechdal.com / support@bechdal.com
Address: BechDal Legal Cell, Kolkata, West Bengal, India.`,
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
          <span className="text-slate-700 dark:text-slate-300">Terms & Conditions</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-xl mb-10 relative overflow-hidden border border-slate-800">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <Scale size={280} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold tracking-wide uppercase mb-4 border border-white/20">
              <Sparkles size={14} className="text-amber-400" />
              <span>User Agreement</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Please read these terms carefully before using BechDal.com. By accessing our platform, you agree to follow these guidelines for a safe trading environment.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-emerald-400" /> Effective Date: October 2026
              </span>
              <span className="flex items-center gap-1.5">
                <Award size={14} className="text-indigo-400" /> Free & Safe Marketplace
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search terms topics..."
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
                Table of Contents
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
                  <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400">
                    <AlertTriangle size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100">Safety First</h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Never pay before seeing the item in person</p>
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
                    <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
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
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">No matching terms found</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Try searching for terms like "rules", "listings", "prohibited", or "legal".
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
