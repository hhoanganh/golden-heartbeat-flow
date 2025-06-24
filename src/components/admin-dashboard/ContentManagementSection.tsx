import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react'; // Import the icon

const ContentManagementSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-3 text-deep-gray">Public Content Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body text-gentle-gray mb-6">Here you can manage all public-facing content on the website, including news articles, impact stories, and general information pages. Use the tools below to create, edit, or publish content.</p>
        <div className="mt-4 p-6 border border-dashed rounded-md-custom text-center text-deep-gray bg-warm-gray/30">
          <FileText className="mx-auto h-10 w-10 text-deep-gray mb-3" />
          <p className="text-body-large font-medium mb-1">Content Management Tools Placeholder</p>
          <p className="text-body text-gentle-gray">Future: WYSIWYG editor, media library, article drafts, and publishing controls.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContentManagementSection;