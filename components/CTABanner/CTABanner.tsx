import { MessageCircle, ArrowRight } from 'lucide-react'
import styles from './CTABanner.module.css'

export default function CTABanner() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.industrialLine} />
        <h2 className={styles.title}>
          ¿No encuentras lo que buscas?
        </h2>
        <p className={styles.description}>
          Nuestros asesores técnicos están disponibles para ayudarte a encontrar el repuesto exacto para tu vehículo. Consúltanos por WhatsApp.
        </p>
        <div className={styles.actions}>
          <a href="https://wa.me/584100000000" className={styles.ctaWhatsapp} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={20} />
            Consultar por WhatsApp
          </a>
          <a href="/catalogo" className={styles.ctaSecondary}>
            Ver catálogo completo <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
