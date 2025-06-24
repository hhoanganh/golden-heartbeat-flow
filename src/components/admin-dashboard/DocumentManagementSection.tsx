import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FolderOpen } from 'lucide-react'; // Import the icon

const DocumentManagementSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-3 text-deep-gray">Document Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body text-gentle-gray mb-6">Manage and organize all digital documents, including scanned health declarations, consent forms, and internal reports. Ensure secure storage and easy retrieval.</p>
        <div className="mt-4 p-6 border border-dashed rounded-md-custom text-center text-deep-gray bg-warm-gray/30">
          <FolderOpen className="mx-auto h-10 w-10 text-deep-gray mb-3" />
          <p className="text-body-large font-medium mb-1">Document Management Tools Placeholder</p>
          <p className="text-body text-gentle-gray">Future: Document upload, search, categorization, version control, and access logs.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default DocumentManagementSection;