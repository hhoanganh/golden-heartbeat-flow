
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Calendar, Award, Share2, Download } from 'lucide-react';

// Mock data for donation journey
const mockImpactStats = {
  totalDonations: 8,
  livesSaved: 24, // 3 lives per donation
  totalVolume: 3600, // in ml
  donorSince: '2022-03-15',
  nextEligibleDate: '2024-02-15'
};

const mockDonationHistory = [
  {
    id: 1,
    date: '2023-11-10',
    location: 'Trung tâm Huyết học TP.HCM',
    bloodType: 'O+',
    volume: '450ml',
    status: 'successful',
    notes: 'Excellent health indicators'
  },
  {
    id: 2,
    date: '2023-08-22',
    location: 'Bệnh viện Bình Dân',
    bloodType: 'O+',
    volume: '450ml',
    status: 'successful',
    notes: 'Quick recovery, great vitals'
  },
  {
    id: 3,
    date: '2023-05-18',
    location: 'Bệnh viện Chợ Rẫy',
    bloodType: 'O+',
    volume: '450ml',
    status: 'successful',
    notes: 'Smooth donation process'
  },
  {
    id: 4,
    date: '2023-02-14',
    location: 'Trung tâm Huyết học TP.HCM',
    bloodType: 'O+',
    volume: '450ml',
    status: 'successful',
    notes: 'Valentine\'s Day donation drive'
  }
];

const MyDonationJourneySection = () => {
  const donorSinceDate = new Date(mockImpactStats.donorSince);
  const yearsDonating = new Date().getFullYear() - donorSinceDate.getFullYear();

  const ImpactStatCard = ({ icon: Icon, value, label, description }: {
    icon: any;
    value: string | number;
    label: string;
    description?: string;
  }) => (
    <div className="bg-warm-gray/50 rounded-md-custom p-6 text-center">
      <Icon className="h-8 w-8 mx-auto text-compassion-red mb-3" />
      <div className="text-display font-bold text-compassion-red mb-1">
        {value}
      </div>
      <div className="text-body font-medium text-deep-gray mb-1">
        {label}
      </div>
      {description && (
        <div className="text-caption text-gentle-gray">
          {description}
        </div>
      )}
    </div>
  );

  const DonationRecordCard = ({ donation, isLatest }: { donation: any; isLatest?: boolean }) => (
    <div className="relative">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 bg-compassion-red rounded-full border-2 border-white shadow-sm"></div>
      
      {/* Timeline line */}
      {!isLatest && (
        <div className="absolute left-1.5 top-9 w-0.5 h-full bg-warm-gray"></div>
      )}
      
      {/* Content */}
      <div className="ml-8 pb-6">
        <div className="bg-white border border-warm-gray rounded-md-custom p-4 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-body font-medium text-deep-gray">
                {new Date(donation.date).toLocaleDateString('vi-VN', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              <Badge variant="secondary" className="bg-harmony-green/10 text-harmony-green">
                {donation.status === 'successful' ? 'Successful' : donation.status}
              </Badge>
            </div>
            <span className="text-caption text-gentle-gray">#{donation.id}</span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-3">
            <div>
              <p className="text-caption text-gentle-gray">Location</p>
              <p className="text-body text-deep-gray">{donation.location}</p>
            </div>
            <div>
              <p className="text-caption text-gentle-gray">Blood Type & Volume</p>
              <p className="text-body text-deep-gray">{donation.bloodType} - {donation.volume}</p>
            </div>
          </div>
          
          {donation.notes && (
            <div>
              <p className="text-caption text-gentle-gray">Notes</p>
              <p className="text-caption text-deep-gray">{donation.notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-heading-2 text-deep-gray">My Donation Journey</CardTitle>
        <p className="text-body text-gentle-gray">
          Your journey of saving lives and making a difference in the community.
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* Impact Highlights */}
        <div>
          <h3 className="text-heading-3 font-medium text-deep-gray mb-6">Your Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <ImpactStatCard
              icon={Heart}
              value={mockImpactStats.livesSaved}
              label="Lives Saved"
              description="3 per donation"
            />
            <ImpactStatCard
              icon={Calendar}
              value={mockImpactStats.totalDonations}
              label="Total Donations"
              description={`Over ${yearsDonating} years`}
            />
            <ImpactStatCard
              icon={Users}
              value={`${(mockImpactStats.totalVolume / 1000).toFixed(1)}L`}
              label="Blood Donated"
              description="Total volume"
            />
            <ImpactStatCard
              icon={Award}
              value={yearsDonating}
              label="Years Donating"
              description="Since 2022"
            />
          </div>
        </div>

        {/* Digital Donor Card */}
        <div className="bg-gradient-to-r from-compassion-red to-supportive-blue rounded-md-custom p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-heading-3 font-medium mb-2">Digital Donor Card</h4>
              <p className="text-body opacity-90">Blood Type: O+ | Donor ID: #VN2022001</p>
              <p className="text-caption opacity-75">Valid until: December 2024</p>
            </div>
            <Button variant="secondary" size="sm" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </div>

        {/* Donation Timeline */}
        <div>
          <h3 className="text-heading-3 font-medium text-deep-gray mb-6">Donation History</h3>
          <div className="relative">
            {mockDonationHistory.map((donation, index) => (
              <DonationRecordCard
                key={donation.id}
                donation={donation}
                isLatest={index === mockDonationHistory.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Share Your Story CTA */}
        <div className="bg-warm-gray/50 rounded-md-custom p-6 text-center">
          <Share2 className="h-8 w-8 mx-auto text-supportive-blue mb-3" />
          <h4 className="text-heading-3 font-medium text-deep-gray mb-2">Share Your Story</h4>
          <p className="text-body text-gentle-gray mb-4">
            Inspire others by sharing your donation journey and encourage more people to become life-savers.
          </p>
          <Button className="bg-compassion-red hover:bg-compassion-red/90">
            Share My Impact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MyDonationJourneySection;
