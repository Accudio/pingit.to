import styles from 'styles/components/nav.module.scss'

import { ExternalIcon } from '@common/components/Icons'

export default function Nav() {
  return (
    <nav className="align-center">
      <ul role="list" className={styles.ul}>
        <li>
          <a href="https://pingit.to/how-to-use/">
            How to Use
          </a>
        </li>
        <li>
          <a href="https://pingit.to/about/">
            About
          </a>
        </li>
        <li>
          <a href="https://pingit.to/privacy/">
            Privacy
          </a>
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
