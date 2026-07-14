import HeroBanner from "./HeroBanner";
import HeroSideCard from "./HeroSideCard";

export default function HeroSection() {
  return (
    <section className="flex flex-col lg:flex-row gap-4 lg:gap-6 mt-4">
      <HeroBanner />
      <HeroSideCard />
    </section>
  );
}
