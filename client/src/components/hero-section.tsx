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
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-[var(--aqua-primary)] animate-glow">
            <img 
              src={profileImage} 
              alt="Parag Purandare" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-gradient animate-float">
            Parag Purandare
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 font-medium" style={{color: 'var(--text-primary)'}}>
            Full Stack Developer
          </p>
          
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed" style={{color: 'var(--text-secondary)'}}>
            Love to Explore, keep updated with latest Trends and Technologies, Problem Solver, Quick Learner, Drive by Passion and Innovation and Proactive. Building Neoterik.Ai, Specializing in AI-powered(Gen Ai) solutions with expertise in Python, TensorFlow, Pytorch, LangGraph and Expertise in Full Stack development with MERN Stack and Next.js
          </p>
          
          <div className="flex justify-center space-x-6 flex-wrap gap-4">
            <Button
              onClick={() => scrollToSection('projects')}
              className="glass-effect px-8 py-3 rounded-full bg-blue hover:bg-[var(--aqua-primary)] hover:text-black transition-all duration-300 transform hover:scale-105 border-0"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="glass-effect px-8 py-3 rounded-full text-white bg-blue hover:bg-[var(--aqua-primary)] hover:text-black transition-all duration-300 transform hover:scale-105 border-0"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      

    </section>
  );
}
