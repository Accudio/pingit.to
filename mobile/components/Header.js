import Link from 'next/link'

import styles from 'styles/components/header.module.scss'

export default function Header() {
  const items = [
    {
      title: 'Send',
      path: '/'
    },
    {
      title: 'Receive',
      path: '/receive'
    }
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        { items.map((item) => (
          <Link href={item.path}>
            <a className={styles.link}>{item.title}</a>
          </Link>
        )) }
      </nav>
    </header>
  )
}
