
import React from 'react';

const QuickAccessSection = () => {
  const quickLinks = [
    {
      icon: '🩸',
      label: 'Book Donation',
      description: 'Schedule your next blood donation'
    },
    {
      icon: '📍',
      label: 'Find Centers',
      description: 'Locate donation centers near you'
    },
    {
      icon: '📊',
      label: 'My Records',
      description: 'Track your donation history'
    },
    {
      icon: '🎯',
      label: 'Eligibility Check',
      description: 'Check if you can donate today'
    },
    {
      icon: '💬',
      label: 'Get Help',
      description: 'Chat with our support team'
    },
    {
      icon: '🏆',
      label: 'Achievements',
      description: 'See your life-saving impact'
    }
  ];

  return (
    <section className="py-xl bg-warm-gray/60">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
        <div className="grid lg:grid-cols-5 gap-l items-center">
          {/* Quick Access Links */}
          <div className="lg:col-span-2">
            <h2 className="text-heading-2 text-deep-gray font-semibold mb-l">
              Seamless Support, Meaningful Connection
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
              {quickLinks.map((link, index) => (
                <div 
                  key={index}
                  className="bg-warm-gray rounded-md-custom p-4 hover:bg-kindness-orange hover:scale-105 transition-all duration-300 cursor-pointer shadow-md-custom group"
                >
                  <div className="text-2xl mb-2 text-center group-hover:scale-110 transition-transform duration-200">
                    {link.icon}
                  </div>
                  <div className="text-body text-deep-gray font-medium text-center mb-1 group-hover:text-white">
                    {link.label}
                  </div>
                  <div className="text-caption text-gentle-gray text-center group-hover:text-white/90">
                    {link.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* About Us Section */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Abstract background shape */}
              <div 
                className="absolute inset-0 opacity-10 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #4A6B8A 0%, #E23E57 100%)',
                  transform: 'rotate(-5deg) scale(1.1)',
                  borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
                }}
              ></div>
              
              <div className="relative bg-white/80 backdrop-blur-sm rounded-md-custom p-8 shadow-md-custom">
                <h3 className="text-heading-3 text-deep-gray font-medium mb-4">
                  About Giọt Máu Vàng
                </h3>
                <p className="text-body text-deep-gray leading-relaxed mb-4">
                  We are Ho Chi Minh City's trusted blood donation platform, weaving compassion into action through innovative technology and community connection. Every drop donated through our platform creates a golden thread in the fabric of life-saving care.
                </p>
                <p className="text-body text-deep-gray leading-relaxed mb-6">
                  With real-time matching, streamlined processes, and unwavering support for both donors and recipients, we ensure that every heartbeat matters and every story of hope continues.
                </p>
                
                <div className="flex items-center space-x-6 text-caption text-gentle-gray">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-success-green rounded-full"></div>
                    <span>Verified & Secure</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-info-blue rounded-full"></div>
                    <span>Ministry Approved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-compassion-red rounded-full"></div>
                    <span>24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickAccessSection;
