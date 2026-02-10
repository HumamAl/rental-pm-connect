import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { MatchScoreRing } from "@/components/app/match-score-ring";
import type { MatchBreakdown } from "@/lib/types";

interface MatchCardProps {
  pmCompanyName: string;
  overallScore: number;
  breakdown: MatchBreakdown;
  status: string;
}

function getStatusVariant(
  status: string
): "default" | "secondary" | "outline" | "destructive" {
  switch (status) {
    case "accepted":
      return "default";
    case "introduced":
      return "secondary";
    case "pending":
      return "outline";
    case "declined":
      return "destructive";
    default:
      return "outline";
  }
}

export function MatchCard({
  pmCompanyName,
  overallScore,
  breakdown,
  status,
}: MatchCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between">
        <div className="flex items-center gap-4">
          <MatchScoreRing score={overallScore} />
          <div>
            <CardTitle>{pmCompanyName}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {overallScore}% overall match
            </p>
          </div>
        </div>
        <Badge variant={getStatusVariant(status)}>
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Location Coverage</span>
              <span className="font-medium">{breakdown.locationCoverage}%</span>
            </div>
            <Progress value={breakdown.locationCoverage} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Property Type Expertise</span>
              <span className="font-medium">{breakdown.propertyTypeExpertise}%</span>
            </div>
            <Progress value={breakdown.propertyTypeExpertise} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Price Range Fit</span>
              <span className="font-medium">{breakdown.priceRangeFit}%</span>
            </div>
            <Progress value={breakdown.priceRangeFit} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Availability</span>
              <span className="font-medium">{breakdown.availability}%</span>
            </div>
            <Progress value={breakdown.availability} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
