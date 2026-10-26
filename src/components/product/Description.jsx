export default function Description({ text }) {
  return (
    <div className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 md:p-8 shadow-subtle border border-slate-200/80 dark:border-slate-700/80 transition-colors">
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Product Description</h2>
      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed whitespace-pre-line">
        {text}
      </p>
    </div>
  );
}
