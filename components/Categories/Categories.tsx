import { ArrowRight } from 'lucide-react'
import { categories } from '@/lib/mock/categories'
import styles from './Categories.module.css'

export default function Categories() {
  const featured = categories.filter((c) => c.featured)
  const rest = categories.filter((c) => !c.featured)

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div>
          <h2 className={styles.title}>Categorías Destacadas</h2>
          <p className={styles.subtitle}>
            Equipamiento de alto nivel para cada sistema de tu motor
          </p>
        </div>
        <a href="/categorias" className={styles.viewAll}>
          Explorar todo <ArrowRight size={16} />
        </a>
      </div>

      <div className={styles.bentoGrid}>
        {featured.map((cat) => (
          <a
            key={cat.id}
            href={`/categoria/${cat.slug}`}
            className={`${styles.card} ${cat.wide ? styles.cardWide : ''}`}
          >
            <div className={styles.cardBg} />
            <div className={styles.cardGradient} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{cat.name}</h3>
              <p className={styles.cardSubtitle}>{cat.subtitle}</p>
            </div>
          </a>
        ))}
      </div>

      <div className={styles.secondaryGrid}>
        {rest.map((cat) => (
          <a
            key={cat.id}
            href={`/categoria/${cat.slug}`}
            className={styles.chip}
          >
            <span className={styles.chipName}>{cat.name}</span>
            <ArrowRight size={14} className={styles.chipArrow} />
          </a>
        ))}
      </div>
    </section>
  )
}
