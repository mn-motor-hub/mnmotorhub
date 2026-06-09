import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import styles from './Navbar.module.css'

interface NavLink {
  label: string
  href: string
  target?: string
  rel?: string
}

const navLinks: NavLink[] = [
  { label: 'Productos', href: '#categorias' },
  { label: '¿Por qué nosotros?', href: '#por-que-nosotros' },
  { label: 'Contacto', href: 'https://wa.me/584100000000', target: '_blank', rel: 'noopener noreferrer' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.brandLogoWrap}>
            <Image
              src="/images/logo-motor-hub.png"
              alt="MN Motor Hub"
              fill
              className={styles.brandLogo}
              priority
              sizes="(max-width: 767px) 220px, 300px"
            />
          </span>
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={styles.link}
                target={link.target}
                rel={link.rel}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          {/* Account and cart — activate when auth and e-commerce are ready */}
          <button className={styles.mobileMenu} aria-label="Abrir menú">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}
