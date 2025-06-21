
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, XCircle } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  empathyResponse?: {
    yes?: string;
    no?: string;
  };
}

interface ChatMessage {
  id: string;
  type: 'bot' | 'user';
  content: string;
  isEmpathy?: boolean;
}

const EligibilityCheck = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<'eligible' | 'wait' | 'not-eligible'>('eligible');
  const [isAnimating, setIsAnimating] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      text: "Trong vòng 6 tháng qua, bạn có xăm mình, xỏ lỗ tai/mũi, châm cứu, hoặc nhổ răng không?",
      empathyResponse: {
        yes: "Cảm ơn bạn đã chia sẻ. Để đảm bảo an toàn tuyệt đối, bạn cần đợi đủ 6 tháng sau các thủ thuật này. Hẹn gặp lại bạn vào một ngày gần nhất nhé!"
      }
    },
    {
      id: 2,
      text: "Bạn có đang mắc hoặc đã từng mắc các bệnh như viêm gan B, C, HIV, hoặc các bệnh lây truyền qua đường máu khác không?",
      empathyResponse: {
        yes: "Cảm ơn sự trung thực của bạn. Vì lý do an toàn sức khỏe cộng đồng, chúng tôi rất tiếc chưa thể tiếp nhận máu từ bạn lúc này. Sự quan tâm của bạn đã là một món quà quý giá."
      }
    },
    {
      id: 3,
      text: "Trong vòng 7 ngày qua, bạn có bị cảm cúm, ho, sốt, hoặc dùng thuốc kháng sinh không?",
      empathyResponse: {
        yes: "Sức khỏe của bạn là ưu tiên hàng đầu. Vui lòng quay lại sau khi bạn đã hoàn toàn bình phục và ngưng thuốc ít nhất 7 ngày. Cảm ơn bạn!"
      }
    },
    {
      id: 4,
      text: "Cân nặng của bạn có trên 50kg không?",
      empathyResponse: {
        no: "Cảm ơn bạn. Để đảm bảo sức khỏe sau khi hiến, bạn cần đạt cân nặng tối thiểu là 50kg. Hãy giữ gìn sức khỏe và quay lại với chúng tôi khi bạn sẵn sàng nhé."
      }
    },
    {
      id: 5,
      text: "Trong vòng 12 tháng qua, bạn có được truyền máu hoặc các chế phẩm từ máu không?",
      empathyResponse: {
        yes: "Cảm ơn bạn đã cung cấp thông tin. Theo quy định, bạn cần đợi 12 tháng sau lần truyền máu gần nhất để có thể hiến máu. Mong sớm gặp lại bạn."
      }
    }
  ];

  // Initialize with welcome message
  useEffect(() => {
    setTimeout(() => {
      setChatMessages([{
        id: 'welcome',
        type: 'bot',
        content: 'Để đảm bảo an toàn cho bạn và người nhận, hãy cùng trả lời nhanh một vài câu hỏi nhé. Bảng câu hỏi này chỉ mang tính tham khảo và không thay thế cho việc khám sàng lọc.'
      }]);
    }, 500);

    setTimeout(() => {
      setChatMessages(prev => [...prev, {
        id: 'q1',
        type: 'bot',
        content: questions[0].text
      }]);
    }, 1500);
  }, []);

  const handleAnswer = (answer: 'yes' | 'no') => {
    if (isAnimating) return;

    setIsAnimating(true);
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = answer === 'yes' ? 'Có' : 'Không';

    // Add user's answer to chat
    setChatMessages(prev => [...prev, {
      id: `answer-${currentQuestionIndex}`,
      type: 'user',
      content: userAnswer
    }]);

    // Check if this answer ends the quiz
    const shouldEnd = (
      (currentQuestion.id === 1 && answer === 'yes') ||
      (currentQuestion.id === 2 && answer === 'yes') ||
      (currentQuestion.id === 3 && answer === 'yes') ||
      (currentQuestion.id === 4 && answer === 'no') ||
      (currentQuestion.id === 5 && answer === 'yes') ||
      (currentQuestion.id === 5 && answer === 'no')
    );

    if (shouldEnd) {
      // Add empathy response if needed
      const empathyMessage = answer === 'yes' ? currentQuestion.empathyResponse?.yes : currentQuestion.empathyResponse?.no;
      
      if (empathyMessage) {
        setTimeout(() => {
          setChatMessages(prev => [...prev, {
            id: `empathy-${currentQuestionIndex}`,
            type: 'bot',
            content: empathyMessage,
            isEmpathy: true
          }]);
        }, 1000);
      }

      // Determine result
      let finalResult: 'eligible' | 'wait' | 'not-eligible' = 'eligible';
      if (currentQuestion.id === 2 && answer === 'yes') {
        finalResult = 'not-eligible';
      } else if (currentQuestion.id === 5 && answer === 'no') {
        finalResult = 'eligible';
      } else {
        finalResult = 'wait';
      }

      setTimeout(() => {
        setResult(finalResult);
        setShowResult(true);
        setIsAnimating(false);
      }, empathyMessage ? 3000 : 2000);
    } else {
      // Continue to next question
      setTimeout(() => {
        const nextIndex = currentQuestionIndex + 1;
        setCurrentQuestionIndex(nextIndex);
        setChatMessages(prev => [...prev, {
          id: `q${nextIndex + 1}`,
          type: 'bot',
          content: questions[nextIndex].text
        }]);
        setIsAnimating(false);
      }, 1500);
    }
  };

  const ResultCard = () => {
    const configs = {
      eligible: {
        icon: CheckCircle,
        color: 'text-harmony-green',
        bgColor: 'bg-harmony-green/10',
        title: 'Tuyệt vời! Bạn có thể hiến máu',
        message: 'Dựa trên các câu trả lời, bạn có thể đủ điều kiện hiến máu. Hãy đặt lịch để được khám sàng lọc chi tiết.',
        buttonText: 'Đặt Lịch Hiến Máu',
        buttonLink: '/events'
      },
      wait: {
        icon: Clock,
        color: 'text-kindness-orange',
        bgColor: 'bg-kindness-orange/10',
        title: 'Vui lòng chờ thêm một chút',
        message: 'Hiện tại bạn cần đợi thêm thời gian để đảm bảo an toàn. Hãy quay lại khi bạn sẵn sàng nhé!',
        buttonText: 'Tìm Hiểu Thêm',
        buttonLink: '/faqs'
      },
      'not-eligible': {
        icon: XCircle,
        color: 'text-error-red',
        bgColor: 'bg-error-red/10',
        title: 'Cảm ơn sự quan tâm của bạn',
        message: 'Vì lý do an toàn sức khỏe, hiện tại chúng tôi chưa thể tiếp nhận máu từ bạn. Sự quan tâm của bạn đã rất ý nghĩa.',
        buttonText: 'Tìm Cách Khác Để Giúp Đỡ',
        buttonLink: '/faqs'
      }
    };

    const config = configs[result];
    const IconComponent = config.icon;

    return (
      <div className="animate-fade-in">
        <div className={`rounded-lg-custom p-8 ${config.bgColor} border-2 border-warm-gray/30 text-center`}>
          <div className={`w-20 h-20 mx-auto mb-6 ${config.color} ${config.bgColor} rounded-full flex items-center justify-center`}>
            <IconComponent size={40} />
          </div>
          
          <h2 className="text-heading-2 text-deep-gray font-semibold mb-4">
            {config.title}
          </h2>
          
          <p className="text-body text-gentle-gray mb-8 leading-relaxed">
            {config.message}
          </p>
          
          <div className="space-y-4">
            <Link to={config.buttonLink}>
              <Button className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom px-8 py-3 w-full">
                {config.buttonText}
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-gentle-gray text-gentle-gray hover:bg-warm-gray rounded-md-custom px-8 py-3 w-full">
                Quay Về Trang Chủ
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-caption text-gentle-gray">
            Kết quả này chỉ mang tính tham khảo. Việc khám sàng lọc chính thức sẽ được thực hiện tại trung tâm hiến máu.
          </p>
        </div>
      </div>
    );
  };

  if (showResult) {
    return (
      <div className="min-h-screen bg-warm-gray/30">
        {/* Header */}
        <header className="bg-white border-b border-warm-gray/30 py-4">
          <div className="max-w-2xl mx-auto px-4">
            <Link to="/" className="text-heading-3 font-bold text-compassion-red flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M192 512C86 385.1 0 263.3 0 192 0 86 86 0 192 0s192 86 192 192c0 71.3-86 193.1-192 320z"
                  transform="rotate(180 192 256)"
                  fill="#E23E57"
                  stroke="#FFD700"
                  strokeWidth="25"
                />
              </svg>
              Giọt Máu Vàng
            </Link>
          </div>
        </header>

        {/* Result Content */}
        <div className="max-w-2xl mx-auto px-4 py-8">
          <ResultCard />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-gray/30">
      {/* Header */}
      <header className="bg-white border-b border-warm-gray/30 py-4">
        <div className="max-w-2xl mx-auto px-4">
          <Link to="/" className="text-heading-3 font-bold text-compassion-red flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M192 512C86 385.1 0 263.3 0 192 0 86 86 0 192 0s192 86 192 192c0 71.3-86 193.1-192 320z"
                transform="rotate(180 192 256)"
                fill="#E23E57"
                stroke="#FFD700"
                strokeWidth="25"
              />
            </svg>
            Giọt Máu Vàng
          </Link>
        </div>
      </header>

      {/* Chat Container */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {chatMessages.map((message, index) => (
            <div
              key={message.id}
              className={`animate-fade-in ${message.type === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-compassion-red text-white rounded-br-none'
                    : message.isEmpathy
                    ? 'bg-kindness-orange/20 text-deep-gray rounded-bl-none border-l-4 border-kindness-orange'
                    : 'bg-warm-gray text-deep-gray rounded-bl-none'
                }`}
              >
                <p className="text-body leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}

          {/* Answer Buttons */}
          {!showResult && chatMessages.length > 1 && chatMessages[chatMessages.length - 1].type === 'bot' && !chatMessages[chatMessages.length - 1].isEmpathy && (
            <div className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Button
                onClick={() => handleAnswer('yes')}
                disabled={isAnimating}
                className="bg-supportive-blue hover:bg-supportive-blue/90 text-white rounded-full px-8 py-3 min-w-[100px]"
              >
                Có
              </Button>
              <Button
                onClick={() => handleAnswer('no')}
                disabled={isAnimating}
                variant="outline"
                className="border-supportive-blue text-supportive-blue hover:bg-supportive-blue hover:text-white rounded-full px-8 py-3 min-w-[100px]"
              >
                Không
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EligibilityCheck;
