import Link from 'next/link'
import { ShoppingCart, User, Menu } from 'lucide-react'
import styles from './Navbar.module.css'

const navLinks = [
  { label: 'Motor', href: '/categoria/motor' },
  { label: 'Frenos', href: '/categoria/frenos' },
  { label: 'Iluminación', href: '/categoria/iluminacion' },
  { label: 'Accesorios', href: '/categoria/accesorios' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          MN Motor Hub
        </Link>

        <ul className={styles.links}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Mi cuenta">
            <User size={20} />
          </button>
          <button className={styles.iconBtn} aria-label="Carrito de compras">
            <ShoppingCart size={20} />
            <span className={styles.cartBadge}>3</span>
          </button>
          <button className={styles.mobileMenu} aria-label="Abrir menú">
            <Menu size={20} />
          </button>
        </div>
      </nav>
    </header>
  )
}
