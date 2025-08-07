'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Boutique Collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Exquisite Fashion Collection
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Discover our premium collection of traditional and contemporary garments, 
          crafted with precision and style for the modern fashion enthusiast.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#products"
            className="btn-secondary inline-flex items-center space-x-2 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Collection</span>
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-20 left-10 w-4 h-4 bg-accent-400 rounded-full opacity-60"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 w-6 h-6 bg-white rounded-full opacity-40"
      />
    </section>
  )
} 