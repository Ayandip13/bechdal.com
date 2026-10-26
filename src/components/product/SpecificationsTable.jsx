export default function SpecificationsTable({ specifications }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-subtle border border-slate-200/80 dark:border-slate-700/80 transition-colors">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {specifications.map((spec, index) => (
          <div 
            key={index} 
            className={`flex flex-col sm:flex-row sm:items-center py-3 border-b border-slate-200/80 dark:border-slate-700/80 ${
              index >= specifications.length - 2 && index % 2 === 0 ? 'md:border-b-0' : '' 
            } ${
              index === specifications.length - 1 ? 'border-b-0' : ''
            }`}
          >
            <span className="w-full sm:w-1/3 text-sm text-slate-500 dark:text-slate-400 font-medium mb-1 sm:mb-0">
              {spec.label}
            </span>
            <span className="w-full sm:w-2/3 text-sm text-slate-900 dark:text-slate-100 font-semibold">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
