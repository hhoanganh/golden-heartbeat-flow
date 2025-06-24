import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, Calendar, Heart, Bell } from 'lucide-react'; // Import icons used in menuItems

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface MobileBottomNavProps {
  menuItems: MenuItem[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

const MobileBottomNav = ({ menuItems, activeSection, onSectionChange }: MobileBottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg md:hidden z-50">
      <nav className="flex justify-around h-16 items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <Link
              to={`#${item.id}`}
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className="flex flex-col items-center justify-center text-xs font-medium text-center flex-1 h-full"
            >
              <Button
                variant="ghost"
                className={`flex flex-col items-center justify-center h-full w-full p-0 ${
                  isActive ? 'text-compassion-red' : 'text-gentle-gray hover:text-deep-gray'
                }`}
              >
                <Icon className="h-5 w-5 mb-1" />
                <span className="text-micro">{item.label.split(' ')[0]}</span> {/* Display first word of label */}
              </Button>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileBottomNav;