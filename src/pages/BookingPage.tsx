
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const BookingPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  // Mock event data - in a real app, this would be fetched based on eventId
  const selectedEvent = {
    id: parseInt(eventId || '1'),
    title: "Weekend Blood Drive - District 3",
    date: "Dec 28, 2024",
    time: "8:00 AM - 5:00 PM",
    location: "Tao Dan Park, District 3",
    address: "123 Nguyen Du Street, District 3, Ho Chi Minh City",
    image: "https://images.unsplash.com/photo-1652149590094-98093f08509f?q=80&w=1170&auto=format&fit=crop",
    urgentNeeds: ["O-", "AB+"],
    capacity: 150,
    registered: 89
  };

  const processSteps = [
    { id: 1, title: "Confirm Event", status: "active" },
    { id: 2, title: "Account", status: "upcoming" },
    { id: 3, title: "Health Declaration", status: "upcoming" },
    { id: 4, title: "Review & Book", status: "upcoming" }
  ];

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCreateAccount = () => {
    navigate('/login');
  };

  const handleBack = () => {
    navigate('/events');
  };

  const getStepIcon = (step: typeof processSteps[0]) => {
    if (step.status === 'active') {
      return <div className="w-8 h-8 bg-compassion-red text-white rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
    } else {
      return <div className="w-8 h-8 bg-warm-gray text-gentle-gray rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
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
          {/* Left Column - Event Summary & Progress (Desktop Sidebar) */}
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
                <CardDescription className="space-y-2">
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
                </CardDescription>
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
                  Registration Progress
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
                            step.status === 'active' ? 'text-compassion-red' : 'text-gentle-gray'
                          }`}>
                            {step.title}
                          </p>
                        </div>
                        {step.status === 'active' && (
                          <Badge variant="default" className="bg-compassion-red text-white text-micro">
                            Current
                          </Badge>
                        )}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="ml-4 mt-2 mb-2">
                          <div className={`w-0.5 h-4 ${
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
            <Card className="bg-white shadow-md-custom rounded-md-custom">
              <CardHeader className="pb-6">
                <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                  Account Required
                </CardTitle>
                <CardDescription className="text-body text-gentle-gray">
                  To complete your donation booking, please log in to your account or create a new one. 
                  This helps us maintain your donation history and ensure a smooth registration process.
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Authentication Options */}
                <div className="space-y-4">
                  <div className="text-center">
                    <h3 className="text-heading-3 text-deep-gray font-medium mb-4">
                      Choose an option to continue
                    </h3>
                  </div>

                  {/* Login Option */}
                  <Card className="border-supportive-blue/20 hover:border-supportive-blue/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-supportive-blue/10 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xl">👤</span>
                        </div>
                        <h4 className="text-body-large font-semibold text-deep-gray">
                          Already have an account?
                        </h4>
                        <p className="text-body text-gentle-gray">
                          Sign in to access your donation history and expedite the booking process.
                        </p>
                        <Button
                          size="lg"
                          onClick={handleLogin}
                          className="w-full bg-supportive-blue hover:bg-supportive-blue/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
                        >
                          Sign In
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="relative">
                    <Separator />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="bg-white px-4 text-caption text-gentle-gray">OR</span>
                    </div>
                  </div>

                  {/* Create Account Option */}
                  <Card className="border-compassion-red/20 hover:border-compassion-red/40 transition-colors">
                    <CardContent className="p-6">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 bg-compassion-red/10 rounded-full flex items-center justify-center mx-auto">
                          <span className="text-xl">✨</span>
                        </div>
                        <h4 className="text-body-large font-semibold text-deep-gray">
                          New to Giọt Máu Vàng?
                        </h4>
                        <p className="text-body text-gentle-gray">
                          Create your account to join our community of life-savers and track your impact.
                        </p>
                        <Button
                          size="lg"
                          onClick={handleCreateAccount}
                          className="w-full bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
                        >
                          Create Account
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Benefits Section */}
                <div className="mt-8 p-4 bg-harmony-green/5 rounded-md-custom">
                  <h4 className="text-body-large font-semibold text-deep-gray mb-3">
                    Why create an account?
                  </h4>
                  <ul className="space-y-2 text-body text-gentle-gray">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-harmony-green rounded-full mr-3"></span>
                      Track your donation history and impact
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-harmony-green rounded-full mr-3"></span>
                      Receive personalized event recommendations
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-harmony-green rounded-full mr-3"></span>
                      Get reminders for eligible donation dates
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-harmony-green rounded-full mr-3"></span>
                      Access exclusive donor community features
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Navigation & Action Buttons Section */}
        <div className="mt-xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <Button
            variant="outline"
            onClick={handleBack}
            className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom w-full sm:w-auto"
          >
            ← Back to Events
          </Button>
          
          <div className="text-caption text-gentle-gray text-center">
            Need help? <a href="#contact-info" className="text-supportive-blue hover:underline">Contact us</a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
