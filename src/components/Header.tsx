import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white w-full border-b border-warm-gray/30 relative z-50">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-xl md:text-heading-2 font-bold text-compassion-red flex items-center">
            {/* New Blood Drop SVG Logo with a FITTED Gold Border */}
            <svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 384 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M192 512C86 385.1 0 263.3 0 192 0 86 86 0 192 0s192 86 192 192c0 71.3-86 193.1-192 320z"
                transform="rotate(180 192 256)"
                fill="#E23E57"
                stroke="#FFD700"
                strokeWidth="25"
              />
            </svg>
            Giọt Máu Vàng
          </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/events" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Find Events
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <a href="#" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
            {/* Updated 'Contact Us' link for desktop navigation */}
            <a href="#contact-info" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          </nav>

          {/* Right side - Login/Register and Language */}
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-warm-gray text-deep-gray border-0 rounded-md-custom hover:bg-compassion-red hover:text-white transition-all duration-300 hover:scale-105 px-l py-s text-body"
              >
                Login / Register
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-deep-gray hover:text-compassion-red transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-6 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-warm-gray/30 shadow-md-custom">
            <nav className="flex flex-col space-y-4 p-4">
              <Link to="/" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Home</Link>
              <Link to="/events" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Find Events</Link>
              <a href="#" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">FAQs</a>
              {/* Updated 'Contact Us' link for mobile navigation */}
              <a href="#contact-info" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Contact Us</a>
              <Link to="/login" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Login / Register</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;