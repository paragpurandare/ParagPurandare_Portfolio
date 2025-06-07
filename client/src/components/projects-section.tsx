import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/lib/portfolio-data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <Card 
              key={index}
              className="project-card glass-effect border-[var(--glass-border)] bg-transparent transition-all duration-300 transform hover:scale-105"
            >
              <CardContent className="p-6">
                <div className="w-full h-48 bg-gradient-to-br rounded-xl mb-6 flex items-center justify-center overflow-hidden"
                     style={{background: project.gradient}}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3" style={{color: project.titleColor}}>
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline" 
                      className="px-2 py-1 rounded text-xs border-opacity-50"
                      style={{
                        backgroundColor: `${tech.color}20`,
                        color: tech.color,
                        borderColor: tech.color
                      }}
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
                
                {project.link && (
                  <a 
                    href={project.link} 
                    className="transition-colors hover:opacity-80"
                    style={{color: project.titleColor}}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
