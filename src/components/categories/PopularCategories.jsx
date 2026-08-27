import Link from "next/link";
import { 
  Smartphone, Monitor, Car, Home, Armchair, Shirt, 
  Briefcase, Wrench, Dog, BookOpen, ShoppingBag, Leaf, 
  Hammer, Printer, ChevronRight 
} from "lucide-react";

export default function PopularCategories() {
  const categories = [
    { name: "Electronics", slug: "electronics", icon: Monitor, color: "text-slate-600" },
    { name: "Mobiles", slug: "mobiles", icon: Smartphone, color: "text-blue-500" },
    { name: "Vehicles", slug: "vehicles", icon: Car, color: "text-red-500" },
    { name: "Properties", slug: "properties", icon: Home, color: "text-orange-500" },
    { name: "Furniture", slug: "furniture", icon: Armchair, color: "text-amber-700" },
    { name: "Fashion", slug: "fashion", icon: Shirt, color: "text-indigo-500" },
    { name: "Jobs", slug: "jobs", icon: Briefcase, color: "text-teal-600" },
    { name: "Services", slug: "services", icon: Wrench, color: "text-purple-600" },
    { name: "Books", slug: "books", icon: BookOpen, color: "text-emerald-600" },
    { name: "Pets", slug: "pets", icon: Dog, color: "text-yellow-600" },
    { name: "Pet Products", slug: "pet-products", icon: ShoppingBag, color: "text-pink-500" },
    { name: "Agriculture", slug: "agricultural-products", icon: Leaf, color: "text-green-600" },
    { name: "Construction", slug: "construction-equipment", icon: Hammer, color: "text-yellow-700" },
    { name: "Office Assets", slug: "office-equipment", icon: Printer, color: "text-blue-900" },
  ];

  return (
    <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border/50">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-text">Popular Categories</h2>
        <Link href="/category/electronics" className="text-primary font-medium text-sm flex items-center hover:text-primary-dark transition-colors">
          View All Categories <ChevronRight size={16} className="ml-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 md:gap-6 justify-items-center">
        {categories.map((cat, index) => {
          const Icon = cat.icon;
          return (
            <Link key={index} href={`/category/${cat.slug}`} className="flex flex-col items-center gap-3 cursor-pointer group">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-50 border border-slate-100 shadow-xs flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 group-hover:shadow-md transition-all group-hover:-translate-y-1">
                <Icon size={28} className={cat.color} strokeWidth={1.5} />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-text group-hover:text-primary transition-colors text-center">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

