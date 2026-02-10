"use client";

import { useState } from "react";
import { LeadsTable } from "@/components/app/leads-table";
import { LeadDetailSheet } from "@/components/app/lead-detail-sheet";
import { leads } from "@/data/mock-data";
import type { Lead } from "@/lib/types";

export default function LeadsPage() {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleSelectLead = (lead: Lead) => {
    setSelectedLead(lead);
    setSheetOpen(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Leads</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Manage incoming property owner leads and their pipeline status
        </p>
      </div>

      <LeadsTable leads={leads} onSelectLead={handleSelectLead} />

      <LeadDetailSheet
        lead={selectedLead}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </div>
  );
}
