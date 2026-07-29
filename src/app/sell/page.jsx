import SellContainer from "@/components/sell/SellContainer";

export const metadata = {
  title: "Post a Free Ad | BechDal.com",
  description: "Sell your used or new products easily on BechDal.com. Create a free listing in minutes.",
};

export default function SellPage() {
  return (
    <div className="bg-background min-h-screen pt-4 pb-12">
      <SellContainer />
    </div>
  );
}
