import { useEffect } from 'react';
import ThreeBackground from '@/components/three-background';
import FloatingNav from '@/components/floating-nav';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/contact-section';

export default function Portfolio() {
  useEffect(() => {
    // Initialize parallax effect
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax-back');
      
      parallaxElements.forEach(element => {
        const speed = 0.5;
        (element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--dark-primary)] text-white overflow-x-hidden">
      <ThreeBackground />
      <FloatingNav />
      
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-[var(--glass-border)]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Parag Purandare. Built with passion using React, Three.js & Modern Web Technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
