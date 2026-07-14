import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";
import CategoryNav from "./CategoryNav";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex flex-col">
      <TopBar />
      <MainNavbar />
      <CategoryNav />
    </header>
  );
}
