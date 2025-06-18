
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import BloodDemandSection from '@/components/BloodDemandSection';
import ContentSection from '@/components/ContentSection';
import QuickAccessSection from '@/components/QuickAccessSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <BloodDemandSection />
      <ContentSection />
      <QuickAccessSection />
      <Footer />
    </div>
  );
};

export default Index;
