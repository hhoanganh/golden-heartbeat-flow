
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, MapPin, Clock, Heart, Phone } from 'lucide-react';

// Mock data for appointments
const mockUpcomingAppointment = {
  id: 1,
  date: '2024-01-15',
  time: '10:30 AM',
  location: 'Bệnh viện Chợ Rẫy',
  address: '201B Nguyễn Chí Thanh, Quận 5, TP.HCM',
  type: 'Hiến máu toàn phần',
  status: 'confirmed'
};

const mockPastAppointments = [
  {
    id: 2,
    date: '2023-11-10',
    time: '2:00 PM',
    location: 'Trung tâm Huyết học TP.HCM',
    address: '118 Hồng Bàng, Quận 5, TP.HCM',
    type: 'Hiến máu toàn phần',
    status: 'completed',
    bloodType: 'O+',
    volumeDonated: '450ml'
  },
  {
    id: 3,
    date: '2023-08-22',
    time: '9:15 AM',
    location: 'Bệnh viện Bình Dân',
    address: '371 Điện Biên Phủ, Quận 3, TP.HCM',
    type: 'Hiến máu toàn phần',
    status: 'completed',
    bloodType: 'O+',
    volumeDonated: '450ml'
  }
];

const MyAppointmentsSection = () => {
  const [hasUpcomingAppointment] = useState(true); // Toggle this to test empty state
  const [isLoading, setIsLoading] = useState(false);

  const handleCancelAppointment = async () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle cancellation logic here
    }, 2000);
  };

  const EmptyState = () => (
    <div className="text-center py-12">
      <Heart className="h-16 w-16 mx-auto text-gentle-gray mb-4" />
      <h3 className="text-heading-3 font-medium text-deep-gray mb-2">
        No Upcoming Appointments
      </h3>
      <p className="text-body text-gentle-gray mb-6">
        Ready to save lives? Book your next donation appointment today.
      </p>
      <Button className="bg-compassion-red hover:bg-compassion-red/90">
        Book Your First Appointment
      </Button>
    </div>
  );

  const UpcomingAppointmentView = () => (
    <div className="space-y-6">
      {/* Appointment Details */}
      <div className="bg-warm-gray/50 rounded-md-custom p-6">
        <div className="flex items-center justify-between mb-4">
          <Badge variant="default" className="bg-harmony-green text-white">
            Confirmed
          </Badge>
          <span className="text-caption text-gentle-gray">
            Appointment #{mockUpcomingAppointment.id}
          </span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Date & Time */}
          <div className="flex items-start space-x-3">
            <Calendar className="h-5 w-5 text-supportive-blue mt-1" />
            <div>
              <p className="text-body font-medium text-deep-gray">
                {new Date(mockUpcomingAppointment.date).toLocaleDateString('vi-VN', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
              <p className="text-caption text-gentle-gray flex items-center mt-1">
                <Clock className="h-4 w-4 mr-1" />
                {mockUpcomingAppointment.time}
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start space-x-3">
            <MapPin className="h-5 w-5 text-supportive-blue mt-1" />
            <div>
              <p className="text-body font-medium text-deep-gray">
                {mockUpcomingAppointment.location}
              </p>
              <p className="text-caption text-gentle-gray">
                {mockUpcomingAppointment.address}
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col space-y-2">
            <Button variant="outline" className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white">
              Reschedule
            </Button>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="border-error-red text-error-red hover:bg-error-red hover:text-white">
                  Cancel
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Cancel Appointment</AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to cancel your donation appointment? This action cannot be undone and may affect patients who need blood.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep Appointment</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleCancelAppointment}
                    className="bg-error-red hover:bg-error-red/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Cancelling...' : 'Yes, Cancel'}
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>

        {/* Contact Info */}
        <Separator className="my-4" />
        <div className="flex items-center text-caption text-gentle-gray">
          <Phone className="h-4 w-4 mr-1" />
          Need help? Call our support hotline: 1900-1234
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <CardTitle className="text-heading-2 text-deep-gray">My Appointments</CardTitle>
          <Button className="bg-compassion-red hover:bg-compassion-red/90">
            Book a New Appointment
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {hasUpcomingAppointment ? <UpcomingAppointmentView /> : <EmptyState />}
        
        {/* Past Appointments */}
        <Accordion type="single" collapsible className="mt-8">
          <AccordionItem value="past-appointments">
            <AccordionTrigger className="text-body font-medium text-supportive-blue hover:text-supportive-blue/80">
              View Past Appointments ({mockPastAppointments.length})
            </AccordionTrigger>
            <AccordionContent className="space-y-4">
              {mockPastAppointments.map((appointment) => (
                <div key={appointment.id} className="border border-warm-gray rounded-md-custom p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-body font-medium text-deep-gray">
                      {new Date(appointment.date).toLocaleDateString('vi-VN')}
                    </span>
                    <Badge variant="secondary" className="bg-harmony-green/10 text-harmony-green">
                      Completed
                    </Badge>
                  </div>
                  <p className="text-caption text-gentle-gray">{appointment.location}</p>
                  <div className="flex items-center space-x-4 mt-2 text-caption text-gentle-gray">
                    <span>Blood Type: {appointment.bloodType}</span>
                    <span>Volume: {appointment.volumeDonated}</span>
                  </div>
                </div>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default MyAppointmentsSection;
