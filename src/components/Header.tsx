import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { User, ClipboardList, Stethoscope, LayoutDashboard } from 'lucide-react';

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
              <Link to="/impact-stories" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Our Impact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/events" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Find Events
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {/* New "Find Centers" link added here */}
            <Link to="/centers" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Find Centers
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            <Link to="/faqs" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              FAQs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
            {/* Updated 'Contact Us' link for desktop navigation to point to ContactUs.tsx page */}
            <Link to="/contact" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200 relative group">
              Contact Us
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-supportive-blue transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </Link>
          </nav>

          {/* Right side - Login/Register and Language */}
          <div className="flex items-center space-x-4">
            {/* Desktop Items */}
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-warm-gray text-deep-gray border-0 rounded-md-custom hover:bg-compassion-red hover:text-white transition-all duration-300 hover:scale-105 px-l py-s text-body"
                >
                  Login / Register
                </Button>
              </Link>
              
              {/* Role Icons */}
              <div className="flex items-center space-x-1">
                {/* Donor Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><User className="h-5 w-5 text-deep-gray" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Registered Donor</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to="/donor-dashboard#profile"><DropdownMenuItem>My Profile</DropdownMenuItem></Link>
                        <Link to="/donor-dashboard#appointments"><DropdownMenuItem>My Appointments</DropdownMenuItem></Link>
                        <Link to="/donor-dashboard#journey"><DropdownMenuItem>My Donation Journey</DropdownMenuItem></Link>
                        
                        <Link to="/donor-dashboard#notifications"><DropdownMenuItem>Notifications / Alerts</DropdownMenuItem></Link>
                        
                  <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TooltipTrigger>
                  <TooltipContent><p>Registered Donor</p></TooltipContent>
                </Tooltip>

                {/* Center Staff Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><ClipboardList className="h-5 w-5 text-deep-gray" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Center Staff Dashboard</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to="/staff-dashboard"><DropdownMenuItem>My Profile</DropdownMenuItem></Link>
                        <Link to="/staff-dashboard#checkin"><DropdownMenuItem>Donor Check-in</DropdownMenuItem></Link>
                        <Link to="/staff-dashboard#liveList"><DropdownMenuItem>Live Donor List</DropdownMenuItem></Link>
                        <Link to="/staff-dashboard#status"><DropdownMenuItem>Donor Status Updates</DropdownMenuItem></Link>
                        <Link to="/staff-dashboard#alerts"><DropdownMenuItem>Staff Alerts & Broadcasts</DropdownMenuItem></Link>
                        
                       
                        
                         <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TooltipTrigger>
                  <TooltipContent><p>Center Staff</p></TooltipContent>
                </Tooltip>

                {/* Medical Professional Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><Stethoscope className="h-5 w-5 text-deep-gray" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Medical Professional Dashboard</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to="/medical-dashboard#profile"><DropdownMenuItem>My Profile</DropdownMenuItem></Link>
                        <Link to="/medical-dashboard#verifyDonor"><DropdownMenuItem>Verify Donor for Consultation</DropdownMenuItem></Link>
                        <Link to="/medical-dashboard#review"><DropdownMenuItem>Health Declaration Review</DropdownMenuItem></Link>
                        <Link to="/medical-dashboard#history"><DropdownMenuItem>Donor Medical History</DropdownMenuItem></Link>
                        
                        
                        
                       <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TooltipTrigger>
                  <TooltipContent><p>Medical Professional</p></TooltipContent>
                </Tooltip>

                {/* System Admin Icon */}
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><LayoutDashboard className="h-5 w-5 text-deep-gray" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>System Administrator</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <Link to="/admin-dashboard#profile"><DropdownMenuItem>My Profile</DropdownMenuItem></Link>
                        <Link to="/admin-dashboard#content"><DropdownMenuItem>Content Management</DropdownMenuItem></Link>
                        <Link to="/admin-dashboard#events"><DropdownMenuItem>Event Management</DropdownMenuItem></Link>
                        <Link to="/admin-dashboard#users"><DropdownMenuItem>User Management</DropdownMenuItem></Link>
                        <Link to="/admin-dashboard#documents"><DropdownMenuItem>Document Management</DropdownMenuItem></Link>
                        <Link to="/admin-dashboard#reporting"><DropdownMenuItem>Reporting</DropdownMenuItem></Link>
                        
                        
                        
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TooltipTrigger>
                  <TooltipContent><p>System Administrator</p></TooltipContent>
                </Tooltip>
              </div>
            </div>
            
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
              <Link to="/impact-stories" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Our Impact</Link>
              <Link to="/events" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Find Events</Link>
              {/* New "Find Centers" link added here */}
              <Link to="/centers" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Find Centers</Link>
              <Link to="/faqs" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">FAQs</Link>
              <Link to="/contact" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Contact Us</Link>
              <Link to="/login" className="text-body text-deep-gray hover:text-supportive-blue transition-colors duration-200">Login / Register</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
