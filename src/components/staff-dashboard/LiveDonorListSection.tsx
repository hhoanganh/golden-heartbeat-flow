import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const mockDonors = [
  { id: 'BD123', name: 'Nguyen Van A', time: '09:00 AM', status: 'Arrived' },
  { id: 'BD456', name: 'Tran Thi B', time: '09:15 AM', status: 'Screening' },
  { id: 'BD789', name: 'Le Van C', time: '09:30 AM', status: 'Waiting' },
];

const LiveDonorListSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Donor List</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gentle-gray mb-4">View today's appointments and access donor details. The "Print Health Declaration" action is available within each donor's detail view.</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Donor ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Appointment Time</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDonors.map(donor => (
              <TableRow key={donor.id}>
                <TableCell>{donor.id}</TableCell>
                <TableCell>{donor.name}</TableCell>
                <TableCell>{donor.time}</TableCell>
                <TableCell><Badge>{donor.status}</Badge></TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default LiveDonorListSection;