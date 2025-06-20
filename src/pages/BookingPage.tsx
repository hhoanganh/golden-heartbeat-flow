import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar'; // Calendar is imported but not explicitly used in this snippet's render
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input'; // Input is imported but not explicitly used in this snippet's render
import { allEvents } from '@/data/eventsData'; // Import allEvents from the new central file

const BookingPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  // Start currentStep at 1 for "Health Declaration"
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

  // Find the selected event from the centralized data
  // Use allEvents to find the event
  const selectedEvent = allEvents.find(event => event.id === parseInt(eventId || '0')) || allEvents[0]; 

  // Updated process steps for a logged-in user
  const processSteps = [
    { id: 1, title: "Health Declaration", status: currentStep === 1 ? "active" : currentStep > 1 ? "completed" : "upcoming" },
    { id: 2, title: "Time Slot", status: currentStep === 2 ? "active" : currentStep > 2 ? "completed" : "upcoming" },
    { id: 3, title: "Review & Confirm", status: currentStep === 3 ? "active" : "upcoming" }
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
    // Total of 3 steps
    if (currentStep < 3) { 
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
      // Step 1: Health Declaration (formerly case 2)
      case 1:
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
      
      // Step 2: Select Time Slot (formerly case 3)
      case 2:
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
      
      // Step 3: Review & Confirm (formerly case 4)
      case 3:
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
            {/* Event Summary Card (Always visible, replaces former "Event Details" step content) */}
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
            {/* Conditional rendering for Next Step / Confirm Booking button */}
            {currentStep < 3 ? ( // Changed from 4 to 3 steps
              <Button
                size="lg"
                onClick={handleNext}
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
                disabled={
                  // Health declaration for step 1 (was step 2)
                  (currentStep === 1 && !Object.values(healthDeclaration).every(Boolean)) ||
                  // Time slot for step 2 (was step 3)
                  (currentStep === 2 && !selectedTimeSlot)
                }
              >
                Next Step →
              </Button>
            ) : (
              // Final step button
              <Button
                size="lg"
                onClick={() => navigate(`/booking-success/${selectedEvent.id}`)} // Navigate to QR code page
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