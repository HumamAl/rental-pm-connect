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
import type { Match } from "@/lib/types";

interface RecentMatchesTableProps {
  matches: Match[];
}

function formatPropertyType(type: string): string {
  return type
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getScoreColor(score: number): string {
  if (score >= 90) return "text-green-600";
  if (score >= 80) return "text-yellow-600";
  return "text-red-600";
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

export function RecentMatchesTable({ matches }: RecentMatchesTableProps) {
  const topMatches = matches.slice(0, 5);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Lead Name</TableHead>
          <TableHead>Property Type</TableHead>
          <TableHead>PM Company</TableHead>
          <TableHead>Match Score</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topMatches.map((match) => (
          <TableRow key={match.id}>
            <TableCell className="font-medium">{match.leadName}</TableCell>
            <TableCell>
              <Badge variant="secondary">
                {formatPropertyType(match.propertyType)}
              </Badge>
            </TableCell>
            <TableCell>{match.pmCompanyName}</TableCell>
            <TableCell>
              <span className={cn("font-semibold", getScoreColor(match.overallScore))}>
                {match.overallScore}%
              </span>
            </TableCell>
            <TableCell>
              <Badge variant={getStatusVariant(match.status)}>
                {match.status.charAt(0).toUpperCase() + match.status.slice(1)}
              </Badge>
            </TableCell>
            <TableCell className="text-muted-foreground">
              {match.date}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
