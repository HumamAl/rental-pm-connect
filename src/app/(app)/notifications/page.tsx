import { NotificationList } from "@/components/app/notification-list";
import { notifications } from "@/data/mock-data";

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Notifications</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Stay updated on leads, matches, and platform activity
        </p>
      </div>

      <NotificationList notifications={notifications} />
    </div>
  );
}
