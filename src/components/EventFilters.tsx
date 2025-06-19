
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface EventFiltersProps {
  events: any[];
  onFilterChange: (filteredEvents: any[]) => void;
}

const EventFilters = ({ events, onFilterChange }: EventFiltersProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const districts = [
    'District 1', 'District 2', 'District 3', 'District 4', 'District 5',
    'District 7', 'Binh Thanh District', 'Thu Duc City'
  ];

  const eventTypes = [
    { value: 'drive', label: 'Blood Drive' },
    { value: 'campaign', label: 'Campaign' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'health-fair', label: 'Health Fair' },
    { value: 'emergency', label: 'Emergency Drive' }
  ];

  const dateFilters = [
    { value: '', label: 'All Dates' },
    { value: 'today', label: 'Today' },
    { value: 'this-week', label: 'This Week' },
    { value: 'this-month', label: 'This Month' },
    { value: 'next-month', label: 'Next Month' }
  ];

  useEffect(() => {
    let filtered = events;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(event =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by district
    if (selectedDistrict) {
      filtered = filtered.filter(event =>
        event.address.includes(selectedDistrict)
      );
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(event => event.type === selectedType);
    }

    onFilterChange(filtered);
  }, [searchTerm, selectedDistrict, selectedType, selectedDate, events, onFilterChange]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedDistrict('');
    setSelectedType('');
    setSelectedDate('');
  };

  return (
    <Card className="bg-white shadow-md-custom rounded-md-custom">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Search Input */}
          <div>
            <Label htmlFor="search" className="text-deep-gray font-medium mb-2 block">
              Search Events
            </Label>
            <Input
              id="search"
              type="text"
              placeholder="Search by name, location, or description..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-md-custom border-warm-gray/50 focus:border-supportive-blue"
            />
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* District Filter */}
            <div>
              <Label htmlFor="district" className="text-deep-gray font-medium mb-2 block">
                District
              </Label>
              <select
                id="district"
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className="w-full px-3 py-2 border border-warm-gray/50 rounded-md-custom focus:border-supportive-blue focus:outline-none text-body"
              >
                <option value="">All Districts</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>

            {/* Event Type Filter */}
            <div>
              <Label htmlFor="event-type" className="text-deep-gray font-medium mb-2 block">
                Event Type
              </Label>
              <select
                id="event-type"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-3 py-2 border border-warm-gray/50 rounded-md-custom focus:border-supportive-blue focus:outline-none text-body"
              >
                <option value="">All Types</option>
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <Label htmlFor="date-filter" className="text-deep-gray font-medium mb-2 block">
                When
              </Label>
              <select
                id="date-filter"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-3 py-2 border border-warm-gray/50 rounded-md-custom focus:border-supportive-blue focus:outline-none text-body"
              >
                {dateFilters.map((filter) => (
                  <option key={filter.value} value={filter.value}>
                    {filter.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="flex justify-end">
            <Button
              variant="outline"
              onClick={clearFilters}
              className="border-gentle-gray text-gentle-gray hover:bg-gentle-gray hover:text-white"
            >
              Clear All Filters
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventFilters;
