
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { User, Edit2, LogOut, Shield, CheckCircle, Key, ListChecks } from 'lucide-react';

const AdminProfileSection = () => {
  const [isEditing, setIsEditing] = useState({
    personal: false,
    contact: false
  });
  const [hasChanges, setHasChanges] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Pham Van Minh',
    workEmail: 'pham.van.minh@admin.vn',
    workPhone: '+84 901 234 567',
    newPassword: '',
    confirmPassword: ''
  });

  const systemPermissions = {
    username: 'admin.minh',
    permissions: [
      'Full Content Management (CMS)',
      'Full Event & Schedule Management',
      'Full User & Role Management',
      'Full Access to Operational Reporting',
      'System Configuration Management',
      'Database Administration Access'
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
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-semibold text-gray-800">My Profile</CardTitle>
          <Button 
            onClick={handleSaveChanges}
            disabled={!hasChanges}
            className="bg-green-600 hover:bg-green-700"
          >
            Save Changes
          </Button>
        </CardHeader>

        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-1 space-y-6">
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src="/placeholder.svg" alt="Profile" />
                    <AvatarFallback className="text-lg font-bold">
                      <User className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{formData.fullName}</h3>
                  <Badge variant="default" className="mb-2 bg-red-600">System Administrator</Badge>
                  <p className="text-sm text-gray-500">Username: {systemPermissions.username}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Account Security
                  </CardTitle>
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
                  <Button variant="outline" className="w-full mt-2" onClick={() => console.log('Setup Two-Factor Auth clicked')}>
                    <Key className="mr-2 h-4 w-4" />
                    Setup Two-Factor Auth
                  </Button>
                  <Button variant="outline" className="w-full mt-2" onClick={() => console.log('View Access Logs clicked')}>
                    <ListChecks className="mr-2 h-4 w-4" />
                    View Access Logs
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Personal Details</CardTitle>
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => handleEdit('personal')}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    {isEditing.personal ? (
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                      />
                    ) : (
                      <p className="text-base text-gray-800">{formData.fullName}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg">Contact Information</CardTitle>
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
                      <p className="text-base text-gray-800">{formData.workEmail}</p>
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
                      <p className="text-base text-gray-800">{formData.workPhone}</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-red-600" />
                    System Permissions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-base text-gray-800 font-medium mb-3">
                      You have full administrative access to all system functions:
                    </p>
                    <div className="space-y-3">
                      {systemPermissions.permissions.map((permission, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-base text-gray-800">{permission}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-orange-100 border border-orange-300 rounded-md">
                    <p className="text-sm text-gray-800">
                      <strong>Security Notice:</strong> Your administrative privileges allow you to make system-wide changes. 
                      Please ensure all actions comply with organizational policies and data protection regulations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

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

export default AdminProfileSection;
