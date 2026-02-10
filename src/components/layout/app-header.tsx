"use client";

import { usePathname } from "next/navigation";

const pageTitles: Record<string, string> = {
  "/": "Dashboard",
  "/leads": "Leads",
  "/matching": "Matching",
  "/pm-companies": "PM Companies",
  "/notifications": "Notifications",
};

export function AppHeader() {
  const pathname = usePathname();
  const title = pageTitles[pathname] || "Dashboard";

  return (
    <header className="h-14 border-b border-border bg-background flex items-center px-6">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-sm font-medium">{title}</h2>
      </div>
    </header>
  );
}
