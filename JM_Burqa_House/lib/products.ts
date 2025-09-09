export type Product = {
  id: number
  name: string
  description: string
  price: string
  image: string
  rating: number
  reviews: number
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Traditional Black Burqa',
    description: 'Classic black burqa with premium fabric and elegant design',
    price: '₹1,200',
    image: '/burqa1.jpg',
    rating: 4.8,
    reviews: 24,
    category: 'Traditional'
  },
  {
    id: 2,
    name: 'Embroidered Navy Burqa',
    description: 'Beautiful navy blue burqa with intricate embroidery work',
    price: '₹1,800',
    image: '/burqa2.jpg',
    rating: 4.9,
    reviews: 31,
    category: 'Embroidered'
  },
  {
    id: 3,
    name: 'Designer Maroon Burqa',
    description: 'Stylish maroon burqa with contemporary design elements',
    price: '₹2,200',
    image: '/burqa3.jpg',
    rating: 5.0,
    reviews: 18,
    category: 'Designer'
  },
  {
    id: 4,
    name: 'Casual Gray Burqa',
    description: 'Comfortable gray burqa perfect for everyday wear',
    price: '₹950',
    image: '/burqa4.jpg',
    rating: 4.7,
    reviews: 42,
    category: 'Casual'
  },
  {
    id: 5,
    name: 'Premium Silk Burqa',
    description: 'Luxurious silk burqa with premium quality fabric',
    price: '₹3,500',
    image: '/burqa5.jpg',
    rating: 4.6,
    reviews: 29,
    category: 'Premium'
  },
  {
    id: 6,
    name: 'Floral Print Burqa',
    description: 'Elegant floral print burqa with modern styling',
    price: '₹1,500',
    image: '/burqa6.jpg',
    rating: 4.5,
    reviews: 35,
    category: 'Printed'
  },
  {
    id: 7,
    name: 'Bridal Burqa Set',
    description: 'Exquisite bridal burqa set with matching accessories',
    price: '₹5,000',
    image: '/burqa7.jpg',
    rating: 4.9,
    reviews: 15,
    category: 'Bridal'
  },
  {
    id: 8,
    name: 'Cotton Comfort Burqa',
    description: 'Breathable cotton burqa for comfortable all-day wear',
    price: '₹1,100',
    image: '/burqa8.jpg',
    rating: 4.4,
    reviews: 38,
    category: 'Cotton'
  }
]

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category)
}

export const categories = [
  'All',
  'Traditional',
  'Embroidered',
  'Designer',
  'Casual',
  'Premium',
  'Printed',
  'Bridal',
  'Cotton'
]
