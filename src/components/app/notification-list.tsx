"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NotificationItem } from "@/components/app/notification-item";
import type { Notification, NotificationType } from "@/lib/types";

interface NotificationListProps {
  notifications: Notification[];
}

const filterTabs: { value: string; label: string }[] = [
  { value: "all", label: "All" },
  { value: "lead", label: "Leads" },
  { value: "match", label: "Matches" },
  { value: "company", label: "Companies" },
  { value: "system", label: "System" },
];

export function NotificationList({ notifications }: NotificationListProps) {
  return (
    <Tabs defaultValue="all">
      <TabsList>
        {filterTabs.map((tab) => (
          <TabsTrigger key={tab.value} value={tab.value}>
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {filterTabs.map((tab) => {
        const filtered =
          tab.value === "all"
            ? notifications
            : notifications.filter(
                (n) => n.type === (tab.value as NotificationType)
              );

        return (
          <TabsContent key={tab.value} value={tab.value}>
            <ScrollArea className="h-[600px]">
              <div className="space-y-1 pr-4">
                {filtered.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    notification={notification}
                  />
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}
