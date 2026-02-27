import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Bath, ShowerHead, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Room {
  nameKey: string;
  descKey: string;
  detailKey: string;
  price: string;
  image: string;
  privateBathroom: boolean;
  galleryImages: string[];
}

interface RoomsProps {
  roomImages: Record<string, string>;
}

export function Rooms({ roomImages }: RoomsProps) {
  const { t } = useLanguage();
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const rooms: Room[] = [
    {
      nameKey: 'rooms.smart',
      descKey: 'rooms.smart.desc',
      detailKey: 'rooms.smart.detail',
      price: '650',
      image: roomImages.smart,
      privateBathroom: false,
      galleryImages: [roomImages.smart],
    },
    {
      nameKey: 'rooms.standard',
      descKey: 'rooms.standard.desc',
      detailKey: 'rooms.standard.detail',
      price: '750',
      image: roomImages.standard,
      privateBathroom: false,
      galleryImages: [roomImages.standard],
    },
    {
      nameKey: 'rooms.premium',
      descKey: 'rooms.premium.desc',
      detailKey: 'rooms.premium.detail',
      price: '900',
      image: roomImages.premium,
      privateBathroom: true,
      galleryImages: [roomImages.premium],
    },
    {
      nameKey: 'rooms.suite',
      descKey: 'rooms.suite.desc',
      detailKey: 'rooms.suite.detail',
      price: '1100',
      image: roomImages.suite,
      privateBathroom: true,
      galleryImages: [roomImages.suite],
    },
    {
      nameKey: 'rooms.master',
      descKey: 'rooms.master.desc',
      detailKey: 'rooms.master.detail',
      price: '1400',
      image: roomImages.master,
      privateBathroom: true,
      galleryImages: [roomImages.master],
    },
  ];

  const openDetail = (room: Room) => {
    setSelectedRoom(room);
    setCarouselIndex(0);
  };

  const nextImage = () => {
    if (!selectedRoom) return;
    setCarouselIndex((i) => (i + 1) % selectedRoom.galleryImages.length);
  };

  const prevImage = () => {
    if (!selectedRoom) return;
    setCarouselIndex((i) => (i - 1 + selectedRoom.galleryImages.length) % selectedRoom.galleryImages.length);
  };

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
              className={`group relative overflow-hidden rounded-2xl bg-background shadow-card hover:shadow-elevated transition-all duration-500 cursor-pointer ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex flex-col md:flex-row`}
              onClick={() => openDetail(room)}
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
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t(room.descKey)}
                </p>

                {/* Bathroom indicator */}
                <div className="flex items-center gap-2 mb-6">
                  {room.privateBathroom ? (
                    <>
                      <Bath size={18} className="text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {t('rooms.privateBathroom')}
                      </span>
                    </>
                  ) : (
                    <>
                      <ShowerHead size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {t('rooms.sharedBathroom')}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-end justify-between gap-4">
                  <p className="font-display text-2xl text-primary">
                    {t('rooms.from')} €{room.price}
                    <span className="text-base text-muted-foreground font-body">
                      {t('rooms.month')}
                    </span>
                  </p>
                  <Button
                    variant="subtle"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      openDetail(room);
                    }}
                  >
                    {t('rooms.learnMore')}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedRoom} onOpenChange={(open) => !open && setSelectedRoom(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {selectedRoom && (
            <>
              {/* Carousel */}
              <div className="relative aspect-[16/9] bg-muted">
                <img
                  src={selectedRoom.galleryImages[carouselIndex]}
                  alt={t(selectedRoom.nameKey)}
                  className="w-full h-full object-cover"
                />
                {selectedRoom.galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selectedRoom.galleryImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCarouselIndex(i)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            i === carouselIndex ? 'bg-primary-foreground' : 'bg-primary-foreground/40'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              {/* Detail content */}
              <div className="p-8">
                <DialogHeader className="mb-4">
                  <DialogTitle className="heading-subsection">{t(selectedRoom.nameKey)}</DialogTitle>
                </DialogHeader>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {t(selectedRoom.detailKey)}
                </p>

                <div className="flex items-center gap-2 mb-6">
                  {selectedRoom.privateBathroom ? (
                    <>
                      <Bath size={18} className="text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {t('rooms.privateBathroom')}
                      </span>
                    </>
                  ) : (
                    <>
                      <ShowerHead size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {t('rooms.sharedBathroom')}
                      </span>
                    </>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <p className="font-display text-2xl text-primary">
                    {t('rooms.from')} €{selectedRoom.price}
                    <span className="text-base text-muted-foreground font-body">
                      {t('rooms.month')}
                    </span>
                  </p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
