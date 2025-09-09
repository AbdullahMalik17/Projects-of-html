'use client'

import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products limit={8} />
      <About />
      <Contact />
    </div>
  )
}
