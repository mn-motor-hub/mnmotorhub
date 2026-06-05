import { ArrowRight } from 'lucide-react'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.bgWrapper}>
        <div className={styles.bgPlaceholder} />
        <div className={styles.overlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.industrialLine} />
          <h1 className={styles.title}>
            Repuestos Originales para el Rendimiento de tu Vehículo
          </h1>
          <p className={styles.description}>
            La mayor variedad de autopartes y accesorios en Venezuela. Calidad
            profesional garantizada para carros y motos.
          </p>
          <div className={styles.ctas}>
            <a href="/catalogo" className={styles.ctaPrimary}>
              Ver catálogo
            </a>
            <a href="/contacto" className={styles.ctaSecondary}>
              Contactar Asesor
            </a>
          </div>

          <div className={styles.trustBadges}>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>✓</span>
              <span className={styles.badgeLabel}>Calidad OEM</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>🚚</span>
              <span className={styles.badgeLabel}>Envíos Nacionales</span>
            </div>
            <div className={styles.badge}>
              <span className={styles.badgeIcon}>⚙</span>
              <span className={styles.badgeLabel}>Soporte Técnico</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.decorative} aria-hidden="true">
        HUB
      </div>
    </section>
  )
}
