import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: '📘', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'Twitter', icon: '🐦', href: '#' },
    { name: 'YouTube', icon: '📺', href: '#' }
  ];

  return (
    <footer id="contact-info" className="bg-deep-gray text-white relative">
      <div className="wave-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-l">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-l">
          {/* Brand Section (No changes here) */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M192 512C86 385.1 0 263.3 0 192 0 86 86 0 192 0s192 86 192 192c0 71.3-86 193.1-192 320z" transform="rotate(180 192 256)" fill="#E23E57" stroke="#FFD700" strokeWidth="25" />
              </svg>
              <span className="text-heading-3 font-semibold">Giọt Máu Vàng</span>
            </div>
            <p className="text-body text-gentle-gray leading-relaxed mb-4">
              Connecting hearts, saving lives. Every drop counts in building a healthier, more compassionate Ho Chi Minh City.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className="w-10 h-10 bg-supportive-blue/20 rounded-full flex items-center justify-center text-xl hover:bg-supportive-blue hover:scale-110 transition-all duration-300 relative overflow-hidden group">
                  {social.icon}
                  <div className="absolute inset-0 bg-supportive-blue rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                </a>
              ))}
            </div>
          </div>

          {/* New, Organized Quick Links Section */}
          <div className="grid grid-cols-2 md:col-span-2 gap-l">
            <div>
                <h4 className="text-heading-3 font-medium mb-4">Về Giọt Máu Vàng</h4>
                <ul className="space-y-2">
                    <li><Link to="/about" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Our Mission</Link></li>
                    <li><Link to="/stories" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Success Stories</Link></li>
                    <li><Link to="/news" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">News & Updates</Link></li>
                    <li><Link to="/partners" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">For Partners</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-heading-3 font-medium mb-4">Dành Cho Người Hiến Máu</h4>
                <ul className="space-y-2">
                    <li><Link to="/process" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Donation Process</Link></li>
                    <li><Link to="/login" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">My Account / Login</Link></li>
                    <li><Link to="/eligibility" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Health Requirements</Link></li>
                    <li><Link to="/privacy" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section (No changes here) */}
        <div className="border-t border-supportive-blue/20 mt-l pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-micro text-gentle-gray">
              © 2025 Giọt Máu Vàng. All rights reserved.
            </div>
            <div className="flex space-x-6 text-micro">
              <Link to="/privacy" className="text-gentle-gray hover:text-white transition-colors duration-200">Privacy Policy</Link>
              <Link to="/terms" className="text-gentle-gray hover:text-white transition-colors duration-200">Terms of Service</Link>
              <Link to="/sitemap" className="text-gentle-gray hover:text-white transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;