
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface EventCardProps {
  event: {
    id: number;
    title: string;
    date: string;
    time: string;
    location: string;
    address: string;
    description: string;
    image: string;
    urgentNeeds: string[];
    capacity: number;
    registered: number;
    type: string;
  };
}

const EventCard = ({ event }: EventCardProps) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'emergency':
        return 'bg-error-red text-white';
      case 'corporate':
        return 'bg-supportive-blue text-white';
      case 'health-fair':
        return 'bg-harmony-green text-white';
      case 'campaign':
        return 'bg-kindness-orange text-white';
      default:
        return 'bg-compassion-red text-white';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'drive':
        return 'Blood Drive';
      case 'campaign':
        return 'Campaign';
      case 'corporate':
        return 'Corporate Event';
      case 'health-fair':
        return 'Health Fair';
      case 'emergency':
        return 'Emergency Drive';
      default:
        return 'Event';
    }
  };

  const availableSpots = event.capacity - event.registered;
  const isAlmostFull = availableSpots <= event.capacity * 0.1;

  return (
    <Card className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Event Type Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-caption font-medium ${getTypeColor(event.type)}`}>
            {getTypeLabel(event.type)}
          </span>
        </div>

        {/* Date Badge */}
        <div className="absolute top-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-2 text-center">
            <div className="text-caption font-bold text-deep-gray">
              {event.date.split(',')[0]}
            </div>
            <div className="text-micro text-gentle-gray">
              {event.date.split(',')[1]?.trim()}
            </div>
          </div>
        </div>

        {/* Urgent Needs Banner */}
        {event.urgentNeeds.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-error-red to-error-red/80 text-white p-2">
            <p className="text-caption font-medium">
              Urgent: {event.urgentNeeds.join(', ')} needed
            </p>
          </div>
        )}
      </div>

      <CardContent className="p-6 flex-grow flex flex-col">
        {/* Event Title */}
        <h3 className="text-heading-3 text-deep-gray font-medium mb-2 line-clamp-2">
          {event.title}
        </h3>

        {/* Event Details */}
        <div className="space-y-2 mb-4 text-body text-gentle-gray">
          <div className="flex items-center">
            <span className="mr-2">📍</span>
            <span className="line-clamp-1">{event.location}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🕐</span>
            <span>{event.time}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-body text-gentle-gray mb-4 line-clamp-3 flex-grow">
          {event.description}
        </p>

        {/* Capacity Info */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-caption text-gentle-gray mb-1">
            <span>Registration Progress</span>
            <span>{event.registered}/{event.capacity}</span>
          </div>
          <div className="w-full bg-warm-gray rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all duration-300 ${
                isAlmostFull ? 'bg-warning-yellow' : 'bg-harmony-green'
              }`}
              style={{ width: `${(event.registered / event.capacity) * 100}%` }}
            ></div>
          </div>
          {isAlmostFull && (
            <p className="text-caption text-warning-yellow mt-1">
              Only {availableSpots} spots remaining!
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 mt-auto">
          <Button
            size="lg"
            className="w-full bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
          >
            Register Now
          </Button>
          <Button
            variant="outline"
            className="w-full border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom"
          >
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
