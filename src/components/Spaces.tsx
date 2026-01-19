import { useLanguage } from '@/contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

interface SpacesProps {
  spaceImages: Record<string, string>;
}

export function Spaces({ spaceImages }: SpacesProps) {
  const { t } = useLanguage();

  const spaces = [
    {
      titleKey: 'spaces.cowork.title',
      descKey: 'spaces.cowork.desc',
      image: spaceImages.cowork,
      coming: false,
    },
    {
      titleKey: 'spaces.meeting.title',
      descKey: 'spaces.meeting.desc',
      image: spaceImages.meeting,
      coming: false,
    },
    {
      titleKey: 'spaces.kitchen.title',
      descKey: 'spaces.kitchen.desc',
      image: spaceImages.kitchen,
      coming: false,
    },
    {
      titleKey: 'spaces.cinema.title',
      descKey: 'spaces.cinema.desc',
      image: spaceImages.cinema,
      coming: true,
    },
    {
      titleKey: 'spaces.gym.title',
      descKey: 'spaces.gym.desc',
      image: spaceImages.gym,
      coming: true,
    },
  ];

  return (
    <section id="spaces" className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="label-small block mb-4">{t('spaces.label')}</span>
          <h2 className="heading-section mb-6">{t('spaces.title')}</h2>
          <p className="editorial-text">{t('spaces.intro')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div
              key={space.titleKey}
              className="group relative overflow-hidden rounded-2xl bg-cream-dark"
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
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(space.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
