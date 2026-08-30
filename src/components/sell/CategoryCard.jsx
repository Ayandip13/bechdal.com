export default function CategoryCard({ category, onClick }) {
  const { name, description, IconComponent } = category;

  return (
    <div 
      onClick={() => onClick(category)}
      className="bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl cursor-pointer transition-all duration-200 hover:border-primary dark:hover:border-blue-400 hover:shadow-md group flex items-center gap-3"
    >
      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-700/60 flex items-center justify-center text-primary dark:text-blue-400 shrink-0 group-hover:bg-primary/10 group-hover:scale-105 transition-all">
        {IconComponent && <IconComponent size={20} />}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-slate-100 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors truncate">
          {name}
        </h3>
        <p className="text-[10px] sm:text-xs text-text-muted dark:text-slate-400 font-medium truncate mt-0.5">
          {description}
        </p>
      </div>
    </div>
  );
}

