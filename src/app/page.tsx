import Image from "next/image";
import { HeroSection } from "../components/hero-section";
import { BackgroundPattern } from "../components/background-pattern";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <BackgroundPattern />
      
      <div className="relative z-10">
        <HeroSection />
        
      </div>
    </div>
  );
}
