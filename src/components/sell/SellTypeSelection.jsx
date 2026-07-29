import { Package, Recycle } from "lucide-react";

function SellTypeCard({ type, title, description, selected, onClick }) {
  const isSelected = selected === type;
  
  return (
    <div 
      onClick={() => onClick(type)}
      className={`
        relative p-6 rounded-2xl cursor-pointer border-2 transition-all duration-300
        flex flex-col items-center text-center gap-4 group hover:-translate-y-1
        ${isSelected ? "border-primary bg-primary/5 shadow-md" : "border-border bg-white hover:border-primary/50"}
      `}
    >
      <div className={`
        w-16 h-16 rounded-full flex items-center justify-center transition-colors
        ${isSelected ? "bg-primary text-white" : "bg-slate-100 text-text-muted group-hover:bg-primary/10 group-hover:text-primary"}
      `}>
        {type === "new" ? <Package size={32} /> : <Recycle size={32} />}
      </div>
      
      <div>
        <h3 className={`text-xl font-bold mb-2 ${isSelected ? "text-primary" : "text-text"}`}>
          {title}
        </h3>
        <p className="text-sm text-text-muted">
          {description}
        </p>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute top-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
        </div>
      )}
    </div>
  );
}

export default function SellTypeSelection({ onSelectType }) {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 max-w-5xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">What are you selling?</h1>
        <p className="text-lg text-text-muted">Choose an option below to start your listing.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
        <SellTypeCard 
          type="old"
          title="Old / Used Product"
          description="Second-hand, pre-owned items. Best for individuals."
          onClick={onSelectType}
        />
        <SellTypeCard 
          type="new"
          title="New Product"
          description="Brand new, unused items in original packaging. Best for businesses."
          onClick={onSelectType}
        />
      </div>
    </div>
  );
}
