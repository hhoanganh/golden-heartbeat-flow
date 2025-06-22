
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Droplets, TrendingUp, TrendingDown, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

// Mock data for different cities
const bloodDemandData = {
  'toan-quoc': {
    name: 'Toàn quốc',
    overallStatus: 'Thiếu hụt nghiêm trọng',
    mostNeeded: 'O-',
    statusColor: 'text-red-600',
    bloodTypes: [
      { type: 'A+', demand: 'critical', percentage: 15, color: 'bg-red-500', icon: AlertTriangle },
      { type: 'A-', demand: 'high', percentage: 35, color: 'bg-orange-500', icon: TrendingUp },
      { type: 'B+', demand: 'medium', percentage: 60, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'B-', demand: 'critical', percentage: 20, color: 'bg-red-500', icon: AlertTriangle },
      { type: 'AB+', demand: 'good', percentage: 80, color: 'bg-green-500', icon: TrendingDown },
      { type: 'AB-', demand: 'high', percentage: 40, color: 'bg-orange-500', icon: TrendingUp },
      { type: 'O+', demand: 'medium', percentage: 55, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'O-', demand: 'critical', percentage: 10, color: 'bg-red-500', icon: AlertTriangle },
    ]
  },
  'ho-chi-minh': {
    name: 'TP. Hồ Chí Minh',
    overallStatus: 'Cần bổ sung',
    mostNeeded: 'A+',
    statusColor: 'text-orange-600',
    bloodTypes: [
      { type: 'A+', demand: 'high', percentage: 30, color: 'bg-orange-500', icon: TrendingUp },
      { type: 'A-', demand: 'medium', percentage: 50, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'B+', demand: 'good', percentage: 75, color: 'bg-green-500', icon: TrendingDown },
      { type: 'B-', demand: 'high', percentage: 35, color: 'bg-orange-500', icon: TrendingUp },
      { type: 'AB+', demand: 'good', percentage: 85, color: 'bg-green-500', icon: TrendingDown },
      { type: 'AB-', demand: 'medium', percentage: 55, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'O+', demand: 'medium', percentage: 60, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'O-', demand: 'high', percentage: 25, color: 'bg-orange-500', icon: TrendingUp },
    ]
  },
  'ha-noi': {
    name: 'Hà Nội',
    overallStatus: 'Ổn định',
    mostNeeded: 'B-',
    statusColor: 'text-green-600',
    bloodTypes: [
      { type: 'A+', demand: 'good', percentage: 70, color: 'bg-green-500', icon: TrendingDown },
      { type: 'A-', demand: 'medium', percentage: 55, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'B+', demand: 'good', percentage: 80, color: 'bg-green-500', icon: TrendingDown },
      { type: 'B-', demand: 'high', percentage: 40, color: 'bg-orange-500', icon: TrendingUp },
      { type: 'AB+', demand: 'good', percentage: 90, color: 'bg-green-500', icon: TrendingDown },
      { type: 'AB-', demand: 'good', percentage: 75, color: 'bg-green-500', icon: TrendingDown },
      { type: 'O+', demand: 'good', percentage: 65, color: 'bg-green-500', icon: TrendingDown },
      { type: 'O-', demand: 'medium', percentage: 50, color: 'bg-yellow-500', icon: TrendingUp },
    ]
  },
  'da-nang': {
    name: 'Đà Nẵng',
    overallStatus: 'Cần bổ sung',
    mostNeeded: 'O+',
    statusColor: 'text-orange-600',
    bloodTypes: [
      { type: 'A+', demand: 'medium', percentage: 45, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'A-', demand: 'good', percentage: 70, color: 'bg-green-500', icon: TrendingDown },
      { type: 'B+', demand: 'medium', percentage: 50, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'B-', demand: 'good', percentage: 80, color: 'bg-green-500', icon: TrendingDown },
      { type: 'AB+', demand: 'good', percentage: 85, color: 'bg-green-500', icon: TrendingDown },
      { type: 'AB-', demand: 'medium', percentage: 60, color: 'bg-yellow-500', icon: TrendingUp },
      { type: 'O+', demand: 'high', percentage: 30, color: 'bg-orange-500', icon: TrendingUp },
      { type: 'O-', demand: 'medium', percentage: 45, color: 'bg-yellow-500', icon: TrendingUp },
    ]
  }
};

const getDemandText = (demand: string) => {
  switch (demand) {
    case 'critical': return 'Thiếu hụt nghiêm trọng';
    case 'high': return 'Cần bổ sung';
    case 'medium': return 'Bình thường';
    case 'good': return 'Dư thừa';
    default: return 'Bình thường';
  }
};

const NationalHealthMonitor = () => {
  const [selectedLocation, setSelectedLocation] = useState('toan-quoc');
  const [currentData, setCurrentData] = useState(bloodDemandData['toan-quoc']);

  useEffect(() => {
    setCurrentData(bloodDemandData[selectedLocation as keyof typeof bloodDemandData]);
  }, [selectedLocation]);

  const handleLocationChange = (value: string) => {
    setSelectedLocation(value);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
     {/* Page Title Section - Consistent with other pages */}
      <section className="py-l bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 text-center">
          <h1 className="text-display font-bold text-deep-gray mb-4">
            Bản Đồ Nhu Cầu Máu Quốc Gia
          </h1>
          <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
            Theo dõi tình hình cung cấp máu trên toàn quốc theo thời gian thực
          </p>
        </div>

      </section>
      
      <main className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-8 md:py-12">
        {/* Container for Overall Status Card and Location Selector */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          {/* Overall Status Card (Left on Desktop, Top on Mobile) */}
          <div className="w-full md:w-auto flex-grow order-1 md:order-1"> {/* This div will contain the status card */}
            <Card className="bg-white w-full"> {/* Removed max-w-md and mx-auto */}
            <CardContent className="pt-6">
              <div className="flex items-center justify-center gap-4 mb-4">
                <Droplets className="h-6 w-6 text-compassion-red" />
                <span className="text-body font-medium text-deep-gray">
                  Tình trạng tại {currentData.name}:
                </span>
              </div>
              <p className={`text-heading-3 font-bold ${currentData.statusColor} mb-2`}>
                {currentData.overallStatus}
              </p>
              <p className="text-caption text-gentle-gray">
                Nhóm máu cần nhất: <span className="font-bold text-compassion-red">{currentData.mostNeeded}</span>
              </p>
            </CardContent>
          </Card>
        </div>
          {/* Location Selector (Right on Desktop, Bottom on Mobile) */}
          <div className="flex-shrink-0 w-full md:w-auto order-2 md:order-2"> {/* This div will contain the dropdown */}
            <div className="inline-flex items-center gap-4 bg-warm-gray/30 rounded-lg p-4 w-full justify-center md:justify-start">
              <label htmlFor="location-select" className="text-body font-medium text-deep-gray">
                Xem nhu cầu tại:
              </label>
              <Select value={selectedLocation} onValueChange={handleLocationChange}>
                <SelectTrigger className="w-full md:w-64">
                  <SelectValue placeholder="Chọn địa điểm" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="toan-quoc">Toàn quốc</SelectItem>
                  <SelectItem value="ho-chi-minh">TP. Hồ Chí Minh</SelectItem>
                  <SelectItem value="ha-noi">Hà Nội</SelectItem>
                  <SelectItem value="da-nang">Đà Nẵng</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        {/* Dynamic Blood Type Grid Container */}
        <div className="mb-12">
          <h2 className="text-heading-2 font-bold text-deep-gray text-center mb-8">
            Nhu Cầu Theo Nhóm Máu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {currentData.bloodTypes.map((bloodType) => {
              const IconComponent = bloodType.icon;
              return (
                <Card key={bloodType.type} className="text-center hover:shadow-md transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className={`w-4 h-4 rounded-full ${bloodType.color}`}></div>
                      <IconComponent className="h-4 w-4 text-gentle-gray" />
                    </div>
                    <CardTitle className="text-heading-3 font-bold text-deep-gray">
                      {bloodType.type}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <div className="w-full bg-warm-gray rounded-full h-2 mb-2">
                        <div 
                          className={`h-2 rounded-full ${bloodType.color}`}
                          style={{ width: `${bloodType.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-caption font-medium text-deep-gray">
                        {bloodType.percentage}%
                      </span>
                    </div>
                    <p className="text-caption text-gentle-gray">
                      {getDemandText(bloodType.demand)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Dynamic Interactive Map Container */}
        <div className="mb-12">
          <h2 className="text-heading-2 font-bold text-deep-gray text-center mb-8">
            Bản Đồ Trung Tâm Hiến Máu
          </h2>
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-96 bg-gradient-to-br from-warm-gray/20 to-supportive-blue/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-compassion-red mx-auto mb-4" />
                  <p className="text-heading-3 font-bold text-deep-gray mb-2">
                    Bản Đồ {currentData.name}
                  </p>
                  <p className="text-body text-gentle-gray">
                    Hiển thị các trung tâm hiến máu và bệnh viện trong khu vực
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dynamic "How You Can Help" CTA Container */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5 border-0">
            <CardContent className="pt-8 pb-8">
              <h2 className="text-heading-2 font-bold text-deep-gray mb-4">
                Bạn Có Thể Giúp Đỡ Như Thế Nào?
              </h2>
              <p className="text-body text-gentle-gray mb-6">
                Mỗi lần hiến máu có thể cứu được 3 mạng người. 
                Tìm sự kiện hiến máu gần bạn và trở thành người hùng ngay hôm nay.
              </p>
              <Link to="/events">
                <Button 
                  size="lg" 
                  className="bg-compassion-red hover:bg-compassion-red/90 text-white px-8 py-3 text-body font-bold rounded-md-custom transition-all duration-300 hover:scale-105"
                >
                  {selectedLocation === 'toan-quoc' 
                    ? 'Tìm Sự Kiện Hiến Máu' 
                    : `Tìm Sự Kiện tại ${currentData.name}`
                  }
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NationalHealthMonitor;
