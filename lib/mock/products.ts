export interface Product {
  id: string
  name: string
  category: string
  price: number
  imageUrl: string
  slug: string
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Kit Pastillas de Freno OEM',
    category: 'Frenos',
    price: 45,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'kit-pastillas-freno-oem',
  },
  {
    id: '2',
    name: 'Filtro de Aceite Premium',
    category: 'Motor',
    price: 12,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'filtro-aceite-premium',
  },
  {
    id: '3',
    name: 'Amortiguadores Traseros',
    category: 'Suspensión',
    price: 98,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'amortiguadores-traseros',
  },
  {
    id: '4',
    name: 'Kit Embrague Completo',
    category: 'Motor',
    price: 135,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'kit-embrague-completo',
  },
  {
    id: '5',
    name: 'Luces LED Delanteras H7',
    category: 'Iluminación',
    price: 38,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'luces-led-delanteras-h7',
  },
  {
    id: '6',
    name: 'Discos Ventilados Perforados',
    category: 'Frenos',
    price: 82,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'discos-ventilados-perforados',
  },
  {
    id: '7',
    name: 'Escape Deportivo Universal',
    category: 'Escape',
    price: 220,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'escape-deportivo-universal',
  },
  {
    id: '8',
    name: 'Cubierta Volante Racing',
    category: 'Accesorios',
    price: 18,
    imageUrl: '/images/placeholder-product.jpg',
    slug: 'cubierta-volante-racing',
  },
]
