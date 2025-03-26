
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface InstructorCardProps {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
  coursesCount: number;
  studentsCount: number;
  bio: string;
}

const InstructorCard: React.FC<InstructorCardProps> = ({
  id,
  name,
  avatar,
  specialty,
  coursesCount,
  studentsCount,
  bio,
}) => {
  return (
    <div className="glass-card p-6 hover-lift text-center">
      <div className="relative mx-auto w-24 h-24 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-full h-full object-cover rounded-full border-2 border-edu-light-blue"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-edu-teal font-medium text-sm mb-2">{specialty}</p>
      <p className="text-edu-gray text-sm mb-4 line-clamp-2">{bio}</p>
      
      <div className="flex justify-center gap-4 text-sm text-edu-gray mb-4">
        <div className="flex items-center">
          <BookOpen size={14} className="mr-1" />
          <span>{coursesCount} دورة</span>
        </div>
        <div>
          <span>{studentsCount}+ طالب</span>
        </div>
      </div>
      
      <Link to={`/instructor/${id}`}>
        <button className="w-full btn-secondary text-sm">
          عرض الملف الشخصي
        </button>
      </Link>
    </div>
  );
};

export default InstructorCard;
