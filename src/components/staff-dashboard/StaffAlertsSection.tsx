import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Megaphone, AlertTriangle } from 'lucide-react';

const mockAlerts = [
  { type: 'info', title: 'Reminder: Team Meeting at 3 PM', description: 'Discussing Q2 performance and upcoming events.' },
  { type: 'warning', title: 'Low Supply: O- Blood Type', description: 'Please prioritize O- donors if possible.' },
];

const StaffAlertsSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Staff Alerts & Broadcasts</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gentle-gray mb-6">Important announcements and alerts for center staff.</p>
        <div className="space-y-4">
          {mockAlerts.map((alert, index) => (
            <Alert key={index} variant={alert.type === 'warning' ? 'destructive' : 'default'}>
              {alert.type === 'warning' ? <AlertTriangle className="h-4 w-4" /> : <Megaphone className="h-4 w-4" />}
              <AlertTitle>{alert.title}</AlertTitle>
              <AlertDescription>{alert.description}</AlertDescription>
            </Alert>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StaffAlertsSection;