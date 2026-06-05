import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import '@/styles/globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MN Motor Hub — Repuestos Automotrices en Venezuela',
  description:
    'La mayor variedad de autopartes y accesorios en Venezuela. Calidad profesional garantizada para carros y motos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
