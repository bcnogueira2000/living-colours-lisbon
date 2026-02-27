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

// Import images
import heroImage from '@/assets/hero-living.jpg';
import roomSmart from '@/assets/room-smart.jpg';
import roomSmart2 from '@/assets/room-smart-2.jpg';
import roomSmart3 from '@/assets/room-smart-3.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import roomStandard2 from '@/assets/room-standard-2.jpg';
import roomStandard3 from '@/assets/room-standard-3.jpg';
import roomPremium from '@/assets/room-premium.jpg';
import roomPremium2 from '@/assets/room-premium-2.jpg';
import roomPremium3 from '@/assets/room-premium-3.jpg';
import roomSuite from '@/assets/room-suite.jpg';
import roomSuite2 from '@/assets/room-suite-2.jpg';
import roomSuite3 from '@/assets/room-suite-3.jpg';
import roomMaster from '@/assets/room-master.jpg';
import roomMaster2 from '@/assets/room-master-2.jpg';
import roomMaster3 from '@/assets/room-master-3.jpg';
import spaceCowork from '@/assets/space-cowork.jpg';
import spaceMeeting from '@/assets/space-meeting.jpg';
import spaceKitchen from '@/assets/space-kitchen.jpg';
import spaceCinema from '@/assets/space-cinema.jpg';
import spaceGym from '@/assets/space-gym.jpg';
import locationLisbon from '@/assets/location-lisbon.jpg';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const roomImages = {
    smart: [roomSmart, roomSmart2, roomSmart3],
    standard: [roomStandard, roomStandard2, roomStandard3],
    premium: [roomPremium, roomPremium2, roomPremium3],
    suite: [roomSuite, roomSuite2, roomSuite3],
    master: [roomMaster, roomMaster2, roomMaster3],
  };

  const spaceImages = {
    cowork: spaceCowork,
    meeting: spaceMeeting,
    kitchen: spaceKitchen,
    cinema: spaceCinema,
    gym: spaceGym,
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header onOpenForm={() => setIsFormOpen(true)} />
        <main>
          <Hero onOpenForm={() => setIsFormOpen(true)} heroImage={heroImage} />
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
