import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Map, AlertTriangle } from 'lucide-react';

export default function FieldMonitoring() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-gray-900">Field Monitoring</h1>
        <p className="mt-1 text-sm text-gray-500">Live surveillance and field conditions</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Live Camera Feed</h2>
              <Camera className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fit=crop&w=800"
              alt="Field camera feed"
              className="object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow overflow-hidden"
        >
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Field Map</h2>
              <Map className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="aspect-w-16 aspect-h-9 bg-gray-100">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fit=crop&w=800"
              alt="Field map"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-lg shadow"
      >
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Recent Events</h2>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            {[
              { type: 'Movement Detected', time: '2 minutes ago', severity: 'low' },
              { type: 'Irrigation Started', time: '15 minutes ago', severity: 'info' },
              { type: 'Temperature Alert', time: '1 hour ago', severity: 'high' },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center">
                  <AlertTriangle className={`h-5 w-5 mr-3 ${
                    event.severity === 'high' ? 'text-red-500' :
                    event.severity === 'low' ? 'text-yellow-500' : 'text-blue-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{event.type}</p>
                    <p className="text-xs text-gray-500">{event.time}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  event.severity === 'high' ? 'bg-red-100 text-red-800' :
                  event.severity === 'low' ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {event.severity.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}