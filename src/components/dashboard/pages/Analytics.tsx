import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', moisture: 65, temperature: 28, humidity: 75 },
  { name: 'Tue', moisture: 59, temperature: 32, humidity: 68 },
  { name: 'Wed', moisture: 80, temperature: 27, humidity: 82 },
  { name: 'Thu', moisture: 81, temperature: 29, humidity: 85 },
  { name: 'Fri', moisture: 56, temperature: 33, humidity: 62 },
  { name: 'Sat', moisture: 55, temperature: 30, humidity: 78 },
  { name: 'Sun', moisture: 40, temperature: 34, humidity: 71 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">Weekly field condition analysis</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white p-6 rounded-lg shadow"
      >
        <h2 className="text-lg font-medium text-gray-900 mb-4">Field Conditions</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="moisture" stroke="#3b82f6" name="Soil Moisture (%)" />
              <Line type="monotone" dataKey="temperature" stroke="#ef4444" name="Temperature (°C)" />
              <Line type="monotone" dataKey="humidity" stroke="#10b981" name="Humidity (%)" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Water Usage</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Today's Usage</span>
              <span className="text-lg font-semibold text-blue-600">250 L</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Weekly Average</span>
              <span className="text-lg font-semibold text-blue-600">1,750 L</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Monthly Total</span>
              <span className="text-lg font-semibold text-blue-600">7,500 L</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Efficiency Metrics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Water Savings</span>
              <span className="text-lg font-semibold text-green-600">40%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Energy Efficiency</span>
              <span className="text-lg font-semibold text-green-600">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">System Uptime</span>
              <span className="text-lg font-semibold text-green-600">99.9%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}