import Head from 'components/Head'

const EmptyLayout = ({ children, meta }) => {
  return (
    <>
      <Head meta={meta} />
      <div className="sr-text" aria-live="polite">
        {children}
      </div>
    </>
  )
}

export default EmptyLayout
