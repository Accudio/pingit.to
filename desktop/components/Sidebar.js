import Search from 'components/sidebar/Search.js'
import Time from 'components/sidebar/Time.js'
import QRShare from 'components/sidebar/QRShare.js'
import Nav from 'components/sidebar/Nav.js'
import Credits from 'components/sidebar/Credits.js'

import styles from 'styles/components/sidebar.module.scss'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <Search />
      <Time />
      <QRShare />
      <Nav />
      <Credits />
    </aside>
  )
}
