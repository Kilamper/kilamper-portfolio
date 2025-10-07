import { HeroSection } from "../components/hero-section";
import { ExperienceTimeline } from "../components/experience-timeline";
import { BackgroundPattern } from "../components/background-pattern";
import { ProjectsSection } from "../components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundPattern />
      
      <div className="relative z-10">
        <HeroSection />
        <ExperienceTimeline />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <Footer />
      </div>
    </div>
  );
}
