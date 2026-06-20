import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Badge } from '@/components/ui/badge';
import { ChevronDown } from 'lucide-react';
import { ICON_STROKE } from '@/lib/constants';

interface SpacesProps {
  spaceImages: Record<string, string>;
}

export function Spaces({ spaceImages }: SpacesProps) {
  const { t } = useLanguage();
  const { ref, isVisible } = useScrollReveal();
  const [expandedSpace, setExpandedSpace] = useState<string | null>(null);

  const spaces = [
    {
      key: 'cowork',
      titleKey: 'spaces.cowork.title',
      descKey: 'spaces.cowork.desc',
      detailKey: 'spaces.cowork.detail',
      image: spaceImages.cowork,
      coming: false,
    },
    {
      key: 'meeting',
      titleKey: 'spaces.meeting.title',
      descKey: 'spaces.meeting.desc',
      detailKey: 'spaces.meeting.detail',
      image: spaceImages.meeting,
      coming: false,
    },
    {
      key: 'kitchen',
      titleKey: 'spaces.kitchen.title',
      descKey: 'spaces.kitchen.desc',
      detailKey: 'spaces.kitchen.detail',
      image: spaceImages.kitchen,
      coming: false,
    },
    {
      key: 'cinema',
      titleKey: 'spaces.cinema.title',
      descKey: 'spaces.cinema.desc',
      detailKey: 'spaces.cinema.detail',
      image: spaceImages.cinema,
      coming: true,
    },
    {
      key: 'gym',
      titleKey: 'spaces.gym.title',
      descKey: 'spaces.gym.desc',
      detailKey: 'spaces.gym.detail',
      image: spaceImages.gym,
      coming: true,
    },
  ];

  const toggleExpand = (key: string) => {
    setExpandedSpace(expandedSpace === key ? null : key);
  };

  return (
    <section id="spaces" className="section-padding bg-background">
      <div ref={ref} className="container-wide">
        <div
          className={`max-w-2xl mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="label-small block mb-4">{t('spaces.label')}</span>
          <h2 className="heading-section mb-6">{t('spaces.title')}</h2>
          <p className="editorial-text">{t('spaces.intro')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space, i) => {
            const isExpanded = expandedSpace === space.key;
            return (
              <div
                key={space.key}
                className={`group relative overflow-hidden rounded-2xl bg-cream-dark cursor-pointer transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                } ${isExpanded ? 'ring-2 ring-primary/20' : ''}`}
                style={{ transitionDelay: `${i * 100}ms` }}
                onClick={() => toggleExpand(space.key)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={space.image}
                    alt={t(space.titleKey)}
                    className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${
                      space.coming ? 'grayscale opacity-70' : ''
                    }`}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-medium">
                      {t(space.titleKey)}
                    </h3>
                    {space.coming && (
                      <Badge variant="secondary" className="text-xs">
                        {t('spaces.coming')}
                      </Badge>
                    )}
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground ml-auto transition-transform duration-300 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                      strokeWidth={ICON_STROKE}
                    />
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(space.descKey)}
                  </p>
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isExpanded ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-4 border-t border-border">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {t(space.detailKey)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
