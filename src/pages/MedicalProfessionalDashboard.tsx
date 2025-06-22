
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { QrCode, ClipboardList, CheckCircle, FileText, LogOut, User } from 'lucide-react';
import Header from '@/components/Header';

const MedicalProfessionalDashboard = () => {
  const [activeSection, setActiveSection] = useState('verifyDonor'); // Default to new top-level function
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash) {
      const validSection = menuItems.find(item => item.id === hash);
      if (validSection) {
        setActiveSection(hash);
      } else {
        setActiveSection('verifyDonor');
      }
    }
  }, [location.hash]);
  const menuItems = [
    { id: 'verifyDonor', label: 'Verify Donor for Consultation', icon: QrCode }, // NEW
    { id: 'review', label: 'Health Declaration Review', icon: ClipboardList }, // UPDATED
    { id: 'history', label: 'Donor Medical History', icon: FileText },
    { id: 'profile', label: 'My Profile', icon: User },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'verifyDonor':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Verify Donor for Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scan donor QR code or enter ID to initiate consultation process.</p>
            </CardContent>
          </Card>
        );
      case 'review':
        return (
           <Card>
            <CardHeader>
              <CardTitle>Health Declaration Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Review and assess donor health declarations for donation eligibility.</p>
            </CardContent>
          </Card>
        );

      case 'history':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Donor Medical History</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Access comprehensive medical history and donation records.</p>
            </CardContent>
          </Card>
        );
              case 'profile':
        return (
          <Card>
            <CardHeader>
              <CardTitle>My Profile</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Manage your personal medical professional profile and account settings.</p>
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
          <h2 className="text-lg font-semibold text-harmony-green mb-6">Medical Dashboard</h2>
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

export default MedicalProfessionalDashboard;
