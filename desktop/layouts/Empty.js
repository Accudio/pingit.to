import Head from 'components/Head'

import styles from 'styles/layouts/all.module.scss'

const EmptyLayout = ({ meta }) => {
  return (
    <>
      <Head meta={meta} />
      <div className={styles.app} aria-live="polite"></div>
    </>
  )
}

export default EmptyLayout
