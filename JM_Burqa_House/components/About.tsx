'use client'

import { motion } from 'framer-motion'
import { Award, Users, Heart, Shield, Star, Clock } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Users, value: '5000+', label: 'Happy Customers' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Average Rating' },
    { icon: Heart, value: '100%', label: 'Customer Satisfaction' }
  ]

  const features = [
    {
      icon: Shield,
      title: 'Premium Quality',
      description: 'We use only the finest fabrics and materials to ensure durability and comfort in every piece.'
    },
    {
      icon: Heart,
      title: 'Comfortable Design',
      description: 'Our burqas are designed with comfort in mind, perfect for all-day wear without compromising on style.'
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Each piece is carefully crafted by skilled artisans with years of experience in modest fashion.'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We ensure prompt delivery of your orders with careful packaging to maintain the quality of your purchase.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About JM Burqa House
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            We are dedicated to providing premium quality modest wear that combines 
            traditional elegance with contemporary comfort.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-playfair text-3xl font-bold mb-6 text-gray-800">
              Our Story
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded with a vision to provide elegant and comfortable modest wear, 
                JM Burqa House has been serving the Muslim community for over 15 years. 
                We understand the importance of maintaining modesty while expressing 
                personal style and comfort.
              </p>
              <p>
                Our commitment to quality and customer satisfaction has made us a 
                trusted name in the modest fashion industry. We carefully select 
                premium fabrics and work with skilled artisans to create pieces 
                that are both beautiful and practical.
              </p>
              <p>
                Every burqa in our collection is designed with the modern Muslim 
                woman in mind, offering comfort, style, and the perfect fit for 
                every occasion.
              </p>
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="text-white" size={40} />
                </div>
                <p className="text-primary-600 font-semibold">Our Showroom</p>
                <p className="text-primary-500 text-sm">Visit us to experience our collection</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={28} />
              </div>
              <h4 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h4>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="text-primary-600" size={28} />
              </div>
              <h4 className="font-semibold text-lg text-gray-800 mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
