
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUp, BookOpen, Users, Calendar } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import InstructorCard from '@/components/InstructorCard';

// Temporary mock data
const featuredCourses = [
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
    featured: true,
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
    featured: false,
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
    featured: false,
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
    featured: true,
  },
];

const instructors = [
  {
    id: 1,
    name: 'أحمد محمد',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070',
    specialty: 'مطور ويب',
    coursesCount: 12,
    studentsCount: 3500,
    bio: 'خبرة أكثر من 10 سنوات في تطوير الويب ومدرب محترف',
  },
  {
    id: 2,
    name: 'سارة أحمد',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    specialty: 'مصممة جرافيك',
    coursesCount: 8,
    studentsCount: 2800,
    bio: 'مصممة محترفة ومدربة معتمدة في برامج التصميم',
  },
  {
    id: 3,
    name: 'محمد علي',
    avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034',
    specialty: 'مدرس لغة إنجليزية',
    coursesCount: 15,
    studentsCount: 4200,
    bio: 'حاصل على شهادات دولية في تدريس اللغة الإنجليزية',
  },
  {
    id: 4,
    name: 'نورا خالد',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974',
    specialty: 'خبيرة علوم بيانات',
    coursesCount: 5,
    studentsCount: 1800,
    bio: 'باحثة وخبيرة في مجال علوم البيانات والذكاء الاصطناعي',
  },
];

const categories = [
  { name: 'برمجة', icon: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069', count: 120 },
  { name: 'تصميم', icon: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071', count: 85 },
  { name: 'لغات', icon: 'https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070', count: 65 },
  { name: 'أعمال', icon: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071', count: 95 },
];

const stats = [
  { label: 'دورة تدريبية', value: '500+', icon: BookOpen },
  { label: 'طالب مسجل', value: '25,000+', icon: Users },
  { label: 'سنوات خبرة', value: '10+', icon: Calendar },
];

const Index: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-white min-h-screen" dir="rtl">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-edu-light-blue to-white">
        <div className="edu-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 text-center md:text-right">
              <span className="edu-chip mb-4 animate-fade-in">منصة تعليمية متكاملة</span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-edu-dark mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
                ابدأ رحلة التعلم <br />
                <span className="bg-gradient-to-r from-edu-blue to-edu-teal bg-clip-text text-transparent">بأفضل المهارات</span>
              </h1>
              <p className="text-edu-gray text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                منصة تعليمية متكاملة توفر دورات عالية الجودة بأيدي أفضل المدربين، صممت لتناسب جميع المستويات وتلبي احتياجات سوق العمل.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Link to="/courses">
                  <Button className="btn-primary text-base">
                    تصفح الدورات
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="btn-secondary text-base">
                    تعرف علينا
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 animate-float">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070" 
                alt="Education Platform" 
                className="rounded-2xl shadow-xl mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Search Section */}
      <section className="py-10">
        <div className="edu-container max-w-4xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-6 -mt-20 relative z-10 border border-gray-100">
            <form className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-edu-gray" size={20} />
                <input 
                  type="text" 
                  placeholder="ابحث عن دورة..." 
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent"
                />
              </div>
              <Button className="btn-primary md:w-auto flex-shrink-0">
                ابحث الآن
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <section className="py-16">
        <div className="edu-container">
          <div className="text-center mb-12">
            <span className="edu-chip mb-4">تصنيفات متنوعة</span>
            <h2 className="text-3xl md:text-4xl font-bold text-edu-dark mb-6">استكشف مجالات التعلم</h2>
            <p className="text-edu-gray max-w-3xl mx-auto">
              اختر من بين مجموعة واسعة من التصنيفات التعليمية لتطوير مهاراتك في المجال الذي تفضله
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link to={`/courses?category=${category.name}`} key={index}>
                <div className="glass-card hover-lift overflow-hidden relative h-52 group">
                  <img 
                    src={category.icon} 
                    alt={category.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-edu-dark to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm">{category.count}+ دورة</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Courses Section */}
      <section className="py-16 bg-edu-light-gray">
        <div className="edu-container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <span className="edu-chip mb-4">دورات مميزة</span>
              <h2 className="text-3xl md:text-4xl font-bold text-edu-dark">أفضل الدورات المتاحة</h2>
            </div>
            <Link to="/courses" className="mt-4 md:mt-0">
              <Button className="btn-secondary">
                عرض جميع الدورات
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16">
        <div className="edu-container">
          <div className="bg-gradient-to-r from-edu-blue to-edu-teal rounded-2xl p-12 text-white">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">أرقام تتحدث عنا</h2>
              <p className="max-w-2xl mx-auto opacity-90">
                منصتنا في أرقام تعكس جودة المحتوى التعليمي وثقة المتعلمين
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    <stat.icon size={28} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</h3>
                  <p className="opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Instructors Section */}
      <section className="py-16">
        <div className="edu-container">
          <div className="text-center mb-12">
            <span className="edu-chip mb-4">مدربون متميزون</span>
            <h2 className="text-3xl md:text-4xl font-bold text-edu-dark mb-6">تعلم على يد أفضل المدربين</h2>
            <p className="text-edu-gray max-w-3xl mx-auto">
              نخبة من المدربين المحترفين ذوي الخبرة العالية في مجالاتهم لضمان تجربة تعليمية متميزة
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor.id} {...instructor} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-edu-light-blue">
        <div className="edu-container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-edu-dark mb-6">ابدأ رحلة التعلم الآن</h2>
            <p className="text-edu-gray text-lg mb-8">
              انضم إلى آلاف المتعلمين واكتشف مئات الدورات عالية الجودة. سجل الآن واحصل على خصم 20% على الدورة الأولى.
            </p>
            <Link to="/register">
              <Button className="btn-primary text-lg px-8 py-4">
                سجل مجاناً
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Scroll to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 bg-edu-blue text-white p-3 rounded-full shadow-md transition-opacity duration-300 z-30 ${
          scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </button>
      
      <Footer />
    </div>
  );
};

export default Index;
