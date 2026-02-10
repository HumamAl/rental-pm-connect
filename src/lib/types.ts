import type { LucideIcon } from "lucide-react";

// Sidebar navigation
export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
}

// Challenge visualization types
export type VisualizationType =
  | "flow"
  | "before-after"
  | "metrics"
  | "architecture"
  | "risk-matrix"
  | "timeline";

export interface Challenge {
  id: string;
  title: string;
  description: string;
  visualizationType: VisualizationType;
}

// Proposal types
export interface Profile {
  name: string;
  tagline: string;
  bio: string;
  approach: { title: string; description: string }[];
  skillCategories: { name: string; skills: string[] }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  tech: string[];
  relevance?: string;
}

// App-specific types
export type LeadStatus = "new" | "qualified" | "contacted" | "matched" | "closed";
export type PropertyType = "single-family" | "multi-family" | "condo" | "townhouse" | "luxury-villa" | "cabin";
export type NotificationType = "lead" | "match" | "company" | "system";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  propertyType: PropertyType;
  location: string;
  units: number;
  monthlyRevenue: number;
  status: LeadStatus;
  date: string;
  notes: string;
  managementNeeds: string[];
  preferences: string[];
}

export interface PMCompany {
  id: string;
  name: string;
  serviceArea: string[];
  verified: boolean;
  propertyTypes: PropertyType[];
  propertiesManaged: number;
  rating: number;
  yearsInBusiness: number;
  feeRange: string;
  description: string;
  contactEmail: string;
}

export interface MatchBreakdown {
  locationCoverage: number;
  propertyTypeExpertise: number;
  priceRangeFit: number;
  availability: number;
}

export interface Match {
  id: string;
  leadId: string;
  leadName: string;
  pmCompanyId: string;
  pmCompanyName: string;
  overallScore: number;
  breakdown: MatchBreakdown;
  status: "pending" | "introduced" | "accepted" | "declined";
  date: string;
  propertyType: PropertyType;
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description: string;
  timestamp: string;
  read: boolean;
}

export interface DashboardStats {
  activeLeads: number;
  matchedThisMonth: number;
  pmCompanies: number;
  avgMatchTime: string;
}

export interface MonthlyData {
  month: string;
  leads: number;
  matchRate: number;
}
