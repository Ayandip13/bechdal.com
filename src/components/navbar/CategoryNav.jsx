import { Menu, Monitor, Smartphone, Car, Home, Shirt, Armchair, Briefcase, Wrench, Dog, BookOpen, LayoutGrid } from "lucide-react";

export default function CategoryNav() {
  const categories = [
    { name: "Electronics", icon: Monitor },
    { name: "Mobiles", icon: Smartphone },
    { name: "Vehicles", icon: Car },
    { name: "Properties", icon: Home },
    { name: "Fashion", icon: Shirt },
    { name: "Furniture", icon: Armchair },
    { name: "Jobs", icon: Briefcase },
    { name: "Services", icon: Wrench },
    { name: "Pets", icon: Dog },
    { name: "Books", icon: BookOpen },
    { name: "More", icon: LayoutGrid },
  ];

  return (
    <div className="bg-white border-b border-border shadow-sm hidden md:block">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        
        {/* All Categories Dropdown */}
        <button className="flex items-center gap-2 text-primary font-semibold text-sm hover:text-primary-dark transition-colors whitespace-nowrap mr-2">
          <Menu size={18} />
          All Categories
        </button>

        {/* Categories List */}
        <div className="flex items-center justify-between flex-1 overflow-x-auto no-scrollbar gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <a 
                key={index} 
                href="#" 
                className="flex items-center gap-1.5 text-text-muted hover:text-primary text-sm font-medium transition-colors whitespace-nowrap"
              >
                <Icon size={16} className="opacity-80" />
                {cat.name}
              </a>
            );
          })}
        </div>

      </div>
    </div>
  );
}
