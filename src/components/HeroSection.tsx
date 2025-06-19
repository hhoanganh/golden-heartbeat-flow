
import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1583&auto=format&fit=crop')`
        }} 
      >
        {/* Organic Overlay */}
        <div className="absolute inset-0 organic-overlay opacity-90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex items-center justify-center px-3 md:px-5 lg:px-10">
        <div className="max-w-4xl mx-auto text-center lg:text-left lg:max-w-7xl">
          <div className="lg:w-8/12 xl:w-7/12">
            {/* Main Headline */}
            <h1 className="text-display text-white font-bold mb-6 leading-tight">
              The Golden Drop: A Heartbeat for Ho Chi Minh City
            </h1>

            {/* Sub-headline */}
            <p className="text-body-large text-white mb-8 leading-relaxed opacity-95">
              Giọt Máu Vàng weaves compassion into action, connecting every vital drop to those who need it most, seamlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                size="lg" 
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom shadow-md-custom px-l py-4 text-body-large font-medium animate-pulse-soft hover:scale-105 transition-all duration-300"
              >
                Begin Your Life-Saving Journey
              </Button>
              
              <Button 
                size="lg"
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-supportive-blue rounded-md-custom px-l py-4 text-body-large font-medium transition-all duration-300 hover:scale-105"
              >
                See Our Impact
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-1 wave-pattern"></div>
    </section>
  );
};

export default HeroSection;
