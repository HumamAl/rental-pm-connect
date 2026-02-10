import { UserPlus, GitCompareArrows, Building2, Clock } from "lucide-react";
import { StatsCard } from "@/components/app/stats-card";
import { LeadsChart } from "@/components/app/leads-chart";
import { MatchRateChart } from "@/components/app/match-rate-chart";
import { RecentMatchesTable } from "@/components/app/recent-matches-table";
import { dashboardStats, monthlyData, matches } from "@/data/mock-data";

export default function DashboardPage() {
  const recentMatches = matches.slice(0, 5);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Overview of leads, matches, and platform activity
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          title="Active Leads"
          value={dashboardStats.activeLeads}
          subtitle="+12 this week"
          icon={UserPlus}
        />
        <StatsCard
          title="Matched This Month"
          value={dashboardStats.matchedThisMonth}
          subtitle="78% success rate"
          icon={GitCompareArrows}
        />
        <StatsCard
          title="PM Companies"
          value={dashboardStats.pmCompanies}
          subtitle="15 verified"
          icon={Building2}
        />
        <StatsCard
          title="Avg Match Time"
          value={dashboardStats.avgMatchTime}
          subtitle="Down from 3.1 days"
          icon={Clock}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LeadsChart data={monthlyData} />
        <MatchRateChart data={monthlyData} />
      </div>

      <RecentMatchesTable matches={recentMatches} />
    </div>
  );
}
