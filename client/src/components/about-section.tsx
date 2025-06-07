import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <Card className="glass-effect border-[var(--glass-border)] bg-transparent transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--warm-gold)'}}>Academic Excellence & Innovation</h3>
              <p className="leading-relaxed mb-6" style={{color: 'var(--text-secondary)'}}>
                B.Tech student in Instrumentation Engineering at Vishwakarma Institute of Technology, Pune with an impressive CPI of 8.64. 
                Passionate innovator specializing in web development with deep expertise in the MERN stack and modern technologies. 
                Proven track record in hackathons and technical competitions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1 bg-[var(--warm-gold)] bg-opacity-20 text-[var(--warm-gold)] border-[var(--warm-gold)]">
                  Full Stack Development
                </Badge>
                <Badge variant="outline" className="px-3 py-1 bg-[var(--warm-coral)] bg-opacity-20 text-[var(--warm-coral)] border-[var(--warm-coral)]">
                  AI Integration
                </Badge>
                <Badge variant="outline" className="px-3 py-1 bg-[var(--warm-amber)] bg-opacity-20 text-[var(--warm-amber)] border-[var(--warm-amber)]">
                  Blockchain Technology
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-[var(--glass-border)] bg-transparent transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--warm-coral)'}}>Leadership & Professional Experience</h3>
              <ul className="space-y-3" style={{color: 'var(--text-secondary)'}}>
                <li className="flex items-center">
                  <i className="fas fa-briefcase mr-3" style={{color: 'var(--warm-gold)'}}></i>
                  Ex-Intern at Black & Veatch - Global Engineering Solutions
                </li>
                <li className="flex items-center">
                  <i className="fas fa-users mr-3" style={{color: 'var(--warm-coral)'}}></i>
                  Web Development Head at International Society of Automation (ISA)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-code mr-3" style={{color: 'var(--warm-amber)'}}></i>
                  Web Coordinator at Microsoft Learn Student Club (MLSC)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-music mr-3" style={{color: 'var(--warm-rose)'}}></i>
                  Musician & Performer at "Aaroha" Music Club
                </li>
                <li className="flex items-center">
                  <i className="fas fa-trophy mr-3" style={{color: 'var(--warm-purple)'}}></i>
                  Internal Smart India Hackathon Winner & Top 5 in Hackspiration '22
                </li>
              </ul>
              <p className="mt-4 text-sm italic" style={{color: 'var(--text-secondary)'}}>
                Internship experience at Black & Veatch provided valuable insights into enterprise-level engineering solutions and professional development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
