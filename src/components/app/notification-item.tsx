import { cn } from "@/lib/utils";
import { UserPlus, GitCompareArrows, Building2, Settings } from "lucide-react";
import type { Notification, NotificationType } from "@/lib/types";

interface NotificationItemProps {
  notification: Notification;
}

const typeConfig: Record<
  NotificationType,
  { icon: typeof UserPlus; color: string; bg: string }
> = {
  lead: { icon: UserPlus, color: "text-blue-600", bg: "bg-blue-100" },
  match: { icon: GitCompareArrows, color: "text-green-600", bg: "bg-green-100" },
  company: { icon: Building2, color: "text-purple-600", bg: "bg-purple-100" },
  system: { icon: Settings, color: "text-gray-600", bg: "bg-gray-100" },
};

function formatRelativeTime(timestamp: string): string {
  const now = new Date();
  const date = new Date(timestamp);
  const diffMs = now.getTime() - date.getTime();
  const diffMinutes = Math.floor(diffMs / (1000 * 60));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffMinutes < 60) return `${diffMinutes}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  return `${diffDays}d ago`;
}

export function NotificationItem({ notification }: NotificationItemProps) {
  const config = typeConfig[notification.type];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-3 rounded-lg transition-colors",
        !notification.read && "bg-muted/50"
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center w-8 h-8 rounded-full shrink-0",
          config.bg
        )}
      >
        <Icon className={cn("w-4 h-4", config.color)} />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          {!notification.read && (
            <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
          )}
          <p
            className={cn(
              "text-sm truncate",
              !notification.read ? "font-semibold" : "font-medium"
            )}
          >
            {notification.title}
          </p>
        </div>
        <p className="text-sm text-muted-foreground mt-0.5 line-clamp-2">
          {notification.description}
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          {formatRelativeTime(notification.timestamp)}
        </p>
      </div>
    </div>
  );
}
