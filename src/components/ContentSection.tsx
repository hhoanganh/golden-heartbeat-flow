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

        {/* Responsive Grid */}
        <div className="content-section-grid">
          {/* News Articles */}
          {newsArticles.map((article) => (
            <div key={article.id} className="content-section-card">
              <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-compassion-red text-white px-3 py-1 rounded-full text-caption font-medium">
                      {article.type === 'news' ? 'News' : 'Impact Story'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-body text-gentle-gray mb-4 line-clamp-3">
                    {article.snippet}
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
          ))}

          {/* Events */}
          {events.map((event) => (
            <div key={event.id} className="content-section-card">
              <div className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-supportive-blue text-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-center">
                      <div className="text-caption font-bold">{event.date.split(' ')[1]}</div>
                      <div className="text-micro">{event.date.split(' ')[0]}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-2">
                    {event.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    <p className="text-body text-gentle-gray">📍 {event.location}</p>
                    <p className="text-body text-gentle-gray">🕐 {event.time}</p>
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
          ))}

          {/* Testimonials */}
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="content-section-card">
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

        {/* Section CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mt-xl">
          <Button 
            variant="outline" 
            className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom px-6"
          >
            Dive Deeper into News
          </Button>
          <Button 
            variant="outline" 
            className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom px-6"
          >
            Explore All Events
          </Button>
          <Button 
            variant="outline" 
            className="border-compassion-red text-compassion-red hover:bg-compassion-red hover:text-white rounded-md-custom px-6"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
