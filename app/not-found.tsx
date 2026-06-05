import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '24px',
      fontFamily: 'var(--font-inter)',
      color: 'var(--color-on-surface)',
      backgroundColor: 'var(--color-background)',
    }}>
      <h1 style={{ fontFamily: 'var(--font-oswald)', fontSize: '80px', color: 'var(--color-primary)', lineHeight: 1 }}>
        404
      </h1>
      <p style={{ color: 'var(--color-on-surface-variant)' }}>Página no encontrada</p>
      <Link href="/" style={{ color: 'var(--color-primary-container)', textDecoration: 'underline' }}>
        Volver al inicio
      </Link>
    </main>
  )
}
