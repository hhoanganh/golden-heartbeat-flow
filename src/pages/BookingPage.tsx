import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { allEvents } from '@/data/eventsData';

const BookingPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  // Updated healthDeclaration state to match the Vietnamese form
  const [healthDeclaration, setHealthDeclaration] = useState({
    noRecentIllness: false,
    noHighRiskBehavior: false,
    noRecentMedicalProcedures: false,
    isFemaleAndEligible: true, // Default to true, will be checked if female
    agreesToHivTest: false,
    feelingWell: false,
  });


  const selectedEvent = allEvents.find(event => event.id === parseInt(eventId || '0')) || allEvents[0];

  const processSteps = [
    { id: 1, title: "Khai Báo Y Tế", status: currentStep === 1 ? "active" : currentStep > 1 ? "completed" : "upcoming" },
    { id: 2, title: "Chọn Lịch Hẹn", status: currentStep === 2 ? "active" : currentStep > 2 ? "completed" : "upcoming" },
    { id: 3, title: "Xem Lại & Xác Nhận", status: currentStep === 3 ? "active" : "upcoming" }
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM",
    "9:00 AM - 10:00 AM",
    "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM",
    "1:00 PM - 2:00 PM",
    "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM",
    "4:00 PM - 5:00 PM"
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleBack = () => {
    navigate('/events');
  };

  const getStepIcon = (step: typeof processSteps[0]) => {
    if (step.status === 'completed') {
      return <div className="w-8 h-8 bg-harmony-green text-white rounded-full flex items-center justify-center text-body font-medium">✓</div>;
    } else if (step.status === 'active') {
      return <div className="w-8 h-8 bg-compassion-red text-white rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
    } else {
      return <div className="w-8 h-8 bg-warm-gray text-gentle-gray rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Bảng câu hỏi dành cho người hiến máu
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Vui lòng xác nhận các thông tin dưới đây để đảm bảo an toàn cho việc hiến máu.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* Simplified questions from the provided image */}
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="feelingWell"
                    checked={healthDeclaration.feelingWell}
                    onCheckedChange={(checked) =>
                      setHealthDeclaration(prev => ({ ...prev, feelingWell: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="feelingWell" className="text-body text-deep-gray -mt-px">
                    Hiện tại, tôi cảm thấy khỏe mạnh, không có các triệu chứng như cúm, ho, nhức đầu, sốt.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="noRecentIllness"
                    checked={healthDeclaration.noRecentIllness}
                    onCheckedChange={(checked) =>
                      setHealthDeclaration(prev => ({ ...prev, noRecentIllness: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="noRecentIllness" className="text-body text-deep-gray -mt-px">
                    Trong vòng 1 tháng qua, tôi không mắc các bệnh về đường tiết niệu, viêm da, viêm phế quản, sởi, quai bị, và không tiêm vắc-xin.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="noRecentMedicalProcedures"
                    checked={healthDeclaration.noRecentMedicalProcedures}
                    onCheckedChange={(checked) =>
                      setHealthDeclaration(prev => ({ ...prev, noRecentMedicalProcedures: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="noRecentMedicalProcedures" className="text-body text-deep-gray -mt-px">
                    Trong vòng 6 tháng qua, tôi không chữa răng, châm cứu, xăm mình, xỏ lỗ tai/mũi.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="noHighRiskBehavior"
                    checked={healthDeclaration.noHighRiskBehavior}
                    onCheckedChange={(checked) =>
                      setHealthDeclaration(prev => ({ ...prev, noHighRiskBehavior: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="noHighRiskBehavior" className="text-body text-deep-gray -mt-px">
                    Trong vòng 6 tháng qua, tôi không sử dụng ma túy và không có hành vi tình dục nguy cơ cao.
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreesToHivTest"
                    checked={healthDeclaration.agreesToHivTest}
                    onCheckedChange={(checked) =>
                      setHealthDeclaration(prev => ({ ...prev, agreesToHivTest: checked as boolean }))
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="agreesToHivTest" className="text-body text-deep-gray -mt-px">
                    Tôi đồng ý xét nghiệm HIV, nhận thông báo và được tư vấn khi kết quả xét nghiệm HIV nghi ngờ hoặc dương tính.
                  </Label>
                </div>
              </div>

              <div className="p-4 bg-warning-yellow/10 rounded-md-custom border border-warning-yellow/30">
                <p className="text-caption text-gentle-gray">
                  <strong>Lưu ý:</strong> Nhân viên y tế sẽ thực hiện sàng lọc sức khỏe nhanh trước khi hiến máu để đảm bảo an toàn cho bạn và người nhận máu.
                </p>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Chọn Khung Giờ
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Chọn khung giờ bạn muốn hiến máu vào ngày {selectedEvent.date}.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-body-large font-semibold text-deep-gray mb-4">Khung giờ có sẵn</h3>
                  <div className="space-y-2">
                    {timeSlots.map((slot) => (
                      <div key={slot} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={slot}
                          name="timeSlot"
                          value={slot}
                          checked={selectedTimeSlot === slot}
                          onChange={(e) => setSelectedTimeSlot(e.target.value)}
                          className="text-compassion-red focus:ring-compassion-red"
                        />
                        <Label htmlFor={slot} className="text-body text-deep-gray cursor-pointer">
                          {slot}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-body-large font-semibold text-deep-gray mb-4">Quy trình dự kiến</h3>
                  <div className="space-y-3 text-body text-gentle-gray">
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">⏱️</span>
                      <div>
                        <strong>Tổng thời gian:</strong> Khoảng 45-60 phút
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">📋</span>
                      <div>
                        <strong>Sàng lọc sức khoẻ:</strong> 10-15 phút
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">🩸</span>
                      <div>
                        <strong>Quá trình hiến máu:</strong> 8-10 phút
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="mr-2 mt-1">🍪</span>
                      <div>
                        <strong>Nghỉ ngơi & phục hồi:</strong> 10-15 phút
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Xem Lại & Xác Nhận
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Vui lòng kiểm tra lại thông tin trước khi xác nhận lịch hẹn.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-supportive-blue/5 rounded-md-custom">
                  <h3 className="text-body-large font-semibold text-deep-gray mb-3">Thông tin sự kiện</h3>
                  <div className="space-y-2 text-body text-gentle-gray">
                    <div><strong>Sự kiện:</strong> {selectedEvent.title}</div>
                    <div><strong>Ngày:</strong> {selectedEvent.date}</div>
                    <div><strong>Địa điểm:</strong> {selectedEvent.location}</div>
                    <div><strong>Địa chỉ:</strong> {selectedEvent.address}</div>
                  </div>
                </div>

                <div className="p-4 bg-harmony-green/5 rounded-md-custom">
                  <h3 className="text-body-large font-semibold text-deep-gray mb-3">Lịch hẹn của bạn</h3>
                  <div className="space-y-2 text-body text-gentle-gray">
                    <div><strong>Khung giờ:</strong> {selectedTimeSlot || "Chưa chọn"}</div>
                    <div><strong>Thời gian dự kiến:</strong> 45-60 phút</div>
                  </div>
                </div>

                <div className="p-4 bg-warning-yellow/10 rounded-md-custom">
                  <h3 className="text-body-large font-semibold text-deep-gray mb-3">Nhắc nhở quan trọng</h3>
                  <ul className="space-y-2 text-body text-gentle-gray">
                    <li>• Mang theo giấy tờ tùy thân có ảnh</li>
                    <li>• Ăn nhẹ trước khi hiến máu</li>
                    <li>• Uống nhiều nước</li>
                    <li>• Mặc trang phục thoải mái, tay áo có thể xắn lên</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-xl">
        {/* Hero/Introduction Section */}
        <section className="mb-xl">
          <h1 className="text-display text-deep-gray font-bold mb-4 text-center lg:text-left">
            Đặt Lịch Hiến Máu
          </h1>
          <p className="text-body-large text-gentle-gray text-center lg:text-left max-w-2xl">
            Hoàn thành các bước để giữ chỗ của bạn tại sự kiện cứu người này.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-xl">
          {/* Left Column - Event Summary & Progress */}
          <div className="lg:col-span-1 space-y-l">
            <Card className="bg-white shadow-md-custom rounded-md-custom overflow-hidden">
              <div className="relative h-32 lg:h-40">
                <img
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-heading-3 text-deep-gray font-medium line-clamp-2">
                  {selectedEvent.title}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center text-body text-gentle-gray">
                    <span className="mr-2">📅</span>
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-body text-gentle-gray">
                    <span className="mr-2">🕐</span>
                    <span>{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center text-body text-gentle-gray">
                    <span className="mr-2">📍</span>
                    <span className="line-clamp-2">{selectedEvent.location}</span>
                  </div>
                </div>
              </CardHeader>

              {selectedEvent.urgentNeeds.length > 0 && (
                <CardContent className="pt-0">
                  <div className="p-3 bg-error-red/10 rounded-md-custom">
                    <p className="text-caption font-medium text-error-red mb-1">
                      Nhu cầu khẩn cấp:
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {selectedEvent.urgentNeeds.map((bloodType) => (
                        <Badge key={bloodType} variant="destructive" className="text-micro">
                          {bloodType}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            <Card className="bg-white shadow-md-custom rounded-md-custom">
              <CardHeader className="pb-4">
                <CardTitle className="text-heading-3 text-deep-gray font-medium">
                  Tiến độ đăng ký
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={step.id}>
                      <div className="flex items-center space-x-3">
                        {getStepIcon(step)}
                        <div className="flex-1">
                          <p className={`text-body font-medium ${step.status === 'active' ? 'text-compassion-red' :
                            step.status === 'completed' ? 'text-harmony-green' : 'text-gentle-gray'
                            }`}>
                            {step.title}
                          </p>
                        </div>
                        {step.status === 'active' && (
                          <Badge variant="default" className="bg-compassion-red text-white text-micro">
                            Hiện tại
                          </Badge>
                        )}
                        {step.status === 'completed' && (
                          <Badge variant="default" className="bg-harmony-green text-white text-micro">
                            Hoàn tất
                          </Badge>
                        )}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="ml-4 mt-2 mb-2">
                          <div className={`w-0.5 h-4 ${step.status === 'completed' ? 'bg-harmony-green' :
                            step.status === 'active' ? 'bg-compassion-red' : 'bg-warm-gray'
                            }`}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Dynamic Content/Form Section */}
          <div className="lg:col-span-2">
            {renderStepContent()}
          </div>
        </div>

        {/* Navigation & Action Buttons Section */}
        <div className="mt-xl flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={handleBack}
              className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom"
            >
              ← Quay lại Sự kiện
            </Button>
            {currentStep > 1 && (
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom"
              >
                Quay lại
              </Button>
            )}
          </div>

          <div className="flex gap-4">
            {currentStep < 3 ? (
              <Button
                size="lg"
                onClick={handleNext}
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
                disabled={
                  (currentStep === 1 && !Object.values(healthDeclaration).every(Boolean)) ||
                  (currentStep === 2 && !selectedTimeSlot)
                }
              >
                Bước tiếp theo →
              </Button>
            ) : (
              <Button
                size="lg"
                onClick={() => navigate(`/booking-success/${selectedEvent.id}`)}
                className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
              >
                Xác nhận Đặt lịch
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;