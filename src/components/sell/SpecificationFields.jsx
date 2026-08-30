import { useFormContext } from "react-hook-form";
import { dynamicSpecifications } from "@/constants/sellDummyData";

export default function SpecificationFields({ categoryId }) {
  const { register, formState: { errors } } = useFormContext();
  
  const specs = dynamicSpecifications[categoryId] || [];

  if (specs.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-700/80 mt-4">
      {specs.map((spec) => {
        const error = errors?.specifications?.[spec.name];
        
        return (
          <div key={spec.name} className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-slate-900 dark:text-slate-100">
              {spec.label} {spec.required && "*"}
            </label>
            
            {spec.type === "select" ? (
              <select
                {...register(`specifications.${spec.name}`)}
                className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 ${error ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
              >
                <option value="">Select {spec.label}</option>
                {spec.options.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            ) : spec.type === "checkbox" ? (
              <div className="flex items-center gap-2 h-[42px]">
                <input
                  type="checkbox"
                  {...register(`specifications.${spec.name}`)}
                  className="w-4 h-4 text-primary rounded border-slate-300 dark:border-slate-700 focus:ring-primary"
                />
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">Yes, available</span>
              </div>
            ) : (
              <input
                type={spec.type}
                placeholder={`Enter ${spec.label.toLowerCase()}`}
                {...register(`specifications.${spec.name}`)}
                className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 ${error ? "border-red-500" : "border-slate-200 dark:border-slate-700"}`}
              />
            )}
            
            {error && <span className="text-xs text-red-500">{error.message}</span>}
          </div>
        );
      })}
    </div>
  );
}
