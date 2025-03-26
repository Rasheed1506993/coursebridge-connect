
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Lock, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const navigate = useNavigate();
  
  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    let isValid = true;
    
    if (!email) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'البريد الإلكتروني غير صالح';
      isValid = false;
    }
    
    if (!password) {
      newErrors.password = 'كلمة المرور مطلوبة';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'كلمة المرور يجب أن تكون 6 أحرف على الأقل';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Here you would handle the actual login logic
      console.log('Login attempt with:', { email, password, rememberMe });
      
      // Simulate successful login
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  };
  
  return (
    <div className="bg-white min-h-screen" dir="rtl">
      <Navbar />
      
      {/* Login Section */}
      <section className="pt-32 pb-16">
        <div className="edu-container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=2070" 
                alt="Login" 
                className="rounded-2xl shadow-lg animate-float"
              />
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-edu-dark mb-2">مرحباً بعودتك</h1>
                  <p className="text-edu-gray">
                    سجل دخولك للوصول إلى حسابك ومتابعة دوراتك
                  </p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-edu-dark font-medium mb-2">
                      البريد الإلكتروني
                    </label>
                    <div className="relative">
                      <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-edu-gray" size={18} />
                      <input 
                        type="email" 
                        id="email"
                        placeholder="أدخل بريدك الإلكتروني"
                        className={`w-full pl-4 pr-10 py-3 rounded-xl border ${
                          errors.email ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <label htmlFor="password" className="block text-edu-dark font-medium">
                        كلمة المرور
                      </label>
                      <Link to="/forgot-password" className="text-edu-blue text-sm hover:underline">
                        نسيت كلمة المرور؟
                      </Link>
                    </div>
                    <div className="relative">
                      <Lock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-edu-gray" size={18} />
                      <input 
                        type="password" 
                        id="password"
                        placeholder="أدخل كلمة المرور"
                        className={`w-full pl-4 pr-10 py-3 rounded-xl border ${
                          errors.password ? 'border-red-500' : 'border-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-edu-blue focus:border-transparent`}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <label className="flex items-center cursor-pointer">
                      <input 
                        type="checkbox"
                        className="h-4 w-4 text-edu-blue rounded border-gray-300 focus:ring-edu-blue"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                      />
                      <span className="mr-2 text-edu-gray">تذكرني</span>
                    </label>
                  </div>
                  
                  <Button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <LogIn size={18} />
                    <span>تسجيل الدخول</span>
                  </Button>
                  
                  <div className="mt-6 text-center">
                    <p className="text-edu-gray">
                      ليس لديك حساب؟{' '}
                      <Link to="/register" className="text-edu-blue hover:underline">
                        إنشاء حساب جديد
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Login;
