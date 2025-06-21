import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Search, Filter, Navigation, Clock, Phone } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Mock data for donation centers
const donationCenters = [
  {
    id: 1,
    name: "Bệnh viện Đại học Y Dược TP.HCM",
    address: "215 Hồng Bàng, Phường 11, Quận 5, TP.HCM",
    district: "Quận 5",
    distance: "1.2 km",
    coordinates: [106.6568, 10.7579],
    phone: "(028) 3855 4269",
    hours: "7:00 - 16:00",
    bloodTypes: ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"],
    currentDemand: "high"
  },
  {
    id: 2,
    name: "Bệnh viện Chợ Rẫy",
    address: "201B Nguyễn Chí Thanh, Phường 12, Quận 5, TP.HCM",
    district: "Quận 5",
    distance: "2.1 km",
    coordinates: [106.6478, 10.7542],
    phone: "(028) 3855 4137",
    hours: "6:30 - 17:00",
    bloodTypes: ["A+", "B+", "O+", "O-"],
    currentDemand: "medium"
  },
  {
    id: 3,
    name: "Trung tâm Huyết học TP.HCM",
    address: "118 Hồng Bàng, Phường 12, Quận 5, TP.HCM",
    district: "Quận 5",
    distance: "0.8 km",
    coordinates: [106.6589, 10.7601],
    phone: "(028) 3923 4567",
    hours: "7:30 - 16:30",
    bloodTypes: ["A+", "B+", "AB+", "O+"],
    currentDemand: "high"
  },
  {
    id: 4,
    name: "Bệnh viện Nhân dân 115",
    address: "527 Sư Vạn Hạnh, Phường 12, Quận 10, TP.HCM",
    district: "Quận 10",
    distance: "3.5 km",
    coordinates: [106.6654, 10.7823],
    phone: "(028) 3865 4321",
    hours: "6:00 - 18:00",
    bloodTypes: ["A+", "B+", "AB+", "O+", "A-", "O-"],
    currentDemand: "medium"
  },
  {
    id: 5,
    name: "Bệnh viện Trưng Vương",
    address: "339 Lý Thường Kiệt, Phường 15, Quận 11, TP.HCM",
    district: "Quận 11",
    distance: "4.2 km",
    coordinates: [106.6412, 10.7687],
    phone: "(028) 3962 1234",
    hours: "7:00 - 17:30",
    bloodTypes: ["A+", "B+", "O+"],
    currentDemand: "low"
  }
];

const FindCenters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCenter, setSelectedCenter] = useState<number | null>(null);
  const [currentView, setCurrentView] = useState<'map' | 'list'>('list');

  // Filter centers based on search query
  const filteredCenters = useMemo(() => {
    if (!searchQuery.trim()) return donationCenters;
    
    return donationCenters.filter(center =>
      center.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      center.district.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const getDemandBadgeColor = (demand: string) => {
    switch (demand) {
      case 'high': return 'bg-error-red/10 text-error-red border-error-red/20';
      case 'medium': return 'bg-warning-yellow/10 text-warning-yellow border-warning-yellow/20';
      case 'low': return 'bg-success-green/10 text-success-green border-success-green/20';
      default: return 'bg-gentle-gray/10 text-gentle-gray border-gentle-gray/20';
    }
  };

  const getDemandText = (demand: string) => {
    switch (demand) {
      case 'high': return 'Cần gấp';
      case 'medium': return 'Cần vừa';
      case 'low': return 'Đủ máu';
      default: return 'Không rõ';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero/Page Title Section */}
      <section className="bg-gradient-to-r from-compassion-red/5 to-supportive-blue/5 py-l">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="text-center">
            <h1 className="text-display font-bold text-deep-gray mb-4">
              Tìm Trung Tâm Hiến Máu
            </h1>
            <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
              Khám phá các trung tâm hiến máu cố định gần bạn, xem giờ hoạt động và nhu cầu máu theo thời gian thực.
            </p>
          </div>
        </div>
      </section>

      <main>
        {/* Search Bar */}
        <div className="bg-white border-b border-warm-gray sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gentle-gray w-5 h-5" />
              <Input
                type="text"
                placeholder="Tìm theo tên bệnh viện, địa chỉ hoặc quận..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-12 h-12 text-body border-gentle-gray/30 focus:border-compassion-red"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gentle-gray hover:text-compassion-red"
              >
                <Filter className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile View Toggle */}
        <div className="lg:hidden bg-white border-b border-warm-gray">
          <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-3">
            <div className="flex rounded-md-custom border border-gentle-gray/30 p-1">
              <button
                onClick={() => setCurrentView('list')}
                className={`flex-1 py-2 px-4 rounded-md text-body font-medium transition-colors ${
                  currentView === 'list'
                    ? 'bg-compassion-red text-white'
                    : 'text-gentle-gray hover:text-deep-gray'
                }`}
              >
                Danh sách
              </button>
              <button
                onClick={() => setCurrentView('map')}
                className={`flex-1 py-2 px-4 rounded-md text-body font-medium transition-colors ${
                  currentView === 'map'
                    ? 'bg-compassion-red text-white'
                    : 'text-gentle-gray hover:text-deep-gray'
                }`}
              >
                Bản đồ
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 py-6">
          <div className="lg:grid lg:grid-cols-3 lg:gap-l">
            {/* Centers List */}
            <div className={`lg:col-span-1 ${currentView === 'map' ? 'hidden lg:block' : ''}`}>
              <div className="space-y-4 lg:max-h-[calc(100vh-300px)] lg:overflow-y-auto lg:pr-4">
                {filteredCenters.map((center) => (
                  <Card
                    key={center.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                      selectedCenter === center.id
                        ? 'ring-2 ring-compassion-red/20 shadow-md-custom'
                        : 'hover:shadow-md-custom'
                    }`}
                    onClick={() => setSelectedCenter(center.id)}
                  >
                    <CardContent className="p-m">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-heading-3 text-deep-gray font-medium mb-1 line-clamp-2">
                            {center.name}
                          </h3>
                          <div className="flex items-center text-gentle-gray text-body mb-2">
                            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                            <span className="line-clamp-1">{center.address}</span>
                          </div>
                        </div>
                        <div className="ml-3 text-right">
                          <div className="text-caption text-gentle-gray mb-1">{center.distance}</div>
                          <div className={`inline-flex items-center px-2 py-1 rounded-full text-caption font-medium border ${getDemandBadgeColor(center.currentDemand)}`}>
                            {getDemandText(center.currentDemand)}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-caption text-gentle-gray">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>Giờ hoạt động: {center.hours}</span>
                        </div>
                        <div className="flex items-center text-caption text-gentle-gray">
                          <Phone className="w-4 h-4 mr-2" />
                          <span>{center.phone}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="text-caption text-gentle-gray mb-2">Nhóm máu cần thiết:</div>
                        <div className="flex flex-wrap gap-1">
                          {center.bloodTypes.map((type) => (
                            <span
                              key={type}
                              className="inline-flex items-center px-2 py-1 rounded text-caption font-medium bg-supportive-blue/10 text-supportive-blue"
                            >
                              {type}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button
                          className="flex-1 bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom"
                          size="sm"
                        >
                          Đặt lịch tại đây
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-md-custom"
                        >
                          <Navigation className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {filteredCenters.length === 0 && (
                  <div className="text-center py-12">
                    <MapPin className="w-12 h-12 text-gentle-gray mx-auto mb-4" />
                    <h3 className="text-heading-3 text-deep-gray font-medium mb-2">
                      Không tìm thấy trung tâm
                    </h3>
                    <p className="text-body text-gentle-gray">
                      Thử tìm kiếm với từ khóa khác hoặc mở rộng khu vực tìm kiếm
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Map Section */}
            <div className={`lg:col-span-2 ${currentView === 'list' ? 'hidden lg:block' : ''}`}>
              <div className="bg-warm-gray/30 rounded-md-custom h-[500px] lg:h-[calc(100vh-300px)] flex items-center justify-center relative">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-compassion-red mx-auto mb-4 animate-pulse-soft" />
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-2">
                    Bản đồ tương tác
                  </h3>
                  <p className="text-body text-gentle-gray max-w-xs">
                    Tích hợp bản đồ sẽ hiển thị vị trí các trung tâm hiến máu
                  </p>
                </div>
                {/* Map integration would go here */}
                {/* Placeholder pins */}
                <div className="absolute top-1/4 left-1/3 w-6 h-6 bg-compassion-red rounded-full shadow-md-custom animate-pulse-soft"></div>
                <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-compassion-red rounded-full shadow-md-custom animate-pulse-soft"></div>
                <div className="absolute bottom-1/3 left-1/2 w-6 h-6 bg-compassion-red rounded-full shadow-md-custom animate-pulse-soft"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FindCenters;