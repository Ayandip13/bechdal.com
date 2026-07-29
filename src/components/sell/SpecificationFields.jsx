import { useFormContext } from "react-hook-form";
import { dynamicSpecifications } from "@/constants/sellDummyData";

export default function SpecificationFields({ categoryId }) {
  const { register, formState: { errors } } = useFormContext();
  
  const specs = dynamicSpecifications[categoryId] || [];

  if (specs.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-border mt-4">
      {specs.map((spec) => {
        const error = errors?.specifications?.[spec.name];
        
        return (
          <div key={spec.name} className="flex flex-col gap-1.5">
            <label className="text-sm font-semibold text-text">
              {spec.label} {spec.required && "*"}
            </label>
            
            {spec.type === "select" ? (
              <select
                {...register(`specifications.${spec.name}`)}
                className={`w-full px-4 py-2.5 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 ${error ? "border-red-500" : "border-border"}`}
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
                  className="w-4 h-4 text-primary rounded border-border focus:ring-primary"
                />
                <span className="text-sm text-text">Yes, available</span>
              </div>
            ) : (
              <input
                type={spec.type}
                placeholder={`Enter ${spec.label.toLowerCase()}`}
                {...register(`specifications.${spec.name}`)}
                className={`w-full px-4 py-2.5 bg-white rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/20 ${error ? "border-red-500" : "border-border"}`}
              />
            )}
            
            {error && <span className="text-xs text-red-500">{error.message}</span>}
          </div>
        );
      })}
    </div>
  );
}
