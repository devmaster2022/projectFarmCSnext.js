import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Database,
  Droplets,
  Smartphone,
  Sprout,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Real-Time Soil Moisture Sensing',
    description:
      'Advanced sensors continuously monitor soil conditions to ensure precise irrigation timing and volume.',
  },
  {
    icon: Zap,
    title: 'Automated Operation',
    description:
      'Smart system makes dynamic adjustments based on real-time data, eliminating manual intervention.',
  },
  {
    icon: Sprout,
    title: 'Customizable Sprinkler Control',
    description:
      'Adjust rotation and height for optimal water distribution across different crop types and growth stages.',
  },
  {
    icon: Database,
    title: 'Integrated Fertilization',
    description:
      'Automated dispensing of liquid fertilizers protects farmers from harmful exposure while ensuring optimal nutrition.',
  },
  {
    icon: Smartphone,
    title: 'Remote Control & Monitoring',
    description:
      'Manage your field from anywhere using our mobile app. Control schedules and analyze data on the go.',
  },
  {
    icon: Cloud,
    title: 'Weather Integration',
    description:
      'Automatically adjusts irrigation schedules based on weather forecasts and real-time conditions.',
  },
];

export default function HowItWorks() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          IoT-Enabled Smart Irrigation: A Game Changer
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover how FarmCS uses cutting-edge technology to revolutionize
          traditional farming practices through intelligent automation and precise
          control.
        </p>
      </motion.div>

      {/* System Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">How FarmCS Works</h2>
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fit=crop&w=1200"
              alt="Smart irrigation system"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Data Flow Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Flow Process</h2>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
          {[
            { step: 1, title: 'Data Collection', icon: Database },
            { step: 2, title: 'Analysis', icon: Cloud },
            { step: 3, title: 'Decision Making', icon: Zap },
            { step: 4, title: 'Automated Action', icon: Droplets },
          ].map((step, index) => (
            <div key={step.step} className="flex flex-col items-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <step.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">Step {step.step}</p>
                <p className="text-sm text-gray-600">{step.title}</p>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute transform translate-x-full">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}