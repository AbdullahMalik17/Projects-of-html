'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Heart } from 'lucide-react'

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative h-[80vh] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="text-accent-400" size={24} />
            <span className="text-accent-400 font-semibold">Premium Quality</span>
            <Star className="text-accent-400" size={24} />
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Elegant Modest Fashion
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Discover our exquisite collection of premium burqas and modest wear, 
          crafted with precision and elegance for the modern Muslim woman.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
        >
          <motion.a
            href="#products"
            className="btn-secondary inline-flex items-center space-x-2 text-lg px-8 py-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore Collection</span>
            <ArrowRight size={20} />
          </motion.a>
          
          <motion.a
            href="#about"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/20 p-3 rounded-full">
              <Shield size={24} className="text-accent-400" />
            </div>
            <h3 className="font-semibold text-lg">Premium Quality</h3>
            <p className="text-sm text-gray-200">High-quality fabrics and materials</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/20 p-3 rounded-full">
              <Heart size={24} className="text-accent-400" />
            </div>
            <h3 className="font-semibold text-lg">Comfortable Fit</h3>
            <p className="text-sm text-gray-200">Designed for all-day comfort</p>
          </div>
          
          <div className="flex flex-col items-center space-y-2">
            <div className="bg-white/20 p-3 rounded-full">
              <Star size={24} className="text-accent-400" />
            </div>
            <h3 className="font-semibold text-lg">Elegant Design</h3>
            <p className="text-sm text-gray-200">Beautiful and modest styling</p>
          </div>
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
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        className="absolute top-1/2 left-20 w-3 h-3 bg-accent-400 rounded-full opacity-50"
      />
    </section>
  )
}
