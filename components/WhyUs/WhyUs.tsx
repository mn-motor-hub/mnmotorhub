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
      'No te vendemos lo que no necesitas. Si no es tu pieza, te lo decimos. Si lo es, te explicamos por qué..',
  },
  {
    icon: Truck,
    title: 'Envíos Nacionales',
    description:
      'Despachamos a todo Venezuela. Rápido, seguro y con seguimiento real de tu pedido.',
  },
]

export default function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="section-accent" />
          <h2 className={styles.title}>ASÍ TRABAJAMOS</h2>
          <p className={styles.subtitle}>
          Repuestos reales. Respuesta inmediata.
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
