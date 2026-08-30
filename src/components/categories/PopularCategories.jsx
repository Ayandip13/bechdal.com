import Link from "next/link";
import { 
  Smartphone, Monitor, Car, Home, Armchair, Shirt, 
  Briefcase, Wrench, Dog, BookOpen, ShoppingBag, Leaf, 
  Hammer, Printer, ChevronRight 
} from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Electronics", slug: "electronics", icon: Monitor, color: "text-slate-600 dark:text-slate-300" },
    { name: "Mobiles", slug: "mobiles", icon: Smartphone, color: "text-blue-500 dark:text-blue-400" },
    { name: "Vehicles", slug: "vehicles", icon: Car, color: "text-red-500 dark:text-red-400" },
    { name: "Properties", slug: "properties", icon: Home, color: "text-orange-500 dark:text-orange-400" },
    { name: "Furniture", slug: "furniture", icon: Armchair, color: "text-amber-700 dark:text-amber-400" },
    { name: "Fashion", slug: "fashion", icon: Shirt, color: "text-indigo-500 dark:text-indigo-400" },
    { name: "Jobs", slug: "jobs", icon: Briefcase, color: "text-teal-600 dark:text-teal-400" },
    { name: "Services", slug: "services", icon: Wrench, color: "text-purple-600 dark:text-purple-400" },
    { name: "Books", slug: "books", icon: BookOpen, color: "text-emerald-600 dark:text-emerald-400" },
    { name: "Pets", slug: "pets", icon: Dog, color: "text-yellow-600 dark:text-yellow-400" },
    { name: "Pet Products", slug: "pet-products", icon: ShoppingBag, color: "text-pink-500 dark:text-pink-400" },
    { name: "Agriculture", slug: "agricultural-products", icon: Leaf, color: "text-green-600 dark:text-green-400" },
    { name: "Construction", slug: "construction-equipment", icon: Hammer, color: "text-yellow-700 dark:text-yellow-400" },
    { name: "Office Assets", slug: "office-equipment", icon: Printer, color: "text-blue-900 dark:text-blue-300" },
  ];

  return (
    <section className="w-full py-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight">Popular Categories</h2>
        <Link href="/category/electronics" className="text-primary dark:text-blue-400 font-bold text-xs sm:text-sm flex items-center hover:underline transition-all">
          View All Categories <ChevronRight size={16} className="ml-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 justify-items-center">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <Link key={index} href={`/category/${cat.slug}`} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center justify-center group-hover:bg-blue-50/80 dark:group-hover:bg-slate-700 group-hover:border-primary/40 dark:group-hover:border-blue-500/50 group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                <Icon size={28} className={cat.color} strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-text dark:text-slate-200 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors text-center">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


