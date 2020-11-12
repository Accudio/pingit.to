import Link from 'next/link'

import Head from 'components/Head'
import { XIcon } from '@common/components/Icons'

import styles from 'styles/layouts/all.module.scss'

const DefaultLayout = ({ children, meta }) => {
  return (
    <>
      <Head meta={meta} />
      <div className={styles.body}>
        <div className={`contain ${styles.contain}`}>
          <main className={`flow ${styles.page}`}>
            <Link href="/">
              <a className={styles.close}>
                <XIcon />
                <span className="sr-text">Back to home</span>
              </a>
            </Link>
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default DefaultLayout
