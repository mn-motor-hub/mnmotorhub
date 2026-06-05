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
    name: 'Pastilla de Freno Brembo P06 020',
    category: 'Frenos',
    price: 28,
    imageUrl: '/images/productos/pastillas-de-freno.png',
    slug: 'pastilla-freno-brembo-p06-020',
  },
  {
    id: '2',
    name: 'Filtro de Aire K&N 33-2129',
    category: 'Filtración',
    price: 45,
    imageUrl: '/images/productos/filtro-de-aire.png',
    slug: 'filtro-aire-kn-33-2129',
  },
  {
    id: '3',
    name: 'Amortiguador Monroe GT40',
    category: 'Suspensión',
    price: 89,
    imageUrl: '/images/productos/amortiguadores.png',
    slug: 'amortiguador-monroe-gt40',
  },
  {
    id: '4',
    name: 'Disco de Freno Bosch BD1430',
    category: 'Frenos',
    price: 34,
    imageUrl: '/images/productos/discos-de-frenos.png',
    slug: 'disco-freno-bosch-bd1430',
  },
  {
    id: '5',
    name: 'Bujía NGK Iridium IX',
    category: 'Motor',
    price: 12,
    imageUrl: '/images/productos/bujia.png',
    slug: 'bujia-ngk-iridium-ix',
  },
  {
    id: '6',
    name: 'Correa de Distribución Gates T234',
    category: 'Motor',
    price: 23,
    imageUrl: '/images/productos/correa-distribucion.png',
    slug: 'correa-distribucion-gates-t234',
  },
  {
    id: '7',
    name: 'Batería Bosch S5 60Ah',
    category: 'Eléctrico',
    price: 95,
    imageUrl: '/images/productos/baterias.png',
    slug: 'bateria-bosch-s5-60ah',
  },
  {
    id: '8',
    name: 'Aceite Mobil 1 5W-30 4L',
    category: 'Motor',
    price: 38,
    imageUrl: '/images/productos/aceite.png',
    slug: 'aceite-mobil-1-5w30-4l',
  },
]
