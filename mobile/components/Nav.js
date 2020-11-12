import { useRouter } from 'next/router'

import Link from 'next/link'

import { UploadIcon, DownloadIcon, InfoIcon } from '@common/components/Icons'

import styles from 'styles/components/nav.module.scss'

export default function Header() {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" replace>
          <a className={styles.link + (router.pathname === '/' ? ` ${styles['link--active']}` : '')}>
            <UploadIcon />
            <span className="sr-text">Send</span>
          </a>
        </Link>
        <Link href="/receive" replace>
          <a className={styles.link + (router.pathname === '/receive' ? ` ${styles['link--active']}` : '')}>
            <DownloadIcon />
            <span className="sr-text">Receive</span>
          </a>
        </Link>
        <Link href="/info" replace>
          <a className={styles.link + (router.pathname === '/info' ? ` ${styles['link--active']}` : '')}>
            <InfoIcon />
            <span className="sr-text">Info</span>
          </a>
        </Link>
      </nav>
    </header>
  )
}
