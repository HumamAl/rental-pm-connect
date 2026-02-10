import type { Challenge } from "@/lib/types";

export const challenges: Challenge[] = [
  {
    id: "challenge-1",
    title: "How Leads Get From Intake to Match",
    description:
      "Every lead goes through a structured pipeline — from submission to validation, scoring, matching, and introduction. Each step has rules and guardrails to ensure quality.",
    visualizationType: "flow",
  },
  {
    id: "challenge-2",
    title: "Replacing Spreadsheets with a Real Dashboard",
    description:
      "Most rental owner–PM connections happen through word-of-mouth and spreadsheets. A real platform gives both sides visibility and control.",
    visualizationType: "before-after",
  },
  {
    id: "challenge-3",
    title: "Building a Matching Algorithm That Actually Works",
    description:
      "A good match considers multiple factors — not just location, but property type expertise, pricing fit, and current capacity. Each factor is weighted and scored.",
    visualizationType: "metrics",
  },
  {
    id: "challenge-4",
    title: "Connecting with Third-Party Services",
    description:
      "The platform needs to talk to email providers, payment processors, and listing APIs. Clean architecture keeps these integrations maintainable.",
    visualizationType: "architecture",
  },
  {
    id: "challenge-5",
    title: "Keeping Data Safe and the Platform Fast",
    description:
      "PII data, API dependencies, and database scaling all need proactive mitigation. Each risk gets a concrete plan before it becomes a problem.",
    visualizationType: "risk-matrix",
  },
];
