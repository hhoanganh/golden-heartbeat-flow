
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import StaffProfileSection from '@/components/staff-dashboard/StaffProfileSection'; // Import the specific profile component
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { UserCheck, Calendar, UserCog, Megaphone, LogOut, User } from 'lucide-react';
import Header from '@/components/Header';
import DonorCheckInSection from '@/components/staff-dashboard/DonorCheckInSection';
import LiveDonorListSection from '@/components/staff-dashboard/LiveDonorListSection';
import DonorStatusUpdatesSection from '@/components/staff-dashboard/DonorStatusUpdatesSection';
import StaffAlertsSection from '@/components/staff-dashboard/StaffAlertsSection';

const CenterStaffDashboard = () => {
  const [activeSection, setActiveSection] = useState('checkin');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const validSection = menuItems.find(item => item.id === hash);
      if (validSection) {
        setActiveSection(hash);
      } else {
        setActiveSection('checkin');
      }
    }
  }, [location.hash]);
  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'checkin', label: 'Donor Check-in', icon: UserCheck }, // KEEP
    { id: 'liveList', label: 'Live Donor List', icon: Calendar }, // UPDATE from "Donor Bookings & Details"
    { id: 'status', label: 'Donor Status Updates', icon: UserCog }, // KEEP
    { id: 'alerts', label: 'Staff Alerts & Broadcasts', icon: Megaphone },
    ];

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    navigate(`#${sectionId}`);  
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'checkin':
        return <DonorCheckInSection />;
      case 'liveList':
        return <LiveDonorListSection />;
      case 'status':
        return <DonorStatusUpdatesSection />;
      case 'alerts':
        return <StaffAlertsSection />;
      case 'profile':
        return <StaffProfileSection />; // Render the StaffProfileSection component
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
          <h2 className="text-lg font-semibold text-supportive-blue mb-6">Staff Dashboard</h2>
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
        <div className="flex-1 p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default CenterStaffDashboard;
