import { ShieldCheck, Package, Wrench, Truck } from 'lucide-react'
import styles from './WhyUs.module.css'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Garantía OEM',
    description:
      'Todos nuestros productos cumplen con los estándares originales del fabricante. Calidad certificada.',
  },
  {
    icon: Package,
    title: 'Stock Permanente',
    description:
      'Amplio inventario disponible para entrega inmediata. Sin esperas innecesarias.',
  },
  {
    icon: Wrench,
    title: 'Asesoría Técnica',
    description:
      'Nuestro equipo de mecánicos expertos te ayuda a encontrar exactamente lo que necesitas.',
  },
  {
    icon: Truck,
    title: 'Envíos Nacionales',
    description:
      'Llevamos tus repuestos a cualquier ciudad de Venezuela de forma rápida y segura.',
  },
]

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>¿Por qué elegirnos?</h2>
          <p className={styles.subtitle}>
            Más de una década respaldando el rendimiento de tu vehículo
          </p>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div key={pillar.title} className={styles.pillar}>
                <div className={styles.iconWrapper}>
                  <Icon size={28} className={styles.icon} />
                </div>
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarDesc}>{pillar.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
