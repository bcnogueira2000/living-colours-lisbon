import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { ICON_STROKE } from '@/lib/constants';
import { useParallax } from '@/hooks/useParallax';

interface HeroProps {
  onOpenForm: () => void;
  heroImage: string;
}

export function Hero({ onOpenForm, heroImage }: HeroProps) {
  const { t } = useLanguage();
  const parallax = useParallax<HTMLImageElement>(0.18);

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          ref={parallax.ref}
          style={parallax.style}
          src={heroImage}
          alt="Living Colours interior"
          className="w-full h-[115%] object-cover"
        />
        {/* Warm terracotta tint + darkening gradient for legibility */}
        <div className="absolute inset-0 bg-primary/25 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-foreground/10" />
      </div>

      {/* Content — bottom-left */}
      <div className="relative z-10 container-wide pt-32 pb-16 md:pb-24">
        <div className="max-w-3xl text-primary-foreground">
          {/* Eyebrow with dash accent */}
          <div className="flex items-center gap-3 mb-6 animate-fade-up">
            <span className="h-px w-8 bg-primary" />
            <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-medium text-primary-foreground/90">
              {t('hero.eyebrow')}
            </span>
          </div>

          <h1
            className="font-display font-bold tracking-tight leading-[1.02] text-5xl md:text-7xl lg:text-8xl mb-6 animate-fade-up text-primary-foreground"
            style={{ animationDelay: '0.1s' }}
          >
            {t('hero.headline')}
          </h1>
          <p
            className="max-w-xl mb-10 text-base md:text-lg leading-relaxed text-primary-foreground/85 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {t('hero.subheadline')}
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <Button variant="hero" size="xl" onClick={onOpenForm}>
              {t('hero.cta')}
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              onClick={scrollToAbout}
              className="border-primary-foreground/70 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground gap-2"
            >
              {t('hero.learnMore')}
              <ArrowDown className="w-4 h-4" strokeWidth={ICON_STROKE} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
