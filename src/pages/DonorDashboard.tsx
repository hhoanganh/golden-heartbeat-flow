import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { User, Calendar, QrCode, Heart, Bell, LogOut, Menu } from 'lucide-react';
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

        {/* Mobile Sidebar Trigger and Content */}
        <div className="md:hidden p-4"> {/* This div will contain the mobile trigger */}
          <Sheet>
            <SheetTrigger asChild>
              {/* Add asChild={true} to the Button when it's used as a child of SheetTrigger/SheetClose */}
              <Button variant="outline" className="w-full justify-center" asChild>
                {/* Wrap icon and text in a single span to satisfy React.Children.only */}
                {/* This span ensures the Button (when acting as asChild) has only one direct child */}
                <span>
                  <Menu className="mr-2 h-4 w-4" />
                  Select Dashboard Section
                </span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-64 p-4"> {/* Mobile sidebar content */}
              <h2 className="text-lg font-semibold text-compassion-red mb-6">Donor Dashboard</h2>
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <SheetClose asChild key={item.id}> {/* Close sheet on item click */}
                      {/* Add asChild={true} to the Button when it's used as a child of SheetTrigger/SheetClose */}
                      <Button
                        variant={activeSection === item.id ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => handleSectionChange(item.id)}
                      >
                        {/* Wrap icon and text in a single span to satisfy React.Children.only */}
                        {/* This span ensures the Button (when acting as asChild) has only one direct child */}
                        <span>
                          <Icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </span>
                      </Button>
                    </SheetClose>
                  );
                })}
                <Separator className="my-4" />
                <SheetClose asChild>
                  {/* Add asChild={true} to the Button when it's used as a child of SheetTrigger/SheetClose */}
                  <Button variant="ghost" className="w-full justify-start text-red-600">
                    {/* Wrap icon and text in a single span to satisfy React.Children.only */}
                    {/* This span ensures the Button (when acting as asChild) has only one direct child */}
                    <span>
                      <LogOut className="mr-2 h-4 w-4" />
                      Logout
                    </span>
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 md:p-8"> {/* Adjusted padding for mobile */}
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default DonorDashboard;
