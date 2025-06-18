import React from 'react';
import { Button } from '@/components/ui/button';
import './ContentSectionGrid.css';

const ContentSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Local Hospital Reports 40% Increase in Emergency Blood Needs",
      snippet: "District 1 General Hospital sees unprecedented demand as community responds with overwhelming support...",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=400&h=250&auto=format&fit=crop",
      type: "news"
    },
    {
      id: 2,
      title: "Community Blood Drive Saves 150 Lives This Month",
      snippet: "Thanks to generous donors across Ho Chi Minh City, our latest campaign exceeded all expectations...",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=400&h=300&auto=format&fit=crop",
      type: "impact"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Weekend Blood Drive - District 3",
      date: "Dec 28",
      location: "Tao Dan Park",
      time: "8:00 AM - 5:00 PM",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=400&h=250&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "New Year Hope Campaign",
      date: "Jan 2",
      location: "Nguyen Hue Walking Street",
      time: "9:00 AM - 6:00 PM",
      image: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=400&h=200&auto=format&fit=crop"
    }
  ];

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
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b830?q=80&w=100&h=100&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-xl bg-white">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-xl">
          <h2 className="text-heading-2 text-deep-gray font-semibold mb-4">
            Where Every Drop Makes a Story
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-compassion-red to-supportive-blue mx-auto rounded-full"></div>
        </div>

        {/* 3 Columns Layout */}
        <div className="content-section-3col">
          {/* News Column */}
          <div className="content-section-col">
            <div className="content-section-card">
              {/* ...existing code for first news article... */}
              {/* Use newsArticles[0] */}
              <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={newsArticles[0].image} 
                    alt={newsArticles[0].title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-compassion-red text-white px-3 py-1 rounded-full text-caption font-medium">
                      {newsArticles[0].type === 'news' ? 'News' : 'Impact Story'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-3 line-clamp-2">
                    {newsArticles[0].title}
                  </h3>
                  <p className="text-body text-gentle-gray mb-4 line-clamp-3">
                    {newsArticles[0].snippet}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-compassion-red hover:text-compassion-red/80 p-0 h-auto font-medium text-body group"
                  >
                    Read More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="content-section-card">
              {/* ...existing code for second news article... */}
              {/* Use newsArticles[1] */}
              <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={newsArticles[1].image} 
                    alt={newsArticles[1].title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-compassion-red text-white px-3 py-1 rounded-full text-caption font-medium">
                      {newsArticles[1].type === 'news' ? 'News' : 'Impact Story'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-3 line-clamp-2">
                    {newsArticles[1].title}
                  </h3>
                  <p className="text-body text-gentle-gray mb-4 line-clamp-3">
                    {newsArticles[1].snippet}
                  </p>
                  <Button 
                    variant="ghost" 
                    className="text-compassion-red hover:text-compassion-red/80 p-0 h-auto font-medium text-body group"
                  >
                    Read More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Button>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom px-6 mt-auto"
            >
              Dive Deeper into News
            </Button>
          </div>

          {/* Events Column */}
          <div className="content-section-col">
            <div className="content-section-card">
              {/* ...existing code for first event... */}
              {/* Use events[0] */}
              <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={events[0].image} 
                    alt={events[0].title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-supportive-blue text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center">
                      <div className="text-caption font-bold">{events[0].date.split(' ')[1]}</div>
                      <div className="text-micro">{events[0].date.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-2">
                    {events[0].title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-body text-gentle-gray">📍 {events[0].location}</p>
                    <p className="text-body text-gentle-gray">🕐 {events[0].time}</p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-supportive-blue hover:bg-supportive-blue/90 text-white rounded-md-custom w-full"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="content-section-card">
              {/* ...existing code for second event... */}
              {/* Use events[1] */}
              <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={events[1].image} 
                    alt={events[1].title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-supportive-blue text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center">
                      <div className="text-caption font-bold">{events[1].date.split(' ')[1]}</div>
                      <div className="text-micro">{events[1].date.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-2">
                    {events[1].title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-body text-gentle-gray">📍 {events[1].location}</p>
                    <p className="text-body text-gentle-gray">🕐 {events[1].time}</p>
                  </div>
                  <Button 
                    size="sm"
                    className="bg-supportive-blue hover:bg-supportive-blue/90 text-white rounded-md-custom w-full"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
            <Button 
              variant="outline" 
              className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom px-6 mt-auto"
            >
              Explore All Events
            </Button>
          </div>

          {/* Testimonials Column */}
          <div className="content-section-col">
            <div className="content-section-card">
              {/* ...existing code for first testimonial... */}
              {/* Use testimonials[0] */}
              <div className="thought-cloud">
                <p className="text-body-large text-deep-gray italic mb-4 leading-relaxed">
                  "{testimonials[0].quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonials[0].avatar} 
                    alt={testimonials[0].author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-body text-deep-gray font-medium">
                      {testimonials[0].author}
                    </div>
                    <div className="text-caption text-gentle-gray">
                      {testimonials[0].role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-section-card">
              {/* ...existing code for second testimonial... */}
              {/* Use testimonials[1] */}
              <div className="thought-cloud">
                <p className="text-body-large text-deep-gray italic mb-4 leading-relaxed">
                  "{testimonials[1].quote}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonials[1].avatar} 
                    alt={testimonials[1].author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="text-body text-deep-gray font-medium">
                      {testimonials[1].author}
                    </div>
                    <div className="text-caption text-gentle-gray">
                      {testimonials[1].role}
                    </div>
                  </div>
                </div>
              </div>
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
