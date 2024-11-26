import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Sprout, Sun } from 'lucide-react';

export default function Introduction() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Revolutionizing Agriculture with IoT
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          FarmCS is India's first-ever IoT-enabled smart irrigation system, designed to optimize water usage,
          improve crop yields, and enhance farming efficiency through data-driven decisions.
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            Transform agriculture by integrating cutting-edge technologies, ensuring sustainable farming
            practices that promote environmental and economic prosperity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Empower farmers with smart, sustainable solutions that optimize resource usage, increase
            productivity, and create a more sustainable future for agriculture.
          </p>
        </motion.div>
      </div>

      {/* Key Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {[
          {
            icon: Droplets,
            stat: '40%',
            label: 'Water Saved',
            color: 'text-blue-600',
          },
          {
            icon: Sprout,
            stat: '35%',
            label: 'Yield Increase',
            color: 'text-green-600',
          },
          {
            icon: Sun,
            stat: '60%',
            label: 'Energy Efficient',
            color: 'text-yellow-600',
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <item.icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
            <p className={`text-4xl font-bold mb-2 ${item.color}`}>{item.stat}</p>
            <p className="text-gray-600">{item.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Problem & Solution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-8"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge We're Solving</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-red-600 mb-4">Traditional Challenges</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-red-500" />
                Inefficient water usage and wastage
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-red-500" />
                Labor-intensive manual irrigation
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-red-500" />
                Lack of real-time monitoring
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-4">FarmCS Solution</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-green-500" />
                Smart, data-driven irrigation
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-green-500" />
                Automated system management
              </li>
              <li className="flex items-center">
                <ArrowRight className="h-5 w-5 mr-2 text-green-500" />
                24/7 field monitoring and alerts
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Farming?
        </h2>
        <p className="text-gray-600 mb-8">
          Join thousands of farmers who are already benefiting from FarmCS technology.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </motion.button>
      </motion.div>
    </div>
  );
}