export default function TopBar() {
  return (
    <div className="bg-slate-900 dark:bg-slate-950 text-white text-xs py-2 px-4 sm:px-6 lg:px-8 flex-between hidden md:flex border-b border-slate-800 dark:border-slate-900 transition-colors">
      <div className="flex items-center gap-4 text-slate-300">
        <a href="#" className="hover:text-white transition-colors">📱 Download BechDal App</a>
      </div>
      <div className="flex items-center gap-6 text-slate-300">
        <a href="#" className="hover:text-white transition-colors">Help & Support</a>
        <a href="#" className="hover:text-white transition-colors">Language: English</a>
        <a href="#" className="hover:text-white transition-colors">Contact Us</a>
      </div>
    </div>
  );
}

