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
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-warm-gray/60">
    <Label className="text-body text-deep-gray mb-2 sm:mb-0 sm:w-3/5 pr-4">{question}</Label>
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
    everDonated: undefined as string | undefined,
    hasCurrentIllness: undefined as string | undefined,
    currentIllnessOther: '',
    had12mDiseases: undefined as string | undefined,
    had12mTransfusion: undefined as string | undefined,
    had12mRabiesVax: undefined as string | undefined,
    had12mOther: '',
    had6mWeightLoss: undefined as string | undefined,
    had6mCough: undefined as string | undefined,
    had6mDental: undefined as string | undefined,
    had6mTattoo: undefined as string | undefined,
    tattooOther: '',
    had6mDrugs: undefined as string | undefined,
    had6mHivRisk: undefined as string | undefined,
    had6mSameSex: undefined as string | undefined,
    had1mSickness: undefined as string | undefined,
    sicknessOther: '',
    had1mVax: undefined as string | undefined,
    vaxOther: '',
    inEpidemicZone: undefined as string | undefined,
    had7dFlu: undefined as string | undefined,
    had7dMeds: undefined as string | undefined,
    had7dHepB: undefined as string | undefined,
    hepbOther: '',
    isFemale: false,
    isPregnant: undefined as string | undefined,
    hadPeriod: undefined as string | undefined,
    agreesToHivTest: false,
  });
  
  const handleFormChange = (field: keyof typeof healthFormData, value: any) => {
    setHealthFormData(prev => ({ ...prev, [field]: value }));
  };

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
            <CardHeader className="pb-4">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">
                Tờ Khai Dành Cho Người Hiến Máu
              </CardTitle>
              <p className="text-body text-gentle-gray">
                Vui lòng trả lời tất cả các câu hỏi dưới đây. Thông tin của bạn sẽ được bảo mật.
              </p>
            </CardHeader>
            <CardContent className="space-y-2">
              <QuestionRow question="Anh/chị đã từng hiến máu chưa?">
                <RadioGroup onValueChange={(v) => handleFormChange('everDonated', v)} value={healthFormData.everDonated} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q1-yes" /><Label htmlFor="q1-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q1-no" /><Label htmlFor="q1-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>

              <QuestionRow question="Hiện tại, anh/chị có bị các bệnh: viêm khớp, đau dạ dày, viêm gan/vàng da, bệnh tim, huyết áp thấp/cao, hen, ho kéo dài, bệnh máu, lao?">
                <RadioGroup onValueChange={(v) => handleFormChange('hasCurrentIllness', v)} value={healthFormData.hasCurrentIllness} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q2-yes" /><Label htmlFor="q2-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q2-no" /><Label htmlFor="q2-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              {healthFormData.hasCurrentIllness === 'yes' && <Input placeholder="Bệnh khác (ghi cụ thể)..." className="mt-2" onChange={e => handleFormChange('currentIllnessOther', e.target.value)} />}
              
              <div className="font-bold text-deep-gray pt-4 mt-4 border-t">Trong vòng 12 tháng gần đây:</div>
              <QuestionRow question="Có mắc và đã điều trị khỏi các bệnh Sốt rét, Giang mai, Lao, Viêm gan, Phẫu thuật ngoại khoa?">
                <RadioGroup onValueChange={(v) => handleFormChange('had12mDiseases', v)} value={healthFormData.had12mDiseases} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q3-yes" /><Label htmlFor="q3-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q3-no" /><Label htmlFor="q3-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="Được truyền máu và các chế phẩm máu?">
                <RadioGroup onValueChange={(v) => handleFormChange('had12mTransfusion', v)} value={healthFormData.had12mTransfusion} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q4-yes" /><Label htmlFor="q4-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q4-no" /><Label htmlFor="q4-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
               <QuestionRow question="Tiêm vắc xin bệnh dại?">
                <RadioGroup onValueChange={(v) => handleFormChange('had12mRabiesVax', v)} value={healthFormData.had12mRabiesVax} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q4a-yes" /><Label htmlFor="q4a-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q4a-no" /><Label htmlFor="q4a-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>

              <div className="font-bold text-deep-gray pt-4 mt-4 border-t">Trong vòng 06 tháng gần đây:</div>
              <QuestionRow question="Sút cân nhanh không rõ nguyên nhân, ho kéo dài?">
                <RadioGroup onValueChange={(v) => handleFormChange('had6mWeightLoss', v)} value={healthFormData.had6mWeightLoss} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q5-yes" /><Label htmlFor="q5-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q5-no" /><Label htmlFor="q5-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="Chữa răng, châm cứu, nhổ răng, xăm mình, xỏ lỗ tai/mũi?">
                <RadioGroup onValueChange={(v) => handleFormChange('had6mTattoo', v)} value={healthFormData.had6mTattoo} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q6-yes" /><Label htmlFor="q6-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q6-no" /><Label htmlFor="q6-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="Sử dụng ma túy?">
                 <RadioGroup onValueChange={(v) => handleFormChange('had6mDrugs', v)} value={healthFormData.had6mDrugs} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q7-yes" /><Label htmlFor="q7-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q7-no" /><Label htmlFor="q7-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="Quan hệ tình dục với người nhiễm HIV hoặc người có hành vi nguy cơ lây nhiễm HIV?">
                 <RadioGroup onValueChange={(v) => handleFormChange('had6mHivRisk', v)} value={healthFormData.had6mHivRisk} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q8-yes" /><Label htmlFor="q8-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q8-no" /><Label htmlFor="q8-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              <QuestionRow question="Quan hệ tình dục với người cùng giới?">
                 <RadioGroup onValueChange={(v) => handleFormChange('had6mSameSex', v)} value={healthFormData.had6mSameSex} className="flex space-x-6">
                  <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q9-yes" /><Label htmlFor="q9-yes">Có</Label></div>
                  <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q9-no" /><Label htmlFor="q9-no">Không</Label></div>
                </RadioGroup>
              </QuestionRow>
              
              <div className="flex items-center space-x-2 py-4 mt-4 border-t">
                  <Checkbox id="isFemale" onCheckedChange={(c) => handleFormChange('isFemale', c)} checked={healthFormData.isFemale} />
                  <Label htmlFor="isFemale" className="font-bold text-deep-gray">Câu hỏi dành cho phụ nữ</Label>
              </div>
              {healthFormData.isFemale && (
                <div className="pl-6 space-y-2">
                   <QuestionRow question="Hiện có thai, hoặc nuôi con dưới 12 tháng tuổi?">
                    <RadioGroup onValueChange={(v) => handleFormChange('isPregnant', v)} value={healthFormData.isPregnant} className="flex space-x-6">
                      <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="qf1-yes" /><Label htmlFor="qf1-yes">Có</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="qf1-no" /><Label htmlFor="qf1-no">Không</Label></div>
                    </RadioGroup>
                  </QuestionRow>
                  <QuestionRow question="Có kinh nguyệt trong vòng một tuần hay không?">
                    <RadioGroup onValueChange={(v) => handleFormChange('hadPeriod', v)} value={healthFormData.hadPeriod} className="flex space-x-6">
                      <div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="qf2-yes" /><Label htmlFor="qf2-yes">Có</Label></div>
                      <div className="flex items-center space-x-2"><RadioGroupItem value="no" id="qf2-no" /><Label htmlFor="qf2-no">Không</Label></div>
                    </RadioGroup>
                  </QuestionRow>
                </div>
              )}
              
              <div className="flex items-start space-x-3 pt-6 border-t mt-4">
                  <Checkbox id="agreesToHivTest" onCheckedChange={(c) => handleFormChange('agreesToHivTest', c as boolean)} checked={healthFormData.agreesToHivTest} className="mt-1" />
                  <Label htmlFor="agreesToHivTest" className="text-body text-deep-gray -mt-px">
                  Anh/chị có đồng ý xét nghiệm HIV, nhận thông báo và được tư vấn khi kết quả xét nghiệm HIV nghi ngờ dương tính?
                  </Label>
              </div>
            </CardContent>
          </Card>
        );

      // --- Cases 2 and 3 remain unchanged ---
      case 2:
        return (/* ... Time Slot Selection JSX ... */);
      case 3:
        return (/* ... Review & Confirm JSX ... */);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-xl">
        <section className="mb-xl">
          <h1 className="text-display text-deep-gray font-bold mb-4 text-center lg:text-left">
            Đặt Lịch Hiến Máu
          </h1>
          <p className="text-body-large text-gentle-gray text-center lg:text-left max-w-2xl">
            Hoàn thành các bước để giữ chỗ của bạn tại sự kiện cứu người này.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-xl">
          {/* --- LEFT COLUMN --- */}
          <div className="lg:col-span-1 space-y-l">
            {/* Event Summary Card */}
            <Card className="bg-white shadow-md-custom rounded-md-custom overflow-hidden">
              <div className="relative h-32 lg:h-40">
                <img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" />
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
                    <p className="text-caption font-medium text-error-red mb-1">Nhu cầu khẩn cấp:</p>
                    <div className="flex flex-wrap gap-1">
                      {selectedEvent.urgentNeeds.map((bloodType) => (
                        <Badge key={bloodType} variant="destructive" className="text-micro">{bloodType}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              )}
            </Card>

            {/* Booking Progress Card */}
            <Card className="bg-white shadow-md-custom rounded-md-custom">
              <CardHeader className="pb-4">
                <CardTitle className="text-heading-3 text-deep-gray font-medium">Tiến độ đăng ký</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {processSteps.map((step, index) => (
                    <div key={step.id}>
                      <div className="flex items-center space-x-3">
                        {getStepIcon(step)}
                        <div className="flex-1">
                          <p className={`text-body font-medium ${step.status === 'active' ? 'text-compassion-red' : step.status === 'completed' ? 'text-harmony-green' : 'text-gentle-gray'}`}>
                            {step.title}
                          </p>
                        </div>
                        {step.status === 'active' && <Badge variant="default" className="bg-compassion-red text-white text-micro">Hiện tại</Badge>}
                        {step.status === 'completed' && <Badge variant="default" className="bg-harmony-green text-white text-micro">Hoàn tất</Badge>}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="ml-4 mt-2 mb-2">
                          <div className={`w-0.5 h-4 ${step.status === 'completed' ? 'bg-harmony-green' : step.status === 'active' ? 'bg-compassion-red' : 'bg-warm-gray'}`}></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* --- RIGHT COLUMN --- */}
          <div className="lg:col-span-2">
            {renderStepContent()}
          </div>
        </div>
        
        {/* Bottom navigation buttons */}
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