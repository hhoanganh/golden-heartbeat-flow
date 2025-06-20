import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { allEvents } from '@/data/eventsData';

// Helper component for layout consistency in the form
const QuestionRow = ({ question, children }: { question: string, children: React.ReactNode }) => (
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b">
    <Label className="text-body text-deep-gray mb-2 sm:mb-0 sm:w-3/5">{question}</Label>
    <div className="sm:w-2/5 flex items-center space-x-6">{children}</div>
  </div>
);

const BookingPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  // New, more detailed state for the health form
  const [healthFormData, setHealthFormData] = useState({
    everDonated: undefined,
    hasCurrentIllness: undefined,
    currentIllnessOther: '',
    had12mDiseases: undefined,
    had12mTransfusion: undefined,
    had12mRabiesVax: undefined,
    had12mOther: '',
    had6mWeightLoss: undefined,
    had6mCough: undefined,
    had6mDental: undefined,
    had6mTattoo: undefined,
    tattooOther: '',
    had6mDrugs: undefined,
    had6mHivRisk: undefined,
    had6mSameSex: undefined,
    had1mSickness: undefined,
    sicknessOther: '',
    had1mVax: undefined,
    vaxOther: '',
    inEpidemicZone: undefined,
    had7dFlu: undefined,
    had7dMeds: undefined,
    had7dHepB: undefined,
    hepbOther: '',
    isFemale: false, // Add a checkbox to show female-specific questions
    isPregnant: undefined,
    hadPeriod: undefined,
    agreesToHivTest: false,
  });

  const handleFormChange = (field: keyof typeof healthFormData, value: any) => {
    setHealthFormData(prev => ({ ...prev, [field]: value }));
  };
  
  // Memoized validation check
  const isHealthFormComplete = useMemo(() => {
    const questionsToCheck = [
      'everDonated', 'hasCurrentIllness', 'had12mDiseases', 'had12mTransfusion',
      'had12mRabiesVax', 'had6mWeightLoss', 'had6mCough', 'had6mDental',
      'had6mTattoo', 'had6mDrugs', 'had6mHivRisk', 'had6mSameSex', 'had1mSickness',
      'had1mVax', 'inEpidemicZone', 'had7dFlu', 'had7dMeds', 'had7dHepB'
    ];
    
    for (const q of questionsToCheck) {
      if (healthFormData[q as keyof typeof healthFormData] === undefined) return false;
    }

    if (healthFormData.isFemale) {
      if (healthFormData.isPregnant === undefined || healthFormData.hadPeriod === undefined) {
        return false;
      }
    }
    
    return healthFormData.agreesToHivTest;
  }, [healthFormData]);

  const selectedEvent = allEvents.find(event => event.id === parseInt(eventId || '0')) || allEvents[0];

  const processSteps = [
    { id: 1, title: "Khai Báo Y Tế", status: currentStep === 1 ? "active" : currentStep > 1 ? "completed" : "upcoming" },
    { id: 2, title: "Chọn Lịch Hẹn", status: currentStep === 2 ? "active" : currentStep > 2 ? "completed" : "upcoming" },
    { id: 3, title: "Xem Lại & Xác Nhận", status: currentStep === 3 ? "active" : "upcoming" }
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"
  ];

  const handleNext = () => { if (currentStep < 3) setCurrentStep(currentStep + 1); };
  const handlePrevious = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };
  const handleBack = () => navigate('/events');

  const getStepIcon = (step: any) => { /* ... (same as before) ... */ };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-4">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Tờ Khai Dành Cho Người Hiến Máu
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Vui lòng trả lời tất cả các câu hỏi dưới đây. Thông tin của bạn sẽ được bảo mật.
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              <QuestionRow question="1. Anh/chị đã từng hiến máu chưa?">
                <RadioGroup onValueChange={(v) => handleFormChange('everDonated', v)} value={healthFormData.everDonated} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q1-yes" /><Label htmlFor="q1-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q1-no" /><Label htmlFor="q1-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>

              <QuestionRow question="2. Hiện tại, anh/chị có bị các bệnh: viêm khớp, đau dạ dày, viêm gan/vàng da, bệnh tim, huyết áp, hen, ho kéo dài, bệnh máu, lao?">
                <RadioGroup onValueChange={(v) => handleFormChange('hasCurrentIllness', v)} value={healthFormData.hasCurrentIllness} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q2-yes" /><Label htmlFor="q2-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q2-no" /><Label htmlFor="q2-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              {healthFormData.hasCurrentIllness === 'yes' && <Input placeholder="Bệnh khác (ghi cụ thể)..." className="mt-2" onChange={e => handleFormChange('currentIllnessOther', e.target.value)} />}

              <p className="font-bold text-deep-gray pt-4">Trong vòng 12 tháng gần đây:</p>
              <QuestionRow question="3. Anh/chị có mắc và đã điều trị khỏi các bệnh Sốt rét, Giang mai, Lao, Viêm gan, Phẫu thuật ngoại khoa?">
                <RadioGroup onValueChange={(v) => handleFormChange('had12mDiseases', v)} value={healthFormData.had12mDiseases} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q3-yes" /><Label htmlFor="q3-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q3-no" /><Label htmlFor="q3-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="4. Anh/chị có được truyền máu và các chế phẩm máu?">
                <RadioGroup onValueChange={(v) => handleFormChange('had12mTransfusion', v)} value={healthFormData.had12mTransfusion} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q4-yes" /><Label htmlFor="q4-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q4-no" /><Label htmlFor="q4-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>

              <p className="font-bold text-deep-gray pt-4">Trong vòng 06 tháng gần đây:</p>
              <QuestionRow question="5. Anh/chị có bị sút cân nhanh không rõ nguyên nhân hoặc ho kéo dài?">
                <RadioGroup onValueChange={(v) => handleFormChange('had6mWeightLoss', v)} value={healthFormData.had6mWeightLoss} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q5-yes" /><Label htmlFor="q5-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q5-no" /><Label htmlFor="q5-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="6. Anh/chị có chữa răng, châm cứu, nhổ răng, xăm mình, xỏ lỗ tai/mũi?">
                <RadioGroup onValueChange={(v) => handleFormChange('had6mTattoo', v)} value={healthFormData.had6mTattoo} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q6-yes" /><Label htmlFor="q6-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q6-no" /><Label htmlFor="q6-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
               <QuestionRow question="7. Anh/chị có sử dụng ma túy, có quan hệ tình dục với người nhiễm HIV hoặc người có nguy cơ cao, hoặc có quan hệ tình dục đồng giới?">
                <RadioGroup onValueChange={(v) => handleFormChange('had6mHivRisk', v)} value={healthFormData.had6mHivRisk} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q7-yes" /><Label htmlFor="q7-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q7-no" /><Label htmlFor="q7-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>

              <p className="font-bold text-deep-gray pt-4">Câu hỏi dành cho phụ nữ:</p>
              <div className="flex items-center space-x-2 py-2">
                  <Checkbox id="isFemale" onCheckedChange={(c) => handleFormChange('isFemale', c)} checked={healthFormData.isFemale} />
                  <Label htmlFor="isFemale">Tôi là nữ giới</Label>
              </div>
              {healthFormData.isFemale && (
                <div className="pl-6 space-y-2">
                   <QuestionRow question="8. Anh/chị có đang có thai, hoặc nuôi con dưới 12 tháng tuổi?">
                    <RadioGroup onValueChange={(v) => handleFormChange('isPregnant', v)} value={healthFormData.isPregnant} className="flex space-x-6">
                      <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q8-yes" /><Label htmlFor="q8-yes">Có</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q8-no" /><Label htmlFor="q8-no">Không</Label></div>
                    </RadioGroup>
                  </QuestionRow>
                  <QuestionRow question="9. Anh/chị có kinh nguyệt trong vòng một tuần hay không?">
                    <RadioGroup onValueChange={(v) => handleFormChange('hadPeriod', v)} value={healthFormData.hadPeriod} className="flex space-x-6">
                      <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q9-yes" /><Label htmlFor="q9-yes">Có</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q9-no" /><Label htmlFor="q9-no">Không</Label></div>
                    </RadioGroup>
                  </QuestionRow>
                </div>
              )}
              
              <div className="flex items-start space-x-3 pt-6 border-t mt-4">
                  <Checkbox id="agreesToHivTest" onCheckedChange={(c) => handleFormChange('agreesToHivTest', c as boolean)} checked={healthFormData.agreesToHivTest} className="mt-1" />
                  <Label htmlFor="agreesToHivTest" className="text-body text-deep-gray -mt-px">
                  10. Anh/chị có đồng ý xét nghiệm HIV, nhận thông báo và được tư vấn khi kết quả xét nghiệm HIV nghi ngờ dương tính?
                  </Label>
              </div>

            </CardContent>
          </Card>
        );

      case 2:
        return (
            // ... (same as before, no changes needed here)
            <Card className="bg-white shadow-md-custom rounded-md-custom">
                {/* ... Time slot selection JSX ... */}
            </Card>
        );

      case 3:
        return (
            // ... (same as before, no changes needed here)
            <Card className="bg-white shadow-md-custom rounded-md-custom">
                {/* ... Review & Confirm JSX ... */}
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
        {/* ... (Hero section, no changes) ... */}
        <div className="grid lg:grid-cols-3 gap-xl">
            {/* Left Column (Progress steps) */}
            <div className="lg:col-span-1 space-y-l">
                {/* ... (Event Summary and Progress Cards, no changes needed) ... */}
            </div>

            {/* Right Column (Dynamic Content) */}
            <div className="lg:col-span-2">{renderStepContent()}</div>
        </div>

        {/* Navigation buttons */}
        <div className="mt-xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
                <Button variant="outline" onClick={handleBack} className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom">
                    ← Quay lại Sự kiện
                </Button>
                {currentStep > 1 && (
                    <Button variant="outline" onClick={handlePrevious} className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom">
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
                            (currentStep === 1 && !isHealthFormComplete) ||
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