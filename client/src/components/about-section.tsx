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
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--aqua-primary)'}}>Academic Excellence & Innovation</h3>
              <p className="leading-relaxed mb-6" style={{color: 'var(--text-secondary)'}}>
                B.Tech student in Instrumentation Engineering at Vishwakarma Institute of Technology, Pune with an impressive CPI of 8.64. 
                Passionate innovator specializing in web development with deep expertise in the MERN stack and modern technologies. 
                Proven track record in hackathons and technical competitions.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1" style={{backgroundColor: 'rgba(34, 211, 238, 0.2)', color: 'var(--aqua-primary)', borderColor: 'var(--aqua-primary)'}}>
                  Full Stack Development
                </Badge>
                <Badge variant="outline" className="px-3 py-1" style={{backgroundColor: 'rgba(125, 211, 252, 0.2)', color: 'var(--aqua-light)', borderColor: 'var(--aqua-light)'}}>
                  AI Integration
                </Badge>
                <Badge variant="outline" className="px-3 py-1" style={{backgroundColor: 'rgba(37, 99, 235, 0.2)', color: 'var(--indigo-accent)', borderColor: 'var(--indigo-accent)'}}>
                  Blockchain Technology
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-[var(--glass-border)] bg-transparent transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--aqua-light)'}}>Leadership & Professional Experience</h3>
              <ul className="space-y-3" style={{color: 'var(--text-secondary)'}}>
                <li className="flex items-center">
                  <i className="fas fa-briefcase mr-3" style={{color: 'var(--aqua-primary)'}}></i>
                  Ex-Intern at Black & Veatch - Global Engineering Solutions
                </li>
                <li className="flex items-center">
                  <i className="fas fa-users mr-3" style={{color: 'var(--aqua-light)'}}></i>
                  Web Development Head at International Society of Automation (ISA)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-code mr-3" style={{color: 'var(--indigo-accent)'}}></i>
                  Web Coordinator at Microsoft Learn Student Club (MLSC)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-music mr-3" style={{color: 'var(--aqua-primary)'}}></i>
                  Musician & Performer at "Aaroha" Music Club
                </li>
                <li className="flex items-center">
                  <i className="fas fa-trophy mr-3" style={{color: 'var(--aqua-light)'}}></i>
                  Internal Smart India Hackathon Winner & Top 5 in Hackspiration '22
                </li>
              </ul>
              <p className="mt-4 text-sm italic" style={{color: 'var(--text-muted)'}}>
                Internship experience at Black & Veatch provided valuable insights into enterprise-level engineering solutions and professional development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
