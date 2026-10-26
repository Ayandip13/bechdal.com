"use client";

import Link from "next/link";
import {
  AnimatedGadgetActionIcon,
  AnimatedPropertyActionIcon,
  AnimatedCarActionIcon,
  AnimatedActionArrow,
} from "@/components/common/ActionAnimatedIcons";

export default function QuickActions() {
  const actions = [
    {
      title: "Sell Mobile",
      desc: "Instant deal & cash",
      AnimatedIcon: AnimatedGadgetActionIcon,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/30",
      link: "/sell?cat=mobiles",
    },
    {
      title: "Post Property",
      desc: "Zero brokerage listing",
      AnimatedIcon: AnimatedPropertyActionIcon,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30",
      link: "/sell?cat=properties",
    },
    {
      title: "Sell Vehicle",
      desc: "Cars, bikes & scooty",
      AnimatedIcon: AnimatedCarActionIcon,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/30",
      link: "/sell?cat=vehicles",
    },
  ];

  return (
    <section className="py-1">
      <div className="grid grid-cols-3 gap-2 sm:gap-3.5">
        {actions.map((action, index) => {
          const AnimatedIconComponent = action.AnimatedIcon;
          return (
            <Link
              key={index}
              href={action.link}
              className={`flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1.5 sm:gap-3 ${action.bg} rounded-xl p-2 sm:p-3 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs hover:shadow-md hover:border-primary/40 dark:hover:border-blue-400/60 transition-all cursor-pointer group min-h-[46px] sm:min-h-[50px] text-center sm:text-left hover:scale-[1.02] active:scale-[0.98] btn-shimmer`}
            >
              <div className={`w-7 h-7 sm:w-10 sm:h-10 ${action.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                <AnimatedIconComponent size={18} className={action.color} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-center sm:justify-between">
                  <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-[11px] sm:text-xs md:text-sm truncate leading-tight group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    {action.title}
                  </h4>
                  <AnimatedActionArrow size={12} className="hidden lg:block text-slate-400 group-hover:text-primary dark:group-hover:text-blue-400 ml-1" />
                </div>
                <p className="text-text-muted dark:text-slate-400 text-[10px] leading-tight mt-0.5 truncate hidden md:block font-medium">
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



