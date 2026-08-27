import { Suspense } from "react";
import MainNavbar from "./MainNavbar";
import CategoryNav from "./CategoryNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col shadow-xs bg-white">
      <Suspense fallback={<div className="bg-white py-3 px-8 animate-pulse text-xs text-text-muted flex items-center justify-between"><div className="w-20 h-4 bg-slate-100 rounded"></div><div className="w-96 h-8 bg-slate-100 rounded"></div><div className="w-20 h-4 bg-slate-100 rounded"></div></div>}>
        <MainNavbar />
      </Suspense>
      <CategoryNav />
    </header>
  );
}
