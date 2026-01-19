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

// Import images
import heroImage from '@/assets/hero-living.jpg';
import roomSmart from '@/assets/room-smart.jpg';
import roomStandard from '@/assets/room-standard.jpg';
import roomPremium from '@/assets/room-premium.jpg';
import roomSuite from '@/assets/room-suite.jpg';
import roomMaster from '@/assets/room-master.jpg';
import spaceCowork from '@/assets/space-cowork.jpg';
import spaceMeeting from '@/assets/space-meeting.jpg';
import spaceKitchen from '@/assets/space-kitchen.jpg';
import spaceCinema from '@/assets/space-cinema.jpg';
import spaceGym from '@/assets/space-gym.jpg';
import locationLisbon from '@/assets/location-lisbon.jpg';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const roomImages = {
    smart: roomSmart,
    standard: roomStandard,
    premium: roomPremium,
    suite: roomSuite,
    master: roomMaster,
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
      </div>
    </LanguageProvider>
  );
};

export default Index;
