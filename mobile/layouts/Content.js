import Head from 'components/Head'

import contentStyles from 'styles/layouts/content.module.scss'

const ContentLayout = ({ children, meta }) => {
  return (
    <>
      <Head meta={meta} />
      <main className={`app flow ${contentStyles.main}`} aria-live="polite">
        {children}
      </main>
    </>
  )
}

export default ContentLayout
