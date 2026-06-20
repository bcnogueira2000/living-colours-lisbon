import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Bed, 
  UtensilsCrossed, 
  Sparkles, 
  Laptop, 
  Calendar, 
  Users 
} from 'lucide-react';
import { ICON_STROKE } from '@/lib/constants';

export function Included() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const features = [
    {
      icon: Bed,
      titleKey: 'included.rooms',
      descKey: 'included.rooms.desc',
    },
    {
      icon: UtensilsCrossed,
      titleKey: 'included.kitchen',
      descKey: 'included.kitchen.desc',
    },
    {
      icon: Sparkles,
      titleKey: 'included.cleaning',
      descKey: 'included.cleaning.desc',
    },
    {
      icon: Laptop,
      titleKey: 'included.cowork',
      descKey: 'included.cowork.desc',
    },
    {
      icon: Calendar,
      titleKey: 'included.events',
      descKey: 'included.events.desc',
    },
    {
      icon: Users,
      titleKey: 'included.management',
      descKey: 'included.management.desc',
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div ref={ref} className="container-wide">
        <div
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="label-small block mb-4">{t('included.label')}</span>
          <h2 className="heading-section mb-6">{t('included.title')}</h2>
          <p className="editorial-text">{t('included.intro')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
          {features.map((feature, i) => (
            <div
              key={feature.titleKey}
              className={`flex gap-5 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-sage-light flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-sage" strokeWidth={ICON_STROKE} />
              </div>
              <div>
                <h3 className="font-display text-lg font-medium mb-2">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(feature.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
