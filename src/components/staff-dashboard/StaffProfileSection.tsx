
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { User, Edit2, LogOut, Building, Users, CheckCircle } from 'lucide-react';

const StaffProfileSection = () => {
  const [isEditing, setIsEditing] = useState({
    personal: false,
    contact: false
  });
  const [hasChanges, setHasChanges] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Tran Thi Mai',
    dateOfBirth: '1988-03-20',
    workEmail: 'tran.thi.mai@center.vn',
    workPhone: '+84 909 876 543',
    newPassword: '',
    confirmPassword: ''
  });

  const workInfo = {
    assignedCenter: 'Nguyen Hue Walking Street Center',
    department: 'Donor Check-in & Flow Management',
    employeeId: 'ST2024015',
    permissions: [
      'Donor Check-in',
      'Update Donor Status',
      'View Appointment Lists',
      'Generate Daily Reports'
    ]
  };

  const handleEdit = (section: 'personal' | 'contact') => {
    setIsEditing(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSaveChanges = () => {
    console.log('Saving changes...', formData);
    setHasChanges(false);
    setIsEditing({ personal: false, contact: false });
  };

  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <div className="space-y-6">
      <Card className="w-full">
        {/* Header & Action Container */}
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-heading-2 font-semibold text-deep-gray">My Profile</CardTitle>
          <Button 
            onClick={handleSaveChanges}
            disabled={!hasChanges}
            className="bg-harmony-green hover:bg-harmony-green/90"
          >
            Save Changes
          </Button>
        </CardHeader>

        <CardContent>
          {/* Two-Column Grid Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-l">
            
            {/* Left Column: Identity & Security */}
            <div className="lg:col-span-1 space-y-l">
              
              {/* Profile Summary Card */}
              <Card>
                <CardContent className="p-m text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="text-lg font-bold">
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-heading-3 font-medium text-deep-gray mb-2">{formData.fullName}</h3>
                  <Badge variant="default" className="mb-2 bg-supportive-blue">Center Staff</Badge>
                  <p className="text-caption text-gentle-gray">Employee ID: {workInfo.employeeId}</p>
                </CardContent>
              </Card>

              {/* Account Security Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-4">Account Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input
                      id="newPassword"
                      type="password"
                      value={formData.newPassword}
                      onChange={(e) => handleInputChange('newPassword', e.target.value)}
                      placeholder="Enter new password"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm New Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Confirm new password"
                    />
                  </div>
                  <Button variant="outline" className="w-full">
                    Update Password
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Column: Details & Work Information */}
            <div className="lg:col-span-2 space-y-l">
              
              {/* Personal Details Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-heading-4">Personal Details</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleEdit('personal')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      {isEditing.personal ? (
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange('fullName', e.target.value)}
                        />
                      ) : (
                        <p className="text-body text-deep-gray">{formData.fullName}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      {isEditing.personal ? (
                        <Input
                          id="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                        />
                      ) : (
                        <p className="text-body text-deep-gray">{new Date(formData.dateOfBirth).toLocaleDateString()}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information Card */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-heading-4">Contact Information</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleEdit('contact')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="workEmail">Work Email</Label>
                    {isEditing.contact ? (
                      <Input
                        id="workEmail"
                        type="email"
                        value={formData.workEmail}
                        onChange={(e) => handleInputChange('workEmail', e.target.value)}
                      />
                    ) : (
                      <p className="text-body text-deep-gray">{formData.workEmail}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="workPhone">Work Phone Number</Label>
                    {isEditing.contact ? (
                      <Input
                        id="workPhone"
                        value={formData.workPhone}
                        onChange={(e) => handleInputChange('workPhone', e.target.value)}
                      />
                    ) : (
                      <p className="text-body text-deep-gray">{formData.workPhone}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Work Information Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-4 flex items-center">
                    <Building className="mr-2 h-5 w-5" />
                    Work Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label className="text-body font-medium">Assigned Center</Label>
                    <p className="text-body text-deep-gray">{workInfo.assignedCenter}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-body font-medium">Department</Label>
                    <p className="text-body text-deep-gray">{workInfo.department}</p>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-body font-medium">Staff Permissions</Label>
                    <div className="space-y-2">
                      {workInfo.permissions.map((permission, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-harmony-green" />
                          <span className="text-body text-deep-gray">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Destructive Actions Container */}
          <Separator className="my-6" />
          <div className="flex justify-center">
            <Button 
              variant="destructive" 
              onClick={handleLogout}
              className="w-full max-w-md"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default StaffProfileSection;
