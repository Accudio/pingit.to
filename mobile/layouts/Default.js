import Head from 'components/Head'

const DefaultLayout = ({ children, meta }) => {
  return (
    <>
      <Head meta={meta} />
      <main className="app" aria-live="polite">
        {children}
      </main>
    </>
  )
}

export default DefaultLayout
