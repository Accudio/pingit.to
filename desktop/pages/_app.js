import 'styles/global/global.scss'

import styles from 'styles/layouts/all.module.scss'

import { TrackingContextProvider, Tracking } from 'components/Tracking'

import Sidebar from 'components/Sidebar.js'

function MyApp({ Component, pageProps }) {
  return (
    <TrackingContextProvider>
      <Tracking />
      <div className={styles.wrap}>
        <Sidebar />
        <div className={styles.main} aria-live="polite">
          <img src="https://source.unsplash.com/collection/140375/1920x1080" className="bg" alt="" width="1920" height="1080" loading="lazy" />
          <Component {...pageProps} />
        </div>
      </div>
    </TrackingContextProvider>
  )
}

export default MyApp
