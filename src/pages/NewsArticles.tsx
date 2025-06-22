
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const NewsArticles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for articles
  const featuredArticle = {
    id: 1,
    title: "Revolutionary Blood Storage Technology Saves Lives Across Vietnam",
    subtitle: "New refrigeration systems extend blood shelf life by 40%, ensuring emergency supplies are always available when needed most.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1170&auto=format&fit=crop",
    content: "Healthcare facilities across Vietnam are implementing groundbreaking blood storage technology that has revolutionized emergency care capabilities. This innovative system has already prevented critical shortages in over 15 hospitals nationwide...",
    date: "March 20, 2024",
    category: "Technology",
    readTime: "5 min read"
  };

  const articles = [
    {
      id: 2,
      title: "Ho Chi Minh City Breaks Monthly Donation Record",
      snippet: "Local communities unite to achieve unprecedented donation numbers, surpassing previous records by 35%.",
      image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?q=80&w=1170&auto=format&fit=crop",
      date: "March 18, 2024",
      category: "Community",
      readTime: "3 min read"
    },
    {
      id: 3,
      title: "Student Initiative Brings Mobile Donation Units to Universities",
      snippet: "University students across the country organize campus-wide blood drives, making donation more accessible to young donors.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop",
      date: "March 15, 2024",
      category: "Youth",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Emergency Response: How Blood Donations Saved 200 Lives",
      snippet: "During last month's traffic accident, immediate blood availability proved crucial in emergency medical response.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=1170&auto=format&fit=crop",
      date: "March 12, 2024",
      category: "Emergency",
      readTime: "6 min read"
    },
    {
      id: 5,
      title: "Corporate Partnership Program Expands Donation Reach",
      snippet: "Major corporations join forces with blood centers to establish workplace donation programs.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1126&auto=format&fit=crop",
      date: "March 10, 2024",
      category: "Partnership",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Medical Breakthrough: Artificial Blood Substitute Shows Promise",
      snippet: "Research teams make significant progress in developing synthetic blood alternatives for emergency situations.",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1170&auto=format&fit=crop",
      date: "March 8, 2024",
      category: "Research",
      readTime: "7 min read"
    },
    {
      id: 7,
      title: "Rural Communities Overcome Geographic Challenges",
      snippet: "Mobile donation units reach remote areas, ensuring equitable access to blood donation opportunities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=1170&auto=format&fit=crop",
      date: "March 5, 2024",
      category: "Rural",
      readTime: "5 min read"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'technology', label: 'Technology' },
    { value: 'community', label: 'Community' },
    { value: 'youth', label: 'Youth' },
    { value: 'emergency', label: 'Emergency' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'research', label: 'Research' },
    { value: 'rural', label: 'Rural' }
  ];

  const articlesPerPage = 6;
  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const displayedArticles = articles.slice(startIndex, startIndex + articlesPerPage);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header Container */}
      <Header />

      {/* Page Title Container */}
      <section className="py-xl bg-warm-gray/20">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10 text-center">
          <h1 className="text-heading-1 text-deep-gray font-semibold mb-s">
            News & Stories That Matter
          </h1>
          <p className="text-body-large text-gentle-gray max-w-2xl mx-auto">
            Stay informed about the latest developments in blood donation, inspiring community stories, and medical breakthroughs that save lives every day.
          </p>
        </div>
      </section>

      {/* Featured Article Container */}
      <section className="py-xl">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="bg-white rounded-lg-custom shadow-lg-custom overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-l">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-compassion-red text-white px-3 py-1 rounded-full text-caption font-medium">
                    Featured
                  </span>
                  <span className="text-caption text-gentle-gray">{featuredArticle.date}</span>
                  <span className="text-caption text-gentle-gray">•</span>
                  <span className="text-caption text-gentle-gray">{featuredArticle.readTime}</span>
                </div>
                <h1 className="text-heading-1 text-deep-gray font-semibold mb-4 leading-tight">
                  {featuredArticle.title}
                </h1>
                <p className="text-body-large text-gentle-gray mb-6 leading-relaxed">
                  {featuredArticle.subtitle}
                </p>
                <p className="text-body text-gentle-gray mb-6">
                  {featuredArticle.content}
                </p>
                <Button className="bg-compassion-red hover:bg-compassion-red/90 text-white rounded-md-custom px-l py-s">
                  Read Full Article
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Container */}
      <section className="py-m bg-warm-gray/10">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gentle-gray h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 rounded-md-custom border-gentle-gray/30"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full md:w-48 rounded-md-custom">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-caption text-gentle-gray">
              Showing {displayedArticles.length} of {articles.length} articles
            </div>
          </div>
        </div>
      </section>

      {/* Main Article Grid Container */}
      <section className="py-xl">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-l">
            {displayedArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-md-custom shadow-md-custom overflow-hidden hover:shadow-lg-custom transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-supportive-blue text-white px-3 py-1 rounded-full text-caption font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3 text-caption text-gentle-gray">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-heading-3 text-deep-gray font-medium mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-body text-gentle-gray mb-4 line-clamp-3">
                    {article.snippet}
                  </p>
                  <Button
                    variant="ghost"
                    className="text-supportive-blue hover:text-supportive-blue/80 p-0 h-auto font-medium text-body group"
                  >
                    Read More
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination Container */}
      <section className="py-m">
        <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-10">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                  className={currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index + 1}>
                  <PaginationLink
                    href="#"
                    isActive={currentPage === index + 1}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(index + 1);
                    }}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
                  }}
                  className={currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* Page Footer Container */}
      <Footer />
    </div>
  );
};

export default NewsArticles;
