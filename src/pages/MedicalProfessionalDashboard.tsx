
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import MedicalProfileSection from '@/components/medical-dashboard/MedicalProfileSection'; // Import the specific profile component
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { QrCode, ClipboardList, FileText, LogOut, User } from 'lucide-react';
import Header from '@/components/Header';
import VerifyDonorSection from '@/components/medical-dashboard/VerifyDonorSection';
import HealthDeclarationReviewSection from '@/components/medical-dashboard/HealthDeclarationReviewSection';
import DonorMedicalHistorySection from '@/components/medical-dashboard/DonorMedicalHistorySection';

const MedicalProfessionalDashboard = () => {
  const [activeSection, setActiveSection] = useState('profile'); // Default to new top-level function
  const location = useLocation();
  const navigate = useNavigate();

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
    { id: 'profile', label: 'My Profile', icon: User },
    { id: 'verifyDonor', label: 'Verify Donor for Consultation', icon: QrCode }, // NEW
    { id: 'review', label: 'Health Declaration Review', icon: ClipboardList }, // UPDATED
    { id: 'history', label: 'Donor Medical History', icon: FileText },
    
  ];
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    navigate(`#${sectionId}`);
  };
  const renderContent = () => {
    switch (activeSection) {
      case 'verifyDonor':
        return <VerifyDonorSection />;
      case 'review':
        return <HealthDeclarationReviewSection />;
      case 'history':
        return <DonorMedicalHistorySection />;
      case 'profile':
        return <MedicalProfileSection />; // Render the MedicalProfileSection component
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

export default MedicalProfessionalDashboard;
