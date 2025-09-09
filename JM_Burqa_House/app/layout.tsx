import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'JM Burqa House - Premium Modest Fashion Collection',
  description: 'Discover exquisite traditional and contemporary burqas at JM Burqa House. Premium quality modest wear for all occasions with custom tailoring services.',
  keywords: 'burqa, modest wear, traditional clothing, hijab, islamic fashion, custom tailoring, premium garments',
  authors: [{ name: 'JM Burqa House' }],
  openGraph: {
    title: 'JM Burqa House - Premium Modest Fashion Collection',
    description: 'Discover exquisite traditional and contemporary burqas at JM Burqa House.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
