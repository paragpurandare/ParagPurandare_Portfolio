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
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--neon-green)'}}>Versatile B.Tech Student</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Currently pursuing B.Tech in Instrumentation at Vishwakarma Institute of Technology, Pune with a CPI of 8.64. 
                Passionate about innovation and technology, specializing in web development with expertise in the MERN stack.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="px-3 py-1 bg-[var(--neon-green)] bg-opacity-20 text-[var(--neon-green)] border-[var(--neon-green)]">
                  Full Stack Development
                </Badge>
                <Badge variant="outline" className="px-3 py-1 bg-[var(--neon-blue)] bg-opacity-20 text-[var(--neon-blue)] border-[var(--neon-blue)]">
                  AI Integration
                </Badge>
                <Badge variant="outline" className="px-3 py-1 bg-[var(--neon-orange)] bg-opacity-20 text-[var(--neon-orange)] border-[var(--neon-orange)]">
                  Blockchain
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-effect border-[var(--glass-border)] bg-transparent transform hover:scale-105 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4" style={{color: 'var(--neon-blue)'}}>Leadership & Innovation</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center">
                  <i className="fas fa-check mr-3" style={{color: 'var(--neon-green)'}}></i>
                  Web Development Head at International Society of Automation (ISA)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check mr-3" style={{color: 'var(--neon-green)'}}></i>
                  Web Coordinator at Microsoft Learn Student Club (MLSC)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check mr-3" style={{color: 'var(--neon-green)'}}></i>
                  Musician & Performer at "Aaroha" Music Club
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check mr-3" style={{color: 'var(--neon-green)'}}></i>
                  Internal Smart India Hackathon Winner
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
