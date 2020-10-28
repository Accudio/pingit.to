import Header from 'components/Header.js'

import styles from 'styles/layouts/default.module.scss'

const DefaultLayout = ({ children }) => {

  return (
    <div className="layout layout--default">
      <img src="https://source.unsplash.com/random/1920x1080?landscape" className="bg" alt="" width="1920" height="1080" loading="lazy" />
      <Header />

      <div className={styles.app}>
        {children}
      </div>
    </div>
  )
}

export default DefaultLayout
