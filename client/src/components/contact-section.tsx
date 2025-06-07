import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const downloadResume = () => {
    // Create download link for resume
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Parag_Purandare_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/parag-purandare-9ba399235',
      icon: 'fab fa-linkedin-in',
      color: 'bg-blue-600 hover:bg-blue-500'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/paragpurandare',
      icon: 'fab fa-github',
      color: 'bg-gray-800 hover:bg-gray-700'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/purandare_parag',
      icon: 'fab fa-twitter',
      color: 'bg-blue-400 hover:bg-blue-300'
    }
  ];

  const stats = [
    { value: '8.64', label: 'CPI', color: 'var(--aqua-primary)' },
    { value: '6+', label: 'Projects', color: 'var(--aqua-light)' },
    { value: '3', label: 'Leadership Roles', color: 'var(--indigo-accent)' },
    { value: '4', label: 'Certifications', color: 'var(--aqua-primary)' }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Get In Touch</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="glass-effect border-[var(--glass-border)] bg-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--aqua-primary)'}}>
                  Let's Collaborate
                </h3>
                <p className="mb-6 leading-relaxed" style={{color: 'var(--text-secondary)'}}>
                  Ready to build innovative data tools or discuss exciting projects? 
                  I'm always open to new opportunities and collaborations.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <i className="fas fa-envelope mr-4 text-xl" style={{color: 'var(--aqua-light)'}}></i>
                    <a 
                      href="mailto:paragpurandare50@gmail.com" 
                      className="transition-colors"
                      style={{color: 'var(--text-secondary)'}}
                      onMouseOver={(e) => e.currentTarget.style.color = 'var(--aqua-light)'}
                      onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                    >
                      paragpurandare50@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone mr-4 text-xl" style={{color: 'var(--aqua-primary)'}}></i>
                    <span style={{color: 'var(--text-secondary)'}}>+91 7972319116</span>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-4 text-xl" style={{color: 'var(--indigo-accent)'}}></i>
                    <span style={{color: 'var(--text-secondary)'}}>Pune, Maharashtra, India</span>
                  </div>
                </div>

                <div className="flex space-x-4 mt-8">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center transition-colors`}
                      aria-label={social.name}
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect border-[var(--glass-border)] bg-transparent">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--aqua-light)'}}>
                  Download Resume
                </h3>
                <p className="mb-6" style={{color: 'var(--text-secondary)'}}>
                  Get my detailed resume with complete project information, skills, and achievements.
                </p>
                
                <Button
                  onClick={downloadResume}
                  className="w-full bg-gradient-to-r from-[var(--aqua-primary)] to-[var(--indigo-accent)] text-white font-bold py-4 px-6 rounded-xl hover:from-[var(--indigo-accent)] hover:to-[var(--aqua-primary)] transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <i className="fas fa-download mr-3"></i>
                  Download Resume
                </Button>

                <div className="mt-8">
                  <h4 className="text-lg font-semibold mb-4" style={{color: 'var(--aqua-primary)'}}>
                    Quick Stats
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <div key={index} className="p-4 rounded-lg" style={{backgroundColor: 'var(--dark-tertiary)'}}>
                        <div className="text-2xl font-bold" style={{color: stat.color}}>
                          {stat.value}
                        </div>
                        <div className="text-sm" style={{color: 'var(--text-secondary)'}}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
