
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { User, Calendar, QrCode, Heart, Bell, LogOut } from 'lucide-react';
import Header from '@/components/Header';

const DonorDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile');

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
        return (
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View and edit your personal information, contact details, and donation preferences.</p>
            </CardContent>
          </Card>
        );
      case 'appointments':
        return (
          <Card>
            <CardHeader>
              <CardTitle>My Appointments</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View your upcoming and past donation appointments.</p>
            </CardContent>
          </Card>
        );
      case 'qrcode':
        return (
          <Card>
            <CardHeader>
              <CardTitle>My QR Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Your unique QR code for quick check-in at donation centers.</p>
            </CardContent>
          </Card>
        );
      case 'journey':
        return (
          <Card>
            <CardHeader>
              <CardTitle>My Donation Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Track your donation history and impact over time.</p>
            </CardContent>
          </Card>
        );
      case 'notifications':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Notifications / Alerts</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Important updates and reminders about your donations.</p>
            </CardContent>
          </Card>
        );
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
