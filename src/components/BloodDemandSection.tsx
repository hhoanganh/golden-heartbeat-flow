
import React from 'react';

const BloodDemandSection = () => {
  const bloodTypes = [
    { type: 'O+', demand: 'urgent', status: 'Critical', color: 'error-red' },
    { type: 'A+', demand: 'high', status: 'High', color: 'warning-yellow' },
    { type: 'B+', demand: 'stable', status: 'Stable', color: 'success-green' },
    { type: 'AB+', demand: 'low', status: 'Low', color: 'info-blue' },
    { type: 'O-', demand: 'urgent', status: 'Critical', color: 'error-red' },
    { type: 'A-', demand: 'high', status: 'High', color: 'warning-yellow' },
    { type: 'B-', demand: 'stable', status: 'Stable', color: 'success-green' },
    { type: 'AB-', demand: 'low', status: 'Low', color: 'info-blue' },
  ];

  const getStatusIcon = (demand: string) => {
    switch (demand) {
      case 'urgent':
        return '🚨';
      case 'high':
        return '⚠️';
      case 'stable':
        return '✅';
      case 'low':
        return 'ℹ️';
      default:
        return '📊';
    }
  };

  const getStatusColor = (color: string) => {
    switch (color) {
      case 'error-red':
        return 'text-error-red';
      case 'warning-yellow':
        return 'text-warning-yellow';
      case 'success-green':
        return 'text-success-green';
      case 'info-blue':
        return 'text-info-blue';
      default:
        return 'text-deep-gray';
    }
  };

  return (
    <section className="py-xl bg-warm-gray/30">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
        {/* Section Title */}
        <div className="text-center mb-xl">
          <h2 className="text-heading-2 text-deep-gray font-semibold mb-4">
            City's Pulse: Real-time Blood Needs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-compassion-red to-supportive-blue mx-auto rounded-full"></div>
        </div>

        {/* Blood Type Grid - Organic Cluster */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {bloodTypes.map((blood, index) => (
            <div 
              key={blood.type}
              className={`blood-cell relative ${index % 2 === 0 ? 'lg:mt-4' : 'lg:-mt-4'}`}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Blood Type */}
              <div className="text-heading-3 font-medium text-deep-gray mb-2">
                {blood.type}
              </div>
              
              {/* Status Icon */}
              <div className="text-2xl mb-2">
                {getStatusIcon(blood.demand)}
              </div>
              
              {/* Status Text */}
              <div className={`text-caption font-medium ${getStatusColor(blood.color)}`}>
                {blood.status}
              </div>

              {/* Pulse effect for urgent cases */}
              {blood.demand === 'urgent' && (
                <div className="absolute inset-0 rounded-full bg-error-red/20 animate-ping"></div>
              )}
            </div>
          ))}
        </div>

        {/* Real-time indicator */}
        <div className="text-center mt-l">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md-custom">
            <div className="w-2 h-2 bg-success-green rounded-full animate-pulse"></div>
            <span className="text-caption text-deep-gray">Updated every 5 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodDemandSection;
