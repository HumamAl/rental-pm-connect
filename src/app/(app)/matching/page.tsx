"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MatchCard } from "@/components/app/match-card";
import { leads, matches, pmCompanies } from "@/data/mock-data";
import type { Lead } from "@/lib/types";

const unmatchedLeads = leads.filter(
  (l) => l.status === "new" || l.status === "qualified" || l.status === "contacted"
);

function getMatchesForLead(leadId: string) {
  const directMatches = matches.filter((m) => m.leadId === leadId);
  if (directMatches.length > 0) return directMatches.slice(0, 3);

  const lead = leads.find((l) => l.id === leadId);
  if (!lead) return [];

  return pmCompanies
    .slice(0, 3)
    .map((pm, i) => ({
      id: `generated-${leadId}-${i}`,
      leadId,
      leadName: lead.name,
      pmCompanyId: pm.id,
      pmCompanyName: pm.name,
      overallScore: 90 - i * 7,
      breakdown: {
        locationCoverage: 95 - i * 5,
        propertyTypeExpertise: 92 - i * 8,
        priceRangeFit: 85 - i * 6,
        availability: 80 - i * 10,
      },
      status: "pending" as const,
      date: new Date().toISOString().split("T")[0],
      propertyType: lead.propertyType,
    }));
}

function formatPropertyType(type: string) {
  return type.split("-").map((w) => w[0].toUpperCase() + w.slice(1)).join(" ");
}

export default function MatchingPage() {
  const [selectedLead, setSelectedLead] = useState<Lead>(unmatchedLeads[0]);
  const matchResults = getMatchesForLead(selectedLead.id);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Matching</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Match leads with compatible property management companies
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-sm font-medium">Unmatched Leads</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {unmatchedLeads.map((lead) => (
              <button
                key={lead.id}
                onClick={() => setSelectedLead(lead)}
                className={cn(
                  "w-full text-left rounded-lg border p-3 transition-colors",
                  selectedLead.id === lead.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:bg-accent"
                )}
              >
                <p className="text-sm font-medium">{lead.name}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-[10px]">
                    {formatPropertyType(lead.propertyType)}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{lead.location}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {lead.units} units
                </p>
              </button>
            ))}
          </CardContent>
        </Card>

        <div className="lg:col-span-2 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium">
                Top Matches for {selectedLead.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {matchResults.length > 0 ? (
                matchResults.map((match) => (
                  <MatchCard
                    key={match.id}
                    pmCompanyName={match.pmCompanyName}
                    overallScore={match.overallScore}
                    breakdown={match.breakdown}
                    status={match.status}
                  />
                ))
              ) : (
                <p className="text-sm text-muted-foreground">
                  No matches found for this lead yet.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
