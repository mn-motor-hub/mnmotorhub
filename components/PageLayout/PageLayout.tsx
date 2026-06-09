import styles from './PageLayout.module.css'

interface PageLayoutProps {
  title: string
  subtitle?: string
  children: React.ReactNode
}

export default function PageLayout({ title, subtitle, children }: PageLayoutProps) {
  return (
    <>
      <div className={styles.heroBand}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>{title}</h1>
          {subtitle && <p className={styles.heroSubtitle}>{subtitle}</p>}
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
    </>
  )
}
