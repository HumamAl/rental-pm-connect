"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import type { Lead, LeadStatus } from "@/lib/types";

interface LeadsTableProps {
  leads: Lead[];
  onSelectLead: (lead: Lead) => void;
}

const statusFilters: LeadStatus[] = [
  "new",
  "qualified",
  "contacted",
  "matched",
  "closed",
];

const statusBadgeClasses: Record<LeadStatus, string> = {
  new: "",
  qualified: "",
  contacted: "",
  matched: "bg-green-100 text-green-800 border-transparent",
  closed: "bg-gray-100 text-gray-800 border-transparent",
};

const statusVariants: Record<LeadStatus, "default" | "secondary" | "outline"> = {
  new: "default",
  qualified: "secondary",
  contacted: "outline",
  matched: "default",
  closed: "default",
};

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

export function LeadsTable({ leads, onSelectLead }: LeadsTableProps) {
  const [activeFilter, setActiveFilter] = useState<LeadStatus | null>(null);

  const filteredLeads = activeFilter
    ? leads.filter((lead) => lead.status === activeFilter)
    : leads;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge
          variant={activeFilter === null ? "default" : "outline"}
          className="cursor-pointer"
          onClick={() => setActiveFilter(null)}
        >
          All
        </Badge>
        {statusFilters.map((status) => (
          <Badge
            key={status}
            variant={activeFilter === status ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setActiveFilter(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </Badge>
        ))}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Property Type</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Units</TableHead>
            <TableHead>Monthly Revenue</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredLeads.map((lead) => (
            <TableRow
              key={lead.id}
              className="cursor-pointer"
              onClick={() => onSelectLead(lead)}
            >
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  {formatPropertyType(lead.propertyType)}
                </Badge>
              </TableCell>
              <TableCell>{lead.location}</TableCell>
              <TableCell>{lead.units}</TableCell>
              <TableCell>
                {currencyFormatter.format(lead.monthlyRevenue)}
              </TableCell>
              <TableCell>
                <Badge
                  variant={
                    lead.status === "matched" || lead.status === "closed"
                      ? "default"
                      : statusVariants[lead.status]
                  }
                  className={cn(statusBadgeClasses[lead.status])}
                >
                  {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">
                {lead.date}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
