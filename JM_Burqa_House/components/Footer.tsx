'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-secondary-800 to-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="font-playfair text-2xl font-bold mb-4">
              JM <span className="text-accent-400">Burqa House</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted destination for premium quality burqas and modest wear. 
              We provide elegant, comfortable, and stylish options for every occasion.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="bg-primary-500 p-2 rounded-full hover:bg-primary-600 transition-colors"
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'Products', 'About Us', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-3">
              {['Traditional', 'Embroidered', 'Designer', 'Casual', 'Premium', 'Bridal'].map((category) => (
                <li key={category}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {category} Burqas
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    123 Fashion Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-accent-400 flex-shrink-0" />
                <p className="text-gray-300">+91 98765 43210</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-accent-400 flex-shrink-0" />
                <p className="text-gray-300">info@jmburqahouse.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock size={20} className="text-accent-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Mon - Sat: 10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © {currentYear} JM Burqa House. All rights reserved. | 
            <span className="ml-2">Crafted with ❤️ for modest fashion</span>
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
