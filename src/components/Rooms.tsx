import { useLanguage } from '@/contexts/LanguageContext';

interface Room {
  nameKey: string;
  descKey: string;
  price: string;
  image: string;
}

interface RoomsProps {
  roomImages: Record<string, string>;
}

export function Rooms({ roomImages }: RoomsProps) {
  const { t } = useLanguage();

  const rooms: Room[] = [
    {
      nameKey: 'rooms.smart',
      descKey: 'rooms.smart.desc',
      price: '650',
      image: roomImages.smart,
    },
    {
      nameKey: 'rooms.standard',
      descKey: 'rooms.standard.desc',
      price: '750',
      image: roomImages.standard,
    },
    {
      nameKey: 'rooms.premium',
      descKey: 'rooms.premium.desc',
      price: '900',
      image: roomImages.premium,
    },
    {
      nameKey: 'rooms.suite',
      descKey: 'rooms.suite.desc',
      price: '1100',
      image: roomImages.suite,
    },
    {
      nameKey: 'rooms.master',
      descKey: 'rooms.master.desc',
      price: '1400',
      image: roomImages.master,
    },
  ];

  return (
    <section id="rooms" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="label-small block mb-4">{t('rooms.label')}</span>
          <h2 className="heading-section mb-6">{t('rooms.title')}</h2>
          <p className="editorial-text">{t('rooms.intro')}</p>
        </div>

        <div className="grid gap-6">
          {rooms.map((room, index) => (
            <div
              key={room.nameKey}
              className={`group relative overflow-hidden rounded-2xl bg-background shadow-card hover:shadow-elevated transition-all duration-500 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row`}
            >
              {/* Image */}
              <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden">
                <img
                  src={room.image}
                  alt={t(room.nameKey)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="heading-subsection mb-4">{t(room.nameKey)}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t(room.descKey)}
                </p>
                <p className="font-display text-2xl text-primary">
                  {t('rooms.from')} €{room.price}
                  <span className="text-base text-muted-foreground font-body">
                    {t('rooms.month')}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
