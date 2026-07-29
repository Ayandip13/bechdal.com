import Link from "next/link";
import { Menu, Monitor, Smartphone, Car, Home, Shirt, Armchair, Briefcase, Wrench, Dog, BookOpen, LayoutGrid, Gamepad2 } from "lucide-react";

export default function CategoryNav() {
  const categories = [
    { name: "Electronics", slug: "electronics", icon: Monitor },
    { name: "Mobiles", slug: "mobiles", icon: Smartphone },
    { name: "Vehicles", slug: "vehicles", icon: Car },
    { name: "Properties", slug: "properties", icon: Home },
    { name: "Fashion", slug: "fashion", icon: Shirt },
    { name: "Furniture", slug: "furniture", icon: Armchair },
    { name: "Toys", slug: "toys", icon: Gamepad2 },
    { name: "Services", slug: "services", icon: Wrench },
    { name: "Pets", slug: "pets", icon: Dog },
    { name: "Books", slug: "books", icon: BookOpen },
    { name: "More", slug: "electronics", icon: LayoutGrid },
  ];

  return (
    <div className="bg-white border-b border-border shadow-sm hidden md:block">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* All Categories Dropdown / Link */}
        <Link
          href="/category/electronics"
          className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap mr-2"
        >
          <Menu size={18} />
          All Categories
        </Link>

        {/* Categories List */}
        <div className="flex items-center justify-between flex-1 overflow-x-auto hide-scrollbar gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link 
                key={index} 
                href={`/category/${cat.slug}`} 
                className="flex items-center gap-1.5 text-text-muted hover:text-primary text-sm font-medium transition-colors whitespace-nowrap"
              >
                <Icon size={16} className="opacity-80" />
                {cat.name}
              </Link>
            );
          })}
        </div>

      </div>
    </div>
  );
}
