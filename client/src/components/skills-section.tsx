import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/lib/portfolio-data';
import { useEffect, useRef } from 'react';

export default function SkillsSection() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach((bar) => {
              const progressElement = bar as HTMLElement;
              const width = progressElement.style.getPropertyValue('--progress-width');
              progressElement.style.width = width;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 relative" ref={skillsRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {portfolioData.skillCategories.map((category, index) => (
            <Card key={index} className="glass-effect border-[var(--glass-border)] bg-transparent">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4" style={{color: category.color}}>
                  {category.title}
                </h3>
                
                {category.type === 'progress' && (
                  <div className="space-y-4">
                    {category.skills?.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium" style={{color: 'var(--text-primary)'}}>{skill.name}</span>
                          <span className="text-sm font-semibold" style={{color: category.color}}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div 
                            className="skill-progress" 
                            style={{'--progress-width': `${skill.level}%`} as any}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {category.type === 'badges' && (
                  <div className="flex flex-wrap gap-3">
                    {category.items?.map((item, itemIndex) => (
                      <Badge 
                        key={itemIndex}
                        variant="outline" 
                        className="px-3 py-2 rounded-lg text-sm"
                        style={{
                          backgroundColor: `${category.color}15`,
                          color: category.color,
                          borderColor: `${category.color}40`
                        }}
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                )}
                
                {category.type === 'list' && (
                  <ul className="space-y-3 text-sm">
                    {category.items?.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <i className="fas fa-certificate mt-1 flex-shrink-0" style={{color: category.color}}></i>
                        <span style={{color: 'var(--text-secondary)'}} className="leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                
                {category.type === 'languages' && (
                  <div className="space-y-4">
                    {category.languages?.map((lang, langIndex) => (
                      <div key={langIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium" style={{color: 'var(--text-primary)'}}>{lang.name}</span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, starIndex) => (
                              <div 
                                key={starIndex}
                                className={`w-3 h-3 rounded-full ${
                                  starIndex < lang.level ? '' : 'bg-gray-600'
                                }`}
                                style={starIndex < lang.level ? {backgroundColor: category.color} : {}}
                              ></div>
                            ))}
                          </div>
                        </div>
                        {lang.description && (
                          <p className="text-xs italic" style={{color: 'var(--text-secondary)'}}>
                            {lang.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
