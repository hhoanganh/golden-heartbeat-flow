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
        {/* Updated to a 4-column grid layout on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-l">

          {/* Column 1: Brand Section (Unchanged) */}
          <div>
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M192 512C86 385.1 0 263.3 0 192 0 86 86 0 192 0s192 86 192 192c0 71.3-86 193.1-192 320z" transform="rotate(180 192 256)" fill="#E23E57" stroke="#FFD700" strokeWidth="25" />
              </svg>
              <span className="text-heading-3 font-semibold">Giọt Máu Vàng</span>
            </div>
            <p className="text-body text-gentle-gray leading-relaxed mb-4">
              Connecting hearts, saving lives. Every drop counts.
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

          {/* Column 2: About Links (New) */}
          <div>
            <h4 className="text-heading-3 font-medium mb-4">Về Chúng Tôi</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Our Mission</Link></li>
              <li><Link to="/news" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">News & Updates</Link></li>
              <li><Link to="/stories" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Success Stories</Link></li>
              <li><Link to="/partners" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">For Partners</Link></li>
            </ul>
          </div>

          {/* Column 3: Support & Legal Links (New) */}
          <div>
            <h4 className="text-heading-3 font-medium mb-4">Hỗ Trợ & Pháp Lý</h4>
            <ul className="space-y-2">
                <li><Link to="/faqs" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">FAQs</Link></li>
                <li><Link to="/process" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Donation Process</Link></li>
                <li><Link to="/privacy" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/terms" className="text-body text-gentle-gray hover:text-white transition-colors duration-200">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Get in Touch (Unchanged) */}
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

        {/* Bottom Section (Unchanged) */}
        <div className="border-t border-supportive-blue/20 mt-l pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-micro text-gentle-gray">
              © 2025 Giọt Máu Vàng. All rights reserved.
            </div>
            <div className="flex space-x-6 text-micro">
              <Link to="/sitemap" className="text-gentle-gray hover:text-white transition-colors duration-200">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;