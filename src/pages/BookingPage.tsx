
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

const BookingPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
  const [healthDeclaration, setHealthDeclaration] = useState({
    feelingWell: false,
    noMedications: false,
    noRecentIllness: false,
    adequateSleep: false,
    noAlcohol: false
  });

  // Sample events data - in a real app, this would be fetched from an API
  const events = [
    {
      id: 1,
      title: "Weekend Blood Drive - District 3",
      date: "Dec 28, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Tao Dan Park, District 3",
      address: "123 Nguyen Du Street, District 3, Ho Chi Minh City",
      image: "https://images.unsplash.com/photo-1652149590094-98093f08509f?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["O-", "AB+"],
      capacity: 150,
      registered: 150
    },
    {
      id: 2,
      title: "New Year Hope Campaign",
      date: "Jan 2, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Nguyen Hue Walking Street",
      address: "Nguyen Hue Walking Street, District 1, Ho Chi Minh City",
      image: "https://images.unsplash.com/photo-1642697552227-ca21f326fe41?q=80&w=1562&auto=format&fit=crop",
      urgentNeeds: ["A+", "O+"],
      capacity: 200,
      registered: 156
    },
    {
      id: 3,
      title: "University Blood Drive - HCMUS",
      date: "Jan 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Ho Chi Minh City University of Science",
      address: "227 Nguyen Van Cu Street, District 5, Ho Chi Minh City",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["B+", "AB-"],
      capacity: 100,
      registered: 45
    }
  ];

  const selectedEvent = events.find(event => event.id === parseInt(eventId || '1')) || events[0];

  const processSteps = [
    { id: 1, title: "Event Details", status: currentStep === 1 ? "active" : currentStep > 1 ? "completed" : "upcoming" },
    { id: 2, title: "Health Declaration", status: currentStep === 2 ? "active" : currentStep > 2 ? "completed" : "upcoming" },
    { id: 3, title: "Time Slot", status: currentStep === 3 ? "active" : currentStep > 3 ? "completed" : "upcoming" },
    { id: 4, title: "Review & Confirm", status: currentStep === 4 ? "active" : "upcoming" }
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBack = () => {
    navigate('/events');
  };

  const getStepIcon = (step: typeof processSteps[0]) => {
    if (step.status === 'completed') {
      return <div className="w-8 h-8 bg-harmony-green text-white rounded-full flex items-center justify-center text-body font-medium">✓</div>;
    } else if (step.status === 'active') {
      return <div className="w-8 h-8 bg-compassion-red text-white rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
    } else {
      return <div className="w-8 h-8 bg-warm-gray text-gentle-gray rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Event Confirmation
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Please confirm the event details below before proceeding with your donation booking.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 bg-supportive-blue/5 rounded-md-custom border border-supportive-blue/20">
                <h3 className="text-body-large font-semibold text-deep-gray mb-3">
                  Event Information
                </h3>
                <div className="space-y-2 text-body text-gentle-gray">
                  <div className="flex items-start">
                    <span className="mr-2 mt-1">📅</span>
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2 mt-1">🕐</span>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-start">
                    <span className="mr-2 mt-1">📍</span>
                    <div>
                      <div>{selectedEvent.location}</div>
                      <div className="text-caption text-gentle-gray">{selectedEvent.address}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {selectedEvent.urgentNeeds.length > 0 && (
                <div className="p-4 bg-error-red/5 rounded-md-custom border border-error-red/20">
                  <p className="text-body-large font-semibold text-error-red mb-2">
                    Urgent Blood Types Needed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedEvent.urgentNeeds.map((bloodType) => (
                      <Badge key={bloodType} variant="destructive" className="text-body">
                        {bloodType}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        );
      
      case 2:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Health Declaration
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Please confirm your health status for safe blood donation.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="feelingWell" 
                    checked={healthDeclaration.feelingWell}
                    onCheckedChange={(checked) => 
                      setHealthDeclaration(prev => ({ ...prev, feelingWell: checked as boolean }))
                    }
                  />
                  <Label htmlFor="feelingWell" className="text-body text-deep-gray">
                    I am feeling well and in good health today
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="noMedications" 
                    checked={healthDeclaration.noMedications}
                    onCheckedChange={(checked) => 
                      setHealthDeclaration(prev => ({ ...prev, noMedications: checked as boolean }))
                    }
                  />
                  <Label htmlFor="noMedications" className="text-body text-deep-gray">
                    I am not taking any medications that would prevent donation
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="noRecentIllness" 
                    checked={healthDeclaration.noRecentIllness}
                    onCheckedChange={(checked) => 
                      setHealthDeclaration(prev => ({ ...prev, noRecentIllness: checked as boolean }))
                    }
                  />
                  <Label htmlFor="noRecentIllness" className="text-body text-deep-gray">
                    I have not been ill in the past 2 weeks
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="adequateSleep" 
                    checked={healthDeclaration.adequateSleep}
                    onCheckedChange={(checked) => 
                      setHealthDeclaration(prev => ({ ...prev, adequateSleep: checked as boolean }))
                    }
                  />
                  <Label htmlFor="adequateSleep" className="text-body text-deep-gray">
                    I have had adequate sleep (at least 6 hours) last night
                  </Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="noAlcohol" 
                    checked={healthDeclaration.noAlcohol}
                    onCheckedChange={(checked) => 
                      setHealthDeclaration(prev => ({ ...prev, noAlcohol: checked as boolean }))
                    }
                  />
                  <Label htmlFor="noAlcohol" className="text-body text-deep-gray">
                    I have not consumed alcohol in the past 24 hours
                  </Label>
                </div>
              </div>
              
              <div className="p-4 bg-warning-yellow/10 rounded-md-custom border border-warning-yellow/30">
                <p className="text-caption text-gentle-gray">
                  <strong>Note:</strong> A medical professional will conduct a brief health screening before donation to ensure your safety and the safety of recipients.
                </p>
              </div>
            </CardContent>
          </Card>
        );
      
      case 3:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Select Time Slot
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Choose your preferred donation time slot for {selectedEvent.date}.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-body-large font-semibold text-deep-gray mb-4">Available Times</h3>
                  <div className="space-y-2">
                    {timeSlots.map((slot) => (
                      <div key={slot} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={slot}
                          name="timeSlot"
                          value={slot}
                          checked={selectedTimeSlot === slot}
                          onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          className="text-compassion-red focus:ring-compassion-red"
                        />
                        <Label htmlFor={slot} className="text-body text-deep-gray cursor-pointer">
                          {slot}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-body-large font-semibold text-deep-gray mb-4">What to Expect</h3>
                  <div className="space-y-3 text-body text-gentle-gray">
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">⏱️</span>
                      <div>
                        <strong>Total Time:</strong> Approximately 45-60 minutes
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">📋</span>
                      <div>
                        <strong>Health Screening:</strong> 10-15 minutes
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">🩸</span>
                      <div>
                        <strong>Donation Process:</strong> 8-10 minutes
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">🍪</span>
                      <div>
                        <strong>Recovery Time:</strong> 10-15 minutes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      
      case 4:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Review & Confirm Booking
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Please review your booking details before confirming your appointment.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-supportive-blue/5 rounded-md-custom">
                  <h3 className="text-body-large font-semibold text-deep-gray mb-3">Event Details</h3>
                  <div className="space-y-2 text-body text-gentle-gray">
                    <div><strong>Event:</strong> {selectedEvent.title}</div>
                    <div><strong>Date:</strong> {selectedEvent.date}</div>
                    <div><strong>Location:</strong> {selectedEvent.location}</div>
                    <div><strong>Address:</strong> {selectedEvent.address}</div>
                  </div>
                </div>
                
                <div className="p-4 bg-harmony-green/5 rounded-md-custom">
                  <h3 className="text-body-large font-semibold text-deep-gray mb-3">Your Appointment</h3>
                  <div className="space-y-2 text-body text-gentle-gray">
                    <div><strong>Time Slot:</strong> {selectedTimeSlot || "Not selected"}</div>
                    <div><strong>Estimated Duration:</strong> 45-60 minutes</div>
                  </div>
                </div>
                
                <div className="p-4 bg-warning-yellow/10 rounded-md-custom">
                  <h3 className="text-body-large font-semibold text-deep-gray mb-3">Important Reminders</h3>
                  <ul className="space-y-2 text-body text-gentle-gray">
                    <li>• Bring a valid photo ID</li>
                    <li>• Eat a good meal before donation</li>
                    <li>• Stay hydrated (drink plenty of water)</li>
                    <li>• Wear comfortable clothing with sleeves that can be rolled up</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-xl">
        {/* Hero/Introduction Section */}
        <section className="mb-xl">
          <h1 className="text-display text-deep-gray font-bold mb-4 text-center lg:text-left">
            Book Your Donation
          </h1>
          <p className="text-body-large text-gentle-gray text-center lg:text-left max-w-2xl">
            Complete your registration to secure your spot at this life-saving event.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-xl">
          {/* Left Column - Event Summary & Progress */}
          <div className="lg:col-span-1 space-y-l">
            {/* Event Summary Card */}
            <Card className="bg-white shadow-md-custom rounded-md-custom overflow-hidden">
              <div className="relative h-32 lg:h-40">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              
              <CardHeader className="pb-4">
                <CardTitle className="text-heading-3 text-deep-gray font-medium line-clamp-2">
                  {selectedEvent.title}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center text-body text-gentle-gray">
                    <span className="mr-2">📅</span>
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-body text-gentle-gray">
                    <span className="mr-2">🕐</span>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-body text-gentle-gray">
                    <span className="mr-2">📍</span>
                    <span className="line-clamp-2">{selectedEvent.location}</span>
                  </div>
                </div>
              </CardHeader>

              {selectedEvent.urgentNeeds.length > 0 && (
                <CardContent className="pt-0">
                  <div className="p-3 bg-error-red/10 rounded-md-custom">
                    <p className="text-caption font-medium text-error-red mb-1">
                      Urgent Need:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedEvent.urgentNeeds.map((bloodType) => (
                        <Badge key={bloodType} variant="destructive" className="text-micro">
                          {bloodType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Process Steps Indicator */}
            <Card className="bg-white shadow-md-custom rounded-md-custom">
              <CardHeader className="pb-4">
                <CardTitle className="text-heading-3 text-deep-gray font-medium">
                  Booking Progress
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={step.id}>
                      <div className="flex items-center space-x-3">
                        {getStepIcon(step)}
                        <div className="flex-1">
                          <p className={`text-body font-medium ${
                            step.status === 'active' ? 'text-compassion-red' : 
                            step.status === 'completed' ? 'text-harmony-green' : 'text-gentle-gray'
                          }`}>
                            {step.title}
                          </p>
                        </div>
                        {step.status === 'active' && (
                          <Badge variant="default" className="bg-compassion-red text-white text-micro">
                            Current
                          </Badge>
                        )}
                        {step.status === 'completed' && (
                          <Badge variant="default" className="bg-harmony-green text-white text-micro">
                            Complete
                          </Badge>
                        )}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="ml-4 mt-2 mb-2">
                          <div className={`w-0.5 h-4 ${
                            step.status === 'completed' ? 'bg-harmony-green' :
                            step.status === 'active' ? 'bg-compassion-red' : 'bg-warm-gray'
                          }`}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Dynamic Content/Form Section */}
          <div className="lg:col-span-2">
            {renderStepContent()}
          </div>
        </div>

        {/* Navigation & Action Buttons Section */}
        <div className="mt-xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom"
            >
              ← Back to Events
            </Button>
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom"
              >
                Previous
              </Button>
            )}
          </div>
          
          <div className="flex gap-4">
            {currentStep < 4 ? (
              <Button
                size="lg"
                onClick={handleNext}
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
                disabled={
                  (currentStep === 2 && !Object.values(healthDeclaration).every(Boolean)) ||
                  (currentStep === 3 && !selectedTimeSlot)
                }
              >
                Next Step →
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={() => alert('Booking confirmed! You will receive a confirmation email shortly.')}
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
              >
                Confirm Booking
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
