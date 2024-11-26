import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Droplets, Sun } from 'lucide-react';

export default function Schedules() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Irrigation Schedules</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your automated irrigation timings</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2 bg-white rounded-lg shadow"
        >
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Weekly Schedule</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              {[
                { day: 'Monday', times: ['06:00 AM', '06:00 PM'] },
                { day: 'Tuesday', times: ['06:00 AM', '06:00 PM'] },
                { day: 'Wednesday', times: ['06:00 AM', '06:00 PM'] },
                { day: 'Thursday', times: ['06:00 AM', '06:00 PM'] },
                { day: 'Friday', times: ['06:00 AM', '06:00 PM'] },
                { day: 'Saturday', times: ['06:00 AM'] },
                { day: 'Sunday', times: ['06:00 AM'] },
              ].map((schedule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                    <span className="text-sm font-medium text-gray-900">{schedule.day}</span>
                  </div>
                  <div className="flex space-x-2">
                    {schedule.times.map((time, timeIndex) => (
                      <span
                        key={timeIndex}
                        className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full"
                      >
                        {time}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow"
        >
          <div className="p-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Quick Actions</h2>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-sm font-medium text-green-900">Add Schedule</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="flex items-center">
                  <Droplets className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-sm font-medium text-blue-900">Start Now</span>
                </div>
              </button>
              <button className="w-full flex items-center justify-between p-3 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors">
                <div className="flex items-center">
                  <Sun className="h-5 w-5 text-yellow-600 mr-3" />
                  <span className="text-sm font-medium text-yellow-900">Weather Adjust</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}