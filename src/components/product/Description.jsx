export default function Description({ text }) {
  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-subtle border border-border/50">
      <h2 className="text-xl font-bold text-text mb-4">Product Description</h2>
      <p className="text-text-muted text-sm leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
