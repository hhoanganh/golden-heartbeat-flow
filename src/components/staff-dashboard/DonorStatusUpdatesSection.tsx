import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const DonorStatusUpdatesSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donor Status Updates</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gentle-gray mb-6">Update donor progress through the various stages of the donation process (e.g., arrived, screening, donating, completed).</p>
        <div className="space-y-4 max-w-md">
          <div>
            <Label htmlFor="donor-id-status">Donor ID</Label>
            <Input id="donor-id-status" placeholder="Enter Donor ID to update status" />
          </div>
          <div>
            <Label htmlFor="status-select">New Status</Label>
            <Select>
              <SelectTrigger id="status-select">
                <SelectValue placeholder="Select new status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="arrived">Arrived</SelectItem>
                <SelectItem value="screening">Screening</SelectItem>
                <SelectItem value="donating">Donating</SelectItem>
                <SelectItem value="resting">Resting</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="deferred">Deferred</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button>Update Status</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DonorStatusUpdatesSection;