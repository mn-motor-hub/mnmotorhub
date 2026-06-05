import { ArrowRight } from 'lucide-react'
import { products } from '@/lib/mock/products'
import ProductCard from './ProductCard'
import styles from './FeaturedProducts.module.css'

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className="section-accent" />
          <h2 className={styles.title}>Productos Destacados</h2>
          <p className={styles.subtitle}>Los más buscados por nuestros clientes</p>
        </div>
        <a href="/catalogo" className={styles.viewAll}>
          Ver catálogo completo <ArrowRight size={16} />
        </a>
      </div>

      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
