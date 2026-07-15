import * as LucideIcons from "lucide-react";

export default function SpecificationList({ features }) {
  if (!features || features.length === 0) return null;

  return (
    <div>
      <h3 className="font-bold text-text mb-4 text-base">Key Features</h3>
      <div className="flex flex-col gap-3">
        {features.map((feature, index) => {
          // Dynamically get the icon from lucide-react if it exists, otherwise fallback to CheckCircle2
          const Icon = LucideIcons[feature.icon] || LucideIcons.CheckCircle2;
          
          return (
            <div key={index} className="flex items-start gap-3">
              <div className="mt-0.5 text-text-muted">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-sm text-text-muted">{feature.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
