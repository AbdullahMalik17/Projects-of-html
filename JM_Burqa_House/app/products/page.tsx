import type { Metadata } from 'next'
import Products from '@/components/Products'

export const metadata: Metadata = {
  title: 'Products | JM Burqa House',
  description: 'Browse all premium modest fashion products from JM Burqa House.',
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Products />
    </main>
  )
}





