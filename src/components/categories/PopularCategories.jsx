import { Smartphone, Laptop, Car, Bike, Home, Armchair, Shirt, Briefcase, LayoutGrid, ChevronRight } from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Mobile", icon: Smartphone, color: "text-blue-500" },
    { name: "Laptop", icon: Laptop, color: "text-slate-600" },
    { name: "Car", icon: Car, color: "text-red-500" },
    { name: "Bike", icon: Bike, color: "text-emerald-500" },
    { name: "Property", icon: Home, color: "text-orange-500" },
    { name: "Furniture", icon: Armchair, color: "text-amber-700" },
    { name: "Fashion", icon: Shirt, color: "text-indigo-500" },
    { name: "Jobs", icon: Briefcase, color: "text-purple-600" },
    { name: "More", icon: LayoutGrid, color: "text-text-muted" },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-text">Popular Categories</h2>
        <button className="text-primary font-medium text-sm flex items-center hover:text-primary-dark transition-colors">
          View All Categories <ChevronRight size={16} className="ml-0.5" />
        </button>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6 justify-items-center">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <Icon size={32} className={cat.color} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
