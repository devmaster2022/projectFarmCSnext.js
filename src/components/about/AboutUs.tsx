import React from 'react';
import { motion } from 'framer-motion';
import { Award, Leaf, Users, Zap } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-16 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 lg:mb-0"
            >
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
                Transforming Agriculture Through Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Leading the revolution in smart farming technology
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=1000"
                  alt="Abhishek Maurya"
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Founder's Message */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Founder's Message</h2>
            <div className="mt-8 text-lg text-gray-600 space-y-6">
              <p>
                Hello! I'm Abhishek Maurya, the founder of FarmCS, a pioneering initiative dedicated to revolutionizing agriculture in India through smart irrigation and precision farming. Currently pursuing my BTech in Computer Science at LNCT College, Bhopal, I have always been passionate about leveraging technology to solve real-world problems.
              </p>
              <p>
                At FarmCS, we are creating an integrated system of hardware and software to empower farmers with data-driven insights, enabling efficient water usage and higher crop yields. Our flagship innovation includes a smart sprinkler system paired with a remote monitoring app that offers real-time field data and control.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Achievements & Milestones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Award className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                BBIC Finals
              </h3>
              <p className="text-gray-600">
                Selected for the Bharat Billion Impact Challenge Finals in Bangalore, showcasing our vision for sustainable agriculture.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Sustainability Advocate
              </h3>
              <p className="text-gray-600">
                Led various campaigns including the Gen G campaign, promoting eco-conscious practices like e-waste management.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <Zap className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Innovation Leader
              </h3>
              <p className="text-gray-600">
                Working on advanced systems to optimize fertilizer usage and integrate IoT and AI in farming solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Mission */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="py-16 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <div className="text-lg text-gray-600 space-y-6">
                <p>
                  FarmCS is more than a project; it's a mission to transform agriculture by making it sustainable, efficient, and inclusive. From ideation to implementation, every step has been driven by my commitment to the welfare of farmers and the environment.
                </p>
                <p>
                  I firmly believe that by combining technology and empathy, we can address critical agricultural challenges and pave the way for a greener future.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="mt-8"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
                >
                  Join Our Mission
                  <Leaf className="ml-2 h-5 w-5" />
                </a>
              </motion.div>
            </div>
            <div className="mt-10 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?fit=crop&w=800"
                alt="Smart farming"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}