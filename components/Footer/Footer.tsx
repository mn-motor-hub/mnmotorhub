import { Instagram, Facebook } from 'lucide-react'
import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Contáctanos', href: '/contacto' },
  { label: 'Política de Envíos', href: '/envios' },
  { label: 'Devoluciones', href: '/devoluciones' },
  { label: 'Política de Privacidad', href: '/privacidad' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <a href="/" className={styles.brandName}>MN Motor Hub</a>
          <p className={styles.brandTagline}>
            Líderes en la distribución de repuestos automotrices de alto rendimiento en toda Venezuela.
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.social}>
          <p className={styles.socialLabel}>Redes Sociales</p>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialBtn} aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Facebook">
              <Facebook size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © 2025 MN Motor Hub. Precision Performance. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
