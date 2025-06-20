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
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 border-b border-warm-gray/60">
    <Label className="text-body text-deep-gray mb-2 sm:mb-0 flex-grow pr-4">{question}</Label>
    <div className="flex-shrink-0 flex items-center space-x-6">{children}</div>
  </div>
);

const BookingPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

  // The complete and correct state for the health form
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
  
  // Corrected validation logic for the combined Step 1
  const isStep1Complete = useMemo(() => {
    if (!selectedTimeSlot) {
      return false;
    }
    
    const radioQuestions = [
      'everDonated', 'hasCurrentIllness', 'had12mDiseases', 'had12mTransfusion',
      'had12mRabiesVax', 'had6mWeightLoss', 'had6mCough', 'had6mDental', 'had6mTattoo',
      'had6mDrugs', 'had6mHivRisk', 'had6mSameSex', 'had1mSickness', 'had1mVax',
      'inEpidemicZone', 'had7dFlu', 'had7dMeds', 'had7dHepB'
    ];
    
    for (const q of radioQuestions) {
      if (healthFormData[q as keyof typeof healthFormData] === undefined) return false;
    }

    if (healthFormData.isFemale) {
      if (healthFormData.isPregnant === undefined || healthFormData.hadPeriod === undefined) {
        return false;
      }
    }
    
    return healthFormData.agreesToHivTest;
  }, [healthFormData, selectedTimeSlot]);

  const selectedEvent = allEvents.find(event => event.id === parseInt(eventId || '0')) || allEvents[0];

  // Updated to a 2-step process
  const processSteps = [
    { id: 1, title: "Khai Báo & Chọn Lịch", status: currentStep === 1 ? "active" : "completed" },
    { id: 2, title: "Xem Lại & Xác Nhận", status: currentStep === 2 ? "active" : "upcoming" }
  ];

  const timeSlots = [
    "8:00 AM - 9:00 AM", "9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM",
    "11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM", "2:00 PM - 3:00 PM",
    "3:00 PM - 4:00 PM", "4:00 PM - 5:00 PM"
  ];

  const handleNext = () => { if (currentStep < 2) setCurrentStep(currentStep + 1); };
  const handlePrevious = () => { if (currentStep > 1) setCurrentStep(currentStep - 1); };
  const handleBack = () => navigate('/events');

  const getStepIcon = (step: typeof processSteps[0]) => {
    if (step.status === 'completed') return <div className="w-8 h-8 bg-harmony-green text-white rounded-full flex items-center justify-center text-body font-medium">✓</div>;
    if (step.status === 'active') return <div className="w-8 h-8 bg-compassion-red text-white rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
    return <div className="w-8 h-8 bg-warm-gray text-gentle-gray rounded-full flex items-center justify-center text-body font-medium">{step.id}</div>;
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
            <CardContent className="space-y-1">
              <QuestionRow question="1. Anh/chị đã từng hiến máu chưa?"><RadioGroup onValueChange={(v) => handleFormChange('everDonated', v)} value={healthFormData.everDonated} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q1-yes" /><Label htmlFor="q1-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q1-no" /><Label htmlFor="q1-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="2. Hiện tại, anh/chị có bị các bệnh: viêm khớp, đau dạ dày, viêm gan/vàng da, bệnh tim, huyết áp thấp/cao, hen, ho kéo dài, bệnh máu, lao?"><RadioGroup onValueChange={(v) => handleFormChange('hasCurrentIllness', v)} value={healthFormData.hasCurrentIllness} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q2-yes" /><Label htmlFor="q2-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q2-no" /><Label htmlFor="q2-no">Không</Label></div></RadioGroup></QuestionRow>
              {healthFormData.hasCurrentIllness === 'yes' && <Input placeholder="Bệnh khác (ghi cụ thể)..." className="mt-2" onChange={e => handleFormChange('currentIllnessOther', e.target.value)} />}
              <div className="font-bold text-deep-gray pt-4 mt-4 border-t">Trong vòng 12 tháng gần đây:</div>
              <QuestionRow question="3. Có mắc và đã điều trị khỏi Sốt rét, Giang mai, Lao, Viêm gan, hoặc Phẫu thuật ngoại khoa?"><RadioGroup onValueChange={(v) => handleFormChange('had12mDiseases', v)} value={healthFormData.had12mDiseases} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q3-yes" /><Label htmlFor="q3-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q3-no" /><Label htmlFor="q3-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="4. Được truyền máu và các chế phẩm máu?"><RadioGroup onValueChange={(v) => handleFormChange('had12mTransfusion', v)} value={healthFormData.had12mTransfusion} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q4-yes" /><Label htmlFor="q4-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q4-no" /><Label htmlFor="q4-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="5. Tiêm vắc xin bệnh dại?"><RadioGroup onValueChange={(v) => handleFormChange('had12mRabiesVax', v)} value={healthFormData.had12mRabiesVax} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q5-yes" /><Label htmlFor="q5-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q5-no" /><Label htmlFor="q5-no">Không</Label></div></RadioGroup></QuestionRow>
              <div className="font-bold text-deep-gray pt-4 mt-4 border-t">Trong vòng 06 tháng gần đây:</div>
              <QuestionRow question="6. Sút cân nhanh không rõ nguyên nhân?"><RadioGroup onValueChange={(v) => handleFormChange('had6mWeightLoss', v)} value={healthFormData.had6mWeightLoss} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q6-yes" /><Label htmlFor="q6-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q6-no" /><Label htmlFor="q6-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="7. Ho kéo dài?"><RadioGroup onValueChange={(v) => handleFormChange('had6mCough', v)} value={healthFormData.had6mCough} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q7-yes" /><Label htmlFor="q7-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q7-no" /><Label htmlFor="q7-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="8. Chữa răng, châm cứu, nhổ răng?"><RadioGroup onValueChange={(v) => handleFormChange('had6mDental', v)} value={healthFormData.had6mDental} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q8-yes" /><Label htmlFor="q8-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q8-no" /><Label htmlFor="q8-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="9. Xăm mình, xỏ lỗ tai, lỗ mũi?"><RadioGroup onValueChange={(v) => handleFormChange('had6mTattoo', v)} value={healthFormData.had6mTattoo} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q9-yes" /><Label htmlFor="q9-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q9-no" /><Label htmlFor="q9-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="10. Sử dụng ma túy?"><RadioGroup onValueChange={(v) => handleFormChange('had6mDrugs', v)} value={healthFormData.had6mDrugs} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q10-yes" /><Label htmlFor="q10-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q10-no" /><Label htmlFor="q10-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="11. Quan hệ tình dục với người nhiễm HIV hoặc người có hành vi nguy cơ lây nhiễm HIV?"><RadioGroup onValueChange={(v) => handleFormChange('had6mHivRisk', v)} value={healthFormData.had6mHivRisk} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q11-yes" /><Label htmlFor="q11-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q11-no" /><Label htmlFor="q11-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="12. Quan hệ tình dục với người cùng giới?"><RadioGroup onValueChange={(v) => handleFormChange('had6mSameSex', v)} value={healthFormData.had6mSameSex} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q12-yes" /><Label htmlFor="q12-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q12-no" /><Label htmlFor="q12-no">Không</Label></div></RadioGroup></QuestionRow>
              <div className="font-bold text-deep-gray pt-4 mt-4 border-t">Trong vòng 01 tháng gần đây:</div>
              <QuestionRow question="13. Khỏi bệnh sau khi mắc viêm đường tiết niệu, viêm da nhiễm trùng, viêm phế quản, viêm phổi, sởi, quai bị, Rubella?"><RadioGroup onValueChange={(v) => handleFormChange('had1mSickness', v)} value={healthFormData.had1mSickness} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q13-yes" /><Label htmlFor="q13-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q13-no" /><Label htmlFor="q13-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="14. Tiêm vắc xin phòng bệnh?"><RadioGroup onValueChange={(v) => handleFormChange('had1mVax', v)} value={healthFormData.had1mVax} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q14-yes" /><Label htmlFor="q14-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q14-no" /><Label htmlFor="q14-no">Không</Label></div></RadioGroup></QuestionRow>
              {healthFormData.had1mVax === 'yes' && <Input placeholder="Loại Vắc xin (ghi cụ thể)..." className="mt-2" onChange={e => handleFormChange('vaxOther', e.target.value)} />}
              <QuestionRow question="15. Đi vào vùng dịch bệnh lưu hành (sốt rét, sốt xuất huyết, Zika,...)?"><RadioGroup onValueChange={(v) => handleFormChange('inEpidemicZone', v)} value={healthFormData.inEpidemicZone} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q15-yes" /><Label htmlFor="q15-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q15-no" /><Label htmlFor="q15-no">Không</Label></div></RadioGroup></QuestionRow>
              <div className="font-bold text-deep-gray pt-4 mt-4 border-t">Trong vòng 07 ngày gần đây:</div>
              <QuestionRow question="16. Bị cảm cúm (ho, nhức đầu, sốt...)?"><RadioGroup onValueChange={(v) => handleFormChange('had7dFlu', v)} value={healthFormData.had7dFlu} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q16-yes" /><Label htmlFor="q16-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q16-no" /><Label htmlFor="q16-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="17. Dùng thuốc kháng sinh, Aspirin, Corticoid?"><RadioGroup onValueChange={(v) => handleFormChange('had7dMeds', v)} value={healthFormData.had7dMeds} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q17-yes" /><Label htmlFor="q17-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q17-no" /><Label htmlFor="q17-no">Không</Label></div></RadioGroup></QuestionRow>
              <QuestionRow question="18. Tiêm Vắc xin phòng Viêm gan siêu vi B, Human Papilloma Virus?"><RadioGroup onValueChange={(v) => handleFormChange('had7dHepB', v)} value={healthFormData.had7dHepB} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="q18-yes" /><Label htmlFor="q18-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="q18-no" /><Label htmlFor="q18-no">Không</Label></div></RadioGroup></QuestionRow>
              <div className="flex items-center space-x-2 py-4 mt-4 border-t"><Checkbox id="isFemale" onCheckedChange={(c) => handleFormChange('isFemale', c as boolean)} checked={healthFormData.isFemale} /><Label htmlFor="isFemale" className="font-bold text-deep-gray">Câu hỏi dành cho phụ nữ</Label></div>
              {healthFormData.isFemale && (<div className="pl-6 space-y-1"><QuestionRow question="19. Hiện có thai, hoặc nuôi con dưới 12 tháng tuổi?"><RadioGroup onValueChange={(v) => handleFormChange('isPregnant', v)} value={healthFormData.isPregnant} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="qf1-yes" /><Label htmlFor="qf1-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="qf1-no" /><Label htmlFor="qf1-no">Không</Label></div></RadioGroup></QuestionRow><QuestionRow question="20. Có kinh nguyệt trong vòng một tuần hay không?"><RadioGroup onValueChange={(v) => handleFormChange('hadPeriod', v)} value={healthFormData.hadPeriod} className="flex space-x-6"><div className="flex items-center space-x-2"><RadioGroupItem value="yes" id="qf2-yes" /><Label htmlFor="qf2-yes">Có</Label></div><div className="flex items-center space-x-2"><RadioGroupItem value="no" id="qf2-no" /><Label htmlFor="qf2-no">Không</Label></div></RadioGroup></QuestionRow></div>)}
              <div className="flex items-start space-x-3 pt-6 border-t mt-4"><Checkbox id="agreesToHivTest" onCheckedChange={(c) => handleFormChange('agreesToHivTest', c as boolean)} checked={healthFormData.agreesToHivTest} className="mt-1" /><Label htmlFor="agreesToHivTest" className="text-body text-deep-gray -mt-px">21. Anh/chị có đồng ý xét nghiệm HIV, nhận thông báo và được tư vấn khi kết quả xét nghiệm HIV nghi ngờ dương tính?</Label></div>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card className="bg-white shadow-md-custom rounded-md-custom">
            <CardHeader className="pb-6">
              <CardTitle className="text-heading-2 text-deep-gray font-semibold">Xem Lại & Xác Nhận</CardTitle>
              <p className="text-body text-gentle-gray">Vui lòng kiểm tra lại thông tin trước khi xác nhận lịch hẹn.</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 bg-supportive-blue/5 rounded-md-custom"><h3 className="text-body-large font-semibold text-deep-gray mb-3">Thông tin sự kiện</h3><div className="space-y-2 text-body text-gentle-gray"><div><strong>Sự kiện:</strong> {selectedEvent.title}</div><div><strong>Ngày:</strong> {selectedEvent.date}</div><div><strong>Địa điểm:</strong> {selectedEvent.location}</div><div><strong>Địa chỉ:</strong> {selectedEvent.address}</div></div></div>
                <div className="p-4 bg-harmony-green/5 rounded-md-custom"><h3 className="text-body-large font-semibold text-deep-gray mb-3">Lịch hẹn của bạn</h3><div className="space-y-2 text-body text-gentle-gray"><div><strong>Khung giờ:</strong> {selectedTimeSlot || "Chưa chọn"}</div><div><strong>Thời gian dự kiến:</strong> 45-60 phút</div></div></div>
                <div className="p-4 bg-warning-yellow/10 rounded-md-custom"><h3 className="text-body-large font-semibold text-deep-gray mb-3">Nhắc nhở quan trọng</h3><ul className="space-y-2 text-body text-gentle-gray"><li>• Mang theo giấy tờ tùy thân có ảnh</li><li>• Ăn nhẹ trước khi hiến máu</li><li>• Uống nhiều nước</li><li>• Mặc trang phục thoải mái, tay áo có thể xắn lên</li></ul></div>
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
        <section className="mb-xl">
          <h1 className="text-display text-deep-gray font-bold mb-4 text-center lg:text-left">
            Đặt Lịch Hiến Máu
          </h1>
          <p className="text-body-large text-gentle-gray text-center lg:text-left max-w-2xl">
            Hoàn thành các bước để giữ chỗ của bạn tại sự kiện cứu người này.
          </p>
        </section>

        <div className="grid lg:grid-cols-3 gap-xl">
          <div className="lg:col-span-1 space-y-l">
            {/* Logic to hide the time slot card on step 2 */}
            {currentStep === 1 && (
              <Card className="bg-white shadow-md-custom rounded-md-custom">
                <CardHeader className="pb-4">
                  <CardTitle className="text-heading-3 text-deep-gray font-medium">Chọn Khung Giờ</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={selectedTimeSlot} onValueChange={setSelectedTimeSlot} className="space-y-2">
                    {timeSlots.map((slot) => (
                      <div key={slot} className="flex items-center space-x-2">
                        <RadioGroupItem value={slot} id={slot} />
                        <Label htmlFor={slot} className="text-body text-deep-gray cursor-pointer">{slot}</Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            )}

            <Card className="bg-white shadow-md-custom rounded-md-custom overflow-hidden">
              <div className="relative h-32 lg:h-40"><img src={selectedEvent.image} alt={selectedEvent.title} className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-heading-3 text-deep-gray font-medium line-clamp-2">{selectedEvent.title}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center text-body text-gentle-gray"><span className="mr-2">📅</span><span>{selectedEvent.date}</span></div>
                  <div className="flex items-center text-body text-gentle-gray"><span className="mr-2">🕐</span><span>{selectedEvent.time}</span></div>
                  <div className="flex items-center text-body text-gentle-gray"><span className="mr-2">📍</span><span className="line-clamp-2">{selectedEvent.location}</span></div>
                </div>
              </CardHeader>
              {selectedEvent.urgentNeeds.length > 0 && (
                <CardContent className="pt-0"><div className="p-3 bg-error-red/10 rounded-md-custom"><p className="text-caption font-medium text-error-red mb-1">Nhu cầu khẩn cấp:</p><div className="flex flex-wrap gap-1">{selectedEvent.urgentNeeds.map((bloodType) => (<Badge key={bloodType} variant="destructive" className="text-micro">{bloodType}</Badge>))}</div></div></CardContent>
              )}
            </Card>

            <Card className="bg-white shadow-md-custom rounded-md-custom">
              <CardHeader className="pb-4"><CardTitle className="text-heading-3 text-deep-gray font-medium">Tiến độ đăng ký</CardTitle></CardHeader>
              <CardContent className="pt-0"><div className="space-y-4">{processSteps.map((step, index) => (<div key={step.id}><div className="flex items-center space-x-3">{getStepIcon(step)}<div className="flex-1"><p className={`text-body font-medium ${step.status === 'active' ? 'text-compassion-red' : step.status === 'completed' ? 'text-harmony-green' : 'text-gentle-gray'}`}>{step.title}</p></div>{step.status === 'active' && <Badge variant="default" className="bg-compassion-red text-white text-micro">Hiện tại</Badge>}{step.status === 'completed' && <Badge variant="default" className="bg-harmony-green text-white text-micro">Hoàn tất</Badge>}</div>{index < processSteps.length - 1 && (<div className="ml-4 mt-2 mb-2"><div className={`w-0.5 h-4 ${step.status === 'completed' ? 'bg-harmony-green' : step.status === 'active' ? 'bg-compassion-red' : 'bg-warm-gray'}`}></div></div>)}</div>))}</div></CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            {renderStepContent()}
          </div>
        </div>
        
        <div className="mt-xl flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
                {/* Corrected Button Logic */}
                {currentStep === 1 && <Button variant="outline" onClick={handleBack} className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom">← Quay lại Sự kiện</Button>}
                {currentStep > 1 && (<Button variant="outline" onClick={handlePrevious} className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom">← Quay lại</Button>)}
            </div>
            <div className="flex gap-4">
                {currentStep < 2 ? (
                    <Button
                        size="lg"
                        onClick={handleNext}
                        className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom transition-all duration-300 hover:scale-105"
                        disabled={!isStep1Complete}
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