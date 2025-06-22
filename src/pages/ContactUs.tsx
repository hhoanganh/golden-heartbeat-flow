
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ChatMessage {
  id: number;
  type: 'bot' | 'user';
  text: string;
  buttons?: string[];
}

const ContactUs = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      type: 'bot',
      text: "Hi! I'm the Giọt Máu Vàng virtual assistant. Please choose a topic below so I can help you.",
      buttons: ['Eligibility & Process', 'My Appointment Help', 'Technical Issues']
    }
  ]);

  const [currentStep, setCurrentStep] = useState('initial');

  const handleButtonClick = (buttonText: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      type: 'user',
      text: buttonText
    };

    let botResponse: ChatMessage;

    // Handle different conversation flows
    if (buttonText === 'Eligibility & Process') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "I can help you understand the donation process and eligibility requirements. What would you like to know?",
        buttons: ['Am I eligible to donate?', 'What is the donation process?', 'How often can I donate?', 'Other questions']
      };
      setCurrentStep('eligibility');
    } else if (buttonText === 'My Appointment Help') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Of course. What do you need help with regarding your appointment?",
        buttons: ['How do I reschedule?', 'Where is my QR code?', 'Cancel my appointment', 'Other']
      };
      setCurrentStep('appointment');
    } else if (buttonText === 'Technical Issues') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "I'm here to help with any technical problems. What issue are you experiencing?",
        buttons: ['Login problems', 'Website not loading', 'QR code not working', 'Other technical issue']
      };
      setCurrentStep('technical');
    } else if (buttonText === 'Am I eligible to donate?') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Great question! You can donate blood if you're 18-60 years old, weigh at least 45kg, and are in good health. For a complete eligibility check, I recommend taking our online quiz.",
        buttons: ['Take Eligibility Quiz', 'Need more details', 'Talk to human support']
      };
    } else if (buttonText === 'What is the donation process?') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "The donation process has 6 simple steps, from online registration to receiving your certificate. Would you like to see the detailed step-by-step guide?",
        buttons: ['View donation process', 'Book an appointment', 'Talk to human support']
      };
    } else if (buttonText === 'Where is my QR code?') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "You can find your QR code in the 'My QR Code' section of your donor dashboard after logging in. This code is used for quick check-in at donation centers.",
        buttons: ['Go to Dashboard', 'Login Help', 'Still need help']
      };
    } else if (buttonText === 'How do I reschedule?') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "You can reschedule your appointment through your donor dashboard. Go to 'My Appointments' and select 'Reschedule' next to your booking.",
        buttons: ['Go to Dashboard', 'Call for help', 'Cancel instead']
      };
    } else if (buttonText.includes('Other') || buttonText.includes('Still need help') || buttonText.includes('Talk to human support')) {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "It looks like you need to speak with a member of our team. You can call our hotline for immediate help or send us an email. Our support team is ready to assist you!",
        buttons: ['Call Hotline', 'Send Email']
      };
      setCurrentStep('escalation');
    } else if (buttonText === 'Take Eligibility Quiz') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Perfect! I'll redirect you to our eligibility checker where you can answer a few quick questions to determine if you're ready to donate.",
        buttons: ['Go to Eligibility Check', 'Talk to human support']
      };
    } else if (buttonText === 'View donation process') {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Excellent! I'll take you to our detailed donation process guide that walks you through all 6 steps of your life-saving journey.",
        buttons: ['View Process Guide', 'Book appointment now']
      };
    } else {
      botResponse = {
        id: messages.length + 2,
        type: 'bot',
        text: "Thank you for your question. For more specific assistance, please contact our support team directly.",
        buttons: ['Call Hotline', 'Send Email']
      };
    }

    setMessages([...messages, userMessage, botResponse]);
  };

  const scrollToContact = (type: string) => {
    const element = document.getElementById(type);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Container */}
      <section className="py-l bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 text-center">
          <h1 className="text-display font-bold text-deep-gray mb-4">
            How Can We Help?
          </h1>
          <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
            Our virtual assistant is ready to help you, or you can connect with our human support team.          </p>
        </div>
      </section>

      {/* Main Content Container */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column - Chatbot Container */}
            <div className="lg:col-span-2">
              <Card className="h-[600px] flex flex-col">
                <CardHeader className="bg-warm-gray/40 rounded-t-lg">
                  <CardTitle className="text-xl text-deep-gray flex items-center">
                    <div className="w-3 h-3 bg-success-green rounded-full mr-2"></div>
                    Giọt Máu Vàng Assistant
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 p-0 overflow-hidden">
                  <div className="h-full flex flex-col">
                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4">
                      {messages.map((message) => (
                        <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] p-4 rounded-lg ${
                            message.type === 'user' 
                              ? 'bg-compassion-red text-white rounded-br-none' 
                              : 'bg-warm-gray text-deep-gray rounded-bl-none'
                          }`}>
                            <p className="text-sm leading-relaxed">{message.text}</p>
                            {message.buttons && (
                              <div className="mt-3 space-y-2">
                                {message.buttons.map((button, index) => (
                                  <Button
                                    key={index}
                                    variant="outline"
                                    size="sm"
                                    className="block w-full text-left justify-start h-auto py-2 px-3 text-xs"
                                    onClick={() => {
                                      if (button === 'Call Hotline') {
                                        scrollToContact('phone');
                                      } else if (button === 'Send Email') {
                                        scrollToContact('email');
                                      } else {
                                        handleButtonClick(button);
                                      }
                                    }}
                                  >
                                    {button}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Direct Support & Location */}
            <div className="space-y-6">
              
              {/* Contact Channel Card 1: Call */}
              <Card id="phone" className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-deep-gray flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-compassion-red" />
                    Call Our Hotline
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gentle-gray">
                    Speak directly with our support team for immediate assistance.
                  </p>
                  <div className="text-lg font-semibold text-deep-gray">
                    1900 0115
                  </div>
                  <p className="text-xs text-gentle-gray">
                    Available: Mon-Fri 8:00-17:00<br />
                    Saturday 8:00-12:00
                  </p>
                  <Button className="w-full bg-compassion-red hover:bg-compassion-red/90">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Channel Card 2: Email */}
              <Card id="email" className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-deep-gray flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-supportive-blue" />
                    Send Us an Email
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gentle-gray">
                    Send us a detailed message and we'll respond within 24 hours.
                  </p>
                  <div className="text-sm font-medium text-deep-gray">
                    support@giotmauvang.org.vn
                  </div>
                  <Button variant="outline" className="w-full border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              {/* Our Office Card */}
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-deep-gray flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-success-green" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-gentle-gray">
                    <div className="font-medium text-deep-gray mb-1">
                      Giọt Máu Vàng Head Office
                    </div>
                    <div>
                      123 Nguyen Hue Boulevard<br />
                      District 1, Ho Chi Minh City<br />
                      Vietnam 70000
                    </div>
                  </div>
                  <div className="w-full h-32 bg-warm-gray rounded-md flex items-center justify-center">
                    <div className="text-center text-gentle-gray">
                      <MapPin className="w-8 h-8 mx-auto mb-2 text-success-green" />
                      <div className="text-sm">Interactive Map</div>
                      <div className="text-xs">Click to view location</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/centers">
                      Find All Centers
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
