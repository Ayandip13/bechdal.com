import MainNavbar from "./MainNavbar";
import CategoryNav from "./CategoryNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col">
      <MainNavbar />
      <CategoryNav />
    </header>
  );
}
