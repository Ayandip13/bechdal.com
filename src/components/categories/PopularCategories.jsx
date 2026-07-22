import Link from "next/link";
import { Smartphone, Laptop, Car, Bike, Home, Armchair, Shirt, Briefcase, LayoutGrid, ChevronRight } from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Mobiles", slug: "mobiles", icon: Smartphone, color: "text-blue-500" },
    { name: "Electronics", slug: "electronics", icon: Laptop, color: "text-slate-600" },
    { name: "Vehicles", slug: "vehicles", icon: Car, color: "text-red-500" },
    { name: "Bikes", slug: "vehicles", icon: Bike, color: "text-emerald-500" },
    { name: "Properties", slug: "properties", icon: Home, color: "text-orange-500" },
    { name: "Furniture", slug: "furniture", icon: Armchair, color: "text-amber-700" },
    { name: "Fashion", slug: "fashion", icon: Shirt, color: "text-indigo-500" },
    { name: "Services", slug: "services", icon: Briefcase, color: "text-purple-600" },
    { name: "More", slug: "electronics", icon: LayoutGrid, color: "text-text-muted" },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-text">Popular Categories</h2>
        <Link href="/category/electronics" className="text-primary font-medium text-sm flex items-center hover:text-primary-dark transition-colors">
          View All Categories <ChevronRight size={16} className="ml-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 md:gap-6 justify-items-center">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <Link key={index} href={`/category/${cat.slug}`} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-20 h-20 rounded-full bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <Icon size={32} className={cat.color} strokeWidth={1.5} />
              </div>
              <span className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

