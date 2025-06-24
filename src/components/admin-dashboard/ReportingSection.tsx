import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart } from 'lucide-react'; // Import the icon

const ReportingSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-3 text-deep-gray">Basic Operational Reporting</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body text-gentle-gray mb-6">Access key operational reports and analytics to monitor system performance, donation trends, and user engagement. Generate custom reports for specific insights.</p>
        <div className="mt-4 p-6 border border-dashed rounded-md-custom text-center text-deep-gray bg-warm-gray/30">
          <BarChart className="mx-auto h-10 w-10 text-deep-gray mb-3" />
          <p className="text-body-large font-medium mb-1">Operational Reporting Tools Placeholder</p>
          <p className="text-body text-gentle-gray">Future: Dashboard overviews, customizable reports, data export, and trend analysis.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReportingSection;