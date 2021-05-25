import MobileBanner from 'components/sidebar/MobileBanner.js'
import Search from 'components/sidebar/Search.js'
import Time from 'components/sidebar/Time.js'
import QRShare from 'components/sidebar/QRShare.js'
import NavWeb from 'components/sidebar/Nav.web.js'
import NavExtension from 'components/sidebar/Nav.extension.js'
import Credits from 'components/sidebar/Credits.js'

import styles from 'styles/components/sidebar.module.scss'

export default function Sidebar() {
  return (
    <aside className={`flow ${styles.sidebar}`}>
      <MobileBanner />
      <Search />
      <Time />
      <QRShare />
      { process.env.MODE === 'web' &&
        <NavWeb />
      }
      { process.env.MODE === 'extension' &&
        <NavExtension />
      }
      <Credits />
    </aside>
  )
}
