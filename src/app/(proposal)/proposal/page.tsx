import { profile, portfolioProjects, timeline } from "@/data/proposal";
import { AboutSection } from "@/components/proposal/about-section";
import { ProjectCard } from "@/components/proposal/project-card";
import { SkillsGrid } from "@/components/proposal/skills-grid";
import { TimelineSection } from "@/components/proposal/timeline-section";

export default function ProposalPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* About Section */}
      <AboutSection
        name={profile.name}
        tagline={profile.tagline}
        bio={profile.bio}
      />

      {/* Approach */}
      <div>
        <h2 className="text-lg font-semibold mb-4">My Approach</h2>
        <div className="space-y-3">
          {profile.approach.map((step, i) => (
            <div key={i} className="flex gap-3">
              <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-medium">{step.title}</p>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Relevant Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {portfolioProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tech={project.tech}
              relevance={project.relevance}
            />
          ))}
        </div>
      </div>

      {/* Skills */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Skills</h2>
        <SkillsGrid categories={profile.skillCategories} />
      </div>

      {/* Timeline */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Proposed Timeline</h2>
        <TimelineSection phases={timeline} />
      </div>
    </div>
  );
}
