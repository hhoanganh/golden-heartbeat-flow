import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, Heart, Bell, LogOut } from 'lucide-react';
import MyProfileSection from '@/components/donor-dashboard/MyProfileSection';
import MyAppointmentsSection from '@/components/donor-dashboard/MyAppointmentsSection';
import MyDonationJourneySection from '@/components/donor-dashboard/MyDonationJourneySection';
import NotificationsSection from '@/components/donor-dashboard/NotificationsSection';
import MobileBottomNav from '@/components/MobileBottomNav';
import Header from '@/components/Header';

const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const validSection = menuItems.find(item => item.id === hash);
      if (validSection) {
        setActiveSection(hash);
      } else {
        setActiveSection('profile'); // Default to 'profile' if hash is invalid
      }
    } else {
      setActiveSection('profile'); // Ensure 'profile' is active if no hash is present
    }
  }, [location.hash]);
  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'appointments', label: 'My Appointments', icon: Calendar },
    
    { id: 'journey', label: 'My Donation Journey', icon: Heart },
    { id: 'notifications', label: 'Notifications / Alerts', icon: Bell },
  ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    navigate(`#${sectionId}`);
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'profile':
        return <MyProfileSection />; // Render the MyProfileSection component
      case 'appointments':
        return <MyAppointmentsSection />;
      
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
      <div className="flex flex-col md:flex-row"> {/* Changed to flex-col on mobile, flex-row on md and up */}
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-200 min-h-screen p-4">
          <h2 className="text-lg font-semibold text-compassion-red mb-6">Donor Dashboard</h2>
          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => handleSectionChange(item.id)}
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
        {/* Added pb-20 for mobile to avoid overlap with bottom nav */}
        <div className="flex-1 p-4 pb-20 md:p-8">
          {renderContent()}
        </div>
      </div>
      {/* Mobile Bottom Navigation */}
      <MobileBottomNav
        menuItems={menuItems}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />
    </div>
  );
};

export default DonorDashboard;
