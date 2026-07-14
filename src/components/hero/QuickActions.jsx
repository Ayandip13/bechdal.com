import { Smartphone, Home, Car, Briefcase } from "lucide-react";

export default function QuickActions() {
  const actions = [
    {
      title: "Sell Mobile",
      desc: "Get best price for your old mobile",
      icon: Smartphone,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      iconBg: "bg-emerald-100",
    },
    {
      title: "Post Property",
      desc: "List your property for rent or sale",
      icon: Home,
      color: "text-rose-600",
      bg: "bg-rose-50",
      iconBg: "bg-rose-100",
    },
    {
      title: "Sell Vehicle",
      desc: "Sell your car or bike in easy steps",
      icon: Car,
      color: "text-blue-600",
      bg: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      title: "Post Job",
      desc: "Hire or find the right opportunities",
      icon: Briefcase,
      color: "text-purple-600",
      bg: "bg-purple-50",
      iconBg: "bg-purple-100",
    }
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <div 
            key={index} 
            className={`flex items-center gap-4 ${action.bg} rounded-2xl p-4 md:p-5 border border-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow cursor-pointer group`}
          >
            <div className={`w-14 h-14 ${action.iconBg} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
              <Icon size={28} className={action.color} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-bold text-text text-base">{action.title}</h4>
              <p className="text-text-muted text-xs leading-tight mt-1 opacity-90">{action.desc}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}
