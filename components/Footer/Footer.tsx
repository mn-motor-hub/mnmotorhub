import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

const footerLinks = [
  { label: 'Contáctanos', href: '/contacto' },
  { label: 'Política de Envíos', href: '/envios' },
  { label: 'Devoluciones', href: '/devoluciones' },
  { label: 'Política de Privacidad', href: '/privacidad' },
]

function IconInstagram() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconFacebook() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Link href="/" className={styles.brandName}>
            <span className={styles.brandLogoWrap}>
              <Image
                src="/images/logo-motor-hub.png"
                alt="MN Motor Hub"
                fill
                className={styles.brandLogo}
                sizes="(max-width: 767px) 220px, 300px"
              />
            </span>
          </Link>
          <p className={styles.brandTagline}>
            Líderes en la distribución de repuestos automotrices de alto rendimiento en toda Venezuela.
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.social}>
          <p className={styles.socialLabel}>Redes Sociales</p>
          <div className={styles.socialIcons}>
            <a href="https://www.instagram.com/mnmotorhub/" className={styles.socialBtn} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <IconInstagram />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61590356652354" className={styles.socialBtn} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook />
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
