import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'
import type { Product } from '@/lib/mock/products'
import styles from './FeaturedProducts.module.css'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className={styles.card}>
      <a href={`/producto/${product.slug}`} className={styles.cardImageLink}>
        <div className={styles.cardImage}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className={styles.cardImageImg}
            sizes="(max-width: 767px) 50vw, (max-width: 1279px) 33vw, 25vw"
          />
        </div>
        <span className={styles.cardCategory}>{product.category}</span>
      </a>
      <div className={styles.cardBody}>
        <a href={`/producto/${product.slug}`} className={styles.cardName}>
          {product.name}
        </a>
        <div className={styles.cardFooter}>
          <span className={styles.cardPrice}>${product.price}</span>
          <button className={styles.addToCart} aria-label={`Agregar ${product.name} al carrito`}>
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </article>
  )
}
