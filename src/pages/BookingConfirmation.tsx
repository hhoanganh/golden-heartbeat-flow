import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Calendar, Share2, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { allEvents } from '@/data/eventsData';

const BookingConfirmation = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  
  const selectedEvent = allEvents.find(event => event.id === parseInt(eventId || '0')) || allEvents[0];
  
  // Generate a unique booking reference
  const bookingRef = `BK${Date.now().toString().slice(-6)}${selectedEvent.id}`;
  
  // QR code data (in real app, this would be a proper QR code)
  const qrCodeData = `BOOKING:${bookingRef}|EVENT:${selectedEvent.id}|DATE:${selectedEvent.date}`;
  
  const handleAddToCalendar = () => {
    // Create calendar event URL (Google Calendar format)
    const startDate = new Date(selectedEvent.date + ' ' + selectedEvent.time.split(' - ')[0]);
    const endDate = new Date(selectedEvent.date + ' ' + selectedEvent.time.split(' - ')[1]);
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(selectedEvent.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')}&details=${encodeURIComponent(selectedEvent.description)}&location=${encodeURIComponent(selectedEvent.address)}`;
    
    window.open(calendarUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Lịch hẹn hiến máu',
        text: `Tôi đã đặt lịch hiến máu tại ${selectedEvent.title} vào ${selectedEvent.date}`,
        url: window.location.href
      });
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5 py-l">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-display text-deep-gray font-bold mb-4">
              Lịch Hẹn Đã Được Xác Nhận
            </h1>
            <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
              Cảm ơn bạn đã tham gia cứu người. Dưới đây là thông tin chi tiết về lịch hẹn của bạn.
            </p>
          </div>
        </div>
      </section>
      
      <div className="max-w-4xl mx-auto px-3 md:px-5 lg:px-10 py-xl">
        {/* Mobile Layout */}
        <div className="lg:hidden space-y-xl">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-harmony-green/10 rounded-full mb-4">
              <Check className="w-8 h-8 text-harmony-green" />
            </div>
            <h1 className="text-heading-2 font-semibold text-deep-gray">
              Lịch hẹn của bạn đã được xác nhận!
            </h1>
            <p className="text-body text-gentle-gray">
              Cảm ơn bạn đã đăng ký hiến máu. Thông tin chi tiết được hiển thị bên dưới.
            </p>
          </div>

          {/* Primary Action Container */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={handleAddToCalendar}
              className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Thêm vào lịch
            </Button>
          </div>

          {/* Main Details Card */}
          <Card className="bg-white shadow-md-custom rounded-md-custom overflow-hidden">
            {/* QR Code Section */}
            <div className="p-6 text-center border-b border-warm-gray/30">
              <h3 className="text-body-large font-semibold text-deep-gray mb-4">
                Mã QR Check-in
              </h3>
              <div className="inline-block p-4 bg-white border-2 border-warm-gray rounded-lg">
                <div className="w-32 h-32 bg-deep-gray flex items-center justify-center text-white text-micro font-mono">
                  QR CODE
                  <br />
                  {bookingRef}
                </div>
              </div>
              <p className="text-caption text-gentle-gray mt-3">
                Hiển thị mã này khi đến địa điểm hiến máu
              </p>
            </div>

            {/* Appointment Details Section */}
            <CardContent className="p-6 space-y-4">
              <h3 className="text-body-large font-semibold text-deep-gray mb-4">
                Chi tiết lịch hẹn
              </h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <span className="text-body text-gentle-gray">Mã đặt lịch:</span>
                  <span className="text-body font-medium text-deep-gray">{bookingRef}</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-body text-gentle-gray">Sự kiện:</span>
                  <span className="text-body font-medium text-deep-gray text-right max-w-48">
                    {selectedEvent.title}
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-body text-gentle-gray">Ngày:</span>
                  <span className="text-body font-medium text-deep-gray">{selectedEvent.date}</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-body text-gentle-gray">Giờ:</span>
                  <span className="text-body font-medium text-deep-gray">{selectedEvent.time}</span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-body text-gentle-gray">Địa điểm:</span>
                  <span className="text-body font-medium text-deep-gray text-right max-w-48">
                    {selectedEvent.location}
                  </span>
                </div>
                
                <div className="flex justify-between items-start">
                  <span className="text-body text-gentle-gray">Địa chỉ:</span>
                  <span className="text-body font-medium text-deep-gray text-right max-w-48">
                    {selectedEvent.address}
                  </span>
                </div>

                {selectedEvent.urgentNeeds.length > 0 && (
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Nhu cầu khẩn cấp:</span>
                    <div className="flex flex-wrap gap-1 justify-end max-w-48">
                      {selectedEvent.urgentNeeds.map((bloodType) => (
                        <Badge key={bloodType} variant="destructive" className="text-micro">
                          {bloodType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>

            {/* Secondary Actions Section */}
            <div className="p-6 border-t border-warm-gray/30 flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/appointments')}
                className="text-supportive-blue hover:text-supportive-blue/80"
              >
                <Eye className="w-4 h-4 mr-1" />
                Lịch hẹn của tôi
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="text-supportive-blue hover:text-supportive-blue/80"
              >
                <Share2 className="w-4 h-4 mr-1" />
                Chia sẻ
              </Button>
            </div>
          </Card>

          {/* Next Steps Container */}
          <div className="text-center space-y-4">
            <h3 className="text-body-large font-semibold text-deep-gray">
              Các bước tiếp theo
            </h3>
            <div className="space-y-2 text-body text-gentle-gray">
              <p>• Mang theo giấy tờ tùy thân có ảnh</p>
              <p>• Ăn nhẹ và uống nhiều nước trước khi đến</p>
              <p>• Mặc trang phục thoải mái, tay áo có thể xắn lên</p>
              <p>• Đến sớm 10-15 phút để check-in</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-xl">
          {/* Left Column - Main Details Card */}
          <div>
            <Card className="bg-white shadow-md-custom rounded-md-custom overflow-hidden h-fit">
              {/* QR Code Section */}
              <div className="p-8 text-center border-b border-warm-gray/30">
                <h3 className="text-heading-3 font-semibold text-deep-gray mb-6">
                  Mã QR Check-in
                </h3>
                <div className="inline-block p-6 bg-white border-2 border-warm-gray rounded-lg">
                  <div className="w-40 h-40 bg-deep-gray flex items-center justify-center text-white text-caption font-mono">
                    QR CODE
                    <br />
                    {bookingRef}
                  </div>
                </div>
                <p className="text-body text-gentle-gray mt-4">
                  Hiển thị mã này khi đến địa điểm hiến máu
                </p>
              </div>

              {/* Appointment Details Section */}
              <CardContent className="p-8 space-y-6">
                <h3 className="text-heading-3 font-semibold text-deep-gray">
                  Chi tiết lịch hẹn
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Mã đặt lịch:</span>
                    <span className="text-body font-medium text-deep-gray">{bookingRef}</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Sự kiện:</span>
                    <span className="text-body font-medium text-deep-gray text-right max-w-64">
                      {selectedEvent.title}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Ngày:</span>
                    <span className="text-body font-medium text-deep-gray">{selectedEvent.date}</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Giờ:</span>
                    <span className="text-body font-medium text-deep-gray">{selectedEvent.time}</span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Địa điểm:</span>
                    <span className="text-body font-medium text-deep-gray text-right max-w-64">
                      {selectedEvent.location}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-start">
                    <span className="text-body text-gentle-gray">Địa chỉ:</span>
                    <span className="text-body font-medium text-deep-gray text-right max-w-64">
                      {selectedEvent.address}
                    </span>
                  </div>

                  {selectedEvent.urgentNeeds.length > 0 && (
                    <div className="flex justify-between items-start">
                      <span className="text-body text-gentle-gray">Nhu cầu khẩn cấp:</span>
                      <div className="flex flex-wrap gap-1 justify-end max-w-64">
                        {selectedEvent.urgentNeeds.map((bloodType) => (
                          <Badge key={bloodType} variant="destructive" className="text-micro">
                            {bloodType}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>

              {/* Secondary Actions Section */}
              <div className="p-8 border-t border-warm-gray/30 flex justify-center space-x-8">
                <Button
                  variant="ghost"
                  onClick={() => navigate('/appointments')}
                  className="text-supportive-blue hover:text-supportive-blue/80"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Xem tất cả lịch hẹn
                </Button>
                
                <Button
                  variant="ghost"
                  onClick={handleShare}
                  className="text-supportive-blue hover:text-supportive-blue/80"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia sẻ
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-harmony-green/10 rounded-full">
                <Check className="w-10 h-10 text-harmony-green" />
              </div>
              <div>
                <h1 className="text-heading-2 font-semibold text-deep-gray mb-3">
                  Lịch hẹn của bạn đã được xác nhận!
                </h1>
                <p className="text-body-large text-gentle-gray">
                  Cảm ơn bạn đã đăng ký hiến máu. Thông tin chi tiết được hiển thị bên trái.
                </p>
              </div>
            </div>

            {/* Primary Action Container */}
            <div className="text-center">
              <Button
                size="lg"
                onClick={handleAddToCalendar}
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Thêm vào lịch
              </Button>
            </div>

            {/* Next Steps Container */}
            <div className="space-y-6">
              <h3 className="text-heading-3 font-semibold text-deep-gray text-center">
                Các bước tiếp theo
              </h3>
              <div className="space-y-3 text-body text-gentle-gray">
                <p className="flex items-start">
                  <span className="text-compassion-red mr-2">•</span>
                  Mang theo giấy tờ tùy thân có ảnh
                </p>
                <p className="flex items-start">
                  <span className="text-compassion-red mr-2">•</span>
                  Ăn nhẹ và uống nhiều nước trước khi đến
                </p>
                <p className="flex items-start">
                  <span className="text-compassion-red mr-2">•</span>
                  Mặc trang phục thoải mái, tay áo có thể xắn lên
                </p>
                <p className="flex items-start">
                  <span className="text-compassion-red mr-2">•</span>
                  Đến sớm 10-15 phút để check-in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingConfirmation;