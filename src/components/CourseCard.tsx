
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CourseCardProps {
  id: number;
  title: string;
  instructor: string;
  thumbnail: string;
  category: string;
  rating: number;
  students: number;
  duration: string;
  price: number;
  featured?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({
  id,
  title,
  instructor,
  thumbnail,
  category,
  rating,
  students,
  duration,
  price,
  featured = false,
}) => {
  return (
    <div 
      className={`edu-card hover-lift group h-full flex flex-col ${
        featured ? 'border-edu-blue shadow-md' : ''
      }`}
    >
      <div className="relative overflow-hidden">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <span className="edu-chip">{category}</span>
        </div>
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="edu-chip bg-edu-teal text-white">مميز</span>
          </div>
        )}
      </div>
      
      <div className="flex-1 p-5 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 text-right">{title}</h3>
        <p className="text-edu-gray text-sm mb-3 text-right">بواسطة: {instructor}</p>
        
        <div className="flex justify-between items-center mb-4 mt-auto">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm">{rating}</span>
          </div>
          <div className="flex items-center text-edu-gray text-sm">
            <div className="flex items-center mr-3">
              <Users size={14} className="ml-1" />
              <span>{students}</span>
            </div>
            <div className="flex items-center">
              <Clock size={14} className="ml-1" />
              <span>{duration}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-bold text-lg">{price === 0 ? 'مجاني' : `${price} $`}</span>
          <Link to={`/course/${id}`}>
            <Button className="btn-primary text-sm">
              عرض الدورة
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
