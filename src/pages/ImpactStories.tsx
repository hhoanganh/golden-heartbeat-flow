
import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, TrendingUp } from 'lucide-react';

const ImpactStories = () => {
  const [visibleBlocks, setVisibleBlocks] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleBlocks(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe all content blocks
    const blocks = document.querySelectorAll('[data-block]');
    blocks.forEach(block => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  const isVisible = (blockId: string) => visibleBlocks.has(blockId);

  return (
    <div className="min-h-screen bg-white">
      {/* Full-Screen Hero Container */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-compassion-red/20 via-supportive-blue/10 to-harmony-green/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 600\"><defs><pattern id=\"hearts\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" patternUnits=\"userSpaceOnUse\"><circle cx=\"50\" cy=\"50\" r=\"2\" fill=\"%23E23E57\" opacity=\"0.3\"/></pattern></defs><rect width=\"100%\" height=\"100%\" fill=\"url(%23hearts)\"/></svg>')"
          }}
        ></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-deep-gray mb-6 animate-fade-in">
            Hành Trình
            <span className="text-compassion-red block mt-2">Kỳ Diệu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gentle-gray leading-relaxed animate-fade-in" style={{ animationDelay: '0.5s' }}>
            Mỗi giọt máu là một câu chuyện. Mỗi câu chuyện là một phép màu.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gentle-gray rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gentle-gray rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Interwoven Content Wall */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-24">
        
        {/* Stat Block 1 */}
        <div 
          id="stat-block-1" 
          data-block 
          className={`text-center transition-all duration-1000 ${
            isVisible('stat-block-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-compassion-red/10 rounded-full mb-6">
            <Heart className="w-10 h-10 text-compassion-red" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-compassion-red mb-4">
            50,000+
          </h2>
          <p className="text-xl text-gentle-gray">
            Đơn vị máu đã được hiến tặng trong năm qua
          </p>
        </div>

        {/* Quote Block */}
        <div 
          id="quote-block" 
          data-block 
          className={`transition-all duration-1000 ${
            isVisible('quote-block') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="bg-warm-gray/30 rounded-2xl p-8 md:p-12 text-center">
            <div className="text-6xl text-compassion-red mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl text-deep-gray font-medium leading-relaxed mb-8">
              Con tôi được cứu sống nhờ máu từ những người hiến tặng. 
              Tôi không thể nào quên được lòng tốt của họ.
            </blockquote>
            <footer className="text-lg text-gentle-gray">
              — Chị Lan, mẹ của bệnh nhi Tim
            </footer>
          </div>
        </div>

        {/* Gallery Block */}
        <div 
          id="gallery-block" 
          data-block 
          className={`transition-all duration-1000 ${
            isVisible('gallery-block') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-deep-gray text-center mb-12">
            Khoảnh Khắc Ý Nghĩa
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="aspect-square bg-gradient-to-br from-compassion-red/20 to-supportive-blue/20 rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300"
              >
                <Heart className="w-8 h-8 text-compassion-red/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Stat Block 2 */}
        <div 
          id="stat-block-2" 
          data-block 
          className={`text-center transition-all duration-1000 ${
            isVisible('stat-block-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-supportive-blue/10 rounded-full mb-6">
            <Users className="w-10 h-10 text-supportive-blue" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-supportive-blue mb-4">
            15,000+
          </h2>
          <p className="text-xl text-gentle-gray">
            Người hiến máu đã tham gia cộng đồng
          </p>
        </div>

        {/* News Block */}
        <div 
          id="news-block" 
          data-block 
          className={`transition-all duration-1000 ${
            isVisible('news-block') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-3xl font-bold text-deep-gray text-center mb-12">
            Tin Tức Mới Nhất
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Chương trình hiến máu cộng đồng tại Quận 1",
                date: "15 tháng 12, 2024",
                excerpt: "Hơn 500 đơn vị máu đã được thu thập trong sự kiện..."
              },
              {
                title: "Câu chuyện cảm động của gia đình Minh",
                date: "12 tháng 12, 2024", 
                excerpt: "Sau tai nạn giao thông, Minh đã được cứu sống..."
              }
            ].map((article, i) => (
              <div key={i} className="bg-white border border-warm-gray/30 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                <h4 className="text-xl font-semibold text-deep-gray mb-2">
                  {article.title}
                </h4>
                <p className="text-sm text-gentle-gray mb-3">{article.date}</p>
                <p className="text-gentle-gray leading-relaxed">
                  {article.excerpt}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stat Block 3 */}
        <div 
          id="stat-block-3" 
          data-block 
          className={`text-center transition-all duration-1000 ${
            isVisible('stat-block-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-harmony-green/10 rounded-full mb-6">
            <TrendingUp className="w-10 h-10 text-harmony-green" />
          </div>
          <h2 className="text-6xl md:text-8xl font-bold text-harmony-green mb-4">
            200+
          </h2>
          <p className="text-xl text-gentle-gray">
            Sự kiện hiến máu được tổ chức mỗi năm
          </p>
        </div>

        {/* Final Quote */}
        <div 
          id="final-quote" 
          data-block 
          className={`transition-all duration-1000 ${
            isVisible('final-quote') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-deep-gray mb-8">
              Hành trình chưa kết thúc...
            </h3>
            <p className="text-xl text-gentle-gray leading-relaxed">
              Mỗi ngày, chúng ta có cơ hội tạo nên những phép màu mới. 
              Bạn có muốn trở thành một phần của câu chuyện này không?
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA Container */}
      <div 
        id="final-cta" 
        data-block 
        className={`bg-gradient-to-r from-compassion-red to-supportive-blue py-20 transition-all duration-1000 ${
          isVisible('final-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Cùng Tạo Nên Điều Kỳ Diệu
          </h2>
          <p className="text-xl text-white/90 mb-12 leading-relaxed">
            Một giọt máu có thể cứu một sinh mệnh. Hành động của bạn hôm nay 
            có thể thay đổi cuộc đời của ai đó mãi mãi.
          </p>
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <Link to="/events">
              <Button className="bg-white text-compassion-red hover:bg-white/90 text-lg px-8 py-4 rounded-full w-full md:w-auto">
                Hiến Máu Ngay Hôm Nay
              </Button>
            </Link>
            <Link to="/">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-compassion-red text-lg px-8 py-4 rounded-full w-full md:w-auto"
              >
                Quay Về Trang Chủ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStories;
