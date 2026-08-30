import { sellCategories } from "@/constants/sellDummyData";
import { MonitorSmartphone, Smartphone, Car, Sofa, Shirt, BookOpen, Dog, Home, Briefcase, Wrench, Gamepad2, Dumbbell } from "lucide-react";
import CategoryCard from "./CategoryCard";

const iconMap = {
  MonitorSmartphone,
  Smartphone,
  Car,
  Sofa,
  Shirt,
  BookOpen,
  Dog,
  Home,
  Briefcase,
  Wrench,
  Gamepad2,
  Dumbbell,
};

export default function SellCategoryGrid({ onSelectCategory }) {
  const categoriesWithIcons = sellCategories.map(cat => ({
    ...cat,
    IconComponent: iconMap[cat.icon]
  }));

  return (
    <div className="animate-in fade-in duration-300 max-w-4xl mx-auto py-2 sm:py-6">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
          Select a Category
        </h1>
        <p className="text-xs sm:text-sm text-text-muted dark:text-slate-400 font-medium mt-1">
          Choose the main category for your listing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3.5">
        {categoriesWithIcons.map((category) => (
          <CategoryCard 
            key={category.id} 
            category={category} 
            onClick={onSelectCategory} 
          />
        ))}
      </div>
    </div>
  );
}
