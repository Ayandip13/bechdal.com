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
      <label className="block text-sm font-semibold text-text mb-3">Condition *</label>
      <div className="flex flex-wrap gap-3">
        {conditions.map((cond) => (
          <label
            key={cond.value}
            className={`
              relative cursor-pointer border rounded-full px-4 py-2 text-center transition-all
              hover:border-primary/50 group flex items-center justify-center
              has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:text-primary
              ${errors.condition ? "border-red-500" : "border-border text-text-muted"}
            `}
          >
            <input
              type="radio"
              value={cond.value}
              {...register("condition")}
              className="sr-only"
            />
            <span className="font-semibold text-sm group-has-[:checked]:text-primary">{cond.label}</span>
          </label>
        ))}
      </div>
      {errors.condition && <p className="text-sm text-red-500 mt-2">{errors.condition.message}</p>}
    </div>
  );
}
