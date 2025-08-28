import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            SSB
          </div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { label: 'About', id: 'about' },
              { label: 'Experience', id: 'experience' },
              { label: 'Projects', id: 'projects' },
              { label: 'Skills', id: 'skills' },
              { label: 'Contact', id: 'contact' }
            ].map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary hover:bg-accent transition-smooth"
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          <Button
            variant="default"
            size="sm"
            className="bg-gradient-hero hover:shadow-glow transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;