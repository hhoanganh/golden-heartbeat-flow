import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventFilters from '@/components/EventFilters';
import EventCard from '@/components/EventCard';
// Removed BloodDemandSnapshot import
import { Button } from '@/components/ui/button';

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState([]);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "Weekend Blood Drive - District 3",
      date: "Dec 28, 2024",
      time: "8:00 AM - 5:00 PM",
      location: "Tao Dan Park, District 3",
      address: "123 Nguyen Du Street, District 3, Ho Chi Minh City",
      description: "Join us for our weekend blood drive at beautiful Tao Dan Park. Professional medical staff will be on-site to ensure a safe and comfortable donation experience.",
      image: "https://images.unsplash.com/photo-1652149590094-98093f08509f?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["O-", "AB+"],
      capacity: 150,
      registered: 150, // Changed to 150 to demonstrate full registration
      type: "drive"
    },
    {
      id: 2,
      title: "New Year Hope Campaign",
      date: "Jan 2, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Nguyen Hue Walking Street",
      address: "Nguyen Hue Walking Street, District 1, Ho Chi Minh City",
      description: "Start the new year by giving the gift of life. Our New Year Hope Campaign aims to collect 200 units to help patients in need during the holiday season.",
      image: "https://images.unsplash.com/photo-1642697552227-ca21f326fe41?q=80&w=1562&auto=format&fit=crop",
      urgentNeeds: ["A+", "O+"],
      capacity: 200,
      registered: 156,
      type: "campaign"
    },
    {
      id: 3,
      title: "University Blood Drive - HCMUS",
      date: "Jan 5, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "Ho Chi Minh City University of Science",
      address: "227 Nguyen Van Cu Street, District 5, Ho Chi Minh City",
      description: "Student-organized blood drive focusing on first-time donors. Educational sessions about blood donation will be available throughout the day.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["B+", "AB-"],
      capacity: 100,
      registered: 45,
      type: "drive"
    },
    {
      id: 4,
      title: "Corporate Partnership Drive",
      date: "Jan 8, 2025",
      time: "8:00 AM - 3:00 PM",
      location: "Landmark 81 Tower",
      address: "720A Dien Bien Phu Street, Binh Thanh District, Ho Chi Minh City",
      description: "Special corporate event partnering with major companies in the financial district. Easy access and convenient scheduling for busy professionals.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["O-", "A-"],
      capacity: 120,
      registered: 89,
      type: "corporate"
    },
    {
      id: 5,
      title: "Community Health Fair",
      date: "Jan 12, 2025",
      time: "7:00 AM - 6:00 PM",
      location: "District 7 Cultural Center",
      address: "456 Nguyen Thi Thap Street, District 7, Ho Chi Minh City",
      description: "Combined health fair and blood drive offering free health screenings, wellness education, and blood donation opportunities for the whole family.",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["B-", "AB+"],
      capacity: 180,
      registered: 134,
      type: "health-fair"
    },
    {
      id: 6,
      title: "Emergency Response Drive",
      date: "Jan 15, 2025",
      time: "6:00 AM - 8:00 PM",
      location: "Cho Ray Hospital",
      address: "201B Nguyen Chi Thanh Street, District 5, Ho Chi Minh City",
      description: "Urgent blood collection drive in response to increased hospital demand. All blood types needed, with special focus on rare types.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1170&auto=format&fit=crop",
      urgentNeeds: ["O-", "AB-", "B-"],
      capacity: 250,
      registered: 198,
      type: "emergency"
    }
  ];

  const eventsPerPage = 6;
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5 py-l">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-display text-deep-gray font-bold mb-4">
              Find Blood Donation Events
            </h1>
            <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
              Discover upcoming blood drives, donation centers, and community events near you. 
              Every donation saves lives and strengthens our community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-xl">
        
        {/* Filters and Map Section */}
        <div className="mb-xl">
          <EventFilters events={events} onFilterChange={setFilteredEvents} />
          
          {/* Interactive Map Placeholder */}
          <div className="mt-l">
            <div className="bg-warm-gray rounded-md-custom h-64 md:h-80 flex items-center justify-center">
              <div className="text-center">
                <div className="text-heading-2 text-gentle-gray mb-2">🗺️</div>
                <p className="text-body text-gentle-gray">Interactive Map</p>
                <p className="text-caption text-gentle-gray">Donation centers and event locations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Removed Blood Demand Snapshot component */}

        {/* Event Listings */}
        <section>
          <div className="flex items-center justify-between mb-l">
            <h2 className="text-heading-2 text-deep-gray font-semibold">
              Upcoming Events
            </h2>
            <div className="text-body text-gentle-gray">
              Showing {startIndex + 1}-{Math.min(startIndex + eventsPerPage, events.length)} of {events.length} events
            </div>
          </div>

          {/* Event Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l mb-xl">
            {currentEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white"
              >
                Previous
              </Button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    onClick={() => setCurrentPage(page)}
                    className={page === currentPage 
                      ? "bg-compassion-red hover:bg-compassion-red/90 text-white" 
                      : "border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white"
                    }
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white"
              >
                Next
              </Button>
            </div>
          )}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Events;