export interface Category {
  id: string
  name: string
  subtitle: string
  imageUrl: string
  slug: string
  featured?: boolean
  wide?: boolean
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'Sistemas de Frenado',
    subtitle: 'Discos, Pastillas y Calipers',
    imageUrl: '/images/category-frenos.png',
    slug: 'frenos',
    featured: true,
    wide: true,
  },
  {
    id: '2',
    name: 'Escape',
    subtitle: 'Full Systems & Slip-ons',
    imageUrl: '/images/category-escape.jpg',
    slug: 'escape',
    featured: true,
  },
  {
    id: '3',
    name: 'Motor',
    subtitle: 'Filtros, Correas y Distribución',
    imageUrl: '/images/placeholder-engine.jpg',
    slug: 'motor',
  },
  {
    id: '4',
    name: 'Suspensión',
    subtitle: 'Amortiguadores y Bujes',
    imageUrl: '/images/placeholder-suspension.jpg',
    slug: 'suspension',
  },
  {
    id: '5',
    name: 'Iluminación',
    subtitle: 'LED, Xenón y Halógenos',
    imageUrl: '/images/placeholder-lighting.jpg',
    slug: 'iluminacion',
  },
  {
    id: '6',
    name: 'Accesorios',
    subtitle: 'Interior y Exterior',
    imageUrl: '/images/placeholder-accessories.jpg',
    slug: 'accesorios',
  },
]
