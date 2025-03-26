
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MessageSquare, Users, Clock, Flag, Plus } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock data for forums
const categories = [
  { id: 1, name: 'برمجة', icon: '💻', topics: 150, posts: 1250 },
  { id: 2, name: 'تصميم', icon: '🎨', topics: 120, posts: 980 },
  { id: 3, name: 'أعمال', icon: '📊', topics: 95, posts: 760 },
  { id: 4, name: 'لغات', icon: '🌐', topics: 85, posts: 680 },
  { id: 5, name: 'علوم البيانات', icon: '📈', topics: 75, posts: 570 },
  { id: 6, name: 'نقاشات عامة', icon: '💬', topics: 200, posts: 1800 },
];

const recentPosts = [
  {
    id: 1,
    title: 'كيف يمكنني تحسين أداء تطبيق React؟',
    category: 'برمجة',
    author: {
      name: 'أحمد محمد',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070',
    },
    date: '2023-10-15',
    time: '10:30',
    replies: 12,
    views: 230,
    isSticky: true,
  },
  {
    id: 2,
    title: 'أفضل أدوات تصميم واجهات المستخدم لعام 2023',
    category: 'تصميم',
    author: {
      name: 'سارة أحمد',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    },
    date: '2023-10-14',
    time: '15:45',
    replies: 8,
    views: 185,
    isSticky: false,
  },
  {
    id: 3,
    title: 'نصائح لتعلم اللغة الإنجليزية بسرعة',
    category: 'لغات',
    author: {
      name: 'علي حسن',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
    },
    date: '2023-10-12',
    time: '09:15',
    replies: 15,
    views: 310,
    isSticky: false,
  },
  {
    id: 4,
    title: 'مقدمة في علم البيانات وتحليل البيانات',
    category: 'علوم البيانات',
    author: {
      name: 'نورا خالد',
      avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974',
    },
    date: '2023-10-10',
    time: '14:20',
    replies: 6,
    views: 145,
    isSticky: false,
  },
  {
    id: 5,
    title: 'كيفية إنشاء خطة عمل ناجحة لمشروعك',
    category: 'أعمال',
    author: {
      name: 'محمد علي',
      avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034',
    },
    date: '2023-10-08',
    time: '11:50',
    replies: 9,
    views: 220,
    isSticky: false,
  },
];

const popularTopics = [
  {
    id: 1,
    title: 'نقاش: مستقبل الذكاء الاصطناعي',
    replies: 45,
  },
  {
    id: 2,
    title: 'كيفية بناء محفظة أعمال احترافية',
    replies: 32,
  },
  {
    id: 3,
    title: 'أفضل لغات البرمجة للبدء بها في 2023',
    replies: 28,
  },
  {
    id: 4,
    title: 'تجارب الطلاب مع التعلم عن بعد',
    replies: 26,
  },
  {
    id: 5,
    title: 'نصائح للمصممين المبتدئين',
    replies: 24,
  },
];

const activeUsers = [
  {
    id: 1,
    name: 'أحمد محمد',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070',
    posts: 120,
  },
  {
    id: 2,
    name: 'سارة أحمد',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961',
    posts: 95,
  },
  {
    id: 3,
    name: 'علي حسن',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974',
    posts: 82,
  },
  {
    id: 4,
    name: 'نورا خالد',
    avatar: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1974',
    posts: 76,
  },
  {
    id: 5,
    name: 'محمد علي',
    avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=2034',
    posts: 68,
  },
];

const Forums: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <div className="bg-white min-h-screen" dir="rtl">
      <Navbar />
      
      {/* Header */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 bg-gradient-to-b from-edu-light-blue to-white">
        <div className="edu-container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-edu-dark mb-6">منتديات النقاش</h1>
            <p className="text-edu-gray text-lg mb-8">
              شارك في النقاشات، اطرح أسئلتك، وتبادل الخبرات مع مجتمع المتعلمين
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="relative w-full sm:w-3/4">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-edu-gray" size={20} />
                <input 
                  type="text" 
                  placeholder="ابحث في المنتديات..." 
                  className="w-full pl-4 pr-10 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Link to="/forums/new-topic">
                <Button className="btn-primary text-base w-full sm:w-auto flex items-center gap-2">
                  <Plus size={18} />
                  <span>موضوع جديد</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Forums Content */}
      <section className="py-12">
        <div className="edu-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Categories */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6">أقسام المنتدى</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <Link key={category.id} to={`/forums/category/${category.id}`}>
                      <div className="glass-card p-6 hover-lift flex items-center">
                        <div className="w-12 h-12 flex items-center justify-center text-2xl bg-edu-light-blue rounded-xl ml-4">
                          {category.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{category.name}</h3>
                          <p className="text-edu-gray text-sm">
                            {category.topics} مواضيع • {category.posts} مشاركة
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div>
                <h2 className="text-2xl font-bold mb-6">آخر المشاركات</h2>
                <div className="space-y-4">
                  {recentPosts.map((post) => (
                    <Link key={post.id} to={`/forums/post/${post.id}`}>
                      <div className={`p-6 rounded-xl border ${post.isSticky ? 'border-edu-blue bg-edu-light-blue bg-opacity-30' : 'border-gray-200 bg-white'} hover:border-edu-blue transition-all duration-300`}>
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-lg">
                              {post.isSticky && (
                                <span className="inline-flex items-center ml-2 bg-edu-blue text-white text-xs py-1 px-2 rounded-full">
                                  <Flag size={12} className="ml-1" />
                                  مثبت
                                </span>
                              )}
                              {post.title}
                            </h3>
                            <span className="edu-chip text-xs mt-2">{post.category}</span>
                          </div>
                          <div className="flex items-center">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name}
                              className="w-8 h-8 rounded-full object-cover border border-gray-200 ml-2"
                            />
                            <div className="text-sm">
                              <p className="font-medium">{post.author.name}</p>
                              <p className="text-edu-gray text-xs">{post.date}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center text-edu-gray text-sm">
                          <div className="flex items-center ml-4">
                            <MessageSquare size={14} className="ml-1" />
                            <span>{post.replies} ردود</span>
                          </div>
                          <div className="flex items-center">
                            <Users size={14} className="ml-1" />
                            <span>{post.views} مشاهدة</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-center">
                  <Link to="/forums/all-posts">
                    <Button className="btn-secondary">
                      عرض المزيد من المشاركات
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <div>
              {/* Popular Topics */}
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">المواضيع الشائعة</h3>
                <div className="space-y-3">
                  {popularTopics.map((topic) => (
                    <Link key={topic.id} to={`/forums/topic/${topic.id}`}>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100 hover:text-edu-blue transition-colors">
                        <p className="font-medium">{topic.title}</p>
                        <span className="text-sm text-edu-gray">{topic.replies} ردود</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Active Users */}
              <div className="glass-card p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">الأعضاء النشطون</h3>
                <div className="space-y-4">
                  {activeUsers.map((user) => (
                    <Link key={user.id} to={`/profile/${user.id}`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img 
                            src={user.avatar} 
                            alt={user.name}
                            className="w-10 h-10 rounded-full object-cover border border-gray-200 ml-3"
                          />
                          <p className="font-medium">{user.name}</p>
                        </div>
                        <span className="text-sm text-edu-gray">{user.posts} مشاركة</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Forum Stats */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4">إحصائيات المنتدى</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-edu-gray">إجمالي المواضيع:</span>
                    <span className="font-medium">725</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-edu-gray">إجمالي المشاركات:</span>
                    <span className="font-medium">6,487</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-edu-gray">عدد الأعضاء:</span>
                    <span className="font-medium">2,154</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-edu-gray">آخر عضو مسجل:</span>
                    <Link to="/profile/new-user" className="font-medium text-edu-blue">سمير أحمد</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Forums;
