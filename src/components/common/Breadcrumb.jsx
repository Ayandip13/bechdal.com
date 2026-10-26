import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center text-sm text-text-muted dark:text-slate-400 overflow-x-auto whitespace-nowrap hide-scrollbar py-2">
      <Link href="/" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Home</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2 flex-shrink-0 text-slate-400 dark:text-slate-500" />
          {item.href ? (
            <Link href={item.href} className="hover:text-primary dark:hover:text-blue-400 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-slate-900 dark:text-slate-100 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
