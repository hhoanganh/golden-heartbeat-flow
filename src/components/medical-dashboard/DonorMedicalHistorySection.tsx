import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const mockMedicalHistory = [
  { donorId: 'BD123', lastDonation: '2023-11-10', bloodType: 'O+', status: 'Eligible', notes: 'Healthy, regular donor' },
  { donorId: 'BD456', lastDonation: '2023-09-20', bloodType: 'A-', status: 'Deferred (Temporary)', notes: 'Recent travel to malaria zone' },
  { donorId: 'BD789', lastDonation: '2023-07-01', bloodType: 'B+', status: 'Eligible', notes: 'No issues' },
];

const DonorMedicalHistorySection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Donor Medical History</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gentle-gray mb-4">Access comprehensive medical history and donation records.</p>
        <div className="flex gap-2 mb-6 max-w-md">
          <Input placeholder="Search by Donor ID or Name" />
          <Button variant="outline">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donor ID</TableHead>
              <TableHead>Last Donation</TableHead>
              <TableHead>Blood Type</TableHead>
              <TableHead>Eligibility Status</TableHead>
              <TableHead>Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockMedicalHistory.map(record => (
              <TableRow key={record.donorId}>
                <TableCell>{record.donorId}</TableCell>
                <TableCell>{record.lastDonation}</TableCell>
                <TableCell>{record.bloodType}</TableCell>
                <TableCell>{record.status}</TableCell>
                <TableCell>{record.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DonorMedicalHistorySection;