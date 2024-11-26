import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Bell, CheckCircle, XCircle } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'Critical',
    message: 'Low water pressure detected in Zone 2',
    timestamp: '2 minutes ago',
    status: 'active',
    icon: AlertTriangle,
    color: 'red',
  },
  {
    id: 2,
    type: 'Warning',
    message: 'Soil moisture below threshold in Zone 1',
    timestamp: '15 minutes ago',
    status: 'active',
    icon: Bell,
    color: 'yellow',
  },
  {
    id: 3,
    type: 'Info',
    message: 'Scheduled maintenance due in 2 days',
    timestamp: '1 hour ago',
    status: 'active',
    icon: Bell,
    color: 'blue',
  },
  {
    id: 4,
    type: 'Resolved',
    message: 'System update completed successfully',
    timestamp: '2 hours ago',
    status: 'resolved',
    icon: CheckCircle,
    color: 'green',
  },
];

export default function Alerts() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">System Alerts</h1>
        <p className="mt-1 text-sm text-gray-500">Monitor and manage system notifications</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white shadow rounded-lg overflow-hidden"
      >
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="flow-root">
            <ul className="-my-8">
              {alerts.map((alert, index) => (
                <motion.li
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="py-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 text-${alert.color}-500`}>
                      <alert.icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-gray-900">
                        {alert.type}
                      </p>
                      <p className="text-sm text-gray-500">
                        {alert.message}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {alert.timestamp}
                      </p>
                    </div>
                    <div>
                      {alert.status === 'active' ? (
                        <button
                          type="button"
                          className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          Resolve
                        </button>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
                          Resolved
                        </span>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Alert Statistics</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Active Alerts</span>
              <span className="text-lg font-semibold text-red-600">3</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Resolved Today</span>
              <span className="text-lg font-semibold text-green-600">5</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Total Alerts</span>
              <span className="text-lg font-semibold text-blue-600">8</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:col-span-2 bg-white rounded-lg shadow p-6"
        >
          <h2 className="text-lg font-medium text-gray-900 mb-4">Alert Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Email Notifications</p>
                <p className="text-xs text-gray-500">Receive alerts via email</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-green-600">
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">SMS Alerts</p>
                <p className="text-xs text-gray-500">Get instant alerts via SMS</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-green-600">
                <span className="translate-x-5 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Push Notifications</p>
                <p className="text-xs text-gray-500">Mobile app notifications</p>
              </div>
              <button className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 bg-gray-200">
                <span className="translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white transition duration-200 ease-in-out" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}