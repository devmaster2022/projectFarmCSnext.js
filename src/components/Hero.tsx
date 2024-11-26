import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Sprout, Sun, Wind } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-green-50 via-blue-50 to-green-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0.3 }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 2 === 0 ? (
              <Droplets className="h-8 w-8 text-blue-200" />
            ) : i % 3 === 0 ? (
              <Sun className="h-8 w-8 text-yellow-200" />
            ) : (
              <Wind className="h-8 w-8 text-green-200" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center min-h-[90vh]">
          {/* Text Content */}
          <motion.div 
            className="col-span-6 space-y-8 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <motion.div 
                className="flex items-center justify-center lg:justify-start space-x-2 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Sprout className="h-10 w-10 text-green-600" />
                <span className="text-2xl font-bold text-green-600">FarmCS</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-6xl font-extrabold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block text-gray-900">India's First-Ever</span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Smart Sprinkler System
                </span>
              </motion.h1>

              <motion.p 
                className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Empowering Farmers with Precision, Sustainability, and Innovation. Get real-time field data and smart irrigation control at your fingertips.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/signup" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 shadow-lg hover:shadow-xl transform transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/learn" 
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-green-600 text-base font-medium rounded-xl text-green-600 bg-transparent hover:bg-green-50 shadow-lg hover:shadow-xl transform transition-all duration-200"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div 
            className="col-span-6 mt-16 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-30"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className="relative">
                <img
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                  src="https://i.postimg.cc/WbXk5qGp/farm-CS-Poster.png"
                  alt="Indian farmer in field with smart irrigation system"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              className="absolute -bottom-4 -left-4 glass-card p-4 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-bold text-green-600">40%</p>
              <p className="text-sm text-gray-600">Water Saved</p>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 glass-card p-4 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl font-bold text-blue-600">24/7</p>
              <p className="text-sm text-gray-600">Monitoring</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}