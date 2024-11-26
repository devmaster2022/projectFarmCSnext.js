import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Droplets, 
  LineChart, 
  Camera, 
  Calendar, 
  AlertTriangle,
  Settings,
  LogOut
} from 'lucide-react';
import { useAuth } from '../auth/AuthContext';

const navigation = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Irrigation Control', href: '/dashboard/irrigation', icon: Droplets },
  { name: 'Analytics', href: '/dashboard/analytics', icon: LineChart },
  { name: 'Field Monitoring', href: '/dashboard/monitoring', icon: Camera },
  { name: 'Schedules', href: '/dashboard/schedules', icon: Calendar },
  { name: 'Alerts', href: '/dashboard/alerts', icon: AlertTriangle },
];

export default function DashboardSidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-64 bg-white shadow-lg min-h-screen">
      <div className="h-full flex flex-col">
        <nav className="flex-1 px-4 py-6">
          <div className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  flex items-center px-3 py-2 text-sm font-medium rounded-lg
                  transition-colors duration-200
                  ${isActive(item.href)
                    ? 'bg-green-50 text-green-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-green-600'}
                `}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center w-full"
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </motion.div>
              </Link>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200">
          <Link
            to="/dashboard/settings"
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-50 hover:text-green-600"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Link>
          <button
            onClick={() => logout()}
            className="flex items-center w-full px-3 py-2 mt-2 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}