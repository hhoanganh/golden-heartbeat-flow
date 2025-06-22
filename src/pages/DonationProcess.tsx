
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, XCircle, CreditCard, Stethoscope, Heart, Gift, FileText, UserCheck } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DonationProcess = () => {
  const preparationItems = [
    { text: "ID Card or Passport (Giấy tờ tùy thân)", checked: true },
    { text: "Eat a healthy meal before donating", checked: true },
    { text: "Get a good night's sleep", checked: true },
    { text: "Drink plenty of water (about 500ml) before you come", checked: true },
    { text: "Avoid alcohol for 24 hours", checked: false, isAvoid: true }
  ];

  const processSteps = [
    {
      number: 1,
      title: "Register Online & Complete Health Form",
      icon: FileText,
      description: "Before you visit, complete your registration and fill out the digital health declaration form through our app. This saves you significant time at the center.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1000&auto=format&fit=crop"
    },
    {
      number: 2,
      title: "Check-in & Preliminary Screening",
      icon: UserCheck,
      description: "At the center, present your QR code and ID to our staff. They will verify your online declaration, print a copy for the medical review, and perform a quick preliminary health check (blood pressure, hemoglobin test).",
      image: "https://plus.unsplash.com/premium_photo-1664475545554-9d9ef5e8fbe7?w=600&auto=format&fit=crop"
    },
    {
      number: 3,
      title: "Medical Consultation & Final Approval",
      icon: Stethoscope,
      description: "You'll meet with a medical doctor who will review your printed declaration and the initial test results. After a brief consultation, the doctor will give the final confirmation in our system for you to proceed.",
      image: "https://plus.unsplash.com/premium_photo-1661770160867-2c3a5092ec3b?q=80&w=1170&auto=format&fit=crop"
    },
    {
      number: 4,
      title: "The Donation",
      icon: Heart,
      description: "This is the core step. The actual donation only takes about 5-10 minutes in a comfortable, sterile environment with our professional team.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1000&auto=format&fit=crop"
    },
    {
      number: 5,
      title: "Rest & Receive Your Benefits",
      icon: Gift,
      description: "After your donation, relax for 10-15 minutes and enjoy refreshments. You will receive your official Certificate of Donation and other thank-you gifts from us.",
      image: "https://plus.unsplash.com/premium_photo-1664476255015-26ac84c3dfbc?q=80&w=1172&auto=format&fit=crop"
    },
    {
      number: 6,
      title: "Your Health Record is Updated",
      icon: CreditCard,
      description: "For our records, your paper health check form is later digitized and confidentially linked to your donation history in your profile.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Container */}
      <section className="py-20 bg-gradient-to-br from-warm-gray/30 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-display text-deep-gray font-bold mb-6">
            The Journey of a Golden Drop
          </h1>
          <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
            Donating blood is a simple, safe, and noble act. Here is a clear overview of the entire process, from start to finish.
          </p>
        </div>
      </section>

      {/* Before You Donate Container */}
      <section className="py-xl bg-warm-gray/40">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-heading-2 text-deep-gray font-semibold text-center mb-l">
            Before You Donate
          </h2>
          
          <div className="grid md:grid-cols-2 gap-l">
            {/* What to Bring Card */}
            <Card className="shadow-md-custom">
              <CardHeader>
                <CardTitle className="text-heading-3 text-supportive-blue flex items-center gap-3">
                  <CreditCard className="w-6 h-6" />
                  What to Bring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success-green" />
                    <span className="text-body text-deep-gray">ID Card or Passport (Giấy tờ tùy thân)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Prepare Card */}
            <Card className="shadow-md-custom">
              <CardHeader>
                <CardTitle className="text-heading-3 text-supportive-blue flex items-center gap-3">
                  <Heart className="w-6 h-6" />
                  How to Prepare
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {preparationItems.slice(1).map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {item.isAvoid ? (
                        <XCircle className="w-5 h-5 text-error-red" />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-success-green" />
                      )}
                      <span className="text-body text-deep-gray">{item.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6-Step Process Container */}
      <section className="py-xl bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-heading-2 text-deep-gray font-semibold text-center mb-xl">
            Your 6-Step Donation Journey
          </h2>
          
          <div className="space-y-xl">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 1;
              
              return (
                <div 
                  key={step.number} 
                  className={`flex flex-col lg:flex-row items-center gap-l ${isEven ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-compassion-red text-white rounded-full flex items-center justify-center font-bold text-heading-3">
                        {step.number}
                      </div>
                      <Icon className="w-8 h-8 text-supportive-blue" />
                    </div>
                    <h3 className="text-heading-3 text-deep-gray font-medium">
                      {step.title}
                    </h3>
                    <p className="text-body text-gentle-gray leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative overflow-hidden rounded-md-custom shadow-md-custom">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Container */}
      <section className="py-xl bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-heading-1 text-deep-gray font-semibold mb-6">
            Ready to be a hero?
          </h2>
          <p className="text-body-large text-gentle-gray mb-8 max-w-2xl mx-auto">
            Join thousands of life-savers in Ho Chi Minh City. Your donation can save up to 3 lives.
          </p>
          <Link to="/events">
            <Button 
              size="lg" 
              className="bg-compassion-red hover:bg-compassion-red/90 text-white px-10 py-4 text-body-large rounded-md-custom shadow-md-custom"
            >
              Find a Donation Event
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DonationProcess;
