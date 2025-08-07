'use client'

import { motion } from 'framer-motion'
import { Star, ShoppingCart, Eye } from 'lucide-react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Traditional Gota Work',
    description: 'Exquisite handcrafted gota work with premium fabric quality',
    price: '₹2,500',
    image: '/product1.jpg',
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: 'Designer Collection',
    description: 'Contemporary designs with traditional elegance',
    price: '₹3,200',
    image: '/product2.jpg',
    rating: 4.9,
    reviews: 31,
  },
  {
    id: 3,
    name: 'Bridal Collection',
    description: 'Stunning bridal wear with intricate embroidery',
    price: '₹15,000',
    image: '/product3.jpg',
    rating: 5.0,
    reviews: 18,
  },
  {
    id: 4,
    name: 'Casual Wear',
    description: 'Comfortable and stylish everyday wear',
    price: '₹1,800',
    image: '/product4.jpg',
    rating: 4.7,
    reviews: 42,
  },
  {
    id: 5,
    name: 'Party Wear',
    description: 'Elegant party wear for special occasions',
    price: '₹4,500',
    image: '/product5.jpg',
    rating: 4.6,
    reviews: 29,
  },
  {
    id: 6,
    name: 'Chiffon Collection',
    description: 'Light and elegant chiffon garments',
    price: '₹2,000',
    image: '/product6.jpg',
    rating: 4.5,
    reviews: 35,
  },
]

export default function Products() {
  return (
    <section id="products" className="card p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-playfair text-4xl font-bold mb-4 gradient-text">
          Featured Collections
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our handpicked collection of premium garments, each piece crafted with attention to detail and quality.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="card overflow-hidden group"
          >
            <div className="relative overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/90 p-2 rounded-full"
                >
                  <Eye size={20} className="text-gray-700" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-accent-400 p-2 rounded-full"
                >
                  <ShoppingCart size={20} className="text-white" />
                </motion.button>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star size={16} className="text-accent-400 fill-current" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-3">{product.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                <span className="text-sm text-gray-500">({product.reviews} reviews)</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary text-lg px-8 py-4"
        >
          View All Products
        </motion.button>
      </motion.div>
    </section>
  )
} 