import { useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { WhatIs } from '@/components/WhatIs';
import { WhoFor } from '@/components/WhoFor';
import { Included } from '@/components/Included';
import { Rooms } from '@/components/Rooms';
import { MidPageCTA } from '@/components/MidPageCTA';
import { Spaces } from '@/components/Spaces';
import { Location } from '@/components/Location';
import { PreLaunch } from '@/components/PreLaunch';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { InterestForm } from '@/components/InterestForm';
import { ChatWidget } from '@/components/ChatWidget';

import heroRoomReal from '@/assets/real/hero-room-real.png.asset.json';
import roomSuiteReal from '@/assets/real/room-suite-real.png.asset.json';
import roomStandardReal from '@/assets/real/room-standard-real.png.asset.json';
import roomSmartReal from '@/assets/real/room-smart-real.png.asset.json';
import kitchenRealA from '@/assets/real/kitchen-real-a.png.asset.json';
import kitchenRealB from '@/assets/real/kitchen-real-b.png.asset.json';
import spaceCinema from '@/assets/space-cinema.jpg';
import spaceGym from '@/assets/space-gym.jpg';
import locationLisbon from '@/assets/location-lisbon.jpg';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const roomImages = {
    smart: [roomSmartReal.url, roomStandardReal.url],
    standard: [roomStandardReal.url, heroRoomReal.url],
    premium: [heroRoomReal.url, roomStandardReal.url],
    suite: [roomSuiteReal.url, heroRoomReal.url],
    master: [heroRoomReal.url, roomSuiteReal.url],
  };

  const spaceImages = {
    cowork: kitchenRealA.url,
    meeting: kitchenRealB.url,
    kitchen: kitchenRealA.url,
    cinema: spaceCinema,
    gym: spaceGym,
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <Hero onOpenForm={() => setIsFormOpen(true)} heroImage={heroRoomReal.url} />
          <WhatIs />
          <WhoFor />
          <Included />
          <Rooms roomImages={roomImages} />
          <MidPageCTA onOpenForm={() => setIsFormOpen(true)} />
          <Spaces spaceImages={spaceImages} />
          <Location locationImage={locationLisbon} />
          <PreLaunch onOpenForm={() => setIsFormOpen(true)} />
          <FAQ />
        </main>
        <Footer />
        <InterestForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
        <ChatWidget />
      </div>
    </LanguageProvider>
  );
};

export default Index;
