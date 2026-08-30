import { Smartphone, Home, Car, Briefcase } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Sell Mobile",
      desc: "Get best price for your old mobile",
      icon: Smartphone,
      color: "text-emerald-600 dark:text-emerald-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/30",
    },
    {
      title: "Post Property",
      desc: "List your property for rent or sale",
      icon: Home,
      color: "text-rose-600 dark:text-rose-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-800/30",
    },
    {
      title: "Sell Vehicle",
      desc: "Sell your car or bike in easy steps",
      icon: Car,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-800/30",
    },
    {
      title: "Post Job",
      desc: "Hire or find the right opportunities",
      icon: Briefcase,
      color: "text-purple-600 dark:text-purple-400",
      bg: "bg-white dark:bg-slate-800/90",
      iconBg: "bg-purple-50 dark:bg-purple-950/40 border border-purple-100 dark:border-purple-800/30",
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 py-2">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <div 
            key={index} 
            className={`flex items-center gap-4 ${action.bg} rounded-2xl p-4 md:p-5 border border-slate-200/80 dark:border-slate-700/80 shadow-xs hover:shadow-xl hover:border-primary/40 dark:hover:border-blue-400/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer group`}
          >
            <div className={`w-14 h-14 ${action.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
              <Icon size={28} className={action.color} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-text dark:text-slate-100 text-base">{action.title}</h4>
              <p className="text-text-muted dark:text-slate-400 text-xs leading-tight mt-1 opacity-90">{action.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

