
import React, { useState } from 'react';
import { Search, Filter, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';

// Mock data for courses
const allCourses = [
  {
    id: 1,
    title: 'تطوير تطبيقات الويب باستخدام React',
    instructor: 'أحمد محمد',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070',
    category: 'برمجة',
    rating: 4.8,
    students: 1240,
    duration: '15 ساعة',
    price: 49.99,
  },
  {
    id: 2,
    title: 'أساسيات التصميم الجرافيكي للمبتدئين',
    instructor: 'سارة أحمد',
    thumbnail: 'https://images.unsplash.com/photo-1626785774625-ddcddc3445e9?q=80&w=2071',
    category: 'تصميم',
    rating: 4.6,
    students: 890,
    duration: '12 ساعة',
    price: 39.99,
  },
  {
    id: 3,
    title: 'اللغة الإنجليزية - المستوى المتقدم',
    instructor: 'علي حسن',
    thumbnail: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071',
    category: 'لغات',
    rating: 4.9,
    students: 1560,
    duration: '20 ساعة',
    price: 59.99,
  },
  {
    id: 4,
    title: 'مبادئ علم البيانات وتحليل البيانات',
    instructor: 'نورا خالد',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070',
    category: 'علوم البيانات',
    rating: 4.7,
    students: 1100,
    duration: '18 ساعة',
    price: 69.99,
  },
  {
    id: 5,
    title: 'تطوير تطبيقات الهاتف باستخدام Flutter',
    instructor: 'محمد خالد',
    thumbnail: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974',
    category: 'برمجة',
    rating: 4.8,
    students: 920,
    duration: '16 ساعة',
    price: 54.99,
  },
  {
    id: 6,
    title: 'أساسيات التسويق الرقمي',
    instructor: 'ريم أحمد',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070',
    category: 'أعمال',
    rating: 4.5,
    students: 1350,
    duration: '10 ساعة',
    price: 44.99,
  },
  {
    id: 7,
    title: 'تعلم اللغة الفرنسية للمبتدئين',
    instructor: 'ليلى حسن',
    thumbnail: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?q=80&w=2070',
    category: 'لغات',
    rating: 4.6,
    students: 780,
    duration: '25 ساعة',
    price: 49.99,
  },
  {
    id: 8,
    title: 'تصميم واجهات المستخدم UI/UX',
    instructor: 'سعد محمود',
    thumbnail: 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070',
    category: 'تصميم',
    rating: 4.9,
    students: 1600,
    duration: '22 ساعة',
    price: 64.99,
  },
];

// Filter options
const categories = ['الكل', 'برمجة', 'تصميم', 'لغات', 'أعمال', 'علوم البيانات'];
const priceRanges = ['الكل', 'مجاني', 'أقل من $30', '$30 - $60', 'أكثر من $60'];
const durations = ['الكل', 'أقل من 10 ساعات', '10-15 ساعة', '15-20 ساعة', 'أكثر من 20 ساعة'];

const Courses: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [selectedPrice, setSelectedPrice] = useState('الكل');
  const [selectedDuration, setSelectedDuration] = useState('الكل');
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter courses based on selected filters
  const filteredCourses = allCourses.filter(course => {
    // Search term filter
    if (searchTerm && !course.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Category filter
    if (selectedCategory !== 'الكل' && course.category !== selectedCategory) {
      return false;
    }
    
    // Price filter
    if (selectedPrice !== 'الكل') {
      if (selectedPrice === 'مجاني' && course.price !== 0) {
        return false;
      } else if (selectedPrice === 'أقل من $30' && (course.price >= 30 || course.price === 0)) {
        return false;
      } else if (selectedPrice === '$30 - $60' && (course.price < 30 || course.price > 60)) {
        return false;
      } else if (selectedPrice === 'أكثر من $60' && course.price <= 60) {
        return false;
      }
    }
    
    // Duration filter
    if (selectedDuration !== 'الكل') {
      const hours = parseInt(course.duration.split(' ')[0]);
      if (selectedDuration === 'أقل من 10 ساعات' && hours >= 10) {
        return false;
      } else if (selectedDuration === '10-15 ساعة' && (hours < 10 || hours > 15)) {
        return false;
      } else if (selectedDuration === '15-20 ساعة' && (hours < 15 || hours > 20)) {
        return false;
      } else if (selectedDuration === 'أكثر من 20 ساعة' && hours <= 20) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      <Navbar />
      
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-edu-light-blue to-white">
        <div className="edu-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-edu-dark mb-6">تصفح الدورات</h1>
            <p className="text-edu-gray text-lg mb-8">
              استكشف مجموعة متنوعة من الدورات عالية الجودة في مختلف المجالات لتطوير مهاراتك
            </p>
          </div>
        </div>
      </section>
      
      {/* Search and Filters */}
      <section className="py-6">
        <div className="edu-container">
          <div className="bg-white shadow-md rounded-xl p-6 -mt-12 relative z-10 border border-gray-100">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="w-full md:w-2/3 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-edu-gray" size={20} />
                <input 
                  type="text" 
                  placeholder="ابحث عن دورة..." 
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                className="w-full md:w-auto flex items-center gap-2"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} />
                <span>تصفية النتائج</span>
              </Button>
            </div>
            
            {/* Filters */}
            {showFilters && (
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-gray-200 animate-fade-in">
                <div>
                  <h3 className="font-medium mb-3 text-edu-dark">التصنيف</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <button 
                          className={`w-5 h-5 rounded-full border ${selectedCategory === category ? 'bg-edu-blue border-edu-blue' : 'border-gray-300'} flex items-center justify-center mr-2`}
                          onClick={() => setSelectedCategory(category)}
                        >
                          {selectedCategory === category && <Check size={12} className="text-white" />}
                        </button>
                        <span className="text-edu-gray">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-edu-dark">السعر</h3>
                  <div className="space-y-2">
                    {priceRanges.map((price, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <button 
                          className={`w-5 h-5 rounded-full border ${selectedPrice === price ? 'bg-edu-blue border-edu-blue' : 'border-gray-300'} flex items-center justify-center mr-2`}
                          onClick={() => setSelectedPrice(price)}
                        >
                          {selectedPrice === price && <Check size={12} className="text-white" />}
                        </button>
                        <span className="text-edu-gray">{price}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3 text-edu-dark">المدة</h3>
                  <div className="space-y-2">
                    {durations.map((duration, index) => (
                      <label key={index} className="flex items-center cursor-pointer">
                        <button 
                          className={`w-5 h-5 rounded-full border ${selectedDuration === duration ? 'bg-edu-blue border-edu-blue' : 'border-gray-300'} flex items-center justify-center mr-2`}
                          onClick={() => setSelectedDuration(duration)}
                        >
                          {selectedDuration === duration && <Check size={12} className="text-white" />}
                        </button>
                        <span className="text-edu-gray">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Courses Grid */}
      <section className="py-12">
        <div className="edu-container">
          <h2 className="text-2xl font-bold text-edu-dark mb-8">
            {filteredCourses.length} دورة متاحة
          </h2>
          
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-edu-gray text-lg">لا توجد دورات متاحة بهذه المعايير</p>
              <Button 
                className="mt-4"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('الكل');
                  setSelectedPrice('الكل');
                  setSelectedDuration('الكل');
                }}
              >
                إعادة ضبط الفلاتر
              </Button>
            </div>
          )}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Courses;
