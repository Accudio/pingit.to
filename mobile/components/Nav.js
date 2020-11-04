import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from 'styles/components/nav.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/">
          <a className={styles.link + (router.pathname === '/' ? ` ${styles['link--active']}` : '')}>
            S
            <span className="sr-text">Send</span>
          </a>
        </Link>
        <Link href="/receive">
          <a className={styles.link + (router.pathname === '/receive' ? ` ${styles['link--active']}` : '')}>
            R
            <span className="sr-text">Receive</span>
          </a>
        </Link>
        <button className={styles.button}>
          A
          <span className="sr-text">Add to Homescreen</span>
        </button>
        <Link href="/info">
          <a className={styles.link + (router.pathname === '/info' ? ` ${styles['link--active']}` : '')}>
            I
            <span className="sr-text">Info</span>
          </a>
        </Link>
      </nav>
    </header>
  )
}
