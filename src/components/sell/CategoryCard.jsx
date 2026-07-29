export default function CategoryCard({ category, onClick }) {
  const { icon: IconStr, name, description } = category;
  
  // We need to resolve the icon from the string. Since we are importing them dynamically in the grid,
  // we'll expect the actual React component passed down or we can map it here.
  // We'll map it in the parent and pass it.
  
  return (
    <div 
      onClick={() => onClick(category)}
      className="bg-white border border-border p-6 rounded-2xl cursor-pointer transition-all duration-300 hover:border-primary hover:shadow-subtle hover:-translate-y-1 group flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-full bg-slate-50 flex items-center justify-center text-primary mb-4 group-hover:bg-primary/10 transition-colors">
        {category.IconComponent && <category.IconComponent size={28} />}
      </div>
      <h3 className="text-lg font-bold text-text mb-1 group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-sm text-text-muted mt-auto">
        {description}
      </p>
    </div>
  );
}
