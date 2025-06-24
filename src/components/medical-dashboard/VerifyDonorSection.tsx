import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { QrCode, Search } from 'lucide-react';

const VerifyDonorSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Verify Donor for Consultation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-gentle-gray">Scan donor QR code or enter ID to initiate consultation process.</p>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* QR Scanner Section */}
          <div className="text-center p-6 border border-dashed rounded-md-custom">
            <QrCode className="h-24 w-24 mx-auto text-gentle-gray mb-4" />
            <Button>
              <QrCode className="mr-2 h-4 w-4" />
              Scan Donor QR Code
            </Button>
            <p className="text-caption text-gentle-gray mt-2">Point the camera at the donor's QR code.</p>
          </div>

          {/* Manual Search Section */}
          <div className="space-y-4">
            <h3 className="text-body-large font-medium text-deep-gray">Or Enter Donor ID</h3>
            <div className="flex gap-2">
              <Input placeholder="Enter Donor ID" />
              <Button variant="outline">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
    </Card>
  );
};

export default VerifyDonorSection;