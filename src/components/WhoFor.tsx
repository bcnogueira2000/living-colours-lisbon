import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Briefcase, Globe, MapPin } from 'lucide-react';

export function WhoFor() {
  const { t } = useLanguage();

  const personas = [
    {
      icon: GraduationCap,
      titleKey: 'who.student.title',
      descKey: 'who.student.desc',
    },
    {
      icon: Briefcase,
      titleKey: 'who.professional.title',
      descKey: 'who.professional.desc',
    },
    {
      icon: Globe,
      titleKey: 'who.nomad.title',
      descKey: 'who.nomad.desc',
    },
    {
      icon: MapPin,
      titleKey: 'who.relocating.title',
      descKey: 'who.relocating.desc',
    },
  ];

  return (
    <section className="section-padding bg-cream-dark">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="label-small block mb-4">{t('who.label')}</span>
          <h2 className="heading-section mb-6">{t('who.title')}</h2>
          <p className="editorial-text">{t('who.intro')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {personas.map((persona, index) => (
            <div
              key={persona.titleKey}
              className="group p-6 rounded-2xl bg-background shadow-card hover:shadow-elevated transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-terracotta-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <persona.icon className="w-6 h-6 text-terracotta" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {t(persona.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(persona.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
