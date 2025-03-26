
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, Star, CheckCircle, Play, Download, MessageSquare, FileText, Book } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for a single course
const courseData = {
  id: 1,
  title: 'تطوير تطبيقات الويب باستخدام React',
  instructor: {
    id: 1,
    name: 'أحمد محمد',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070',
    specialty: 'مطور ويب',
    bio: 'خبرة أكثر من 10 سنوات في تطوير الويب ومدرب محترف',
  },
  thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070',
  category: 'برمجة',
  subcategory: 'تطوير الواجهة الأمامية',
  rating: 4.8,
  reviewsCount: 326,
  students: 1240,
  duration: '15 ساعة',
  lastUpdated: '2023-10-15',
  price: 49.99,
  description: 'دورة شاملة في تطوير تطبيقات الويب باستخدام مكتبة React.js، تبدأ من المفاهيم الأساسية وحتى تطوير تطبيقات متكاملة. ستتعلم في هذه الدورة كيفية بناء واجهات مستخدم تفاعلية وسريعة باستخدام أحدث التقنيات والممارسات في مجال تطوير الواجهات الأمامية.',
  whatYouWillLearn: [
    'أساسيات JavaScript و ES6+ اللازمة لـ React',
    'مفاهيم React الأساسية: Components, Props, State',
    'إدارة الحالة باستخدام Hooks و Context API',
    'التعامل مع واجهات المستخدم باستخدام Material UI',
    'إنشاء تطبيقات SPA باستخدام React Router',
    'التعامل مع APIs الخارجية باستخدام Axios',
    'إدارة حالة التطبيق باستخدام Redux',
    'اختبار تطبيقات React باستخدام Jest و Testing Library',
  ],
  prerequisites: [
    'معرفة أساسية بـ HTML, CSS, JavaScript',
    'فهم مبادئ البرمجة الأساسية',
    'بيئة تطوير مناسبة (Visual Studio Code أو أي محرر مشابه)',
  ],
  targetAudience: [
    'مطوري الويب المبتدئين الذين يرغبون في تعلم React',
    'مطوري الواجهات الأمامية الذين يريدون تحسين مهاراتهم',
    'المصممين الذين يريدون تعلم البرمجة',
    'الطلاب والخريجين في مجال علوم الحاسب',
  ],
  sections: [
    {
      id: 1,
      title: 'مقدمة في React.js',
      lessons: [
        {
          id: 1,
          title: 'مقدمة عن الدورة ومتطلباتها',
          duration: '10 دقائق',
          type: 'video',
          isFree: true,
        },
        {
          id: 2,
          title: 'لماذا React؟ مقارنة مع المكتبات الأخرى',
          duration: '15 دقيقة',
          type: 'video',
          isFree: true,
        },
        {
          id: 3,
          title: 'إعداد بيئة التطوير',
          duration: '20 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 4,
          title: 'مشروع تطبيقي بسيط',
          duration: '30 دقيقة',
          type: 'video',
          isFree: false,
        },
      ],
    },
    {
      id: 2,
      title: 'أساسيات React',
      lessons: [
        {
          id: 5,
          title: 'Components و JSX',
          duration: '25 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 6,
          title: 'Props و State',
          duration: '30 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 7,
          title: 'التعامل مع الأحداث',
          duration: '20 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 8,
          title: 'ملفات التمارين',
          duration: '',
          type: 'file',
          isFree: false,
        },
      ],
    },
    {
      id: 3,
      title: 'Hooks و إدارة الحالة',
      lessons: [
        {
          id: 9,
          title: 'useState و useEffect',
          duration: '35 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 10,
          title: 'useContext و useReducer',
          duration: '40 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 11,
          title: 'Custom Hooks',
          duration: '25 دقيقة',
          type: 'video',
          isFree: false,
        },
        {
          id: 12,
          title: 'اختبار الفصل',
          duration: '30 دقيقة',
          type: 'quiz',
          isFree: false,
        },
      ],
    },
  ],
  reviews: [
    {
      id: 1,
      user: 'محمد علي',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974',
      rating: 5,
      date: '2023-09-15',
      comment: 'دورة ممتازة جداً وشاملة، استفدت منها كثيراً في تطوير مهاراتي في React. الشرح واضح والتطبيقات العملية مفيدة جداً.',
    },
    {
      id: 2,
      user: 'سارة أحمد',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974',
      rating: 4,
      date: '2023-08-22',
      comment: 'محتوى الدورة قيم ومنظم بشكل جيد. المدرب يشرح بأسلوب سلس وواضح. أتمنى لو كان هناك المزيد من التمارين العملية.',
    },
    {
      id: 3,
      user: 'خالد محمود',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
      rating: 5,
      date: '2023-07-30',
      comment: 'من أفضل الدورات التي أخذتها في مجال تطوير الويب. الشرح عميق ومفصل ويغطي كل ما يحتاجه المطور للعمل بـ React.',
    },
  ],
  faqs: [
    {
      question: 'هل الدورة مناسبة للمبتدئين تماماً؟',
      answer: 'الدورة تتطلب معرفة أساسية بـ HTML و CSS و JavaScript. إذا كنت مبتدئاً تماماً في البرمجة، فننصح بأخذ دورة مبادئ البرمجة أولاً.',
    },
    {
      question: 'هل سأحصل على شهادة بعد إكمال الدورة؟',
      answer: 'نعم، ستحصل على شهادة إتمام بعد إكمال جميع الدروس والاختبارات بنجاح.',
    },
    {
      question: 'هل يمكنني الوصول إلى المحتوى مدى الحياة؟',
      answer: 'نعم، بمجرد شراء الدورة ستتمكن من الوصول إلى محتواها مدى الحياة وكذلك أي تحديثات مستقبلية عليها.',
    },
    {
      question: 'كيف يمكنني التواصل مع المدرب؟',
      answer: 'يمكنك طرح أسئلتك في قسم النقاشات الخاص بكل درس، وسيقوم المدرب بالرد عليها في أقرب وقت ممكن.',
    },
  ],
};

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Toggle section expansion
  const toggleSection = (sectionId: number) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter(id => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };
  
  const totalLessons = courseData.sections.reduce((total, section) => total + section.lessons.length, 0);
  
  // Calculate total course duration
  const calculateTotalDuration = () => {
    let totalMinutes = 0;
    courseData.sections.forEach(section => {
      section.lessons.forEach(lesson => {
        if (lesson.type === 'video' && lesson.duration) {
          const minutes = parseInt(lesson.duration.split(' ')[0]);
          if (!isNaN(minutes)) {
            totalMinutes += minutes;
          }
        }
      });
    });
    
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} ساعة ${minutes > 0 ? `و ${minutes} دقيقة` : ''}`;
  };
  
  return (
    <div className="bg-white min-h-screen" dir="rtl">
      <Navbar />
      
      {/* Course Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-edu-light-blue to-white">
        <div className="edu-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <nav className="flex text-sm mb-4" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3 flex-wrap">
                  <li className="inline-flex items-center">
                    <Link to="/" className="text-edu-gray hover:text-edu-blue">الرئيسية</Link>
                    <span className="mx-2 text-edu-gray">/</span>
                  </li>
                  <li className="inline-flex items-center">
                    <Link to="/courses" className="text-edu-gray hover:text-edu-blue">الدورات</Link>
                    <span className="mx-2 text-edu-gray">/</span>
                  </li>
                  <li className="inline-flex items-center">
                    <Link to={`/courses?category=${courseData.category}`} className="text-edu-gray hover:text-edu-blue">{courseData.category}</Link>
                    <span className="mx-2 text-edu-gray">/</span>
                  </li>
                  <li>
                    <span className="text-edu-gray">{courseData.title}</span>
                  </li>
                </ol>
              </nav>
              
              <h1 className="text-3xl md:text-4xl font-bold text-edu-dark mb-4">{courseData.title}</h1>
              
              <p className="text-edu-gray text-lg mb-6">{courseData.description}</p>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                    <img 
                      src={courseData.instructor.avatar} 
                      alt={courseData.instructor.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-edu-gray">المدرب</p>
                    <p className="font-medium">{courseData.instructor.name}</p>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-edu-gray">التصنيف</p>
                  <p className="font-medium">{courseData.category} / {courseData.subcategory}</p>
                </div>
                
                <div className="flex items-center">
                  <div className="flex items-center text-amber-500 mr-1">
                    <Star size={18} fill="currentColor" />
                    <span className="font-medium ml-1">{courseData.rating}</span>
                  </div>
                  <span className="text-edu-gray">({courseData.reviewsCount} تقييم)</span>
                </div>
                
                <div>
                  <p className="text-sm text-edu-gray">آخر تحديث</p>
                  <p className="font-medium">{courseData.lastUpdated}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Users size={18} className="text-edu-blue ml-2" />
                  <span>{courseData.students} طالب</span>
                </div>
                
                <div className="flex items-center">
                  <Clock size={18} className="text-edu-blue ml-2" />
                  <span>{calculateTotalDuration()}</span>
                </div>
                
                <div className="flex items-center">
                  <FileText size={18} className="text-edu-blue ml-2" />
                  <span>{totalLessons} درس</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <div className="relative">
                  <img 
                    src={courseData.thumbnail} 
                    alt={courseData.title} 
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 p-4 rounded-full transition-all duration-300">
                      <Play size={24} className="text-white" fill="white" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-3xl font-bold">${courseData.price}</span>
                  </div>
                  
                  <Button className="btn-primary w-full mb-4">
                    سجل في الدورة
                  </Button>
                  
                  <Button className="btn-secondary w-full">
                    أضف إلى السلة
                  </Button>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <h3 className="font-bold mb-4">تتضمن هذه الدورة:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <Clock size={16} className="text-edu-gray ml-2" />
                        <span>{calculateTotalDuration()} من الفيديو</span>
                      </li>
                      <li className="flex items-center">
                        <FileText size={16} className="text-edu-gray ml-2" />
                        <span>{totalLessons} درس</span>
                      </li>
                      <li className="flex items-center">
                        <Download size={16} className="text-edu-gray ml-2" />
                        <span>موارد قابلة للتنزيل</span>
                      </li>
                      <li className="flex items-center">
                        <MessageSquare size={16} className="text-edu-gray ml-2" />
                        <span>وصول كامل للمناقشات</span>
                      </li>
                      <li className="flex items-center">
                        <Book size={16} className="text-edu-gray ml-2" />
                        <span>وصول مدى الحياة</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <button className="text-edu-blue hover:underline w-full flex justify-center">
                      مشاركة الدورة
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Course Content Tabs */}
      <section className="py-12">
        <div className="edu-container">
          <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
              <TabsTrigger value="curriculum">محتوى الدورة</TabsTrigger>
              <TabsTrigger value="instructor">المدرب</TabsTrigger>
              <TabsTrigger value="reviews">التقييمات</TabsTrigger>
            </TabsList>
            
            {/* Overview Tab */}
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-6">ماذا ستتعلم</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {courseData.whatYouWillLearn.map((item, index) => (
                        <div key={index} className="flex">
                          <CheckCircle size={20} className="text-edu-teal mt-1 ml-2 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-6">المتطلبات</h2>
                    <ul className="space-y-2">
                      {courseData.prerequisites.map((prereq, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-edu-blue ml-2">•</span>
                          <span>{prereq}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-6">الفئة المستهدفة</h2>
                    <ul className="space-y-2">
                      {courseData.targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-edu-blue ml-2">•</span>
                          <span>{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div>
                  <div className="glass-card p-6">
                    <h2 className="text-xl font-bold mb-6">الأسئلة الشائعة</h2>
                    <div className="space-y-6">
                      {courseData.faqs.map((faq, index) => (
                        <div key={index}>
                          <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                          <p className="text-edu-gray">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Curriculum Tab */}
            <TabsContent value="curriculum" className="animate-fade-in">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">محتوى الدورة</h2>
                <p className="text-edu-gray">
                  {courseData.sections.length} فصل • {totalLessons} درس • {calculateTotalDuration()} إجمالي المدة
                </p>
              </div>
              
              <div className="space-y-4">
                {courseData.sections.map((section) => (
                  <div key={section.id} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div 
                      className="bg-edu-light-gray p-4 flex justify-between items-center cursor-pointer"
                      onClick={() => toggleSection(section.id)}
                    >
                      <div className="flex items-center">
                        <h3 className="font-medium">{section.title}</h3>
                        <span className="text-edu-gray text-sm mr-3">
                          {section.lessons.length} دروس • 
                          {section.lessons.reduce((total, lesson) => {
                            if (lesson.type === 'video' && lesson.duration) {
                              const minutes = parseInt(lesson.duration.split(' ')[0]);
                              return !isNaN(minutes) ? total + minutes : total;
                            }
                            return total;
                          }, 0)} دقيقة
                        </span>
                      </div>
                      <button className={`transform transition-transform duration-300 ${
                        expandedSections.includes(section.id) ? 'rotate-180' : ''
                      }`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                      </button>
                    </div>
                    
                    {expandedSections.includes(section.id) && (
                      <div className="p-4 bg-white space-y-2 animate-fade-in">
                        {section.lessons.map((lesson) => (
                          <div 
                            key={lesson.id} 
                            className="flex justify-between items-center p-3 hover:bg-edu-light-gray rounded-lg transition-all"
                          >
                            <div className="flex items-center">
                              {lesson.type === 'video' && <Play size={16} className="text-edu-gray ml-3" />}
                              {lesson.type === 'file' && <FileText size={16} className="text-edu-gray ml-3" />}
                              {lesson.type === 'quiz' && <FileText size={16} className="text-edu-gray ml-3" />}
                              <span className={`${lesson.isFree ? 'text-edu-dark' : 'text-edu-gray'}`}>{lesson.title}</span>
                              {lesson.isFree && (
                                <span className="mr-2 bg-edu-teal bg-opacity-20 text-edu-teal text-xs py-1 px-2 rounded-full">
                                  مجاني
                                </span>
                              )}
                            </div>
                            <div className="text-edu-gray text-sm">
                              {lesson.duration}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            
            {/* Instructor Tab */}
            <TabsContent value="instructor" className="animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-52 flex-shrink-0">
                  <img 
                    src={courseData.instructor.avatar} 
                    alt={courseData.instructor.name} 
                    className="w-full rounded-xl object-cover aspect-square"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{courseData.instructor.name}</h2>
                  <p className="text-edu-teal mb-4">{courseData.instructor.specialty}</p>
                  <div className="flex gap-6 mb-6">
                    <div>
                      <p className="text-2xl font-bold">20+</p>
                      <p className="text-edu-gray">دورة</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">15k+</p>
                      <p className="text-edu-gray">طالب</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">4.8</p>
                      <p className="text-edu-gray">تقييم</p>
                    </div>
                  </div>
                  <p className="text-edu-gray mb-6">
                    {courseData.instructor.bio} مع خبرة تزيد عن 10 سنوات في مجال تطوير تطبيقات الويب، قمت بتدريب أكثر من 15,000 طالب على منصات تعليمية مختلفة. عملت سابقاً في شركات كبرى مثل جوجل وأمازون، وأقوم حالياً بالعمل كمستشار مستقل ومدرب محترف.
                    
                    أمتلك شهادات معتمدة في تطوير الويب والتصميم، وأسعى دائماً لتقديم محتوى تعليمي عالي الجودة يجمع بين الأسس النظرية والتطبيقات العملية. أؤمن بأن أفضل طريقة للتعلم هي من خلال العمل على مشاريع حقيقية، لذلك تركز دوراتي على الممارسة العملية والمشاريع التطبيقية.
                  </p>
                  <Link to={`/instructor/${courseData.instructor.id}`}>
                    <Button className="btn-secondary">
                      عرض الملف الشخصي
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
            
            {/* Reviews Tab */}
            <TabsContent value="reviews" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">تقييمات الطلاب</h2>
                  
                  <div className="space-y-6">
                    {courseData.reviews.map((review) => (
                      <div key={review.id} className="p-6 border border-gray-200 rounded-xl">
                        <div className="flex justify-between mb-4">
                          <div className="flex items-center">
                            <img 
                              src={review.avatar} 
                              alt={review.user} 
                              className="w-10 h-10 rounded-full object-cover ml-3"
                            />
                            <div>
                              <h4 className="font-medium">{review.user}</h4>
                              <p className="text-edu-gray text-sm">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                size={16} 
                                fill={i < review.rating ? 'currentColor' : 'none'} 
                                className="ml-1"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-edu-dark">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="glass-card p-6">
                    <h3 className="text-xl font-bold mb-4">التقييم العام</h3>
                    <div className="flex items-center mb-6">
                      <div className="text-4xl font-bold ml-4">{courseData.rating}</div>
                      <div>
                        <div className="flex text-amber-500 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={20} 
                              fill={i < Math.floor(courseData.rating) ? 'currentColor' : 'none'} 
                              className="ml-1"
                            />
                          ))}
                        </div>
                        <p className="text-edu-gray text-sm">{courseData.reviewsCount} تقييم</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        // Fake percentages for the rating bars
                        const percentage = rating === 5 ? 75 : 
                                        rating === 4 ? 18 : 
                                        rating === 3 ? 5 : 
                                        rating === 2 ? 1.5 : 0.5;
                        
                        return (
                          <div key={rating} className="flex items-center">
                            <div className="flex items-center ml-2">
                              <span className="ml-1">{rating}</span>
                              <Star size={14} className="text-amber-500" fill="currentColor" />
                            </div>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-amber-500 rounded-full" 
                                style={{ width: `${percentage}%` }}
                              ></div>
                            </div>
                            <span className="mr-2 text-sm text-edu-gray w-10">{percentage}%</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="glass-card p-6 mt-6">
                    <h3 className="text-xl font-bold mb-4">أضف تقييمك</h3>
                    <p className="text-edu-gray mb-4">شارك رأيك في هذه الدورة وساعد الطلاب الآخرين</p>
                    <Button className="w-full">
                      كتابة تقييم
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default CourseDetail;
