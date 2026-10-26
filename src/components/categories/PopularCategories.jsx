import Link from "next/link";
import { ChevronRight } from "lucide-react";
import AnimatedCategoryIcon from "./AnimatedCategoryIcon";

export default function PopularCategories() {
  const categories = [
    { name: "Electronics", slug: "electronics" },
    { name: "Mobiles", slug: "mobiles" },
    { name: "Vehicles", slug: "vehicles" },
    { name: "Properties", slug: "properties" },
    { name: "Furniture", slug: "furniture" },
    { name: "Fashion", slug: "fashion" },
    { name: "Boats", slug: "boats" },
    { name: "Gym Equipments", slug: "gym-equipment" },
    { name: "Services", slug: "services" },
    { name: "Books", slug: "books" },
    { name: "Pets", slug: "pets" },
    { name: "Pet Products", slug: "pet-products" },
    { name: "Agriculture", slug: "agricultural-products" },
    { name: "Construction", slug: "construction-equipment" },
    { name: "Office Assets", slug: "office-equipment" },
  ];

  return (
    <section className="w-full py-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl sm:text-2xl font-black text-text dark:text-white tracking-tight">Popular Categories</h2>
        <Link href="/search" className="text-primary dark:text-blue-400 font-bold text-xs sm:text-sm flex items-center hover:underline transition-all">
          View All Categories <ChevronRight size={16} className="ml-0.5" />
        </Link>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-3 sm:gap-4 md:gap-5 justify-items-center">
        {categories.map((cat, index) => {
          return (
            <Link key={index} href={`/category/${cat.slug}`} className="flex flex-col items-center gap-2.5 cursor-pointer group w-full max-w-[110px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-xs flex items-center justify-center group-hover:bg-blue-50/80 dark:group-hover:bg-slate-700 group-hover:border-primary/40 dark:group-hover:border-blue-500/50 group-hover:shadow-lg transition-all group-hover:-translate-y-1">
                <AnimatedCategoryIcon slug={cat.slug} size="lg" />
              </div>
              <span className="text-xs font-semibold text-text dark:text-slate-200 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors text-center line-clamp-1">
                {cat.name}
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}


