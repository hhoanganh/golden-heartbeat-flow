import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const mockDeclarations = [
  { id: 'HD001', donorId: 'BD123', donorName: 'Nguyen Van A', status: 'Pending Review', date: '2024-03-10' },
  { id: 'HD002', donorId: 'BD456', donorName: 'Tran Thi B', status: 'Approved', date: '2024-03-09' },
  { id: 'HD003', donorId: 'BD789', donorName: 'Le Van C', status: 'Pending Review', date: '2024-03-09' },
];

const HealthDeclarationReviewSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Health Declaration Review</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 mb-4">Review and assess donor health declarations for donation eligibility.</p>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Declaration ID</TableHead>
              <TableHead>Donor Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockDeclarations.map(declaration => (
              <TableRow key={declaration.id}>
                <TableCell>{declaration.id}</TableCell>
                <TableCell>{declaration.donorName}</TableCell>
                <TableCell>{declaration.date}</TableCell>
                <TableCell><Badge variant={declaration.status === 'Pending Review' ? 'secondary' : 'default'}>{declaration.status}</Badge></TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">Review</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default HealthDeclarationReviewSection;