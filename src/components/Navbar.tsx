
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white bg-opacity-80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="edu-container py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-edu-blue to-edu-teal bg-clip-text text-transparent">EduPlatform</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className="nav-link">الرئيسية</Link>
            <Link to="/courses" className="nav-link">الدورات</Link>
            <Link to="/forums" className="nav-link">المنتديات</Link>
            <Link to="/login" className="nav-link ml-6">
              <Button className="btn-primary flex items-center gap-2">
                <LogIn size={18} />
                <span>تسجيل الدخول</span>
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 text-edu-dark focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-slide-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
              <Link to="/courses" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>الدورات</Link>
              <Link to="/forums" className="nav-link py-2" onClick={() => setIsMenuOpen(false)}>المنتديات</Link>
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button className="btn-primary w-full mt-2 flex items-center justify-center gap-2">
                  <LogIn size={18} />
                  <span>تسجيل الدخول</span>
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
