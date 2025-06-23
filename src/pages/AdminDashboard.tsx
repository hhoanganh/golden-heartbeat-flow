
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { FileText, Calendar, Users, BarChart, LogOut, FolderOpen, User } from 'lucide-react';
import AdminProfileSection from '@/components/admin-dashboard/AdminProfileSection'; // Import the specific profile component
import Header from '@/components/Header';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('content');
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const validSection = menuItems.find(item => item.id === hash);
      if (validSection) {
        setActiveSection(hash);
      } else {
        setActiveSection('content');
      }
    }
  }, [location.hash]);
  const menuItems = [
    { id: 'profile', label: 'My Profile', icon: User }, // Added My Profile to sidebar
    { id: 'content', label: 'Public Content Management', icon: FileText },
    { id: 'events', label: 'Event & Schedule Management', icon: Calendar },
    { id: 'users', label: 'User & Role Management', icon: Users },
    { id: 'documents', label: 'Document Management', icon: FolderOpen }, // NEW: Document Management
    { id: 'reporting', label: 'Basic Operational Reporting', icon: BarChart },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'content':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Public Content Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage website content, announcements, and public information.</p>
            </CardContent>
          </Card>
        );
      case 'events':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Event & Schedule Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Create and manage donation events, schedules, and center operations.</p>
            </CardContent>
          </Card>
        );
      case 'users':
        return (
          <Card>
            <CardHeader>
              <CardTitle>User & Role Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage user accounts, roles, and access permissions across the system.</p>
            </CardContent>
          </Card>
        );
      case 'reporting':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Basic Operational Reporting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View system analytics, donation statistics, and operational reports.</p>
            </CardContent>
          </Card>
        );
        case 'documents': // NEW: Document Management content
        return (
          <Card>
            <CardHeader>
              <CardTitle>Document Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage scanned paper forms and other digital documents.</p>
            </CardContent>
          </Card>
        );
      case 'profile':
        return <AdminProfileSection />; // Render the AdminProfileSection component
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
          <h2 className="text-lg font-semibold text-kindness-orange mb-6">Admin Dashboard</h2>
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

export default AdminDashboard;
