export default function SpecificationsTable({ specifications }) {
  if (!specifications || specifications.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-subtle border border-border/50">
      <h2 className="text-xl font-bold text-text mb-6">Specifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
        {specifications.map((spec, index) => (
          <div 
            key={index} 
            className={`flex flex-col sm:flex-row sm:items-center py-3 border-b border-border/50 ${
              index >= specifications.length - 2 && index % 2 === 0 ? 'md:border-b-0' : '' 
            } ${
              index === specifications.length - 1 ? 'border-b-0' : ''
            }`}
          >
            <span className="w-full sm:w-1/3 text-sm text-text-muted font-medium mb-1 sm:mb-0">
              {spec.label}
            </span>
            <span className="w-full sm:w-2/3 text-sm text-text font-semibold">
              {spec.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
