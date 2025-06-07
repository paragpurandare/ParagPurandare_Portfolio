import { useScrollSpy } from '@/hooks/use-scroll-spy';

const navigationItems = [
  { id: 'hero', icon: 'fas fa-home', label: 'Home' },
  { id: 'about', icon: 'fas fa-user', label: 'About' },
  { id: 'projects', icon: 'fas fa-code', label: 'Projects' },
  { id: 'skills', icon: 'fas fa-cogs', label: 'Skills' },
  { id: 'contact', icon: 'fas fa-envelope', label: 'Contact' }
];

export default function FloatingNav() {
  const activeSection = useScrollSpy(['hero', 'about', 'projects', 'skills', 'contact']);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="floating-nav">
      <div className="glass-effect rounded-full px-6 py-3">
        <div className="flex space-x-4">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item p-2 rounded-full transition-all duration-300 hover:bg-[var(--glass-white)] ${
                activeSection === item.id ? 'active' : ''
              }`}
              aria-label={item.label}
            >
              <i className={`${item.icon} text-sm`}></i>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
