import type { Profile, PortfolioProject } from "@/lib/types";

export const profile: Profile = {
  name: "Humam",
  tagline: "Full-stack developer specializing in Next.js SaaS applications",
  bio: "I build MVPs and production apps that solve real operational problems — CRM systems, fleet management platforms, AI-powered dashboards, and multi-entity SaaS tools. My approach is straightforward: understand the business need, build something that works, and ship it fast.",
  approach: [
    {
      title: "Understand the Problem",
      description:
        "Read the full requirements, map out the entities (leads, PM companies, matches), and identify the core matching logic",
    },
    {
      title: "Build a Working Demo",
      description:
        "Show, don't tell — a live demo with realistic data is worth 1000 words of proposal text",
    },
    {
      title: "Modular Architecture",
      description:
        "Clean separation between leads, matching, and notifications modules — ready to wire into real APIs",
    },
    {
      title: "Ship Fast, Iterate",
      description:
        "MVP first with core matching and dashboards, then layer in integrations and polish",
    },
  ],
  skillCategories: [
    {
      name: "Frontend",
      skills: [
        "TypeScript",
        "React 19",
        "Next.js 16",
        "Tailwind CSS",
        "shadcn/ui",
        "Recharts",
      ],
    },
    {
      name: "Backend & APIs",
      skills: [
        "Node.js",
        "REST API Design",
        "PostgreSQL",
        "Redis",
        "Webhook Handling",
        "Stripe",
      ],
    },
    {
      name: "Architecture & DevOps",
      skills: [
        "Clean Architecture",
        "Vercel Deployment",
        "GitHub Actions",
        "CI/CD",
        "Database Design",
      ],
    },
  ],
};

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "lead-crm",
    title: "Lead Intake CRM",
    description:
      "Custom lead intake and automation system with public intake form, CRM dashboard, lead scoring, pipeline management, and automation rules engine.",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    relevance:
      "Built the same lead intake pipeline, scoring, and pipeline management this project needs",
  },
  {
    id: "fleet-saas",
    title: "Fleet Maintenance SaaS",
    description:
      "Fleet and maintenance management platform with asset tracking, work orders, preventive maintenance scheduling, inspections, parts inventory, and analytics dashboard.",
    tech: ["Next.js", "Recharts", "TypeScript", "shadcn/ui"],
    relevance:
      "Multi-module SaaS with complex data relationships, dashboards, and analytics",
  },
  {
    id: "event-planner",
    title: "Event Planner SaaS",
    description:
      "Full-stack event management platform with dashboard, CRUD operations, calendar integration, and attendee tracking.",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    relevance:
      "Full CRUD platform with dashboards, entity management, and scheduling workflows",
  },
];

export const timeline = [
  {
    title: "Discovery & Architecture",
    description:
      "Requirements deep-dive, database schema design, API contracts, and project setup",
    duration: "Week 1",
    status: "active" as const,
  },
  {
    title: "Core Platform Build",
    description:
      "Lead intake, PM company directory, user dashboards, and admin panel",
    duration: "Weeks 2-3",
    status: "upcoming" as const,
  },
  {
    title: "Matching & Notifications",
    description:
      "Multi-factor matching algorithm, compatibility scoring, email/in-app notifications",
    duration: "Weeks 4-5",
    status: "upcoming" as const,
  },
  {
    title: "Integrations & Polish",
    description:
      "Third-party integrations (SendGrid, Stripe, listing APIs), testing, and deployment",
    duration: "Weeks 6-7",
    status: "upcoming" as const,
  },
];
