import { Button } from '@/components/ui/button';
import profileImage from '@assets/parag_purandare_passport_photo_1749285855509.png';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="animate-slide-up">
          {/* Professional headshot */}
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[var(--warm-gold)] animate-glow">
            <img 
              src={profileImage} 
              alt="Parag Purandare" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-float">
            Parag Purandare
          </h1>
          
          <p className="text-xl md:text-2xl mb-6" style={{color: 'var(--text-secondary)'}}>
            Data Tool Designer & Full Stack Developer
          </p>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Crafting innovative data visualization tools and SaaS platforms that help designers find insights and trends. 
            Specializing in AI-powered solutions with expertise in React, Next.js, and Three.js. Ex-Intern at Black & Veatch.
          </p>
          
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              className="glass-effect px-8 py-3 rounded-full hover:bg-[var(--warm-gold)] hover:text-black transition-all duration-300 transform hover:scale-105 border-0"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-[var(--warm-coral)] px-8 py-3 rounded-full hover:bg-[var(--warm-coral)] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Parallax elements */}
      <div className="absolute inset-0 parallax-layer parallax-back opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[var(--warm-gold)] to-[var(--warm-coral)] opacity-20 transform rotate-45 animate-float"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 bg-gradient-to-r from-[var(--warm-amber)] to-[var(--warm-rose)] opacity-20 transform rotate-12 animate-float" style={{animationDelay: '1s'}}></div>
      </div>
    </section>
  );
}
