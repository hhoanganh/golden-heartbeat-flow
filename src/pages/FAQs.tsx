
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const FAQs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { value: 'all', label: 'All Categories' },
    { value: 'donation', label: 'Blood Donation Process' },
    { value: 'eligibility', label: 'Eligibility Requirements' },
    { value: 'health', label: 'Health & Safety' },
    { value: 'events', label: 'Events & Appointments' },
    { value: 'general', label: 'General Information' }
  ];

  const faqData = [
    {
      category: 'donation',
      question: 'How long does the blood donation process take?',
      answer: 'The entire blood donation process typically takes 45-60 minutes. The actual blood collection takes only 8-10 minutes, while the rest of the time is spent on registration, health screening, and post-donation refreshments.'
    },
    {
      category: 'eligibility',
      question: 'What are the basic requirements to donate blood?',
      answer: 'To donate blood, you must be 18-65 years old, weigh at least 50kg, be in good health, and have no recent illnesses. You should not have donated blood in the last 3 months and must bring a valid ID.'
    },
    {
      category: 'health',
      question: 'Is blood donation safe?',
      answer: 'Yes, blood donation is completely safe. We use sterile, single-use equipment for each donor. All needles and blood bags are disposed of after one use. Our medical staff follows strict safety protocols to ensure your well-being.'
    },
    {
      category: 'donation',
      question: 'What should I do before donating blood?',
      answer: 'Before donating, eat a healthy meal, drink plenty of water, get adequate sleep, and avoid alcohol for 24 hours. Bring a valid ID and wear comfortable clothing with sleeves that can be rolled up easily.'
    },
    {
      category: 'eligibility',
      question: 'Can I donate if I have a tattoo or piercing?',
      answer: 'You can donate blood if your tattoo or piercing is more than 6 months old and was done at a licensed, professional establishment. Recent tattoos or piercings require a waiting period to ensure safety.'
    },
    {
      category: 'health',
      question: 'What happens to my blood after donation?',
      answer: 'Your donated blood undergoes rigorous testing for infectious diseases and blood typing. It is then separated into components (red cells, plasma, platelets) and stored under controlled conditions until needed by patients.'
    },
    {
      category: 'events',
      question: 'How do I register for a blood donation event?',
      answer: 'You can register for events through our website by clicking "Find Events" and selecting your preferred location and time. You can also call our hotline at +84 28 1234 5678 or visit any donation center directly.'
    },
    {
      category: 'general',
      question: 'How often can I donate blood?',
      answer: 'You can donate whole blood every 3 months (12 weeks). For platelet donations, you can donate every 2 weeks, up to 24 times per year. Our system tracks your donation history to ensure safe intervals.'
    },
    {
      category: 'health',
      question: 'Are there any side effects after donating blood?',
      answer: 'Most people feel fine after donating. Some may experience mild dizziness or fatigue, which is normal. We provide refreshments and monitor all donors. Serious side effects are extremely rare.'
    },
    {
      category: 'eligibility',
      question: 'Can I donate if I am taking medication?',
      answer: 'It depends on the medication. Many common medications do not disqualify you from donating. However, some medications may require a waiting period. Please consult with our medical staff about your specific medications.'
    },
    {
      category: 'general',
      question: 'What blood types are most needed?',
      answer: 'O-negative blood is the universal donor type and is always in high demand. However, all blood types are needed. Our blood demand snapshot shows current needs across Ho Chi Minh City hospitals.'
    },
    {
      category: 'events',
      question: 'What if I need to cancel my appointment?',
      answer: 'You can cancel or reschedule your appointment by calling our hotline at +84 28 1234 5678 or visiting our website. We appreciate at least 24 hours notice when possible to help us manage our schedule efficiently.'
    }
  ];

  const filteredFAQs = faqData.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact-info');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Page Title Section */}
      <section className="bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5 py-xl">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-display font-bold text-deep-gray mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
              Find answers to common questions about blood donation, eligibility requirements, 
              and our services. Can't find what you're looking for? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area Container */}
      <main className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-xl">
        
        {/* Search/Filter Bar Container */}
        <div className="mb-xl">
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {faqCategories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* FAQ Content Section Container */}
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.length > 0 ? (
            <div className="mb-xl">
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border border-warm-gray rounded-md-custom px-6 py-2 bg-white shadow-sm hover:shadow-md-custom transition-shadow duration-200"
                  >
                    <AccordionTrigger className="text-left text-heading-3 text-deep-gray font-medium hover:text-supportive-blue transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-body text-gentle-gray leading-relaxed pt-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ) : (
            <div className="text-center py-xl">
              <p className="text-body text-gentle-gray mb-4">
                No FAQs found matching your search criteria.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="text-supportive-blue border-supportive-blue hover:bg-supportive-blue hover:text-white"
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Still Have Questions? / Contact Us Section */}
          <div className="text-center bg-warm-gray rounded-md-custom p-8">
            <h3 className="text-heading-2 font-semibold text-deep-gray mb-4">
              Still Have Questions?
            </h3>
            <p className="text-body text-gentle-gray mb-6 max-w-2xl mx-auto">
              Our dedicated support team is here to help you with any questions or concerns. 
              Don't hesitate to reach out – we're committed to making your blood donation experience 
              as smooth and comfortable as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToContact}
                className="bg-compassion-red text-white hover:bg-compassion-red/90 hover:scale-105 transition-all duration-300 px-8 py-3"
              >
                Contact Us
              </Button>
              <div className="text-body text-gentle-gray">
                or call <span className="font-medium text-deep-gray">+84 28 1234 5678</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQs;
