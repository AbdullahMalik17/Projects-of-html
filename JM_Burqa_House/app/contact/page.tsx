import type { Metadata } from 'next'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contact | JM Burqa House',
  description: 'Get in touch with JM Burqa House for inquiries, orders, or support.',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Contact />
    </main>
  )
}


