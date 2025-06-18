
import React from 'react';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  return (
    <footer className="bg-deep-gray text-white relative">
      {/* Wave pattern at top */}
      <div className="wave-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-l">
        <div className="grid md:grid-cols-3 gap-l">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-compassion-red rounded-full mr-3 flex items-center justify-center text-white font-bold">
                G
              </div>
              <span className="text-heading-3 font-semibold">Giọt Máu Vàng</span>
            </div>
            <p className="text-body text-gentle-gray leading-relaxed mb-4">
              Connecting hearts, saving lives. Every drop counts in building a healthier, more compassionate Ho Chi Minh City.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-supportive-blue/20 rounded-full flex items-center justify-center text-xl hover:bg-supportive-blue hover:scale-110 transition-all duration-300 relative overflow-hidden group"
                >
                  {social.icon}
                  <div className="absolute inset-0 bg-supportive-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-heading-3 font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">How to Donate</a></li>
              <li><a href="#" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Donation Centers</a></li>
              <li><a href="#" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Health Requirements</a></li>
              <li><a href="#" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Community Events</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-heading-3 font-medium mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <span className="text-lg">📍</span>
                <span className="text-body text-gentle-gray">123 Nguyen Hue Street, District 1, Ho Chi Minh City</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <span className="text-body text-gentle-gray">+84 28 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">✉️</span>
                <span className="text-body text-gentle-gray">hello@giotmauvang.vn</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">🕐</span>
                <span className="text-body text-gentle-gray">24/7 Emergency Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-supportive-blue/20 mt-l pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-micro text-gentle-gray">
              © 2025 Giọt Máu Vàng. All rights reserved.
            </div>
            <div className="flex space-x-6 text-micro">
              <a href="#" className="text-gentle-gray hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gentle-gray hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gentle-gray hover:text-white transition-colors duration-200">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
