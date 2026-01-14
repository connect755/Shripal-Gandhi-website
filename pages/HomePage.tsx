import React from 'react';
import Hero from '../components/Sections/Hero';
import Stats from '../components/Sections/Stats';
import Vision from '../components/Sections/Vision';
import JourneyTimeline from '../components/Sections/JourneyTimeline';
import Testimonials from '../components/Sections/Testimonials';
import YouTubeFeed from '../components/Sections/YouTubeFeed';
import FeaturedMedia from '../components/Sections/FeaturedMedia';
import ContactCTA from '../components/Sections/ContactCTA';
import Programs from '../components/Sections/Programs';
import FAQ from '../components/Sections/FAQ';
import InstagramFeed from '../components/Sections/InstagramFeed';
import InstagramReels from '../components/Sections/InstagramReels';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedMedia />
      <Vision />
      <Programs />
      <JourneyTimeline />
      <Testimonials />
      <YouTubeFeed />
      <InstagramReels />
      <InstagramFeed />
      <FAQ />
      <ContactCTA />
    </>
  );
};

export default HomePage;