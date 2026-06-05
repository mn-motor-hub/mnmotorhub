import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, User, Menu } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Motor', href: '#' },
  { label: 'Frenos', href: '#' },
  { label: 'Iluminación', href: '#' },
  { label: 'Accesorios', href: '#' },
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
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Mi cuenta">
            <User size={24} />
          </button>
          <button className={styles.iconBtn} aria-label="Carrito de compras">
            <ShoppingCart size={24} />
            <span className={styles.cartBadge}>3</span>
          </button>
          <button className={styles.mobileMenu} aria-label="Abrir menú">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </header>
  )
}
