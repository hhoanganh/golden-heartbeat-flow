import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react'; // Import the icon

const EventManagementSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-3 text-deep-gray">Event & Schedule Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body text-gentle-gray mb-6">Manage all blood donation events, including scheduling, capacity, and registration details. You can also view past events and analyze their performance.</p>
        <div className="mt-4 p-6 border border-dashed rounded-md-custom text-center text-deep-gray bg-warm-gray/30">
          <Calendar className="mx-auto h-10 w-10 text-deep-gray mb-3" />
          <p className="text-body-large font-medium mb-1">Event & Schedule Management Tools Placeholder</p>
          <p className="text-body text-gentle-gray">Future: Event creation/editing forms, calendar view, participant lists, and attendance tracking.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventManagementSection;