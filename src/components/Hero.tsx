import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenForm: () => void;
  heroImage: string;
}

export function Hero({ onOpenForm, heroImage }: HeroProps) {
  const { t } = useLanguage();

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Living Colours AR Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide pt-32 pb-20">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-up">
            {t('hero.eyebrow')}
          </span>
          
          <h1 className="heading-display mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('hero.headline')}
          </h1>
          <p className="editorial-text max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.subheadline')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" onClick={onOpenForm}>
              {t('hero.cta')}
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToAbout}>
              {t('hero.learnMore')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
