import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ContactSection } from '@/components/ContactSection';
import { MagicalCursor } from '@/components/MagicalCursor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <MagicalCursor />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold text-gradient">Prachi Joshi</h3>
              <p className="text-sm text-muted-foreground">
                Full Stack Developer • AI/ML Enthusiast
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 Prachi Joshi. Built with React & Tailwind CSS.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
