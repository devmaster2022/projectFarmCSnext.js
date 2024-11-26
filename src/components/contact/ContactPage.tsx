import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, User, Send } from 'lucide-react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';
import ContactMap from './ContactMap';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our solutions or need support, we're here to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ContactForm />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <a
                  href="mailto:support@farmcs.com"
                  className="flex items-center space-x-4 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p>support@farmcs.com</p>
                  </div>
                </a>

                <a
                  href="tel:+911800-123-4567"
                  className="flex items-center space-x-4 text-gray-600 hover:text-green-600 transition-colors"
                >
                  <div className="bg-green-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p>+91 1800-123-4567</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="bg-green-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p>LNCT College, Bhopal, MP, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Connect With Us</h3>
                <SocialLinks />
              </div>
            </div>

            {/* Map Section */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Location</h2>
              <ContactMap />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}