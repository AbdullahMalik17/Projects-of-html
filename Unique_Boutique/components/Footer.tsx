'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle, Heart } from 'lucide-react'
import Link from 'next/link'

const contactInfo = [
  {
    icon: Phone,
    text: '+92 312-6710602',
    href: 'tel:+923126710602',
  },
  {
    icon: Mail,
    text: 'info@uniqueboutique.com',
    href: 'mailto:info@uniqueboutique.com',
  },
  {
    icon: MapPin,
    text: 'Main Street, Fashion District',
    href: '#',
  },
]

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'About Us', href: '/about' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/923126710602' },
]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-4 text-accent-400">
              About Unique Boutique
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Founded by Mrs. Athar, Unique Boutique has been delivering high-quality fashion products since 2018. 
              We specialize in traditional and contemporary garments, offering custom tailoring services to meet every customer's unique style preferences.
            </p>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-4 text-accent-400">
              Contact Information
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <item.icon size={18} />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-4 text-accent-400">
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.div key={index} whileHover={{ x: 5 }}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-accent-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-playfair text-xl font-bold mb-4 text-accent-400">
              Follow Us
            </h3>
            <p className="text-gray-300 mb-4">
              Stay updated with our latest collections and offers
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-400 p-3 rounded-full text-gray-800 hover:bg-accent-300 transition-colors duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center"
        >
          <p className="text-gray-400">
            &copy; 2025 Unique Boutique. All rights reserved. | Designed with{' '}
            <Heart size={16} className="inline text-red-500 fill-current animate-pulse" />{' '}
            for fashion enthusiasts
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 