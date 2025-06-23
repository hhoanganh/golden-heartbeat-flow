
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, QrCode, Heart, Bell, LogOut } from 'lucide-react';
import Header from '@/components/Header';
import MyProfileSection from '@/components/donor-dashboard/MyProfileSection';
import MyAppointmentsSection from '@/components/donor-dashboard/MyAppointmentsSection';
import MyDonationJourneySection from '@/components/donor-dashboard/MyDonationJourneySection';
import NotificationsSection from '@/components/donor-dashboard/NotificationsSection';

const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1); // Remove '#'
    if (hash) {
      const validSection = menuItems.find(item => item.id === hash);
      if (validSection) {
        setActiveSection(hash);
      } else {
        setActiveSection('profile'); // Default to 'profile' if hash is invalid
      }
    }
  }, [location.hash]);

  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    { id: 'qrcode', label: 'My QR Code', icon: QrCode },
    { id: 'journey', label: 'My Donation Journey', icon: Heart },
    { id: 'notifications', label: 'Notifications / Alerts', icon: Bell },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <MyProfileSection />;
      case 'appointments':
        return <MyAppointmentsSection />;
      case 'qrcode':
        return (
          <div className="space-y-6">
            <h1 className="text-heading-2 font-semibold text-deep-gray">My QR Code</h1>
            <p className="text-body text-gentle-gray">Your unique QR code for quick check-in at donation centers.</p>
            {/* Placeholder for QR code content */}
          </div>
        );
      case 'journey':
        return <MyDonationJourneySection />;
      case 'notifications':
        return <NotificationsSection />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <h2 className="text-lg font-semibold text-compassion-red mb-6">Donor Dashboard</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setActiveSection(item.id)}
                >
                  <Icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              );
            })}
            <Separator className="my-4" />
            <Button variant="ghost" className="w-full justify-start text-red-600">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
