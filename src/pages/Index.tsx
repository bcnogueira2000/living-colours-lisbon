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

import heroSuiteNew from '@/assets/real/hero-suite-new.png.asset.json';
import roomSuiteTerracotta from '@/assets/real/room-suite-terracotta.png.asset.json';
import roomSuiteReal from '@/assets/real/room-suite-real.png.asset.json';
import roomMasterView from '@/assets/real/room-master-view.png.asset.json';
import roomPremiumBalcony from '@/assets/real/room-premium-balcony.png.asset.json';
import roomStandardGreen from '@/assets/real/room-standard-green.png.asset.json';
import roomStandardReal from '@/assets/real/room-standard-real.png.asset.json';
import roomSmartGreen from '@/assets/real/room-smart-green.png.asset.json';
import roomSmartView from '@/assets/real/room-smart-view.png.asset.json';
import roomSingleGreen from '@/assets/real/room-single-green.png.asset.json';
import kitchenNew from '@/assets/real/kitchen-new.png.asset.json';
import kitchenRealA from '@/assets/real/kitchen-real-a.png.asset.json';
import kitchenRealB from '@/assets/real/kitchen-real-b.png.asset.json';
import corridor from '@/assets/real/corridor.png.asset.json';
import spaceCinema from '@/assets/space-cinema.jpg';
import spaceGym from '@/assets/space-gym.jpg';
import locationLisbon from '@/assets/location-lisbon.jpg';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const roomImages = {
    smart: [roomSmartGreen.url, roomSmartView.url, roomSingleGreen.url],
    standard: [roomStandardGreen.url, roomStandardReal.url, roomMasterView.url],
    premium: [roomPremiumBalcony.url, roomStandardGreen.url, roomMasterView.url],
    suite: [heroSuiteNew.url, roomSuiteTerracotta.url, roomSuiteReal.url],
    master: [roomSuiteTerracotta.url, heroSuiteNew.url, roomMasterView.url],
  };

  const spaceImages = {
    cowork: kitchenRealA.url,
    meeting: corridor.url,
    kitchen: kitchenNew.url,
    cinema: spaceCinema,
    gym: spaceGym,
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <Hero onOpenForm={() => setIsFormOpen(true)} heroImage={heroSuiteNew.url} />
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
