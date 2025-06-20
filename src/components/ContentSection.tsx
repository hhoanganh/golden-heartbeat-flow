import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { allEvents } from '@/data/eventsData'; // Import centralized events data
import './ContentSectionGrid.css';

const ContentSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Local Hospital Reports 40% Increase in Emergency Blood Needs",
      snippet: "District 1 General Hospital sees unprecedented demand as community responds with overwhelming support...",
      image: "https://images.unsplash.com/photo-1686797366685-6420f4bd9c2f?q=80&w=1170&auto=format&fit=crop",
      type: "news"
    },
    {
      id: 2,
      title: "Community Blood Drive Saves 150 Lives This Month",
      snippet: "Thanks to generous donors across Ho Chi Minh City, our latest campaign exceeded all expectations...",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1583&auto=format&fit=crop",
      type: "impact"
    }
  ];

  // Get the two latest events, keeping the full event object
  const latestEvents = [...allEvents]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  const testimonials = [
    {
      id: 1,
      quote: "Donating blood through Giọt Máu Vàng wasn't just easy - it felt like joining a family dedicated to saving lives.",
      author: "Minh Nguyen",
      role: "Regular Donor",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      quote: "When my daughter needed emergency surgery, the blood was available immediately. I'll never stop being grateful to every donor.",
      author: "Linh Tran",
      role: "Grateful Parent",
      avatar: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0"
    },
    {
      id: 3,
      quote: "The process was seamless and the staff were incredibly professional. It felt great to contribute.",
      author: "An Pham",
      role: "First-time Donor",
      avatar: "https://images.unsplash.com/photo-1531123414780-f74242c2b052?q=80&w=100&h=100&auto=format&fit=crop"
    },
    {
      id: 4,
      quote: "A single donation can save up to three lives. It's a simple act with a profound impact. I encourage everyone to participate.",
      author: "Dr. Hoang",
      role: "Medical Advisor",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=100&h=100&auto=format&fit=crop"
    }
  ];

  return (
    <section className="py-xl bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
        <div className="text-center mb-xl">
          <h2 className="text-heading-2 text-deep-gray font-semibold mb-4">
            Where Every Drop Makes a Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-compassion-red to-supportive-blue mx-auto rounded-full"></div>
        </div>

        <div className="content-section-3col">
          {/* News Column */}
          <div className="content-section-col">
            <div className="content-section-card-group">
              {newsArticles.map((article) => (
                <div className="content-section-card" key={article.id}>
                  <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                    <div className="p-6">
                      <div className="relative overflow-hidden mb-4">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-compassion-red text-white px-3 py-1 rounded-full text-caption font-medium">
                            {article.type === 'news' ? 'News' : 'Impact Story'}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-heading-3 text-deep-gray font-medium mb-3 line-clamp-2">
                        {article.title}
                      </h3>
                      <p className="text-body text-gentle-gray mb-4 line-clamp-3">
                        {article.snippet}
                      </p>
                      <Button
                        variant="ghost"
                        className="text-compassion-red hover:text-compassion-red/80 p-0 h-auto font-medium text-body group mt-auto self-start"
                      >
                        Read More
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom px-6"
            >
              Dive Deeper into News
            </Button>
          </div>

          {/* Events Column */}
          <div className="content-section-col">
            <div className="content-section-card-group">
              {latestEvents.map((event) => {
                // Add the progress calculation logic here
                const availableSpots = event.capacity - event.registered;
                const isAlmostFull = availableSpots <= event.capacity * 0.1 && availableSpots > 0;
                const isFull = event.registered >= event.capacity;

                return (
                  <div className="content-section-card" key={event.id}>
                    <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group flex flex-col">
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="relative overflow-hidden mb-4">
                          <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-48 object-cover rounded-md group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-4 right-4">
                            <div className="bg-supportive-blue text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center">
                              <div className="text-caption font-bold">{event.date.split(',')[0]}</div>
                              <div className="text-micro">{event.date.split(',')[1]?.trim()}</div>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-heading-3 text-deep-gray font-medium mb-2">
                          {event.title}
                        </h3>
                        <div className="space-y-1 mb-4">
                          <p className="text-body text-gentle-gray">📍 {event.location}</p>
                          <p className="text-body text-gentle-gray">🕐 {event.time}</p>
                        </div>

                        {/* Capacity Info - Added from EventCard logic */}
                        <div className="mb-4 mt-auto">
                          <div className="flex items-center justify-between text-caption text-gentle-gray mb-1">
                            <span>{isFull ? 'Registration Full' : 'Registration Progress'}</span>
                            <span>{event.registered}/{event.capacity}</span>
                          </div>
                          <div className="w-full bg-warm-gray rounded-full h-2">
                            <div
                              className={`h-2 rounded-full transition-all duration-300 ${isFull ? 'bg-error-red' : (isAlmostFull ? 'bg-warning-yellow' : 'bg-harmony-green')
                                }`}
                              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                            ></div>
                          </div>
                          {!isFull && isAlmostFull && (
                            <p className="text-caption text-warning-yellow mt-1">
                              Only {availableSpots} spots remaining!
                            </p>
                          )}
                          {isFull && (
                            <p className="text-caption text-error-red mt-1">
                              This event is fully booked.
                            </p>
                          )}
                        </div>

                        <Link to={`/book/${event.id}`}>
                          <Button
                            size="sm"
                            className="bg-supportive-blue hover:bg-supportive-blue/90 text-white rounded-md-custom w-full"
                            disabled={isFull} // Disable button if event is full
                          >
                            Register Now
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <Link to="/events">
              <Button
                variant="outline"
                className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom px-6 w-full"
              >
                Explore All Events
              </Button>
            </Link>
          </div>

          {/* Testimonials Column */}
          <div className="content-section-col">
            <div className="content-section-card-group">
              {testimonials.map((testimonial) => (
                <div className="content-section-card" key={testimonial.id}>
                  <div className="thought-cloud">
                    <p className="text-body-large text-deep-gray italic mb-4 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <div className="text-body text-deep-gray font-medium">
                          {testimonial.author}
                        </div>
                        <div className="text-caption text-gentle-gray">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="border-compassion-red text-compassion-red hover:bg-compassion-red hover:text-white rounded-md-custom px-6 mt-auto"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;