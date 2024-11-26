import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Crops Data', href: '/crops' },
  { name: 'Learn More', href: '/learn' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-800">FarmCS</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to={item.href}
                  className={`relative px-2 py-1 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-green-600'
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-green-600"
                      initial={false}
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/login"
                className="px-4 py-2 text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200"
              >
                Login
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/signup"
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 hover:text-green-600 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
          >
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-600 hover:text-green-600 hover:bg-green-50'
                  } transition-colors duration-200`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 px-4 space-y-2">
                <Link
                  to="/login"
                  className="block w-full px-4 py-2 text-center text-green-600 border border-green-600 rounded-lg hover:bg-green-50 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block w-full px-4 py-2 text-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}