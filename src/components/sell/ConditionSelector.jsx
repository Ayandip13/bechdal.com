import { useFormContext } from "react-hook-form";

const conditions = [
  { value: "brand-new", label: "Brand New" },
  { value: "like-new", label: "Like New" },
  { value: "excellent", label: "Excellent" },
  { value: "good", label: "Good" },
  { value: "fair", label: "Fair" },
];

export default function ConditionSelector() {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label className="block text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">Condition *</label>
      <div className="flex flex-wrap gap-2.5 sm:gap-3">
        {conditions.map((cond) => (
          <label
            key={cond.value}
            className={`
              relative cursor-pointer border rounded-full px-4 py-2 text-center transition-all
              hover:border-primary/50 dark:hover:border-blue-400/50 group flex items-center justify-center
              has-[:checked]:border-primary dark:has-[:checked]:border-blue-400 has-[:checked]:bg-primary/10 dark:has-[:checked]:bg-blue-500/20 has-[:checked]:text-primary dark:has-[:checked]:text-blue-400
              ${errors.condition ? "border-red-500" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-700 dark:text-slate-300"}
            `}
          >
            <input
              type="radio"
              value={cond.value}
              {...register("condition")}
              className="sr-only"
            />
            <span className="font-semibold text-xs sm:text-sm group-has-[:checked]:text-primary dark:group-has-[:checked]:text-blue-400">{cond.label}</span>
          </label>
        ))}
      </div>
      {errors.condition && <p className="text-sm text-red-500 mt-2">{errors.condition.message}</p>}
    </div>
  );
}
