import { Header } from "../components/header";
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
      <Header />

      <div className="relative z-10">
        <div id="hero">
          <HeroSection />
        </div>
        <div id="experience">
          <ExperienceTimeline />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="skills">
          <SkillsSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <Footer />
      </div>
    </div>
  );
}
