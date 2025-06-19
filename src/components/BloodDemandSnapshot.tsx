
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BloodDemandSnapshot = () => {
  const bloodTypes = [
    { type: 'O-', demand: 'Critical', units: 15, color: 'error-red', pulse: true },
    { type: 'AB-', demand: 'Critical', units: 8, color: 'error-red', pulse: true },
    { type: 'A+', demand: 'High', units: 45, color: 'warning-yellow', pulse: false },
    { type: 'O+', demand: 'High', units: 67, color: 'warning-yellow', pulse: false },
    { type: 'B+', demand: 'Moderate', units: 89, color: 'info-blue', pulse: false },
    { type: 'AB+', demand: 'Moderate', units: 34, color: 'info-blue', pulse: false },
    { type: 'A-', demand: 'Low', units: 123, color: 'harmony-green', pulse: false },
    { type: 'B-', demand: 'Low', units: 76, color: 'harmony-green', pulse: false }
  ];

  const getDemandIcon = (demand: string) => {
    switch (demand) {
      case 'Critical':
        return '🚨';
      case 'High':
        return '⚠️';
      case 'Moderate':
        return '📊';
      case 'Low':
        return '✅';
      default:
        return '📊';
    }
  };

  const getCardClassName = (bloodType: any) => {
    let baseClasses = "relative p-4 rounded-md-custom border-2 text-center transition-all duration-300 hover:shadow-md-custom";
    
    if (bloodType.color === 'error-red') {
      baseClasses += " border-error-red bg-error-red/5";
    } else if (bloodType.color === 'warning-yellow') {
      baseClasses += " border-warning-yellow bg-warning-yellow/5";
    } else if (bloodType.color === 'info-blue') {
      baseClasses += " border-info-blue bg-info-blue/5";
    } else if (bloodType.color === 'harmony-green') {
      baseClasses += " border-harmony-green bg-harmony-green/5";
    }
    
    if (bloodType.pulse) {
      baseClasses += " animate-pulse-soft";
    }
    
    return baseClasses;
  };

  const getDemandTextClassName = (color: string) => {
    let baseClasses = "text-caption font-medium";
    
    if (color === 'error-red') {
      baseClasses += " text-error-red";
    } else if (color === 'warning-yellow') {
      baseClasses += " text-warning-yellow";
    } else if (color === 'info-blue') {
      baseClasses += " text-info-blue";
    } else if (color === 'harmony-green') {
      baseClasses += " text-harmony-green";
    }
    
    return baseClasses;
  };

  return (
    <Card className="bg-white shadow-md-custom rounded-md-custom mb-xl">
      <CardHeader className="pb-4">
        <CardTitle className="text-heading-2 text-deep-gray font-semibold flex items-center">
          <span className="mr-3">🩸</span>
          Current Blood Demand
        </CardTitle>
        <p className="text-body text-gentle-gray">
          Real-time blood inventory levels across Ho Chi Minh City hospitals
        </p>
      </CardHeader>
      
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {bloodTypes.map((bloodType) => (
            <div
              key={bloodType.type}
              className={getCardClassName(bloodType)}
            >
              {/* Blood Type */}
              <div className="text-heading-3 font-bold text-deep-gray mb-1">
                {bloodType.type}
              </div>
              
              {/* Demand Level */}
              <div className="flex items-center justify-center mb-2">
                <span className="mr-1">{getDemandIcon(bloodType.demand)}</span>
                <span className={getDemandTextClassName(bloodType.color)}>
                  {bloodType.demand}
                </span>
              </div>
              
              {/* Units Available */}
              <div className="text-body text-gentle-gray">
                <span className="font-medium">{bloodType.units}</span> units
              </div>

              {/* Critical Pulse Effect */}
              {bloodType.pulse && (
                <div className="absolute -inset-1 bg-error-red/20 rounded-md-custom animate-ping"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* Legend */}
        <div className="mt-6 p-4 bg-warm-gray rounded-md-custom">
          <h4 className="text-body font-medium text-deep-gray mb-2">Legend:</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-caption">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-error-red rounded mr-2"></div>
              <span className="text-gentle-gray">Critical (&lt; 20 units)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-warning-yellow rounded mr-2"></div>
              <span className="text-gentle-gray">High (20-50 units)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-info-blue rounded mr-2"></div>
              <span className="text-gentle-gray">Moderate (50-100 units)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-harmony-green rounded mr-2"></div>
              <span className="text-gentle-gray">Low (&gt; 100 units)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodDemandSnapshot;
