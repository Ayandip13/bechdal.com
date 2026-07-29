import NotificationList from "@/components/inbox/NotificationList";

export const metadata = {
  title: "Inbox | BechDal.com",
  description: "View your messages and notifications on BechDal.com.",
};

export default function InboxPage() {
  return (
    <div className="bg-background min-h-screen pt-8 pb-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <NotificationList />
      </div>
    </div>
  );
}
