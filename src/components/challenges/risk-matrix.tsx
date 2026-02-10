import { cn } from "@/lib/utils";

interface RiskItem {
  name: string;
  mitigation: string;
}

interface RiskCell {
  impact: number;
  likelihood: number;
  items: RiskItem[];
  color: string;
}

const riskCells: RiskCell[] = [
  {
    impact: 0,
    likelihood: 0,
    items: [
      {
        name: "PII Data Exposure",
        mitigation:
          "End-to-end encryption, SOC 2 compliance, regular security audits",
      },
    ],
    color: "bg-orange-50 border-orange-200",
  },
  {
    impact: 0,
    likelihood: 1,
    items: [
      {
        name: "Slow Match Queries",
        mitigation:
          "Query optimization, Redis caching, database indexing",
      },
    ],
    color: "bg-red-50 border-red-200",
  },
  {
    impact: 1,
    likelihood: 1,
    items: [
      {
        name: "API Downtime",
        mitigation:
          "Circuit breakers, retry logic, fallback responses",
      },
    ],
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    impact: 1,
    likelihood: 2,
    items: [
      {
        name: "Database Scaling",
        mitigation:
          "Connection pooling, read replicas, query monitoring",
      },
    ],
    color: "bg-orange-50 border-orange-200",
  },
  {
    impact: 2,
    likelihood: 2,
    items: [
      {
        name: "Notification Delays",
        mitigation:
          "Message queues, async processing, delivery monitoring",
      },
    ],
    color: "bg-yellow-50 border-yellow-200",
  },
];

const likelihoodLabels = ["Low", "Medium", "High"];
const impactLabels = ["High", "Medium", "Low"];

export function RiskMatrix() {
  function getCellContent(impact: number, likelihood: number) {
    return riskCells.find(
      (c) => c.impact === impact && c.likelihood === likelihood
    );
  }

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[400px]">
        {/* Likelihood header */}
        <div className="grid grid-cols-4 gap-1 mb-1">
          <div className="flex items-end justify-center pb-1">
            <span className="text-[10px] text-muted-foreground font-medium">
              Impact / Likelihood
            </span>
          </div>
          {likelihoodLabels.map((label) => (
            <div
              key={label}
              className="text-center text-xs font-medium text-muted-foreground py-1"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Grid rows */}
        {impactLabels.map((impactLabel, impactIdx) => (
          <div key={impactLabel} className="grid grid-cols-4 gap-1 mb-1">
            {/* Impact label */}
            <div className="flex items-center justify-center">
              <span className="text-xs font-medium text-muted-foreground">
                {impactLabel}
              </span>
            </div>

            {/* Cells */}
            {likelihoodLabels.map((_, likelihoodIdx) => {
              const cell = getCellContent(impactIdx, likelihoodIdx);
              return (
                <div
                  key={likelihoodIdx}
                  className={cn(
                    "rounded-md border p-2 min-h-[60px]",
                    cell ? cell.color : "bg-muted/30 border-border"
                  )}
                >
                  {cell?.items.map((item) => (
                    <div key={item.name}>
                      <p className="text-xs font-medium leading-tight">
                        {item.name}
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1 leading-tight">
                        {item.mitigation}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
