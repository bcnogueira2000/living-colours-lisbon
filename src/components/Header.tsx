import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenForm: () => void;
}

export function Header({ onOpenForm }: HeaderProps) {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.about', href: '#about' },
    { key: 'nav.rooms', href: '#rooms' },
    { key: 'nav.spaces', href: '#spaces' },
    { key: 'nav.location', href: '#location' },
    { key: 'nav.faq', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Logo size={44} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.href)}
              style={{ textShadow: isScrolled ? 'none' : '0 1px 3px rgba(255, 255, 255, 0.8)' }}
              className={`text-base font-semibold transition-colors duration-200 ${
                isScrolled ? 'text-muted-foreground hover:text-foreground' : 'text-primary hover:text-primary/80'
              }`}
            >
              {t(item.key)}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-4">
          {/* Language toggle */}
          <div className="flex items-center gap-1 text-sm">
            <button
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'en'
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              EN
            </button>
            <span className="text-muted-foreground/50">/</span>
            <button
              onClick={() => setLanguage('pt')}
              className={`px-2 py-1 rounded transition-colors ${
                language === 'pt'
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              PT
            </button>
          </div>

          <Button variant="hero" size="default" onClick={onOpenForm}>
            {t('hero.cta')}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border animate-fade-in">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-left py-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
            <div className="flex items-center gap-2 pt-4 border-t border-border">
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-2 rounded text-sm ${
                  language === 'en'
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('pt')}
                className={`px-3 py-2 rounded text-sm ${
                  language === 'pt'
                    ? 'bg-muted text-foreground font-medium'
                    : 'text-muted-foreground'
                }`}
              >
                Português
              </button>
            </div>
            <Button variant="hero" size="lg" onClick={onOpenForm} className="mt-2">
              {t('hero.cta')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
