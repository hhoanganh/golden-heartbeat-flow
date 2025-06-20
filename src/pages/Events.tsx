
// src/pages/Events.tsx
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventFilters from '@/components/EventFilters';
import EventCard from '@/components/EventCard';
import { Button } from '@/components/ui/button';
import { allEvents } from '@/data/eventsData'; // Import allEvents from the new central file

const Events = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // Initialize with allEvents, and EventFilters will update this based on filters
  const [filteredEvents, setFilteredEvents] = useState(allEvents); 

  const eventsPerPage = 6;
  // Use filteredEvents.length for totalPages calculation
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage); 
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = filteredEvents.slice(startIndex, startIndex + eventsPerPage);

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
          {/* Pass allEvents to EventFilters, it will handle filtering and call setFilteredEvents */}
          <EventFilters events={allEvents} onFilterChange={setFilteredEvents} /> 
          
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

        {/* Event Listings */}
        <section>
          <div className="flex items-center justify-between mb-l">
            <h2 className="text-heading-2 text-deep-gray font-semibold">
              Upcoming Events
            </h2>
            <div className="text-body text-gentle-gray">
              Showing {startIndex + 1}-{Math.min(startIndex + eventsPerPage, filteredEvents.length)} of {filteredEvents.length} events
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
