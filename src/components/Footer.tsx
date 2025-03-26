
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-edu-dark text-white py-12 mt-20">
      <div className="edu-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">منصة التعليم</h3>
            <p className="text-edu-light-gray mb-4">
              منصة تعليمية متكاملة تهدف إلى توفير محتوى تعليمي عالي الجودة لجميع الطلاب
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-edu-teal transition-colors">الرئيسية</Link></li>
              <li><Link to="/courses" className="hover:text-edu-teal transition-colors">الدورات</Link></li>
              <li><Link to="/forums" className="hover:text-edu-teal transition-colors">المنتديات</Link></li>
              <li><Link to="/about" className="hover:text-edu-teal transition-colors">من نحن</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">المساعدة</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-edu-teal transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link to="/contact" className="hover:text-edu-teal transition-colors">تواصل معنا</Link></li>
              <li><Link to="/privacy" className="hover:text-edu-teal transition-colors">سياسة الخصوصية</Link></li>
              <li><Link to="/terms" className="hover:text-edu-teal transition-colors">شروط الاستخدام</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-xl font-semibold mb-4">اتصل بنا</h3>
            <address className="not-italic">
              <p className="mb-2">info@eduplatform.com</p>
              <p className="mb-2">+123 456 7890</p>
              <p>شارع التعليم، المدينة، البلد</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} منصة التعليم. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
