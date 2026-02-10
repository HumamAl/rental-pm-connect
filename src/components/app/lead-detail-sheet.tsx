"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Lead } from "@/lib/types";

interface LeadDetailSheetProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

function formatPropertyType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export function LeadDetailSheet({
  lead,
  open,
  onOpenChange,
}: LeadDetailSheetProps) {
  if (!lead) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>{lead.name}</SheetTitle>
          <SheetDescription>Lead Details</SheetDescription>
        </SheetHeader>

        <div className="space-y-6 px-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Contact Information
            </h4>
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-muted-foreground">Email:</span>{" "}
                {lead.email}
              </p>
              <p>
                <span className="text-muted-foreground">Phone:</span>{" "}
                {lead.phone}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Property Details
            </h4>
            <div className="space-y-1 text-sm">
              <p>
                <span className="text-muted-foreground">Type:</span>{" "}
                {formatPropertyType(lead.propertyType)}
              </p>
              <p>
                <span className="text-muted-foreground">Location:</span>{" "}
                {lead.location}
              </p>
              <p>
                <span className="text-muted-foreground">Units:</span>{" "}
                {lead.units}
              </p>
              <p>
                <span className="text-muted-foreground">Monthly Revenue:</span>{" "}
                {currencyFormatter.format(lead.monthlyRevenue)}
              </p>
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Management Needs
            </h4>
            <div className="flex flex-wrap gap-2">
              {lead.managementNeeds.map((need) => (
                <Badge key={need} variant="secondary">
                  {need}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">
              Preferences
            </h4>
            <div className="flex flex-wrap gap-2">
              {lead.preferences.map((pref) => (
                <Badge key={pref} variant="outline">
                  {pref}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Notes</h4>
            <p className="text-sm">{lead.notes}</p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
