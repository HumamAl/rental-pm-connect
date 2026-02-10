"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { MonthlyData } from "@/lib/types";

interface MatchRateChartProps {
  data: MonthlyData[];
}

export function MatchRateChart({ data }: MatchRateChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Success Rate</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis
              dataKey="month"
              className="text-xs"
              tick={{ fill: "var(--color-muted-foreground)" }}
            />
            <YAxis
              domain={[0, 100]}
              unit="%"
              className="text-xs"
              tick={{ fill: "var(--color-muted-foreground)" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              formatter={(value) => [`${value}%`, "Match Rate"]}
            />
            <Line
              type="monotone"
              dataKey="matchRate"
              stroke="var(--chart-2)"
              strokeWidth={2}
              dot={{ fill: "var(--chart-2)", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
