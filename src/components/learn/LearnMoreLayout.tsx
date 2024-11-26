import React from 'react';
import { motion } from 'framer-motion';
import { NavLink, Outlet } from 'react-router-dom';
import { BookOpen, Cpu, Lightbulb, Rocket } from 'lucide-react';

const navigation = [
  { name: 'Introduction', path: '/learn', icon: BookOpen },
  { name: 'How It Works', path: '/learn/how-it-works', icon: Cpu },
  { name: 'Innovations', path: '/learn/innovations', icon: Lightbulb },
  { name: 'Future Scope', path: '/learn/future', icon: Rocket },
];

export default function LearnMoreLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Tabs */}
        <nav className="flex flex-wrap justify-center gap-4 mb-12">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/learn'}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-white text-green-600 shadow-lg'
                    : 'text-gray-600 hover:bg-white hover:text-green-600 hover:shadow-md'
                }`
              }
            >
              <item.icon className="h-5 w-5 mr-2" />
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Content Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </div>
    </div>
  );
}