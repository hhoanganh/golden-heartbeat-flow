import React from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1659718282962-452648b6eba6?q=80&w=1170&auto=format&fit=crop')`
        }} 
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      {/* This container pushes a single content block to the bottom and handles side padding */}
      <div className="relative z-10 h-full flex flex-col justify-end items-center text-center lg:items-start lg:text-left p-3 md:p-5 lg:p-10">
        
        {/* This inner block controls the content's max-width and bottom padding */}
        <div className="w-full max-w-7xl pb-10 md:pb-14">
          <div className="lg:w-8/12 xl:w-7/12">
            
            <h1 className="text-4xl md:text-display text-white font-bold mb-6 leading-tight">
              The Golden Drop: A Heartbeat for Ho Chi Minh City
            </h1>

            <p className="text-body-large text-white mb-8 leading-relaxed opacity-95">
              Giọt Máu Vàng weaves compassion into action, connecting every vital drop to those who need it most, seamlessly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start">
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