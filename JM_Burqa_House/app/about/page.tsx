import type { Metadata } from 'next'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'About | JM Burqa House',
  description: 'Learn about JM Burqa House, our values, and our commitment to premium modest fashion.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <About />
    </main>
  )
}



