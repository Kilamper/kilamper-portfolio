import { HeroSection } from "../components/hero-section";
import { ExperienceTimeline } from "../components/experience-timeline";
import { BackgroundPattern } from "../components/background-pattern";
import { ProjectsSection } from "../components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundPattern />
      
      <div className="relative z-10">
        <HeroSection />
        <ExperienceTimeline />
        <ProjectsSection />
      </div>
    </div>
  );
}
