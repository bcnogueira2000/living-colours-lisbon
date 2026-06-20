import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Train, Coffee, Palette } from 'lucide-react';
import { ICON_STROKE } from '@/lib/constants';
import { useParallax } from '@/hooks/useParallax';

interface LocationProps {
  locationImage: string;
}

export function Location({ locationImage }: LocationProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const parallax = useParallax<HTMLImageElement>(0.15);

  const highlights = [
    {
      icon: MapPin,
      titleKey: 'location.central',
      descKey: 'location.central.desc',
    },
    {
      icon: Train,
      titleKey: 'location.metro',
      descKey: 'location.metro.desc',
    },
    {
      icon: Coffee,
      titleKey: 'location.authentic',
      descKey: 'location.authentic.desc',
    },
    {
      icon: Palette,
      titleKey: 'location.diverse',
      descKey: 'location.diverse.desc',
    },
  ];

  return (
    <section id="location" className="section-padding bg-cream-dark">
      <div ref={ref} className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="label-small block mb-4">{t('location.label')}</span>
            <h2 className="heading-section mb-6">{t('location.title')}</h2>
            <p className="editorial-text mb-12">{t('location.intro')}</p>

            <div className="grid sm:grid-cols-2 gap-8">
              {highlights.map((highlight, i) => (
                <div
                  key={highlight.titleKey}
                  className={`flex gap-4 transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-terracotta-light flex items-center justify-center">
                    <highlight.icon className="w-5 h-5 text-terracotta" strokeWidth={ICON_STROKE} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{t(highlight.titleKey)}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t(highlight.descKey)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <img
              ref={parallax.ref}
              style={parallax.style}
              src={locationImage}
              alt="Almirante Reis, Lisbon"
              className="w-full h-[115%] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4">
                <p className="font-display text-lg font-medium">Av. Almirante Reis</p>
                <p className="text-sm text-muted-foreground">Arroios, Lisboa</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
