import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react'; // Import the icon

const UserManagementSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-3 text-deep-gray">User & Role Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body text-gentle-gray mb-6">Oversee all user accounts, including donors, staff, medical professionals, and other administrators. Assign roles, manage permissions, and handle user inquiries.</p>
        <div className="mt-4 p-6 border border-dashed rounded-md-custom text-center text-deep-gray bg-warm-gray/30">
          <Users className="mx-auto h-10 w-10 text-deep-gray mb-3" />
          <p className="text-body-large font-medium mb-1">User & Role Management Tools Placeholder</p>
          <p className="text-body text-gentle-gray">Future: User search, role assignment, account activation/deactivation, and password resets.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserManagementSection;