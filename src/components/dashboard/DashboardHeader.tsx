import React from 'react';
import { Bell, Settings } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Bell className="h-6 w-6" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-500">
              <Settings className="h-6 w-6" />
            </button>
            <div className="h-8 w-8 rounded-full bg-green-600 text-white flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}