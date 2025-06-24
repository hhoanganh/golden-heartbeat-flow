
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText, Calendar, Users, BarChart, LogOut, FolderOpen, User } from 'lucide-react';
import AdminProfileSection from '@/components/admin-dashboard/AdminProfileSection'; // Import the specific profile component
import Header from '@/components/Header';
import ContentManagementSection from '@/components/admin-dashboard/ContentManagementSection';
import EventManagementSection from '@/components/admin-dashboard/EventManagementSection';
import UserManagementSection from '@/components/admin-dashboard/UserManagementSection';
import DocumentManagementSection from '@/components/admin-dashboard/DocumentManagementSection';
import ReportingSection from '@/components/admin-dashboard/ReportingSection';

const menuItems = [
  { id: 'profile', label: 'My Profile', icon: User },
  { id: 'content', label: 'Public Content Management', icon: FileText },
  { id: 'events', label: 'Event & Schedule Management', icon: Calendar },
  { id: 'users', label: 'User & Role Management', icon: Users },
  { id: 'documents', label: 'Document Management', icon: FolderOpen },
  { id: 'reporting', label: 'Basic Operational Reporting', icon: BarChart },
];

const AdminDashboard = () => {
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
        setActiveSection('profile'); // Default to 'profile' for consistency
      }
    } else {
      setActiveSection('profile'); // Ensure 'profile' is active if no hash is present
    }
  }, [location.hash, menuItems]); // Added menuItems to dependency array
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    navigate(`#${sectionId}`);
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'content':
        return <ContentManagementSection />;
      case 'events':
        return <EventManagementSection />;
      case 'users':
        return <UserManagementSection />;
      case 'reporting':
        return <ReportingSection />;
      case 'documents':
        return <DocumentManagementSection />;
      case 'profile':
        return <AdminProfileSection />; // Render the AdminProfileSection component
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50"> {/* bg-gray-50 is standard */}
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white border-r border-gray-200 min-h-screen p-4"> {/* bg-white, border-gray-200 are standard */}
          <h2 className="text-lg font-semibold text-kindness-orange mb-6">Admin Dashboard</h2> {/* text-lg, font-semibold are standard. text-kindness-orange is custom color. */}
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
            <Separator className="my-4" /> {/* my-4 is standard */}
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

export default AdminDashboard;
