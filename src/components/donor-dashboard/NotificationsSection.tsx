
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Toggle } from '@/components/ui/toggle';
import { Bell, Heart, Calendar, AlertCircle, CheckCircle, Info } from 'lucide-react';

// Mock notifications data
const mockNotifications = [
  {
    id: 1,
    type: 'reminder',
    title: 'Eligible for Next Donation',
    message: 'You\'re now eligible for your next blood donation! Book an appointment to continue saving lives.',
    timestamp: '2024-01-10T09:00:00Z',
    isRead: false,
    actionUrl: '/book-appointment',
    icon: 'heart'
  },
  {
    id: 2,
    type: 'appointment',
    title: 'Upcoming Appointment Reminder',
    message: 'Your donation appointment is scheduled for tomorrow at 10:30 AM at Bệnh viện Chợ Rẫy.',
    timestamp: '2024-01-09T15:30:00Z',
    isRead: false,
    actionUrl: '/donor-dashboard#appointments',
    icon: 'calendar'
  },
  {
    id: 3,
    type: 'impact',
    title: 'Your Blood Was Used!',
    message: 'Great news! Your blood donation from November 10th was used to help save a patient in emergency surgery.',
    timestamp: '2024-01-08T11:20:00Z',
    isRead: true,
    icon: 'heart'
  },
  {
    id: 4,
    type: 'system',
    title: 'Health Declaration Update',
    message: 'Please update your health declaration before your next donation appointment.',
    timestamp: '2024-01-07T14:45:00Z',
    isRead: true,
    actionUrl: '/health-declaration',
    icon: 'info'
  },
  {
    id: 5,
    type: 'achievement',
    title: 'Milestone Achievement: 24 Lives Saved!',
    message: 'Congratulations! Your 8 donations have helped save 24 lives. Thank you for your continued commitment.',
    timestamp: '2024-01-05T10:15:00Z',
    isRead: true,
    icon: 'achievement'
  },
  {
    id: 6,
    type: 'urgent',
    title: 'Critical Blood Shortage - O+ Needed',
    message: 'There\'s a critical shortage of O+ blood in Ho Chi Minh City. Your donation could save lives today.',
    timestamp: '2024-01-03T08:00:00Z',
    isRead: true,
    actionUrl: '/urgent-donation',
    icon: 'alert'
  }
];

const NotificationsSection = () => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);

  const filteredNotifications = showUnreadOnly 
    ? notifications.filter(n => !n.isRead)
    : notifications;

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
  };

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, isRead: true } : n
    ));
  };

  const getNotificationIcon = (iconType: string) => {
    const iconProps = { className: "h-5 w-5" };
    
    switch (iconType) {
      case 'heart':
        return <Heart {...iconProps} className="h-5 w-5 text-compassion-red" />;
      case 'calendar':
        return <Calendar {...iconProps} className="h-5 w-5 text-supportive-blue" />;
      case 'alert':
        return <AlertCircle {...iconProps} className="h-5 w-5 text-error-red" />;
      case 'achievement':
        return <CheckCircle {...iconProps} className="h-5 w-5 text-harmony-green" />;
      case 'info':
      default:
        return <Info {...iconProps} className="h-5 w-5 text-info-blue" />;
    }
  };

  const getNotificationBadge = (type: string) => {
    switch (type) {
      case 'urgent':
        return <Badge variant="destructive" className="bg-error-red">Urgent</Badge>;
      case 'reminder':
        return <Badge variant="default" className="bg-compassion-red">Reminder</Badge>;
      case 'achievement':
        return <Badge variant="secondary" className="bg-harmony-green/10 text-harmony-green">Achievement</Badge>;
      default:
        return null;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    } else if (diffInHours < 48) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('vi-VN');
    }
  };

  const EmptyState = () => (
    <div className="text-center py-12">
      <Bell className="h-16 w-16 mx-auto text-gentle-gray mb-4" />
      <h3 className="text-heading-3 font-medium text-deep-gray mb-2">
        {showUnreadOnly ? 'No Unread Notifications' : 'No Notifications'}
      </h3>
      <p className="text-body text-gentle-gray">
        {showUnreadOnly 
          ? 'All caught up! You have no unread notifications.'
          : 'You\'ll see important updates and reminders here when they arrive.'
        }
      </p>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <CardTitle className="text-heading-2 text-deep-gray flex items-center">
            Notifications & Alerts
            {unreadCount > 0 && (
              <Badge variant="destructive" className="ml-2 bg-compassion-red">
                {unreadCount} new
              </Badge>
            )}
          </CardTitle>
          {unreadCount > 0 && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={markAllAsRead}
              className="text-supportive-blue border-supportive-blue hover:bg-supportive-blue hover:text-white"
            >
              Mark all as read
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {/* Filter Controls */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-body text-deep-gray">Show:</span>
          <div className="flex items-center space-x-2">
            <Toggle
              pressed={!showUnreadOnly}
              onPressedChange={() => setShowUnreadOnly(false)}
              aria-label="Show all notifications"
              className="data-[state=on]:bg-supportive-blue data-[state=on]:text-white"
            >
              All ({notifications.length})
            </Toggle>
            <Toggle
              pressed={showUnreadOnly}
              onPressedChange={() => setShowUnreadOnly(true)}
              aria-label="Show unread notifications only"
              className="data-[state=on]:bg-supportive-blue data-[state=on]:text-white"
            >
              Unread ({unreadCount})
            </Toggle>
          </div>
        </div>

        {/* Notifications List */}
        {filteredNotifications.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-0">
            {filteredNotifications.map((notification, index) => (
              <div
                key={notification.id}
                className={`
                  relative border-b border-warm-gray last:border-b-0 p-4 transition-all duration-200 hover:bg-warm-gray/30 cursor-pointer
                  ${!notification.isRead ? 'bg-warm-gray/20' : ''}
                `}
                onClick={() => {
                  markAsRead(notification.id);
                  if (notification.actionUrl) {
                    // Handle navigation to actionUrl
                    console.log('Navigate to:', notification.actionUrl);
                  }
                }}
              >
                {/* Unread indicator */}
                {!notification.isRead && (
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-compassion-red rounded-r"></div>
                )}

                <div className="flex items-start space-x-4 ml-2">
                  {/* Icon */}
                  <div className="flex-shrink-0 mt-1">
                    {getNotificationIcon(notification.icon)}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="text-body font-medium text-deep-gray">
                          {notification.title}
                        </h4>
                        {getNotificationBadge(notification.type)}
                      </div>
                      <span className="text-caption text-gentle-gray">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                    </div>
                    
                    <p className="text-body text-gentle-gray leading-relaxed">
                      {notification.message}
                    </p>
                    
                    {notification.actionUrl && (
                      <span className="text-caption text-supportive-blue hover:underline mt-1 inline-block">
                        Take action →
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default NotificationsSection;
