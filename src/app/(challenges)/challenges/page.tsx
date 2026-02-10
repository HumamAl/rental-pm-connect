import { challenges } from "@/data/challenges";
import { ChallengeCard } from "@/components/challenges/challenge-card";
import { FlowDiagram } from "@/components/challenges/flow-diagram";
import { BeforeAfter } from "@/components/challenges/before-after";
import { MetricBar } from "@/components/challenges/metric-bar";
import { ArchitectureDiagram } from "@/components/challenges/architecture-diagram";
import { RiskMatrix } from "@/components/challenges/risk-matrix";
import {
  FileText,
  CheckCircle,
  GitCompareArrows,
  Handshake,
  CircleCheck,
} from "lucide-react";

export default function ChallengesPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Technical Challenges</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Key challenges and how I would solve them
        </p>
      </div>

      <div className="space-y-6">
        {/* Challenge 1: Flow — Lead Pipeline */}
        <ChallengeCard
          title={challenges[0].title}
          description={challenges[0].description}
        >
          <FlowDiagram
            steps={[
              { label: "Lead Submits", icon: FileText },
              {
                label: "Validate & Score",
                icon: CheckCircle,
                highlight: true,
              },
              { label: "Match Algorithm", icon: GitCompareArrows },
              { label: "Introduction", icon: Handshake },
              { label: "Closed", icon: CircleCheck },
            ]}
          />
        </ChallengeCard>

        {/* Challenge 2: Before/After — Dashboard */}
        <ChallengeCard
          title={challenges[1].title}
          description={challenges[1].description}
        >
          <BeforeAfter
            before={{
              label: "Current Process",
              items: [
                "Spreadsheets and manual tracking",
                "Word-of-mouth PM referrals",
                "No visibility into PM performance",
                "Weeks to find the right fit",
              ],
            }}
            after={{
              label: "With Platform",
              items: [
                "Real-time dashboard and analytics",
                "Vetted PM company directory",
                "Compatibility scoring and ranking",
                "Average 2.4 days to match",
              ],
            }}
          />
        </ChallengeCard>

        {/* Challenge 3: Metrics — Matching Algorithm */}
        <ChallengeCard
          title={challenges[2].title}
          description={challenges[2].description}
        >
          <div className="space-y-3">
            <MetricBar
              label="Location Coverage"
              value={98}
              max={100}
              color="green"
            />
            <MetricBar
              label="Property Type Expertise"
              value={92}
              max={100}
              color="green"
            />
            <MetricBar
              label="Price Range Fit"
              value={78}
              max={100}
              color="yellow"
            />
            <MetricBar
              label="Availability"
              value={65}
              max={100}
              color="yellow"
            />
            <MetricBar
              label="Overall Match Score"
              value={87}
              max={100}
              color="blue"
            />
          </div>
        </ChallengeCard>

        {/* Challenge 4: Architecture Diagram */}
        <ChallengeCard
          title={challenges[3].title}
          description={challenges[3].description}
        >
          <ArchitectureDiagram />
        </ChallengeCard>

        {/* Challenge 5: Risk Matrix */}
        <ChallengeCard
          title={challenges[4].title}
          description={challenges[4].description}
        >
          <RiskMatrix />
        </ChallengeCard>
      </div>
    </div>
  );
}
