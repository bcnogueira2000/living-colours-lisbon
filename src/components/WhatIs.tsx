import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Home, Gem, Heart } from 'lucide-react';
import aboutBg from '@/assets/about-light.jpg';

export function WhatIs() {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();

  const pillars = [
    {
      icon: Home,
      titleKey: 'whatis.pillar1.title',
      descKey: 'whatis.p1',
    },
    {
      icon: Gem,
      titleKey: 'whatis.pillar2.title',
      descKey: 'whatis.p2',
    },
    {
      icon: Heart,
      titleKey: 'whatis.pillar3.title',
      descKey: 'whatis.p3',
    },
  ];

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      <img
        src={aboutBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background"
      />
      <div
        ref={ref}
        className={`relative container-narrow transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <span className="label-small block mb-4">{t('whatis.label')}</span>
        <h2 className="heading-section mb-6">{t('whatis.title')}</h2>
        <p className="editorial-text mb-16 max-w-2xl">{t('whatis.intro')}</p>

        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.titleKey}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(i + 1) * 150}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-3">
                {t(pillar.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(pillar.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
