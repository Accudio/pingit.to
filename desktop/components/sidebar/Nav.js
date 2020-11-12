import Link from 'next/link'

import styles from 'styles/components/nav.module.scss'

import { ExternalIcon } from '@common/components/Icons'

export default function Nav() {
  return (
    <nav className="align-center">
      <ul role="list" className={styles.ul}>
        <li>
          <Link href="/how-to-use">
            <a>How to Use</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/privacy">
            <a>Privacy</a>
          </Link>
        </li>
        <li>
          <a href="https://m.pingit.to/">
            Mobile Client
            <ExternalIcon className="inline" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
