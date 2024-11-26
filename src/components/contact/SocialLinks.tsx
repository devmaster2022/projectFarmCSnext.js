import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    href: 'https://facebook.com/farmcs',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/farmcs',
    color: 'hover:text-blue-400',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://instagram.com/farmcs',
    color: 'hover:text-pink-600',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/company/farmcs',
    color: 'hover:text-blue-700',
  },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-4">
      {socialLinks.map((social) => (
        <motion.a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`p-2 rounded-full bg-gray-100 text-gray-600 ${social.color} transition-colors`}
        >
          <social.icon className="h-5 w-5" />
        </motion.a>
      ))}
    </div>
  );
}