
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { User, Edit2, LogOut } from 'lucide-react';

const MyProfileSection = () => {
  const [isEditing, setIsEditing] = useState({
    personal: false,
    contact: false
  });
  const [hasChanges, setHasChanges] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Nguyen Van Nam',
    dateOfBirth: '1990-05-15',
    bloodType: 'O+',
    phoneNumber: '+84 901 234 567',
    email: 'nguyen.van.nam@email.com',
    address: '123 Le Loi Street, District 1, Ho Chi Minh City',
    newPassword: '',
    confirmPassword: ''
  });
  const [preferences, setPreferences] = useState({
    appointmentReminders: true,
    urgentBloodAlerts: true,
    eligibilityReminders: false,
    newsUpdates: true
  });

  const handleEdit = (section: 'personal' | 'contact') => {
    setIsEditing(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handlePreferenceChange = (preference: string, checked: boolean) => {
    setPreferences(prev => ({ ...prev, [preference]: checked }));
    setHasChanges(true);
  };

  const handleSaveChanges = () => {
    // Mock save action
    console.log('Saving changes...', formData, preferences);
    setHasChanges(false);
    setIsEditing({ personal: false, contact: false });
  };

  const handleLogout = () => {
    // Mock logout action
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
            className="bg-compassion-red hover:bg-compassion-red/90"
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
                  <Badge variant="default" className="mb-2 bg-compassion-red">Registered Blood Donor</Badge>
                  <p className="text-caption text-gentle-gray">Donor ID: BD2024001</p>
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

            {/* Right Column: Details & Preferences */}
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
                    <div className="space-y-2">
                      <Label htmlFor="bloodType">Blood Type</Label>
                      <p className="text-body text-deep-gray font-medium">{formData.bloodType}</p>
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
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    {isEditing.contact ? (
                      <Input
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
                      />
                    ) : (
                      <p className="text-body text-deep-gray">{formData.phoneNumber}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    {isEditing.contact ? (
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    ) : (
                      <p className="text-body text-deep-gray">{formData.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Home Address</Label>
                    {isEditing.contact ? (
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    ) : (
                      <p className="text-body text-deep-gray">{formData.address}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Notification Preferences Card */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-heading-4">My Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="appointmentReminders" className="text-body">Appointment Reminders</Label>
                    <Switch
                      id="appointmentReminders"
                      checked={preferences.appointmentReminders}
                      onCheckedChange={(checked) => handlePreferenceChange('appointmentReminders', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="urgentBloodAlerts" className="text-body">Urgent Blood Need Alerts</Label>
                    <Switch
                      id="urgentBloodAlerts"
                      checked={preferences.urgentBloodAlerts}
                      onCheckedChange={(checked) => handlePreferenceChange('urgentBloodAlerts', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="eligibilityReminders" className="text-body">Donation Eligibility Reminders</Label>
                    <Switch
                      id="eligibilityReminders"
                      checked={preferences.eligibilityReminders}
                      onCheckedChange={(checked) => handlePreferenceChange('eligibilityReminders', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="newsUpdates" className="text-body">News & Community Updates</Label>
                    <Switch
                      id="newsUpdates"
                      checked={preferences.newsUpdates}
                      onCheckedChange={(checked) => handlePreferenceChange('newsUpdates', checked)}
                    />
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

export default MyProfileSection;
