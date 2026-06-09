import { ShieldCheck, Package, Wrench, Truck } from 'lucide-react'
import styles from './WhyUs.module.css'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'PIEZAS QUE ENCAJAN',
    description:
      'Solo vendemos lo que funciona. Cada repuesto cumple especificaciones originales. Sin sorpresas al instalar.',
  },
  {
    icon: Package,
    title: 'SI LO BUSCAS, LO TENEMOS',
    description:
      'Kits de clutch y repuestos de mantenimiento disponibles hoy. No te mandamos a esperar.',
  },
  {
    icon: Wrench,
    title: 'TE DECIMOS LA VERDAD',
    description:
      'No te vendemos lo que no necesitas. Si no es tu pieza, te lo decimos. Si lo es, te explicamos por qué.',
  },
  {
    icon: Truck,
    title: 'LLEGA A DONDE ESTÉS',
    description:
      'Despachamos a todo Venezuela. Rápido, seguro y con seguimiento real de tu pedido.',
  },
]

export default function WhyUs() {
  return (
    <section id="por-que-nosotros" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className="section-accent" />
          <h2 className={styles.title}>ASÍ TRABAJAMOS</h2>
          <p className={styles.subtitle}>
            Familia venezolana. Stock permanente. Sin largas.
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
