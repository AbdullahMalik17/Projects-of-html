'use client'

import { motion } from 'framer-motion'
import { Crown, User, Users, Heart } from 'lucide-react'

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Athar',
    role: 'Founder & Creative Director',
    type: 'owner',
    icon: Crown,
    gradient: 'from-primary-500 to-secondary-500',
  },
  {
    id: 2,
    name: 'Bushra Khalid',
    role: 'Operations & Customer Relations',
    type: 'manager',
    icon: User,
    gradient: 'from-red-500 to-pink-500',
  },
  {
    id: 3,
    name: 'Mr. Shoaib & Mrs. Afshan',
    role: 'Trusted customers since 2018',
    type: 'clients',
    icon: Users,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 4,
    name: 'Village Craftsmen',
    role: 'Skilled traditional artisans',
    type: 'workers',
    icon: Heart,
    gradient: 'from-pink-500 to-rose-500',
  },
]

export default function Team() {
  return (
    <section className="card p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <h2 className="font-playfair text-3xl font-bold mb-4 gradient-text">
          Our Team
        </h2>
        <p className="text-gray-600">
          Meet the talented people behind Unique Boutique
        </p>
      </motion.div>

      <div className="space-y-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`bg-gradient-to-r ${member.gradient} text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
          >
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-full">
                <member.icon size={24} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-white/90 text-sm">{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl"
      >
        <h3 className="font-semibold text-gray-800 mb-3">About Our Team</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          Founded by Mrs. Athar, Unique Boutique has been delivering high-quality fashion products since 2018. 
          We specialize in traditional and contemporary garments, offering custom tailoring services to meet every customer's unique style preferences.
        </p>
      </motion.div>
    </section>
  )
} 