import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Keep Input import as it might be used elsewhere or future-proof
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

interface EventFiltersProps {
  events: any[];
  onFilterChange: (filteredEvents: any[]) => void;
}

const EventFilters = ({ events, onFilterChange }: EventFiltersProps) => {
  const [selectedCity, setSelectedCity] = useState('Ho Chi Minh City'); // Initialize with the only city
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const cities = ['Ho Chi Minh City']; // Only one city for now

  const districts = [
    'District 1', 'District 2', 'District 3', 'District 4', 'District 5',
    'District 7', 'Binh Thanh District', 'Thu Duc City'
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

    // Filter by City (always Ho Chi Minh City for now, so effectively no filter needed unless events data changes)
    if (selectedCity) {
      // Assuming all events provided are already in Ho Chi Minh City
      // If not, you would filter based on event.city property:
      // filtered = filtered.filter(event => event.city === selectedCity);
    }

    // Filter by district
    if (selectedDistrict) {
      filtered = filtered.filter(event =>
        event.address.includes(selectedDistrict)
      );
    }

    // Filter by date (logic for 'today', 'this-week', etc. would be implemented here)
    if (selectedDate) {
      const today = new Date();
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.date); // Assuming event.date is in a format parseable by Date

        switch (selectedDate) {
          case 'today':
            return eventDate.toDateString() === today.toDateString();
          case 'this-week':
            // Simple week check (Sunday to Saturday)
            const firstDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
            const lastDayOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 6));
            return eventDate >= firstDayOfWeek && eventDate <= lastDayOfWeek;
          case 'this-month':
            return eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
          case 'next-month':
            const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
            const endOfNextMonth = new Date(today.getFullYear(), today.getMonth() + 2, 0);
            return eventDate >= nextMonth && eventDate <= endOfNextMonth;
          default:
            return true; // No date filter applied
        }
      });
    }

    onFilterChange(filtered);
  }, [selectedCity, selectedDistrict, selectedDate, events, onFilterChange]);

  const clearFilters = () => {
    setSelectedDistrict('');
    setSelectedDate('');
    // selectedCity remains 'Ho Chi Minh City' as it's the only option
  };

  return (
    <Card className="bg-white shadow-md-custom rounded-md-custom">
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Filter Controls */}
          {/* Changed grid layout to accommodate the new City filter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* City Filter */}
            <div>
              <Label htmlFor="city-filter" className="text-deep-gray font-medium mb-2 block">
                City
              </Label>
              <select
                id="city-filter"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)} // Although only one option, keep for consistency
                className="w-full px-3 py-2 border border-warm-gray/50 rounded-md-custom focus:border-supportive-blue focus:outline-none text-body"
                disabled // Disable as there's only one option
              >
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

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