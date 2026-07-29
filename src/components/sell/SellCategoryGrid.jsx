import { sellCategories } from "@/constants/sellDummyData";
import { MonitorSmartphone, Smartphone, Car, Sofa, Shirt, BookOpen, Dog, Home, Briefcase, Wrench, Gamepad2 } from "lucide-react";
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
};

export default function SellCategoryGrid({ onSelectCategory }) {
  // Map icons
  const categoriesWithIcons = sellCategories.map(cat => ({
    ...cat,
    IconComponent: iconMap[cat.icon]
  }));

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">What are you selling?</h1>
        <p className="text-lg text-text-muted">Choose a category to start your listing.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
