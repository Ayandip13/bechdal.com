"use client";

import Link from "next/link";
import { Smartphone, Home, Car, Briefcase } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Sell Mobile",
      desc: "Instant valuation & deal",
      icon: Smartphone,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/30",
      link: "/sell?cat=mobiles",
    },
    {
      title: "Post Property",
      desc: "Zero brokerage listing",
      icon: Home,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30",
      link: "/sell?cat=properties",
    },
    {
      title: "Sell Vehicle",
      desc: "Cars, bikes & scooty",
      icon: Car,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/30",
      link: "/sell?cat=vehicles",
    },
    {
      title: "Post Job",
      desc: "Hire local talent fast",
      icon: Briefcase,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/30",
      link: "/sell?cat=jobs",
    }
  ];

  return (
    <section className="py-1">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
        {actions.map((action, index) => {
          const Icon = action.icon;
          return (
            <Link
              key={index}
              href={action.link}
              className={`flex items-center gap-2.5 sm:gap-3.5 ${action.bg} rounded-xl sm:rounded-2xl p-2.5 sm:p-4 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:shadow-md hover:border-primary/40 dark:hover:border-blue-400/60 transition-all cursor-pointer group min-h-[52px]`}
            >
              <div className={`w-8 h-8 sm:w-11 sm:h-11 ${action.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform`}>
                <Icon size={18} className={`${action.color} sm:w-[22px] sm:h-[22px]`} strokeWidth={2} />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-xs sm:text-sm truncate leading-tight">
                  {action.title}
                </h4>
                <p className="text-text-muted dark:text-slate-400 text-[10px] sm:text-xs leading-tight mt-0.5 truncate hidden sm:block">
                  {action.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


