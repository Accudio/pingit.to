import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from 'styles/components/header.module.scss'

export default function Header() {
  const router = useRouter()

  const items = [
    {
      title: 'Receive',
      path: '/'
    },
    {
      title: 'Send',
      path: '/send'
    }
  ]

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        { items.map((item) => {
          let className = styles.link
          if (router.pathname === item.path) className += (' ' + styles['link--active'])
          return (
            <Link href={item.path}>
              <a className={className}>
                {item.title}
              </a>
            </Link>
          )
          }) }
      </nav>
    </header>
  )
}
