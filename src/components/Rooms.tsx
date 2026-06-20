import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Bath, ShowerHead, ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Room {
  nameKey: string;
  descKey: string;
  detailKey: string;
  sizeKey: string;
  price: string;
  images: string[];
  privateBathroom: boolean;
}

interface RoomsProps {
  roomImages: Record<string, string[]>;
}

export function Rooms({ roomImages }: RoomsProps) {
  const { t } = useLanguage();
  const { ref: gridRef, isVisible } = useScrollReveal(0.1);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [cardIndices, setCardIndices] = useState<Record<string, number>>({});

  const rooms: Room[] = [
    {
      nameKey: 'rooms.smart',
      descKey: 'rooms.smart.desc',
      detailKey: 'rooms.smart.detail',
      sizeKey: 'rooms.size.smart',
      price: '650',
      images: roomImages.smart,
      privateBathroom: false,
    },
    {
      nameKey: 'rooms.standard',
      descKey: 'rooms.standard.desc',
      detailKey: 'rooms.standard.detail',
      sizeKey: 'rooms.size.standard',
      price: '750',
      images: roomImages.standard,
      privateBathroom: false,
    },
    {
      nameKey: 'rooms.premium',
      descKey: 'rooms.premium.desc',
      detailKey: 'rooms.premium.detail',
      sizeKey: 'rooms.size.premium',
      price: '900',
      images: roomImages.premium,
      privateBathroom: false,
    },
    {
      nameKey: 'rooms.suite',
      descKey: 'rooms.suite.desc',
      detailKey: 'rooms.suite.detail',
      sizeKey: 'rooms.size.suite',
      price: '1100',
      images: roomImages.suite,
      privateBathroom: true,
    },
    {
      nameKey: 'rooms.master',
      descKey: 'rooms.master.desc',
      detailKey: 'rooms.master.detail',
      sizeKey: 'rooms.size.master',
      price: '1400',
      images: roomImages.master,
      privateBathroom: true,
    },
  ];

  const openDetail = (room: Room) => {
    setSelectedRoom(room);
    setCarouselIndex(0);
  };

  const getCardIndex = (key: string) => cardIndices[key] || 0;

  const setCardImage = (key: string, dir: number, total: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCardIndices(prev => ({
      ...prev,
      [key]: (((prev[key] || 0) + dir) % total + total) % total,
    }));
  };

  return (
    <section id="rooms" className="section-padding bg-cream-dark">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <span className="label-small block mb-4">{t('rooms.label')}</span>
          <h2 className="heading-section mb-6">{t('rooms.title')}</h2>
          <p className="editorial-text">{t('rooms.intro')}</p>
        </div>

        <div ref={gridRef} className="grid gap-6">
          {rooms.map((room, index) => {
            const imgIdx = getCardIndex(room.nameKey);
            const isEven = index % 2 === 0;
            return (
              <div
                key={room.nameKey}
                className={`group relative overflow-hidden rounded-2xl bg-background shadow-card hover:shadow-elevated cursor-pointer flex flex-col md:flex-row ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-x-0'
                    : `opacity-0 ${isEven ? '-translate-x-6' : 'translate-x-6'}`
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
                onClick={() => openDetail(room)}
              >
                {/* Image carousel */}
                <div className="md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden relative">
                  <img
                    src={room.images[imgIdx]}
                    alt={t(room.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {room.images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => setCardImage(room.nameKey, -1, room.images.length, e)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={(e) => setCardImage(room.nameKey, 1, room.images.length, e)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/70 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {room.images.map((_, i) => (
                          <span
                            key={i}
                            className={`w-1.5 h-1.5 rounded-full transition-colors ${
                              i === imgIdx ? 'bg-primary-foreground' : 'bg-primary-foreground/40'
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="heading-subsection mb-4">{t(room.nameKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {t(room.descKey)}
                  </p>

                  {/* Icons row */}
                  <div className="flex items-center gap-4 mb-6 flex-wrap">
                    {room.privateBathroom ? (
                      <div className="flex items-center gap-1.5">
                        <Bath size={18} className="text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {t('rooms.privateBathroom')}
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <ShowerHead size={18} className="text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                          {t('rooms.sharedBathroom')}
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-1.5">
                      <Maximize size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {t(room.sizeKey)}
                      </span>
                    </div>
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
            );
          })}
        </div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedRoom} onOpenChange={(open) => !open && setSelectedRoom(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden max-h-[90vh]">
          {selectedRoom && (
            <ScrollArea className="max-h-[90vh]">
              {/* Carousel */}
              <div className="relative aspect-[16/9] bg-muted">
                <img
                  src={selectedRoom.images[carouselIndex]}
                  alt={t(selectedRoom.nameKey)}
                  className="w-full h-full object-cover"
                />
                {selectedRoom.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCarouselIndex((i) => (i - 1 + selectedRoom.images.length) % selectedRoom.images.length)}
                      className="absolute left-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={() => setCarouselIndex((i) => (i + 1) % selectedRoom.images.length)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-2 hover:bg-background transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {selectedRoom.images.map((_, i) => (
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

                <div className="flex items-center gap-4 mb-6 flex-wrap">
                  {selectedRoom.privateBathroom ? (
                    <div className="flex items-center gap-1.5">
                      <Bath size={18} className="text-primary" />
                      <span className="text-sm font-medium text-primary">
                        {t('rooms.privateBathroom')}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1.5">
                      <ShowerHead size={18} className="text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {t('rooms.sharedBathroom')}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-1.5">
                    <Maximize size={18} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {t(selectedRoom.sizeKey)}
                    </span>
                  </div>
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
            </ScrollArea>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
