import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplets, Clock, Power, Settings } from 'lucide-react';

export default function IrrigationControl() {
  const [isActive, setIsActive] = useState(false);
  const [duration, setDuration] = useState(30);
  const [intensity, setIntensity] = useState(50);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Irrigation Control</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your field's irrigation system</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white shadow rounded-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-medium text-gray-900">System Control</h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsActive(!isActive)}
              className={`relative inline-flex h-12 w-20 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isActive ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span className="sr-only">Use setting</span>
              <span
                className={`pointer-events-none relative inline-block h-11 w-11 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isActive ? 'translate-x-8' : 'translate-x-0'
                }`}
              >
                <span
                  className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ${
                    isActive ? 'opacity-0 duration-0 ease-out' : 'opacity-100 duration-200 ease-in'
                  }`}
                >
                  <Power className="h-6 w-6 text-gray-400" />
                </span>
                <span
                  className={`absolute inset-0 flex h-full w-full items-center justify-center transition-opacity ${
                    isActive ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-0 ease-out'
                  }`}
                >
                  <Droplets className="h-6 w-6 text-green-600" />
                </span>
              </span>
            </motion.button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
              <input
                type="range"
                min="5"
                max="60"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
              <span className="block mt-1 text-sm text-gray-500">{duration} minutes</span>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Intensity (%)</label>
              <input
                type="range"
                min="10"
                max="100"
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-2"
              />
              <span className="block mt-1 text-sm text-gray-500">{intensity}%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow rounded-lg p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Schedule</h2>
          <div className="space-y-4">
            {[
              { time: '06:00 AM', duration: '30 min', status: 'Scheduled' },
              { time: '04:00 PM', duration: '45 min', status: 'Scheduled' },
              { time: '09:00 PM', duration: '20 min', status: 'Scheduled' },
            ].map((schedule, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-gray-400 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{schedule.time}</p>
                    <p className="text-xs text-gray-500">{schedule.duration}</p>
                  </div>
                </div>
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {schedule.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}