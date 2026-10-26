import Link from "next/link";
import { verifiedSellers } from "@/constants/dummyData";
import SellerCard from "@/components/sellers/SellerCard";
import Breadcrumb from "@/components/common/Breadcrumb";
import { ShieldCheck, Award, Sparkles } from "lucide-react";

export const metadata = {
  title: "Verified Sellers & Business Accounts | BechDal",
  description: "Browse verified sellers and trusted businesses with authentic ratings and reviews on BechDal.",
};

export default function AllSellersPage() {
  const breadcrumbItems = [
    { label: "Verified Sellers", href: null },
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-4 flex flex-col gap-6">
      <Breadcrumb items={breadcrumbItems} />

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-900 rounded-3xl p-6 sm:p-10 text-white relative overflow-hidden shadow-subtle">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold mb-3 border border-white/20">
            <ShieldCheck size={14} className="text-emerald-300" />
            <span>100% ID Verified & Safe Transacting</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight mb-2">
            Verified Sellers Directory
          </h1>
          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            Discover community sellers, certified merchants, and local shops across India. All sellers undergo phone, email, and identity verification.
          </p>
        </div>
      </div>

      {/* Sellers Grid */}
      <div className="flex items-center justify-between gap-4 mt-2">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
          All Community Sellers ({verifiedSellers.length})
        </h2>
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Click any account to view their active catalog & reviews
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {verifiedSellers.map((seller) => (
          <SellerCard key={seller.id} {...seller} />
        ))}
      </div>
    </div>
  );
}
