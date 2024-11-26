import React from 'react';
import { motion } from 'framer-motion';
import { Droplets, Thermometer, Wind, Sun } from 'lucide-react';

const stats = [
  { name: 'Soil Moisture', value: '65%', icon: Droplets, color: 'text-blue-600' },
  { name: 'Temperature', value: '28°C', icon: Thermometer, color: 'text-red-600' },
  { name: 'Humidity', value: '75%', icon: Wind, color: 'text-green-600' },
  { name: 'Light Intensity', value: 'High', icon: Sun, color: 'text-yellow-600' },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Field Overview</h1>
        <p className="mt-1 text-sm text-gray-500">Real-time monitoring of your field conditions</p>
      </motion.div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                    <dd className="text-lg font-semibold text-gray-900">{stat.value}</dd>
                  </dl>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white shadow rounded-lg p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { time: '2 hours ago', event: 'Irrigation cycle completed' },
              { time: '4 hours ago', event: 'Soil moisture alert resolved' },
              { time: '6 hours ago', event: 'System maintenance check completed' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                <p className="text-gray-500">{activity.time}</p>
                <p className="ml-4 text-gray-900">{activity.event}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white shadow rounded-lg p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">System Status</h2>
          <div className="space-y-4">
            {[
              { name: 'Sprinkler System', status: 'Operational' },
              { name: 'Sensors', status: 'All Connected' },
              { name: 'Network Connection', status: 'Strong' },
            ].map((system, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{system.name}</span>
                <span className="px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full">
                  {system.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}